import { ChangeEventHandler } from 'react'

type TextFieldProps = {
  className?: String,
  label?: String,
  required: Boolean,
  cx: {
    wrapper: String,
    input: String,
    label: String,
    helperText: String
  },
  value?: String,
  onChange: ChangeEventHandler<HTMLInputElement>,
  maxLength?: Number,
  type: 'text' | 'password' | 'number',
  helperText?: String,
  error: Boolean
}

export type TextField = (props: TextFieldProps) => JSX.Element