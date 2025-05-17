import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sophia Lee",
    title: "Fashion Enthusiast",
    quote:
      "Amazing quality and fast delivery! The customer service went above and beyond to help me choose the right size.",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    title: "Gadget Lover",
    quote:
      "I’m blown away by the variety of products and the easy checkout process. Definitely my go-to store now!",
    rating: 4,
  },
  {
    name: "Emma Davis",
    title: "Home Decor Expert",
    quote:
      "The products arrived exactly as shown, and the packaging was eco-friendly. Love supporting this brand!",
    rating: 5,
  },
];

// Gradient star icon
const Star = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "url(#grad)" : "none"}
    stroke="url(#grad)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const renderStars = (count) => (
  <div className="flex justify-center space-x-1 my-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} filled={i < count} />
    ))}
  </div>
);

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => resetTimeout();
  }, [currentIndex]);

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Loved by Customers Worldwide
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Hear from our happy customers who’ve experienced the difference.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-white/60 dark:bg-gray-800/70 shadow-xl backdrop-blur-md max-w-3xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map(({ name, title, quote, rating }, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-full px-8 py-14 text-center"
              aria-hidden={currentIndex !== i}
            >
              <blockquote className="text-gray-800 dark:text-gray-200 italic text-lg md:text-xl max-w-prose mx-auto leading-relaxed">
                “{quote}”
              </blockquote>
              {renderStars(rating)}
              <p className="text-xl font-semibold text-indigo-800 dark:text-white mt-2">
                {name}
              </p>
              <p className="text-sm text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
                {title}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <nav className="flex justify-center mt-8 space-x-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-4 h-4 rounded-full transition-transform duration-300 ${
              idx === currentIndex
                ? "bg-indigo-600 scale-125 shadow-md"
                : "bg-indigo-300 hover:bg-indigo-400"
            }`}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </nav>
    </section>
  );
};

export default TestimonialCarousel;
