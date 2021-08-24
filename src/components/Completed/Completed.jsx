import React from 'react';
import ico from '../../assets/trash_ico.svg';

export function Completed(props) {
    const completed = props.list.filter(el => el.completed);

    const deleteOne = key => {
        props.deleteItem(key);
    }

    return (
        <div>
                {
                    completed.length > 0 ?

                    completed.map(el => {
                        return (
                            <article className='completedArticle inline'>
                                <ul className='completedUl'>
                                    <input onChange={() => props.changeStatus(el)} type='checkbox' checked={el.completed ? true : false} />
                                    <li 
                                      key={el.key} 
                                      completed={el.completed}
                                      className={el.completed ? 'completed' : ''}
                                    >
                                        {el.text}
                                    </li>
                                </ul>
                                <img onClick={() => deleteOne(el.key)} className='ico' src={ico} alt='delete' />
                            </article>
                        )
                    })

                    : <h2>No completed tasks yet</h2>
                }

        <div className='deleteButtonDiv'>
            {
                completed.length > 0 ?
                <button className='deleteButton' onClick={props.deleteCompletes}><img className='ico' src={ico} alt='delete' />delete all</button>
                : ''
            }
        </div>
        
        </div>
    )
}