import React from 'react';
import PhotoRoom from '../assets/PhotoRoom.png';
import ctaBG from '../assets/cta-bg.jpg';
export const HomeCTA = () => {
  return (
    <section className="home-cta-section flex relative overflow-hidden">
      <img
        className="w-full h-full object-cover absolute"
        src={ctaBG}
        alt="ctaBG"
      />
      <div className="wrapper w-full flex flex-wrap">
        <div className="w-1/2 flex h-full">
          <img
            className="h-full w-full object-cover object-right-bottom"
            src={PhotoRoom}
            alt="PhotoRoom"
          />
        </div>
        <div className="w-1/2 h-full flex items-center pl-20 pr-5 py-28">
          {/* <div className="inner text-white w-full max-w-[700px]">
            <p className="sub-headline text-[21px] font-semibold leading-none tracking-wider uppercase mb-[18px]">
              Featured Event
            </p>
            <h2 className="headline text-50px font-semibold leading-none uppercase mb-5">
              Womens Football Championship Qualifiers
            </h2>
            <div className="descriptions text-base font-normal leading-175%">
              Ut molestie sapien aliquet odio maximus suscipit. Duis iaculis
              venenatis ex. Donec ullamcorper, lectus eget elementum aliquet,
              erat orci ultricies sem, ac viverra nibh elit a lacus.
              Pellentesque quis rutrum diam.
            </div>
            <div className="time-line text-30px font-semibold leading-none grid gap-6 py-9">
              <p>Friday 14:30 PM</p>
              <p>James Cross Arena</p>
            </div>
            <div className="button-wrap">
              <a
                href="#"
                className="h-55px px-11 inline-flex items-center bg-white text-Black text-base uppercase font-semibold leading-none tracking-wider"
              >
                GET TICKETS
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
