import { useEffect, useState } from "react"
import { Modal } from "./Modal"
import { IconCancel } from "./Icon"
import { ButtonCancelCircle } from "./ButtonCancelCircle"
import Util from "~/utils"
import { useTranslation } from "react-i18next"
import { GroupButtonModal } from "./GroupButtonModal"


export const ModalConfirm = () => {

  const { t } = useTranslation()

  const defaultConfig = {
    title: "Title",
    message: "Message",
    buttonLeft: {
      text: t("No"),
      onClick: () => setShow(false)
    },
    buttonRight: {
      text: t("Yes")
    }
  }
  const [show, setShow] = useState(false)
  const [config, setConfig] = useState({ ...defaultConfig })

  Util.modalConfirm = {
    isShow: show,
    show: (_config = {}) => {
      setConfig({
        ...defaultConfig,
        ..._config
      })
      setShow(true)
    },
    hide: () => {
      setShow(false)
    },
  }

  useEffect(() => {
    if (!show) {
      setConfig({ ...defaultConfig })
    }
  }, [show])

  return (
    <Modal show={show} onClickOutsize={() => setShow(false)}>
      <div className="flex flex-col w-full max-w-sm bg-primary text-primary rounded-md z-[2] relative p-1">
        <ButtonCancelCircle
          className="absolute top-2 right-2"
          onClick={() => setShow(!show)} />
        <div className="mt-6 px-3 flex flex-col items-center pb-8">
          <span className="font-semibold">{config.title}</span>
          <span className="mt-1">{config.message}</span>
        </div>
        <GroupButtonModal
          buttonLeft={{
            ...config.buttonLeft
          }}
          buttonRight={{
            ...config.buttonRight
          }} />
      </div>
    </Modal>
  )
}