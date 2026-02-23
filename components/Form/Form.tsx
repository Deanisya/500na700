"use client";

import { IMaskInput } from "react-imask";
import { useForm } from "@/hooks/useForm";
import s from "./Form.module.scss";

type FormProps = {
  onSuccess?: () => void;
};

export default function Form({ onSuccess }: FormProps) {
  const {
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
  } = useForm({ onSuccess });

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <form
      className={s.feedbackForm}
      onSubmit={handleSubmit}
      style={{
        ["--checkbox-icon" as string]: `url('${basePath}/icons/checkbox.svg')`,
      }}
    >
      <div className={s.formField}>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          className={s.formFieldInput}
          placeholder="Имя"
        />
        {errors.name && <span className={s.formFieldError}>{errors.name}</span>}
      </div>

      <div className={s.formField}>
        <IMaskInput
          id="phone"
          mask="+7 (000) 000-00-00"
          value={phone}
          onAccept={handlePhoneAccept}
          className={s.formFieldInput}
          placeholder="Телефон"
        />
        {errors.phone && <span className={s.formFieldError}>{errors.phone}</span>}
      </div>

      <div className={s.formField}>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={s.formFieldInput}
          placeholder="Email"
        />
        {errors.email && <span className={s.formFieldError}>{errors.email}</span>}
      </div>

      <div className={`${s.formField} ${s.formFieldConsent}`}>
        <label className={s.formCheckboxLabel}>
          <input
            type="checkbox"
            checked={consent}
            onChange={handleConsentChange}
            className={s.formCheckboxInput}
            aria-describedby="consent-text"
          />
          <span className={s.formCheckboxMark} aria-hidden />
          <span id="consent-text" className={s.formConsentText}>
            Я согласен (-а) на обработку персональных данных
          </span>
        </label>
        {errors.consent && <span className={s.formFieldError}>{errors.consent}</span>}
      </div>

      <button type="submit" className={s.formSubmitButton}>
        <span className={s.formSubmitButtonLabel}>Отправить</span>
      </button>
    </form>
  );
}
