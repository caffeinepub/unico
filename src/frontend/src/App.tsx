import { useEffect } from 'react';
import { Globe, Package, Truck, Shield, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header - Logo Only */}
      <header id="hero" className="relative bg-navy text-white overflow-hidden">
        {/* World overlay background */}
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: 'url(/assets/generated/1000035742.jpeg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Logo centered */}
        <div className="relative z-10 flex items-center justify-center py-12 px-5">
          <img 
            src="/assets/generated/unico-head-logo.dim_512x512.png" 
            alt="UNICO Logo"
            className="h-32 w-32 md:h-40 md:w-40 object-contain"
          />
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-16 px-5 max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">About UNICO</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-base leading-relaxed mb-4">
              UNICO is a premier international import-export company with a proven track record of delivering excellence in global trade. We bridge continents and cultures, connecting businesses with high-quality products from around the world.
            </p>
            <p className="text-base leading-relaxed">
              Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for businesses across multiple industries and regions.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-navy mb-1">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">Rigorous quality control at every stage of the supply chain</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-navy mb-1">Global Network</h3>
                <p className="text-sm text-muted-foreground">Established partnerships across six continents</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-navy mb-1">Compliance Driven</h3>
                <p className="text-sm text-muted-foreground">Full adherence to international trade regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-5 max-w-[1100px] mx-auto bg-muted/30">
        <h2 className="text-3xl font-bold text-navy mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-8 h-8 text-gold" />
                <CardTitle className="text-navy">Global Sourcing</CardTitle>
              </div>
              <CardDescription>
                Access to premium suppliers worldwide with verified quality standards and competitive pricing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We identify and partner with the best manufacturers and suppliers globally, ensuring you receive products that meet your exact specifications and quality requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Truck className="w-8 h-8 text-gold" />
                <CardTitle className="text-navy">Freight Forwarding</CardTitle>
              </div>
              <CardDescription>
                Seamless logistics solutions with real-time tracking and timely delivery guarantees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our comprehensive freight forwarding services cover air, sea, and land transportation, with customs clearance support and door-to-door delivery options.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-gold" />
                <CardTitle className="text-navy">Quality Control</CardTitle>
              </div>
              <CardDescription>
                Rigorous inspection and certification processes to ensure product excellence.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our quality assurance team conducts thorough inspections at every stage, from factory audits to pre-shipment verification, ensuring compliance with international standards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Package className="w-8 h-8 text-gold" />
                <CardTitle className="text-navy">Custom Solutions</CardTitle>
              </div>
              <CardDescription>
                Tailored import-export strategies designed for your specific business needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We work closely with you to develop customized trade solutions, from product development and packaging to documentation and regulatory compliance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-5 max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-8">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border bg-white">
            <CardHeader>
              <CardTitle className="text-navy">Handicrafts</CardTitle>
              <CardDescription>
                Authentic artisanal products from skilled craftspeople worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Our handicraft collection includes traditional and contemporary pieces, from home décor to unique gift items, each telling a story of cultural heritage and craftsmanship.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Home décor and accessories</li>
                <li>• Traditional art pieces</li>
                <li>• Handmade textiles and pottery</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-white">
            <CardHeader>
              <CardTitle className="text-navy">Garments & Textiles</CardTitle>
              <CardDescription>
                High-quality apparel and fabrics for retail and wholesale markets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                From fashion-forward clothing to durable workwear, our garment range meets diverse market demands with superior quality and competitive pricing.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Ready-to-wear fashion</li>
                <li>• Custom apparel manufacturing</li>
                <li>• Premium fabrics and textiles</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-white">
            <CardHeader>
              <CardTitle className="text-navy">Furniture</CardTitle>
              <CardDescription>
                Contemporary and classic furniture for residential and commercial spaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Our furniture portfolio spans modern designs to timeless classics, crafted with attention to detail and built to last.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Residential furniture collections</li>
                <li>• Commercial and office furniture</li>
                <li>• Custom design and manufacturing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-white">
            <CardHeader>
              <CardTitle className="text-navy">Ready-to-Eat Foods</CardTitle>
              <CardDescription>
                Premium packaged foods meeting international safety standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Our food products combine authentic flavors with modern packaging, ensuring freshness and compliance with global food safety regulations.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• International cuisine specialties</li>
                <li>• Certified organic options</li>
                <li>• Custom packaging solutions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Banner Section */}
      <section id="banner" className="relative py-20 px-5 text-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/assets/generated/1000035742.jpeg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global Excellence & Connected Craft
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Integrated import–export solutions powered by world-class logistics, quality control, and a trusted network of partners across all major continents.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-5 max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-base leading-relaxed mb-6">
              Ready to start your global trade journey? Get in touch with our team to discuss your import-export needs and discover how UNICO can help your business thrive in international markets.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy mb-1">Email</h3>
                  <a href="mailto:info@unicoglobal.com" className="text-sm text-muted-foreground hover:text-gold">
                    info@unicoglobal.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-gold">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy mb-1">Global Headquarters</h3>
                  <p className="text-sm text-muted-foreground">
                    International Trade Center<br />
                    Global Commerce District
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="border-border bg-white">
            <CardHeader>
              <CardTitle className="text-navy">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <Button type="submit" className="w-full bg-gold hover:bg-gold-hover text-navy font-bold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8 px-5">
        <div className="max-w-[1100px] mx-auto text-center space-y-3">
          <p className="text-sm">
            © {new Date().getFullYear()} UNICO Global Trade & Excellence. All rights reserved.
          </p>
          <p className="text-sm text-white/80">
            This application runs on the Internet Computer with a Motoko backend and a React-based frontend.
          </p>
          <p className="text-sm">
            Built with ❤️ using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
