import { twMerge } from 'tailwind-merge'
import { IconCaretDouble, IconCaretThick } from './Icon'

/**@type {import('~/types').Pagination} */
export const Pagination = ({ className, total = 1, cx, page = 1, numberPerPage = 5, onChange }) => {

  const _onChange = onChange ? onChange : (_ => 1)
  const totalPage = Math.ceil(total / numberPerPage)

  return (
    <div className={twMerge(
      'flex flex-row text-sm font-semibold gap-2',
      className,
      cx?.wrapper
    )}>
      <button
        onClick={() => _onChange(1)}
        className={twMerge('h-9 w-9 center rounded border border-primary hover:bg-primary-reverse hover:text-primary-reverse active:scale-95 transition-all', cx?.item)}>
        <IconCaretDouble className='rotate-90 w-5 h-5' />
      </button>
      <button
        onClick={() => _onChange(Math.max(1, page - 1))}
        className={twMerge('h-9 w-9 center rounded border border-primary hover:bg-primary-reverse hover:text-primary-reverse active:scale-95 transition-all', cx?.item)}>
        <IconCaretThick className='rotate-90 w-4 h-4' />
      </button>
      {page > totalPage - 2 && totalPage > 3 &&
        <div className={twMerge('h-9 w-9 center', cx?.item)}>
          ...
        </div>}
      {page == totalPage && totalPage > 2 &&
        <button
          onClick={() => _onChange(page - 2)}
          className={twMerge('h-9 w-9 center rounded border border-primary hover:bg-primary-reverse hover:text-primary-reverse active:scale-95 transition-all', cx?.item)}>
          {page - 2}
        </button>
      }
      {page - 1 > 0 &&
        <button
          onClick={() => _onChange(page - 1)}
          className={twMerge('h-9 w-9 center rounded border border-primary hover:bg-primary-reverse hover:text-primary-reverse active:scale-95 transition-all', cx?.item)}>
          {page - 1}
        </button>
      }
      <button className={twMerge('h-9 w-9 center rounded border border-primary bg-primary-reverse text-primary-reverse active:scale-95 transition-all', cx?.item)}>
        {page}
      </button>
      {page < totalPage &&
        <button
          onClick={() => _onChange(page + 1)}
          className={twMerge('h-9 w-9 center rounded border border-primary hover:bg-primary-reverse hover:text-primary-reverse active:scale-95 transition-all', cx?.item)}>
          {page + 1}
        </button>
      }
      {page == 1 && totalPage > 2 &&
        <button
          onClick={() => _onChange(page + 2)}
          className={twMerge('h-9 w-9 center rounded border border-primary hover:bg-primary-reverse hover:text-primary-reverse active:scale-95 transition-all', cx?.item)}>
          {page + 2}
        </button>
      }
      {page < totalPage - 1 && totalPage > 3 &&
        <div className='h-9 w-9 center'>
          ...
        </div>
      }
      <button
        onClick={() => _onChange(Math.min((page + 1), totalPage))}
        className={twMerge('h-9 w-9 center rounded border border-primary hover:bg-primary-reverse hover:text-primary-reverse active:scale-95 transition-all', cx?.item)}>
        <IconCaretThick className='-rotate-90 w-4 h-4' />
      </button>
      <button
        onClick={() => _onChange(totalPage)}
        className={twMerge('h-9 w-9 center rounded border border-primary hover:bg-primary-reverse hover:text-primary-reverse active:scale-95 transition-all', cx?.item)}>
        <IconCaretDouble className='-rotate-90 w-5 h-5' />
      </button>
    </div>
  )
}