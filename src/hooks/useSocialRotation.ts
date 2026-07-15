import { useEffect, useState } from "react";

type UseSocialRotationOptions = {
  itemCount: number;
  paused: boolean;
  interval?: number;
};

export const useSocialRotation = ({
  itemCount,
  paused,
  interval = 2400,
}: UseSocialRotationOptions) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (paused || itemCount === 0) {
      return;
    }

    const rotationInterval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % itemCount);
    }, interval);

    return () => {
      clearInterval(rotationInterval);
    };
  }, [paused, itemCount, interval]);

  return activeIndex;
};
