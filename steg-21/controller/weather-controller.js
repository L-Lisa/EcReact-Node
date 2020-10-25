class WeatherController {
    constructor() {}

    init() {
        this.weatherUpdate();
    }

    weatherUpdate () {
        Model.weatherLoad()
        .then(response => response.json())
        .then(function(data) {   
            View.weatherShow(data); 
        })
        .catch(error => alert(error))
        
    }

}
