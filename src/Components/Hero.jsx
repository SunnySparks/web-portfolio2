const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center pt-12 pb-0">
        {/* Image on the left (on large screens, at the top on mobile) */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Hero Image"
            className="w-full h-auto"
          />
        </div>

        {/* Text and CTA on the right (below the image on mobile) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left p-6 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Our Website
          </h1>
          <p className="text-gray-600 mt-4">
            This is a hero section with a beautiful image on the left and some
            text on the right. Below the text, there’s a call to action button.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
