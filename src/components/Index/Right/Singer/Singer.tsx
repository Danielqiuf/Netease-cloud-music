import { defineComponent,onMounted,reactive } from 'vue' 
import { artistsList } from '@/api'
import { reqResult } from '@/interface/request'
import { ArtistsResponse, ArtistsResponseRaw } from '@/interface/response'
import Vd from '_c/public/VdTitle/VdTitle'

import './singer.scss'
import '_c/global.scss'

export default defineComponent({
  components: { Vd },
  setup() {
    const SingerResult = reactive<reqResult<ArtistsResponse>>({
      data:[]
    })

    onMounted(async () => {
      const result = await artistsList<ArtistsResponseRaw>({
        limit:6
      })
      SingerResult.data = result.data.artists
    })
      

    return () => ( 
      <div class="n-singer">
        <Vd left="入驻歌手" right="查看全部>" />
        <ul class="n-center f-cb">
          {  
            SingerResult.data.map(({name,img1v1Url}) => {
              return <li>
                <a href="#" class="itm f-tdn">
                  <div class="head">
                    <img src={img1v1Url + '?param=62y62'} class="j-img"/>
                  </div>
                  <div class="ifo">
                    <h4>
                      <span class="nm f-fs1 f-ib f-thide">{ name }</span>
                      <p class="f-thide s-fc3"></p>
                    </h4>
                    <p class="f-thide s-fc3">卡卡</p>
                  </div>
                </a>
              </li>
            })
          }
        </ul>
        
      </div>
    )
  }
})  