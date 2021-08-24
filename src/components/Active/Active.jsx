import React from 'react';
import { Input } from '../Input/Input';

export function Active(props) {
    const active = props.list.filter(el => !el.completed);

    return (
        <div>
            <Input onSubmit={props.onSubmit} />
            <ul>
                { active.length > 0 ?
                    active.map(el => {
                        return (
                            <article className='inline'>
                                <input onChange={() => props.changeStatus(el)} type='checkbox' checked={el.completed ? true : false} />
                                <li 
                                  key={el.key} 
                                  completed={el.completed}
                                  className={el.completed ? 'completed' : ''}
                                >
                                    {el.text}
                                </li>
                            </article>
                        )
                    }) : <h2>No active tasks</h2>
                }
            </ul>
        </div>
    )
}


// {
//     active <= 0 ? <li>No active tasks</li> 
//     : active.map(el => <li>{el.text}</li>)
// }