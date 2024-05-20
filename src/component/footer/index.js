import React from 'react';
import Logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="bg-grey1 text-white font-base text-base">
      <div className="xl:container xl:mx-auto">
        <div className="flex flex-col space-y-4 items-center px-4 md:px-12 xl:px-24 py-12">
          <div className="w-full flex flex-col space-y-6 lg:space-y-0 pb-4 lg:pb-0 lg:flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <div>
                <img src={Logo} className="h-36 lg:h-[120px]" alt="logo" />
              </div>
              <div className="max-w-lg text-center pt-14">
                MovieMint liberates Filmmakers and fans through decentralized funding. Our Blockchain platform seamlessly connects Independent Creators and Passionate Supporters.
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-row justify-between md:justify-evenly items-center">
              <div className="flex flex-col space-y-1">
                <div className="text-[#b0d357] font-semibold text-sm lg:text-lg">Pages</div>
                <NavItem href="/" label="Home" />
                <NavItem href="/about-us" label="About us" />
                <NavItem href="/movies" label="Movies" />
                <NavItem href="/faq" label="F&Q" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="text-[#b0d357] font-semibold text-sm lg:text-lg">Our social networks</div>
                <NavItem href="/telegram" label="Telegram" />
                <NavItem href="/instagram" label="Instagram" />
                <NavItem href="/facebook" label="Facebook" />
                <NavItem href="/youtube" label="YouTube" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="text-[#b0d357] font-semibold text-sm lg:text-lg">For reference</div>
                <NavItem href="/telegram" label="Telegram" />
                <NavItem href="/instagram" label="Instagram" />
                <NavItem href="/facebook" label="Facebook" />
                <NavItem href="/youtube" label="YouTube" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-6">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z"></path>
              <path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path>
            </svg>
            <div>All Rights reserved for <a href="https://www.moviemint.net" className="hover:underline cursor-pointer hover:text-[#b0d357]">moviemint.net</a> - 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ href, label }) => {
  return (
    <a href={href} className="flex items-center cursor-pointer">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
      </svg>
      <div>{label}</div>
    </a>
  );
};

export default Footer;
