"use client";
import { MailPlus } from "lucide-react";
import React, { useState } from "react";

const NewsletterForm = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col space-y-8 md:w-[400px]">
      <form
        action=""
        className="newsletter-form mt-10 animate-fade-in-3 backdrop-blur-sm"
      >
        <div className="group flex items-center gap-x-4 py-1 pl-4 pr-1 rounded-[9px] bg-white/0 shadow-outline-gray">
          <MailPlus className="text-white/10 font-light" />
          <input
            type="email"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter email address for subscription"
            required
            className=""
          />
          <button>
            <span className="default">Subscribe</span>
            <span className="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Done
            </span>
            <svg className="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className="plane">
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
