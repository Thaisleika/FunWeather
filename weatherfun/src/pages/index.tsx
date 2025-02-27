import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import axios from "axios";
import { useWeatherStore } from "../../store/weatherStore";

export default function Home() {
  const [city, setCity] = useState("");
  const { weather, setWeather, favorites, addFavorite } = useWeatherStore();

  const fetchWeather = async () => {
    if (!city) return;
    const apiKey = process.env.NEXT_PUBLIC_VISUALCROSSING_API_KEY;
    try {
      const res = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`
      );
      setWeather(res.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-200">
      <h1 className="text-3xl font-bold">🌤️ WeatherFun</h1>
      <div className="mt-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-2 border rounded"
        />
        <button
          onClick={fetchWeather}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {weather && (
        <div className="mt-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold">{weather.address}</h2>
          <p>{weather.description}</p>
          <p className="text-xl">🌡 {weather.currentConditions.temp}°C</p>
          <button
            onClick={() => addFavorite(weather.address)}
            className="mt-2 p-2 bg-yellow-500 text-white rounded"
          >
            ⭐ Add to Favorites
          </button>
        </div>
      )}

      {favorites.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded shadow-md">
          <h3 className="text-xl font-bold">⭐ Favorite Cities</h3>
          <ul>
            {favorites.map((fav: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
              <li key={index}>{fav}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
