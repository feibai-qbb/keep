import Vue from 'vue'
import Vuex from 'vuex'
import Home from './mod/home'
import Community from './mod/community'
import Plan from './mod/plan'
import Mine from './mod/mine'
import Shop from './mod/shop'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Home,
        Plan,
        Community,
        Mine,
        Shop
    }
})