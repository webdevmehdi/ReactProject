// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Images
import logoCT from "assets/images/homeImage2.jpg";

export default {
  brand: {
    name: "DrymSolutions",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "DrymSolution facebook account link",
    },
    {
      icon: <TwitterIcon />,
      link: "DrymSolution tweeter account link",
    },
    {
      icon: <GitHubIcon />,
      link: "DrymSolution github account link",
    },
    {
      icon: <YouTubeIcon />,
      link: "DrymSolution youtube channel link",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },

        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
  ],
};
