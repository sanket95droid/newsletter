import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="relative h-screen top-[140px] max-w-2xl mx-auto p-2">
        <h1 className="duration-1000 cursor-default text-stroke animate-title  bg-clip-text relative z-10 text-lg md:text-5xl sm:text-4xl min-[412px]:text-3xl text-white/75 text-center font-sans font-bold">
          Join the waitlist for my <span className="animate-fade-in-3 bg-clip-text bg-white text-transparent duration-1000 bg-gradient-to-r from-[#AE48FF] to-[#6344F5]">Newsletter</span>
        </h1>
        <div className="h-4"></div>
        <input
          type="text"
          placeholder="Email address to subscribe"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
