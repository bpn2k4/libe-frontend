import { Children, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { IconAngle } from './Icon'


const Carousel = (props: CarouselProps) => {

  const {
    className,
    cx,
    children,
    duration = 3000,
    autoPlay = true,
    showDots = false,
    showArrows = false
  } = props

  const [activeIndex, setActiveIndex] = useState(0)
  const childrenRef = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const numberOfItems = Children.count(children)

  useEffect(() => {
    if (!containerRef.current) return

    containerRef.current.scrollTo({
      left: activeIndex * containerRef.current.clientWidth,
      behavior: 'smooth',
    })

    console.log(containerRef.current.clientWidth);
    console.log(childrenRef.current[0]?.clientWidth);

  }, [activeIndex])

  useEffect(() => {

    if (!autoPlay) return

    const timer = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % numberOfItems)
    }, duration)

    return () => {
      clearInterval(timer)
    }

  }, [autoPlay, duration, numberOfItems])

  return (
    <div className={twMerge('relative', className, cx?.wrapper)}>
      <div
        ref={containerRef}
        className={twMerge(
          'w-full snap-x snap-mandatory whitespace-nowrap overflow-x-scroll',
          cx?.container
        )}>
        {Children.toArray(children).map((child, index) => (
          <div
            ref={ref => childrenRef.current[index] = ref}
            key={index}
            className={twMerge(
              'inline-block w-1/2',
              cx?.item
            )}>
            {child}
          </div>
        ))}
      </div>
      {showDots && (
        <div className={twMerge(
          'absolute z-2 bottom-3 left-1/2 -translate-x-1/2',
          'flex flex-row items-center gap-1',
          cx?.dots
        )}>
          {showDots && new Array(numberOfItems).fill(0).map((_, index) => (
            <button
              key={index}
              className='w-3 h-3 flex items-center justify-center'
              onClick={() => setActiveIndex(index)}>
              <div
                className={twMerge(
                  'w-2 h-2 rounded-full transition-all',
                  index === activeIndex ? 'bg-primary' : 'bg-rgb-100',
                  index === activeIndex && 'w-2.5 h-2.5'
                )} />
            </button>
          ))}
        </div>
      )}

      {showArrows && (
        <button
          className={twMerge(
            'absolute z-2 top-1/2 left-4 -translate-y-1/2 size-10',
            'flex items-center justify-center',
            'rounded-full border border-primary transition-all',
            'bg-rgb-215 dark:bg-rgb-60',
            'active:scale-95 hover:bg-primary',
            cx?.arrow,
            cx?.arrowLeft
          )}
          onClick={() => setActiveIndex(activeIndex => (activeIndex - 1 + numberOfItems) % numberOfItems)}>
          <IconAngle />
        </button>
      )}
      {showArrows && (
        <button
          className={twMerge(
            'absolute z-2 top-1/2 right-4 -translate-y-1/2 size-10',
            'flex items-center justify-center',
            'rounded-full border border-primary transition-all',
            'bg-rgb-215 dark:bg-rgb-60',
            'active:scale-95 hover:bg-primary',
            cx?.arrow,
            cx?.arrowRight
          )}
          onClick={() => setActiveIndex(activeIndex => (activeIndex + 1) % numberOfItems)}>
          <IconAngle className='rotate-180' />
        </button>
      )}
    </div>
  )
}

type CarouselProps = {
  className?: string,
  cx?: {
    wrapper?: string,
    container?: string,
    item?: string,
    dots?: string,
    arrow?: string,
    arrowLeft?: string,
    arrowRight?: string
  },
  children?: React.ReactNode,
  autoPlay?: boolean
  duration?: number,
  showDots?: boolean,
  showArrows?: boolean
}

export default Carousel