import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

// Fix: Change 'selectedcategory' to 'selectedCategory' and 'setSelectedcategory' to 'setSelectedCategory'
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)} // Fix: Use 'setSelectedCategory'
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503", // Fix: Use 'selectedCategory'
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red", // Fix: Use 'selectedCategory'
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8", // Fix: Use 'selectedCategory'
              fontSize: "20px",
              //  font: "semi-bold",
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
