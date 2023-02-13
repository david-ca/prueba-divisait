import React from 'react';
import { parkingData } from '../../utils';

const ParkingScreen = () => {
    const goToMaps = (latitude, longitude) => {
        const url = `https://www.google.es/maps/place/${latitude}+${longitude}`
        window.open(url, '_blank').focus();
    };

    return (
        <div className='parkingscreen-container'>
            <div className="explanation">
                <p>Estos son los datos devueltos por <span>https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json</span>.</p>
                <p>Los datos se guardaron en duro en la aplicación front, por lo que no se hace una llamada a la API. Esto es porque daba problemas de CORS.</p>
                <p>Al hacer click en cada elemento de la lista se abre una pestaña nueva del navegador con las coordenadas asociadas en Google Maps.</p>
            </div>
            {parkingData["@graph"].map((each) =>(
                <div className='item' onClick={()=> goToMaps(each.location.latitude, each.location.longitude)}>
                    <div className='title'>{each.title}</div>
                    <div className='address'>{each.address["street-address"]}</div>
                </div>
            ))}
            <br />
        </div>
    );
}

export default ParkingScreen;
