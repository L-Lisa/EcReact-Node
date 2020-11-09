import React from 'react';
import DemoMessage from './Demo';
import Info from './Info';

export default class Parent extends React.Component  {
    render () {
        return (
            <div>
                <h1>Parent Component</h1>
                <DemoMessage FirstName="Bosse" LastName="Grus"/>
                <Info Rubrik="Handla" Text="Mat och andra varor"/>
            </div>
        );
    }
}
