import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "Sakthivel2026",
    icon: Icons.gitHub,
    link: "https://github.com/Sakthivel2026",
  },
  {
    name: "LinkedIn",
    username: "SAKTHIVEL k",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sakthivel-k-3a904b372/",
  },
  {
    name: "Gmail",
    username: "Sakthivel",
    icon: Icons.gmail,
    link: "mailto:sakthivel.wrk@gmail.com",
  },
];
