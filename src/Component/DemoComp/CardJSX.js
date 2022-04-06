// rcc (react class component)
import React, { Component } from 'react'

export default class CardJSX extends Component {

    // Phương thức render là phương thức chứ nội dung html của component <CardJSX/>    
  render() {

    // Nội dung giao diện của thẻ nằm trong lệnh return của phương thức render
    return (
      <div className='card w-25'>
          <img className='w-100' src='https://picsum.photos/200' alt='...'/>
          <div className='card-body'>
              <p>Iphone</p>
              <p>$1000</p>
          </div>
      </div>
    )
  }
}
