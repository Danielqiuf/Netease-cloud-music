import { defineComponent, PropType, ref } from 'vue'
import { 
  isDef,
  extend,
  formatNumber
 } from '_u/index' 
import { mapInputType } from './utils'
import { BannerSwipeTransitionTimingFunction } from '@/enum/base'
import type { FieldType } from '@/types/input.types'
import '_c/global.scss'
import './suggest-search.scss' 

export const FieldInputProps = {
  autofocus: Boolean,
  maxlength: [Number,String],
  disabled: {
    type: Boolean,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String],
    default: '',
  }
}

export default defineComponent({
  props: extend({},FieldInputProps, {
    type:{
      type: String as PropType<FieldType>,
      default: 'text'
    }
  }),
  emits: [
    'update:modelValue'
  ],
  setup(props, { emit,slots }) {
    const inputRef = ref<HTMLInputElement>();

    const inputVisible = ref<boolean>(true);

    const getModelValue = () => String(props.modelValue ?? '');

    const limitValueLength = (value: string) => {
      const maxlength = props.maxlength as number;
      if (value.length > maxlength) {
        const modelValue = getModelValue()
        if (modelValue && modelValue.length === +maxlength) {
          return modelValue
        }
        return value.slice(0, +maxlength)
      }
      return value
    }

    const updateValue = (
      value: string
    ) => {
      value = limitValueLength(value)
      
      if(props.type === 'number') {
        const isNumber = props.type === 'number'
        value = formatNumber(value, isNumber, isNumber)
      }
      if (inputRef.value && inputRef.value.value !== value) {
        inputRef.value.value = value;
      }

      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }
    }

    const getProp = (key: keyof typeof props) => {
      if (isDef(props[key])) {
        return props[key];
      }
    };

    const onLabelClick = () => {
      inputVisible.value = false;
      inputRef.value?.focus()
    }

    const onInput = (event: Event) => {
      updateValue((event.target as HTMLInputElement).value)
    }

    const onClickInput = () => {

    }

    const onBlur = () => {
      if(!inputRef.value?.value) {
        inputVisible.value = true
      }
      
    }
    const onFocus = () => {

    }

    const endComposing = () => {

    }

    const renderInput = () => {
      if (slots?.input) {
        return (
          <div class="input-custom" onClick={onClickInput}>
            {slots.input()}
          </div>
        )
      }

      const inputAttrs = {
        ref: inputRef,
        id: 'input',
        class: 'input-control txt',
        value: props.modelValue,
        autofocus: props.autofocus,
        disabled: props.disabled,
        readonly: props.readonly,
        onClick: onClickInput,
        onBlur,
        onFocus,
        onInput,
        onChange: endComposing,
      }
      
      return <input {...mapInputType(props.type)} {...inputAttrs} />
    }

    const renderLogin = () => {
      return (
        <div class="m-tophead">
          <a href="#" class="link s-fc3">登录</a>
        </div>
      )
    }
    const renderCreator = () => {
      return (
        <a href="/login" target="_blank" class="m-topvd f-pr m-creator-center">
          创作者中心
        </a>
      )
    }

    const renderClearBoth = () => {
      return (
        <div class="u-lstlay j-flag" style="display:none"></div>
      )
    }
    console.log(renderInput())
    
    return () => (
      <div>
        { renderLogin() }
        { renderCreator() }
        <div class="m-srch f-pr j-suggest">
          <div class="srchbg">
            <span class="parent">
              { renderInput() }
              <label class="ph j-flag" onClick={onLabelClick} style={inputVisible.value ? '' : 'display:none'}>音乐/视频/电台/用户</label>
            </span>
          </div>
          { renderClearBoth() }
        </div>
      </div>
    )
  }
})