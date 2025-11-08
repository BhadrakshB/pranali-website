"use client";
import Button from "../../components/Button";
import ImageOverlay from "../components/ImageOverlay";
import ParticleDrift from "../components/ParticleDrift";

const Story3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 py-12 px-4 relative overflow-hidden">
      <ParticleDrift />
      <div className="container mx-auto max-w-4xl flex flex-col items-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-300">
          The Discovery
        </h1>

        <p className="text-lg md:text-xl text-orange-100/90 mb-12 text-center max-w-2xl leading-relaxed">
          Our friendship grew stronger with every silly argument, every
          late-night talk, every movie night, and every class bunk that ended
          with good food or crazy games at Tales Over Tables. We had so many
          memories — from shopping trips and temple visits to rope climbing and
          nail-painting lessons. Even in class, we found joy in the chaos —
          throwing water, hiding phones, and playing chain-cut or out-out like
          little kids.
          <br />
          <br />
          Somewhere between all the laughter, we moved from just being friends
          to best friends… and now, to a even bigger step. Looking back, I
          sometimes wonder if it would've been better if we had met earlier. But
          maybe it's good we didn't — because the people and moments in between
          taught us patience, understanding, and how to truly value each other.
          Even the tough times brought us closer, especially when we laughed and
          ranted about others together.
        </p>

        <div className="w-full mb-12 grid grid-cols-2 gap-4 md:gap-6">
          <ImageOverlay
            src="/photos/15.jpeg"
            alt="Memory 15"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_0s_both]"
          />
          <ImageOverlay
            src="/photos/16.jpeg"
            alt="Memory 16"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_0s_both]"
          />
          <ImageOverlay
            src="/photos/17.jpeg"
            alt="Memory 17"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_1.5s_both]"
          />
          <ImageOverlay
            src="/photos/18.jpeg"
            alt="Memory 18"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_1.5s_both]"
          />
          <ImageOverlay
            src="/photos/19.jpeg"
            alt="Memory 19"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_3s_both]"
          />
          <ImageOverlay
            src="/photos/20.jpeg"
            alt="Memory 20"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInRight_0.8s_ease-out_3s_both]"
          />
          <ImageOverlay
            src="/photos/21.jpeg"
            alt="Memory 21"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            animationClass="animate-[slideInLeft_0.8s_ease-out_4.5s_both]"
          />
        </div>

        <Button href="/story-3">See What's Next →</Button>
      </div>
    </div>
  );
};

export default Story3;
