"use client";

export default function TwinklingStars() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${1.5 + Math.random() * 2}s`,
    size: `${6 + Math.random() * 12}px`,
    color: [
      "bg-yellow-300",
      "bg-yellow-400",
      "bg-amber-300",
      "bg-rose-300",
      "bg-pink-300",
    ][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute ${star.color} rounded-full`}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration} ease-in-out infinite ${star.delay}`,
            boxShadow:
              "0 0 20px rgba(253, 224, 71, 0.9), 0 0 30px rgba(251, 191, 36, 0.6)",
          }}
        />
      ))}
    </div>
  );
}
