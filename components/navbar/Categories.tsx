import Container from "../Container";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiWindmill } from "react-icons/gi";
import { GiVillage } from "react-icons/gi";
import CategoryBox from "../CategoryBox";
import { useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: FaUmbrellaBeach,
    description: "Close to beautiful beaches",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "Close to nice windmills",
  },
  {
    label: "Modern",
    icon: GiVillage,
    description: "Modern property in the city center",
  },
];

const Categories = () => {
  const params = useSearchParams();
  return (
    <Container>
      <div
        className="pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
