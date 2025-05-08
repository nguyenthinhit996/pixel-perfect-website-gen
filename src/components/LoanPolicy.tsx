
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const LoanPolicy: React.FC = () => {
  return (
    <div className="py-12 bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Chính sách vay ưu đãi</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold">Số tiền cho vay</TableCell>
            <TableCell>Từ 1 tỷ đồng, đến 85% giá trị bất động sản bảo</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Thời gian vay</TableCell>
            <TableCell>Tối đa 25 năm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Lãi suất ưu đãi</TableCell>
            <TableCell>
              <div className="space-y-1">
                <div>Cố định 6 tháng: 5.80%</div>
                <div>Cố định 12 tháng: 6.80%</div>
                <div>Cố định 24 tháng: 7.80%</div>
                <div>Sau đó thả nổi: LSCB + Biên độ 3.9%</div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Phương thức trả nợ</TableCell>
            <TableCell>
              <div className="space-y-2">
                <div>Trả góc hàng tháng: Trả ngay từ tháng đầu tiên với lãi suất:</div>
                <div>• Trả 6 đến 10 năm: Trả góc chỉ từng 0.2% x số tiền vay mỗi tháng</div>
                <div>• Từ năm 11 đến 15 năm: Trả góc chỉ từng 0.3% x số tiền vay mỗi tháng</div>
                <div>• Từ năm 16 trở đi: Trả góc chỉ đều hàng tháng số nợ còn lại</div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Trả góc trước hạn</TableCell>
            <TableCell>Miễn phí trả góc trước hạn sau 3 năm đã giải ngân</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Điều kiện điều lệ sản</TableCell>
            <TableCell>Bất động sản đô thị, giấy tờ pháp lý đầy đủ</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Phí đưa giá trị tái sản</TableCell>
            <TableCell>Miễn phí định giá tài sản bảo đảm cho vay đã qua sử dụng nằm trong khoảng cách 15km từ chi nhánh VIB</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default LoanPolicy;
