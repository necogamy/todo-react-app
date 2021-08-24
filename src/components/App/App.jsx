import React, { useState } from 'react';
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
        const key = list.length + 1;

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

    return (
        <div id='App'>
            <h1>#todo</h1>
            <nav>
                <NavLink exact to='/' activeClassName="active">
                    All
                </NavLink>
                <NavLink to='/active' activeClassName="active">
                    Active
                </NavLink>
                <NavLink to='/completed' activeClassName="active">
                    Completed
                </NavLink>
            </nav>
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
            <p>
                created by <a target='_blank' rel="noreferrer" href="https://github.com/necogamy">nicogamy</a> - devChallenges.io
            </p>
        </div>
    )
}

export default App;