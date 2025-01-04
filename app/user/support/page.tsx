import React from "react";
import { IoChatbubbleEllipsesOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

const faqs = [
  {
    question: "How can I reset my password?",
    answer: "Go to the Forgot Password page, enter your email, and follow the instructions sent to your email.",
  },
  {
    question: "How do I make a deposit?",
    answer: "Navigate to the Deposit page, enter the amount, and follow the on-screen instructions.",
  },
  {
    question: "Who do I contact for account issues?",
    answer: "You can use the live chat or email us at support@example.com.",
  },
];

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen text-pry py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Support</h1>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-medium mb-2">Contact Us</h2>
        <div className="grid grid-cols-1 gap-4">
          <button className="flex items-center p-4 rounded-lg shadow-md bg-sec text-pry/90 hover:bg-sec/90 transition">
            <IoChatbubbleEllipsesOutline className="text-2xl mr-4" />
            <span>Live Chat</span>
          </button>
          <button className="flex items-center p-4 rounded-lg shadow-md bg-sec text-pry/90 hover:bg-sec/90 transition">
            <IoCallOutline className="text-2xl mr-4" />
            <span>Call Us</span>
          </button>
          <button className="flex items-center p-4 rounded-lg shadow-md bg-sec text-pry/90 hover:bg-sec/90 transition">
            <IoMailOutline className="text-2xl mr-4" />
            <span>Email Us</span>
          </button>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium mb-2">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md bg-sec text-pry/90"
          >
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-sm mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-pry/70">
        <p>Need more help? Contact us, and we’ll get back to you promptly!</p>
      </div>
    </div>
  );
};

export default SupportPage;
