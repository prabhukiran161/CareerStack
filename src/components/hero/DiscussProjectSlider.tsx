import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import { useNavigate } from "@tanstack/react-router";

type DiscussProjectSliderProps = {
  show?: boolean;
  onComplete?: () => void;
};

export const DiscussProjectSlider = ({
  show = true,
  onComplete,
}: DiscussProjectSliderProps) => {
  const [sliderState, setSliderState] = useState<"idle" | "dragging" | "completed">("idle");
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(220);
  const navigate = useNavigate();

  const x = useMotionValue(0);

  // Dynamic max drag calculation based on track width minus knob size & padding
  useEffect(() => {
    const updateMaxDrag = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.offsetWidth;
        setMaxDrag(Math.max(trackWidth - 52, 120));
      }
    };
    updateMaxDrag();
    window.addEventListener("resize", updateMaxDrag);
    return () => window.removeEventListener("resize", updateMaxDrag);
  }, []);

  // Map knob position to background fill track width
  const fillWidth = useTransform(x, (currentX) => `${currentX > 0 ? currentX + 22 : 0}px`);

  // Text 1 ("Slide to Discuss a Project"): Slides OUT to the right & fades out
  const text1X = useTransform(x, [0, maxDrag], [0, maxDrag * 0.75]);
  const text1Opacity = useTransform(x, [0, maxDrag * 0.45], [1, 0]);

  const handleDrag = () => {
    if (sliderState === "completed") return;
    const currentX = x.get();
    if (currentX > 6 && sliderState !== "dragging") {
      setSliderState("dragging");
    }
  };

  const handleDragEnd = () => {
    if (sliderState === "completed") return;
    const currentX = x.get();
    const progress = currentX / maxDrag;

    if (progress >= 0.8) {
      // Transition to completed state & lock knob at full width
      setSliderState("completed");
      animate(x, maxDrag, { type: "spring", stiffness: 350, damping: 25 });

      // Hold completion state for 2.5 seconds (2500ms) so user can comfortably read the message
      setTimeout(() => {
        if (onComplete) {
          onComplete();
        } else {
          navigate({ to: "/about" });
        }
      }, 2500);
    } else {
      // Reset back to idle state
      setSliderState("idle");
      animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="md:hidden relative w-full flex flex-col items-center justify-center my-3 pointer-events-auto"
    >
      {/* Outer Pill Track */}
      <div
        ref={trackRef}
        className={`relative w-72 sm:w-80 h-[52px] rounded-full overflow-hidden transition-all duration-300 flex items-center select-none ${
          sliderState === "completed"
            ? "bg-[#100406]/95 border border-[#B81D2C]/80"
            : "bg-[#080808]/90 border border-[#B81D2C]/60"
        }`}
      >
        {/* Seamless Dark Red Fill Track (Revealed progressively by slider knob) */}
        {sliderState !== "idle" && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#5C0D15]/60 via-[#42090F]/45 to-transparent rounded-l-full pointer-events-none overflow-hidden"
            style={{ width: fillWidth }}
          >
            {/* Text revealed inside the red track behind the slider knob */}
            {sliderState === "dragging" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-72 sm:w-80 text-center text-gray-200 font-medium text-xs sm:text-sm tracking-wide whitespace-nowrap">
                  Discuss a Project
                </span>
              </div>
            )}
          </motion.div>
        )}

        {/* Text Layer Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* State 01: Idle Text (Slides out right & fades as knob moves) */}
          {sliderState !== "completed" && (
            <motion.span
              style={{ x: text1X, opacity: text1Opacity }}
              className="absolute text-gray-300 font-normal text-xs sm:text-sm tracking-wide whitespace-nowrap"
            >
              Slide to Discuss a Project
            </motion.span>
          )}

          {/* State 03: Completed Message (Deep Crimson font, safely padded from checkmark knob) */}
          {sliderState === "completed" && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center pl-4 pr-8"
            >
              <span className="text-[#E23B4A] font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
                Let’s Build Something Great!
              </span>
            </motion.div>
          )}
        </div>

        {/* Draggable Knob Circle */}
        <motion.div
          drag={sliderState === "completed" ? false : "x"}
          dragConstraints={{ left: 0, right: maxDrag }}
          dragElastic={0.05}
          dragMomentum={false}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className={`relative z-10 w-[40px] h-[40px] ml-1.5 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing transition-colors duration-300 ${
            sliderState === "completed"
              ? "bg-[#E50914] text-white"
              : "bg-[#ECEEEF] text-[#121212] hover:bg-white"
          }`}
        >
          {sliderState === "completed" ? (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              <HiFire className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <MdArrowForwardIos className="w-4 h-4 ml-0.5 text-[#121212]" />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
