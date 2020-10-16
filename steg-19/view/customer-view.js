class CustomerView {
    customerList(data) {
        Helper.hide('main-container');
        let html = '<table style="width: 400px">';
        html += '<tr><td>Kundnr</td><td>Kund</td></tr>';
        for (let i=0; i<data.length; i++) {
            html += '<tr>';
                html += '<td>' + data[i].customer_no + '</td>';
                html += '<td>' + data[i].name + '</td>';
            html += '</tr>';     
        }
        html += '</table>';
        Helper.setHtml('customer-list', html);
        Helper.show('customer-list-container');
    }
}
