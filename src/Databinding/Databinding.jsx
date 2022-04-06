import React, { Component } from 'react'

export default class Databinding extends Component {

    product = {
        id: 1,
        name: 'Iphone',
        img: 'https://picsum.photos/id/1/200',
        price: 1000
    }

    // Thuộc tính là hàm => phương thức 
    renderProduct = () => {
        // Nội dung trả về phải string, number, component
        // Không return object được
        return (
            <div className='card w-25'>
                <img src={this.product.img} alt="..." />
                <div className="card-body">
                    <p>{this.product.name}</p>
                    <p>{this.product.price.toLocaleString()}</p>
                    <button className='btn btn-success'>Add</button>
                </div>
            </div>
        )
    }

    render() {
        let title = 'cybersoft';

        return (
            <div >
                <div id='title'>{title}</div>
                <hr />
                {this.renderProduct()}

            </div>
        )
    }
}
