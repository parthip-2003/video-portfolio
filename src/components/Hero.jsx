import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/Man_talking_about_web_applications_202606062044.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });

    // Auto-play muted on mobile (browsers allow muted autoplay)
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{
          filter: 'contrast(1.12) saturate(1.2) brightness(1.03)',
          willChange: 'transform',
          transform: 'translateZ(0) scale(1.001)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark gradient overlay — bottom only, for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-5 pb-10 md:px-12 md:pb-16 max-w-7xl mx-auto w-full">

        {/* Name tag */}
        <div data-aos="fade-up" className="mb-3">
          <span className="inline-block bg-[#ff2a2a] text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full">
            Parthip Sasidharan
          </span>
        </div>

        {/* Main Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-3 leading-tight tracking-tight"
        >
          Hi, I'm a<br />
          <span className="text-[#ff2a2a]">Full Stack</span> Developer
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white/80 text-sm md:text-lg font-medium mb-6 max-w-md leading-relaxed"
        >
          I build fast, scalable and modern web applications using React, Node.js and Tailwind CSS.
        </p>

        {/* Buttons Row */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-row flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 text-sm rounded-full bg-white text-black font-bold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm rounded-full border border-white/50 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>

          {/* Play/Pause Button */}
          <button
            onClick={toggleVideo}
            className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-full bg-black/40 border border-white/30 text-white font-bold hover:bg-[#ff2a2a] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
            {isPlaying ? 'Pause' : 'Play Reel'}
          </button>
        </div>
      </div>

      {/* Scroll Indicator (desktop only) */}
      <div className="hidden md:block absolute bottom-8 right-12 z-20">
        <div className="animate-bounce flex flex-col items-center gap-1">
          <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-white/40" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

    </section>
  );
};

export default Hero;
