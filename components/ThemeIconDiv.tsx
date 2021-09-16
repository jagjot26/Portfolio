import React from "react";
import { IoMdMoon as MoonIcon } from "react-icons/io";
import { IoSunnyOutline as SunIcon } from "react-icons/io5";
import { useTheme } from "next-themes";

function ThemeIconDiv() {
  const { setTheme, resolvedTheme } = useTheme();

  const setLightTheme = (): void => {
    setTheme("light");
  };

  const setDarkTheme = (): void => {
    setTheme("dark");
  };
  return (
    <div className="cursor-pointer w-full pt-5 md:pt-10 pr-5 md:pr-20 lg:pr-24 ">
      {resolvedTheme === "dark" && (
        <MoonIcon
          className="hover:opacity-60 ml-auto text-3xl lg:text-4xl text-white"
          onClick={setLightTheme}
        />
      )}
      {resolvedTheme === "light" && (
        <SunIcon
          className="hover:opacity-60 ml-auto text-3xl lg:text-4xl text-black"
          onClick={setDarkTheme}
        />
      )}
    </div>
  );
}

export default ThemeIconDiv;
