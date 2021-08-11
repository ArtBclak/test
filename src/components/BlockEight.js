import React from 'react'
import bg from '../img/section/b8.svg'
import img from '../img/check.svg'

function BlockEight() {
    return (
        <section className='blockeight container'>
            <img className='eight-bg' src={bg} />
            <div className='eight-top'>
                <h2 className='titel-blk eight-titel'>Our own production</h2>
                <p className='titel-text'>of women’s clothing</p>
            </div>
            
            <div className='eight-bot'>
                <div className='eight-sale'>
                    <p className='eight-sale__name'>SALE</p>
                    <p className='eight-sale__arr'>&rarr;</p>
                    <p className='eight-sale__up'>up to 50 %</p>
                </div>
                <div className='eight-check'>
                    <p className='eight-check__p'><img className='eight-check__p-img' src={img}/>exchange</p>
                    <p className='eight-check__p'><img className='eight-check__p-img' src={img}/>return</p>
                    <p className='eight-check__p'><img className='eight-check__p-img' src={img}/>free delivery</p>
                </div>
            </div>

            <p className='eight-name'>Suits</p>
        </section>
    )
}

export default BlockEight