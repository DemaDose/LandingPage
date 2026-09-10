import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import WhoItsFor from './components/WhoItsFor'
import Benefits from './components/Benefits'
import CustomizeSection from './components/CustomizeSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import EarlyAccess from './pages/EarlyAccess'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import AboutUs from './pages/AboutUs'
import Ecommerce from './pages/Ecommerce'
import RestaurantsCafes from './pages/RestaurantsCafes'
import RetailSupermarkets from './pages/RetailSupermarkets'

function LandingPage() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <WhoItsFor />
        <Benefits />
        <CustomizeSection />
        <FAQ />
        <Footer />
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Analytics />
      <SpeedInsights />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/early-access" element={<EarlyAccess />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/restaurants-cafes" element={<RestaurantsCafes />} />
        <Route path="/retail-supermarkets" element={<RetailSupermarkets />} />
      </Routes>
    </Router>
  )
}

export default App
