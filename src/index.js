import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => {
    return Math.floor(Math.random() * 1000)
}

const greeting = (user) => {

    return  <div>
        <h1> hello my name is ${user.firstName} </h1>
        <h2 className="text-muted"> The lucky number is ${user.luckyNumber} </h2>
    </div>

};

const user = {
    firstName: 'Quy',
    luckyNumber: luckyNumber()

};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);


