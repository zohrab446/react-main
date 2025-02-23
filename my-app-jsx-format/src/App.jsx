import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestComponent from './TestComponent'
import { nameList } from './TestComponent'

function App() {
  let a = 15;
  const firstName = "Ali";

  let vize1 = 10;
  let vize2 = 80;

  let sonuc = false;

  let isimler = [
    "Enes",
    "Ayşenur",
    "Kübra",
    "Adem"
  ]

  console.log(nameList)

  return (
    <div>
      {/* <p>Ortalama : {(vize1 + vize2) / 2}</p> */}

      {/* {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyet alamazsın , kaybol</p>} */}

      {/* {
        (vize1 + vize2) / 2 >= 50 ? <p>Dersten geçtin aferin</p> : <p>kaldın geçmiş olsun</p>
      } */}

      {/* {
        isimler.map((isim, index) => (
          <div
            style={{
              backgroundColor: 'orange',
              border: '1px solid black'
            }} key={index}>{isim}</div>
        ))
      } */}

      {/* <TestComponent /> */}

    </div>
  )
}

export default App
