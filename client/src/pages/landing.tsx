import { AnimatePresence, motion } from "framer-motion";
import { 
  ArrowRight, Wind, Droplets, Fan, Leaf, ShieldCheck, Zap, 
  BarChart3, Globe2, ChevronLeft, ChevronRight, 
  Activity, Gauge, Layers, Settings2, Box, Scissors 
} from "lucide-react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import heroImage from "@assets/stock_images/modern_glass_office__fd5de25f.jpg";
import airMonitorImage from "@assets/AQI_Sensor_1768988933631.png";
import inductAQIImage from "@assets/Induct_AQI_1768990185498.png";
import ecFanImage from "@assets/ECFAN2_1768994071339.png";

import indoorAQIHero from "@assets/Gemini_Generated_Image_ut0xdqut0xdqut0x_1768996140673.png";
import inductAQIHero from "@assets/Gemini_Generated_Image_5i5k195i5k195i5k_1768995579375.png";

const slides = [
  {
    image: ecFanImage,
    title: "Precision Environmental Control",
    description: "From advanced Air Quality Monitors to high-efficiency AHUs and Water Dosage systems, GIES provides the critical infrastructure for sustainable industrial operations.",
    tag: "Engineered for Clean Environments"
  },
  {
    image: inductAQIHero,
    title: "Industrial In-Duct Monitoring",
    description: "Enterprise-grade sensing integrated directly into your ventilation systems. Robust, accurate, and built for continuous industrial deployment.",
    tag: "HVAC Integrated Solutions"
  },
  {
    image: indoorAQIHero,
    title: "Intelligence for Indoor Spaces",
    description: "Our enterprise-grade Indoor Air Quality monitors provide real-time data and automated control for healthier, more productive workspaces.",
    tag: "Advanced Sensing Technology"
  },
  {
    image: heroImage,
    title: "Global Industrial Excellence",
    description: "Green India Ecotech Services (GIES) is a global leader in sustainable infrastructure and industrial solutions. Building a resilient future for generations to come.",
    tag: "Green India Ecotech Services"
  }
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="container relative z-10 px-6 text-white pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium tracking-wide uppercase">{slides[currentSlide].tag}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 font-display">
                {slides[currentSlide].title.split(' ').slice(0, -2).join(' ')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  {slides[currentSlide].title.split(' ').slice(-2).join(' ')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl leading-relaxed h-[6rem]">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-0 text-md px-8 h-12 rounded-full">
                  Product Catalog
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white text-md px-8 h-12 rounded-full"
                  onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Partner with Us
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-10 right-10 z-20 flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-10 left-10 z-20 flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-1 transition-all duration-500 rounded-full",
                i === currentSlide ? "w-12 bg-primary" : "w-6 bg-white/20"
              )}
            />
          ))}
        </div>
      </section>

      <section id="advantages" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Key Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-display">Advantages</h2>
            </div>
            <p className="text-slate-600 max-w-sm text-lg leading-relaxed">
              Engineered to deliver superior performance and sustainable value for industrial partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "High efficiency factor",
                desc: "Optimized power-to-performance ratio reducing operational overhead.",
                color: "text-red-500",
                bg: "bg-red-50"
              },
              {
                icon: ShieldCheck,
                title: "Low energy consumption",
                desc: "Cutting-edge technology designed to minimize carbon footprint and costs.",
                color: "text-blue-500",
                bg: "bg-blue-50"
              },
              {
                icon: Gauge,
                title: "Integrated monitoring",
                desc: "Seamless data acquisition and real-time system performance tracking.",
                color: "text-amber-500",
                bg: "bg-amber-50"
              },
              {
                icon: Settings2,
                title: "Easy installation",
                desc: "Simplified mounting and connectivity for rapid industrial deployment.",
                color: "text-orange-500",
                bg: "bg-orange-50"
              },
              {
                icon: Layers,
                title: "Expanded functionality",
                desc: "Modular design supporting a wide range of custom industrial requirements.",
                color: "text-emerald-500",
                bg: "bg-emerald-50"
              },
              {
                icon: Scissors,
                title: "Compact construction",
                desc: "Space-saving engineering without compromising on power or durability.",
                color: "text-slate-500",
                bg: "bg-slate-50"
              }
            ].map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", adv.bg, adv.color)}>
                  <adv.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{adv.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Industrial Precision Solutions</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              World-class engineering for clean air, water management, and energy efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wind,
                title: "Air Quality Monitors",
                desc: "Real-time sensing for VOCs, CO2, and particulate matter with industrial-grade accuracy.",
                tag: "Bestseller"
              },
              {
                icon: Fan,
                title: "EC Fans & Ventilation",
                desc: "High-efficiency electronically commutated fans for AHUs and server rooms.",
                tag: "High Efficiency"
              },
              {
                icon: Zap,
                title: "AHUs & HVAC",
                desc: "Custom Air Handling Units designed for hospitals, labs, and industrial plants.",
                tag: "Custom Built"
              },
              {
                icon: Droplets,
                title: "Water Dosage",
                desc: "Automated precision chemical dosing and filtration for water treatment systems.",
                tag: "Smart Control"
              }
            ].map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="group hover:border-primary/50 transition-all duration-300 h-full border-slate-100">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <product.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-100 px-2 py-0.5 rounded">
                        {product.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {product.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Spotlight - Indoor */}
      <section id="indoor-aqi" className="py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Advanced Indoor Air Monitoring <br />
                For Healthier Workspaces
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Our latest series of Indoor Air Quality Monitors integrates seamless IoT connectivity with high-precision sensors to ensure your interior environment meets the highest safety standards. 
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time PM 1.0, 2.5, 10.0 monitoring",
                  "Precise CO2 & TVOC sensing",
                  "Temperature & Humidity tracking",
                  "Integrated industrial IoT connectivity"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 h-12">
                Indoor Series Specs
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <img 
                src={airMonitorImage} 
                alt="GIES Indoor Air Quality Monitor" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Product Spotlight - In-Duct */}
      <section id="induct-aqi" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <img 
                src={inductAQIImage} 
                alt="GIES In-Duct AQI Monitor" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                In-Duct Environmental Sensing <br />
                For Industrial Ventilation
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                The GIES In-Duct AQI Monitor is engineered for heavy-duty industrial HVAC systems, providing real-time data from within your ventilation network.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Industrial-grade duct mounting",
                  "Resilient housing for high-airflow",
                  "Seamless AHU controller integration",
                  "High-precision long-range telemetry"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Zap className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 h-12">
                In-Duct Series Specs
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Product Spotlight - EC Fans */}
      <section id="ec-fans" className="py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                High-Efficiency EC Fans <br />
                Precision Air Solutions
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Our Electronically Commutated (EC) fans are designed for global innovation and local excellence, delivering superior energy efficiency and precise airflow control.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Advanced EC motor technology",
                  "Significant energy savings",
                  "Integrated speed control",
                  "Silent and vibration-free operation"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Fan className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 h-12">
                EC Fan Series Specs
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <img 
                src={ecFanImage} 
                alt="GIES EC Fan" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-primary rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Strategic B2B Partnership</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
            Green India Ecotech Services (GIES) provides exclusive industrial solutions and wholesale procurement for enterprise partners globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 border-0 rounded-full px-8 text-lg font-semibold h-14"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner with Us
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full px-8 text-lg font-semibold h-14">
              Wholesale Catalog
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
