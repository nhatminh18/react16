import React, { Component } from 'react'

export default class EventHandler extends Component {

    showMsg = name => alert('Hi ' + name);

    sayHello = () => {
        alert('Helloooo');
    }

  render() {
    return (
      <div>
          <button className='btn btn-success' onClick={this.showMsg.bind(this, 'Minh')}>Click</button>
          <button className='btn btn-success' onClick={() => {
              this.showMsg('Nhat');
          }}>Click</button>
      </div>
    )
  }
}

// function main() {
//     return function() {
//         alert('1234');
//     }
// }

// let callback = main();
// callback();