class CustomerModel {
    async customerList() {
          let promise = await fetch('json/customers.json')
          return promise;
      }
  }