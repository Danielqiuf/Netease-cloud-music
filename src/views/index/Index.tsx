import {defineComponent,reactive} from 'vue'
import Banner from '_c/Index/Banner'

import './index.scss';

export default defineComponent({
  components:{
    Banner
  },
  setup() {

    
    return () => (
      <Banner />
    )
  
  }
}) 