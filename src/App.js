import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [kirjoitukset,setKirjoitukset] = useState([])

  useEffect(() => {
    fetch("https://api.mariapori.fi/Vieraskirja")
    .then((response) => response.json())
    .then((data) => setKirjoitukset(data))
    .catch((error) => alert("Dataa ei voitu hakea."))
  },[]);

  return (
    <div className="App">
      <h1>Vieraskirja</h1>
      <table className='table table-dark'>
        <thead>
        <tr>
          <th>PVM</th>
          <th>Kirjoittaja</th>
          <th>Viesti</th>
        </tr>
        </thead>
        <tbody>
          {kirjoitukset.map((kirjoitus)=>
          <tr key={kirjoitus.Id}>
            <td>
              {kirjoitus.PVM}
            </td>
            <td>
              {kirjoitus.Kirjoittaja}
            </td>
            <td>
              {kirjoitus.Viesti}
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
