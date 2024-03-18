import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Api from '~/apis'
import base from '~/apis/base'
import { TextField } from '~/components'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (!username || !password) return
    const response = await Api.Auth.login({
      username: username,
      password: password
    })
    console.log(response)
  }

  const { t } = useTranslation()

  return (
    <div className='Login w-full min-h-[400px] md:min-h-[calc(100vh-80px)] flex flex-col md:flex-row'>
      <div className='md:flex-1 center py-12'>
        <span className='text-4xl font-bold border-b-[4px] border-black dark:border-white pb-3 transition-colors'>{t("Login").toUpperCase()}</span>
      </div>
      <div className='md:flex-1 center md:border-l md:py-8 md:px-4'>
        <div className='w-full max-w-[500px] gap-6 flex flex-col'>
          <TextField
            label={`${t('Username')} / ${t('Phone')} / ${t('Email')}`}
            required={true}
            value={username}
            onChange={e => setUsername(e.target.value)} />
          <TextField
            label={t("Password")}
            type={'password'}
            required={true}
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <div className='flex flex-row gap-2 items-center'>
            <button
              className='border border-gray-450 rounded h-12 w-40 text-sm font-semibold active:scale-99 transition-all hover:opacity-80'
              onClick={handleLogin}>
              {t("Login")}
            </button>
            <div className='flex flex-col gap-1 ml-3'>
              <button className='font-semibold hover:opacity-70 active:scale-98 transition-transform'>
                <span>{t("ForgetPassword")}</span>
              </button>
              <Link to='/register'>
                <span className='text-blue-500 font-semibold hover:underline'>{t("Register")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}