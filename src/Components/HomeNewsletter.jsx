import React from 'react';
import newslatter from '../assets/newslatter.jpg';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';

export const HomeNewsletter = () => {
  return (
    <section className="newsletter pt-28 pb-24">
      <div className="site bg-[#F5F5F5] py-[37px] pr-10 pl-50px flex items-center">
        <div className="left w-2/5">
          <h3 className="text-55px font-heading font-semibold leading-118% text-Black uppercase text-center pb-6">
            Sign up for our newsletter
          </h3>
          <div className="form">Form</div>
          <div className="social-links flex justify-center items-center gap-5 pt-50px">
            <a href="" className="w-[46px] h-auto flex">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="" className="w-[46px] h-auto flex">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="" className="w-[46px] h-auto flex">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="" className="w-[46px] h-auto flex">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
        <div className="right w-3/5">
          <img src={newslatter} alt="" />
        </div>
      </div>
    </section>
  );
};
