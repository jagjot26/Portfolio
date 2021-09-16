import React from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps): React.ReactElement {
  const { children } = props;
  return (
    <div className="flex flex-col dark:bg-dark w-full">
      <div className="flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
