import React from 'react';
import ico from '../../trash_ico.svg';

export function Completed(props) {
    const completed = props.list.filter(el => el.completed);

    return (
        <ul>
            {
                completed.length > 0 ?

                completed.map(el => {
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
                            <img className='ico' src={ico} alt='delete' />
                        </article>
                    )
                })

                : <h2>No completed tasks yet</h2>
            }
            <button><img className='ico' src={ico} alt='delete' />Delete all</button>
        </ul>
    )
}