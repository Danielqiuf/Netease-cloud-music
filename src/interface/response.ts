
interface RecommendResourceCreator {
  detailDescripion:string;
  djStatus:number;
  backgroundUrl:string;
  vipType:number;
  avatarUrl:string;
  nickname:string;
  userType:number;
  gender:string | number;
  birthday:number;
}


export interface BannerResponse {
  imageUrl:string;
  titleColor:string;
  scm:string;
}

export interface RecommendResourceResponse {
  id:number;
  type:number;
  picUrl:string;
  playcount:number | string;
  createTime:number | string;
  creator?:RecommendResourceCreator;
}

export interface PersonalizedResponse {
  alg:string;
  canDislike:boolean;
  copywriter:string;
  id:number;
  name:string;
  picUrl:string;
  playCount:number; 
  trackCount:number;
}

export interface ArtistsResponse {
  img1v1Id:number;
  topicPerson:number;
  musicSize:number;
  alias:(string | number)[];
  albumSize:number;
  img1v1Url:string;
  name:string;
  id:number;
  picUrl:string;
}

export interface ArtistsListResponse {
  
}

export interface ArtistsResponseRaw {
  artists: ArtistsResponse[]
}

export interface BannerResponseRaw {
  banners: BannerResponse[]
}  

export interface RecommendResourceRaw {
  recommend: RecommendResourceResponse[]
}

export interface PersonalizedResponseRaw {
  result: PersonalizedResponse[]
}

