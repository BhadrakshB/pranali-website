"use client";
import Button from "../../components/Button";
import ImageOverlay from "../components/ImageOverlay";
import FloatingHearts from "../components/FloatingHearts";

const Story4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900 py-12 px-4 relative overflow-hidden">
      <FloatingHearts />
      <div className="container mx-auto max-w-4xl flex flex-col items-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
          The Return
        </h1>

        <p className="text-lg md:text-xl text-amber-100/90 mb-12 text-center max-w-2xl leading-relaxed">
          Now, as you turn 21, I just want to tell you how much I love you and
          how deeply I value what we share. I promise I'll never do anything
          that makes you sad. The trust, loyalty, and excitement we have built
          together — it's rare, and I'll always protect it.
          <br />
          <br />
          I love your business mindset, your strength, your way of standing up
          for people you care about, and your dedication to every task you take
          up. Keep learning, keep growing, and keep shining — because I'll
          always be there beside you, cheering you on.
          <br />
          <br />
          And the best part? You being a Shiv Bhakt and me being a Vishnu Bhakt
          — it feels like our bond mirrors theirs: one calm, one chaotic, yet
          perfectly balanced.
          <br />
          <br />
          <span className="text-2xl font-semibold text-amber-300">
            Happy 21st Birthday, Pranali ❤️😘
          </span>
          <br />
          May all your dreams come true, and may your smile never fade.
        </p>

        <div className="w-full mb-12 grid grid-cols-2 gap-4 md:gap-6">
          <ImageOverlay
            src="/photos/22.jpeg"
            alt="Memory 22"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_0s_both]"
          />
          <ImageOverlay
            src="/photos/23.jpeg"
            alt="Memory 23"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_0s_both]"
          />
          <ImageOverlay
            src="/photos/24.jpeg"
            alt="Memory 24"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_1.5s_both]"
          />
          <ImageOverlay
            src="/photos/25.jpeg"
            alt="Memory 25"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_1.5s_both]"
          />
          <ImageOverlay
            src="/photos/26.jpeg"
            alt="Memory 26"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_3s_both]"
          />
          <ImageOverlay
            src="/photos/27.jpeg"
            alt="Memory 27"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_3s_both]"
          />
          <div className="animate-[slideInLeft_0.8s_ease-out_4.5s_both]">
            <video
              controls
              className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <source src="/photos/28.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <Button href="/">Start Again ↻</Button>
      </div>
    </div>
  );
};

export default Story4;
