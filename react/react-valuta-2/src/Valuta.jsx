import React from 'react';

/*
    - Förenklad event handerare for input eFormChange
    - Ändrat ValutaLista component till function istället för class
*/

export default class Valuta extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            valutor: [], 
            valuta: '',
            kurs: '' 
        }
        this.state.countries = this.props.Countries;
        this.eFormChange = this.eFormChange.bind(this);
        this.eSubmit  = this.eSubmit.bind(this);       
        console.log('constructor'); 
    }

    componentDidMount() {
        fetch('valuta.json')
            .then(response => response.json())
            .then(data => this.setState({ valutor: data }))           
      }

    render() {
        console.log('Render'); 
        return (
            <div>
                <h3>Valutor</h3>
                <ValutaLista valutaItems={this.state.valutor} /> 
                <form onSubmit={this.eSubmit} >
                    <p>
                        <label htmlFor="valuta">Valuta: </label>
                        <input id="valuta" onChange={this.eFormChange} value={this.state.valuta} />

                    </p>
                    <p>
                        <label htmlFor="kurs">Kurs: </label>
                        <input id="kurs" name="kurs" onChange={this.eFormChange} value={this.state.kurs} />
                    </p>
                    <p>
                        <button>Lägg till valuta </button>
                    </p>
                </form>
            </div>
        );
    }

    eFormChange (e) {
        var inputObj = {};
        inputObj[e.target.id] = e.target.value;                 
        this.setState( inputObj );
    }

    eSubmit(e) {
        e.preventDefault();
        alert('sunmit');
        if (this.state.valuta.length === 0 ) {
            return;
        }
        e.preventDefault();
        if (this.state.kurs.length === 0 ) {
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

const ValutaLista = (props) => {
    return (
        <ul>
            {props.valutaItems.map (valutaItem => (
                <li key={valutaItem.valuta}>{valutaItem.valuta + ' - ' + valutaItem.kurs}</li>
            ))}
        </ul>
    )
}


