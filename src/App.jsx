
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/Componant/DaisyKhala/DaisyNav'
import NavBar from './assets/Componant/NavBar/NavBar'
import Pricings from './assets/Componant/Pricings/Pricings'

const pricingsPromise = fetch('/public/pricingData.json').then(res => res.json())
// console.log(pricingsPromise);

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Pricings pricingsPromise={pricingsPromise}></Pricings>
        </Suspense>
      </main>

    </>
  )
}

export default App
