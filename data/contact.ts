export enum ContactType {
  github = "github",
  linkedin = "linkedin",
  twitter = "twitter",
  youtube = "youtube",
  email = "email",
}

export interface Contact {
  twitter: string;
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: "@jagsing26",
  site: "jagjot-singh.netlify.app",
  links: {
    github: "https://github.com/jagjot26",
    linkedin: "https://www.linkedin.com/in/jagjot26",
    twitter: "https://twitter.com/jagsing26",
    youtube: "",
    email: "mailto:jaysing989@gmail.com",
  },
};
