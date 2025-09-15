import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-primary-glow animate-pulse" />
            <span className="text-primary-glow font-semibold text-lg tracking-wide">EVENT X</span>
            <Sparkles className="w-8 h-8 text-primary-glow animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Event Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The next-generation platform that transforms how organizers, participants, and sponsors 
            connect through AI-powered matching, immersive VR experiences, and intelligent analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-card-muted/20">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card-muted/90 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth">
              <Users className="w-12 h-12 text-primary-glow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">For Organizers</h3>
              <p className="text-muted-foreground">Powerful tools for seamless event management with AI-driven insights</p>
            </div>
            
            <div className="bg-card-muted/90 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth">
              <Zap className="w-12 h-12 text-primary-glow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">For Participants</h3>
              <p className="text-muted-foreground">Intelligent matching and immersive experiences tailored to your interests</p>
            </div>
            
            <div className="bg-card-muted/90 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth">
              <Sparkles className="w-12 h-12 text-primary-glow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">For Sponsors</h3>
              <p className="text-muted-foreground">Data-driven sponsorship opportunities with maximum ROI and engagement</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;