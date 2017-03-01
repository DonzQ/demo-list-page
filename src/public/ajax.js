/**
 * Created by tangzhiqiang on 2017/2/16.
 */

import Vue from 'vue'
const ajax = {
  xhrHttp (params, callback, error) {
    Vue.http({
      url: params.url,
      params: params.data,
      method: params.method
    }).then((response) => {
      callback && callback(response)
    }).catch((err) => {
      error && error(err)
    })
  },
  getDataFromApi (params, callback, error) {
    params.method = 'get'
    this.xhrHttp(params, callback, error)
  }
}

export default ajax
