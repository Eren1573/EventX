import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Events?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the future of event management. Be among the first to experience 
            the next generation of event platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              <Mail className="w-5 h-5" />
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-12 text-white/80">
            <p className="text-sm">
              🚀 Launching Q2 2024 • 🎯 Limited Beta Spots Available • 🔒 Enterprise Ready
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-primary-glow rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default CTA;