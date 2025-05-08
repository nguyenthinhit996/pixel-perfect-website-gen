
import React from 'react';
import Logo from '@/components/Logo';
import LoanForm from '@/components/LoanForm';
import LoanFeatures from '@/components/LoanFeatures';
import LoanPolicy from '@/components/LoanPolicy';
import LoanCalculator from '@/components/LoanCalculator';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div 
        className="bg-vib-blue relative overflow-hidden" 
        style={{
          backgroundImage: `url(https://www.vib.com.vn/wps/wcm/connect/c08f246a-1549-4af1-9e10-c76f2bf684df/Campaign-landing-desktop-mortgage.webp?MOD=AJPERES&CACHEID=ROOTWORKSPACE-c08f246a-1549-4af1-9e10-c76f2bf684df-ppCTKRT)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px'
        }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Vay 1 tỷ trả góc 1 triệu</h1>
              <p className="text-white/90 text-lg mb-8">Khi vay mua bất động sản</p>
            </div>
          </div>
        </div>
        
        {/* Removing the lower positioned LoanForm */}
        <div className="container relative z-10 mx-auto px-4 relative z-20 md:translate-y-1/4 flex justify-center ">
          <LoanForm />
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="container mx-auto px-4 py-24">
        <LoanFeatures />
        
        <div className="my-16">
          <LoanPolicy />
        </div>
        
        <div className="my-16">
          <LoanCalculator />
        </div>
        
        <div className="my-16">
          <FAQ />
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Index;
