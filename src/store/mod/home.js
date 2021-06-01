export const home = {
    state: {
        arr: [],
    },
    mutations: {
        uparr(state, payload) {
            state.arr = payload
        }
    },
    actions: {
        axioslink(context, payload) {
            getlink(payload.url).then((ok) => {
                console.log(ok)
                context.commit("uparr", ok)
            })
        }
    },
}