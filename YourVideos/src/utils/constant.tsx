import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { SvgIconComponent } from "@mui/icons-material";

export const logo = "../../public/images/play-logo-vector.jpg";

export interface ICategories {
  name: string;
  icon: SvgIconComponent;
}
export const categories: ICategories[] = [
  { name: "New", icon: HomeIcon },
  { name: "JS Mastery", icon: CodeIcon },
  { name: "Coding", icon: CodeIcon },
  { name: "ReactJS", icon: CodeIcon },
  { name: "NextJS", icon: CodeIcon },
  { name: "Music", icon: MusicNoteIcon },
  { name: "Education", icon: SchoolIcon },
  { name: "Podcast", icon: GraphicEqIcon },
  { name: "Movie", icon: OndemandVideoIcon },
  { name: "Gaming", icon: SportsEsportsIcon },
  { name: "Live", icon: LiveTvIcon },
  { name: "Sport", icon: FitnessCenterIcon },
  { name: "Fashion", icon: CheckroomIcon },
  { name: "Beauty", icon: FaceRetouchingNaturalIcon },
  { name: "Comedy", icon: TheaterComedyIcon },
  { name: "Gym", icon: FitnessCenterIcon },
  { name: "Crypto", icon: DeveloperModeIcon },
];

interface IIncludedAPI {
  name: string;
  baseURL: string;
  endpoints: string[];
}

export const includedAPI: IIncludedAPI[] = [
  {
    name: "Google Youtube API",
    baseURL: "https://www.googleapis.com/youtube/v3/",
    endpoints: [
      "/search",
      "/videos",
      "/channels",
      "/playlistItems",
      "/playlists",
      "/subscriptions",
    ],
  },
  {
    name: "Rapid API - youtube v3",
    baseURL: "https://youtube-v31.p.rapidapi.com",
    endpoints: [],
  },
];

//global API hheaders declaration
const API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

export const header = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
};
