import { useState, useEffect } from "react";
import Lottie from "lottie-react";

interface MascotAnimationProps {
  weather: string;
}

export default function MascotAnimation({ weather }: MascotAnimationProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (!weather) return; 

    let animationPath = "/animations/cloud.json"; 

    const lowerWeather = weather.toLowerCase();

    if (lowerWeather.includes("sun") || lowerWeather.includes("no rain")) {
      animationPath = "/animations/sunny.json"; 
    } else if (lowerWeather.includes("rain")) {
      animationPath = "/animations/rain.json"; 
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
