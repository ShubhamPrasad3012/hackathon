import React from 'react';

const Loader = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black overflow-hidden transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        src="/assets/loader.mp4"
        autoPlay
        muted
        playsInline
        className="w-screen h-screen object-cover"
      />
    </div>
  );
};

export default Loader;
