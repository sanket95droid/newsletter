import NewsletterForm from "@/components/newsletterForm";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="relative h-screen max-w-2xl mx-auto p-2">
        <div className="relative top-[140px] z-10">
          <h1 className=" select-none cursor-default text-stroke animate-title bg-white/75 whitespace-nowrap text-transparent bg-clip-text duration-300 text-lg md:text-5xl sm:text-4xl min-[412px]:text-3xl text-center font-sans font-bold">
            Join the waitlist for my
          </h1>
          <span className="select-none animate-fade-in-3 bg-white text-transparent bg-clip-text duration-300 bg-gradient-to-r from-[#AE48FF] via-[#6344F5] to-[#18CCFC] text-lg md:text-5xl sm:text-4xl min-[412px]:text-3xl flex flex-col items-center font-sans font-bold">
            Newsletter
          </span>
          <div className="h-8"></div>
          {/* NewsletterForm */}
          <NewsletterForm />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
