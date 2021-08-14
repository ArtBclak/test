import React from 'react'

function BlockFour() {



    return (
        <section className='container blockfour'>
            <h3 className='subtitel-blk subtitel-four'>Colors</h3>
            <biv className='blockfour-name'><p className='blockfour-name__p'>DARK</p></biv>
            <div className='blockfour-txt'><p className='blockfour-txt__p'>Основная деятельность заказчика такая. У него есть такие проблемы. При создании нового дизайна учитывались такие факторы - фактор1, фактор2 и фактор3. </p></div>
            <div className='four-titel'>
                <h2 className='titel-blk four-titel__h'>Color style for project</h2>
                <p className='four-titel__txt'>some text will be here</p>
            </div>
            <div className='blockfour-colorsOne'>
                <div className='four-color four-dark'><p className='dark-code four-code'>#898989</p></div>
                <div className='four-color four-grey'><p className='grey-code four-code'>#B7B7B7</p></div>
                <div className='four-color four-black'/>
            </div>
            <div  className='blockfour-colorsTwo'>
                <div className='four-color four-red'><p className='red-code four-code'>#9A0034</p></div>
                <div className='four-color four-pink'><p className='pink-code four-code'>#D7969E</p></div>
                <div className='four-color four-beige'><p className='beige-code four-code'>#E8D8D9</p></div>
                <div className='four-color four-yellow'/>
            </div>
            <p className='bright'>bright</p>
        </section>
    )
}

export default BlockFour