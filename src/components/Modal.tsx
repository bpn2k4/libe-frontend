import { twMerge } from 'tailwind-merge'
import { useDebounce } from '@hooks'
import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel } from './Icon'

const Modal = (props: ModalProps) => {

  const { className, show, children, onClickOutsize, cx } = props

  const _show = useDebounce(show, show ? 0 : 400) // wait 400ms for animation done then set show = false
  const __show = useDebounce(show, show ? 100 : 0) // wait 100ms for component mount then do animation

  return (
    _show ? (
      <div
        className={twMerge(
          "fixed top-0 left-0 right-0 bottom-0 z-99 flex items-center justify-center bg-black/50 transition-opacity duration-300",
          __show ? "opacity-100" : "opacity-0",
          cx?.wrapper
        )}>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 z-1"
          onClick={onClickOutsize} />
        <div className={twMerge(
          'z-2 mx-3 w-full max-w-[400px] min-h-[200px] max-h-[calc(100dvh-40px)] overflow-hidden',
          'rounded-lg bg-rgb-250 dark:bg-rgb-20 text-rgb-15 dark:text-rgb-240',
          'border border-primary',
          className,
          cx?.content
        )}>
          {children}
        </div>
      </div>
    ) : (
      <></>
    )
  )
}

type ModalProps = {
  className?: string,
  cx?: {
    wrapper?: string,
    content?: string,
  }
  show?: boolean,
  children?: React.ReactNode,
  onClickOutsize?: () => void
}

const ModalHeader = (props: ModalHeaderProps) => {

  const { className, cx, children, buttonClose = true, onClickButtonClose } = props

  return (
    <div
      className={twMerge(
        'relative border-b border-primary',
        className,
        cx?.wrapper
      )}>
      <div className={twMerge(
        'w-full h-10 flex items-center justify-center font-semibold',
        cx?.main
      )}>
        {children}
      </div>
      {buttonClose && (
        <ButtonIconRounded
          className='absolute size-8 top-1 right-1'
          icon={<IconCancel />}
          onClick={onClickButtonClose} />
      )}
    </div>
  )
}

type ModalHeaderProps = {
  className?: string,
  cx?: {
    wrapper?: string,
    main?: string
  },
  children?: React.ReactNode,
  buttonClose?: boolean,
  onClickButtonClose?: () => void
}

const ModalBody = (props: ModalBodyProps) => {

  const { className, children } = props

  return (
    <div className={twMerge('flex-1 overflow-y-auto', className)}>
      {children}
    </div>
  )
}

type ModalBodyProps = {
  className?: string,
  children?: React.ReactNode
}

const ModalFooter = (props: ModalFooterProps) => {
  const { className, cx, children } = props
  return (
    <div
      className={twMerge(
        'border-t border-primary',
        className,
        cx?.wrapper
      )}>
      <div
        className={twMerge('w-full h-12 px-2 py-1 flex items-center gap-2', cx?.main)}>
        {children}
      </div>
    </div>
  )
}

type ModalFooterProps = {
  className?: string,
  cx?: {
    wrapper?: string,
    main?: string
  },
  children?: React.ReactNode
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal