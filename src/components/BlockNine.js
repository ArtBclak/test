import React from 'react'
import imgOne from '../img/section/b9-1.svg'
import imgTwo from '../img/section/b9-2.svg'
import imgThree from '../img/section/b9-3.svg'
import img from '../img/check.svg'

function BlockNine() {
    return (
        <section className='container blocknine'>
            <div className='nine-top'>
                <h3 className='subtitel-blk nine-titel'>Catalog</h3>
                <p className='nine-txt' >Для удобного поиска мы создали каталог.<br/> Основной фишкой стали фишка 1 и фишка 2</p>
            </div>
            <div className='nine-center'>

                <div className='photo-one'>
                    <div className='dimensions'>
                        <p className='dimensions-p'>XS</p>
                        <p className='dimensions-p'>S</p>
                        <p className='dimensions-p'>M</p>
                        <p className='dimensions-p'>L</p>
                    </div>
                    <p className='nine-filter'>filter <img src={img}/></p>
                    <p className='photo-name photo-one__name'>COSTUMES</p>
                    <img className='nine-imgOne' loading='lazy' alt='product'  src={imgOne}/>
                    <div className='photo-color'>
                        <div style={{background: '#808080'}} className='p-color'/> 
                        <div style={{background: '#64391A'}} className='p-color'/> 
                    </div>
                    <button className='product-name name-inside'>Название товара может быть длинное и даже в две строки</button>
                    <p className='photo-price'>1600 грн <span className='full-price'>2300грн</span></p>

                    <div className='nine-larr'>&larr;</div>
                </div>

                

                <div className='photo-two'>
                    <p className='photo-name'>dresses</p>
                    <p className='photo-stiker'>SALE</p>
                    <div className='photo-two__like'>&#10084;</div>
                    <img className='nine-imgTwo' loading='lazy' alt='product' src={imgTwo}/>
                    <div className='photo-color'>
                        <div style={{background: '#A64D79'}} className='p-color'/> 
                        <div style={{background: '#22402A'}} className='p-color'/> 
                        <div style={{background: '#295494'}} className='p-color'/>  
                        <div style={{background: '#F8DADD'}} className='p-color'/>
                    </div>
                    <button className='product-name name-inside'>Название товара может быть длинное и даже в две строки</button>
                    <p className='photo-price'>579 грн <span className='full-price'>950грн</span></p>
                </div>
            </div>

            <div className='nine-bot'>
                <div className='nine-bot__info'>
                    <div className='bot-sort'>
                        <p className='bot-sort__name'>Sort by <img src={img} alt='check'/></p>
                        <div className='nine-rarr'>&rarr;</div>
                    </div>
                    <div className='nine-new'>
                        <p className='nine-new__p'>NEW</p>
                        <div className='nine-new__like'>&#10084;</div>
                    </div>
                    
                </div>

                <div className='photo-three'>
                    <p className='photo-name photo-three__name'>OUTERWEAR</p>
                    <img className='nine-imgThree' src={imgThree} loading='lazy' alt='product' />
                    <div className='photo-color'>
                        <div style={{background: '#8B4513'}} className='p-color'/> 
                        <div style={{background: '#8B2252'}} className='p-color'/> 
                    </div>
                    <button className='product-name name-inside'>Название товара может быть длинное и даже в две строки</button>
                    <p className='photo-price'>1235 грн <span className='full-price'>1900грн</span></p>
                </div>
            </div>


        </section>
    )
}

export default BlockNine