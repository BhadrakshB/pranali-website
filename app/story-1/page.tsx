"use client";
import Button from "../../components/Button";
import ImageOverlay from "../components/ImageOverlay";
import PulsingGlow from "../components/PulsingGlow";

const Story2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-orange-900 py-12 px-4 relative overflow-hidden">
      <PulsingGlow />
      <div className="container mx-auto max-w-4xl flex flex-col items-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-orange-300">
          The Adventure
        </h1>

        <p className="text-lg md:text-xl text-rose-100/90 mb-12 text-center max-w-2xl leading-relaxed">
          It all started three years ago, in a simple lab class. I was trying to
          focus, minding my own business, when you decided to switch off my
          computer again and again — not letting me type, not letting me do
          anything. At that moment, I genuinely thought you had your brains in
          your knees!
          <br />
          <br />
          But soon I realized that you were just being yourself — fun,
          free-spirited, and comfortable around the people who matched your
          vibe. That was the start of something special. From random teasing to
          endless conversations, from those small mischievous moments to
          becoming friends, we didn't even realize how quickly time passed.
        </p>

        <div className="w-full mb-12 grid grid-cols-2 gap-4 md:gap-6">
          <ImageOverlay
            src="/photos/8.jpeg"
            alt="Memory 8"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_0s_both]"
          />
          <ImageOverlay
            src="/photos/9.jpeg"
            alt="Memory 9"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_0s_both]"
          />
          <ImageOverlay
            src="/photos/10.jpeg"
            alt="Memory 10"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_1.5s_both]"
          />
          <ImageOverlay
            src="/photos/11.jpeg"
            alt="Memory 11"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_1.5s_both]"
          />
          <ImageOverlay
            src="/photos/12.jpeg"
            alt="Memory 12"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_3s_both]"
          />
          <ImageOverlay
            src="/photos/13.jpeg"
            alt="Memory 13"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_3s_both]"
          />
          <div className="col-span-2 flex justify-center">
            <div className="w-1/2 animate-[slideInLeft_0.8s_ease-out_4.5s_both]">
              <ImageOverlay
                src="/photos/14.jpeg"
                alt="Memory 14"
                width={400}
                height={300}
                className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
                animationClass=""
              />
            </div>
          </div>
        </div>

        <Button href="/story-2">Explore Further →</Button>
      </div>
    </div>
  );
};

export default Story2;
