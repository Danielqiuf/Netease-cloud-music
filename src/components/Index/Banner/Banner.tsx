import { defineComponent, onMounted, reactive,ref,computed, CSSProperties } from 'vue' 
import { banner } from '@/api'
import { reqResult } from '@/interface/request'
import { BannerResponseRaw, BannerResponse } from '@/interface/response'
import { BannerArrowDirection } from '@/enum'
import './banner.scss'
import '_c/global.scss'
 

export default defineComponent({
  name:'Banner',
  props: {
    duration: {
      type: Number,
      default: 1000
    },
    interval: {
      type: Number,
      default: 5000
    },
    cDuration:{
      type: Number,
      default: 300
    }
  },
  setup(props) { 
    const state = reactive({
      swipeIndex: 0,
      swiping: false,
      tranState: 0,
      clicked: false
    })

    const imageRef = ref<HTMLImageElement>()

    const imageSrc = ref<string>('')

    const bannerResult = reactive<reqResult<BannerResponse>>({
      data:[]
    }); 

    let timeout: NodeJS.Timeout;

    onMounted(async () => {
      const result = await banner<BannerResponseRaw>({});
      console.log(result.data.banners)
      bannerResult.data = result.data.banners;
    })

    const onArrowClick = (direction: BannerArrowDirection) => {
      if(!state.swiping){
        stopPlay()
        state.clicked = true
        switch (direction) {
          case 1: 
            state.swiping = true
            prev();
            break;
          case 2:
            state.swiping = true
            next();
            break;
        }
      }
      
    }

    const renderArrowIcon = (direction: BannerArrowDirection) => {
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
          <a href="javascript:void(0)" onClick={ () => onArrowClick(direction) } class={ className }></a>
        )
      } 
    }

    const stackSwipeStyle = computed(() => {
      const timingFunction: [string, string, string] = ['none', 'ease-in', 'ease-out']
      const Opacity: [number, number, number] = [1,0.2,1]
      const style: CSSProperties = {
        'transitionDelay':'0s',
        'transitionDuration':durationTimer.value + 'ms',
        'transitionProperty':state.tranState === 0 ? 'none' : 'opacity',
        'transitionTimingFunction':timingFunction[state.tranState],
        'opacity':Opacity[state.tranState]
      }
      return style;
    })

    const imageBlurStyle = computed(() => {
      const style: CSSProperties = {
        'backgroundImage':`url(${getImageUrl('imageUrl', true)})`,
        'backgroundSize':'6000px',
        'backgroundPosition':'center center'
      }
      return style
    })

    const durationTimer = computed(() => {
      return (state.clicked) ? props.cDuration : props.duration
    })

    const getImageUrl = (key:keyof BannerResponse, blur = false) => {
      if(bannerResult.data.length) {
        return bannerResult.data[state.swipeIndex][key] + (blur ? '?imageView&blur=40x20' : '')
      }
    }

    const renderBannerImage = () => {
      if (bannerResult.data) {
        imageSrc.value = getImageUrl('imageUrl') as string
        const imageAttrs = {
          ref:imageRef,
          class:'d-flag',
          src:imageSrc.value
        }
        return <img { ...imageAttrs } style={ stackSwipeStyle.value } />
      }
    } 

    const renderDownload = () => {
      return (
        <div class="download f-pr">
          <a href="/download" class="btn">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span class="shadow"></span>
          <span class="shadowr"></span>
        </div>
      )
    }

    const renderBanner = () => {
      const RenderDownload = renderDownload();
      if(bannerResult.data) {
        return (
          <div class="wrap">
            <div class="ban f-pr">
              <div class="ban-img">
                <a href="#" style="overflow:hidden" target="_blank">
                  { renderBannerImage() }
                </a>
              </div>
              { renderArrowIcon(BannerArrowDirection.Left) }
              { renderArrowIcon(BannerArrowDirection.Right) }
            </div>
            { RenderDownload }
          </div>
        )
      }
    }

    const hidden = (fn?:() => void): Promise<any> => {
      state.tranState = 1
      return new Promise<any>((resolve:(value?:any) => void) => {
        setTimeout(() => {
          fn && fn()
          resolve()
        }, durationTimer.value)
      })  
    }

    

    const show = (fn?:() => void): Promise<any> => {
      state.tranState = 2
      return new Promise<any>((resolve:(value?:any) => void) => {
        setTimeout(() => {
          fn && fn()
          resolve()
        }, durationTimer.value)
      })  
    }

    const None = () => (state.tranState = 0);


    const next = async () => {  
      await hidden(() => {
        if((state.swipeIndex + 1) >= bannerResult.data.length) {
          state.swipeIndex = 0
        } else {
          state.swipeIndex++
        }
      })
      await show(None)
      state.swiping = false
      state.clicked = false
    }

    const prev = async () => {
      
      await hidden(() => {
        if((state.swipeIndex - 1) < 0) {
          state.swipeIndex = bannerResult.data.length - 1
        } else {
          state.swipeIndex--
        }
      })
      await show(None)
      state.swiping = false
      state.clicked = false
    }

    const stopPlay = () => clearTimeout(timeout)

    const changeBanner = () => {
      stopPlay()
      timeout = setTimeout(() => {
        next();
      }, props.interval)
    }

    return () => {
      changeBanner();
      return (
        <div class="n-ban d-flag" id="index-banner" style={ imageBlurStyle.value }>
          { renderBanner() }
        </div>
      )
    }
  }
})
 
