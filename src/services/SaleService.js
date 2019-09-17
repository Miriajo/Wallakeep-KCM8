import {API, HOST} from "./Util";

export default class SaleService {
    getSales({start, limit, sort, includeTotal = true, tag, price, name}) {
        // Empezamos la query
        let query = "?";

        // Añadimos el start (MSA - En mi API 'start' es en realidad 'skip')
        query += start ? `skip=${start}&` : "";

        // 2. Faltan añadir a la query los demás campos
        // Añadimos el filtro de limit
        query += limit ? `limit=${limit}&` : "";

        // Añadimos el sort
        query += sort ? `sort=${sort}&` : "";

        // Añadimos venta (booleano que indica si es venta o alquiler)
        //query += includeTotal ? `venta=${includeTotal}&` : "";

        // Añadimos el tag
        query += tag ? `tags=${tag}&` : "";

        // Añadimos el precio
        query += price ? `precio=${price}&` : "";
        
        // Añadimos el nombre
        query += name ? `nombre=${name}&` : "";


        // Eliminamos el último & de la query
        query = query.substr(0, query.length - 1);

       
        return fetch(`${HOST}/${API}/anuncios${query}`, {
            method: "GET"
        }).then(res => res.json());
    }

    getTags() {
    // 2. Eliminar estas líneas y realizar la llamada a NodePop para obtener todos los tags
                
        return fetch(`${HOST}/${API}/anuncios/tags`, {
            method: "GET"
        }).then(res => res.json());
    
    }
}
