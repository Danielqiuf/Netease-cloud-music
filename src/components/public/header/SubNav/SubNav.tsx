import { defineComponent, reactive, ref } from 'vue'
import type { SubNavItem } from '@/types'

import '_c/global.scss'
import './subnav.scss'

export default defineComponent({
  props: {
    current:{
      type: [Number, String],
      default: 0
    }
  },
  setup(props) {
    const iconIndex = 2;
    const currentRef = ref<number|string>(0)
    const navItemList: [string, string, string, string, string, string] = [
      '推荐',
      '排行榜',
      '歌单',
      '主播电台',
      '歌手',
      '新碟上架'
    ]
    const subNavList = reactive<SubNavItem[]>([])

    const setIcon = (index: number) => {
      if (subNavList[index]) {
        subNavList[index]!.hasIcon = true
      }
    }
    
    navItemList.forEach((navLabel: string, index: number) => {
      const tempItem:SubNavItem = {
        title: navLabel,
        id:index
      }
      if( index === iconIndex ) {
        tempItem.hasIcon = true
      }
      subNavList.push(tempItem)
    })

    const bemClass = (index: number): string  => {
      return currentRef.value === index ? 'z-slt' : ''
    }

    const onClickItem = (index: number) => {
      currentRef.value = index
    }

    const renderIcon = (index: number) => {
      if (subNavList[index] && subNavList[index]!.hasIcon) {
        return (
          <span class="f-pa f-r-white-icon r-icon"></span>
        )
      }
    }
    
    currentRef.value = props.current

    return () => (
      <div class="m-subnav j-tflag">
        <div class="wrap f-pr">
          <ul class="nav">
            {subNavList.map(({ title }, index) => {
              return (
                <li onClick={ () => onClickItem(index) }>
                  <a href="/#" class={ bemClass(index) } >
                    <em class="f-pr">
                      { title }
                      { renderIcon(index) }
                    </em> 
                  </a>
                </li>
              )
            })} 
          </ul>
        </div>
      </div>
    )
  }
})