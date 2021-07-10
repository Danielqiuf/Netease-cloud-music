export type SubNavItem = {
  title:string;
  id:number | string;
  hasIcon?: boolean;
}

export type FieldType = 
  | 'checkbox'
  | 'date'
  | 'email'
  | 'text'
  | 'number'
  | 'search'
  | 'password'
  | 'file'