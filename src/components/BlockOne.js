import React from 'react'
import Header from './Header'
import logo from '../img/logo-V.svg'
import bonum from '../img/bonum logo.svg'





function BlockOne(){
    return( 
        <section className='blockone container'>
            <div className='blockone-left'>
                <img src={logo} className='logo'></img>
                <h1 className='titel'>Ukrainian brand</h1>
                <p className='titel-txt'>of women’s clothing</p>
            </div>
            <div className='blockone-right'>
                <img src={bonum} className='bonum'></img>
                <div className='txt-right'>
                    <p className='txt-p'>Online store</p>
                    <span className='txt-span'>2020</span>
                    </div>
            </div>
            <Header/>
        </section>
    )
    
}

export default BlockOne 