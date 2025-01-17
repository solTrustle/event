"use client";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import SponsorDetail from "./sponsorDetail";
import "./sponsorsList.css";

const SponsorsList: React.FC = () => {
  const logos = [
    { logo: "/logo-santala.jpg", width: 325, height: 159 },
    { logo: "/logo-angeles.png", width: 300, height: 300 },
    { logo: "/logo-empowerit.png", width: 300, height: 300 },
    { logo: "/logo-lalloz.png", width: 708, height: 147 },
    { logo: "/logo-cesar.png", width: 248, height: 203 },
    { logo: "/logo-susana.png", width: 110, height: 110 },
    { logo: "/logo-latam.png", width: 110, height: 110 },
    { logo: "/logo-camara.png", width: 110, height: 110 },
  ];
  const tabStyle = {
    tabList: " gap-2 w-full relative p-2 border-b border-divider text-white",
    cursor: "bg-background-dark p-2",
    tabContent: "group-data-[selected=true]:text-[#FFF] text-lg ",
    
  };

  return (
    <div className="cont-sponsors-list">
      <h2>Sponsors</h2>
      <div className="carousel-logos">
        <div className="ticker-track">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.logo}
              alt="sponsor"
              width={325}
              height={159}
            />
          ))}
        </div>
      </div>
      <div className="cont-tabs">
        <Tabs aria-label="Sponsorship options" classNames={tabStyle}>
          <Tab key="photos" title="Diamond" >
          <SponsorDetail
              sponsorshipName="Diamond Sponsorship"
              beneficios={[
                "b1",
                "b2",
                "b3",
                "b4",
                "b5",
                "b6",
                "b7",
                "b8",
                "b9",
                "b10",
              ]}
              inversion="6K"
              image="diamond"
            />
          </Tab>
          <Tab key="platinum" title="Platinum">
          <SponsorDetail
              sponsorshipName="Platinum Sponsorship"
              beneficios={[
                "b1",
                "b3",
                "b4",
                "b5",
                "b6",
                "b7",
                "b8",
                "b9",
                "b10",
              ]}
              inversion="4K"
              image="platinum"
            />
          </Tab>
          <Tab key="gold" title="Gold">
            <SponsorDetail
              sponsorshipName="Gold Sponsorship"
              beneficios={[
                "b5",
                "b6",
                "b7",
                "b8",
                "b9",
                "b10",
              ]}
              inversion="3K"
              image='gold'
            />
          </Tab>
          <Tab key="plata" title="Silver">
            <SponsorDetail
              sponsorshipName="Silver Sponsorship"
              beneficios={[
                "b5",
                "b6",
                "b7",
                "b9",
                "b10",
              ]}
              inversion="2K"
              image='silver'
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default SponsorsList;
