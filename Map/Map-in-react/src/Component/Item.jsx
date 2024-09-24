import React from 'react'
import style from './Item.module.css'

const Item = (props) => {
   let {Arr}=props
  return (
   <li  className={`${style.eichitem} list-group-item`}>{Arr}</li>
  )
}

export default Item