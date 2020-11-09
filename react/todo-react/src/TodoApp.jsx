import React from 'react';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            items: [], 
            text: ''
        }
        this.eventHandlerChange = this.eventHandlerChange.bind(this);
        this.eSubmit  = this.eSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h3>ATT GÖRA LISTA</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.eSubmit} >
                    <label htmlFor="new-todo">Vad ska göras: </label>
                    <input id="new-todo" onChange={this.eventHandlerChange} value={this.state.text} />
                    <button>Lägg till ({this.state.items.length})</button>
                </form>
            </div>
        );
    }
    eventHandlerChange(e) {
        this.setState({text: e.target.value});
    }

    eSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0 ) {
            return;
        }
        const newItem = { 
            text: this.state.text, 
            id: Date.now()
        };
      
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ''
        }));
    }
} 

/*
class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map (item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}
*/