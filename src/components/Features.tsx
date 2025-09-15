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
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Features That Set Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Event X combines cutting-edge technology with user-centric design to deliver 
            an event platform that exceeds expectations at every level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-glow transition-smooth group"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-bounce`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;