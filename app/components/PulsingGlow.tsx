"use client";

export default function PulsingGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-amber-400/60 via-orange-400/30 to-transparent rounded-full animate-[pulseGlow_3s_ease-in-out_infinite]" />
      <div className="absolute top-1/4 right-1/4 w-[900px] h-[900px] bg-gradient-radial from-rose-400/50 via-pink-400/25 to-transparent rounded-full animate-[pulseGlow_4s_ease-in-out_infinite_0.5s]" />
      <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-orange-400/50 via-amber-400/25 to-transparent rounded-full animate-[pulseGlow_4.5s_ease-in-out_infinite_1s]" />
      <div className="absolute top-3/4 right-1/3 w-[700px] h-[700px] bg-gradient-radial from-rose-300/45 via-orange-300/20 to-transparent rounded-full animate-[pulseGlow_5s_ease-in-out_infinite_1.5s]" />
      <div className="absolute top-1/3 left-2/3 w-[600px] h-[600px] bg-gradient-radial from-amber-300/45 via-yellow-300/20 to-transparent rounded-full animate-[pulseGlow_5.5s_ease-in-out_infinite_2s]" />
    </div>
  );
}
