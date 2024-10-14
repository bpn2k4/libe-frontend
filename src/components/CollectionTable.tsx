import { useTranslation } from 'react-i18next'
import { Table, TableCell, TableFooter, TableHeader } from './Table'
import CheckBox from './CheckBox'
import { IconGear, IconSort, IconTrashCan } from './Icon'

const collections = [
  { id: '100001', name: 'Jean', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum corrupti aspernatur ex ut, facilis quis saepe error omnis assumenda repellat labore ducimus eveniet, vero numquam. Nesciunt doloremque placeat nam ut!' },
  { id: '100002', name: 'T-Shirt', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit vel fugit, dolores assumenda unde tenetur exercitationem officia, et fuga, sed quibusdam autem recusandae odit voluptatibus? Eligendi cumque totam explicabo.' },
  { id: '100003', name: 'Cap', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempora veniam quos, voluptates placeat provident hic quibusdam ab quod debitis! Similique nihil magni accusamus cumque temporibus expedita voluptatem maxime fugiat.' },
]

const CollectionTable = () => {

  const { t } = useTranslation()

  return (
    <div className='w-full rounded-lg border border-rgb-210 dark:border-rgb-40 bg-secondary'>
      <TableHeader
        title={t('CollectionManager')}
        buttonAddText='Add new file'
        onClickButtonAdd={() => 1} />
      <Table
        minWidth={600}
        columns={[20, 20, 50, 10]}
        baseWidth={60}
        header={[
          <TableCell className='gap-2'>
            <CheckBox />
            ID
          </TableCell>,
          <TableCell>
            <button className='flex flex-row gap-1'>
              NAME
              <IconSort className='w-h h-4' />
            </button>
          </TableCell>,
          <TableCell>
            DESCRIPTION
          </TableCell>,
          <TableCell>
            MANAGER
          </TableCell>,
        ]}
        rows={collections.map(({ id, name, description }) => ([
          <TableCell className='gap-2'>
            <CheckBox />
            {id}
          </TableCell>,
          <TableCell>
            {name}
          </TableCell>,
          <TableCell className=''>
            <span className='line-clamp-2'>
              {description}
            </span>
          </TableCell>,
          <TableCell className='gap-2'>
            <button>
              <IconGear className='w-5 h-5' />
            </button>
            <button>
              <IconTrashCan className='w-5 h-5' />
            </button>
          </TableCell>,
        ]))} />
      <TableFooter
        page={2}
        limit={10}
        number={100}
        total={100}
        onChangePage={page => {

        }}
        onChangeLimit={limit => {

        }}
        totalPage={20} />
    </div>
  )
}

export default CollectionTable