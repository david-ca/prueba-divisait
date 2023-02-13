import {useEffect, useState} from 'react';
import axios from 'axios';
import Select from 'react-select';
import {CartesianGrid, Line, LineChart, YAxis} from "recharts";

const CryptoScreen = () => {
    const [graphData, setGraphData] = useState([])
    const [coinSelected, setCoinSelected] = useState("bitcoin")
    const [periodSelected, setperiodSelected] = useState("7")

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinSelected}/market_chart?vs_currency=eur&days=${periodSelected}&interval=daily`)
        .then(response => formatData(response))
    }, [coinSelected, periodSelected]);

    const formatData = (response) => {
        const data = response.data.prices;
        let formattedData = data.map((each, index) => (
            {
                day: `${index}`,
                price: Math.round(each[1])
        }))
        setGraphData(formattedData)
    };

    return (
        <div className='cryptoscreen-container'>
            <div className='explanation'>
                <p>Aquí se pueden ver las fluctuaciones del precio de varias criptomonedas durante el período de tiempo deseado.</p>
                <p>Cada vez que se manipula cualquiera de los dos dropdowns se hace una llamada a una API de CoinGecko.</p>
            </div>
            <div className='graph'>
                <div className='drowpdowns'>
                    <Select
                        className='dropdown-coin'
                        onChange={(e) => setCoinSelected(e.value)}
                        placeholder='Seleccione una criptomoneda'
                        options={[
                            {value: 'bitcoin', label: 'Bitcoin'},
                            {value: 'ethereum', label: 'Ethereum'},
                            {value: 'ripple', label: 'XRP'},
                        ]}
                    />
                    <Select
                        className='dropdown-period'
                        onChange={(e) => setperiodSelected(e.value)}
                        placeholder='Seleccione un período de tiempo'
                        options={[
                            {value: '365', label: 'Últimos 365 días'},
                            {value: '30', label: 'Últimos 30 días'},
                            {value: '7', label: 'Últimos 7 días'},
                            {value: '3', label: 'Últimos 3 días'},
                            {value: '1', label: 'Último día'},
                        ]}
                    />
                </div>
                <LineChart className='chart' width={400} height={300} data={graphData}>
                    <Line type="monotone" dataKey="price" stroke="#2196F3" strokeWidth={3}></Line>
                    <CartesianGrid stroke="#ccc"></CartesianGrid>
                    <YAxis/>
                </LineChart>
            </div>
        </div>
    );
}

export default CryptoScreen;
