class ValutaController {
    constructor() {}

    init() {
        Model.countryList()
        .then(response => response.json())
        .then(function(data) {   
            Current.countries = data;
            Model.exchangeRates()
            .then(response => response.json())
            .then(function(data) {   
                View.init(Current.countries, data);
            })
        })
        .catch(error => alert(error))
    }

    processExchange(amount, indexFrom, indexTo) {
        let fromExchangeRate = Current.countries[indexFrom].exchangeRate;   
        let toExchangeRate = Current.countries[indexTo].exchangeRate;     
        let newAmount = Model.processExchange(amount, fromExchangeRate, toExchangeRate);
        View.showExchangeRate(newAmount);
    }

    showExchangeRates() {
        View.showExchangeRates(Current.countries);
    }

    doExchangeRates() {
        View.doExchangeRates();
    }
            
    showExchangeRatesBack() {
        View.showExchangeRatesBack();
    }

    doExchangeRatesBack() {
        View.doExchangeRatesBack();
    }

}
