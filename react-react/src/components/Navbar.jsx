import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  const toggleMenu = () => {
    setMenuOuvert(!menuOuvert);
  };

  const fermerMenu = () => {
    setMenuOuvert(false);
  };

  return (
    <nav className="relative flex items-center justify-between bg-custom-green px-4 py-3 font-crimson text-custom-white md:px-6 md:py-4">
      
    
      <Link to="/" className="text-lg font-bold md:text-xl">
        Générateur de Briefs
      </Link>

    
      <div className="mr-6 hidden space-x-4 font-anonymous md:flex">
        <Link to="/" className="hover:text-emerald-300 hover:underline">Accueil</Link>
        <Link to="/create-brief" className="hover:text-emerald-300 hover:underline">Générer</Link>
        <Link to="/about" className="hover:text-emerald-300 hover:underline">En savoir plus</Link>
      </div>

 
      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOuvert}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOuvert ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      
      {menuOuvert && (
        <div className="absolute left-0 top-full z-50 w-full bg-custom-green shadow-lg md:hidden">
          <div className="flex flex-col space-y-3 px-4 py-3 font-anonymous">
            <Link 
              to="/" 
              className="py-2 hover:text-emerald-300 hover:underline"
              onClick={fermerMenu}
            >
              Accueil
            </Link>
            <Link 
              to="/create-brief" 
              className="py-2 hover:text-emerald-300 hover:underline"
              onClick={fermerMenu}
            >
              Générer
            </Link>
            <Link 
              to="/about" 
              className="py-2 hover:text-emerald-300 hover:underline"
              onClick={fermerMenu}
            >
              En savoir plus
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}