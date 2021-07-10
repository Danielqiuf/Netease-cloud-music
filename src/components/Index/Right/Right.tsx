import { defineComponent,onMounted,reactive } from 'vue' 
import Profile from './Profile/Profile'
import Singer from './Singer/Singer'
import Popluar from './Popular/Popular'

import './right.scss'
import '_c/global.scss'

export default defineComponent({
  components:{ Profile, Singer,Popluar },
  setup() {

 
    return () => (
      <div class="g-sd1">
        <Profile />
        <Singer />
        <Popluar />
      </div>
    )
  }
}) 