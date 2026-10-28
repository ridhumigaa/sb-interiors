import { useEffect } from "react";
import "./LuxuryCursor.css";
export default function LuxuryCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let lastParticle = 0;
    const move = (event) => {
      const cursor = document.querySelector(".luxury-cursor");
      if (!cursor) return;
      cursor.style.transform =
        `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const now = Date.now();
      if (now - lastParticle < 45) return;
      lastParticle = now;
      const particle = document.createElement("span");
      particle.className = "cursor-particle";
      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;
      particle.style.setProperty("--drift-x", `${Math.random() * 24 - 12}px`);
      particle.style.setProperty("--drift-y", `${Math.random() * 24 - 12}px`);
      document.body.appendChild(particle);
      particle.addEventListener("animationend", () => particle.remove(), {
        once: true,
      });
    };
    const hoverOn = (event) => {
      const cursor = document.querySelector(".luxury-cursor");
      if (cursor && event.target.closest(
        "a, button, input, textarea, select, [role='button']"
      )) {
        cursor.classList.add("is-hovering");
      }
    };
    const hoverOff = (event) => {
      const cursor = document.querySelector(".luxury-cursor");
      if (!cursor) return;
      if (
        !event.relatedTarget ||
        !event.relatedTarget.closest?.(
          "a, button, input, textarea, select, [role='button']"
        )
      ) {
        cursor.classList.remove("is-hovering");
      }
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hoverOn);
    document.addEventListener("mouseout", hoverOff);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hoverOn);
      document.removeEventListener("mouseout", hoverOff);
      document.querySelectorAll(".cursor-particle").forEach((p) => p.remove());
    };
  }, []);
  return (
    <div className="luxury-cursor" aria-hidden="true">
      <svg className="cursor-arrow" viewBox="0 0 28 34" fill="none">
        <path
          d="M3 2L3 27L10 20L16 31L21 28L15 17L25 16L3 2Z"
          fill="#17130D"
          stroke="#F5CF79"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <span className="cursor-spark">✦</span>
    </div>
  );
}
