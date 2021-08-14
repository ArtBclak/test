import React from 'react'
import like from '../img/like.svg'
import check from '../img/check.svg'
import imgOne from '../img/section/b10-1.svg'
import imgTwo from '../img/section/b10-2.svg'

function BlockTen() {
    return (
        <section className='container blockten'>
            <div className='ten-top'>
                <h3 className='subtitel-blk'>Adaptive design</h3>
                <p className='subtitel-txt'>Огромный процент девушек начмного чаще сидят в телефоне, чем за компьютером. Учитывая это мы постарались сделать мобильную версию не только удобной, но и максимально красивой.</p>
            </div>
            <div className='ten-center'>
                <div className='center-left'>
                    <img className='center-left__like' src={like} loading='lazy' alt='like'/>
                    <p className='center-left__name'>Mobile version</p>
                </div>

                <div className='center-mid'>
                    <p className='center-mid__txt'>Own production of women’s clothing</p>
                    <div className='center-mid__rarr'>&rarr;</div>
                    <p className='center-mid__sale'>SALE</p>
                </div>

                <div className='center-right'>
                    <img className='center-right__img' src={imgOne} loading='lazy' alt='photo one'/>
                    <div className='center-right__name'>Start scrin</div>
                </div>
            </div>


            <div className='ten-bot'>
                <div className='bot-left'>
                    <div className='bot-left__block'/>
                    <p className='bot-left__name'>Catalog</p>
                    <img className='bot-left__img' src={imgTwo} loading='lazy' alt='photo two'/>
                </div>
                <div className='bot-mid'>
                    <p className='bot-mid__categories'>Categories <img src={check}/></p>
                    <p className='bot-mid__filters'>Filters <img src={check}/></p>
                    <div className='ten-slider'>
                        <div className='ten-slider__larr' style={{color: '#A8A8A8'}}>&larr;</div>
                        <ul className='ten-slider__numbers'>
                            <li className='ten-slider__numbers-li' style={{color: '#9A0034'}}>1</li>
                            <li className='ten-slider__numbers-li'>2</li>
                            <li className='ten-slider__numbers-li'>...</li>
                            <li className='ten-slider__numbers-li'>5</li>
                            <li className='ten-slider__numbers-li'>6</li>
                        </ul>
                        <div className='ten-slider__rarr'>&rarr;</div>
                    </div>
                </div>
                <div className='bot-right'>
                    <div className='bot-right__blocks' >
                        <div className='bot-right__block-blk'>&#8862;</div>
                        <div className='bot-right__block-blk'>&#65794;</div>
                    </div>
                    <p className='bot-right__p'>Mobile version</p>
                </div>
            </div>
        </section>
    )
}

export default BlockTen