import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isRunning, setIsRunning] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;
    const whatsappNumber = '918590723437';
    const text =
      `Hello Parthip! 👋\n\n` +
      `*Name:* ${firstName} ${lastName}\n` +
      `*Email:* ${email}\n\n` +
      `*Message:*\n${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Reach Us
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Checkbox */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input
                  type="checkbox"
                  id="permission"
                  required
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and{' '}
                  <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our{' '}
                    <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                  </p>

                  <button
                    type="submit"
                    onMouseEnter={() => setIsRunning(true)}
                    onMouseLeave={() => setIsRunning(false)}
                    className="relative overflow-hidden px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto min-w-[220px]"
                  >
                    {/* Running Person */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '6px',
                        left: isRunning ? 'calc(100% + 10px)' : '-40px',
                        transition: isRunning ? 'left 1.2s cubic-bezier(0.4,0,0.2,1)' : 'left 0s',
                        display: 'flex',
                        alignItems: 'flex-end',
                      }}
                    >
                      <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                        {/* Head */}
                        <circle cx="14" cy="5" r="4" fill="currentColor" opacity="0.9"/>
                        {/* Body */}
                        <line x1="14" y1="9" x2="14" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        {/* Left Arm */}
                        <line x1="14" y1="12" x2="7" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          style={{ transformOrigin:'14px 12px', animation: isRunning ? 'swingArm1 0.4s infinite alternate ease-in-out' : 'none' }}/>
                        {/* Right Arm */}
                        <line x1="14" y1="12" x2="21" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          style={{ transformOrigin:'14px 12px', animation: isRunning ? 'swingArm2 0.4s infinite alternate ease-in-out' : 'none' }}/>
                        {/* Left Leg */}
                        <line x1="14" y1="20" x2="8" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          style={{ transformOrigin:'14px 20px', animation: isRunning ? 'swingLeg1 0.4s infinite alternate ease-in-out' : 'none' }}/>
                        {/* Right Leg */}
                        <line x1="14" y1="20" x2="20" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          style={{ transformOrigin:'14px 20px', animation: isRunning ? 'swingLeg2 0.4s infinite alternate ease-in-out' : 'none' }}/>
                      </svg>
                    </span>

                    {/* Button text */}
                    <span className="relative z-10">Send via WhatsApp</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>

                    {/* Keyframe styles */}
                    <style>{`
                      @keyframes swingLeg1 { from { transform: rotate(-30deg); } to { transform: rotate(30deg); } }
                      @keyframes swingLeg2 { from { transform: rotate(30deg); } to { transform: rotate(-30deg); } }
                      @keyframes swingArm1 { from { transform: rotate(-25deg); } to { transform: rotate(25deg); } }
                      @keyframes swingArm2 { from { transform: rotate(25deg); } to { transform: rotate(-25deg); } }
                    `}</style>
                  </button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
