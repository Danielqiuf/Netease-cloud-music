import { AxiosPromise, AxiosResponse } from 'axios'


export interface reqBannerVos {
  type?: number
}

export interface Banner<T = {}> {
 (data: T & reqBannerVos): AxiosPromise<T>
}

export interface BannerResponse {
  imageUrl:string;
  titleColor:string;
  scm:string;
}

export interface BannerResponseRaw {
  banners: BannerResponse[]
}

export interface reqResult<T = {}> {
  data: Array<T>
} 
