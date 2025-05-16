
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Utensils, GalleryHorizontal } from 'lucide-react';

const UsageSection = () => {
  // Different matcha applications with updated high-quality images
  const applications = [
    {
      name: "Matcha Latte",
      description: "Creamy and smooth, perfect for cafés",
      image: "https://res.cloudinary.com/dait24tgm/image/upload/v1747396327/co1mhhswwesmzs8bgdhk.jpg"
    },
    {
      name: "Matcha Ice Cream",
      description: "Refreshing dessert option",
      image: "https://res.cloudinary.com/dait24tgm/image/upload/v1747396327/pwvimvvzqswsip2lihsr.jpg"
    },
    {
      name: "Matcha Energy Shots",
      description: "Quick wellness boost",
      image: "https://res.cloudinary.com/dait24tgm/image/upload/v1747396434/rmstrdw4ddl6f4oegw4e.png"
    },
    {
      name: "Matcha Pastries",
      description: "Bakery and café offerings",
      image: "https://res.cloudinary.com/dait24tgm/image/upload/v1747396327/ub2udsnpcu2l0xowynfs.jpg"
    }
  ];

  return (
    <section id="usage" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">🧾 Usage & Applications</span>
          </h2>
          <p className="text-matcha-dark/80 mt-4">
            Elevate your menu with these trendy matcha applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-matcha/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative w-full h-64 overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={app.image} 
                    alt={app.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-matcha/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-matcha mb-2 flex items-center">
                  {app.name}
                </h3>
                <p className="text-matcha-dark/70">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-matcha/5 p-8 rounded-lg border border-matcha/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-matcha flex items-center justify-center text-white">
                <Utensils size={18} />
              </div>
              <h3 className="text-xl font-serif font-medium text-matcha">Popular Applications</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {["Café Lattes", "Smoothies", "Ice Creams", "Cakes", "Health Shots", "Matcha Cookies"].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white hover:bg-matcha/10 transition-colors p-3 rounded-lg border border-matcha/10 text-center"
                >
                  <span className="text-matcha font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-matcha/10">
              <h4 className="font-medium text-matcha mb-3 flex items-center gap-2">
                <GalleryHorizontal size={18} />
                Perfect for:
              </h4>
              <p className="text-matcha-dark/70 mb-4">
                Beverage menus, fusion desserts, and health-oriented offerings. 
                Our matcha can elevate any menu with its authentic flavor and vibrant color.
              </p>
              <div className="bg-matcha-cream/50 p-4 rounded">
                <p className="text-sm text-matcha-dark/80 italic">
                  "Matcha's versatility allows for endless culinary creativity, while 
                  maintaining its health benefits and unique character."
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-matcha p-8 rounded-lg shadow-sm text-white">
            <h3 className="text-xl font-serif font-medium mb-6">Why Customers Love Matcha</h3>
            
            <div className="space-y-5">
              <div className="border-b border-white/20 pb-4">
                <h4 className="font-medium mb-2">Health Benefits</h4>
                <p className="text-sm text-white/80">Rich in antioxidants, supports metabolism and focus</p>
              </div>
              
              <div className="border-b border-white/20 pb-4">
                <h4 className="font-medium mb-2">Aesthetic Appeal</h4>
                <p className="text-sm text-white/80">Vibrant green color makes for Instagram-worthy creations</p>
              </div>
              
              <div className="border-b border-white/20 pb-4">
                <h4 className="font-medium mb-2">Premium Experience</h4>
                <p className="text-sm text-white/80">Customers willing to pay more for authentic Japanese matcha</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Clean Energy</h4>
                <p className="text-sm text-white/80">3-6 hours of sustained energy without caffeine jitters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
