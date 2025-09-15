import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small events and getting started",
      features: [
        "Up to 100 participants",
        "Basic AI matching",
        "Standard analytics",
        "Email support",
        "5 events per month",
        "Basic integrations"
      ],
      highlighted: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing organizations and regular events",
      features: [
        "Up to 1,000 participants",
        "Advanced AI matching",
        "Comprehensive analytics",
        "Priority support",
        "Unlimited events",
        "VR/AR experiences",
        "Custom branding",
        "API access"
      ],
      highlighted: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large-scale events and organizations",
      features: [
        "Unlimited participants",
        "Full AI suite",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "White-label solution",
        "Custom integrations",
        "24/7 phone support",
        "SLA guarantee",
        "Custom features"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  const addOns = [
    {
      name: "Premium Analytics",
      price: "$19/month",
      description: "Advanced reporting and insights"
    },
    {
      name: "Custom Integrations",
      price: "$99/month",
      description: "Connect with your existing tools"
    },
    {
      name: "Extended Support",
      price: "$49/month",
      description: "24/7 priority support"
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
              Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Choose the perfect plan for your event needs. All plans include our core features 
              and a 14-day free trial.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-muted-foreground">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-12 h-6 bg-muted rounded-full cursor-pointer"></div>
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform"></div>
              </div>
              <span className="text-foreground">Annual (Save 20%)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative shadow-card hover:shadow-glow transition-smooth ${
                  plan.highlighted ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.highlighted ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Power-up with Add-ons</h2>
            <p className="text-xl text-muted-foreground">
              Enhance your Event X experience with these optional add-ons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-smooth">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{addon.name}</h3>
                  <p className="text-muted-foreground mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{addon.price}</div>
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pricing FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our pricing and plans.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
              },
              {
                question: "What happens after the free trial?",
                answer: "After your 14-day free trial, you'll be automatically enrolled in the Starter plan unless you choose a different plan or cancel."
              },
              {
                question: "Do you offer annual discounts?",
                answer: "Yes! Annual plans receive a 20% discount compared to monthly billing. The discount is applied automatically when you choose annual billing."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for any plan. Enterprise clients may have custom implementation costs depending on their specific requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of event organizers who trust Event X to power their events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;