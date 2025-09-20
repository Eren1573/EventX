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
            className="mb-8 border-white/50 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-lg"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
            Discover <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Amazing Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
            Join thousands of participants in unforgettable experiences. From music festivals to academic conferences.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="lg"
              className={`
                text-lg px-8 py-4 font-semibold shadow-xl transition-all duration-300 transform hover:scale-105
                ${selectedCategory === category.id 
                  ? "bg-white text-primary hover:bg-white/95 shadow-2xl border-2 border-white" 
                  : "border-2 border-white/50 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm hover:border-white/80"
                }
              `}
              onClick={() => setSelectedCategory(category.id as 'all' | 'music' | 'college')}
            >
              <category.icon className="w-6 h-6 mr-3" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group relative">
              {/* Enhanced glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-80 transition-all duration-700 animate-pulse"></div>
              
               {/* Enhanced main card */}
               <Card className="relative bg-white/15 backdrop-blur-xl border-2 border-white/30 hover:border-white/60 transition-all duration-500 transform group-hover:-translate-y-6 group-hover:scale-110 overflow-hidden shadow-2xl group-hover:shadow-3xl">
                {/* Event Image with enhanced overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-white/90 text-primary border-white/50 font-semibold text-sm px-3 py-1 shadow-lg backdrop-blur-sm"
                    >
                      {event.category === 'music' ? 'Music' : 'College'}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                <CardHeader className="text-white pb-4">
                  <CardTitle className="text-2xl font-bold group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-md">
                    {event.name}
                  </CardTitle>
                  <CardDescription className="text-white/90 group-hover:text-white transition-colors duration-300 text-base leading-relaxed font-medium">
                    {event.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-white/90 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <Users className="w-5 h-5 text-yellow-300" />
                      <span className="font-semibold text-white">{event.members.toLocaleString()} members</span>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <Calendar className="w-5 h-5 text-blue-300" />
                      <span className="font-medium text-white">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <MapPin className="w-5 h-5 text-green-300" />
                      <span className="font-medium text-white">{event.location}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 hover:from-yellow-500 hover:via-orange-500 hover:to-pink-500 text-white border-0 font-bold text-lg py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    Join Event Now
                  </Button>
                </CardContent>

                {/* Enhanced shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20 bg-white/10 backdrop-blur-lg rounded-3xl p-12 border-2 border-white/30">
          <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Don't see what you're looking for?</h3>
          <p className="text-white/90 mb-10 text-xl font-medium">Create your own event and bring your community together!</p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/60 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm text-lg px-10 py-6 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Create New Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;