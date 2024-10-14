import { twMerge } from 'tailwind-merge'
import { Children, useEffect, useRef, useState } from 'react'

const Slider = (props: SliderProps) => {

  const { autoPlay = true, children, className, cx, duration = 3000, showDots = true, } = props

  const [activeIndex, setActiveIndex] = useState(0)

  const ref = useRef<HTMLDivElement>(null)

  const numberOfItems = Children.count(children)

  useEffect(() => {
    if (!ref.current) return

    ref.current.scrollTo({
      left: activeIndex * ref.current.clientWidth,
      behavior: 'smooth',
    })
  }, [activeIndex])

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % numberOfItems)
    }, duration)

    return () => {
      clearInterval(timer)
    }
  }, [autoPlay])


  return (
    <div className={twMerge('relative', className, cx?.wrapper)}>
      <div
        className={twMerge(
          'w-full snap-x snap-mandatory whitespace-nowrap overflow-x-scroll no-scrollbar',
          cx?.container
        )}
        ref={ref}>
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className={twMerge('snap-start inline-block w-full', cx?.item)}>
            {child}
          </div>
        ))}
        <div
          className='absolute z-[2] gap-2 flex flex-row items-center bottom-4 left-1/2 -translate-x-1/2'>
          {showDots && new Array(numberOfItems).fill(0).map((_, index) => (
            <button
              key={index}
              className={twMerge(
                'size-4 rounded-full border-2 border-red-500 transition-all',
                index === activeIndex && 'border-[4px]',
              )}
              onClick={() => setActiveIndex(index)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider

type SliderProps = {
  autoPlay?: boolean,
  children?: React.ReactNode,
  className?: string,
  cx?: {
    wrapper?: string,
    container?: string,
    item?: string
  },
  duration?: number,
  showDots?: boolean
}