import React, { memo } from 'react';


const HabitAddForm = memo( props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event) =>{
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name)
        // inputRef.current.value=""
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className='add-form' onSubmit={onSubmit}>
            <input type="text" 
            ref={inputRef}
            className='add-input' placeholder='Habit'/>
            <button className='add-button'>추가</button>
        </form>
    );
    });



export default HabitAddForm;