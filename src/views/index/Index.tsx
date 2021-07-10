import {defineComponent} from 'vue'
import Banner from '_c/Index/Banner/Banner'
import Tab from '_c/Index/Tab/Tab'
import Cvrlst from '_c/Index/Cvrlst/Cvrlst'
import Right from '_c/Index/Right/Right'

import './index.scss';

export default defineComponent({
  components:{ Banner, Tab, Cvrlst, Right },
  setup() {


    const renderRecommend = () => {
      return (
        <div class="v-hd2">
          <a class="tit">热门推荐</a>
          <Tab />
          <span class="more">
            <a href="#" class="s-fc3 s-end">更多</a>
            <i class="cor s-bg s-bg6">&nbsp;</i>
          </span>
        </div>
      )
    }

    const renderDiscover = () => {
      return (
        <div class="g-bd1 f-cb">
          <div class="g-mn1">
            <div class="g-mn1c">
              <div class="g-wrap3">
                <div>
                  { renderRecommend() }
                  <Cvrlst />
                </div>
              </div>
            </div>
          </div>
          <Right />
        </div>
      )
    }

    return () => ( 
      <div> 
        <Banner interval={ 2000 } duration={ 800 } cDuration={ 200 } />
        { renderDiscover() }
      </div>
    )
  
  }
}) 