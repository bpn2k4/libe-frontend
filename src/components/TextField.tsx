import { twMerge } from 'tailwind-merge'
import { useId } from 'react'
import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel, IconEye, IconEyeClose } from './Icon'


const TextField = (props: TextFieldProps) => {

  const {
    className,
    label,
    placeholder,
    type,
    textarea,
    disabled,
    iconLeft,
    iconRight,
    showButtonClear,
    onClickButtonClear,
    value,
    onChange,
    cx,
    maxLength,
    showLength
  } = props

  const id = useId()

  return (
    <div className={twMerge('py-2', className)}>
      {label && (
        <label
          className={twMerge(
            'font-medium',
            cx?.label
          )}
          htmlFor={id}>
          {label}
        </label>
      )}
      <div className={twMerge(
        'flex rounded-lg border overflow-hidden',
        !textarea && 'flex-row items-center',
        label && 'mt-1',
        cx?.border
      )}>
        <div>
          {iconLeft}
        </div>
        {textarea ? (
          <textarea
            id={id}
            className={twMerge(
              'outline-none px-3 py-3 flex-1 resize-none',
              cx?.input
            )}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
          />
        ) : (
          <input
            id={id}
            className={twMerge(
              'outline-none px-3 py-3 flex-1',
              cx?.input
            )}
            type={''}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
          />
        )}
        <div className={twMerge('flex flex-row items-center', (iconRight || showButtonClear) && 'mr-2')}>
          {showButtonClear && (
            <ButtonIconRounded
              className={twMerge('size-7', iconRight && 'mr-2')}
              icon={<IconCancel />}
              onClick={onClickButtonClear} />
          )}
          {iconRight}
        </div>
      </div>
      <div className={twMerge('flex flex-row justify-between')}>
        <div></div>
        <div className='mt-1'>
          {showLength && (
            <span className={twMerge(
              'text-xs',
              cx?.length
            )}>
              {value?.length ?? 0}{maxLength ? `/${maxLength}` : ''}
            </span>
          )}
        </div>
      </div>

    </div>
  )
}

type TextFieldProps = {
  className?: string,
  label?: string,
  type?: 'text' | 'password',
  textarea?: boolean,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
  required?: boolean,
  disabled?: boolean,
  maxLength?: number,
  showLength?: boolean,
  placeholder?: string,
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  showButtonClear?: boolean,
  onClickButtonClear?: () => void,
  cx?: {
    wrapper?: string,
    label?: string,
    border?: string,
    input?: string,
    length?: string
  }
}

export default TextField