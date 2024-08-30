import React from 'react';
import ICBJVM from './IcbJvm';
import Teenagers from './Teenagers';
import Couples from './Couples';
import Children from './Children';

const Ministries: React.FC = () => {
  return (
    <div>
      <section id="icb-jvm">
        <ICBJVM />
      </section>
      <section id="adolas">
        <Teenagers />
      </section>
      <section id="casais">
        <Couples />
      </section>
      <section id="criancas">
        <Children />
      </section>
    </div>
  );
};

export default Ministries;