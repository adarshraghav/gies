import { Link } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import logoImage from "@assets/generated_images/minimalist_corporate_logo_for_gies_in_green_and_white.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-border py-2 shadow-sm"
            : "bg-transparent py-6 text-white"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-md">
                <img 
                  src={logoImage} 
                  alt="GIES Logo" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className={cn(
                "text-2xl font-bold tracking-tight",
                scrolled ? "text-primary" : "text-white"
              )}>
                GIES
              </span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#advantages"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('advantages')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                "hover:text-primary transition-colors",
                scrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              Advantages
            </a>

            {/* Products Dropdown */}
            <div className="relative group py-2">
              <button
                className={cn(
                  "flex items-center gap-1 hover:text-primary transition-colors cursor-pointer",
                  scrolled ? "text-foreground" : "text-white/90 hover:text-white"
                )}
              >
                Products <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-[60]">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                  {[
                    { name: "Indoor AQI Monitors", id: "indoor-aqi" },
                    { name: "Induct AQI Monitors", id: "induct-aqi" },
                    { name: "EC Fans", id: "ec-fans" }
                  ].map((subItem) => (
                    <a
                      key={subItem.id}
                      href={`#${subItem.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(subItem.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block px-4 py-2.5 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#"
              className={cn(
                "hover:text-primary transition-colors",
                scrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              Downloads
            </a>
            <button 
              onClick={() => {
                const footer = document.getElementById('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                "px-5 py-2 rounded-full font-semibold transition-all",
                scrolled 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src={logoImage} 
                  alt="GIES Logo" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold">GIES</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Green India Ecotech Services - A global leader in sustainable infrastructure and industrial solutions. Building a resilient future for generations to come.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">History</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Global Presence</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Sectors</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Energy & Power</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transportation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <div className="space-y-4 text-sm text-slate-300">
                <a href="mailto:operations@green-india.in" className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                  <span className="p-2 rounded-lg bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </span>
                  operations@green-india.in
                </a>
                <p className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                  <span className="p-2 rounded-lg bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </span>
                  +91 124 4567 890
                </p>
                <p className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                  <span className="p-2 rounded-lg bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin className="w-4 h-4" />
                  </span>
                  Corporate Tower, Gurgaon, Haryana, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2026 Green India Ecotech Services. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
