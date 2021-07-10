import request from '_u/request'
import { 
  reqBannerVos,
  reqPersonalizedVos,
  reqArtistsVos,
  reqArtistslistVos,
  reqDjPopularVos
} from '@/interface/request'
import { AxiosPromise } from 'axios'

export const banner = <T = {}>(data?: reqBannerVos): AxiosPromise<T> => {
  return request({
    url: '/banner',
    method: 'GET',
    params: {
      ...data
    }
  })
}

export const personalized = <T = {}>(data?: reqPersonalizedVos): AxiosPromise<T> => {
  return request({
    url: '/personalized',
    method: 'GET',
    params: {
      ...data
    }
  })
}

export const djPopular = <T = {}>(data?: reqDjPopularVos): AxiosPromise<T> => {
  return request({
    url: '/dj/toplist/popular',
    method: 'GET',
    params: {
      ...data
    }
  })
}

export const artistsList = <T = {}>({type = -1, area = -1, ...others}: reqArtistslistVos): AxiosPromise<T> => {
  return request({
    url:'/artist/list',
    method:'GET',
    params:{
      type, area, ...others
    }
  })
}

export const artists = <T = {}>(data?: reqArtistsVos): AxiosPromise<T> => {
  return request({
    url:'/top/artists',
    method:'GET',
    params:{
      ...data
    }
  })
}

export const recommend = <T = {}>(): AxiosPromise<T> => {
  return request({
    url:'/recommend/resource',
    method:'GET',
    params:{}
  })
}