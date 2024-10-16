import React from 'react'

export default function TodoCard(props) {
    const{children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className='todoItem'>
        <div className='actionsContainer'></div>
        {children}
        <button onClick={() => handleDeleteTodo(index)}>
            <i class="fa-solid fa-trash-can"></i>
        </button>
        <button onClick={()=> handleEditTodo(index)}><i class="fa-solid fa-pen-to-square"></i></button>
        
    </li>
  )
}
