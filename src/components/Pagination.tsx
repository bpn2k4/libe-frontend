import { twMerge } from 'tailwind-merge'
import { IconAngle, IconAngles } from './Icon'
import { Link } from 'react-router-dom'


const Pagination = (props: PaginationProps) => {

  const { className, onChangePage, page = 1, totalPage = 1, link, renderLink } = props

  const _onChangePage = onChangePage ?? (() => { })

  return (
    <div className={twMerge(
      'flex flex-row gap-1 font-medium',
      className
    )}>
      {link ? (
        <>
          <Link
            to={renderLink(1)}
            className={twMerge(
              'size-7 flex items-center justify-center',
              'rounded transition-transform',
              'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
            )}>
            <IconAngles />
          </Link>
          <Link
            to={renderLink(Math.max(1, page - 1))}
            className={twMerge(
              'size-7 flex items-center justify-center',
              'rounded transition-transform',
              'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
            )}>
            <IconAngle />
          </Link>
          {page > totalPage - 2 && totalPage > 3 &&
            <div className='size-7 flex items-center justify-center'>
              ...
            </div>}
          {page == totalPage && totalPage > 2 &&
            <Link
              to={renderLink(page - 2)}
              className={twMerge(
                'size-7 flex items-center justify-center',
                'rounded transition-transform',
                'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
              )}>
              {page - 2}
            </Link>
          }
          {page - 1 > 0 &&
            <Link
              to={renderLink(page - 1)}
              className={twMerge(
                'size-7 flex items-center justify-center',
                'rounded transition-transform',
                'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
              )}>
              {page - 1}
            </Link>
          }
          <button className='size-7 rounded border border-primary'>
            {page}
          </button>
          {page < totalPage &&
            <Link
              to={renderLink(page + 1)}
              className={twMerge(
                'size-7 flex items-center justify-center',
                'rounded transition-transform',
                'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
              )}>
              {page + 1}
            </Link>
          }
          {page == 1 && totalPage > 2 &&
            <Link
              to={renderLink(page + 2)}
              className={twMerge(
                'size-7 flex items-center justify-center',
                'rounded transition-transform',
                'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
              )}>
              {page + 2}
            </Link>
          }
          {page < totalPage - 1 && totalPage > 3 &&
            <div className='size-7 flex items-center justify-center'>
              ...
            </div>
          }
          <Link
            to={renderLink(Math.min((page + 1), totalPage))}
            className={twMerge(
              'size-7 flex items-center justify-center',
              'rounded transition-transform',
              'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
            )}>
            <IconAngle className='-rotate-180' />
          </Link>
          <Link
            to={renderLink(totalPage)}
            className={twMerge(
              'size-7 flex items-center justify-center',
              'rounded transition-transform',
              'hover:bg-rgb-220 dark:hover:bg-rgb-40 active:scale-95'
            )}>
            <IconAngles className='-rotate-180' />
          </Link>
        </>
      ) : (
        <>
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
          <button className='size-7 rounded border border-primary'>
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
        </>
      )}

    </div>
  )
}

type PaginationProps = {
  className?: string,
  onChangePage?: (page: number) => void,
  page?: number,
  totalPage?: number,
  cx?: {
    item?: string
  }
} & (
    | {
      link: true
      renderLink: (page: number) => string
    }
    | {
      link?: false
      renderLink?: never
    }
  )

export default Pagination
