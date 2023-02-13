import {useEffect, useState} from 'react';
import axios from 'axios';

const WeatherScreen = () => {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        axios.get('https://www.el-tiempo.net/api/json/v1/provincias/28/municipios/28079/weather')
        .then(response => setWeatherData(response))
    }, []);

    return (
        <div className='weatherscreen-container'>
            <div className="explanation">
                <p>Estos son los datos devueltos por <span>https://www.el-tiempo.net/api/json/v1/provincias/28/municipios/28079/weather</span>.</p>
                <p>Se muestran las temperaturas máximas y mínimas diarias para la próxima semana.</p>
            </div>
            <div className="weather">
                <div className='item'>
                    <div className='legend'>Fecha</div>
                    <div className='legend'>Tª Máx. (ºC)</div>
                    <div className='legend'>Tª Mín. (ºC)</div>
                </div>
                {weatherData.data?.prediccion.dia?.map((each) =>(
                    <div className='item'>
                        <div className='date'>{each['@attributes'].fecha}</div>
                        <div className='tempMax'>{each.temperatura.maxima}</div>
                        <div className='tempMin'>{each.temperatura.minima}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherScreen;
