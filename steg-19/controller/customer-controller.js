class CustomerController {
    constructor() {}
    init() {
        Model.customerList()
        .then(response => response.json())
        .then(function(data) {   
            Current.customer = data;
            View.customerList(data);
        })
    }
}