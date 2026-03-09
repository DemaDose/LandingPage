import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import BrandsSection from './components/BrandsSection'
import DesignShowcase from './components/DesignShowcase'
import CustomizeSection from './components/CustomizeSection'
import Footer from './components/Footer'
import EarlyAccess from './pages/EarlyAccess'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function LandingPage() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <BrandsSection />
        <DesignShowcase />
        <CustomizeSection />
        <Footer />
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/early-access" element={<EarlyAccess />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  )
}

export default App
