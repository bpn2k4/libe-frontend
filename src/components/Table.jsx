import { twMerge } from 'tailwind-merge'
import { Pagination } from './Pagination'
import { Select } from './Select'

/**@type {import('~/types').Table} */
export const Table = ({ className, children, cx }) => {

  return (
    <div className={twMerge(
      'w-full overflow-x-auto ',
      className,
      cx?.wrapper
    )}>
      <table className={twMerge(
        'table border-collapse w-full table-auto min-w-[800px] mb-2 relative',
        cx?.table
      )}>
        {children}
      </table>
    </div>
  )
}

export const TableBody = ({ children, className }) => {
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
    <tr className={twMerge('even:bg-base-245 dark:even:bg-base-20 dark:hover:bg-base-40 cursor-pointer', className)}>
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

export const TablePagination = ({ className, total, page, onChangePage, number, onChangeNumber }) => {

  return (
    <div className={twMerge('flex flex-row justify-between', className)}>
      <Pagination
        cx={{ item: 'w-8 h-8', wrapper: 'gap-1' }}
        total={total}
        page={page}
        onChange={onChangePage} />
      <Select
        cx={{ wrapper: 'h-8' }}
        value="Hiển thị 15 sản phẩm" />
    </div>
  )
}