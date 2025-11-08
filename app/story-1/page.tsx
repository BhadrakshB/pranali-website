"use client";
import Button from "../../components/Button";
import ImageOverlay from "../components/ImageOverlay";

const Story2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">
          The Adventure
        </h1>

        <p className="text-lg md:text-xl text-rose-900/80 mb-12 text-center max-w-2xl leading-relaxed">
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
          <ImageOverlay
            src="/photos/14.jpeg"
            alt="Memory 14"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_4.5s_both]"
          />
        </div>

        <Button href="/story-2">Explore Further →</Button>
      </div>
    </div>
  );
};

export default Story2;
