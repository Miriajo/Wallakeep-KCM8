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

        // Añadimos includeTotal (booleano que indica si es venta o alquiler) 
        // Ignoro esta query puesto que quiero que me salgan todos los registros ya sean de venta o alquiler

        // Añadimos el tag
        query += tag ? `tags=${tag}&` : "";

        // Añadimos el precio
        // Hay que añadir la lógica de filtrado por rango de precio que existe en NodePop
        if (price) 
        {
            if (price == 50)
            {
                query += price ? `precio=50&` : "";
            }
            else if (price > 10 && price < 50)
            {
                query += price ? `precio=10-50&` : "";
            }
            else if (price >= 10)
            {
                query += price ? `precio=10-&` : "";
            }
            else if (price < 50)
            {
                query += price ? `precio=50-&` : "";
            }
            else {
                query += price ? `precio=${price}&` : "";
            }
        }
        
        // Añadimos el nombre
        query += name ? `nombre=${name}&` : "";


        // Eliminamos el último & de la query
        query = query.substr(0, query.length - 1);
        
        console.log(query);
       
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
