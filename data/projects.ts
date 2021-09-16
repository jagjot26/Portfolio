import { Stack } from "./stack";

export type Maybe<T> = T | null;
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
      "https://user-images.githubusercontent.com/51400182/133652867-a8445c19-6e5a-4770-9264-351a55d06ed0.png",
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
    screenshots: [
      "https://user-images.githubusercontent.com/51400182/133553192-d724888e-4c20-45ae-9af3-de0ab0810e51.png",
      "https://user-images.githubusercontent.com/51400182/133553200-b48f6284-7716-4155-babb-b673cb255b51.png",
      "https://user-images.githubusercontent.com/51400182/133553207-07ef4814-30aa-4269-b5ca-553a99050289.png",
      "https://user-images.githubusercontent.com/51400182/133553229-783770d8-f3d4-4184-be23-39e71f17c755.png",
      "https://user-images.githubusercontent.com/51400182/133553238-c73a35c5-e776-476c-924f-70b9c61bb711.png",
    ],

    deployment: {
      web: "https://faeshare.herokuapp.com",
    },
  },
  {
    id: 1,
    title: "Alorine",
    banner:
      "https://user-images.githubusercontent.com/51400182/133651921-5402933d-8c8f-4b21-820d-ac2fd80ec51c.png",
    description:
      "A social blogging platform that offers you to read and write 180 words blogs. The user-authored blogs are baked with authenticity and relevancy. Give an end to the habit of skimming because of too long paragraphs and enjoy reading simple and to the point content.",
    repository: null,
    stack: [Stack.dart, Stack.flutter, Stack.firebase],

    screenshots: [
      "https://user-images.githubusercontent.com/51400182/133540701-47120af1-f854-4093-9060-5c6921b0382e.jpg",
      "https://user-images.githubusercontent.com/51400182/133541060-8706cf0e-1df6-41ad-bb6e-38cce9cdf169.jpg",
      "https://user-images.githubusercontent.com/51400182/133541023-3bde749b-3f9a-45d8-bf25-ab54092e906b.jpg",
      "https://user-images.githubusercontent.com/51400182/133540791-c3a64205-f274-4af8-ba56-c4b30b03e1c9.jpg",
      "https://user-images.githubusercontent.com/51400182/133540935-682ece02-f7b7-457e-85b0-78576b8c8a90.jpg",
      "https://user-images.githubusercontent.com/51400182/133540986-b45e388d-5c1a-4593-851e-c1fd403db620.jpg",
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
      "https://user-images.githubusercontent.com/51400182/133652872-ded8f375-dd45-4f06-9de8-746972a29d40.png",
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
      "https://user-images.githubusercontent.com/51400182/133652884-739babdc-ae69-4e58-b4b0-aacc41455bbc.png",
    description:
      "Tasks is a simple tasks' list app that allows managers and the workers to do their jobs efficiently. Managers assign tasks to the workers on their phones. Workers can check tasks off the list once they have done the task. Changes will also be reflected on the manager's list of that worker's tasks.",
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
      "https://user-images.githubusercontent.com/51400182/133651899-125e1d9e-301e-4b33-9442-80ac89d40a2f.png",

    description:
      "IfAlz helps people to check if they have Alzheimer's by playing some games and answering some quizzes. Users can choose to either play the games individually or, take the full test which comprises of all the games one after another, and gives you some final scores based on your results.",
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
