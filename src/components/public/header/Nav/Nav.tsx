import { defineComponent, reactive,ref } from 'vue'
import '_c/global.scss'
import './nav.scss'

export type NavFlag = {
  title: string
}

export default defineComponent({
  setup() {
    const nav = reactive<NavFlag[]>([
      {
        title:'发现音乐'
      },{
        title:'我的音乐'
      },{
        title:'朋友'
      },{
        title:'商城'
      },{
        title:'音乐人'
      },{
        title:'下载客户端'
      }
    ])

    const renderHot = (index: number) => {
      if(index >= (nav.length - 1)) {
        return (
          <sup class="hot">&nbsp;</sup>
        )
      }
      return ''
    }
    
    return () => (
      <ul class="m-nav j-tflag">
          {
            nav.map(({ title }, index) => {
              return (
              <li>
                <span>
                  <a href="/#">
                    <em>{ title }</em>
                    <sub class="cor">&nbsp;</sub>
                  </a>
                </span>
                { renderHot(index) }
              </li>
              )
            })
          }
      </ul>
    )
  }
})