"use client";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${8 + Math.random() * 4}s`,
    size: `${20 + Math.random() * 30}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-400/70"
          style={{
            left: heart.left,
            bottom: "-50px",
            fontSize: heart.size,
            animation: `floatHeart ${heart.duration} ease-in-out infinite ${heart.delay}`,
            filter: "drop-shadow(0 0 8px rgba(251, 113, 133, 0.6))",
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
