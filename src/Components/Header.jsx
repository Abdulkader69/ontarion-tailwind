import React from 'react';
import Logo from '../assets/ontarion-logo.png';
import weather from '../assets/weather.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-white">
      <div className="top-header py-5">
        <div className="site flex items-center justify-between">
          <div className="top-menu prose-ul:flex prose-ul:flex-wrap prose-ul:gap-14 flex-1 prose-a:font-semibold prose-a:text-base prose-a:text-black prose-a:uppercase prose-a:transition-all prose-a:duration-300 hover:prose-a:text-Orange">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Get Involved</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Subscribe</a>
              </li>
            </ul>
          </div>
          <div className="logo w-[272px] prose-a:flex">
            <a href="/">
              <img className="w-full max-w-[272px]" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="weather flex-1 flex justify-end">
            <div className="wrap flex w-auto gap-[13px] items-center text-base font-semibold leading-none text-black">
              <img src={weather} alt="weather" />
              <div className="content grid gap-2">
                <p>13 Jan, 2024</p>
                <p> 16° Hazy Sunshine </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header bg-Orange pt-8">
        <div className="site flex items-start justify-between">
          <div className="main-menu prose-ul:flex prose-ul:flex-wrap prose-ul:gap-14 flex-1 prose-a:font-semibold prose-a:text-base prose-a:text-white prose-a:uppercase prose-a:inline-block prose-a:pb-8 prose-a:transition-all prose-a:duration-300 hover:prose-a:text-Black">
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Editorial</a>
              </li>
              <li>
                <a href="#">Arts & Culture </a>
              </li>
              <li>
                <a href="#">Sports & Health </a>
              </li>
              <li>
                <a href="#">Opinion</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
            </ul>
          </div>
          <div className="search-area cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-auto"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
