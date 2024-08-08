import { Card } from "@/types/Card";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardComponent: React.FC<Card> = ({ title, description, imagePath, className }) => {
  return (
    <div className={`relative h-[520px] w-full overflow-hidden group ${className}`}>
      <LazyLoadImage
        alt={title}
        effect="blur"
        src={imagePath}
        wrapperClassName="absolute inset-0"
        className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="font-source uppercase text-3xl font-light pb-2 text-center text-neutral-50">{title}</h2>
        <p className="text-sm text-center text-neutral-200">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
