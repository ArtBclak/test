import React, {useState} from 'react'
import img from '../img/section/b5.svg'



function BlockFive() {


    const [font, setFont] = useState({fontWeight: '400'})



    return (
        <section className='blockfive container'>
            <div className='five-left'><img className='five-left__img' src={img}/></div>

            <div className='five-right'>
                <h3 className='subtitel-blk'>Typography</h3>
                <div className='five-test'>
                    <input style={font} className='test-input'/>
                    <li onClick={()=> setFont({fontWeight: '400'})} className='test-regular btn'>regular</li>
                    <li onClick={()=> setFont({fontWeight: '500'})} className='test-medium btn'>medium</li>
                </div>
                <h2 className='five-titel titel-blk'>Cera Pro</h2>
                <div className='five-px' >
                    <p className='five-px__one'>16px</p>
                    <p className='five-px__two'>24px</p>
                </div>
                <p className='five-name'>FONT</p>
                <p className='five-txt'>Основная деятельность заказчика такая. У него есть такие проблемы. 
                    При создании нового дизайна учитывались такие факторы - фактор1, фактор2 и фактор3.
                    <br/> <br/> 
                    В итоге получился интерфейс ключевыми фишками которого стали фишка1 и фишка2
                </p>
                <p className='five-geometric'>geometric</p>

            </div>
            
        </section>
    )
}

export default BlockFive