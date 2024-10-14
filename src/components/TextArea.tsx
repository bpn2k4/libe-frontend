import { twMerge } from 'tailwind-merge'
import {
  useId,
  useLayoutEffect,
  useRef
} from 'react'

const TextArea = (props: TextAreaProps) => {

  const {
    className,
    label,
    cx,
    maxRows = 99999,
    minRows = 2,
    onChange = () => { },
    value
  } = props

  const id = useId()
  const ref = useRef<HTMLTextAreaElement>(null)

  const handleResizeTextarea = () => {
    const node = ref.current!

  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

    onChange(event)
  }

  useLayoutEffect(() => {

  }, [])

  return (
    <div className={twMerge('', className)}>
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
        'w-full flex rounded-lg border overflow-hidden',
        label && 'mt-1',
        cx?.border
      )}>
        <textarea
          id={id}
          ref={ref}
          className={twMerge(
            'outline-none resize-none flex-1 px-3 py-2',
            cx?.input
          )}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

type TextAreaProps = {
  className?: string,
  label?: string,
  cx?: {
    label?: string,
    border?: string,
    input?: string,
  },
  maxRows?: number,
  minRows?: number,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export default TextArea