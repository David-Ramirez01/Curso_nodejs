import axios, { Axios } from "axios";


export class Busquedas{
    historal = []

    constructor(){

    }

    get ParametrosMap(){
        return{
            'access_token':process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get ParametrosCLi(){
        return{
            'appid':process.env.OPENE_WEATHER_KEY,
            'units':'metric',
            'language': 'es'
        }
    }

    async ciudad(Lugar){
        try {
            const inst = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${Lugar}.json`,
                params : this.ParametrosMap
            });
            const resp = await inst.get();
            return resp.data.features.map( lugar =>({
                id:lugar.id,
                nombre:lugar.place_name_es,
                lng:lugar.center[0],
                lat:lugar.center[1],
            }))
        } catch (error) {
            console.log(error);
            return [];
        }

    }

    async CLima(lat , lon){
        try {
            const inst = axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather?appid=0db9096f8e34be50cde82e5e89cb156e`,
                params: {...this.ParametrosCLi, lat,lon}
            })
            const resp = await inst.get();
            const {weather , main}  = resp.data;
            console.log(weather);
            return{
                desc: weather[0].description,
                temp: main.temp,
                max:main.temp_max,
                min:main.temp_min,
            }
        } catch (error) {
            console.log(error);
        }
    }
}