"use client";
import { CheckCircle2Icon, CircleX, MailPlus } from "lucide-react";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { getPlaneKeyframes } from "@/lib/getPlaneKeyframes";
import { getTrailsKeyframes } from "@/lib/getTrailsKeyframes";

const NewsletterForm = () => {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [successMessage, setSuccessMessage] =
    useState<MembersSuccessResponse>();
  const [errorMessage, setErrorMessage] = useState("");

  const { to, fromTo, set } = gsap;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!email || !button) {
      return;
    }

    if (!active) {
      setActive(true);

      // to gsap plane animation
      to(button, {
        keyframes: getPlaneKeyframes(set, fromTo, button, setActive, setInput),
      });

      //to gsap trail animation
      to(button, { keyframes: getTrailsKeyframes(button) });
    }

    //POST request to /api/subscribe
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    
    const data = await res.json();

    if (data.error) {
      setErrorMessage("Hey, you are already subscribed!");
      setSuccessMessage(undefined);
      return;
    }

    console.log(data.res)
    setSuccessMessage(data.res);
    setErrorMessage("");
  };

  const dismissMessages = () => {
    setSuccessMessage(undefined);
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col space-y-8 md:w-[400px]">
      <form
        onSubmit={handleSubmit}
        className="my-form mt-10 animate-fade-in-3 backdrop-blur-sm"
      >
        <div className="group flex items-center gap-x-4 py-1 pl-4 pr-1 rounded-[9px] bg-white/0 shadow-outline-gray">
          <MailPlus className="text-white/10 font-light hidden sm:inline group-focus-within:text-white duration-300" />
          <input
            value={input}
            type="email"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter email address"
            required
            className="flex-1 text-white text-sm sm:text-base outline-none placeholder-[#4B4C52] bg-transparent placeholder:transition-colors hover:placeholder-white placeholder:duration-300"
          />
          <button
            ref={buttonRef}
            type="submit"
            disabled={!input}
            className={`${
              active && "active bg-transparent"
            }disabled:!bg-[#17141F] disabled:grayscale-[75%] outline-none disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}
          >
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
      <div className="relative">
        {(successMessage || errorMessage) && (
          <div className="flex items-start space-x-2 bg-[#0A0E12] shadow-outline-gray text-white rounded-[9px] py-4 px-6 animate-fade-bottom absolute">
            <div className="z-10 text-xs sm:text-sm text-[#4b4C52] flex gap-x-2 flex-shrink-0">
              <CheckCircle2Icon />
            </div>
            <div className="text-xs sm:text-sm text-[#4B4C52]">
              {successMessage ? (
                <p>
                  We&apos;ve added{" "}
                  <span className="text-[#ADB0B1]">
                    {successMessage.email_address}
                  </span>{" "}
                  to our waitlist. We&apos;ll let you know when we launch!
                </p>
              ) : (
                <p>
                  You are already added to our waitlist. We&apos;ll let you know
                  when we launch!
                </p>
              )}
            </div>
            <CircleX 
              className="h-5 w-5 cursor-pointer flex-shrink-0 text-red-700"
              onClick={dismissMessages}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
