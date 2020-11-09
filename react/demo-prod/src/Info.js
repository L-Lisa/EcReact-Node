import React from 'react';

export default class Info extends React.Component {
    
    render() {
        function showInfo() {
            alert('Info')
        }
        return (
            
            <div>
                <h3>{this.props.Rubrik}</h3>
                <p>{this.props.Text}</p>
                <button onClick={showInfo}>Visa</button>
            </div>
        );
    }
} 
