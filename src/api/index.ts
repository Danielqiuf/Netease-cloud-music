import request from '_u/request'
import { 
  Banner,
  reqBannerVos
} from '@/interface/request'
import { AxiosPromise } from 'axios'

export const banner = <T = {}>(data: reqBannerVos): AxiosPromise<T> => {
  return request({
    url: '/banner',
    method: 'GET',
    params: {
      ...data
    }
  })
}