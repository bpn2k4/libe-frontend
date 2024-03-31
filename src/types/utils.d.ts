import { ButtonLeft, ButtonRight } from './components'

type ModalActionType = 'CREATE' | 'UPDATE' | 'VIEW'

type ActionType = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  VIEW: 'VIEW',
}

type ShowModalCollectionConfig = {
  type: ModalActionType,
  buttonLeft: ButtonLeft,
  buttonRight: ButtonRight,
}

export type ModalCollection = {
  type: ActionType,
  isShow: Boolean,
  show: (config: ShowModalCollectionConfig) => void,
  hide: Function
}

type ShowModalConfirmConfig = {
  type: ModalActionType,
  title: String,
  message: String,
  buttonLeft: ButtonLeft,
  buttonRight: ButtonRight,
}

export type ModalConfirm = {
  isShow: Boolean,
  show: (config: ShowModalConfirmConfig) => void,
  hide: Function
}