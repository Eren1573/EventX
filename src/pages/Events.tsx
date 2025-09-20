import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Music, GraduationCap, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'music' | 'college'>('all');

  const musicEvents = [
    {
      id: 1,
      name: "Summer Music Festival",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=400&fit=crop",
      members: 1250,
      date: "July 15, 2024",
      location: "Central Park",
      category: "music",
      description: "Experience the hottest tracks from top DJs and artists in an outdoor paradise."
    },
    {
      id: 2,
      name: "Jazz Night Downtown",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
      members: 780,
      date: "July 20, 2024",
      location: "Blue Note Cafe",
      category: "music",
      description: "Intimate jazz performances featuring local and international musicians."
    },
    {
      id: 3,
      name: "Electronic Dance Explosion",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop",
      members: 2100,
      date: "August 5, 2024",
      location: "Neon Arena",
      category: "music",
      description: "High-energy electronic music festival with immersive light shows and VR experiences."
    },
    {
      id: 4,
      name: "Acoustic Sunset Sessions",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=400&fit=crop",
      members: 450,
      date: "July 28, 2024",
      location: "Rooftop Garden",
      category: "music",
      description: "Relaxed acoustic performances as the sun sets over the city skyline."
    }
  ];

  const collegeEvents = [
    {
      id: 5,
      name: "Tech Innovation Expo",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      members: 890,
      date: "July 25, 2024",
      location: "University Tech Hub",
      category: "college",
      description: "Showcase of cutting-edge student projects and startup innovations."
    },
    {
      id: 6,
      name: "Annual Science Fair",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      members: 650,
      date: "August 10, 2024",
      location: "Science Building",
      category: "college",
      description: "Student research presentations and interactive science demonstrations."
    },
    {
      id: 7,
      name: "Campus Cultural Festival",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop",
      members: 1420,
      date: "August 15, 2024",
      location: "Main Quad",
      category: "college",
      description: "Celebrating diversity with food, music, and performances from around the world."
    },
    {
      id: 8,
      name: "Career Development Workshop",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      members: 320,
      date: "July 30, 2024",
      location: "Career Center",
      category: "college",
      description: "Professional development sessions with industry leaders and networking opportunities."
    }
  ];

  const allEvents = [...musicEvents, ...collegeEvents];

  const filteredEvents = selectedCategory === 'all' 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Events', icon: Users },
    { id: 'music', name: 'Music Events', icon: Music },
    { id: 'college', name: 'College Events', icon: GraduationCap }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            variant="outline" 
            className="mb-6 border-white/30 text-white hover:bg-white/10"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Discover <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing Events</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of participants in unforgettable experiences. From music festivals to academic conferences.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="lg"
              className={`
                ${selectedCategory === category.id 
                  ? "bg-white text-primary hover:bg-white/90" 
                  : "border-white/30 text-white hover:bg-white/10"
                }
              `}
              onClick={() => setSelectedCategory(category.id as 'all' | 'music' | 'college')}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group relative">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-glow via-accent to-primary-glow rounded-xl blur opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              
              {/* Main card */}
              <Card className="relative bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/40 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 overflow-hidden">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-white/20 text-white border-white/30"
                    >
                      {event.category === 'music' ? 'Music' : 'College'}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <CardHeader className="text-white">
                  <CardTitle className="text-xl group-hover:text-primary-glow transition-colors duration-300">
                    {event.name}
                  </CardTitle>
                  <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {event.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-white/80">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-glow" />
                      <span className="text-sm font-medium">{event.members.toLocaleString()} members</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary-glow" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-glow" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary-glow to-accent hover:from-primary-glow/80 hover:to-accent/80 text-white border-0"
                    size="lg"
                  >
                    Join Event
                  </Button>
                </CardContent>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">Don't see what you're looking for?</h3>
          <p className="text-white/80 mb-8">Create your own event and bring your community together!</p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Create New Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;