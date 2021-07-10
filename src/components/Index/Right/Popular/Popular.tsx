import { defineComponent,onMounted,reactive } from 'vue' 
import { reqResult } from '@/interface/request'
import { djPopular } from '@/api'

import './popular.scss'
import '_c/global.scss'

export default defineComponent({
  setup() {
    onMounted(async() =>{
      const result = await djPopular()
      console.log(result);
      
    })
  }
})