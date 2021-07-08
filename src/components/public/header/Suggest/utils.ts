import { HTMLAttributes, InputHTMLAttributes } from 'vue';
import {isObject, isPromise, isFunction } from '_u/index';
import type { FieldType } from '@/types/input.types'
 
function isEmptyValue(value: unknown) {
  if (Array.isArray(value)) {
    return !value.length;
  }
  if (value === 0) {
    return false;
  }
  return !value;
}

export function mapInputType(
  type: FieldType
): {
  type: InputHTMLAttributes['type'];
  inputmode?: HTMLAttributes['inputmode'];
} {
  // type="number" is weird in iOS, and can't prevent dot in Android
  // so use inputmode to set keyboard in modern browsers
  if (type === 'number') {
    return {
      type: 'text',
      inputmode: 'decimal',
    };
  }

  return { type };
}