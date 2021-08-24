import React, { useState } from 'react';

export function Input(props) {
    const [text, setText] = useState('');

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (text != []) props.onSubmit(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={text}
                onChange={handleChange}
                placeholder='add details'
            />
            <input 
                type='submit'
                value='Add'
            />
        </form>
    )
}