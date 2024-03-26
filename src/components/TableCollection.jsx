import { useState } from "react"
import { twMerge } from "tailwind-merge"

import { Table, TableRow, TableCell, TableHead, TableBody, TablePagination } from "./Table"
import { CheckBox } from './CheckBox'
import data from "../data"
import { Select } from "./Select"
import { IconPlus } from "./Icon"
import Util from "~/utils"

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

  const [collections, setCollections] = useState(data.collections.slice(0, 10))

  return (
    <div className={twMerge('w-full rounded-md', className)}>
      <div className="flex flex-col md:flex-row md:justify-between px-2 py-2">
        <h1 className="font-semibold text-xl">Collection</h1>
        <div className="flex flex-row gap-1">
          <Select
            value={""}
            cx={{ wrapper: "h-9" }}
            label={"Sort by"} />
          <button
            className="h-9 px-3 rounded border border-primary center active:scale-98 transition-transform"
            onClick={() => Util.modalCollection.show()}>
            <IconPlus className='w-4 h-4 mr-2' />
            Add Collection
          </button>
        </div>
      </div>
      <Table className=''>
        <TableHead>
          <TableRow className='!bg-transparent border-b border-main text-left'>
            <TableCell th>
              <CheckBox
                checked={false}
                onClick={() => {

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
                // checked={collection.checked}
                // onClick={() => {
                //   user.checked = !user.checked
                //   setUsers([...users])
                // }}
                />
              </TableCell>
              <TableCell>{collection.id}</TableCell>
              <TableCell>{collection.name}</TableCell>
              <TableCell>{collection.description}</TableCell>
              <TableCell>
                <div
                  className="w-8 h-8"
                  style={{ backgroundColor: `#${collection.color}` }} />
              </TableCell>
              <TableCell>{collection.totalProduct}</TableCell>
              <TableCell>{formatDate(collection.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        className="px-2 mt-3 pb-2"
        page={3}
        total={10} />
    </div>
  )
}