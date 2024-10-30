import { useTranslation } from 'react-i18next'
import Table from './Table'
import CheckBox from './CheckBox'
import { IconGear, IconSort, IconTrashCan } from './Icon'
import Utils from '@utils'
import { useMemo, useState } from 'react'
import { useCollectionManagerSelector, useDispatch } from '@hooks'
import { setLimit, setPage } from '@slices/CollectionManager'
import { Collection } from '@types'

const collections_ = [
  { id: 100001, name: 'All products', slug: 'all' },
  { id: 100002, name: 'Denim Ware', slug: 'denim-ware' },
  { id: 100003, name: 'Trousers', slug: 'trousers', description: 'Shop our Trousers line with all the elegant and comfy pieces suitable for both office and outing.' },
  { id: 100004, name: 'Skirts & Shorts', slug: 'skirts-shorts', description: 'Cheers to all the moments of well-dressed with the bunch of our Skirts & Shorts choices.' },
  { id: 100005, name: 'Shirts & Blouses', slug: 'shirts-blouses', description: 'Check out your favorite choice of shirts and blouses, made for any occasions; office for the day, party for the night.' },
  { id: 100006, name: 'T-shirts', slug: 't-shirts', description: 'Introducing our T-shirts line, varied from basics to playful prints, perfect for wherever or whenever you need an active and comfy outfit.' },
  { id: 100007, name: 'Camisoles', slug: 'camisoles', description: "Here comes our Camisoles collection - we've got answers, and options, for any occasions on your outing calendar." },
  { id: 100008, name: 'Classique: Daily Essentials', slug: 'classique-daily-essentials', description: 'Discover our CLASSIQUE: Daily Essentials collection, perfect for you to shop with ease.' },
  { id: 100009, name: 'Dresses & Jumpsuits', slug: 'dresses-jumpsuits', description: 'Save your time; our latest collection of feel-good and easy-to-wear dresses/jumpsuits is perfect for anytime.' },
  { id: 100010, name: 'Outerwear', slug: 'outerwear', description: 'Discover our outer-wears, perfect for throwing over your everyday outfits as well as pulling out for special occasions.' },
  { id: 100011, name: 'Swimwear', slug: 'swimwear', description: "Ready for a sunny vacation or active staycation? It's perfect toget ready by shopping with our variety of choices of swimwear." },
  { id: 100012, name: 'Accessories', slug: 'accessories', description: 'Accessories are the final step to complete your everyday appearance. Get a closer look at our accessories, from hat to bag to everything you are looking for.' }
]

const CollectionTable = () => {

  const { t } = useTranslation()

  const [collections, setCollections] = useState(() => {
    const collections = collections_.map(({ id, name, slug, description }) => ({
      id,
      name,
      slug,
      description,
      hidden: false,
      createdAt: '12:45:32 12/12/2022',
      updatedAt: '12:45:32 12/12/2022',
      checked: false
    }))
    return collections
  })

  const [columnOptions, setColumnOptions] = useState([
    { id: 1, checkbox: true, checked: true, label: t('Id'), disabled: true },
    { id: 2, checkbox: true, checked: true, label: t('Name'), disabled: false },
    { id: 3, checkbox: true, checked: true, label: t('Slug'), disabled: false },
    { id: 4, checkbox: true, checked: true, label: t('Description'), disabled: false },
    { id: 5, checkbox: true, checked: true, label: t('Hidden'), disabled: false },
    { id: 6, checkbox: true, checked: true, label: t('CreatedAt'), disabled: false },
    { id: 7, checkbox: true, checked: true, label: t('UpdatedAt'), disabled: false },
  ])

  const dispatch = useDispatch()
  const { page, limit, total } = useCollectionManagerSelector()

  const widthOfColumns = useMemo(() => {

    const key = columnOptions.map(({ checked }) => Number(checked).toString()).join('-')

    if (key == '1-1-1-1-1-1') {
      return [10, 10, 10, 25, 5, 15, 15, 10]
    }

    if (key == '1-1-1-1-1-0') {
      return [10, 10, 10, 25, 5, 15, 15, 10]
    }

    return [10, 10, 10, 25, 5, 15, 15, 10]
  }, [columnOptions])

  const isCheckAll = useMemo(() => {
    return collections.slice(page * limit, page * limit + limit).every((collection) => collection.checked)
  }, [collections, page, limit])

  const renderHeader = useMemo(() => {

    const header: React.ReactNode[] = []
    if (columnOptions[1].checked) {
      header.push(
        <Table.Cell>
          <button className='flex flex-row gap-1'>
            NAME
            <IconSort className='w-h h-4' />
          </button>
        </Table.Cell>
      )
    }

    if (columnOptions[2].checked) {
      header.push(<Table.Cell>SLUG</Table.Cell>)
    }
    if (columnOptions[3].checked) {
      header.push(
        <Table.Cell>DESCRIPTION</Table.Cell>
      )
    }
    if (columnOptions[4].checked) {
      header.push(<Table.Cell>HIDDEN</Table.Cell>
      )
    }
    if (columnOptions[5].checked) {
      header.push(<Table.Cell>CREATED</Table.Cell>
      )
    }
    if (columnOptions[6].checked) {
      header.push(<Table.Cell>UPDATED</Table.Cell>
      )
    }

    return header
  }, [columnOptions])

  const renderRow = (collection: Collection) => {
    const nodes: React.ReactNode[] = [
      <Table.Cell className='gap-2'>
        <CheckBox
          checked={collection.checked}
          onChange={() => {
            collection.checked = !collection.checked
            setCollections([...collections])
          }} />
        {collection.id}
      </Table.Cell>
    ]

    if (columnOptions[1].checked) {
      nodes.push(<Table.Cell>{collection.name}</Table.Cell>)
    }

    if (columnOptions[2].checked) {
      nodes.push(<Table.Cell>{'/' + collection.slug}</Table.Cell>)
    }

    if (columnOptions[3].checked) {
      nodes.push(
        <Table.Cell>
          <span className='line-clamp-3'>
            {collection.description}
          </span>
        </Table.Cell>
      )
    }

    if (columnOptions[4].checked) {
      nodes.push(<Table.Cell>{collection.hidden ? t('Hidden') : t('Show')}</Table.Cell>)
    }

    if (columnOptions[5].checked) {
      nodes.push(<Table.Cell>{collection.createdAt}</Table.Cell>)
    }

    if (columnOptions[6].checked) {
      nodes.push(<Table.Cell>{collection.updatedAt}</Table.Cell>)
    }

    nodes.push(
      <Table.Cell className='gap-2'>
        <button>
          <IconGear className='w-5 h-5' />
        </button>
        <button>
          <IconTrashCan className='w-5 h-5' />
        </button>
      </Table.Cell>
    )

    return {
      key: collection.id,
      checked: collection.checked,
      nodes
    }
  }

  return (
    <div className='w-full rounded-lg border border-primary bg-secondary'>
      <Table.Header
        title={t('CollectionManager')}
        buttonAdd={true}
        buttonAddText={t('AddNewCollection')}
        onClickButtonAdd={() => Utils.GlobalComponent.CollectionModal.show()} />
      <Table
        minWidth={1200}
        columns={widthOfColumns}
        baseWidth={120}
        header={[
          <Table.Cell className='gap-2'>
            <CheckBox
              key={page}
              checked={isCheckAll}
              onChange={() => {
                const newCollections = collections.map((collection, index) => ({
                  ...collection,
                  checked: (index >= page * limit && index < (page + 1) * limit) ? !isCheckAll : collection.checked
                }))
                setCollections(newCollections)
              }} />
            ID
          </Table.Cell>,
          ...renderHeader,
          <Table.Cell>
            MANAGER
          </Table.Cell>,
        ]}
        rows={collections.slice(page * limit, (page + 1) * limit).map((collection) => renderRow(collection))} />
      <Table.Footer
        page={page + 1}
        limit={limit}
        number={Math.min(limit, collections.slice(page * limit, (page + 1) * limit).length)}
        total={total}
        totalPage={Math.ceil(total / limit)}
        columnOptions={columnOptions}
        onSelectColumn={option => {
          const index = columnOptions.findIndex(item => item.id === option.id)
          if (!columnOptions[index].disabled) {
            columnOptions[index].checked = !columnOptions[index].checked
            setColumnOptions([...columnOptions])
          }
        }}
        onChangePage={page => dispatch(setPage(page - 1))}
        onChangeLimit={limit => dispatch(setLimit(limit))} />
    </div>
  )
}

export default CollectionTable