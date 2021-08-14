import React from 'react'
import logo from '../img/bonum logo.svg'


function Footer() {
    return (
        <footer className='container footer'>
            <div className='footer-left'>
                <img className='footer-logo' loading='lazy' alt='logo' src={logo}/>
                <div className='footer-gradient'/>
                <p className='footer-p'>V I R N A</p>
            </div>
            <div className='footer-left'>
                <h2 className='titel-blk footer-titel'>Thank you</h2>
                <p className='footer-txt'>for watching</p>
            </div>
        </footer>
    )
}
export default Footer