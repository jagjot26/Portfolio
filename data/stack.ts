import { Colors } from "./colors";

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,
  dart,

  // Frontend
  react,
  reactnative,
  next,
  flutter,

  // Backend
  graphql,
  node,
  django,
  firebase,

  // Cloud
  aws,
  gcp,
  docker,
  kubernetes,

  redux,

  // Databases
  redis,
  postgres,
  mongo,
}

export const WorkStack = [
  Stack.typescript,
  Stack.react,
  Stack.redux,
  Stack.next,
  Stack.mongo,
  Stack.node,
  Stack.dart,
  Stack.flutter,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: "TypeScript",
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: "JavaScript",
    color: Colors.javascript,
  },
  [Stack.next]: {
    value: "NextJS",
    color: Colors.nextjs,
  },
  [Stack.go]: {
    value: "Go",
    color: Colors.go,
  },
  [Stack.dart]: {
    value: "Dart",
    color: Colors.dart,
  },
  [Stack.flutter]: {
    value: "Flutter",
    color: Colors.flutter,
  },
  [Stack.react]: {
    value: "React",
    color: Colors.react,
  },
  [Stack.redux]: {
    value: "Redux",
    color: Colors.redux,
  },
  [Stack.reactnative]: {
    value: "React Native",
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: "GraphQL",
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: "AWS",
    color: Colors.aws,
  },
  [Stack.docker]: {
    value: "Docker",
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: "Kubernetes",
    color: Colors.kubernetes,
  },
  [Stack.gcp]: {
    value: "Google Cloud",
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: "Python",
    color: Colors.python,
  },
  [Stack.node]: {
    value: "Node",
    color: Colors.node,
  },
  [Stack.firebase]: {
    value: "Firebase",
    color: Colors.firebase,
  },
  [Stack.django]: {
    value: "Django",
    color: Colors.django,
  },
  [Stack.postgres]: {
    value: "Postgres",
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: "Redis",
    color: Colors.redis,
  },
  [Stack.mongo]: {},
  [Stack.mongo]: {
    value: "MongoDB",
    color: Colors.mongo,
  },
};
