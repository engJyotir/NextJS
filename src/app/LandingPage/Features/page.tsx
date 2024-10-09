// components/FeaturesSection.js
const features = [
    {
      title: "Real-time Stock Data",
      description: "Get access to live stock data updated every second.",
      icon: "/icons/data.svg",
    },
    {
      title: "Advanced Analytics",
      description: "In-depth stock analysis and tools for informed trading.",
      icon: "/icons/analytics.svg",
    },
    {
      title: "Secure Trading Platform",
      description: "Safe and secure trading with bank-level encryption.",
      icon: "/icons/security.svg",
    },
    {
      title: "Personalized Alerts",
      description: "Receive stock alerts based on your preferences.",
      icon: "/icons/alerts.svg",
    },
  ];
  
  const FeaturesSection = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={feature.icon} alt={feature.title} className="h-16 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  