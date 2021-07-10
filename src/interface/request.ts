import { AxiosPromise } from 'axios'

export interface reqBannerVos {
  type?: number;
}

export interface reqPersonalizedVos {
  limit?: number;
}

export interface reqArtistsVos {
  offset?: number;
  limit?: number;
}

export interface reqDjPopularVos {
  limit:number;
}

export interface reqArtistslistVos {
  offset?: number;
  limit?: number;
  initial?:string;
  type?: number;
  area?: number;
}

export interface Banner<T = {}> {
 (data: T & reqBannerVos): AxiosPromise<T>
}

export interface reqResult<T = {}> {
  data: T[]
} 
