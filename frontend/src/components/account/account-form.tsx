"use client";
import TextInput from "@/components/ui/form/text-input";
import useBackendApi from "@/services/BackendApi/backendApi";
import "intl-tel-input/styles";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { z } from "zod";
import Button from "../ui/form/button";
import useForm, { ErrorState } from "@/hooks/useForm";
import { AxiosError } from "axios";
import { User } from "@/services/BackendApi/interfaces";
import { createUserValidation, updateUserValidation } from "./validations";

interface GenericMessage {
  message: string,
  type: 'success'|'danger'
}

type Props = {
  user?: User
}
export default function AccountForm({ user }: Props) {

  const backendApi = useBackendApi()
  const params = useParams()
  const [genericMessage, setGenericMessage] = useState<null|GenericMessage>(null)
  const t = useTranslations('Global')
  const [forceDisplayError, setForceDisplayError] = useState(false);
  const router = useRouter()
  const { setErrors, inputAttrs, onInputChange, setForm, form, addError } = useForm<User>({
    name: '',
    document: '',
    phone: '',
    birthdate: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  useEffect(() => {
    if (user) {
      setForm({ ...user, phone: '+' + user.phone })
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const validate = (submit: boolean = false) => {
    const data = {
      ...form,
      birthdate: new Date(form.birthdate)
    }

    try {
      if (user) {
        updateUserValidation.parse(data)
      } else {
        createUserValidation.parse(data)
      }
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const zodErrors = err.format()
        setErrors(zodErrors as ErrorState<User>)

        if (submit) {
          setForceDisplayError(true)
        }
      }

      return false
    }
  }

  const onUpdatePhone = (phone: string) => {
    if (form.phone === phone) return
    setForm(prev => {
      return {
        ...prev,
        phone
      }
    })
  }

  const handleApiErrors = (err: AxiosError<{ message?: string }>) => {
    const { response } = err
    if (response?.data && response?.data.message === 'EMAIL_ALREADY_REGISTERED') {
      addError('email', t('errors.EMAIL_ALREADY_REGISTERED'))
    }

    if (response?.data && response.data.message === 'BAD_INVITE_CODE') {
      setGenericMessage({
        type: 'danger',
        message: t('errors.BAD_INVITE_CODE')
      })
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if(validate(true)) {
      const body = { ...form, invite_code: params.slug }
      if (!user) {
        backendApi.user.create(body)
          .then(() => router.push('/auth/login?from=account_created&email=' + form.email))
          .catch(handleApiErrors)
      }

      backendApi.user.update(body)
        .then(() => setGenericMessage({
          message: 'User updated',
          type: 'success'
        }))
        .catch(() => setGenericMessage({
          message: 'Fail to update user',
          type: 'danger'
        }))
    }

  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-5">
        <TextInput
          {...inputAttrs('name')}
          onChange={onInputChange}
          forceError={forceDisplayError}
        />
      </div>
      <div className="mb-5 flex justify-between gap-5">
        <div className="flex-1">
          <TextInput
            {...inputAttrs('document')}
            onChange={onInputChange}
            forceError={forceDisplayError}
          />
        </div>
        <div className="flex-1">
          <TextInput
            {...inputAttrs('birthdate')}
            type="date"
            onChange={onInputChange}
            forceError={forceDisplayError}
          />
        </div>
      </div>
      <div className="mb-5 flex justify-between gap-5">
        <div className="flex-1">
          <TextInput
            {...inputAttrs('email')}
            onChange={onInputChange}
            readOnly={!!user}
            forceError={forceDisplayError}
          />
        </div>
        <div className="flex-1">
          <TextInput
            {...inputAttrs('phone')}
            onPhoneChange={onUpdatePhone}
            forceError={forceDisplayError}
            initialValue={form.phone}
            phone
          />
        </div>
      </div>
      {
        !user && (
          <div className="mb-5 flex justify-between gap-5">
            <div className="flex-1">
              <TextInput
                type="password"
                {...inputAttrs('password')}
                forceError={forceDisplayError}
                onChange={onInputChange}
              />
            </div>
            <div className="flex-1">
              <TextInput
                type="password"
                {...inputAttrs('passwordConfirm')}
                forceError={forceDisplayError}
                onChange={onInputChange}
              />
            </div>
          </div>
        )
      }
      {
        genericMessage && (
          <div className={"text-sm mb-4 " + (genericMessage.type === 'success' ? 'text-green-700' : 'text-red-600 ')}>
            { genericMessage.message }
          </div>
        )
      }
      {
        !user && false && (
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
          </div>
        )
      }
      <Button type="submit">
        { user ? t('save') : t('create_account') }
      </Button>
    </form>
  )
}