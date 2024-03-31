import { twMerge } from 'tailwind-merge'
import { Pagination } from './Pagination'
import { Select } from './Select'
import { IconSpinner } from './Icon'
import { useTranslation } from 'react-i18next'

/**@type {import('~/types').Table} */
export const Table = ({ className, children, cx, isLoading }) => {

  return (
    <div className={twMerge(
      'w-full overflow-x-auto relative',
      className,
      cx?.wrapper
    )}>
      <table className={twMerge(
        ' border-collapse w-full table-auto min-w-[800px] mb-2 border-b border-primary',
        cx?.table
      )}>
        {children}
      </table>
      {isLoading && (
        <div className='absolute top-10 left-0 right-0 bottom-0 center'>
          <div className='flex flex-row items-center gap-2'>
            <IconSpinner />
            <span>
              Loading
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export const TableBody = ({ children, className, isLoading }) => {
  return (
    <tbody className={twMerge('divide-y divide-main', className)}>
      {children}

    </tbody>
  )
}


export const TableHead = ({ className, children }) => {
  return (
    <thead className={twMerge('', className)}>
      {children}
    </thead>
  )
}

export const TableRow = ({ className, children }) => {
  return (
    <tr className={twMerge('odd:bg-base-245 dark:odd:bg-base-20 dark:hover:bg-base-40 cursor-pointer', className)}>
      {children}
    </tr>
  )
}

export const TableCell = ({ th = false, className, children }) => {
  return (
    th ?
      (
        <th className={twMerge('p-4', className)}>
          {children}
        </th>
      )
      :
      (
        <td className={twMerge('p-4', className)}>
          {children}
        </td>
      )

  )
}

export const TablePagination = ({ className, total, page, onChangePage, numberPerPage, onChangeNumberPerPage, options, numberDisplay, cx }) => {

  return (
    <div className={twMerge('flex flex-row justify-between', className)}>
      <Pagination
        cx={{ item: 'w-8 h-8', wrapper: 'gap-1' }}
        total={total}
        page={page}
        onChange={onChangePage}
        numberPerPage={numberPerPage} />
      <Select
        position='top'
        className={cx?.select}
        cx={{ wrapper: 'h-8' }}
        options={options}
        onSelect={onChangeNumberPerPage}
        value={numberDisplay} />
    </div>
  )
}