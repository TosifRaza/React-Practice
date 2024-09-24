import React from 'react'
import Item from './Item';
import style from './Item.module.css'


const Listgroup = ({Arry}) => {
  return (
   <ul className={style.list_group}>
      {
         Arry.map((item,i)=>(
         <Item key={i} Arr={item}/>
         ))
      }
      </ul>
  )
}

export default Listgroup