import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WEIGHTS = { subtitle: [100, 400, 100], title: [400, 900, 400] };

const renderText = (text, className, weight = 400) =>
  [...text].map((c, i) => (
    <span key={i} className={className} style={{ fontVariationSettings: `'wght' ${weight}` }}>
      {c === " " ? "\u00A0" : c}
    </span>
  ));

const setupHover = (container, type) => {
  if (!container) return () => {};
  const letters = container.querySelectorAll("span"), [min, max, base] = WEIGHTS[type];
  const setWeight = (el, w, d = 0.25) => gsap.to(el, { duration: d, ease: "power2.out", fontVariationSettings: `'wght' ${w}` });

  const onMove = (e) => {
    const { left } = container.getBoundingClientRect(), mouseX = e.clientX - left;
    letters.forEach((l) => {
      const { left: elLeft, width } = l.getBoundingClientRect();
      const dist = Math.abs(mouseX - (elLeft - left + width / 2));
      setWeight(l, min + (max - min) * Math.exp(-(dist ** 2) / 20000));
    });
  };
  const onLeave = () => letters.forEach((l) => setWeight(l, base, 0.4));

  container.addEventListener("mousemove", onMove);
  container.addEventListener("mouseleave", onLeave);
  return () => { container.removeEventListener("mousemove", onMove); container.removeEventListener("mouseleave", onLeave); };
};

const Welcome = () => {
  const titleRef = useRef(null), subTitleRef = useRef(null);
  useGSAP(() => {
    const c1 = setupHover(titleRef.current, "title"), c2 = setupHover(subTitleRef.current, "subtitle");
    return () => { c1(); c2(); };
  }, []);

  return (
    <section id="welcome">
      <p ref={subTitleRef}>{renderText("Hey, I am Prakash ! Welcome to my", "text-3xl font-georama", 100)}</p>
      <h1 ref={titleRef} className="mt-7">{renderText("Portfolio", "text-9xl italic font-georama", 400)}</h1>
      <div className="small-screen"><p>This Portfolio is Designed for Desktop/tablet screens only.</p></div>
    </section>
  );
};

export default Welcome;
