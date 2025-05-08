
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(200000000);
  const [monthlyPayment, setMonthlyPayment] = useState(200000000);
  const [interestRate, setInterestRate] = useState('5.5');
  
  return (
    <div className="py-12">
      <h2 className="text-xl font-bold mb-6">Công cụ tính lãi vay</h2>
      
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">Vay mua nhà phố</Button>
          <span className="ml-4 text-gray-500">Vay mua chung cư</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Label className="text-sm mb-1">Giá trị BĐS đang cần mua (VNĐ)</Label>
            <Input 
              type="text" 
              value={loanAmount.toLocaleString()} 
              onChange={(e) => setLoanAmount(Number(e.target.value.replace(/[^0-9]/g, '')))} 
              className="mb-1"
            />
            <Slider 
              defaultValue={[200000000]} 
              max={3000000000} 
              min={100000000}
              step={10000000}
              onValueChange={(value) => setLoanAmount(value[0])}
              className="my-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>100.000.000 VNĐ</span>
              <span>3.000.000.000 VNĐ</span>
            </div>
            
            <div className="mt-6">
              <Label className="text-sm mb-1">Khoản vay cần vay (VNĐ)</Label>
              <Input 
                type="text" 
                value={Math.round(loanAmount * 0.5).toLocaleString()} 
                className="mb-1"
                readOnly
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>50% giá trị BĐS</span>
              </div>
            </div>
          </div>
          
          <div>
            <Label className="text-sm mb-1">Trả hàng tháng (VNĐ)</Label>
            <Input 
              type="text" 
              value={monthlyPayment.toLocaleString()} 
              onChange={(e) => setMonthlyPayment(Number(e.target.value.replace(/[^0-9]/g, '')))}
              className="mb-1"
            />
            <Slider 
              defaultValue={[200000000]} 
              max={10000000000} 
              min={100000000}
              step={100000000}
              onValueChange={(value) => setMonthlyPayment(value[0])}
              className="my-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>10.000.000 VNĐ</span>
              <span>30.000.000 VNĐ</span>
            </div>
            
            <div className="mt-6">
              <Label className="text-sm mb-1">Kỳ hạn vay (năm)</Label>
              <Input 
                type="number" 
                defaultValue={15} 
                className="mb-1"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>15</span>
                <span>30 năm</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Label className="text-sm font-medium mb-3">Lãi suất ưu đãi</Label>
          <RadioGroup defaultValue="5.5" className="grid grid-cols-1 md:grid-cols-3 gap-4" onValueChange={setInterestRate}>
            <div className="flex items-center space-x-2 border rounded-md p-2">
              <RadioGroupItem value="5.5" id="r1" />
              <Label htmlFor="r1">Cố định 6 tháng - 5.5%</Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-2">
              <RadioGroupItem value="6.5" id="r2" />
              <Label htmlFor="r2">Cố định 12 tháng - 6.5%</Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-2">
              <RadioGroupItem value="7.5" id="r3" />
              <Label htmlFor="r3">Cố định 24 tháng - 7.5%</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-2">Xem kết quả</Button>
        </div>
        
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>Lưu ý: Công cụ tính toán trên đây chỉ mang tính chất tham khảo và hiển thị kết quả ước tính</p>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
