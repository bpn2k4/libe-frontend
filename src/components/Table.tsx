import { twMerge } from 'tailwind-merge'
import Pagination from './Pagination'

const Table = (props: TableProps) => {

  const { className, cx, minWidth = 600, columns, header = [], rows = [], baseWidth = 60 } = props

  return (
    <div className={twMerge(
      'w-full overflow-x-auto',
      className,
      cx?.table
    )}>
      <div className='w-full' style={{ minWidth: minWidth }}>
        <div
          className={twMerge(
            'flex flex-row font-semibold',
            'border-b border-b-rgb-220 dark:border-b-rgb-60',
            cx?.header
          )}
          style={{ minWidth: minWidth }}>
          {header.map((item, index) => (
            <div
              key={index}
              style={{
                width: columns ? `${columns[index]}%` : undefined,
                minWidth: columns ? (columns[index] / 10) * baseWidth : undefined
              }}>
              {item}
            </div>
          ))}
        </div>

        <div
          className={twMerge(
            'w-full min-h-[200px] relative break-words font-medium',
            'divide-y divide-rgb-220 dark:divide-rgb-60',
            cx?.body
          )}
          style={{ minWidth: minWidth }}>
          {rows?.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={twMerge(
                'w-full flex flex-row',
                rowIndex % 2 == 0 && ']',
              )}
              style={{ minWidth: minWidth }}>
              {row?.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={twMerge(
                    rowIndex % 2 == 0 && ']',
                    cx?.row,
                  )}
                  style={{
                    width: columns ? `${columns[cellIndex]}%` : undefined,
                    minWidth: columns ? (columns[cellIndex] / 10) * baseWidth : undefined
                  }}>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

const TableCell = (props: TableCellProps) => {

  const { className, children } = props

  return (
    <div className={twMerge('p-4 min-h-12 flex items-center', className)}>
      {children}
    </div>
  )
}

type TableCellProps = {
  className?: string,
  children?: React.ReactNode
}

const TableHeader = (props: TableHeaderProps) => {

  const {
    title,
    buttonAdd, buttonAddText, onClickButtonAdd,
    searchBox, searchPlaceholder, searchValue, onChangeSearch
  } = props

  return (
    <div className={twMerge(
      'w-full h-16 px-5 text-xs',
      'flex flex-row justify-between items-center'
    )}>
      <div>
        <span className='font-[700]'>{title}</span>
      </div>
      <div className='flex flex-row gap-4'>
        {searchBox && (
          <div className='h-8 w-[140px] border rounded border-[#DBE3EF] text-black overflow-hidden'>
            <input
              className='outline-none w-full h-full px-2 bg-transparent'
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={onChangeSearch} />
          </div>
        )}
        {buttonAdd && (
          <button
            className='h-8 rounded bg-[#3ACE5A] border border-[#2AB448] flex items-center justify-center gap-2 px-4 active:scale-98 transition-all'
            onClick={onClickButtonAdd}>
            {/* <IconPlusCircle /> */}
            <span>{buttonAddText}</span>
          </button>
        )}
      </div>
    </div>
  )
}

const TableFooter = (props: TableFooterProps) => {

  const { limit, onChangeLimit, onChangePage, page, number, total, totalPage } = props

  return (
    <div className={twMerge(
      'w-full h-14 px-5 text-[10px]',
      'flex flex-row justify-between items-center',
      'border-t border-t-rgb-220 dark:border-t-rgb-60'
    )}>
      <Pagination
        page={page}
        onChangePage={onChangePage}
        totalPage={totalPage} />

      <div className='flex flex-row gap-3 items-center text-[13px]'>
        <span className=''>Hiển thị {number}/{total}</span>
        {/* <Select
          className='w-11 h-7 pl-[6px]'
          cx={{
            icon: 'right-1',
            item: 'h-6 justify-center hover:text-[#5180FB] hover:bg-gray-200 font-semibold'
          }}
          onSelect={item => {
            if (typeof (onChangeLimit) == 'function') {
              onChangeLimit(item.value)
            }
          }}
          position='top'
          value={limit}
          options={[
            { value: 10, display: 10 },
            { value: 20, display: 20 },
            { value: 50, display: 50 },
          ]}
        /> */}
      </div>
    </div>
  )
}

export { Table, TableCell, TableHeader, TableFooter }

type TableProps = {
  className?: string,
  cx?: {
    table?: string,
    header?: string,
    row?: string,
    body?: string
  },
  minWidth?: number,
  columns: number[],
  header: React.ReactNode[],
  rows: React.ReactNode[][],
  baseWidth?: number,
}

type TableHeaderProps = {
  title?: string,
  buttonAdd?: boolean,
  buttonAddText?: string,
  onClickButtonAdd?: () => void,
  searchBox?: boolean,
  searchPlaceholder?: string,
  searchValue?: string,
  onChangeSearch?: React.ChangeEventHandler<HTMLInputElement>
}

type TableFooterProps = {
  className?: string,
  onChangePage?: (page: number) => void,
  number?: number,
  page?: number,
  total?: number,
  totalPage?: number,
  limit?: number,
  onChangeLimit?: (limit: any) => void
}
