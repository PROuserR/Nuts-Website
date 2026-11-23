'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, Minus, Plus, Trash2, X } from 'lucide-react';
import { useCart } from './CartProvider';
import { useLanguage } from './LanguageProvider';
import { ResilientImage } from './ResilientImage';
import {
  calculatePackPrice,
  formatEur,
  formatWeightLabel,
} from '@/lib/pricing';

interface CheckoutFormState {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  postalCode?: string;
}

export function BagDrawer() {
  const { items, totals, isOpen, closeCart, updateQuantity, removeItem, clearCart } =
    useCart();
  const { t, dir } = useLanguage();
  const [step, setStep] = useState<'bag' | 'checkout' | 'confirmed'>('bag');
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [confirmedTotal, setConfirmedTotal] = useState<number>(0);
  const [form, setForm] = useState<CheckoutFormState>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeCart]);

  const handleClose = () => {
    closeCart();
    if (step === 'confirmed') {
      setStep('bag');
    }
  };

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = t.bag.errName;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t.bag.errEmail;
    }
    if (form.phone.trim().length < 6) {
      nextErrors.phone = t.bag.errPhone;
    }
    if (form.address.trim().length < 5) {
      nextErrors.address = t.bag.errAddress;
    }
    if (form.postalCode.trim().length < 3) {
      nextErrors.postalCode = t.bag.errPostal;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const generatedOrder = `SN-${Math.floor(1040 + (totals.total * 13) % 890)}`;
    setOrderNumber(generatedOrder);
    setConfirmedTotal(totals.total);
    setErrors({});
    clearCart();
    setStep('confirmed');
  };

  const slideOffset = dir === 'rtl' ? '-100%' : '100%';

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label={t.bag.titleBag}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#140E0A]/55 backdrop-blur-[2px]"
          />

          <motion.aside
            initial={{ x: slideOffset }}
            animate={{ x: 0 }}
            exit={{ x: slideOffset }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex h-full w-full max-w-md flex-col border-s border-[#E0D6C5] bg-[#F7F3EB] text-[#241C15] shadow-2xl dark:border-[#3F3025] dark:bg-[#1C1510] dark:text-[#F3EAD9]"
          >
            <div className="flex items-center justify-between border-b border-[#E0D6C5] px-5 py-4 dark:border-[#3F3025]">
              <div>
                <h2 className="font-display text-lg font-semibold">
                  {step === 'bag' && t.bag.titleBag}
                  {step === 'checkout' && t.bag.titleCheckout}
                  {step === 'confirmed' && t.bag.titleConfirmed}
                </h2>
                {step === 'bag' && (
                  <p className="text-xs text-[#695A4C] dark:text-[#BCAA95] tabular-nums">
                    {totals.itemCount}{' '}
                    {totals.itemCount === 1
                      ? t.bag.packsSelectedSingular
                      : t.bag.packsSelectedPlural}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17] dark:hover:bg-[#30241C] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {step === 'bag' && items.length > 0 && (
              <div className="border-b border-[#E0D6C5] bg-[#EFE8DA]/70 px-5 py-3 dark:border-[#3F3025] dark:bg-[#261D17]">
                <p className="text-xs text-[#695A4C] dark:text-[#BCAA95] tabular-nums">
                  {totals.freeShippingRemaining === 0
                    ? t.bag.freeShippingUnlocked
                    : `${t.bag.freeShippingAddPrefix} ${formatEur(totals.freeShippingRemaining)} ${t.bag.freeShippingAddSuffix}`}
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#E0D6C5] dark:bg-[#3F3025]">
                  <div
                    className="h-full bg-[#2E5A36] dark:bg-[#5B9A62] transition-all duration-200"
                    style={{ width: `${totals.freeShippingProgressPercent}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-5 py-5">
              {step === 'confirmed' ? (
                <div className="space-y-5 py-6">
                  <div className="flex items-start gap-3 rounded-xl border border-[#2E5A36]/30 bg-[#2E5A36]/10 p-4 dark:border-[#5B9A62]/30 dark:bg-[#5B9A62]/15">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#2E5A36] dark:text-[#5B9A62]"
                      aria-hidden="true"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">
                        {t.bag.confirmedHeadingPrefix}
                        {orderNumber} {t.bag.confirmedHeadingSuffix}
                      </p>
                      <p className="text-xs leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
                        {t.bag.confirmedBodyPrefix} {form.fullName}. {t.bag.confirmedBodyMid}{' '}
                        {form.address} ({form.postalCode}).
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#E0D6C5] bg-[#FCF9F2] p-4 text-sm dark:border-[#3F3025] dark:bg-[#261D17]">
                    <div className="flex justify-between py-1">
                      <span className="text-[#695A4C] dark:text-[#BCAA95]">
                        {t.bag.confirmationEmail}
                      </span>
                      <span className="font-medium">{form.email}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#695A4C] dark:text-[#BCAA95]">
                        {t.bag.paymentMethod}
                      </span>
                      <span className="font-medium">{t.bag.paymentMethodValue}</span>
                    </div>
                    <div className="mt-2 flex justify-between border-t border-[#E0D6C5] pt-2 font-semibold dark:border-[#3F3025] tabular-nums">
                      <span>{t.bag.orderTotal}</span>
                      <span>{formatEur(confirmedTotal)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setStep('bag');
                      closeCart();
                    }}
                    className="w-full rounded-lg bg-[#2E5A36] px-4 py-2.5 text-sm font-medium text-[#FAF7F0] hover:bg-[#23472A] dark:bg-[#5B9A62] dark:text-[#141D15] dark:hover:bg-[#6BAE72] transition-colors cursor-pointer"
                  >
                    {t.bag.continueBrowsing}
                  </button>
                </div>
              ) : items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <p className="font-display text-lg font-semibold">
                    {t.bag.emptyTitle}
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-[#695A4C] dark:text-[#BCAA95]">
                    {t.bag.emptyBody}
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-6 rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-4 py-2 text-sm font-medium hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17] dark:hover:bg-[#30241C] cursor-pointer"
                  >
                    {t.bag.browseCollection}
                  </button>
                </div>
              ) : step === 'bag' ? (
                <ul className="divide-y divide-[#E0D6C5] dark:divide-[#3F3025]">
                  {items.map((item) => {
                    const packPrice = calculatePackPrice(
                      item.pricePerKg,
                      item.weightGrams
                    );
                    const lineTotal = packPrice * item.quantity;
                    const localizedName = t.products[item.productId]?.name ?? item.name;

                    return (
                      <li key={item.key} className="flex gap-4 py-4">
                        <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-[#EFE8DA] dark:bg-[#30241C]">
                          <ResilientImage
                            src={item.image}
                            alt={localizedName}
                            sizes="96px"
                            className="h-full w-full object-cover"
                            label={localizedName}
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="text-sm font-semibold leading-snug">
                                {localizedName}
                              </h3>
                              <p className="mt-0.5 font-mono text-xs text-[#695A4C] dark:text-[#BCAA95] tabular-nums">
                                {formatWeightLabel(item.weightGrams)} · {formatEur(packPrice)}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.key)}
                              aria-label={`Remove ${localizedName}`}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#695A4C] hover:bg-[#EFE8DA] hover:text-[#241C15] dark:text-[#BCAA95] dark:hover:bg-[#30241C] dark:hover:text-[#F3EAD9] cursor-pointer"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="inline-flex items-center rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] dark:border-[#3F3025] dark:bg-[#261D17]">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.key, item.quantity - 1)
                                }
                                aria-label={`Decrease quantity of ${localizedName}`}
                                className="inline-flex h-8 w-8 items-center justify-center hover:bg-[#EFE8DA] dark:hover:bg-[#30241C] cursor-pointer"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span
                                className="w-8 text-center font-mono text-xs font-medium tabular-nums"
                                aria-label={`Quantity ${item.quantity}`}
                              >
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.key, item.quantity + 1)
                                }
                                aria-label={`Increase quantity of ${localizedName}`}
                                className="inline-flex h-8 w-8 items-center justify-center hover:bg-[#EFE8DA] dark:hover:bg-[#30241C] cursor-pointer"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>

                            <span className="font-mono text-sm font-semibold tabular-nums">
                              {formatEur(lineTotal)}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <form
                  id="roastery-checkout-form"
                  onSubmit={validateAndSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <p className="text-xs leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
                    {t.bag.checkoutNote}
                  </p>

                  <div>
                    <label
                      htmlFor="checkout-name"
                      className="block text-xs font-medium text-[#241C15] dark:text-[#F3EAD9]"
                    >
                      {t.bag.fullName}
                    </label>
                    <input
                      id="checkout-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, fullName: e.target.value }))
                      }
                      placeholder="Layla Mansour"
                      className="mt-1.5 w-full rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-3 py-2 text-sm text-[#241C15] focus:border-[#2E5A36] focus:outline-none dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:focus:border-[#5B9A62]"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-700 dark:text-red-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="checkout-email"
                      className="block text-xs font-medium text-[#241C15] dark:text-[#F3EAD9]"
                    >
                      {t.bag.email}
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="layla@example.com"
                      className="mt-1.5 w-full rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-3 py-2 text-sm text-[#241C15] focus:border-[#2E5A36] focus:outline-none dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:focus:border-[#5B9A62]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-700 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="checkout-phone"
                      className="block text-xs font-medium text-[#241C15] dark:text-[#F3EAD9]"
                    >
                      {t.bag.phone}
                    </label>
                    <input
                      id="checkout-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      placeholder="+49 431 555 0142"
                      className="mt-1.5 w-full rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-3 py-2 text-sm text-[#241C15] focus:border-[#2E5A36] focus:outline-none dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:focus:border-[#5B9A62]"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-700 dark:text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label
                        htmlFor="checkout-address"
                        className="block text-xs font-medium text-[#241C15] dark:text-[#F3EAD9]"
                      >
                        {t.bag.address}
                      </label>
                      <input
                        id="checkout-address"
                        type="text"
                        value={form.address}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, address: e.target.value }))
                        }
                        placeholder="Holstenstraße 14, Kiel"
                        className="mt-1.5 w-full rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-3 py-2 text-sm text-[#241C15] focus:border-[#2E5A36] focus:outline-none dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:focus:border-[#5B9A62]"
                      />
                      {errors.address && (
                        <p className="mt-1 text-xs text-red-700 dark:text-red-400">
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="checkout-postal"
                        className="block text-xs font-medium text-[#241C15] dark:text-[#F3EAD9]"
                      >
                        {t.bag.postalCode}
                      </label>
                      <input
                        id="checkout-postal"
                        type="text"
                        value={form.postalCode}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, postalCode: e.target.value }))
                        }
                        placeholder="24103"
                        className="mt-1.5 w-full rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-3 py-2 text-sm text-[#241C15] focus:border-[#2E5A36] focus:outline-none dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:focus:border-[#5B9A62]"
                      />
                      {errors.postalCode && (
                        <p className="mt-1 text-xs text-red-700 dark:text-red-400">
                          {errors.postalCode}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </div>

            {items.length > 0 && step !== 'confirmed' && (
              <div className="border-t border-[#E0D6C5] bg-[#F7F3EB] px-5 py-4 dark:border-[#3F3025] dark:bg-[#1C1510]">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-[#695A4C] dark:text-[#BCAA95] tabular-nums">
                    <span>{t.bag.subtotal}</span>
                    <span>{formatEur(totals.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#695A4C] dark:text-[#BCAA95] tabular-nums">
                    <span>{t.bag.shipping}</span>
                    <span>
                      {totals.shipping === 0
                        ? t.bag.complimentary
                        : formatEur(totals.shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-[#E0D6C5] pt-2 text-base font-semibold dark:border-[#3F3025] tabular-nums">
                    <span>{t.bag.total}</span>
                    <span>{formatEur(totals.total)}</span>
                  </div>
                </div>

                {step === 'bag' ? (
                  <button
                    type="button"
                    onClick={() => setStep('checkout')}
                    data-testid="proceed-checkout-button"
                    className="mt-4 w-full rounded-lg bg-[#2E5A36] px-4 py-2.5 text-sm font-medium text-[#FAF7F0] hover:bg-[#23472A] dark:bg-[#5B9A62] dark:text-[#141D15] dark:hover:bg-[#6BAE72] transition-colors cursor-pointer"
                  >
                    {t.bag.proceedCheckout}
                  </button>
                ) : (
                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('bag')}
                      className="rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-4 py-2.5 text-sm font-medium hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17] dark:hover:bg-[#30241C] cursor-pointer"
                    >
                      {t.bag.back}
                    </button>
                    <button
                      type="submit"
                      form="roastery-checkout-form"
                      data-testid="confirm-order-button"
                      className="flex-1 rounded-lg bg-[#2E5A36] px-4 py-2.5 text-sm font-medium text-[#FAF7F0] hover:bg-[#23472A] dark:bg-[#5B9A62] dark:text-[#141D15] dark:hover:bg-[#6BAE72] transition-colors cursor-pointer"
                    >
                      {t.bag.confirmOrder}
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
