import { records, screening, user, apps } from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: apps,
    link: "/dashboard",
  },
  {
    name: "records",
    imgUrl: records,
    link: "/medical-records",
  },
  {
    name: "screening",
    imgUrl: screening,
    link: "/patient-form",
  },

  {
    name: "profile",
    imgUrl: user,
    link: "/profile",
  },
];
