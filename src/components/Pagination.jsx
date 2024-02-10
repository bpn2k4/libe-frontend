import { twMerge } from 'tailwind-merge'
import { IconCaret, IconCaretDouble, IconCaretThick } from './Icon'

/**@type {import('~/types').Pagination} */
export const Pagination = ({ className, total = 1, cx, page = 1, onChange }) => {

  const _onChange = onChange ? onChange : (_ => 1)

  return (
    <div className={twMerge(
      'flex flex-row text-sm font-semibold gap-2',
      className,
      cx?.wrapper
    )}>
      <button
        onClick={() => _onChange(1)}
        className={twMerge('h-9 w-9 center rounded border border-main hover:bg-main-reverse hover:text-main-reverse active:scale-95 transition-all', cx?.item)}>
        <IconCaretDouble className='rotate-90 w-5 h-5' />
      </button>
      <button
        onClick={() => _onChange(Math.max(1, page - 1))}
        className={twMerge('h-9 w-9 center rounded border border-main hover:bg-main-reverse hover:text-main-reverse active:scale-95 transition-all', cx?.item)}>
        <IconCaretThick className='rotate-90 w-4 h-4' />
      </button>
      {page > total - 2 && total > 3 &&
        <div className={twMerge('h-9 w-9 center', cx?.item)}>
          ...
        </div>}
      {page == total && total > 2 &&
        <button
          onClick={() => _onChange(page - 2)}
          className={twMerge('h-9 w-9 center rounded border border-main hover:bg-main-reverse hover:text-main-reverse active:scale-95 transition-all', cx?.item)}>
          {page - 2}
        </button>
      }
      {page - 1 > 0 &&
        <button
          onClick={() => _onChange(page - 1)}
          className={twMerge('h-9 w-9 center rounded border border-main hover:bg-main-reverse hover:text-main-reverse active:scale-95 transition-all', cx?.item)}>
          {page - 1}
        </button>
      }
      <button className={twMerge('h-9 w-9 center rounded border border-main bg-main-reverse text-main-reverse active:scale-95 transition-all', cx?.item)}>
        {page}
      </button>
      {page < total &&
        <button
          onClick={() => _onChange(page + 1)}
          className={twMerge('h-9 w-9 center rounded border border-main hover:bg-main-reverse hover:text-main-reverse active:scale-95 transition-all', cx?.item)}>
          {page + 1}
        </button>
      }
      {page == 1 && total > 2 &&
        <button
          onClick={() => _onChange(page + 2)}
          className={twMerge('h-9 w-9 center rounded border border-main hover:bg-main-reverse hover:text-main-reverse active:scale-95 transition-all', cx?.item)}>
          {page + 2}
        </button>
      }
      {page < total - 1 && total > 3 &&
        <div className='h-9 w-9 center'>
          ...
        </div>
      }
      <button
        onClick={() => _onChange(Math.min((page + 1), total))}
        className={twMerge('h-9 w-9 center rounded border border-main hover:bg-main-reverse hover:text-main-reverse active:scale-95 transition-all', cx?.item)}>
        <IconCaretThick className='-rotate-90 w-4 h-4' />
      </button>
      <button
        onClick={() => _onChange(total)}
        className={twMerge('h-9 w-9 center rounded border border-main hover:bg-main-reverse hover:text-main-reverse active:scale-95 transition-all', cx?.item)}>
        <IconCaretDouble className='-rotate-90 w-5 h-5' />
      </button>
    </div>
  )
}