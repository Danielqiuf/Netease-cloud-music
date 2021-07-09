import { defineComponent } from 'vue'
import PublicHeader from '_c/public/header/Public-header'

export default defineComponent({
  components:{
    PublicHeader
  },
  setup() {

    return () => (<div id="container">
      <Public-header />
      <router-view />
    </div>)
  }
})