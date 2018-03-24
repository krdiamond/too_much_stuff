import React from 'react';
import Item from './Item'



const ItemList = (props) => {



  const { className } = props



  const imgs = (props.list) ?
    props.list.map((img) => {
      return (
        <Item className={className} img={img} key={img.id} handleClick={props.handleClick}/>
      )
    })
  : null

  return (
    imgs
  )
}

export default ItemList;
