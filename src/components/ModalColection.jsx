import { useState } from "react"
import { Modal } from "./Modal"
import { ButtonCancelCircle } from "./ButtonCancelCircle"
import Util from "~/utils"
import { ACTION_TYPE } from "~/configs"
import { GroupButtonModal } from "./GroupButtonModal"
import { TextField } from "."
import { AreaField } from "./AreaField"

const defaultConfig = {
  type: ACTION_TYPE.VIEW
}


export const ModalCollection = () => {

  const [show, setShow] = useState(true)

  Util.modalCollection = {
    isShow: show,
    show: () => {
      setShow(true)
    },
    hide: () => {
      setShow(false)
    }
  }

  const [name, setName] = useState("")
  const [des, setDes] = useState("")

  return (
    <Modal
      show={show}
      onClickOutsize={() => setShow(false)}>
      <div className="z-[2] w-full max-w-[500px] min-h-[200px] flex flex-col bg-main text-main relative p-1">
        <ButtonCancelCircle
          className="absolute top-2 right-2"
          onClick={() => setShow(!show)} />

        <div className="w-full text-center py-2 font-semibold text-xl">
          Collection
        </div>
        <div className="flex-1 p-1 mt-2">
          <TextField
            label={"Collection name"}
            value={name}
            onChange={e => setName(e.target.value)} />
          <AreaField
            className="mt-4"
            label={"Collection description"}
            value={des}
            onChange={e => setDes(e.target.value)} />
        </div>
        <div className="flex flex-row">

        </div>
        <GroupButtonModal />
      </div>
    </Modal>
  )
}