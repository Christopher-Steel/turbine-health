import { useEffect } from 'react';
import './App.css';
import TurbineGrid from './components/TurbineGrid';
import { useStore } from './store';
import axios from 'axios';
import TurbineApiAlarm from './types/TurbineApiAlarm';

function App() {
  const { initialise, updateTurbineWarnings, updateTurbineCriticals } = useStore();

  useEffect(() => {
    initialise(100);
    axios("https://run.mocky.io/v3/6a13fe7e-840c-4d82-b58f-c737139f0e55")
      .then((response) => {
        console.log(response.data);
        const alarms: TurbineApiAlarm[] = response.data;
        alarms.forEach((alarm: TurbineApiAlarm) => {
          const { turbine, level, count } = alarm;
          if (level === 1) {
            updateTurbineWarnings(turbine, count);
          }
          if (level === 2) {
            updateTurbineCriticals(turbine, count);
          }
        })
      });
  }, [initialise, updateTurbineCriticals, updateTurbineWarnings]);
  return (
    <div className="App">
        <TurbineGrid></TurbineGrid>
    </div>
  );
}

export default App;
