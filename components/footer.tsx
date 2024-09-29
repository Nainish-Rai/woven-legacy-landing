import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

type Props = {};

function Footer({}: Props) {
  const columns = [
    {
      heading: "Contact Us",
      links: [
        {
          name: "+919236788789",
          url: "tel:+919236788789",
        },
        {
          name: "info@wovenlegacy.in",
          url: "mailto:info@wovenlegacy.in",
        },
        {
          name: "853, Katra Bajirao, Mirzapur - 231001, U.P. India ",
          url: "https://maps.app.goo.gl/6aFjEYGe5pSmNtwC9",
        },
      ],
    },
    {
      heading: "Customer Support",
      links: [
        {
          name: "Help Center",
          url: "/",
        },

        {
          name: "Account",
          url: "/",
        },
        {
          name: "Email Us",
          url: "/",
        },
      ],
    },
    {
      heading: "Company",
      links: [
        {
          name: "Terms",
          url: "/terms-and-conditions",
        },
        {
          name: "Privacy",
          url: "/",
        },
        {
          name: "Cookies",
          url: "/",
        },
      ],
    },
  ];
  return (
    <footer
      id="footer"
      className=" bg-[#264653] px-4 mt-48 lg:mt-8 text-amber-50 pt-16 w-full h-full"
    >
      <div className="w-full max-w-7xl  mx-auto flex flex-col items-center">
        <h1 className="text-amber-50 sm:mb-4">
          Lets make your <span className="alternate-font">house</span> feel like{" "}
          <span className="alternate-font">home</span>
        </h1>
        <p>
          Follow us on facebook, instagram for updates, promotions and more.
        </p>
        <input
          type="text"
          placeholder="Enter your email address"
          className="text-black px-8 w-full p-2 placeholder:text-black/70 max-w-lg mt-6"
        />
        <div className="flex flex-wrap w-full lg:pl-16 mt-14 ">
          {columns.map((column) => (
            <div key={column.heading} className="lg:w-1/4 w-1/2 flex-col flex">
              <p className="text-amber-50 text-xl">{column.heading}</p>
              <ul className="sm:mt-0 list-none -ml-9 ">
                {column.links.map((link) => (
                  <li className="text-white" key={link.name}>
                    <a
                      className="text-amber-50 sm:text-amber-50 prose-a:text-white text-sm prose-white  lg:text-lg font-light sm:no-underline"
                      href={link.url}
                      target="_blank"
                    >
                      <p className="text-white no-underline ">{link.name}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-amber-50 text-lg">Follow Us</p>
            <div className="flex gap-4 -ml-3 flex-row mt-4">
              {" "}
              <Facebook className="cursor-pointer hover:opacity-60 duration-200" />
              <Instagram className="cursor-pointer hover:opacity-60 duration-200" />
              <Twitter className="cursor-pointer hover:opacity-60 duration-200" />
            </div>
          </div>
        </div>
        <p className="text-amber-50 mt-8 text-base pb-4">
          © {new Date().getFullYear()} Woven Legacy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
