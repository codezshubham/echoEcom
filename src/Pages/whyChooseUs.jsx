import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headset,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Top-Quality Products",
      description:
        "We partner with premium brands and rigorously test every item to ensure outstanding quality.",
      icon: ShoppingBag,
      bg: "bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500",
      iconColor: "text-pink-700",
    },
    {
      title: "Fast & Free Shipping",
      description:
        "Nationwide delivery in record time — and it’s always on us. Because you deserve the best.",
      icon: Truck,
      bg: "bg-gradient-to-br from-cyan-400 via-blue-400 to-teal-500",
      iconColor: "text-cyan-700",
    },
    {
      title: "Secure Payments",
      description:
        "Industry-leading security and encryption ensures your transactions are always safe.",
      icon: ShieldCheck,
      bg: "bg-gradient-to-br from-green-400 via-lime-400 to-emerald-500",
      iconColor: "text-green-700",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our expert team is just a message away — ready to help you anytime, anywhere.",
      icon: Headset,
      bg: "bg-gradient-to-br from-yellow-300 via-orange-400 to-rose-400",
      iconColor: "text-orange-700",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          Experience excellence in every step — from quality products to world-class service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] text-left text-white ${item.bg}`}
            >
              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/20 rounded-full shadow-md">
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-md leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
