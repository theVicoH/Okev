import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 text-black py-8 px-4 border-t-[1px] border-neutral-300 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-source text-lg uppercase mb-2">Besoin d'aides ?</h3>
            <div className="space-y-2">
              <div>
                <h4>London</h4>
                <p>20-22 Wenlock Road</p>
                <p>N1 7GU London, UK</p>
                <p>contact@ok-ev.com</p>
              </div>
              <div>
                <h4>Paris</h4>
                <p>7 rue Andrieux</p>
                <p>75008 Paris, France</p>
                <p>talent@ok-ev.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-source text-lg uppercase mb-2">Conditions et Mentions légales</h3>
            <ul className="space-y-2">
              <li>Mentions Légales</li>
              <li>Politique de Confidentialité</li>
            </ul>
          </div>
          <div>
            <h3 className="font-source text-lg uppercase mb-2">Services</h3>
            <ul className="space-y-2">
              <li>Identité de marque</li>
              <li>Influence</li>
              <li>Publicité</li>
              <li>Événementiel</li>
              <li>Metaverse</li>
            </ul>
          </div>
          <div>
            <h3 className="font-source text-lg  uppercase mb-2">Recevez votre newsletter</h3>
            <div className="flex">
              <Input placeholder='Insérez votre adresse e-mail'/>
              <Button className="px-4 py-2 bg-black text-neutral-50 rounded-r-md">
                &gt;
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-neutral-50 hover:text-black">Changer la langue</a>
        </div>
        <div className="text-center text-black text-sm mt-4">
          Copyright © Okev 2017-2022.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
