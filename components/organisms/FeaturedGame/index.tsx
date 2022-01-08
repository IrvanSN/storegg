import React from 'react';
import FeaturedGameItem from '../../molecules/FeaturedGameItem/index';

export default function Index() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeaturedGameItem
            thumbnail="1"
            href="/detail"
            title="Super Mechs"
            device="Mobile"
          />
          <FeaturedGameItem
            thumbnail="2"
            href="/detail"
            title="Call of Duty: Modern"
            device="Mobile"
          />
          <FeaturedGameItem
            thumbnail="3"
            href="/detail"
            title="Mobile Legends"
            device="Mobile"
          />
          <FeaturedGameItem
            thumbnail="4"
            href="/detail"
            title="Clash of Clans"
            device="Mobile"
          />
          <FeaturedGameItem
            thumbnail="5"
            href="/detail"
            title="Valorant"
            device="Desktop"
          />
        </div>
      </div>
    </section>
  );
}
