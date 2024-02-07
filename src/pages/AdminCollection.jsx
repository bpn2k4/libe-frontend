import { Table, TableRow, TableCell, CheckBox, TableHead, TableBody } from "~/components"

import data from '../data'
import { useState } from "react"

export const AdminCollection = () => {

  const [users, setUsers] = useState(data.users.map(item => ({ ...item, checked: false })))
  const isCheckAll = users.reduce((pre, item) => pre && item.checked, true)

  return (
    <div className="w-full">
      <div className="w-full p-4">
        <Table>
          <TableHead>
            <TableRow className='!bg-transparent'>
              <TableCell th>
                <CheckBox
                  checked={isCheckAll}
                  onClick={() => {
                    setUsers(users.map(item => ({ ...item, checked: !isCheckAll })))
                  }} />
              </TableCell>
              <TableCell th>ID</TableCell>
              <TableCell th>NAME</TableCell>
              <TableCell th>AGE</TableCell>
              <TableCell th>GENDER</TableCell>
              <TableCell th>EMAIL</TableCell>
              <TableCell th>ADDRESS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell th>
                  <CheckBox
                    checked={user.checked}
                    onClick={() => {
                      user.checked = !user.checked
                      setUsers([...users])
                    }} />
                </TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}