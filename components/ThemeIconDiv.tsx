import React from "react";
import { IoMdMoon as MoonIcon } from "react-icons/io";
import { IoSunnyOutline as SunIcon } from "react-icons/io5";
import { useTheme } from "next-themes";

function ThemeIconDiv() {
  const { theme, setTheme } = useTheme();

  const setLightTheme = (): void => {
    setTheme("light");
  };

  const setDarkTheme = (): void => {
    setTheme("dark");
  };
  return (
    <div className="cursor-pointer w-full p-5 md:p-10 md:pr-16 lg:pr-20 ">
      {theme === "dark" && (
        <MoonIcon
          className="hover:opacity-60 ml-auto text-2xl lg:text-3xl text-white"
          onClick={setLightTheme}
        />
      )}
      {theme === "light" && (
        <SunIcon
          className="hover:opacity-60 ml-auto text-2xl lg:text-3xl"
          onClick={setDarkTheme}
        />
      )}
    </div>
  );
}

export default ThemeIconDiv;
