"use client";

export default function ParticleDrift() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    bottom: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${10 + Math.random() * 8}s`,
    size: `${10 + Math.random() * 20}px`,
    color: [
      "bg-orange-400/70",
      "bg-amber-400/70",
      "bg-yellow-400/70",
      "bg-rose-400/70",
      "bg-pink-400/70",
    ][Math.floor(Math.random() * 5)],
    blur: ["blur-sm", "blur-md", "blur-lg"][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.color} rounded-full ${particle.blur}`}
          style={{
            left: "-50px",
            bottom: particle.bottom,
            width: particle.size,
            height: particle.size,
            animation: `particleDrift ${particle.duration} linear infinite ${particle.delay}`,
            boxShadow: "0 0 20px rgba(251, 146, 60, 0.5)",
          }}
        />
      ))}
    </div>
  );
}
