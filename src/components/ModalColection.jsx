import { useId, useState } from "react"
import { Modal } from "./Modal"
import { ButtonCancelCircle } from "./ButtonCancelCircle"
import Util from "~/utils"
import { ACTION_TYPE } from "~/configs"
import { GroupButtonModal } from "./GroupButtonModal"
import { TextField } from "."
import { AreaField } from "./AreaField"
import { SearchField } from "./SearchField"

const defaultConfig = {
  type: ACTION_TYPE.CREATE,

}


export const ModalCollection = () => {

  const [show, setShow] = useState(true)
  const [config, setConfig] = useState({ ...defaultConfig })

  Util.modalCollection = {
    isShow: show,
    show: (newConfig = {}) => {
      setConfig({ ...config, ...newConfig })
      setShow(true)
    },
    hide: () => {
      setShow(false)
    }
  }

  const [name, setName] = useState("")
  const [des, setDes] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [color, setColor] = useState("#ffffff")
  const id = useId()

  return (
    <Modal
      show={show}
      onClickOutsize={() => setShow(false)}>
      <div className="z-[2] w-full max-w-[500px] min-h-[200px] max-h-[calc(100vh-40px)] overflow-hidden flex flex-col bg-main text-main relative p-1 rounded-md">
        <ButtonCancelCircle
          className="absolute top-2 right-2"
          onClick={() => setShow(!show)} />

        <div className="w-full text-center py-2 font-semibold text-xl">
          Collection
        </div>
        <div className="flex-1 p-1 mt-2 overflow-y-auto">
          <TextField
            label={"Collection name"}
            value={name}
            onChange={e => setName(e.target.value)} />
          <AreaField
            className="mt-5"
            label={"Collection description"}
            value={des}
            onChange={e => setDes(e.target.value)} />
          <div className="flex flex-row mt-3 items-center">
            <span>Color:</span>
            <label htmlFor={id} className="h-9 w-16 ml-2 border border-main rounded cursor-pointer" style={{ backgroundColor: color }}></label>
            <input
              id={id}
              type="color"
              onChange={e => setColor(e.target.value)}
              className="size-0 overflow-hidden cursor-pointer" />
          </div>
          <div className="w-full h-[800px] mt-2">
            <span className="text-sm">Product list:</span>
            <SearchField
              className="mt-1"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              showIconClear={searchValue.length > 0}
              onClickButtonClear={() => setSearchValue("")}
              isLoading={true}
              placeHolder="Enter something" />
          </div>
        </div>
        <GroupButtonModal />
      </div>
    </Modal>
  )
}