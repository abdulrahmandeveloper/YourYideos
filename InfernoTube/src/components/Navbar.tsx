import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import Searchbar from "./searchs/Searchbar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      className="mx-2 py-2 bg-black"
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
          className="h-[60px] w-[60px] justify-center items-center "
        ></img>
      </Link>
      <Searchbar />
    </Stack>
  );
};

export default Navbar;
