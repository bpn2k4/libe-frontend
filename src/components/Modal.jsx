import { twMerge } from "tailwind-merge"

export const Modal = ({ className, show, children, onClickOutsize }) => {

  return (
    <div>
      <div className={twMerge(
        "",
        className
      )}>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 z-[1]"
          ref={ref}
          onClick={onClickOutsize} />
        {children}
      </div>
    </div>
  )
}