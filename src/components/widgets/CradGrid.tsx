import { Card } from "@/types/Card";
import CardComponent from "../ui/CardComponent";
import data from "../../assets/json/okev-creations.json"

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {data.map((card: Card) => (
        <CardComponent key={card.id} {...card} />
      ))}
    </div>
  );
};
export default CardGrid;
