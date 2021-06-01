import { getlink } from '@/api/home/nav.js'
export let home = {
    state: {
        onearr: [],
        twoarr: [],
        three: [],
        home: {},
        tuijian: [],
        spots: []
    },
    mutations: {
        uparr(state, payload) {
            state.onearr = payload.data.onearr;
            state.twoarr = payload.data.twoarr;
            state.three = payload.data.three;
            state.home = payload.data.home;
            state.tuijian = payload.data.tuijian;
            state.spots = payload.data.spots;
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