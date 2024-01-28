import { ChangeEventHandler } from 'react'
import { Product } from './object'

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


type Option = {
  value: String,
  display: String,
  disable: Boolean,
  checked: Boolean
}
type SelectProps = {
  className?: String,
  checkBox?: Boolean
  label: String,
  value: String,
  cx?: {
    wrapper: String,
    item: String,
    menu: String,
    value: String,
    label: String
  },
  options: Option[],
  disable?: Boolean,
  onSelect?: (option: Option) => void,
  closeAfterSelect: Boolean
  ref: any
}
export type Select = (props: SelectProps) => JSX.Element

type CheckBoxProps = {
  className?: String,
  cx: {
    label: String,
    check: String
  },
  disable: Boolean,
  checked: Boolean,
  label: String
}
export type CheckBox = (props: CheckBoxProps) => JSX.Element

type GridProductProps = {
  className?: String,
  products: Product[]
}
export type GridProduct = (props: GridProductProps) => JSX.Element