import { twMerge } from 'tailwind-merge'

const Marquee = (props: MarqueeProps) => {

  const { children, className, cx } = props

  return (
    <div className={twMerge('', className, cx?.wrapper)}>
      <div className={twMerge('w-full overflow-hidden whitespace-nowrap group', cx?.container)}>
        {(new Array(50).fill(0)).map((_, index) => (
          <div
            key={index}
            className={twMerge('marquee group-hover:pause-animation', cx?.item)}>
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee

type MarqueeProps = {
  children?: React.ReactNode,
  className?: string,
  cx?: {
    wrapper?: string
    container?: string,
    item?: string
  }
}