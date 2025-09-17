import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import eventXLogo from "@/assets/event-x-logo.png";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={eventXLogo} alt="Event X Logo" className="w-10 h-10" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EVENT X
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`transition-smooth ${isActive('/about') ? 'text-primary-foreground' : 'text-card-foreground hover:text-primary-foreground'}`}
            >
              About
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-smooth ${isActive('/pricing') ? 'text-primary-foreground' : 'text-card-foreground hover:text-primary-foreground'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`transition-smooth ${isActive('/contact') ? 'text-primary-foreground' : 'text-card-foreground hover:text-primary-foreground'}`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">
              Sign In
            </Button>
            <Button variant="hero">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-card-foreground hover:text-primary-foreground transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/about" 
                className={`block transition-smooth ${isActive('/about') ? 'text-primary-foreground' : 'text-card-foreground hover:text-primary-foreground'}`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/pricing" 
                className={`block transition-smooth ${isActive('/pricing') ? 'text-primary-foreground' : 'text-card-foreground hover:text-primary-foreground'}`}
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className={`block transition-smooth ${isActive('/contact') ? 'text-primary-foreground' : 'text-card-foreground hover:text-primary-foreground'}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;