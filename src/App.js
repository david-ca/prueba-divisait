import { Routes, Route } from 'react-router-dom';
import WeatherScreen from './Screens/WeatherScreen/WeatherScreen';
import ParkingScreen from './Screens/ParkingScreen/ParkingScreen';
import CryptoScreen from './Screens/CryptoScreen/CryptoScreen';
import ScreenSelector from  './Components/ScreenSelector/ScreenSelector';

function App() {
  return (
    <div className="App">
      <ScreenSelector></ScreenSelector>
      <Routes>
        <Route
            path = "/"
            element = {<WeatherScreen></WeatherScreen>}/>
        <Route
            path = "/parking"
            element = {<ParkingScreen></ParkingScreen>}/>
        <Route
            path = "/crypto"
            element = {<CryptoScreen></CryptoScreen>}/>
    </Routes>
    </div>
  );
}

export default App;
