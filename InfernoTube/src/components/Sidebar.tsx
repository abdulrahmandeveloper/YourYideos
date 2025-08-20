import { Stack } from "@mui/material";
import { categories } from "../utils/constant";
import { ICategories } from "../utils/constant";

interface ISidebar {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}
const Sidebar = ({ selectedCategory, setSelectedCategory }: ISidebar) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category: ICategories) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? "#FC1503" : "",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              fontSize: "20px",
              font: "semi-bold",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
