import axios from 'axios'
import { environment } from '../../environments'
import { requestInterceptor } from './interceptors/request_interceptor'

const api = axios.create({
  baseURL: environment.URL_IPA_ALLY,
})
api.interceptors.request.use((request) => requestInterceptor(request))

export { api }
