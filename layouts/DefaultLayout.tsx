import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { DefaultProps } from "../types";

const DefaultLayout: React.FC<DefaultProps> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="w-full px-6 pb-12 antialiased dark:bg-gray-900">
        <div className="mx-auto max-w-8xl">
          {children}
          <Footer />
        </div>
      </section>
    </>
  );
};

export default DefaultLayout;
