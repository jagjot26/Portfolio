import { Stack } from "./stack";

type Maybe<T> = T | null;
type Tuple<T> = [T, T];

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface Project {
  id: number;
  title: string;
  website?: string;
  banner: string;
  description: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Faeshare",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fpeapods%2Fbanner.png?alt=media&token=20726ab4-332d-4cd7-afb1-2d1764deaf6b",
    description:
      "Full stack social media web app made with the help of Next.js, Socket.io and TailwindCSS.",
    repository: "https://github.com/jagjot26/faeshare",
    stack: [
      Stack.javascript,
      Stack.next,
      Stack.react,
      Stack.redux,
      Stack.node,
      Stack.mongo,
    ],
    screenshots: [],

    deployment: {
      web: "https://faeshare.herokuapp.com",
    },
  },
  {
    id: 1,
    title: "Alorine",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fbanner.jpeg?alt=media&token=4d1d49e3-20ac-491e-8947-57a4e8520cc6",
    description:
      "A social blogging platform that offers you to read and write 180 words blogs. The user-authored blogs are baked with authenticity and relevancy. Give an end to the habit of skimming because of too long paragraphs and enjoy reading simple and to the point content.",
    repository: null,
    stack: [Stack.dart, Stack.flutter, Stack.firebase],

    screenshots: [
      "https://doc-14-0g-docs.googleusercontent.com/docs/securesc/vafr7kf1kghali8hu38tlqh7s68kivma/3nstimrdi2up60hshga1ttikopg7rkla/1631748900000/06417074345059691237/06417074345059691237/1m2r7j747QokXA62-GT6HQAtzcDeGU-KY?authuser=0&nonce=iaovco2dhp3uo&user=06417074345059691237&hash=kc55is3f127skdobfdlj24thish7rhnf",
      "https://doc-0k-0g-docs.googleusercontent.com/docs/securesc/vafr7kf1kghali8hu38tlqh7s68kivma/pgms9lara7r8jbnen2kn1bbbbuehi1ai/1631748975000/06417074345059691237/06417074345059691237/1wWWsNbPE-L7RfHaIliCnnV0g5cY3P_uB?authuser=0",
      "https://doc-04-0g-docs.googleusercontent.com/docs/securesc/vafr7kf1kghali8hu38tlqh7s68kivma/iju6ak319k2te6q9gmgbpo1l4om6h5ca/1631749050000/06417074345059691237/06417074345059691237/1UL8Sx-zAOzZGjIqX8BLD8wW4cHJSFfel?authuser=0",
    ],
    deployment: {
      android:
        "https://play.google.com/store/apps/details?id=com.alorine&hl=en",
    },
  },

  {
    id: 2,
    title: "Flashchat",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fbanner.jpeg?alt=media&token=4d1d49e3-20ac-491e-8947-57a4e8520cc6",
    description:
      "FlashChat is a simple, one-to-one texting application that allows users to communicate free of cost (provided that they have data conn.) without any limitations. Users can send and receive messages, edit their profile pictures, change their bios, and do a bunch of other stuff.",
    repository: "https://github.com/jagjot26/FlashChat",
    stack: [Stack.dart, Stack.flutter, Stack.firebase],

    screenshots: [
      "https://play-lh.googleusercontent.com/N7AfRIVTH6eH5rlagR4VIm_wwDKQN4Fga3-xjKkWWSlm3nM-cpsbR9Zi3jP0GZFxCyw=w2878-h1410",
      "https://play-lh.googleusercontent.com/zGuYA-dyu1He8Ua9AZXIo1LwWRp7ssxdRFN0wPIDxqgH3nLeyw8qHhBCFnipyTh0aA=w2878-h1410",
      "https://play-lh.googleusercontent.com/5FxXraoLDd16aaTi8d4Nins_TR-Dq8O9y71O-dX76pDhAW8JYVgF6BVfHmjKoZT5HuQ=w2878-h1410",
      "https://play-lh.googleusercontent.com/_268f57BlgrA0Q65NToIPJcfN43hF7sWsYQX6ScEDbx5H9_02sX1A3GxXi0PG5Tsvbs=w2878-h1410",
      "https://play-lh.googleusercontent.com/cY551mU_6Hqvsjq2kCD9VJnEoAa_uEfNsDmm1e_4vx3KRh8nF1BpxByJ52FT5ztLFGM=w2878-h1410",
      "https://play-lh.googleusercontent.com/QSqKPimGqOZsGSoxrd8L5oNoW6YjEZSVaTSSxsEO696gPvOmCwNsx1LC7t-io69X34c=w2878-h1410",
    ],
    deployment: {
      android:
        "https://play.google.com/store/apps/details?id=co.jugjot.flash_chat&hl=en",
    },
  },
  {
    id: 3,
    title: "Tasks",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fbanner.png?alt=media&token=1c8fef8b-397e-434e-8ae8-48b6a5bc2ed2",
    website: "https://boom.london",
    description:
      "An app that allows shopowners and workers to work efficiently. ",
    repository: "https://github.com/Jagjot26/Tasks",
    stack: [Stack.dart, Stack.flutter, Stack.firebase],
    screenshots: [
      "https://user-images.githubusercontent.com/51400182/74667106-bb8b5080-51c8-11ea-90f8-2edb62544ec5.gif",
      "https://user-images.githubusercontent.com/51400182/74667093-b62e0600-51c8-11ea-99c3-342eeebfca70.png",
      "https://user-images.githubusercontent.com/51400182/74667091-b5956f80-51c8-11ea-9c1c-d9ab47a738e3.png",
      "https://user-images.githubusercontent.com/51400182/74667098-b6c69c80-51c8-11ea-9705-b68d12dd19f4.png",
      "https://user-images.githubusercontent.com/51400182/74667718-d3170900-51c9-11ea-863f-8ba9bb078232.gif",
      "https://user-images.githubusercontent.com/51400182/74667097-b6c69c80-51c8-11ea-842d-d5a80832d939.png",
    ],
    deployment: {},
  },
  {
    id: 4,
    title: "IfAlz",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fbanner.png?alt=media&token=1c8fef8b-397e-434e-8ae8-48b6a5bc2ed2",

    description:
      "An app that helps people to check if they have Alzheimer's by playing some games.",
    repository: "https://github.com/Jagjot26/ifAlz",
    stack: [Stack.dart, Stack.flutter, Stack.firebase],
    screenshots: [
      "https://user-images.githubusercontent.com/51400182/74451944-65579e00-4ea6-11ea-8efe-c7cf9831b2e3.png",
      "https://user-images.githubusercontent.com/51400182/74449321-6c7cad00-4ea2-11ea-80f0-28d4f37747ed.gif",
      "https://user-images.githubusercontent.com/51400182/74448468-05122d80-4ea1-11ea-8e0d-79a9ee5e04bb.gif",
      "https://user-images.githubusercontent.com/51400182/74449862-32f87180-4ea3-11ea-9a42-557a2c09e4e6.gif",
      "https://user-images.githubusercontent.com/51400182/74450597-5374fb80-4ea4-11ea-942c-86c84e02b397.gif",
      "https://user-images.githubusercontent.com/51400182/74451780-23c6f300-4ea6-11ea-821d-524a7c587666.png",
      "https://user-images.githubusercontent.com/51400182/74451955-67216180-4ea6-11ea-94ca-d5117e49eb6b.png",
    ],
    deployment: {},
  },
];