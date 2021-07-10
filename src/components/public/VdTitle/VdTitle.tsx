import { defineComponent } from 'vue'
import './VdTitle.scss'

export default defineComponent({
  props:{
    left:String,
    right:String
  },
  setup(props) {
    const renderRight = () => {
      if(props.right) {
        return <a href="#" class="more s-fc3 s-end">{ props.right }</a>
      }
    }
    return () => (
      <h3 class="v-hd3">
        <span class="f-fl">{ props.left }</span>
        { renderRight() }
      </h3>
    )
  }
}) 