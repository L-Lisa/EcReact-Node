import React from 'react';

export default class TodoApp extends React.Component {
    constructor (props) {
        /*
            In JavaScript, super refers to the parent class constructor (React.Component)
            Importantly, you can’t use this in a constructor until after you’ve called the parent constructor.
            JavaScript won’t let you:
        */
        super(props);
        /*
            A props should no be changed 
        */
        this.state = { items: [], text: ''};
        this.eventHandlerChange = this.eventHandlerChange.bind(this);
        this.eventHandlerSubmit = this.eventHandlerSubmit.bind(this);
        console.log(this.state.items);
    }

    render() {
        console.log('render');
        return (
            <div>
                <h3>ATT GÖRA</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.eventHandlerSubmit}>
                    <label htmlFor="new-todo">Vad ska göras: </label>
                    <input id="new-todo" onChange={this.eventHandlerChange} value={this.state.text} />
                    <button>Lägg till {this.state.items.length + 1} </button>
                </form>
            </div>  
        );
    }

   eventHandlerChange(e) {
        console.log(e.target.value);
        this.setState({text: e.target.value});
    }

    eventHandlerSubmit(e) {
        e.preventDefault();
     
        if (this.state.text.length === 0) {
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
        console.log(this.state.items);
    }
}      

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}
