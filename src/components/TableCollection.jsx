import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { twMerge } from 'tailwind-merge'

import { Table, TableRow, TableCell, TableHead, TableBody, TablePagination } from './Table'
import { CheckBox } from './CheckBox'
import { Select } from './Select'
import { IconGear, IconPlus, IconTrashCan } from './Icon'
import Util from '~/utils'
import { setCollections, setLimit, setPage, thunkGetListCollection } from '~/slices/AdminCollection'
import ButtonBulkDelete from './ButtonBulkDelete'

const formatDate = (dateString) => {
  var date = new Date(dateString)
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  day = day < 10 ? '0' + day : day
  month = month < 10 ? '0' + month : month
  return day + '-' + month + '-' + year
}

export const TableCollection = ({ className }) => {

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { isFetching, collections, page, total, limit } = useSelector(state => state.adminCollection)
  const ref = useRef()

  useEffect(() => {
    dispatch(setPage(0))
  }, [limit])
  useEffect(() => {
    if (ref.current) {

    }
    dispatch(thunkGetListCollection({ page: page, limit: limit }))
  }, [page, limit])

  const isCheckedAll = collections.length == 0 ? false : collections.reduce((pre, item) => pre && item.isChecked, true)

  const options = [
    { display: `${t('Show')} 5 ${t('Collection').toLowerCase()}`, value: 5 },
    { display: `${t('Show')} 10 ${t('Collection').toLowerCase()}`, value: 10 },
    { display: `${t('Show')} 20 ${t('Collection').toLowerCase()}`, value: 20 },
    { display: `${t('Show')} 50 ${t('Collection').toLowerCase()}`, value: 50 },
  ]

  const showModalViewCollection = (collection) => {
    Util.modalCollection.show({
      type: Util.modalCollection.type.UPDATE,
      collection: collection
    })
  }

  const selectedCollectionIds = collections.filter(collection => collection.isChecked).map(collection => collection.collection)

  const handleBuilkDeleteCollection = async () => {

  }

  return (
    <div ref={ref} className={twMerge('w-full rounded-md shadow-primary bg-table', className)}>
      <div className='flex flex-col md:flex-row md:justify-between px-2 py-2'>
        <h1 className='font-semibold text-xl'>Collection</h1>
        <div className='flex flex-row gap-1 items-center'>
          <ButtonBulkDelete
            className={twMerge(
              selectedCollectionIds.length == 0 ? 'hidden' : 'flex'
            )}
            number={selectedCollectionIds.length}
            onClick={() => Util.modalConfirm.show({
              title: "Delete",
              message: "Are you sure to delete these collection?"
            })} />
          <Select
            value={''}
            cx={{ wrapper: 'h-9' }}
            label={'Sort by'} />
          <button
            className='h-9 px-3 rounded border border-primary center active:scale-98 transition-transform'
            onClick={() => Util.modalCollection.show({ type: Util.modalCollection.type.CREATE })}>
            <IconPlus className='w-4 h-4 mr-2' />
            Add Collection
          </button>
        </div>
      </div>
      <Table className='' isLoading={isFetching}>
        <TableHead>
          <TableRow className='!bg-transparent border-b border-main text-left'>
            <TableCell th>
              <CheckBox
                checked={isCheckedAll}
                onClick={() => {
                  const newCollections = collections.map(item => ({ ...item, isChecked: !isCheckedAll }))
                  dispatch(setCollections(newCollections))
                }} />
            </TableCell>
            <TableCell th>ID</TableCell>
            <TableCell th>Name</TableCell>
            <TableCell th>Description</TableCell>
            <TableCell th>Color</TableCell>
            <TableCell th>Product</TableCell>
            <TableCell th>Create</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {collections.map((collection, index) => (
            <TableRow key={index}>
              <TableCell th>
                <CheckBox
                  checked={collection.isChecked}
                  onClick={() => {
                    const newCollection = collections.map(item => ({
                      ...item,
                      isChecked: item.collectionId == collection.collectionId ? !item.isChecked : item.isChecked
                    }))
                    dispatch(setCollections(newCollection))
                  }}
                />
              </TableCell>
              <TableCell>{collection.collectionId}</TableCell>
              <TableCell>{collection.name}</TableCell>
              <TableCell>{collection.description}</TableCell>
              <TableCell>
                <div
                  className='w-8 h-8 border border-primary'
                  style={{ backgroundColor: `#${collection.color}` }} />
              </TableCell>
              <TableCell>{collection.totalProduct}</TableCell>
              {/* <TableCell>{formatDate(collection.createdAt)}</TableCell> */}
              <TableCell>
                <div className='flex flex-row items-center gap-1'>
                  <button
                    className='hover:text-blue-500 active:scale-95 transition-all'
                    onClick={() => showModalViewCollection(collection)}>
                    <IconGear className='stroke-[1.2]' />
                  </button>
                  <button className='hover:text-red-500 active:scale-95 transition-all'>
                    <IconTrashCan className='stroke-[1.2]' />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        className='px-2 mt-3 pb-2'
        page={page + 1}
        onChangePage={page => dispatch(setPage(page - 1))}
        numberPerPage={limit}
        total={total}
        cx={{ select: 'w-[168px]' }}
        options={options}
        numberDisplay={`${t('Show')} ${limit} ${t('Collection').toLowerCase()}`}
        onChangeNumberPerPage={item => dispatch(setLimit(item.value))} />
    </div>
  )
}