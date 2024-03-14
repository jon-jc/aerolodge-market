"use client";
import Container from "../Container";
import {
  FaUmbrellaBeach,
  FaWater,
  FaSnowflake,
  FaWarehouse,
} from "react-icons/fa";
import { GiWindmill, GiVillage, GiGrass } from "react-icons/gi";
import {
  MdOutlinePool,
  MdOutlineAcUnit,
  MdLandscape,
  MdOutlineWbSunny,
} from "react-icons/md";
import { AiFillBank, AiFillCar } from "react-icons/ai";
import { RiVipDiamondLine } from "react-icons/ri";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { MdOutlineVilla } from "react-icons/md";

// Updated categories array with your provided icons and descriptions
export const categories = [
  {
    label: "Shoreline",
    icon: FaUmbrellaBeach,
    description: "Just steps away from the beach!",
  },
  {
    label: "Windview",
    icon: GiWindmill,
    description: "Surrounded by picturesque windmills!",
  },
  {
    label: "Sleek",
    icon: MdOutlineVilla,
    description: "Boasts a sleek and modern design!",
  },
  {
    label: "Meadows",
    icon: GiGrass, // React icons should be used directly without quotes
    description: "Nestled in serene countryside surroundings.",
  },
  {
    label: "Swim",
    icon: MdOutlinePool,
    description: "Features a stunning, private swimming pool.",
  },
  {
    label: "Escape",
    icon: FaUmbrellaBeach,
    description: "Located on a tranquil, picturesque island.",
  },
  {
    label: "Ripple",
    icon: FaWater,
    description: "Sits adjacent to a serene, glistening lake.",
  },
  {
    label: "Peak",
    icon: MdOutlineAcUnit,
    description: "Perfect for ski enthusiasts, with slopes nearby.",
  },
  {
    label: "Heritage",
    icon: AiFillBank,
    description: "Stay in a historic castle with timeless elegance.",
  },
  {
    label: "Grotto",
    icon: MdLandscape,
    description: "Experience the mystery in a natural cave setting.",
  },
  {
    label: "Trails",
    icon: AiFillCar,
    description: "Ideal for outdoor camping and wilderness adventures.",
  },
  {
    label: "Glacier",
    icon: FaSnowflake,
    description: "Immersed in a breathtaking arctic wonderland.",
  },
  {
    label: "Dunes",
    icon: MdOutlineWbSunny,
    description: "Discover the beauty of the vast, sun-kissed desert.",
  },
  {
    label: "Homestead",
    icon: FaWarehouse,
    description: "Experience country life in a charming rustic barn.",
  },
  {
    label: "Luxury",
    icon: RiVipDiamondLine,
    description: "Defines luxury with premium, modern amenities.",
  },
];

const Categories = () => {
  const params = useSearchParams();

  const category = params?.get("category");

  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }

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
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
