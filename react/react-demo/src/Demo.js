import React from 'react';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.FirstName}</h2>
                <h2>{this.props.LastName}</h2>
            </div>
        );
    }
} 
