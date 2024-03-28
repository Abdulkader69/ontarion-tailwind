import React from 'react';
import image from '../assets/woman.jpeg';
import calender from '../assets/calender.png';

export const FeaturedStories = () => {
  return (
    <section className="featured-stories pt-60px pb-100px overflow-hidden relative">
      <div className="site">
        <div className="heading relative flex items-center pb-11">
          <h2 className="mr-14 w-auto text-55px font-heading font-semibold text-Black leading-none uppercase">
            Featured Stories
          </h2>
          <div className="line flex-1 w-full h-[1px] bg-black/50"></div>
        </div>
        <div className="wrapper relative flex flex-wrap [&>*:nth-child(2)]:w-1/2 [&>*:nth-child(2)]:pl-30px [&>*:nth-child(2)]:h-[400px] [&>*:nth-child(3)]:w-[25%] [&>*:nth-child(4)]:w-[25%] [&>*:nth-child(3)]:h-[360px] [&>*:nth-child(4)]:h-[360px] [&>*:nth-child(3)]:pl-30px [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:bottom-0 [&>*:nth-child(3)]:right-[25%] [&>*:nth-child(4)]:pl-30px [&>*:nth-child(4)]:absolute [&>*:nth-child(4)]:right-0 [&>*:nth-child(4)]:bottom-0">
          <div className="item relative first:w-1/2 first:h-[790px] group">
            <div className="inner h-full w-full relative flex">
              <div className="overlay1 absolute w-full h-full bottom-0 left-0 z-10"></div>
              <a
                className="absolute h-full w-full top-0 left-0 z-10"
                href="#"
              ></a>
              <img className="w-full h-full object-cover" src={image} alt="" />
              <div className="contents-wrap absolute bottom-0 left-0 w-full z-50 group-first:pb-60px pb-30px group-first:px-10 px-7 text-white text-base">
                <div className="top-meta flex items-center gap-6 pb-6 tracking-wide uppercase">
                  <div className="date flex items-center gap-10px">
                    <img src={calender} alt="" />
                    13 Nov , 2023
                  </div>
                  <div className="author flex items-center gap-10px">
                    <div className="dot w-10px h-10px rounded-full bg-white"></div>
                    Author Name
                  </div>
                </div>
                <h2 className="title font-heading font-semibold text-30px leading-133%">
                  Batch Of U Of G Barley Seeds Successfully Survive A Intense
                  Sports Game
                </h2>
              </div>
            </div>
          </div>
          <div className="item relative first:w-1/2 first:h-[790px] group">
            <div className="inner h-full w-full relative flex">
              <div className="overlay1 absolute w-full h-full bottom-0 left-0 z-10"></div>
              <a
                className="absolute h-full w-full top-0 left-0 z-10"
                href="#"
              ></a>
              <img className="w-full h-full object-cover" src={image} alt="" />
              <div className="contents-wrap absolute bottom-0 left-0 w-full z-50 group-first:pb-60px pb-30px group-first:px-10 px-7 text-white text-base">
                <div className="top-meta flex items-center gap-6 pb-6 tracking-wide uppercase">
                  <div className="date flex items-center gap-10px">
                    <img src={calender} alt="" />
                    13 Nov , 2023
                  </div>
                  <div className="author flex items-center gap-10px">
                    <div className="dot w-10px h-10px rounded-full bg-white"></div>
                    Author Name
                  </div>
                </div>
                <h2 className="title font-heading font-semibold text-30px leading-133%">
                  Batch Of U Of G Barley Seeds Successfully Survive A Intense
                  Sports Game
                </h2>
              </div>
            </div>
          </div>
          <div className="item relative first:w-1/2 first:h-[790px] group">
            <div className="inner h-full w-full relative flex">
              <div className="overlay1 absolute w-full h-full bottom-0 left-0 z-10"></div>
              <a className="absolute h-full w-full top-0 left-0" href="#"></a>
              <img className="w-full h-full object-cover" src={image} alt="" />
              <div className="contents-wrap absolute bottom-0 left-0 w-full z-50 group-first:pb-60px pb-30px group-first:px-10 px-7 text-white text-base">
                <div className="top-meta flex items-center gap-6 pb-6 tracking-wide uppercase">
                  <div className="date flex items-center gap-10px">
                    <img src={calender} alt="" />
                    13 Nov , 2023
                  </div>
                  <div className="author flex items-center gap-10px">
                    <div className="dot w-10px h-10px rounded-full bg-white"></div>
                    Author Name
                  </div>
                </div>
                <h2 className="title font-heading font-semibold text-30px leading-133%">
                  Batch Of U Of G Barley Seeds Successfully Survive A Intense
                  Sports Game
                </h2>
              </div>
            </div>
          </div>
          <div className="item relative first:w-1/2 first:h-[790px] group">
            <div className="inner h-full w-full relative flex">
              <div className="overlay1 absolute w-full h-full bottom-0 left-0 z-10"></div>
              <a className="absolute h-full w-full top-0 left-0" href="#"></a>
              <img className="w-full h-full object-cover" src={image} alt="" />
              <div className="contents-wrap absolute bottom-0 left-0 w-full z-50 group-first:pb-60px pb-30px group-first:px-10 px-7 text-white text-base">
                <div className="top-meta flex items-center gap-6 pb-6 tracking-wide uppercase">
                  <div className="date flex items-center gap-10px">
                    <img src={calender} alt="" />
                    13 Nov , 2023
                  </div>
                  <div className="author flex items-center gap-10px">
                    <div className="dot w-10px h-10px rounded-full bg-white"></div>
                    Author Name
                  </div>
                </div>
                <h2 className="title font-heading font-semibold text-30px leading-133%">
                  Batch Of U Of G Barley Seeds Successfully Survive A Intense
                  Sports Game
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
