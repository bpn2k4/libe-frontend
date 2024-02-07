import { twMerge } from 'tailwind-merge'

/**@type {import('~/types').Table} */
export const Table = ({ className, children, cx }) => {

  return (
    <div className={twMerge(
      'w-full overflow-x-auto',
      className,
      cx?.wrapper
    )}>
      <table className={twMerge(
        'table border-collapse w-full table-auto min-w-[800px] mb-5',
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