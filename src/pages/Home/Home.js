import React from "react";
import htmlLogo from "../..//assets/img/logo/html5 logo.png";
import cssLogo from "../../assets/img/logo/css logo.png";
import jsLogo from "../../assets/img/logo/js icon.png";
import SingleHomeItem from "./SingleHomeItem";
import "./Home.css";
import NavBar from "../../components/Navbar";

function Home() {
  return (
    <div className="home h-screen">
      <NavBar />
      <h1 className="py-8 text-3xl font-semibold text-center">
        Start a quiz now
      </h1>
      <div className="flex h-[calc(100%-10rem)] justify-center items-center">
        <div className="w-11/12 md:w-6/12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center">
          <SingleHomeItem title="HTML" img={htmlLogo} link="html" />
          <SingleHomeItem title="CSS" img={cssLogo} link="css" />
          <SingleHomeItem
            title="JS"
            img={jsLogo}
            link="js"
            classes="col-span-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
