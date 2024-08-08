import CardGrid from "@/components/widgets/CradGrid";
import HeroCreationSection from "../components/widgets/HeroCreationSection";
import { Button } from "@/components/ui/button";

const CreationsPage = () => {
  return (
    <div className="overflow-auto">
      <HeroCreationSection />
      <div id="about-us-section" className="p-4 flex flex-col items-center">
        <p className="mx-4 max-w-screen-md pt-20 text-md md:w-full md:mx-0">
          Avec les marques, nous voulons une histoire sur le long terme,
          dépasser des limites, afin de surprendre, captiver, susciter la
          surprise et l’émerveillement. Développer l’image de marque à l’aide de
          contenus créatifs et d’une approche digitale marketing et stratégique
          pour créer des histoires interpellantes et sensées.
        </p>
        <p className="mx-4 max-w-screen-md py-20 text-md md:w-full md:mx-0">
          Okev est une agence multitalent. Notre fonctionnement s'inspire de la
          minutie, de l'attention au détail, et de l'artisanat raffiné typique
          de l'industrie du luxe.
          <br /> Notre mission ? Créer des émotions en racontant des histoires
          chargées de sens et d’esprit pour porter haut et fort le message que
          vous voulez délivrer, créer une image de marque créative ou encore
          développer une stratégie marketing impactante.
        </p>
      </div>
      <CardGrid />
      <div className="p-4 flex flex-col items-center py-28">
        <div id="contact-section" className="flex flex-col items-start gap-10">
          <h4 className="text-black font-source font-light mx-4 text-3xl uppercase max-w-screen-md md:text-4xl md:mx-0">
            Vous souhaitez démarrer un projet avec nous ?
          </h4>
          <p className="mx-4 max-w-screen-md text-md md:w-full md:mx-0">
            Nous serions ravis de faire votre connaissance et de vous rencontrer.
            Nos bureaux vous sont ouverts et nos équipes toujours à l’écoute.
            N’hésitez pas à échanger avec nous autour de vos idées & concepts,
            nous nous ferons un plaisir de partager nos conseils pour développer
            vos projets !
          </p>
          <Button variant="outline">Nous contactez</Button>
        </div>
      </div>
    </div>
  );
};

export default CreationsPage;
