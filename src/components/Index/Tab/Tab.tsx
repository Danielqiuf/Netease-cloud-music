import { defineComponent, reactive } from 'vue' 
import './tab.scss'
import '_c/global.scss'

export default defineComponent({
  setup() {
    const tabList = reactive<string[]>([
      '华语',
      '流行',
      '摇滚',
      '民谣',
      '电子'
    ])

    const tabLength: number = tabList.length

    const getBemC = (index: number) => {
      let c = 's-fc3'
      if( index < (tabLength - 1)) {
        c += ' s-bord'
      }
      return c
    }

    const renderTab = () => {
      return tabList.map((tab, index) => {
        return (
          <a href="#" class={ getBemC(index) }>{ tab }</a>
        )
      })
    }


    return () => (
      <div class="tab">
        { renderTab() }

      </div>
    )
  }
})