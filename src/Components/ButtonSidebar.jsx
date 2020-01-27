import React from 'react'

function ButtonSidebar(props) {
 
    return (
        <div className="buttons-div">

            <div className="main-div-buttons">
                <h3>Categories</h3>
                <button onClick={props.click} value='pizza' className='categories-button'> Pizza </button>
                <button onClick={props.click} value='burger' className='categories-button'> Burger </button>
                <button onClick={props.click} value='vegetarian' className='categories-button'> Vegetarian </button>
                <button onClick={props.click} value='italian' className='categories-button'> Italian </button>
                <button onClick={props.click} value='soul food' className='categories-button'> Soul Food </button>
                <button onClick={props.click} value='spanish' className='categories-button'> Spanish </button>
                <button onClick={props.click} value='sushi' className='categories-button'> Sushi </button>
                <button onClick={props.click} value='kosher' className='categories-button'> Kosher </button>
                <button onClick={props.click} value='chinese' className='categories-button'> Chinese </button>
                <button onClick={props.click} value='ice cream' className='categories-button'> Ice Cream </button>
            </div>

        </div>
    )
}

export default ButtonSidebar