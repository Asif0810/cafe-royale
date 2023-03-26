import React from "react";

const Footer = () => {
  return (
    <div className="mt-32">
      <footer className="footer p-10  bg-[#DAC4B4] text-base-content">
        <div>
          <h3 className="text-2xl font-bold">
            Cafe <i>Royale</i>
          </h3>
          <p>
            International coffee brand
            <br />
            Providing reliable service since 2004
            <br />
            Trinidad,Washington DC, America
          </p>
          <p className="text-red-600">Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">hygienic cofee</a>
          <a className="link link-hover">neat and clean room</a>
          <a className="link link-hover">customer helping</a>
          <a className="link link-hover">order out of city</a>
        </div>
        <div>
          <span className="footer-title">Social media</span>
          <a
            href="https://www.linkedin.com/in/aryan-asif/"
            className="link link-hover"
          >
            linkedin
          </a>
          <a
            href="https://www.facebook.com/asif.robinson.1/"
            className="link link-hover"
          >
            facebook
          </a>
          <a
            href="https://www.asifaslam1703@gmail.com"
            className="link link-hover"
          >
            email
          </a>
          <a className="link link-hover">instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
