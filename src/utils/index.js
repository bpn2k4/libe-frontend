

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
    global: {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken')
    }
}

export default Util