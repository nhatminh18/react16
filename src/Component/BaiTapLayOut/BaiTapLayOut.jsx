import React, { Component } from 'react'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import ContentComp from './ContentComp'
import NavComp from './NavComp'

export default class BaiTapLayOut extends Component {
    render() {
        // Nội dung của component phải được chứa trong 1 thẻ nào đó bao phủ
        return (
            <section>
                <BTHeader />
                <div className='d-flex'>
                    <div className='w-25'>
                        <NavComp />
                    </div>
                    <div className='w-75'>
                        <ContentComp />
                    </div>
                </div>
                <BTFooter />
            </section>
        )
    }
}
