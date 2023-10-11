import { SiGithub, SiLinkedin } from "react-icons/si";
import { IconType } from "react-icons/lib";

interface MyInfoType {
  name: string;
  job: string;
  mail: string;
  profileImg: string | null;
  profiles: Array<ProfilesType> | null;
}

interface ProfilesType {
  id: number;
  title: string | null;
  url: string;
  icon: IconType | null;
}

export const myInfo: MyInfoType = {
  name: "정철오(Iron.J)",
  job: "Web Backend Developer",
  mail: "jungjob1114@gmail.com",
  profileImg: "/image/author-img.png",
  profiles: [
    {
      id: 0,
      title: null,
      url: "https://github.com/jungChulOh",
      icon: SiGithub,
    },
    {
      id: 1,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/jungchuloh",
      icon: SiLinkedin,
    },
  ],
};
