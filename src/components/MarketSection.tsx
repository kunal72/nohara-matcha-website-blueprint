
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ChartBar } from 'lucide-react';

const MarketSection = () => {
  // Market growth data for the chart
  const marketData = [
    { year: '2021', value: 3.5 },
    { year: '2023', value: 4.2 },
    { year: '2025', value: 4.8 },
    { year: '2027', value: 5.5 }
  ];

  // Chart configuration
  const chartConfig = {
    data: {
      label: "Market Size (Billion USD)",
      theme: {
        light: "#1a472a",
        dark: "#2a6340",
      }
    }
  };

  return (
    <section id="market" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">📈 Why Now is the Time for Matcha in India</span>
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <p className="text-xl md:text-2xl font-serif text-matcha-dark mb-6 leading-relaxed">
              Matcha isn't just a trend — it's a global wellness movement.
            </p>
            <p className="mb-6 leading-relaxed">
              With a CAGR of 8.7%, the global matcha market is expected to reach $5.5B by 2027. 
              In India, health-conscious consumers are embracing premium teas across urban centers 
              — starting with cities like Lucknow.
            </p>
            <p className="mb-8 leading-relaxed font-medium">
              Your café, wellness studio, or restaurant can be at the forefront of this 
              revolution with Nohara Matcha.
            </p>
            
            <div className="flex items-center gap-2 p-3 bg-matcha/5 rounded-md border border-matcha/10 mb-4">
              <ChartBar size={20} className="text-matcha" />
              <p className="text-sm font-medium text-matcha">Global Matcha Market Growth</p>
            </div>
            
            <div className="h-64 bg-white p-4 rounded-lg border border-matcha/10 shadow-sm">
              <ChartContainer config={chartConfig} className="h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketData} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" tickLine={false} axisLine={false} />
                    <YAxis
                      tickFormatter={(value) => `$${value}B`}
                      tickLine={false}
                      axisLine={false}
                      tickCount={5}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="var(--color-data)" 
                      radius={[4, 4, 0, 0]} 
                      maxBarSize={60}
                    />
                    <ChartTooltip
                      cursor={{ fill: "var(--muted)" }}
                      content={(props) => (
                        <ChartTooltipContent
                          {...props}
                          formatter={(value) => [`$${value}B`, "Market Size"]}
                        />
                      )}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-matcha-cream/50 rounded-lg p-8 shadow-sm border border-matcha/10">
              {/* Market Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-matcha-gold/20 shadow-sm transform hover:translate-y-[-5px] transition-transform duration-300">
                  <p className="text-4xl font-bold text-matcha mb-2">8.7%</p>
                  <p className="text-sm text-matcha-dark/70">CAGR Growth Rate</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-matcha-gold/20 shadow-sm transform hover:translate-y-[-5px] transition-transform duration-300">
                  <p className="text-4xl font-bold text-matcha mb-2">$5.5B</p>
                  <p className="text-sm text-matcha-dark/70">Market Size by 2027</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-matcha/10 shadow-sm transform hover:translate-y-[-5px] transition-transform duration-300">
                  <p className="text-xl font-medium text-matcha mb-2">137x</p>
                  <p className="text-sm text-matcha-dark/70">More Antioxidants than Green Tea</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-matcha/10 shadow-sm transform hover:translate-y-[-5px] transition-transform duration-300">
                  <p className="text-xl font-medium text-matcha mb-2">3-6 hrs</p>
                  <p className="text-sm text-matcha-dark/70">Sustained Energy Without Jitters</p>
                </div>
              </div>
              
              {/* Market Trends */}
              <div className="bg-white p-6 rounded-lg border border-matcha/10 shadow-sm">
                <h4 className="text-lg font-medium text-matcha mb-4">Top Matcha Market Trends</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm p-2 bg-matcha/5 rounded-md">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>Focus on premium, ceremonial-grade offerings</span>
                  </li>
                  <li className="flex items-center text-sm p-2 bg-matcha/5 rounded-md">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>Growing café and hospitality integration</span>
                  </li>
                  <li className="flex items-center text-sm p-2 bg-matcha/5 rounded-md">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>Rising consumer interest in Japanese wellness</span>
                  </li>
                  <li className="flex items-center text-sm p-2 bg-matcha/5 rounded-md">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>Matcha-infused menu innovations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
