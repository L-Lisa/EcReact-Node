class WeatherController {
    constructor() {}

    init() {
        // Load a list with selection of cities
        Model.citiesListLoad()
        .then(response => response.json())
        .then(function(data) {   
            Current.cities = data;
            // Set tnumber of cities 1-6
            Current.selectedCities = Model.citiesInitSet( Current.cities, 7);
            Controller.weatherListLoad( );
        })
        .catch(error => alert(error))
    }

    weatherListLoad() {

        Model.weatherListLoad(Current.selectedCities)
        .then(response => response.json())
        .then(function(data) {   
            // Current.weatherData = data;
            View.showPanel(data);
        })
        .catch(error => alert(error))
    }

}
