import { ButtonLeft, ButtonRight } from "./components"

type ModalActionType = "CREATE" | "UPDATE" | "VIEW"

type ShowModalCollectionConfig = {
  type: ModalActionType,
  buttonLeft: ButtonLeft,
  buttonRight: ButtonRight,
}

export type ModalCollection = {
  isShow: Boolean,
  show: (config: ShowModalCollectionConfig) => void,
  hide: Function
}