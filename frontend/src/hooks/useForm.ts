import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";

export type ErrorState<T> = {
  [K in keyof T]?: { _errors: string[] };
};

export default function useForm<T>(initialData: T) {
  const ft = useTranslations('Global')
  const [form, setForm] = useState<T>(initialData);
  const [errors, setErrors] = useState<ErrorState<T>|null>(null);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, [e.target.name]: null }))
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const addError = (field: string, message: string) => {
    setErrors({
      ...errors,
      [field]: { 
        _errors: [message]
      }
    })
  }

  const inputAttrs = (key: keyof T) => {
    return {
      name: key,
      label: ft(key.toString()),
      placeholder: ft(key.toString() + '_placeholder'),
      value: form[key],
      error: errors ? errors[key] : null,
      onChange: onInputChange
    }
  }

  return {
    form,
    errors,
    onInputChange,
    inputAttrs,
    setForm,
    addError,
    setErrors
  }
}