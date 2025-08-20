import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-custom-green font-crimson">
      <Navbar />
      
      <div className="mt-10 flex flex-1 flex-col items-center justify-center p-6">
        <div className="max-w-4xl space-y-8 text-custom-white">
          
          
          <div className="text-center">
            <h1 className="text-4xl font-bold">À propos de Collectif Le Brief</h1>
            <p className="mt-4 text-lg text-gray-200">
              Révolutionnez la création de briefs avec l&apos;intelligence artificielle
            </p>
          </div>

    
          <div className="space-y-6 rounded-lg bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 p-8">
            <h2 className="text-2xl font-semibold">Notre Mission</h2>
            <p className="text-gray-200">
              Collectif Le Brief est né d&apos;un constat simple : créer un brief professionnel demande
              du temps, de l&apos;expertise et de la clarté. Notre plateforme IA permet aux marketeurs,
              designers et chefs de produit de générer des briefs complets et personnalisés en
              quelques minutes seulement.
            </p>
          </div>

        
          <div className="space-y-6 rounded-lg bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 p-8">
            <h2 className="text-2xl font-semibold">L&apos;Équipe</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-emerald-700"></div>
                <p className="font-medium">Lemy</p>
                <p className="text-sm text-gray-300">Mettre Photo</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-emerald-700"></div>
                <p className="font-medium">Kine Lame</p>
                <p className="text-sm text-gray-300">Mettre Photo</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-emerald-700"></div>
                <p className="font-medium">Isaac</p>
                <p className="text-sm text-gray-300">Mettre Photo</p>
              </div>
            </div>
          </div>

          
          <div className="space-y-6 rounded-lg bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 p-8">
            <h2 className="text-2xl font-semibold">Fonctionnalités</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-200">
              <li>Interface intuitive (formulaire et chat)</li>
              <li>Générateur IA avec prompt engineering avancé</li>
              <li>Export multiple (PDF, Notion, Google Docs)</li>
              <li>Templates personnalisables</li>
            </ul>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}