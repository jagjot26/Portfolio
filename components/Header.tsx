import React from "react";
import HeaderText from "./HeaderText";

interface HeaderProps {
  openAbout: VoidFunction;
  openContact: VoidFunction;
}

function Header(props: HeaderProps): React.ReactElement {
  const { openAbout, openContact } = props;
  return (
    <div className="banner flex flex-col justify-center dark:text-white">
      <div className="ml-6 md:ml-14 lg:ml-28">
        <p className="text-3xl md:text-3xl lg:text-5xl font-bold select-none">
          Hello, I am Jagjot
        </p>
        <p className="text-md mt-1.5 font-light lg:text-2xl">
          Full Stack Web and Mobile App Developer
        </p>
        <p className="text-sm mt-2 font-light lg:text-lg">
          Read more
          <HeaderText
            onclick={openAbout}
            text="about me"
            bgColor="bg-red-100"
            classes="ml-1.5 mr-1.5"
          />
          or
          <HeaderText
            onclick={openContact}
            text="contact me"
            bgColor="bg-blue-100"
            classes="ml-1.5"
          />
        </p>
      </div>
    </div>
  );
}

export default Header;
