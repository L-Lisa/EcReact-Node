import React from 'react';


export default class Valuta extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            valutor: [], 
            valuta: '',
            kurs: ''
        }
        this.eValutaChange = this.eValutaChange.bind(this);
        this.eKursChange = this.eKursChange.bind(this);
        this.eSubmit  = this.eSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h3>Valutor</h3>
                <ValutaLista valutaItems={this.state.valutor} /> 
                <form onSubmit={this.eSubmit} >
                    <p>
                        <label htmlFor="new-valuta">Valuta: </label>
                        <input id="new-valuta" onChange={this.eValutaChange} value={this.state.valuta} />
                    </p>
                    <p>
                        <label htmlFor="new-kurs">Kurs: </label>
                        <input id="new-kurs" onChange={this.eKursChange} value={this.state.kurs} />
                    </p>
                    <p>
                        <button>Lägg till valuta </button>
                    </p>
                </form>
            </div>
        );
    }
    eValutaChange(e) {
        this.setState({valuta: e.target.value});
    }
    eKursChange(e) {
        this.setState({kurs: e.target.value});
    }
    eSubmit(e) {
        e.preventDefault();
        if (this.state.valuta.length === 0 ) {
            return;
        }
        e.preventDefault();
        if (this.state.valuta.length === 0 ) {
            return;
        }
        const newValuta = { 
            valuta: this.state.valuta, 
            kurs: this.state.kurs
        };
      
        this.setState(state => ({
          valutor: state.valutor.concat(newValuta),
          valuta: '',
          kurs: ''
        }));

        console.log(this.state.valutor);
    }
} 

class ValutaLista extends React.Component {
    render() {
        return (
            <ul>
                {this.props.valutaItems.map (valutaItem => (
                    <li key={valutaItem.valuta}>{valutaItem.valuta + ' - ' + valutaItem.kurs}</li>
                ))}
            </ul>
        )
    }
}

