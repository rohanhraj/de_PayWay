import { useState } from 'react'
import { Navbar, Services, Welcome, Transactions, Footer, Loader } from './components'


const App = () =>{
  
  

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
