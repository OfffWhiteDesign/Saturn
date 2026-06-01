import Image from "next/image";

// All product renders live in /public. Each shares a fixed height in the
// marquee, so differing aspect ratios read like a film strip of cards.
const shots: { src: string; w: number; h: number; alt: string }[] = [
  { src: "/Mac-1.png", w: 2880, h: 1800, alt: "Saturn on Mac" },
  { src: "/iPhone-1.png", w: 1284, h: 2778, alt: "Saturn on iPhone" },
  { src: "/iPad-1.png", w: 2732, h: 2048, alt: "Saturn on iPad" },
  { src: "/Mac-2.png", w: 2880, h: 1800, alt: "Saturn on Mac" },
  { src: "/iPhone-2.png", w: 1284, h: 2778, alt: "Saturn on iPhone" },
  { src: "/iPad-2.png", w: 2732, h: 2048, alt: "Saturn on iPad" },
  { src: "/Mac-3.png", w: 2880, h: 1800, alt: "Saturn on Mac" },
  { src: "/iPhone-3.png", w: 1284, h: 2778, alt: "Saturn on iPhone" },
  { src: "/iPad-3.png", w: 2732, h: 2048, alt: "Saturn on iPad" },
  { src: "/Mac-4.png", w: 2880, h: 1800, alt: "Saturn on Mac" },
  { src: "/iPhone-4.png", w: 1284, h: 2778, alt: "Saturn on iPhone" },
  { src: "/iPad-4.png", w: 2732, h: 2048, alt: "Saturn on iPad" },
  { src: "/Mac-7.png", w: 2880, h: 1800, alt: "Saturn on Mac" },
  { src: "/iPhone-6.png", w: 1284, h: 2778, alt: "Saturn on iPhone" },
  { src: "/iPad-6.png", w: 2732, h: 2048, alt: "Saturn on iPad" },
];

export function ProductMarquee() {
  // Render the list twice so the track can loop seamlessly.
  const loop = [...shots, ...shots];
  return (
    <div className="marquee" aria-label="Saturn product screenshots">
      <div className="marquee-track">
        {loop.map((s, i) => (
          <div className="marquee-item" key={`${s.src}-${i}`} aria-hidden={i >= shots.length}>
            <Image
              src={s.src}
              alt={i < shots.length ? s.alt : ""}
              width={s.w}
              height={s.h}
              sizes="(max-width: 760px) 60vw, 30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
