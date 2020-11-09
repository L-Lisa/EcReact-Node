import React from 'react';

const HelloWorld = () => {

    function sayHello() {
        alert('Hello, World')
    }

    return (
        <button onClick={sayHello}>SayHello</button>
    );
}

export default HelloWorld;