/*
 * @Author: your name
 * @Date: 2019-10-21 21:31:48
 * @LastEditTime: 2019-10-21 22:11:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /d:\briup\8vue\ej_food\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import axios from 'axios'
import qs from 'qs'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
