import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next'

import { IconPlus } from './Icon'
import Pagination from './Pagination'
import Select, { SelectOption } from './Select'

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
            'flex flex-row',
            'font-bold',
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
              key={row.key}
              className={twMerge(
                'w-full flex flex-row cursor-pointer',
                'hover:bg-rgb-230 dark:hover:bg-rgb-30',
                rowIndex % 2 == 0 && 'bg-rgb-245 dark:bg-rgb-10',
                row.checked && 'bg-rgb-230 dark:bg-rgb-30',
                row.className
              )}
              style={{ minWidth: minWidth }}>
              {row.nodes.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
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
  rows: Row[],
  baseWidth?: number,
}


type Row = {
  key: number | string,
  checked?: boolean,
  nodes: React.ReactNode[],
  className?: string
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
    searchBox, searchPlaceholder, searchValue, onChangeSearch,
    className, cx
  } = props

  return (
    <div className={twMerge(
      'w-full h-16 px-5 text-xs',
      'flex flex-row justify-between items-center',
      className,
      cx?.wrapper
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
            className={twMerge(
              'h-8 px-4',
              'flex items-center justify-center gap-2',
              'border border-primary rounded  transition-all active:scale-98',
              cx?.buttonAdd
            )}
            onClick={onClickButtonAdd}>
            <IconPlus />
            <span>{buttonAddText}</span>
          </button>
        )}
      </div>
    </div>
  )
}

type TableHeaderProps = {
  className?: string,
  title?: string,
  buttonAdd?: boolean,
  buttonAddText?: string,
  onClickButtonAdd?: () => void,
  searchBox?: boolean,
  searchPlaceholder?: string,
  searchValue?: string,
  onChangeSearch?: React.ChangeEventHandler<HTMLInputElement>,
  cx?: {
    wrapper?: string,
    title?: string,
    buttonAdd?: string
  }
}

const TableFooter = (props: TableFooterProps) => {

  const { t } = useTranslation()

  const {
    number, total, totalPage,
    page, onChangePage,
    limit, onChangeLimit,
    columnOptions = [], onSelectColumn
  } = props

  return (
    <div className={twMerge(
      'w-full h-14 px-5',
      'flex flex-row justify-between items-center',
      'border-t border-t-rgb-220 dark:border-t-rgb-60'
    )}>
      <Pagination
        page={page}
        onChangePage={onChangePage}
        totalPage={totalPage} />

      <div className='flex flex-row gap-3 items-center'>
        <Select
          label={t('ColumnsList')}
          className='w-32 text-xs'
          closeOnSelect={false}
          options={columnOptions}
          onSelect={onSelectColumn} />
        <div className='flex flex-row items-center gap-1'>
          <span>
            Số hàng
          </span>
          <Select
            className='w-10'
            cx={{ label: 'text-center', option: { label: 'text-center' } }}
            onSelect={item => {
              if (typeof (onChangeLimit) == 'function') {
                onChangeLimit(item.value as number)
              }
            }}
            position='top'
            label={limit}
            options={[
              { id: 1, label: '5', value: 5 },
              { id: 2, label: '10', value: 10 },
              { id: 3, label: '20', value: 20 },
              { id: 4, label: '50', value: 50 },
            ]}
          />
        </div>
        <span className=''>{t('ShowNumber', { number, total })}</span>
      </div>
    </div>
  )
}

type TableFooterProps = {
  className?: string,
  onChangePage?: (page: number) => void,
  number?: number,
  page?: number,
  total?: number,
  totalPage?: number,
  limit?: number,
  onChangeLimit?: (limit: number) => void,
  columnOptions?: SelectOption[],
  onSelectColumn?: (option: SelectOption) => void
}

Table.Header = TableHeader
Table.Footer = TableFooter
Table.Cell = TableCell

export default Table
