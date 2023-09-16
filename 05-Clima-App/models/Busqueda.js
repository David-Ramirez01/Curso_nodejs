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

    async ciudad(Lugar){
        try {
            const inst = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${Lugar}.json`,
                params : this.ParametrosMap
            });
            const resp = await inst.get();
            console.log(resp.data);

            return [];
        } catch (error) {
            console.log(error);
            return [];
        }

    }
}