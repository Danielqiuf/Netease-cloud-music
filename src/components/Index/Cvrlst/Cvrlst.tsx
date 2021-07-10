import { defineComponent,onMounted,reactive } from 'vue' 
import { personalized } from '@/api'
import { reqResult } from '@/interface/request'
import { PersonalizedResponse,PersonalizedResponseRaw  } from '@/interface/response'

import './cvrlst.scss'
import '_c/global.scss'

export default defineComponent({ 
  setup() {
    const recommendResult = reactive<reqResult<PersonalizedResponse>>({
      data:[]
    })

    onMounted(async () => {
      const result = await personalized<PersonalizedResponseRaw>();
      recommendResult.data = result.data.result;
    })

    console.log(recommendResult.data)
    return () => (
      <ul class="m-cvrlst f-cb">
        { 
          recommendResult.data.map(({ picUrl,name,playCount }) => {
            return (
              <li>
                <div class="u-cover u-cover-1">
                  <img src={ picUrl } />
                  <a href="#" title={ name } class="msk"></a>
                  <div class="bottom">
                    <a href="javascript:void(0);" class="icon-play"></a>
                    <span class="icon-headset"></span>
                    <span class="nb">{ playCount }</span>
                  </div>
                </div> 
                <p class="dec">
                  <a href="#" title={ name } class="tit s-fc0">
                    { name }
                  </a>
                </p>
              </li>
            ) 
          })
         }
      </ul>
    )
  }
})  