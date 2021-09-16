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
      A software engineer who loves to collaborate and build well-structured and scalable applications.
      I try to emphasise on using best practices to develop high-quality software that meets project requirements, budget, and schedule.
    `,
  resume:
    "https://drive.google.com/file/d/1xpOLaTWRF362jYBLU7T-R9DaUfnvkkBS/view?usp=sharing",
  available: true,
};
