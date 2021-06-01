import Vue from 'vue'
import Vuex from 'vuex'
import { home } from './mod/home.js'
import { community } from './mod/community.js'
import { plan } from './mod/plan.js'
import { mine } from './mod/mine.js'
import { shop } from './mod/shop.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        plan,
        community,
        mine,
        shop
    }
})