import React from "react";
import "./OurSponsors.scss";

import wealthsimple from "../../resources/images/sponsors/wealthsimple.png";
import opentext from "../../resources/images/sponsors/opentext.png";
import bbb from "../../resources/images/sponsors/bigbluebubble.png";
import cds from "../../resources/images/sponsors/cds.png";
import ubisoft from "../../resources/images/sponsors/ubisoft.png";
import cse from "../../resources/images/sponsors/cse.jpg";
import janestreet from "../../resources/images/sponsors/janestreet.png";
import manulife from "../../resources/images/sponsors/manulife.png";

const sponsors = [
  {
    name: "Canadian Digital Service",
    img: cds,
    alt: "cds.png",
    quote: "The Canadian Digital Service (CDS) is relentlessly focused on improving how the federal government designs and delivers digital services to people in Canada. They build digital products that solve common service problems for public servants and provide guidance and tools for Government of Canada (GC) teams to help improve the delivery of services to the public. They're a team of over 250 public servants- developers, designers, advisors and support staff who work across Canada to deliver seamless digital services at scale."
  },
  {
    name: "Ubisoft Toronto",
    img: ubisoft,
    alt: "ubisoft.png",
    quote: "Ubisoft Toronto is one of the largest development studios within Ubisoft, employing talented developers from around the world. They create worlds and tell stories that grip you, inspire you, and challenge you. Since opening in 2010, they have shipped innovative game projects on some of Ubisoft’s biggest brands: Assassin’s Creed, Far Cry, Watch Dogs, For Honor, and Tom Clancy’s Splinter Cell. Their team leverages cutting-edge technology and innovative approaches to push the boundaries of game development. They are committed to shaping the future of gaming in one of the most vibrant cities in the world. At Ubisoft Toronto, they celebrate diversity and individuality, believing that their unique perspectives help them build stronger, more creative teams. Caring for their people is at the heart of Ubisoft Toronto."
  },
  {
    name: "Jane Street",
    img: janestreet,
    alt: "janetreet.png",
    quote: "Jane Street is a quantitative trading firm and liquidity provider with a unique focus on technology and collaborative problem solving. They were founded by a small group of traders and technologists in a tiny New York office. Today, they have more than 2600 employees across five global offices. They trade a broad range of asset classes on more than 200 venues in 45 countries. They innovate in tech, from functional programming to machine learning to programmable hardware"
  },
  {
    name: "Wealthsimple",
    img: wealthsimple,
    alt: "wealthsimple.png",
    quote: "Wealthsimple is on a mission to help everyone achieve financial freedom by reimagining what it means to manage their money. Using smart technology, they take financial services that are often confusing, opaque and expensive and make them transparent and low-cost for everyone. They're the largest fintech company in Canada, with over 3 million users who trust them with more than $40 billion in assets."
  },
  {
    name: "Big Blue Bubble",
    img: bbb,
    alt: "bigbluebubble.png",
    quote: "Big Blue Bubble is a veteran mobile game developer with more than a decade of experience creating innovative and creative titles. Their studio’s inclusive and fun-loving culture makes every member of our team feel valued. Big Blue Bubble has released more than 100 titles to date across a variety of platforms, including our own award-winning franchise, My Singing Monsters."
  },
  {
    name: "Communications Security Establishment",
    img: cse,
    alt: "cse.jpg",
    quote: "Communications Security Establishment Canada (CSE) is the national cryptologic agency, providing the Government of Canada with information technology security and foreign signals intelligence. CSE hires Canadians with a wide range of skills, experiences and perspectives because diversity makes us stronger. They offer exciting career opportunities for both professionals and students. They are team players, pathfinders, and problem solvers, all different, all united by a common mission: protecting Canada and Canadians."
  },
  {
    name: "OpenText",
    img: opentext,
    alt: "opentext.png",
    quote: "OpenText is a world leader in Information Management, helping companies securely capture, govern and exchange information on a global scale. They offer cloud-native solutions in an integrated and flexible Information Management platform."
  },
  {
    name: "Manulife",
    img: manulife,
    alt: "manulife.png",
    quote: "Manulife Financial Corporation is a Canadian multinational insurance company and financial services provider headquartered in Toronto, Ontario. They are a leading international financial services group that helps people make their decisions easier and lives better. They operate primarily as John Hancock in the United States and Manulife elsewhere. They provide financial advice, insurance, as well as wealth and asset management solutions for individuals, groups and institutions. They believe their greatest contribution to society is the products they provide, which help people make their decisions easier and lives better. They also strive to make meaningful impacts in other ways: by adhering to the strongest standards of conduct, through environmental responsibility, philanthropy, employee volunteerism, promoting health and wellness, and much more."
  },
];

const OurSponsors = () => (
  <div className="our-sponsors-container">
  </div>
);

export default OurSponsors;
