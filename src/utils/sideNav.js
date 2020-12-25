import { faJava } from "@fortawesome/free-brands-svg-icons";
import {
  faCat,
  faCogs,
  faDesktop,
  faGlobe,
  faHome,
  faServer,
} from "@fortawesome/pro-light-svg-icons";

export const sideNav = [
  { id: 0, label: "home", icon: faHome, alt: "home", path: "/", children: [] },
  {
    id: 1,
    label: "middleware builds",
    icon: faDesktop,
    alt: "middleware builds",
    path: "/middleware",
    children: [
      {
        id: 2,
        label: "liberty profile builds",
        icon: faServer,
        alt: "home",
        path: "/",
        children: [],
      },
      {
        id: 3,
        label: "sbs deployments",
        icon: faCogs,
        alt: "home",
        path: "/",
        children: [],
      },
      {
        id: 4,
        label: "tomcat builds",
        icon: faCat,
        alt: "home",
        path: "/",
        children: [],
      },
      {
        id: 5,
        label: "websphere builds",
        icon: faGlobe,
        alt: "home",
        path: "/",
        children: [],
      },
      {
        id: 6,
        label: "java builds",
        icon: faJava,
        alt: "home",
        path: "/",
        children: [],
      },
    ],
  },
];
