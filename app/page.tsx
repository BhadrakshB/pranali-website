"use client";
import Button from "../components/Button";
import ImageOverlay from "./components/ImageOverlay";
import TwinklingStars from "./components/TwinklingStars";

const Story1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 py-12 px-4 relative overflow-hidden">
      <TwinklingStars />
      <div className="container mx-auto max-w-4xl flex flex-col items-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300">
          The Beginning
        </h1>

        <p className="text-lg md:text-xl text-amber-100/90 mb-12 text-center max-w-2xl leading-relaxed">
          Looking back, it's funny how the smallest moments turn into the most
          beautiful memories. What started as a simple classroom annoyance
          slowly turned into laughter, friendship, and eventually, a bond that
          feels like home.
        </p>

        <div className="w-full mb-12 grid grid-cols-2 gap-4 md:gap-6">
          <ImageOverlay
            src="/photos/1.jpeg"
            alt="Memory 1"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_0s_both]"
          />
          <ImageOverlay
            src="/photos/2.jpeg"
            alt="Memory 2"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_0s_both]"
          />
          <ImageOverlay
            src="/photos/3.jpeg"
            alt="Memory 3"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_1.5s_both]"
          />
          <ImageOverlay
            src="/photos/4.jpeg"
            alt="Memory 4"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_1.5s_both]"
          />
          <ImageOverlay
            src="/photos/5.jpeg"
            alt="Memory 5"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_3s_both]"
          />
          <ImageOverlay
            src="/photos/6.jpeg"
            alt="Memory 6"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_3s_both]"
          />
          <ImageOverlay
            src="/photos/7.jpeg"
            alt="Memory 7"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_4.5s_both]"
          />
        </div>

        <Button href="/story-1">Continue the Journey →</Button>
      </div>
    </div>
  );
};

export default Story1;
