
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Tôi muốn vay mua nhà cần có sổ đỏ hiện đang, nhưng vẫn có đủ điều kiện vay không?",
      answer: "Câu trả lời sẽ xuất hiện khi bạn nhấn vào câu hỏi.",
    },
    {
      question: "Tôi có phải trả trước phí nào để vay, sau khi vay xong mới trả phí được hay không?",
      answer: "Câu trả lời sẽ xuất hiện khi bạn nhấn vào câu hỏi.",
    },
    {
      question: "Lãi suất thực vay là bao nhiêu phần trăm?",
      answer: "Câu trả lời sẽ xuất hiện khi bạn nhấn vào câu hỏi.",
    },
    {
      question: "Tôi muốn vay để kể từ ngày, vùng nào có thể được hổ trợ?",
      answer: "Câu trả lời sẽ xuất hiện khi bạn nhấn vào câu hỏi.",
    },
    {
      question: "Tôi muốn vay mua nhà chờ có sổ đỏ có được không?",
      answer: "Câu trả lời sẽ xuất hiện khi bạn nhấn vào câu hỏi.",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-xl font-bold mb-6">Câu hỏi thường gặp</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
