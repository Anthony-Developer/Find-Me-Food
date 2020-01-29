import React from 'react'

function ButtonSidebar(props) {
 
    return (
        <div className="buttons-div">

            <div className="main-div-buttons">
                <h3>Suggestions</h3>
                <button onClick={props.click} value='pizza' className='suggestions-button'> Pizza </button>
                <button onClick={props.click} value='burger' className='suggestions-button'> Burger </button>
                <button onClick={props.click} value='vegetarian' className='suggestions-button'> Vegetarian </button>
                <button onClick={props.click} value='italian' className='suggestions-button'> Italian </button>
                <button onClick={props.click} value='soul food' className='suggestions-button'> Soul Food </button>
                <button onClick={props.click} value='spanish' className='suggestions-button'> Spanish </button>
                <button onClick={props.click} value='sushi' className='suggestions-button'> Sushi </button>
                <button onClick={props.click} value='kosher' className='suggestions-button'> Kosher </button>
                <button onClick={props.click} value='chinese' className='suggestions-button'> Chinese </button>
                <button onClick={props.click} value='ice cream' className='suggestions-button'> Ice Cream </button>
            </div>

        </div>
    )
}

export default ButtonSidebar