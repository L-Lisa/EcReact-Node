class ValutaView {
    
    init(countries, valutor) {
        for (let i=0; i<countries.length; i++) {
            countries[i].exchangeRate = valutor.conversion_rates[countries[0].currency] / valutor.conversion_rates[countries[i].currency];
        }
        let htmlSelect = '';
        for (let i=0; i<countries.length; i++) {
            htmlSelect += '<option value="' + i + '">' +  countries[i].name + ' (' + countries[i].currency + ')</option>';
        }   
        Helper.setHtml('exchange-from', htmlSelect);
        Helper.setHtml('exchange-to', htmlSelect);
    }

    showExchangeRate(newAmount) {
        Helper.setHtml('new-amount', newAmount);
    }

    showExchangeRates(countries) {
        Helper.hide('main-container');
        let html = '<table style="width: 400px">';
        html += '<tr><td>Land</td><td>Valuta</td><td>Kurs</td></tr>';
        for (let i=0; i<countries.length; i++) {
        html += '<tr>';
            html += '<td>' + countries[i].name + '</td>';
            html += '<td>' + countries[i].currency + '</td>';
            html += '<td>' + Number(countries[i].exchangeRate).toFixed(2) + '</td>';
            html += '</tr>';     
        }
        html += '</table>';
        Helper.setHtml('country-list', html);
        Helper.show('country-list-container');
    }

    doExchangeRates() {
        Helper.hide('main-container');
        Helper.show('exchange-container');
    }

    showExchangeRatesBack() {
        Helper.hide('country-list-container');
        Helper.show('main-container');
    }
    
    doExchangeRatesBack() {
        Helper.hide('exchange-container');
        Helper.show('main-container');
    }
}
