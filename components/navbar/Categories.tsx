import Container from "../Container";
import {
  FaUmbrellaBeach,
  FaWater,
  FaSnowflake,
  FaWarehouse,
} from "react-icons/fa";
import { GiWindmill, GiVillage } from "react-icons/gi";
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
import { FaWaterLadder } from "react-icons/fa6";
import { MdOutlineVilla } from "react-icons/md";

// Updated categories array with your provided icons and descriptions
export const categories = [
  {
    label: "Beach",
    icon: FaUmbrellaBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: FaWaterLadder, // React icons should be used directly without quotes
    description: "Nestled in serene countryside surroundings.",
  },
  {
    label: "Pools",
    icon: MdOutlinePool,
    description: "Features a stunning, private swimming pool.",
  },
  {
    label: "Islands",
    icon: FaUmbrellaBeach,
    description: "Located on a tranquil, picturesque island.",
  },
  {
    label: "Lake",
    icon: FaWater,
    description: "Sits adjacent to a serene, glistening lake.",
  },
  {
    label: "Skiing",
    icon: MdOutlineAcUnit,
    description: "Perfect for ski enthusiasts, with slopes nearby.",
  },
  {
    label: "Castles",
    icon: AiFillBank,
    description: "Stay in a historic castle with timeless elegance.",
  },
  {
    label: "Caves",
    icon: MdLandscape,
    description: "Experience the mystery in a natural cave setting.",
  },
  {
    label: "Camping",
    icon: AiFillCar,
    description: "Ideal for outdoor camping and wilderness adventures.",
  },
  {
    label: "Arctic",
    icon: FaSnowflake,
    description: "Immersed in a breathtaking arctic wonderland.",
  },
  {
    label: "Desert",
    icon: MdOutlineWbSunny,
    description: "Discover the beauty of the vast, sun-kissed desert.",
  },
  {
    label: "Barns",
    icon: FaWarehouse,
    description: "Experience country life in a charming rustic barn.",
  },
  {
    label: "Lux",
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
