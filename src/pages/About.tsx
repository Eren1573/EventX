import Navigation from "@/components/Navigation";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We're constantly pushing the boundaries of what's possible in event technology, integrating AI and immersive experiences."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our platform brings together organizers, participants, and sponsors in meaningful ways that create lasting connections."
    },
    {
      icon: Lightbulb,
      title: "Smart Solutions",
      description: "Every feature is designed with intelligence, using data and AI to make events more efficient and engaging."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering the highest quality platform that exceeds expectations at every touchpoint."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Event X</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're revolutionizing the event industry by creating a platform that goes beyond traditional 
              event management. Our mission is to elevate every interaction, connection, and experience.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Event X was born from the frustration of using outdated event platforms that didn't understand 
                the modern needs of organizers, participants, and sponsors. We saw an industry ready for transformation.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our founders, with backgrounds in AI, event management, and user experience design, came together 
                to create something revolutionary. We're not just building another event platform – we're crafting 
                the future of how people connect and collaborate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Event X combines cutting-edge technology with human-centered design to deliver experiences 
                that were previously impossible.
              </p>
            </div>
            <div className="bg-gradient-card rounded-xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Events Powered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Participants Connected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we build the future of events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card hover:shadow-glow transition-smooth">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary p-4 mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionaries behind Event X's revolutionary platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "CEO & Co-Founder", background: "Former VP of Product at EventBrite" },
              { name: "Marcus Rodriguez", role: "CTO & Co-Founder", background: "Ex-Google AI Research Scientist" },
              { name: "Aisha Patel", role: "Head of Design", background: "Former Principal Designer at Figma" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-primary mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;