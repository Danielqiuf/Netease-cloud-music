import { defineComponent,onMounted,reactive } from 'vue' 

import './profile.scss'
import '_c/global.scss'

export default defineComponent({
  setup() {

    return () => (
      <div class="n-user-profile">
        <div class="n-myinfo n-myinfo-1 s-bg s-bg-1">
          <p class="note s-fc3 s-end">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a href="#" class="btn s-bg s-bg-2">用户登录</a>
        </div>
      </div>
    )
  }
})