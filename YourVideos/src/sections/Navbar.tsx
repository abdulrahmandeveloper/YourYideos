import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import Searchbar from "../components/searchs/Searchbar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      className="mx-2 my-2 py-2 bg-black"
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"} className="justify-center items-center">
        <img
          src={logo}
          className="ml-4 h-[50px] w-[50px] justify-center items-center "
        ></img>
      </Link>
      <Searchbar />
    </Stack>
  );
};

export default Navbar;
