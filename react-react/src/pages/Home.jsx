import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-custom-green font-crimson">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
        
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-custom-white">Générateur de Briefs IA</h1>
          <p className="mt-4 text-lg text-gray-200">
            Créez des briefs professionnels en quelques minutes avec lintelligence artificielle
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Brief Créatif */}
          <div className="flex h-60 w-80 flex-col items-center justify-center space-y-4 rounded-lg bg-gradient-to-br from-emerald-800 via-custom-green to-emerald-900 p-6 text-white shadow-lg transition-transform hover:scale-105">
            <svg className="h-12 w-12 text-custom-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-xl font-semibold">Brief Créatif</h2>
            <p className="text-center text-sm text-gray-200">Campagnes publicitaires, design, contenu</p>
            <Link 
              to="/create-brief" 
              className="mt-4 flex items-center space-x-2 rounded-lg bg-emerald-700 px-6 py-2 transition-colors hover:bg-emerald-600"
            >
              <span>Créer ce Brief</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Brief Marketing */}
          <div className="flex h-60 w-80 flex-col items-center justify-center space-y-4 rounded-lg bg-gradient-to-br from-emerald-800 via-custom-green to-emerald-900 p-6 text-white shadow-lg transition-transform hover:scale-105">
            <svg className="h-12 w-12 text-custom-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h2 className="text-xl font-semibold">Brief Marketing</h2>
            <p className="text-center text-sm text-gray-200">Stratégies digitales, campagnes, analytics</p>
            <Link 
              to="/create-brief" 
              className="mt-4 flex items-center space-x-2 rounded-lg bg-emerald-700 px-6 py-2 transition-colors hover:bg-emerald-600"
            >
              <span>Créer ce Brief</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Brief Produit */}
          <div className="flex h-60 w-80 flex-col items-center justify-center space-y-4 rounded-lg bg-gradient-to-br from-emerald-800 via-custom-green to-emerald-900 p-6 text-white shadow-lg transition-transform hover:scale-105">
            <svg className="h-12 w-12 text-custom-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h2 className="text-xl font-semibold">Brief Produit</h2>
            <p className="text-center text-sm text-gray-200">Développement, UX/UI, spécifications techniques</p>
            <Link 
              to="/create-brief" 
              className="mt-4 flex items-center space-x-2 rounded-lg bg-emerald-700 px-6 py-2 transition-colors hover:bg-emerald-600"
            >
              <span>Créer ce Brief</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link 
            to="/about" 
            className="inline-block rounded-lg bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            En savoir plus sur notre projet
          </Link>
        </div>

      </div>
      <Footer />
    </div>
  );
}