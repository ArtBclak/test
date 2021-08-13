import React, {useState} from 'react'
import PropTypes from 'prop-types'
import like from '../img/icon_like.svg'
import camera from '../img/icon_camera.svg'
import cart from '../img/icon_cart.svg'
import arr from '../img/Arr.svg'

const navA = {
    position: 'absolute'
}
const navF = {
    position: 'fixed',
    width: '93%',
    top: '0',
    left: '50%',
    transform: 'translate(-50%)',
    background: '#7cfff8',
    height: '7vh',
    zIndex: ' 100',
    padding: '0 5rem'
}


function Header(){

    const [scroll, setScroll] = React.useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY)
    }
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    let sectOne = document.body.clientHeight / 10


    return(
 
        <nav style={ scroll <= sectOne ? navA : navF} className='nav ' >
            <div className='hamburger btn'>
                <div className='h-span' />
                <div className='h-span' />
                <div className='h-span' />
            </div>
            {/* <ul>
                <li className='nav-li'><a href='#'>Home</a></li>
                <li className='nav-li'><a href='#'>Colors</a></li>
                <li className='nav-li'><a href='#'>Thank You</a></li>
            </ul> */}

            <div className='h-links'>
                <a className='h-a btn' href='#'><img src={like} className='h-icon'/></a>
                <a className='h-a btn' href='#'><img src={camera} className='h-icon'/></a>
                <a className='h-a btn' href='#'><img src={cart} className='h-icon' /></a>
            </div>
            
            <div className='box-lang btn'>
                <p className='language'>ru</p>
                <img src={arr} className='n-arr'/>
            </div>
        </nav>
 
        
    )
        
   
}

Header.protoTypes={
    scroll: PropTypes.number.isRequired,
    handleScroll: PropTypes.func.isRequired
}

export default Header 