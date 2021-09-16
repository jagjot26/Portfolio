import React from "react";
import { useTheme } from "next-themes";
import SocialIcons from "./SocialIcons";

function Footer() {
  const { resolvedTheme } = useTheme();
  return (
    <div
      className={
        resolvedTheme === "dark"
          ? `dark:text-white w-full bg-gray-800 mt-14 flex flex-col justify-center p-16`
          : `bg-gray-100 w-full mt-14 flex flex-col justify-center p-16`
      }
    >
      <p className="mx-auto text-2xl font-bold">Let's get in touch</p>
      <p className="mx-auto mt-6 text-lg font-light">
        Connect for opportunities
      </p>
      <SocialIcons className="mx-auto mt-6" />
      <p className="mx-auto text-xs font-light mt-12">© 2021 Jagjot Singh</p>
    </div>
  );
}

export default Footer;
