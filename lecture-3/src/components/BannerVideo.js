import React, { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';

import video from '../assets/banner-video.mp4';

const font = new FontFaceObserver('BMYEONSUNG');

function BannerVideo() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    font.load(null, 20_00).then(() => {
      setIsFontLoaded(true);
    });
  }, []);

  console.log(isFontLoaded);

  return (
    <div className="BannerVideo w-full h-screen overflow-hidden relative bg-texture">
      <div className="absolute h-screen w-full left-1/2">
        <video
          src={video}
          className="absolute translateX--1/2 h-screen max-w-none min-w-screen -z-1 bg-black min-w-full min-h-screen blur blur-md"
          autoPlay
          loop
          muted
        />
      </div>
      <div
        className="w-full h-full flex justify-center items-center"
        style={{
          transition: 'opacity 0.4s ease-in-out',
          opacity: isFontLoaded ? 1 : 0,
        }}
      >
        <div className="text-white text-center">
          <div className="text-6xl leading-none font-semibold">KEEP</div>
          <div className="text-6xl leading-none font-semibold">CALM</div>
          <div className="text-3xl leading-loose">AND</div>
          <div className="text-6xl leading-none font-semibold">RIDE</div>
          <div className="text-5xl leading-tight font-semibold">LONGBOARD</div>
        </div>
      </div>
    </div>
  );
}

export default BannerVideo;
