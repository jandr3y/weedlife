"use client";
import Button from "@/components/ui/form/button"
import TextInput from "@/components/ui/form/text-input"
import useForm from "@/hooks/useForm";
import UserContext from "@/store/context/user";
import axios from "axios";
import { useTranslations } from "next-intl"
import Link from "next/link"
import { redirect } from "next/navigation";
import { FormEvent, ReactNode, useContext, useEffect, useState } from "react"
import { z } from "zod";

interface InfoInterface {
  title: string,
  message: string|ReactNode
}

const v = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export default function LoginPage() {
  const gt = useTranslations('Global')
  const user = useContext(UserContext)
  const [info, setInfo] = useState<InfoInterface|null>(null);

  const { inputAttrs, form, setErrors } = useForm({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (window && window.location.search) {
      const searchParams = new URLSearchParams(window.location.search)
      if (searchParams.get('from') === 'account_created') {
        setInfo({
          title: gt('account.please_confirm_email.title'),
          message: gt.rich('account.please_confirm_email.message', { 
            email: () => <strong>{ searchParams.get('email') }</strong>
          })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validate = v.safeParse(form)
    if (validate.success) {
      const { data } = await axios.post('/api/login', form)
      if (user.setData) {
        user.setData(data.user)
      } 
      redirect('/account')
    } else {
      setErrors(validate.error.format())
    }
  }

  if (info) {
    return (
      <div className="max-w-sm mx-auto">
        <h2 className="text-2xl mb-16 font-semibold">{ info.title }</h2>  
        <div className="my-8">{ info.message }</div>
        <Button className="mt-4" onClick={() => setInfo(null)}>{ gt('signin')} </Button>
      </div>
    )
  }

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl mb-16 font-semibold">{ gt('title_login') }</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <TextInput type="email" {...inputAttrs('email')} />
        </div>
        <div className="mb-6">
          <TextInput type="password" {...inputAttrs('password')} />
        </div>
        <div className="flex justify-between items-center">
          <Link className="link" href="/auth/recover">
          { gt('forgot_password') }
          </Link>
          <Button>{ gt('signin') }</Button>
        </div>
      </form>
    </div>
  )
}