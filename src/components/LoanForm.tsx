
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const LoanForm: React.FC = () => {
  const [selectedRadio, setSelectedRadio] = useState('nam');
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">
      <h2 className="text-xl font-bold text-center mb-6">Đăng ký tư vấn</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <Label className="text-sm font-medium mb-1">Thông tin nhu cầu vay</Label>
            <Select>
              <option>Nợ tiêu cần vay</option>
            </Select>
          </div>
          <div className="w-full">
            <Label className="text-sm font-medium mb-1">Mục đích vay</Label>
            <Select>
              <option>Chọn mục đích vay</option>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <Label className="text-sm font-medium mb-1">Kết đồng cho thế chấp</Label>
            <Select>
              <option>Chọn loại thế chấp</option>
            </Select>
          </div>
          <div className="w-full">
            <Label className="text-sm font-medium mb-1">Tổng thu nhập hàng tháng</Label>
            <Select>
              <option>Chọn thu nhập</option>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium mb-1">Thông tin liên lạc</Label>
          <div className="flex items-center space-x-4 mt-2">
            <RadioGroup defaultValue="nam" className="flex space-x-4" onValueChange={setSelectedRadio}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nam" id="nam" />
                <Label htmlFor="nam">Nam</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nu" id="nu" />
                <Label htmlFor="nu">Nữ</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <Label className="text-sm font-medium mb-1">Họ và tên</Label>
            <Input placeholder="Nhập họ tên" />
          </div>
          <div className="w-full">
            <Label className="text-sm font-medium mb-1">Số điện thoại</Label>
            <Input placeholder="Nhập số điện thoại" />
          </div>
        </div>
        
        <div className="w-full">
          <Label className="text-sm font-medium mb-1">Email</Label>
          <Input placeholder="Nhập email" />
        </div>
        
        <div className="w-full">
          <Label className="text-sm font-medium mb-1">Tỉnh/TP (Nơi sống)</Label>
          <Select>
            <option>Chọn tỉnh/thành phố</option>
          </Select>
        </div>

        <div className="text-xs text-gray-500 flex items-start mt-2">
          <div className="flex-shrink-0 mr-1 mt-0.5">
            <span className="inline-block w-3 h-3 bg-vib-blue rounded-sm flex items-center justify-center text-white text-xs">✓</span>
          </div>
          <p>Với việc click vào "Gửi", tôi đã đọc và đồng ý với các điều kiện và điều khoản của VIB</p>
        </div>

        <div className="flex justify-end">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8">Gửi</Button>
        </div>
      </div>
    </div>
  );
};

export default LoanForm;
