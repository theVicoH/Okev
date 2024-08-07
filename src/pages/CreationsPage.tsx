import HeroCreationSection from '../components/widgets/HeroCreationSection';

const CreationsPage = () => {
  return (
    <div className='overflow-auto'>
      <HeroCreationSection />
      <div className="p-4 flex flex-col items-center">
        <p className="mx-4 max-w-screen-md pt-20 text-xl md:w-full md:mx-0">
          Avec les marques, nous voulons une histoire sur le long terme,
          dépasser des limites, afin de surprendre, captiver, susciter la
          surprise et l’émerveillement. Développer l’image de marque à l’aide de
          contenus créatifs et d’une approche digitale marketing et stratégique
          pour créer des histoires interpellantes et sensées.
        </p>
        <p className="mx-4 max-w-screen-md py-20 text-xl md:w-full md:mx-0">
          Okev est une agence multitalent. Notre fonctionnement s'inspire de la
          minutie, de l'attention au détail, et de l'artisanat raffiné typique
          de l'industrie du luxe. Notre mission ? Créer des émotions en
          racontant des histoires chargées de sens et d’esprit pour porter haut
          et fort le message que vous voulez délivrer, créer une image de marque
          créative ou encore développer une stratégie marketing impactante.
        </p>
        
      </div>
    </div>
  );
}

export default CreationsPage;
