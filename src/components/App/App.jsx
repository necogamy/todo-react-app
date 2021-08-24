import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import { All } from '../All/All';
import { Active } from '../Active/Active';
import { Completed } from '../Completed/Completed';


function App() {
    const [list, setList] = useState([]);

    const changeStatus = el => {
        const update = list.map(item => item.key === el.key ? {
            ...item,
            completed: !item.completed
        } : item)
        setList(update);
    }

    const onSubmit = (text) => {
        const key = Math.floor(Math.random() * 10000);

        setList(prevList => [
            ...prevList,
            {
                text,
                key,
                completed: false
            }
        ])
    }

    const deleteItem = key => {
        setList(prevList => prevList.filter(el => el.key !== key));
    }

    const deleteCompletes = () => {
        setList(prevList => prevList.filter(el => el.completed === false));
    }


    const KEY = 'todoList.reactApp.localStorage';
    useEffect(() => {
        if (localStorage.length > 0) setList(JSON.parse(localStorage.getItem(KEY)))
    }, [])
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(list))
    }, [list])

    return (
        <div id='App'>
            <section>
                <h1>#todo</h1>
                <nav>
                    <NavLink className='links' exact to='/' activeClassName="active">
                        All
                        <div className='activeEffect'></div>
                    </NavLink>
                    <NavLink className='links' to='/active' activeClassName="active">
                        Active
                        <div className='activeEffect'></div>
                    </NavLink>
                    <NavLink className='links' to='/completed' activeClassName="active">
                        Completed
                        <div className='activeEffect'></div>
                    </NavLink>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/'>
                        <All onSubmit={onSubmit} changeStatus={changeStatus} list={list} />
                    </Route>
                    <Route path='/active'>
                        <Active changeStatus={changeStatus} onSubmit={onSubmit} list={list} />
                    </Route>
                    <Route path='/completed'>
                        <Completed
                            deleteItem={deleteItem}
                            deleteCompletes={deleteCompletes}
                            changeStatus={changeStatus}
                            list={list}
                        />
                    </Route>
                </Switch>
            </section>
            <p>
                created by <a target='_blank' rel="noreferrer" href="https://github.com/necogamy">nicogamy</a> - devChallenges.io
            </p>
        </div>
    )
}

export default App;