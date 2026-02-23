"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_LENGTH = 18; // +7 (000) 000-00-00

type UseFormOptions = {
  onSuccess?: () => void;
};

export function useForm({ onSuccess }: UseFormOptions = {}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!name.trim()) errs.name = "Обязательное поле";
    if (!EMAIL_REGEX.test(email)) errs.email = "Введите корректный email";
    if (phone.length < PHONE_LENGTH) errs.phone = "Введите номер телефона";
    if (!consent) errs.consent = "Необходимо согласие";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    console.log({ name: name.trim(), email, phone, consent });
    onSuccess?.();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrors((prev) => ({ ...prev, name: "" }));
  };

  const handlePhoneAccept = (value: string | undefined) => {
    setPhone(value ?? "");
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsent(e.target.checked);
    setErrors((prev) => ({ ...prev, consent: "" }));
  };

  return {
    name,
    phone,
    email,
    consent,
    errors,
    handleSubmit,
    handleNameChange,
    handlePhoneAccept,
    handleEmailChange,
    handleConsentChange,
  };
}
