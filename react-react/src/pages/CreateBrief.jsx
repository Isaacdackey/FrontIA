import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CreateBrief() {
  const [donneesFormulaire, setDonneesFormulaire] = useState({
    typeEntreprise: "",
    secteur: "",
    nomProjet: "",
    budget: "",
    ton: "",
    objectifPrincipal: "",
    audienceCiblee: "",
    contraintesCreatives: "",
    canaux: "",
    livrables: ""
  });

  const [briefGenere, setBriefGenere] = useState(null);

  const gestionChangementInput = (e) => {
    setDonneesFormulaire({
      ...donneesFormulaire,
      [e.target.name]: e.target.value
    });
  };

  const gestionSoumission = (e) => {
    e.preventDefault();
    const mockBrief = `
# ${donneesFormulaire.nomProjet || "Brief Professionnel"}

## Entreprise
- **Type:** ${donneesFormulaire.typeEntreprise || "Non spécifié"}
- **Secteur:** ${donneesFormulaire.secteur || "Non spécifié"}

## Budget
${donneesFormulaire.budget || "Non spécifié"}

## Objectif Principal
${donneesFormulaire.objectifPrincipal || "Non spécifié"}

## Audience Ciblée
${donneesFormulaire.audienceCiblee || "Non spécifié"}

## Ton
${donneesFormulaire.ton || "Non spécifié"}

## Supports/Canaux
${donneesFormulaire.canaux || "Non spécifié"}

## Livrables
${donneesFormulaire.livrables || "Non spécifié"}

${donneesFormulaire.contraintesCreatives ? `## Contraintes Créatives\n${donneesFormulaire.contraintesCreatives}` : ''}
    `;
    
    setBriefGenere(mockBrief);
  };

  return (
    <div className="flex min-h-screen flex-col bg-custom-green font-crimson">
      <Navbar />
      
      
      <div className="mt-5 flex flex-1 flex-col p-4 lg:flex-row lg:p-6">
        
        
        <div className="w-full lg:w-1/2 lg:pr-4">
          <div className="rounded-lg bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 p-4 shadow-lg md:p-6">
            <h2 className="mb-4 text-xl font-bold text-custom-white md:mb-6 md:text-2xl">Créer votre Brief</h2>
            
            <form onSubmit={gestionSoumission} className="space-y-3 md:space-y-4">
              
              
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Type d&apos;Entreprise *</label>
                <select
                  name="typeEntreprise"
                  value={donneesFormulaire.typeEntreprise}
                  onChange={gestionChangementInput}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  required
                >
                  <option value="">Sélectionnez...</option>
                  <option value="startup">Startup</option>
                  <option value="pme">PME</option>
                  <option value="grande-entreprise">Grande Entreprise</option>
                  <option value="association">Association</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>

              
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Secteur d&apos;Activité *</label>
                <input
                  type="text"
                  name="secteur"
                  value={donneesFormulaire.secteur}
                  onChange={gestionChangementInput}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  placeholder="Ex: Technologie, Mode, Santé..."
                  required
                />
              </div>

            
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Nom du Projet *</label>
                <input
                  type="text"
                  name="nomProjet"
                  value={donneesFormulaire.nomProjet}
                  onChange={gestionChangementInput}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  placeholder="Nom de votre campagne/projet"
                  required
                />
              </div>

            
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={donneesFormulaire.budget}
                  onChange={gestionChangementInput}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  placeholder="Ex: 5000€, 10k-15k€"
                />
              </div>

            
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Ton *</label>
                <select
                  name="ton"
                  value={donneesFormulaire.ton}
                  onChange={gestionChangementInput}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  required
                >
                  <option value="">Sélectionnez...</option>
                  <option value="professionnel">Professionnel</option>
                  <option value="décontracté">Décontracté</option>
                  <option value="inspirant">Inspirant</option>
                  <option value="urgent">Urgent</option>
                  <option value="luxe">Luxe/Premium</option>
                  <option value="jeune">Jeune/Dynamique</option>
                </select>
              </div>

            
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Objectif Principal *</label>
                <textarea
                  name="objectifPrincipal"
                  value={donneesFormulaire.objectifPrincipal}
                  onChange={gestionChangementInput}
                  rows={2}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  placeholder="Quel est l'objectif principal de ce projet ?"
                  required
                />
              </div>

              
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Audience Ciblée *</label>
                <textarea
                  name="audienceCiblee"
                  value={donneesFormulaire.audienceCiblee}
                  onChange={gestionChangementInput}
                  rows={2}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  placeholder="Décrivez votre public cible (âge, intérêts, comportements...)"
                  required
                />
              </div>

              
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Contraintes Créatives (Optionnel)</label>
                <textarea
                  name="contraintesCreatives"
                  value={donneesFormulaire.contraintesCreatives}
                  onChange={gestionChangementInput}
                  rows={2}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  placeholder="Couleurs, styles, éléments à éviter..."
                />
              </div>

        
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Supports/Canaux *</label>
                <select
                  name="canaux"
                  value={donneesFormulaire.canaux}
                  onChange={gestionChangementInput}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  required
                >
                  <option value="">Sélectionnez...</option>
                  <option value="reseaux-sociaux">Réseaux Sociaux</option>
                  <option value="site-web">Site Web</option>
                  <option value="email">Email Marketing</option>
                  <option value="print">Print (Affiches, Flyers)</option>
                  <option value="video">Vidéo</option>
                  <option value="evenementiel">Événementiel</option>
                  <option value="multi-canal">Multi-Canal</option>
                </select>
              </div>

              
              <div>
                <label className="mb-1 block text-sm text-custom-white md:mb-2 md:text-base">Livrables *</label>
                <textarea
                  name="livrables"
                  value={donneesFormulaire.livrables}
                  onChange={gestionChangementInput}
                  rows={2}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:px-4 md:py-2 md:text-base"
                  placeholder="Que doit-on produire ? (Ex: 3 posts Instagram, 1 landing page...)"
                  required
                />
              </div>

              
              <div className="pt-3 md:pt-4">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-700 md:px-8 md:py-3 md:text-base"
                >
                  <span>Générer le Brief</span>
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-4">
          <div className="h-full rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-4 shadow-lg md:p-6">
            <h2 className="mb-4 text-xl font-bold text-custom-white md:mb-6 md:text-2xl">Résultat du Brief</h2>
            
            {briefGenere ? (
              <div className="h-64 overflow-y-auto rounded-lg bg-white p-4 md:h-[calc(100%-80px)] md:p-6">
                <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 md:text-sm">
                  {briefGenere}
                </pre>
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center md:h-[calc(100%-80px)]">
                <div className="text-center text-gray-400">
                  <svg className="mx-auto mb-2 h-10 w-10 md:mb-4 md:h-16 md:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm md:text-base">Le brief généré s&apos;affichera ici</p>
                  <p className="mt-1 text-xs md:mt-2 md:text-sm">Remplissez le formulaire et cliquez sur Générer</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}