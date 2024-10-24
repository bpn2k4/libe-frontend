import { twMerge } from 'tailwind-merge'
import { IconSquare, IconSquareCheck } from './Icon'


const CheckBox = (props: CheckBoxProps) => {

  const { className, cx, checked, onChange, title, disabled } = props

  return (
    <div
      className={twMerge(
        'flex flex-row items-center gap-2 cursor-pointer',
        className,
        cx?.wrapper,
        disabled && 'cursor-default'
      )}
      onClick={onChange}>
      <div className={twMerge('relative w-5 h-5', cx?.box)}>
        <div className={twMerge(
          'absolute top-0 left-0 bottom-0 right-0',
          'transition-transform origin-center',
          checked ? 'scale-0' : 'scale-100',
        )}>
          <IconSquare />
        </div>
        <div className={twMerge(
          'absolute top-0 left-0 bottom-0 right-0',
          'transition-transform origin-center',
          checked ? 'scale-100' : 'scale-0',
        )}>
          <IconSquareCheck />
        </div>
      </div>
      {title && (
        <span className={twMerge('', cx?.title)}>{title}</span>
      )}
    </div>
  )
}

type CheckBoxProps = {
  className?: string,
  cx?: {
    wrapper?: string,
    box?: string,
    title?: string
  },
  checked?: boolean,
  onChange?: () => void,
  title?: string,
  disabled?: boolean
}

export default CheckBox