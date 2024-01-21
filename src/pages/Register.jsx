import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Api from '~/apis'

import { TextField } from '~/components'
import { useDebounce } from '~/hooks'

export const Register = () => {

  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [errorUsername, setErrorUsername] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorEmail, setErrorEmail] = useState('')

  const { t } = useTranslation()

  const usernameDebounce = useDebounce(username, 1000)
  const phoneDebounce = useDebounce(phone, 1000)
  const emailDebounce = useDebounce(email, 1000)


  const onChangePhone = e => {
    setErrorPhone('')
    setPhone(e.target.value)
  }
  const onChangeUsername = e => {
    setErrorUsername('')
    setUsername(e.target.value)
  }
  const onChangeEmail = e => {
    setErrorEmail('')
    setEmail(e.target.value)
  }

  const phonePattern = /^0\d{9}$/
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const usernamePattern = /^[a-zA-Z0-9_.]+$/
  const checkPhone = () => {
    if (!phone) return ''
    return phonePattern.test(phone) ? '' : 'Invalid phone number'
  }
  const checkEmail = () => {
    if (!email) return ''
    return emailPattern.test(email) ? '' : 'Invalid email'
  }
  const checkUsername = () => {
    if (!username) return ''
    if (username.length < 5) return 'Username length must be greater than 5'
    return usernamePattern.test(username) ? '' : 'Invalid username'
  }

  const checkForm = () => {
    let result = true
    if (!username || !password || !fullName) return false
    result &= username.length >= 0
    if (phone) result &= phonePattern.test(phone)
    if (email) result &= emailPattern.test(email)
    return result
  }

  const handleRegister = async () => {
    const validForm = checkForm()
    console.log(validForm)
    if (!validForm) return
    if (!username || !password || !fullName) return
    const formData = new FormData()
    formData.append('fullName', fullName)
    formData.append('username', username)
    formData.append('password', password)
    if (phone) formData.append('phone', phone)
    if (email) formData.append('email', email)
    const response = await Api.Auth.register(formData)
    console.log(response)
  }

  useEffect(() => {
    if (phone) setErrorPhone(checkPhone())
  }, [phoneDebounce])
  useEffect(() => {
    if (email) setErrorEmail(checkEmail())
  }, [emailDebounce])
  useEffect(() => {
    if (username) setErrorUsername(checkUsername())
  }, [usernameDebounce])

  return (
    <div className='Login w-full min-h-[400px] md:min-h-[calc(100vh-80px)] flex flex-col md:flex-row'>
      <div className='md:flex-1 center py-12'>
        <span className='text-4xl font-bold border-b-[4px] border-black dark:border-white pb-3 transition-colors'>{t("Register")}</span>
      </div>
      <div className='md:flex-1 center md:border-l md:py-8 md:px-4'>
        <div className='w-full max-w-[500px] h-96 gap-6 flex flex-col'>
          <TextField
            label={t("Full Name")}
            value={fullName}
            required={true}
            onChange={e => setFullName(e.target.value)} />
          <TextField
            label={t("Username")}
            required={true}
            value={username}
            error={Boolean(errorUsername)}
            helperText={errorUsername}
            onChange={onChangeUsername} />
          <TextField
            label={t("Password")}
            type={'password'}
            required={true}
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <TextField
            label={t("Phone")}
            value={phone}
            type='number'
            error={Boolean(errorPhone)}
            helperText={errorPhone}
            maxLength={10}
            onChange={onChangePhone} />
          <TextField
            label={t("Email")}
            value={email}
            error={Boolean(errorEmail)}
            helperText={errorEmail}
            onChange={onChangeEmail} />
          <div className='flex flex-row gap-2 items-center'>
            <button
              className='border border-gray-450 rounded h-12 w-40 text-sm font-semibold active:scale-95 transition-all hover:opacity-80'
              onClick={handleRegister}>
              {t("Register")}
            </button>
            <div>
              {t("or")} <Link to='/login'>
                <span className='text-blue-500 font-semibold hover:underline'>{t("Login")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}