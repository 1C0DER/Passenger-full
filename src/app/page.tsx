'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // default to 1 item

  const testimonials = [
    {
      text: "“Super easy and secure! I sent a package to another city, and the process was seamless.”",
      author: "Aisha O.",
    },
    {
      text: "“As a traveler, I get to earn extra cash while helping people. Win-win!”",
      author: "Emeka K.",
    },
    {
      text: "“I love how the escrow payment system ensures trust. No worries about lost packages!”",
      author: "Tunde A.",
    },
        {
      text: "“Super easy and secure! I sent a package to another city, and the process was seamless.”",
      author: "Aisha O.",
    },
    {
      text: "“As a traveler, I get to earn extra cash while helping people. Win-win!”",
      author: "Emeka K.",
    },
    {
      text: "“I love how the escrow payment system ensures trust. No worries about lost packages!”",
      author: "Tunde A.",
    },
  ];

  const faqs = [
    {
      question: "What if my package isn’t delivered?",
      answer: "If there’s an issue, you can open a dispute. We review the case before releasing payment.",
    },
    {
      question: "Is my money safe?",
      answer: "You can trust us maam.",
    },
    {
      question: "Can I track my parcel?",
      answer: "Yes, we have an app we can direct you to.",
    },
    {
      question: "Are travelers verified?",
      answer: "They have to pay for the VIP section.",
    },
    {
      question: "Can travelers reject delivery requests?",
      answer: "Yes, they can if they unlink their email.",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * visibleCount;
    return testimonials.slice(start, start + visibleCount);
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);


  return (
    <main className="min-h-screen font-WorkSans text-[rgba(49, 57, 53, 1)]">
      <section className="bg-hero bg-cover pt-[53px] pl-[56px] pr-[56px] h-minimum-screen:h-[350px] bg-no-repeat bg-center"
      style={{ backgroundImage: `url('/image12.png')` }}>
      <div className="bg-white rounded-[60px] p-4 lg:p-6 px-6 lg:px-10 shadow-md">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="text-[24px] font-semibold">Passenger</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-x-8 text-[18px]">
            <Link href="/admin/signin" className="hover:text-green-500 transition">Services</Link>
            <a href="#" className="hover:text-green-500 transition">News</a>
            <a href="#" className="hover:text-green-500 transition">Career</a>
            <a href="#" className="hover:text-green-500 transition">Contact</a>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button className="rounded-[30px] bg-[rgba(52,209,134,1)] px-6 py-3 text-white text-[14px] hover:bg-green-600 transition">
              Download App
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}/>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-4 lg:hidden flex flex-col gap-3 text-[20px] bg-white rounded-[30px] shadow-lg p-4">
            <Link href="/admin/4" className="px-4 py-2 rounded-lg hover:bg-gray-100 transition text-center">Services</Link>
            <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-100 transition text-center">News</a>
            <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-100 transition text-center">Career</a>
            <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-100 transition text-center">Contact</a>
            <hr className="my-2 border-gray-300" />
            <button className="w-full px-4 py-2 rounded-[30px] bg-[rgba(52,209,134,1)] text-white text-[14px] hover:bg-green-600 transition">
              Download App
            </button>
          </div>
        )}
      </div>

        <div className="md:mt-[50px] lg:mt-[109px] ml-[40px] flex flex-wrap lg:flex-nowrap gap-y-12 gap-x-12 justify-center lg:justify-center items-center">
          <div className="mt-[54px] flex flex-col w-full lg:w-[689px] items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col">
              <h1 className="text-[36px] sm:text-[42px] lg:text-[50px] font-semibold leading-[1.2]">Send Package Smarter, Travel Lighter</h1>
              <p className="text-[18px] sm:text-[20px] font-medium mt-[15px]">Find travelers going your way & send parcels securely</p>
            </div>
            <div className="flex mt-[40px] gap-x-5 flex-wrap justify-center sm:justify-start w-full">
              <Image src="/App store.png" alt="App Store" width={199} height={60} className="w-[45%] sm:w-[40%] lg:w-[199px] h-auto"/>
              <Image src="/Play Store.png" alt="Play Store" width={199} height={60} className="w-[45%] sm:w-[40%] lg:w-[199px] h-auto"/>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-auto mt-10 lg:mt-0">
            <Image src="/image.png" alt="Package illustration" width={700} height={1041.3} className="max-w-full h-auto"/>
          </div>
        </div>
      </section>

      <section className="p-[97px]">
        <div className="items-center">
          <h1 className="text-center text-[40px] font-semibold">Why Passenger?</h1>
          <div className="flex justify-between gap-x-6 flex-wrap lg:flex-nowrap">
          <div className="mt-[50px] w-full lg:w-[30%] flex flex-col items-center text-center lg:items-start lg:text-left [@media(min-width:2000px)]:items-center [@media(min-width:2000px)]:text-center">
              <Image src="/speed.png" alt="Remote image" width={48} height={50} className="object-cover mx-auto lg:mx-0 mb-4"/>
              <h2 className="font-medium text-[28px] mb-[28px] mt-[27px]">Fast and Reliable</h2>
              <p className="font-normal text-[20px]">Travelers are automatically assigned, ensuring quick and reliable service.</p>
            </div>
            <div className="mt-[50px] w-full lg:w-[30%] flex flex-col items-center text-center lg:items-start lg:text-left [@media(min-width:2000px)]:items-center [@media(min-width:2000px)]:text-center">
              <Image src="/security.png" alt="Remote image" width={48} height={50} className="object-cover mx-auto lg:mx-0 mb-4"/>
              <h2 className="font-medium text-[28px] mb-[28px] mt-[27px]">Secure Payments</h2>
              <p className="font-normal text-[20px]">Your money is held safely until you confirm the parcel is delivered.</p>
            </div>
            <div className="mt-[50px] w-full lg:w-[30%] flex flex-col items-center text-center lg:items-start lg:text-left [@media(min-width:2000px)]:items-center [@media(min-width:2000px)]:text-center">
              <Image src="/team.png" alt="Remote image" width={48} height={50} className="object-cover mb-4"/>
              <h2 className="font-medium text-[28px] mt-[27px] mb-[28px]">Trust & Transparency</h2>
              <p className="font-normal text-[20px]">Verified users and ratings for a secure experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-[100px] max-w-[1400px] mx-auto">
        <h1 className="mb-[35px] text-[36px] sm:text-[44px] font-semibold text-center lg:text-left [@media(min-width:2000px)]:text-center">How it Works</h1>
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-x-[40px] items-center lg:items-start">
          <div className="w-full lg:max-w-[900px] flex flex-col gap-y-[47px]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-x-[24px]">
              <div className="mb-4 sm:mb-0">
                <Image src="/person.png" alt="Create an Account" width={50} height={50} className="object-cover mx-auto sm:mx-0"/>
              </div>
              <div>
                <h2 className="font-medium text-[24px] sm:text-[28px] mb-[10px] sm:mb-[15px]">Create an Account</h2>
                <p className="font-normal text-[18px] sm:text-[20px]">Open your account in simple steps or log in to your existing account.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-x-[24px]">
              <div className="mb-4 sm:mb-0">
                <Image src="/cube.png" alt="Post your parcel" width={50} height={50} className="object-cover mx-auto sm:mx-0"/>
              </div>
              <div>
                <h2 className="font-medium text-[24px] sm:text-[28px] mb-[10px] sm:mb-[15px]">Post your parcel</h2>
                <p className="font-normal text-[18px] sm:text-[20px]">Enter package details and get instantly matched with a traveler heading to your destination.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-x-[24px]">
              <div className="mb-4 sm:mb-0">
                <Image src="/lock.png" alt="Make a secure payment" width={50} height={50} className="object-cover mx-auto sm:mx-0"/>
              </div>
              <div>
                <h2 className="font-medium text-[24px] sm:text-[28px] mb-[10px] sm:mb-[15px]">Make a secure payment</h2>
                <p className="font-normal text-[18px] sm:text-[20px]">Pay upfront. Your money stays in escrow until delivery is confirmed.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-x-[24px]">
              <div className="mb-4 sm:mb-0">
                <Image src="/check.png" alt="Connect & Track" width={50} height={50} className="object-cover mx-auto sm:mx-0"/>
              </div>
              <div>
                <h2 className="font-medium text-[24px] sm:text-[28px] mb-[10px] sm:mb-[15px]">Connect & Track</h2>
                <p className="font-normal text-[18px] sm:text-[20px]">Chat with the traveler, get real-time updates, and confirm delivery before payment is released.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto max-w-[538px] flex-shrink-0 flex justify-center mb-10 lg:mb-0 mt-[30px]">
            <Image src="/hand.png" alt="Package illustration" width={538} height={627} className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      <section>
        <div className="pt-[100px] px-[75px] max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center mb-[36px]">
            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold">What Our Users Say</h1>
            <div className="flex gap-x-[28px] h-[60px]">
              <button onClick={handlePrev} aria-label="Previous testimonial">
                <Image src="/rightbut.png" alt="Left arrow" width={60} height={60} className="object-cover" />
              </button>
              <button onClick={handleNext} aria-label="Next testimonial">
                <Image src="/leftbut.png" alt="Right arrow" width={60} height={60} className="object-cover" />
              </button>
            </div>
          </div>

          {/* Testimonials Container */}
          <div className="flex flex-wrap justify-center gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] md:w-[48%] lg:w-[45%] xl:w-[44%] pt-[35px] pb-[35px] px-[16px] rounded-[12px] bg-[rgba(239,245,245,1)]">
                <h3 className="font-normal text-[20px] mb-[24px]">{testimonial.text}</h3>
                <p className="font-normal text-[18px] italic">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section*/}
      <section className="pt-[100px] px-4 sm:px-8 md:px-16 lg:px-[257px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[32px] sm:text-[36px] md:text-[44px] font-semibold text-center mb-[50px]">Frequently Asked Questions</h1>
          <div className="flex flex-col gap-y-[24px]">
            {faqs.map((faq, index) => {
              const isFaqOpen = openFaqIndex === index;
              return (
                <div key={index}
                  className="flex justify-between items-start p-4 sm:p-6 rounded-[12px] bg-[rgba(239,245,245,1)] cursor-pointer"
                  onClick={() => setOpenFaqIndex(isFaqOpen ? null : index)}
                  aria-expanded={isFaqOpen}>
                  <div className="flex flex-col gap-y-[20px] flex-grow pr-4">
                    <h2 className="text-[18px] font-medium">{faq.question}</h2>
                    {isFaqOpen && <p>{faq.answer}</p>}
                  </div>
                  <Image src={isFaqOpen ? "/dropup.png" : "/dropdown.png"} alt={isFaqOpen ? "Collapse icon" : "Expand icon"} width={24} height={24} className="object-cover self-center"/>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12 md:px-[75px] py-[100px]">
        <div
          className="flex flex-col items-center text-center gap-y-12 px-6 sm:px-12 md:px-24 lg:px-[157px] py-[96.5px] rounded-[30px] bg-cover bg-center"
          style={{ backgroundImage: `url('/image12.png')` }}>
          <div className="max-w-3xl">
            <h1 className="text-[32px] sm:text-[36px] md:text-[44px] font-semibold mb-4">Download Our App Now</h1>
            <p className="text-[18px] sm:text-[20px] font-normal">Please feel free to download the app on the App Store or Google Play Store to evaluate our product.</p>
          </div>
          <div className="flex justify-center gap-6 pb-[50px] w-full flex-wrap">
            <Image src="/App store.png" alt="App Store" width={199} height={60} className="w-[60%] sm:w-[40%] md:w-[199px] h-auto" />
            <Image src="/Play Store.png" alt="Play Store" width={199} height={60} className="w-[60%] sm:w-[40%] md:w-[199px] h-auto"/>
          </div>
        </div>
      </section>

      <footer className="pt-[48px] px-6 sm:px-[60px] md:px-[109px] lg:px-[109px]">
        <div className="flex flex-wrap justify-between gap-y-10">
          <div className="flex flex-nowrap gap-[70px] lg:gap-[214.67px]">
            <div className="pt-[38px] min-w-[140px]">
              <p className="font-normal text-[20px] pb-[30px]">Company</p>
              <ul className="text-[18px] flex flex-col gap-y-[15px]">
                <li><a href="">About Us</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Careers</a></li>
              </ul>
            </div>
            <div className="pt-[38px] min-w-[140px]">
              <p className="font-normal text-[20px] pb-[30px]">Product</p>
              <ul className="text-[18px] flex flex-col gap-y-[15px]">
                <li><a href="">Features</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-[38px] min-w-[140px]">
            <p className="font-normal text-[20px] pb-[30px]">Knowledge</p>
            <ul className="text-[18px] flex flex-col gap-y-[15px]">
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">FAQ's</a></li>
            </ul>
          </div>
          <div className="pt-[38px]">
            <ul className="flex gap-x-[24px]">
              <li><a href=""><Image src="/twitter.png" alt="Twitter" width={24} height={24} /></a></li>
              <li><a href=""><Image src="/facebook.png" alt="Facebook" width={24} height={24} /></a></li>
              <li><a href=""><Image src="/instagram.png" alt="Instagram" width={24} height={24} /></a></li>
              <li><a href=""><Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} /></a></li>
            </ul>
          </div>
        </div>
        <p className="mt-[82px] mb-[91px] font-normal text-[20px] text-center md:text-left">
          © 2025 Copyright, All Right Reserved
        </p>
      </footer>
    </main>
  );
}
