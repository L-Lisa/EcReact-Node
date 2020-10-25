class WeatherModel {

    async weatherLoad() {
        let promise = await fetch('https://api.openweathermap.org/data/2.5/group?id=5128581,5368361,1850147,1220988,524901,1819729,2988506,3369157,2147714,3530597,2711537,2706619,2678129,2673875,2666670,2693301&lang=SE&appid=cd076890ec3552da2c0f46b5caea9530&units=metric');
        return promise;
    }
}
