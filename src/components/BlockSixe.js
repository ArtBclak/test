import React from 'react'

function BlockSixe() {
    return (
        <section className='container blocksixe'>

            <div className='sixe-top'>
                <div className='top-name'>
                    <p className='top-name__p'>bold</p>
                    <div className='top-box'/>
                </div>
                <div className='top-letter'>
                    <p  className='letter'>Aa</p>
                    <p  className='letter'>Bb</p>
                    <p  className='letter'>Ee</p>
                    <p  className='letter'>Cc</p>
                    <p  className='letter'>Dd</p>
                </div>

            </div>


            <div className='sixe-bot'>
                <p className='sixe-bot__name'>Grid</p>
                <div className='sixe-bot__columns'>
                    <div className='clm clm-a'>
                        <div className='a-box'>
                            <p className='sixe-p a-p'>1170px</p>
                        </div>
                    </div>
                    <div className='clm clm-b'/>
                    <div className='clm clm-c'/>
                    <div className='clm clm-d'><div className='sixe-p clm-d__p'>90px</div></div>
                    <div className='clm clm-e'><div className='clm-e__p'/> </div>
                    <div className='clm clm-f'>
                        <p className='sixe-p clm-f__p'>30px</p> 
                        <div className='clm-f__box'/> 
                    </div>
                    <div className='clm clm-g'/>
                    <div className='clm clm-h'/>
                    <div className='clm clm-i'/>
                    <div className='clm clm-j'/>
                    <div className='clm clm-k'/>
                    <div className='clm clm-l'><div className='clm-l__p'/> </div>
                </div>
                <p className='sixe-bot__info'>12 columns grid</p>
            </div>


        </section>
    )
}


export default BlockSixe