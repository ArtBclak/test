import React from 'react'
import logo from '../img/logo-V.svg'
import bg from '../img/section/b7.svg'
import img from '../img/check.svg'
import inst from '../img/inst.svg'
import fb from '../img/fb.svg'
import yt from '../img/yt.svg'



function BlockSeven() {
    return (
        <section className='container blockseven'>
            <h3 className='subtitel-blk seven-subtitel'>Main page</h3>
            <p className='seven-txt'>Мы создали приятный, удобный и самое важное - понятный интерфейс, что бы пользователи с легкостью взаимодействовали с продукцией.</p>
            <div className='seven-logo'>
                <img src={logo} loading='lazy' alt='logo' className='logo-img' />
            </div>
            
            <div className='seven-menu'>
                <p className='seven-menu__name'>MENU</p>
                <div className='hamburger btn seven-menu__ham'>
                    <div className='h-span' />
                    <div className='h-span' />
                    <div className='h-span' />
                </div>
                <ul className='seven-menu__ul'>
                    <li className='seven-menu__li btn'>Католог <img className='li-img' src={img}/></li>
                    <li className='seven-menu__li btn'>О нас</li>
                    <li className='seven-menu__li btn'>Sale</li>
                    <li className='seven-menu__li btn'>0 800 <span className='li-span'> 332 512</span></li>
                </ul>
            </div>
            <div className='seven-info'>
                <div className='info-left'>
                    <img src={bg} className='info-img' loading='lazy' alt='photo' />
                </div>
                <div className='info-right'>
                    <h2 className='titel-blk seven-titel'>НОВАЯ КОЛЛЕКЦИЯ</h2>
                    <div className='right-txt'>
                        <div className='seven-screen'/>
                        <p className='seven-dop'>уже на сайте</p>
                        <p className='screen-p'>Start screen</p>
                    </div>
                    <button className='seven-btn'>посмотреть</button>
                    <div className='seven-slider'>
                        <button className='seven-arr prev'>&larr;</button>
                        <button className='seven-arr next'>&rarr;</button>
                    </div>


                    <div className='social'>
                        <p className='social-name'>Social</p>
                        <div className='social-links'>
                            <a href='#' className='btn'><img className='social-img inst' src={inst}/></a>
                            <a href='#' className='btn'><img className='social-img fb' src={fb}/></a>
                            <a href='#' className='btn'><img className='social-img yt' src={yt}/></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}



export default BlockSeven