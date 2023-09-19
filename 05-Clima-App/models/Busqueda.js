import fs from 'fs';
import axios from "axios";

export class Busquedas{
    historal = [];
    bdPAth = './db/database.json';

    constructor(){
        this.LeerDB();
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
            'appid':`0db9096f8e34be50cde82e5e89cb156e`,
            'units':'metric',
            'lang': 'sp',
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
                baseURL:`https://api.openweathermap.org/data/2.5/weather?`,
                params: {lat,lon,...this.ParametrosCLi}
            })
            const resp = await inst.get();
            const {weather , main}  = resp.data;
            console.log(main);
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

    addHistorial( lugar = ''){
        if (this.historal.includes(lugar.toLowerCase())) {
            return;
        }
        this.historal.unshift(lugar.toLowerCase());
        this.GuardarDB();

    }

    GuardarDB(){
        const payload = {
            history:this.historal
        }
        fs.writeFileSync(this.bdPAth , JSON.stringify(payload));
    }

    LeerDB(){
        if(!fs.existsSync(this.bdPAth)){
            return;
        }
    
        const info = fs.readFileSync(this.bdPAth, { encoding: 'utf-8'});
        const data = JSON.parse(info);
        this.historal=data.history;
    }
}