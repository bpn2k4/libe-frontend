

const Util = {
  menuLeft: {
    isShow: true,
    show: () => 1,
    hide: () => 1
  },
  cartRight: {
    isShow: true,
    show: () => 1,
    hide: () => 1
  },
  searchRight: {
    isShow: true,
    show: () => 1,
    hide: () => 1
  },
  modalConfirm: {
    isShow: false,
    show: () => 1,
    hide: () => 1
  },

  /**@type {import("~/types").ModalCollection} */
  modalCollection: {
    isShow: false,
    show: () => 1,
    hide: () => 1
  },
  global: {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken')
  },

  getCurrentTime: () => {
    const date = new Date()
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    const miliseconds = String(date.getMilliseconds())
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}:${miliseconds}`
  },
  formatDate: (datetime) => {
    const date = new Date(datetime)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    const miliseconds = String(date.getMilliseconds()).padStart(4, '0')
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}:${miliseconds}`
  }
}

export default Util