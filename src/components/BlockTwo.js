import React, {useState} from 'react'
import PropTypes from 'prop-types'
import img from '../img/section/b2.svg'
import imgCheck from '../img/check.svg'

function BlockTwo(){

    const [checkbox, setCheckbox] = useState([ 
        { id: 1, completed: true, titel: 'material'}, 
        { id: 2, completed: true, titel: 'color'}, 
        { id: 3, completed: false, titel: 'element'}, 
        { id: 4, completed: true, titel: 'size'}
    ])
    


    let num = () => checkbox.filter(x => x.completed === true).length
    const [count, setCount] = useState(num)  
      



    function onChange(id){
        setCheckbox(checkbox.map(item =>{
            if(item.id === id){
                item.completed = !item.completed
            }
            return item
        }))
        
    }


    function clear(){
        setCheckbox(checkbox.map(item =>{
            item.completed = false
            
            return item
        }))
    }
    
    return( 
        <section className='blocktwo container'>
            <h3 className='subtitel-blk subtitel-two'>Main target</h3>
            <div  className='blocktwo-l'>
                <div className='blocktwo-l__year'><p className='year-p'>1920</p></div>
                <div className='blocktwo-l__photo'><img className='photo-img' loading='lazy' src={img} /></div>
            </div>
            <div  className='blocktwo-r'>
                <div className='blocktwo-r__info'>
                    <p className='info-p'>Основная деятельность заказчика такая. У него есть такие проблемы. При создании нового дизайна учитывались такие факторы - фактор1, фактор2 и фактор3.</p>
                </div>
                <div className='blocktwo-r__filter'>
                    <div className='filter-amout'> {count} | 4</div>

                    <div className='filters'>
                        <div  className='checkbox'>
                            <p  className='checkbox-titel'>FILTERS</p>
                            <ul className='checkbox-list' >
                                {checkbox.map(i => {
                                    return (
                                        <li className='list-li btn' key={i.id} onClick={
                                            () => {
                                                onChange(i.id)
                                                setCount(num)
                                            }
                                        }> 

                                            <img className='list-img' src={i.completed ? imgCheck : ''}/> 

                                            {i.titel}

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>

                </div>
                <div className='bot-clear'>
                    <li className='clear btn' onClick={ () => {
                        clear() 
                        setCount(num)}
                    }>
                        Clear all
                        <div className='clear-span'>&times;</div>
                    </li>
                </div>
            </div>
        </section>
    )
    
}

BlockTwo.protoTypes={
    checkbox: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func.isRequired
}

export default BlockTwo