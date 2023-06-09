import { AiOutlineGithub, AiOutlineTwitter, AiTwotoneMail } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export const Assets = {
  portfolio: {
    coding_projects_image:
      "https://cdn.ithinkdiff.com/wp-content/uploads/2020/12/IntelliJ-IDEA-M1-Mac-Apple-Silicon-2048x1321.jpg.webp",
    artwork_image: "https://i.imgur.com/x9W79qN.jpg",
    coding_projects: [
      {
        image:
          "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Personal Website",
        description: "This website!",
        link: "https://github.com/omegaladon/personal-site",
        tags: [
          { text: "complete", color: "rgba(102, 160, 0, 0.3)" },
          { text: "reactjs", color: "rgba(0, 102, 204, 0.3)" },
        ],
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661635981840-d09ec795eb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Robotics FRC 2023",
        description:
          "My team's code from the FRC 2023 season, Charged Up. I was a lead programmer on the team.",
        link: "https://github.com/iron-claw-972/FRC2023",
        tags: [
          { text: "complete", color: "rgba(102, 160, 0, 0.3)" },
          { text: "java", color: "rgba(255, 102, 102, 0.3)" },
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "omegalib",
        description:
          "A Minecraft plugin development library made using Java and the Paper API.",
        link: "https://github.com/omegaladon/omegalib",
        tags: [
          { text: "wip", color: "rgba(255, 153, 51, 0.3)" },
          { text: "java", color: "rgba(255, 102, 102, 0.3)" },
        ],
      },
      {
        image: "https://blog.4psa.com/wp-content/uploads/baseline-374x300.png",
        title: "baseline",
        description:
          "A Java library for values. Originally, I made this for my robotics team.",
        link: "https://github.com/omegaladon/baseline",
        tags: [
          { text: "wip", color: "rgba(255, 153, 51, 0.3)" },
          { text: "java", color: "rgba(255, 102, 102, 0.3)" },
        ],
      },
    ],
    artwork_projects: [
      {
        src: "https://pbs.twimg.com/media/Fry9eDLagAA4igC?format=jpg&name=4096x4096",
        link: "https://twitter.com/omgabuilds/status/1638392711333154817?s=20",
      },
      {
        src: "https://pbs.twimg.com/media/FuxQHlZaEAM9GM5?format=jpg&name=4096x4096",
        link: "https://twitter.com/omgabuilds/status/1651783513518256130?s=20",
      },
      {
        src: "https://pbs.twimg.com/media/Ft4diz5aMAEsyly?format=jpg&name=4096x4096",
        link: "https://twitter.com/omgabuilds/status/1647787159125131266?s=20",
      },
      {
        src: "https://pbs.twimg.com/media/FscDkseakAEwFjK?format=jpg&name=4096x4096",
        link: "https://twitter.com/omgabuilds/status/1641284606933745665?s=20",
      },
      {
        src: "https://pbs.twimg.com/media/FsAX8_4aEAAaFs9?format=jpg&name=large",
        link: "https://twitter.com/omgabuilds/status/1639336604811804673?s=20",
      },
      {
        src: "https://pbs.twimg.com/media/Fr6_WcJaQAEWdkz?format=jpg&name=large",
        link: "https://twitter.com/omgabuilds/status/1638957710124404736?s=20",
      },
      {
        src: "https://pbs.twimg.com/media/FrwZNn3aEAEHfZm?format=jpg&name=large",
        link: "https://twitter.com/omgabuilds/status/1638212091244081152?s=20",
      },
      {
        src: "https://i.postimg.cc/MKKwryvg/s.png",
        link: "",
      },
      {
        src: "https://i.imgur.com/0zY0tkA.png",
        link: "",
      },
      {
        src: "https://i.imgur.com/qj8u42y.jpg",
        link: "",
      },
      {
        src: "https://i.imgur.com/doyvEaB.png",
        link: "",
      },
      {
        src: "https://i.imgur.com/iE9tR8O.png",
        link: "",
      },
      {
        src: "https://i.imgur.com/YozCfI4.jpg",
        link: "",
      },
      {
        src: "https://i.imgur.com/MJa4GxY.jpg",
        link: "",
      },
      {
        src: "https://i.imgur.com/4zEtKVy.png",
        link: "",
      },
      {
        src: "https://i.imgur.com/zb6JAgC.jpg",
        link: "",
      },
      {
        src: "https://i.imgur.com/13IdjiF.jpg",
        link: "",
      },
      {
        src: "https://i.imgur.com/oyiJzDO.png",
        link: "",
      },
      {
        src: "https://i.imgur.com/ctjdh45.jpg",
        link: "",
      },
    ],
  },
  socials: [
    {
      icon: AiOutlineTwitter,
      href: "https://twitter.com/omgabuilds",
      target: "_blank",
      rel: "noreferrer"
    },
    {
      icon: AiOutlineGithub,
      href: "https://github.com/omegaladon",
      target: "_blank",
      rel: "noreferrer"
    },
    {
      icon: FaDiscord,
      href: "https://discord.com/users/244272713730883586",
      target: "_blank",
      rel: "noreferrer"
    },
    {
      icon: AiTwotoneMail,
      href: "mailto:businessomga@gmail.com",
    }
  ]
};
