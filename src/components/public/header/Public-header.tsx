import { defineComponent,ref } from 'vue'
import Nav from './Nav/Nav'
import Suggest from './Suggest/Suggest-search'
import SubNav from './SubNav/SubNav'
import '_c/global.scss'
import './public-header.scss'

export default defineComponent({
  name:'public-header',
  components:{
    Nav,
    Suggest,
    SubNav
  },
  setup() {
    const inputValue = ref('')


    return () => (
      <div class="g-topbar">
        <div class="m-top">
          <div class="wrap f-cb">
            <h1 class="logo">
              <a href="/#">网易云音乐</a>
            </h1>
            <Nav />
            <Suggest model-value={inputValue.value}></Suggest>
          </div>
        </div>
        <SubNav></SubNav>
      </div>
    )
  }
}) 