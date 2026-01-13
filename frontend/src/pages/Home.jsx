import React from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';

// Import new components you'd need to create for a full landing page
import FeaturedProducts from '../components/FeaturedProducts'; 
import TrendingNow from '../components/TrendingNow';
import CacheConsent from '../components/CacheConsent';

const Home = () => {


  return (
    <div className="min-h-screen pt-0 pb-16 md:pb-0 mt-0 bg-white">
      
      {/* 1. Hero Section - Split Layout */}
      <section className="relative w-full flex flex-col lg:flex-row bg-white">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12 lg:pt-16 pb-8 lg:pb-12 bg-[#1a4d5c]">
          {/* Flash Sale Badge */}
          <div className="mb-4">
            <span className="text-white text-sm md:text-base">Flash Sale up to </span>
            <span className="text-green-500 text-lg md:text-xl font-bold">15% OFF</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Shop <span className="text-yellow-400">Confidently</span>, Save More, Smile Always with you
          </h1>
          
          {/* Subtext */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-xl leading-relaxed">
            Find joy in every click shop your favorite products with ease, trust, and amazing deals.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/category/tshirts"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 w-fit"
          >
            Shop Now →
          </Link>
        </div>
        
        {/* Right Side - Video */}
        <div className="w-full lg:w-1/2 relative overflow-hidden flex items-stretch">
          <div className="relative w-full overflow-hidden" style={{ height: '100%' }}>
            <video 
              src="https://res.cloudinary.com/dvkxgrcbv/video/upload/v1768285703/Size_Chart_New_Arrival_Polo_shirt_Facebook_Post_-_Copy_-_Copy_shf0dq.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: 'top center', minHeight: '100%' }}
            />
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
      
      {/* 2. Feature Blocks */}
      <section className="hidden md:block py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Free Shipping */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Free Shipping Worldwide</h3>
                <p className="text-sm text-gray-600">On orders above ₹999</p>
              </div>
            </div>
            
            {/* Secured Payment */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Secured Online Payment</h3>
                <p className="text-sm text-gray-600">100% secure transactions</p>
              </div>
            </div>
            
            {/* Money Back Guarantee */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Money Back Guarantee</h3>
                <p className="text-sm text-gray-600">30 days return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Explore Our Collections - Circular Categories */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-10">
            Explore Our Collections
          </h2>
          
          {/* Mobile: Horizontal Scrollable, Desktop: Wrapped */}
          <div className="md:flex md:flex-wrap md:justify-center overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            <div className="flex md:flex-wrap md:justify-center items-start gap-6 lg:gap-8 min-w-max md:min-w-0">
              {[
                { name: 'MEN', path: '/category/tshirts', image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270201/2bc21bba-d836-46f0-81a0-6e045d2b07fd.png' },
                { name: 'WOMEN', path: '/category/tshirts', image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270065/f41cb7e3-f91a-4dc1-8738-35f610929e62.png' },
                { name: 'BOYS', path: '/category/tshirts', image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270378/ce7c75f8-2069-4b99-be54-f0fbefda46f3.png' },
                { name: 'GIRLS', path: '/category/tshirts', image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270630/e84cc747-7a2e-4a65-ad85-0750fc16b74c.png' },
                { name: 'SISHU', path: '/category/tshirts', image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270714/557c7404-59a5-46d4-84a9-5fa505f2e7dc.png' },
                { name: 'REGIONAL', path: '/category/tshirts', image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270303/8ebb88f6-a40e-48a5-a1f3-6b98f254c666.png' },
                { name: 'BANARASI', path: '/category/tshirts', image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765461889/43753e06bc6de0fcff2745b62424bace_jzwtyc.jpg' },
                { name: 'DESIGNER SAREES', path: '/category/tshirts', image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765356722/c8ebeacb5152e0d91ea0158bc3d94f8b_uaalsc.jpg' }
              ].map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="flex flex-col items-center group shrink-0"
                >
                  {/* Circular Image Container */}
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white shadow-md mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/112x112?text=' + category.name;
                      }}
                    />
                  </div>
                  
                  {/* Label */}
                  <span className="text-xs md:text-sm font-medium text-gray-800 uppercase tracking-wide text-center whitespace-nowrap">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4. Best Deals of the Week */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Best Deals of the Week</h2>
            <p className="text-gray-600">Don't miss out on these amazing offers</p>
          </div>
          <FeaturedProducts category="" layout="grid" /> 
        </section>

        {/* Banner Section 1 */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="w-full">
            <Link to="/category/tshirts" className="block w-full">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768285707/%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7_%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2_%E0%B9%81%E0%B8%9F%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99_%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B8%95%E0%B8%B2%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1_%E0%B9%82%E0%B8%9E%E0%B8%AA%E0%B8%95%E0%B9%8C_eqp0oh.svg"
                alt="Fashion Sale Banner"
                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </Link>
          </div>
        </section>

        {/* Banner Section 2 - T-Shirt Fashion */}
        <section className="py-8 lg:py-12 bg-gray-50">
          <div className="w-full">
            <Link to="/category/tshirts" className="block w-full">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768285704/Black_and_Green_Modern_T-Shirt_Fashion_Instagram_Post_-_Copy_thxb2c.svg"
                alt="T-Shirt Fashion Banner"
                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </Link>
          </div>
        </section>

        {/* 5. Electronics Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Electronics</h2>
            <p className="text-gray-600">Latest tech gadgets and accessories</p>
          </div>
          <FeaturedProducts category="watches" layout="grid" /> 
          <div className="flex justify-center mt-10">
            <Link
              to="/category/watches"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-md font-semibold text-sm md:text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              Shop Now →
            </Link>
          </div>
        </section>

        {/* Banner Section 3 - Big Sale */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="w-full">
            <Link to="/" className="block w-full">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768285706/Brown_And_White_Modern_Big_Sale_Instagram_Post_1_-_Copy_wwdkaz.png"
                alt="Big Sale Banner"
                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </Link>
          </div>
        </section>

        {/* 6. Fashion Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Fashion</h2>
            <p className="text-gray-600">Trendy styles for every occasion</p>
          </div>
          <FeaturedProducts category="tshirts" layout="grid" /> 
          <div className="flex justify-center mt-10">
            <Link
              to="/category/tshirts"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-md font-semibold text-sm md:text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              Shop Now →
            </Link>
          </div>
        </section>

        {/* Banner Section 4 - T-Shirt Sale */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="w-full">
            <Link to="/category/tshirts" className="block w-full">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768285710/Black_and_White_Grunge_T-Shirt_Sale_Facebook_Ad_-_Copy_cozkpx.png"
                alt="T-Shirt Sale Banner"
                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </Link>
          </div>
        </section>


        {/* You could add more sections here like Testimonials, Instagram Feed, or Brand Story */}
        
      </main>

      {/* Trending Now Section */}
      <TrendingNow />

      {/* 5. Mobile Bottom Navigation - Kept at the bottom for mobile UX */}
      <MobileBottomNav />

      {/* Cache Consent Banner - Shows only once */}
      <CacheConsent />
    </div>
  );
};

export default Home;   