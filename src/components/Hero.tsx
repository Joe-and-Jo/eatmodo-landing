import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import logo from 'figma:asset/239854eab240c3df2aa12f405fae089ec5585eb7.png';

export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="px-5 pt-6 pb-8 sm:pt-8 sm:pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <img src={logo} alt="eatmodo logo" className="h-18 sm:h-21" />
          <h1 className="text-[#2e2e2e] text-lg sm:text-xl">eatmodo</h1>
        </div>

        {/* Main Hero Content - Centered */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="block mx-auto w-fit bg-gradient-to-r from-[#f1ece6] to-[#faf7f3] px-5 py-2 rounded-full border border-[#e3ded8] mb-6 text-center">
            <p className="text-[#6f6f6f]">Coming soon in 2026</p>
          </div>

          <h2 className="text-[#2e2e2e] mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight text-center">
            Stuck thinking "makan apa ya?"<br/>
            <span className="bg-gradient-to-r from-[#e8723d] to-[#ff8c4d] bg-clip-text text-transparent">
              We got you.
            </span>
          </h2>
          
          <p className="text-[#6f6f6f] text-lg sm:text-xl mb-8 leading-relaxed text-center">
            An AI-powered food assistant that helps you decide where and what to eat — based on your mood, time, and preferences, not ads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <button
              onClick={scrollToWaitlist}
              className="bg-[#2e2e2e] text-white px-8 py-4 rounded-full hover:bg-[#4a4a4a] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Join Waitlist
            </button>
          </div>

          {/* Value Props - Centered */}
          <div className="flex justify-center gap-8 sm:gap-12 pt-6">
            <div className="text-center">
              <p className="text-xl sm:text-2xl bg-gradient-to-r from-[#e8723d] to-[#ff8c4d] bg-clip-text text-transparent mb-1">1000+</p>
              <p className="text-[#6f6f6f] text-sm sm:text-base">Restaurants</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl bg-gradient-to-r from-[#e8723d] to-[#ff8c4d] bg-clip-text text-transparent mb-1">Conversational</p>
              <p className="text-[#6f6f6f] text-sm sm:text-base">AI-powered</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl bg-gradient-to-r from-[#e8723d] to-[#ff8c4d] bg-clip-text text-transparent mb-1">Local</p>
              <p className="text-[#6f6f6f] text-sm sm:text-base">Discovery</p>
            </div>
          </div>
        </div>

        {/* Three Photo Gallery */}
        {/* ... remove this code ... */}
      </div>
    </section>
  );
}