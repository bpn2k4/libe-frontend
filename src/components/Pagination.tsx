import { twMerge } from 'tailwind-merge'
import { IconAngle, IconAngles } from './Icon'


const Pagination = (props: PaginationProps) => {

  const { className, onChangePage, page = 1, totalPage = 1 } = props

  const _onChangePage = onChangePage ?? ((_) => { })

  return (
    <div className={twMerge(
      'flex flex-row gap-1 font-medium',
      className
    )}>
      <button
        onClick={() => _onChangePage(1)}
        className={twMerge(
          'size-7 flex items-center justify-center',
          'rounded transition-transform',
          'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
        )}>
        <IconAngles />
      </button>
      <button
        onClick={() => _onChangePage(Math.max(1, page - 1))}
        className={twMerge(
          'size-7 flex items-center justify-center',
          'rounded transition-transform',
          'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
        )}>
        <IconAngle />
      </button>
      {page > totalPage - 2 && totalPage > 3 &&
        <div className='size-7 flex items-center justify-center'>
          ...
        </div>}
      {page == totalPage && totalPage > 2 &&
        <button
          onClick={() => _onChangePage(page - 2)}
          className={twMerge(
            'size-7 flex items-center justify-center',
            'rounded transition-transform',
            'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
          )}>
          {page - 2}
        </button>
      }
      {page - 1 > 0 &&
        <button
          onClick={() => _onChangePage(page - 1)}
          className={twMerge(
            'size-7 flex items-center justify-center',
            'rounded transition-transform',
            'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
          )}>
          {page - 1}
        </button>
      }
      <button className='size-7 centerrounded border border-rgb-220 dark:border-rgb-60'>
        {page}
      </button>
      {page < totalPage &&
        <button
          onClick={() => _onChangePage(page + 1)}
          className={twMerge(
            'size-7 flex items-center justify-center',
            'rounded transition-transform',
            'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
          )}>
          {page + 1}
        </button>
      }
      {page == 1 && totalPage > 2 &&
        <button
          onClick={() => _onChangePage(page + 2)}
          className={twMerge(
            'size-7 flex items-center justify-center',
            'rounded transition-transform',
            'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
          )}>
          {page + 2}
        </button>
      }
      {page < totalPage - 1 && totalPage > 3 &&
        <div className='size-7 flex items-center justify-center'>
          ...
        </div>
      }
      <button
        onClick={() => _onChangePage(Math.min((page + 1), totalPage))}
        className={twMerge(
          'size-7 flex items-center justify-center',
          'rounded transition-transform',
          'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
        )}>
        <IconAngle className='-rotate-180' />
      </button>
      <button
        onClick={() => _onChangePage(totalPage)}
        className={twMerge(
          'size-7 flex items-center justify-center',
          'rounded transition-transform',
          'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
        )}>
        <IconAngles className='-rotate-180' />
      </button>
    </div>
  )
}

type PaginationProps = {
  className?: string,
  onChangePage?: (page: number) => void,
  page?: number,
  totalPage?: number,
  renderLink?: (page: number) => string
  cx?: {

  }
}

export default Pagination
