
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/Componant/DaisyKhala/DaisyNav'
import NavBar from './assets/Componant/NavBar/NavBar'
import Pricings from './assets/Componant/Pricings/Pricings'
import ResultCharts from './assets/Componant/ResultCharts/ResultCharts'
import NestedData from './assets/Componant/NestedData/NestedData'
import axios from 'axios'

const pricingsPromise = fetch('/public/pricingData.json').then(res => res.json())
// console.log(pricingsPromise);
// const nestedPromise = fetch('nestedData.json').then(res =>res.json())
const nestedPromise = axios.get('nestedData.json')
// console.log(nestedPromise)
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
        <Suspense fallback={<p className='text-3xl'>Loading.....</p>}>
          <NestedData nestedPromise={nestedPromise}></NestedData>
        </Suspense>
        <ResultCharts></ResultCharts>

      </main>

    </>
  )
}

export default App
