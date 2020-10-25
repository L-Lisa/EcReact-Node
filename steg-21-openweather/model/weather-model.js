class WeatherModel {

    /*
    async init() {
        let promise = await fetch('json/places.json')
        return promise;
    }
    */

   async citiesListLoad() {
        let promise = await fetch('json/cities.json');
        return promise;
    }

    citiesInitSet(data, number) {
        if (number > 6) {
            number = 6;
        }
        let list = [];
        for (let i=0; i<number; i++) {
           list.push(data[i].id);
        }
        return list;
    }

    async weatherListLoad(data) {
        let url = 'https://api.openweathermap.org/data/2.5/group?lang=SE&appid=cd076890ec3552da2c0f46b5caea9530&units=metric&id=';
        for (let i=0; i<data.length; i++) {
            url += data[i] + ',';
        }
        url = url.substring(0, url.length - 1);
        let promise = await fetch(url);
        // let promise = await fetch('https://api.openweathermap.org/data/2.5/group?id=5128581,5368361,1850147,1220988,524901,1819729,2988506,3369157,2147714,3530597,2711537,2706619,2678129,2673875,2666670,2693301&lang=SE&appid=cd076890ec3552da2c0f46b5caea9530&units=metric');
        return promise;
    }

}
