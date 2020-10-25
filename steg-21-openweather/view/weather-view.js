class WeatherView {
    
    
    showPanel(data) {
      
        /*
           handling 1-6 i a panel
        */
    
        var styles =  'float:left; width:100%; max-width:';
        switch (data.list.length) {
            case 1 :
                styles += '100%';
                break;
            case 2 :
                styles += '50%';
                break;
            case 3 :
                styles += '33.33%';
                break;
            case 4 :
                styles += '25%';
                break;
            case 5 :
                styles += '20%';
                break;
            case 6 :
                styles += '16.66%';
                break;

        }

        let html = '';
        for(let i=0; i<data.list.length; i++) {
            html += '<div style="' + styles + '">';
                html += '<p><img src="http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png"/></p>';
                html += '<p>' + data.list[i].weather[0].description + '</p>';
                html += '<p>' + data.list[i].main.temp + '</p>';
                html += '<p>' + data.list[i].name + '</p>';
            html += '</div>';
        }
        html += '<div class="clear-left"></div>';
          
        Helper.setHtml('weather-container', html);
      
    }
}
