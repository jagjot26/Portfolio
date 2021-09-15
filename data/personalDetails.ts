export interface Personal {
  name: string;
  fullName: string;
  title: string;
  about: string;
  resume: string;
  available: boolean;
}

export const personal: Personal = {
  name: "Jagjot",
  fullName: "Jagjot Singh",
  title: "Full Stack Web and Mobile Developer",
  about: `
      A software engineer who loves to collaborate and build well-structured, scalable applications.
      I’ve written code in high-paced and challenging environment with an emphasis on using best practices
      to develop high-quality software that meets project requirements, budget, and schedule.
    `,
  resume:
    "https://drive.google.com/file/d/1V5umW8CKY-1aegh_NO_ZBCC9heYfI-o3/view?usp=sharing",
  available: true,
};
