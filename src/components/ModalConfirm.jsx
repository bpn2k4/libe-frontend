import { useState } from "react"
import { Modal } from "./Modal"
import { IconCancel } from "./Icon"
import { ButtonCancelCircle } from "./ButtonCancelCircle"
import Util from "~/utils"

const defaultConfig = {
  title: "Title",
  message: "Message",
  buttonLeftText: "Cancel",
  buttonRightText: "Cancel"
}

export const ModalConfirm = () => {

  const [show, setShow] = useState(false)
  const [config, setConfig] = useState({ ...defaultConfig })

  Util.modalConfirm = {
    isShow: show,
    show: () => {
      setShow(true)
    },
    hide: () => {
      setShow(false)
    },
  }

  return (
    <Modal show={show} onClickOutsize={() => setShow(false)}>
      <div className="flex flex-col w-full max-w-sm bg-main text-main rounded-md z-[2] relative p-1">
        <ButtonCancelCircle
          className="absolute top-2 right-2"
          onClick={() => setShow(!show)} />
        <div className="mt-6 px-3 flex flex-col items-center pb-8">
          <span className="font-semibold">{config.title}</span>
          <span className="mt-1">{config.message}</span>
        </div>
        <div className="w-full flex flex-row gap-1 text-sm font-semibold">
          <button className="w-full h-10 border rounded border-main">OK</button>
          <button className="w-full h-10 border rounded border-main">Cancel</button>
        </div>
      </div>
    </Modal>
  )
}