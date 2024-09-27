import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ICBJVM from "./IcbJvm";
import Teenagers from "./Teenagers";
import Couples from "./Couples";
import Children from "./Children";

const Ministries: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const targetId = params.get("target");

    if (targetId) {
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 2000); // 2 seconds delay
    }
  }, [location]);
  return (
    <div>
      <section id="icb-jvm">
        <ICBJVM />
        <div id="icb-jvm" />
      </section>
      <section id="adolas">
        <Teenagers />
        <div id="adolas" />
      </section>
      <section id="casais">
        <Couples />
        <div id="casais" />
      </section>
      <section id="criancas">
        <Children />
        <div id="criancas" />
      </section>
    </div>
  );
};

export default Ministries;
