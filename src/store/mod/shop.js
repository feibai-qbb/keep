import { getlink } from '@/api/home/nav.js'
export let shop = {
    state: {
        img: {},
        homes: {},
        item: [],
        last: [],

    },
    mutations: {
        uparr(state, payload) {
            state.img = payload.data.img;
            state.homes = payload.data.homes;
            state.item = payload.data.item;
            state.last = payload.data.last;
        }
    },
    actions: {
        axioslink(context, payload) {
            getlink(payload.url).then((ok) => {
                context.commit("uparr", ok)
            })
        }
    },
}