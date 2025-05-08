
import React from 'react';

interface LoanFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const LoanFeature: React.FC<LoanFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
        <span>{icon}</span>
      </div>
      <h3 className="font-bold text-base mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const LoanFeatures: React.FC = () => {
  const features = [
    {
      icon: "1",
      title: "Lãi suất từ 5.5%",
      description: "Dễ tiếp cận, lãi ưu đãi",
    },
    {
      icon: "2",
      title: "Trả góc 0.1%/tháng",
      description: "Trên số tiền vay",
    },
    {
      icon: "3",
      title: "Miễn phí trả nợ trước hạn",
      description: "Sau 3 năm đã giải ngân",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-xl font-bold text-center mb-8">Gói vay bất động sản siêu ưu đãi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <LoanFeature 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default LoanFeatures;
