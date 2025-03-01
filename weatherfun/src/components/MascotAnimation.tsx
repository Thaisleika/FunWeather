import { useState, useEffect } from "react";
import Lottie from "lottie-react";

interface MascotAnimationProps {
  weather: string;
}

export default function MascotAnimation({ weather }: MascotAnimationProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (!weather) return; // Remove código desnecessário

    let animationPath = "/animations/cloud.json"; // Default: cloudy animation

    const lowerWeather = weather.toLowerCase();

    if (lowerWeather.includes("sun") || lowerWeather.includes("no rain")) {
      animationPath = "/animations/sunny.json"; // Show sun animation
    } else if (lowerWeather.includes("rain")) {
      animationPath = "/animations/rain.json"; // Show rain animation
    }

    fetch(animationPath)
      .then((res) => {
        if (!res.ok) throw new Error("Animation not found");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, [weather]);

  return animationData ? <Lottie animationData={animationData} style={{ width: 200, height: 200 }} /> : null;
}
