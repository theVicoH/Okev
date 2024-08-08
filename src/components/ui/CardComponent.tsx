import { Card } from "@/types/Card";

const CardComponent: React.FC<Card> = ({ title, description, imagePath }) => {
  return (
    <div className="relative h-64 w-48 bg-cover bg-center" style={{ backgroundImage: `url(${imagePath})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;