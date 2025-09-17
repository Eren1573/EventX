import { Brain, Globe, Shield, Smartphone, BarChart3, Workflow } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Intelligent algorithms connect the right participants, sponsors, and opportunities based on interests, goals, and compatibility.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Immersive VR/AR Events",
      description: "Transform virtual events with cutting-edge VR and AR technologies for unparalleled engagement and interaction.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and real-time analytics help organizers optimize events and sponsors measure ROI effectively.",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Workflow,
      title: "Seamless Collaboration",
      description: "Robust tools for team collaboration, project management, and workflow optimization across all stakeholders.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and privacy protection ensuring your data and participants' information stays safe.",
      gradient: "from-red-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Fully responsive platform with dedicated mobile apps ensuring accessibility across all devices and platforms.",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background lighting effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/6 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/6 w-64 h-64 bg-primary-glow rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Features That Set Us Apart
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Event X combines cutting-edge technology with user-centric design to deliver 
            an event platform that exceeds expectations at every level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-glow via-accent to-primary-glow rounded-xl blur opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:duration-200 animate-tilt"></div>
              
              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary-glow/25">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary-glow transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;