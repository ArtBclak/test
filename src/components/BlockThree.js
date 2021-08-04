import React, {useState} from 'react'
import PropTypes from 'prop-types'
import imgOne from '../img/section/b3-1.svg'
import imgTwo from '../img/section/b3-2.svg'
import check from '../img/check.svg'

function BlockThree(props){

    const box = [
        { titel: 'size', value: ['S / M', 'M / XL', 'XXL']},
        { titel: 'style', value: ['casual', 'lorem', 'lorem2']},
        { titel: 'color', value: ['blue', 'red', 'green']}
    ]

    const product = { 
        name: 'Название товара может быть длинное, по этому я написал название чуть больше для поверки реализации', 
        price: '1150 грн'
    }



    const loading = <div className='preloader'><div className='preloader-block'></div></div>

    return(
        <section className='blockthree container'>
            <h2 className='titel-blk titel-three'>The world of fashion</h2>
            <div className='blockthree-left'>
                <div className='three-fltr'>
                {box.map(i =>{
                    return(
                        <div className='three-fltr__box'>
                            <p className='three-fltr__placeholder'>{i.titel}</p>
                            <select className='three-fltr__list btn' name={i.titel}>
                                {i.value.map(a => <option className='three-fltr__item' value="color">{a}</option>)}
                            </select>
                            <img className='three-fltr__check' src={check}/>
                        </div>
                    )
                })}
                </div>
                <img className='blockthree-left__img' loading='lazy' src={imgOne} />
                
            </div>
            <div className='blockthree-right'>
                <p className='right-titel'>is woven from stories</p>
                <p className='right-subtitel'>product card</p>
                <div className='three-products'>
                    <img className='rigth-img' loading='lazy' src={imgTwo}/>
                    <ul className='rigth-colors'>
                        <li className='colors-li' style={{border: '1px solid #000'}}><div className='color cream'/></li>
                        <li className='colors-li'><div className='color blue'/></li>
                        <li className='colors-li'><div className='color red'/></li>
                    </ul>
                    <button className='product-name'>{product.name}</button>
                    <p className='product-price'>{product.price}</p>
                </div>
            </div>
        </section>
    )
}

export default BlockThree