
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Trụ sở chính tại Chợ Chu thành</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-sm text-gray-600">Hỗ trợ: 1900 2200</span>
          </div>
          
          <div className="text-sm text-gray-600">
            Sản phẩm thuộc Ngân hàng VIB - Giấy phép NHNN
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          <p>© 2025 VIB International Bank. All Rights Reserved. Privacy Policy and Terms of Service apply.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
