import { defineComponent, onMounted, reactive,ref } from 'vue' 
import { banner } from '@/api'
import { BannerResponse, reqResult, BannerResponseRaw } from '@/interface/request'
import './banner.scss'
import '../global.scss'

enum Direction { 
  Left = 1,
  Right = 2
}

export default defineComponent({
  name:'Banner',
  setup() { 
    const state = reactive({ 
      currentIndex: 0
    })

    const bannerResult = reactive<reqResult<BannerResponse>>({
      data:[]
    }); 
    onMounted(async () => {
      const result = await banner<BannerResponseRaw>({});
      console.log(result.data.banners)
      bannerResult.data = result.data.banners;
    })

    const renderArrowIcon = (direction: Direction) => {
      if(direction) {
        const className = (function() {
          let cl = ''
          switch (direction) {
            case 1: 
              cl = 'btnl';
              break;
            case 2:
              cl = 'btnr';
              break;
          }
          return `${cl} click-flag f-alpha`
        })()
        return (
          <a href="javascript:void(0)" class={ className }></a>
        )
      } 
    }

    const getImageUrl = (key:keyof BannerResponse) => {
      if(bannerResult.data.length) {
        return bannerResult.data[state.currentIndex][key]
      }
    }

    const renderBannerImage = () => {
      if (bannerResult.data) {
        return <img class="d-flag" src={ getImageUrl('imageUrl') } />
      }
    } 

    const renderBanner = () => {
      if(bannerResult.data) {
        return (
          <div class="wrap">
            <div class="ban f-pr">
              <div class="ban-img">
                <a href="#" style="overflow:hidden" target="_blank">
                  { renderBannerImage() }
                </a>
              </div>
              { renderArrowIcon(Direction.Left) }
              { renderArrowIcon(Direction.Right) }
            </div>
          </div>
        )
      }
    }

    return () => (
      <div class="n-ban d-flag" id="index-banner">
        { renderBanner() }
      </div>
    )
  }
})
 
