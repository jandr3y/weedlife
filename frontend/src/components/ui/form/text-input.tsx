"use client"

import { useEffect, useRef, useState, InputHTMLAttributes } from "react"
import dynamic from "next/dynamic"
import { IntlTelInputRef } from "intl-tel-input/react"

const IntlTelInput = dynamic(() => import("intl-tel-input/reactWithUtils"), {
  ssr: false,
})

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  phone?: boolean,
  error?: { _errors: string[] }|null,
  forceError?: boolean
  onPhoneChange?: (v: string) => void,
  rootClass?: string,
  initialValue?: string
}


export default function TextInput({ label, phone, error, forceError, rootClass = '', initialValue, onPhoneChange, ...props }: Props) {
  const [isTouched, setIsTouched] = useState(false)
  const telInputRef = useRef<IntlTelInputRef | null>(null)

  useEffect(() => {
    if (forceError) setIsTouched(forceError)
  }, [forceError])

  const _onChangePhone = () => {
    if (onPhoneChange) {
      const instance = telInputRef.current?.getInstance()
      const value = telInputRef.current?.getInput()?.value.replace(/\D/g, '')
      if (value !== '') {
        onPhoneChange(`${instance?.getSelectedCountryData().dialCode}${value}`)
      }
    }
  }

  useEffect(() => {
    if (phone) {
      const input = telInputRef.current?.getInput()
      if (input) {
        console.log('-a', input.value)
        input.value = input.value.replace(/\D/g, '')
      }
    }
  }, [phone, props.value])

  return (
    <div className={rootClass}>
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      {!phone && (
        <input
          {...props}
          onFocus={() => setIsTouched(true)}
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 outline-0"
        />
      )}
      {phone && (
        <IntlTelInput
          onChangeNumber={_onChangePhone}
          ref={telInputRef}
          initialValue={initialValue}
          initOptions={{
            initialCountry: "auto",
            separateDialCode: true,
            geoIpLookup: (success, failure) => {
              fetch("https://ipapi.co/json")
                .then((res) => res.json())
                .then((data) => success(data.country_code))
                .catch(() => failure());
            }
          }}
        />
      )}
      <span className="text-xs text-red-500">
        {error && isTouched ? error._errors?.join("") : ""}
      </span>
    </div>
  )
}
