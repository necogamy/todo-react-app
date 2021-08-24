import React, { useState } from 'react';

export function Input(props) {
    const [text, setText] = useState('');

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={text}
                onChange={handleChange}
            />
            <input 
                type='submit'
            />
        </form>
    )
}