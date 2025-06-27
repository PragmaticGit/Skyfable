import React, { useState, useEffect } from 'react';

const SkyFable = () => {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [gameRecommendation, setGameRecommendation] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Add Quicksand font
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    if (!document.head.querySelector('link[href*="Quicksand"]')) {
      document.head.appendChild(fontLink);
    }
  }, []);

  // Enhanced game database
  const gameDatabase = {
    rain: [
      {
        title: "Firewatch",
        tags: ["🌲 Atmospheric", "👤 Single-player", "📖 Story-Rich"],
        description: "The gentle patter of rain outside makes this the perfect time to lose yourself in the Wyoming wilderness. Firewatch's contemplative pace and stunning forest vistas create a cozy cocoon of storytelling that pairs beautifully with the sound of raindrops on your window.",
        reasoning: "Rainy weather calls for introspective, slower-paced experiences"
      },
      {
        title: "Stardew Valley",
        tags: ["🌱 Farming", "😌 Relaxing", "🎨 Pixel Art"],
        description: "There's something magical about tending virtual crops while real rain nourishes the world outside. The cozy pixel art and gentle gameplay create the perfect indoor sanctuary, letting you build your dream farm while staying warm and dry.",
        reasoning: "Indoor comfort gaming for rainy day coziness"
      }
    ],
    sunny: [
      {
        title: "No Man's Sky",
        tags: ["🚀 Space", "🌍 Exploration", "🌈 Colorful"],
        description: "Brilliant sunshine deserves brilliant alien worlds! Your sunny mood is perfect for exploring vibrant planets, discovering new species, and building bases under exotic skies. The game's boundless optimism matches your weather perfectly.",
        reasoning: "Bright, expansive experiences that match sunny energy"
      }
    ],
    cloudy: [
      {
        title: "What Remains of Edith Finch",
        tags: ["📚 Narrative", "🎭 Atmospheric", "🏠 Mystery"],
        description: "Overcast skies create the perfect backdrop for mysterious stories. This hauntingly beautiful narrative adventure thrives in the contemplative mood that cloudy weather brings, where every room holds secrets waiting to be discovered.",
        reasoning: "Mysterious, atmospheric games for contemplative cloudy moods"
      }
    ],
    snow: [
      {
        title: "The Long Dark",
        tags: ["❄️ Survival", "🌨️ Winter", "🔥 Atmospheric"],
        description: "Snowy weather calls for the ultimate winter survival experience! Feel the chill alongside your character as you navigate the beautiful but unforgiving Canadian wilderness. Perfect for when you want to appreciate your warm indoor space.",
        reasoning: "Immersive winter experiences that complement snowy conditions"
      }
    ],
    clear: [
      {
        title: "Journey",
        tags: ["✨ Transcendent", "🌅 Beautiful", "🧘 Meditative"],
        description: "Clear skies inspire clear journeys of the soul. This wordless adventure through mystical landscapes captures the sense of possibility and wonder that comes with perfect weather. A transformative experience for a perfect day.",
        reasoning: "Transcendent experiences for perfect weather days"
      }
    ]
  };

  const getWeatherType = (condition, temp = 20) => {
    const lowerCondition = condition.toLowerCase();
    
    if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle') || 
        lowerCondition.includes('shower') || lowerCondition.includes('storm')) {
      return 'rain';
    }
    if (lowerCondition.includes('snow') || lowerCondition.includes('blizzard') || 
        lowerCondition.includes('flurr')) {
      return 'snow';
    }
    if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast') || 
        lowerCondition.includes('grey') || lowerCondition.includes('gray')) {
      return 'cloudy';
    }
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear') || 
        lowerCondition.includes('bright') || (temp > 25)) {
      return 'sunny';
    }
    
    return 'clear';
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(`https://wttr.in/${lat},${lon}?format=j1`);
      
      if (!response.ok) {
        throw new Error('Weather fetch failed');
      }
      
      const data = await response.json();
      const current = data.current_condition[0];
      const location = data.nearest_area[0];
      
      return {
        weather: [{ 
          main: current.weatherDesc[0].value,
          description: current.weatherDesc[0].value.toLowerCase()
        }],
        name: location.areaName[0].value,
        main: { 
          temp: parseInt(current.temp_C)
        }
      };
    } catch (error) {
      console.error('Weather API failed, using fallback:', error);
      const hour = new Date().getHours();
      let weatherCondition = 'Clear';
      
      if (hour >= 18 || hour <= 6) {
        weatherCondition = 'Clear night';
      } else if (Math.random() > 0.7) {
        weatherCondition = 'Partly cloudy';
      }
      
      return {
        weather: [{ main: weatherCondition, description: weatherCondition.toLowerCase() }],
        name: 'Your Location',
        main: { temp: Math.round(15 + Math.random() * 10) }
      };
    }
  };

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
        return;
      }

      const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Got location:', position.coords.latitude, position.coords.longitude);
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
          resolve({ lat: 59.9139, lon: 10.7522 });
        },
        options
      );
    });
  };

  const handleForecastClick = async () => {
    setCurrentScreen('loading');
    setLoadingProgress(0);

    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 20;
      });
    }, 200);

    try {
      const userLocation = await getLocation();
      setLocation(userLocation);

      const weatherData = await fetchWeather(userLocation.lat, userLocation.lon);
      setWeather(weatherData);
      console.log('Weather data:', weatherData);

      const weatherType = getWeatherType(weatherData.weather[0].main, weatherData.main.temp);
      console.log('Weather type determined:', weatherType);
      const availableGames = gameDatabase[weatherType] || gameDatabase.clear;
      const randomGame = availableGames[Math.floor(Math.random() * availableGames.length)];
      setGameRecommendation(randomGame);

      setTimeout(() => {
        setLoadingProgress(100);
        setTimeout(() => {
          setCurrentScreen('result');
        }, 500);
      }, 1500);

    } catch (error) {
      console.error('Error fetching data:', error);
      setTimeout(() => {
        setLoadingProgress(100);
        setTimeout(() => {
          setCurrentScreen('result');
        }, 500);
      }, 2000);
    }
  };

  const handleRollAgain = () => {
    if (weather) {
      const weatherType = getWeatherType(weather.weather[0].main, weather.main.temp);
      const availableGames = gameDatabase[weatherType] || gameDatabase.clear;
      const randomGame = availableGames[Math.floor(Math.random() * availableGames.length)];
      setGameRecommendation(randomGame);
    }
  };

  // Load initial weather data
  useEffect(() => {
    const loadInitialWeather = async () => {
      try {
        const userLocation = await getLocation();
        setLocation(userLocation);
        const weatherData = await fetchWeather(userLocation.lat, userLocation.lon);
        setWeather(weatherData);
      } catch (error) {
        console.error('Failed to load initial weather:', error);
      }
    };

    loadInitialWeather();
  }, []);

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex flex-col" style={{fontFamily: 'Quicksand, sans-serif'}}>
      <div className="flex justify-between items-center p-6">
        <h1 className="text-white text-2xl font-bold">
          Sky<span className="text-yellow-400">Fable</span>
        </h1>
        <button 
          onClick={handleForecastClick}
          className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-purple-800 transition-all duration-300 font-semibold"
        >
          Forecast My Game
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
              Find the perfect game based on your local weather
            </h2>
            <p className="text-purple-200 text-lg mb-8 leading-relaxed font-medium">
              Right now in <span className="text-white font-semibold">{weather?.name || 'Your City'}</span>, it's{' '}
              <span className="text-yellow-400 font-semibold">
                {weather ? `${weather.main.temp}°C and ${weather.weather[0].description}` : 'loading your weather...'}
              </span> so it's time for something{' '}
              <span className="text-white font-semibold">perfectly matched</span> ✨
            </p>
            <button 
              onClick={handleForecastClick}
              className="px-8 py-4 bg-yellow-400 text-purple-800 rounded-lg hover:bg-yellow-300 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Forecast My Game
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-96 h-64 bg-purple-500 bg-opacity-30 rounded-2xl flex items-center justify-center border-2 border-purple-400 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-6xl mb-4">🎮</div>
                <div className="text-yellow-400 text-lg font-semibold">Gaming Illustration</div>
                <div className="text-purple-200 text-sm font-medium">Cozy gaming vibes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 text-yellow-400 text-2xl animate-pulse">✨</div>
      <div className="absolute top-1/3 left-1/4 text-yellow-300 text-xl animate-pulse delay-1000">⭐</div>
      <div className="absolute bottom-1/4 right-1/3 text-yellow-200 text-lg animate-pulse delay-500">💫</div>
    </div>
  );

  const renderLoading = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex flex-col" style={{fontFamily: 'Quicksand, sans-serif'}}>
      <div className="flex justify-between items-center p-6">
        <h1 className="text-white text-2xl font-bold">
          Sky<span className="text-yellow-400">Fable</span>
        </h1>
        <button className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg opacity-50 cursor-not-allowed font-semibold">
          Forecast My Game
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Sky<span className="text-yellow-400">Fable</span>
          </h1>
          <p className="text-yellow-400 text-xl mb-12 animate-pulse font-medium">
            Consulting the ancient cloud spirits ☁️<br />
            Analyzing your cosmic weather patterns ✨<br />
            Matching your soul with the perfect game... 🎮
          </p>
          
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 w-full h-full border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 w-20 h-20 border-2 border-yellow-300 border-b-transparent rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-yellow-400 text-2xl animate-pulse">☁️</span>
            </div>
          </div>

          <div className="w-80 mx-auto bg-purple-500 bg-opacity-30 rounded-full h-3 backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-3 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-purple-200 text-sm mt-4 font-medium">{Math.round(loadingProgress)}% complete</p>
        </div>
      </div>
    </div>
  );

  const renderResult = () => (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 via-purple-600 to-purple-800 relative overflow-hidden" style={{fontFamily: 'Quicksand, sans-serif'}}>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black opacity-30">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path d="M0,120 L0,80 L50,20 L100,80 L150,30 L200,80 L250,40 L300,80 L350,25 L400,80 L450,35 L500,80 L550,30 L600,80 L650,25 L700,80 L750,40 L800,80 L850,30 L900,80 L950,35 L1000,80 L1050,25 L1100,80 L1150,40 L1200,80 L1200,120 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10 flex justify-between items-center p-6">
        <h1 className="text-white text-2xl font-bold">
          Sky<span className="text-yellow-400">Fable</span>
        </h1>
        <button 
          onClick={() => setCurrentScreen('landing')}
          className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-purple-800 transition-all duration-300 font-semibold"
        >
          Forecast My Game
        </button>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gradient-to-b from-orange-500 to-orange-700 rounded-lg shadow-2xl overflow-hidden">
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="text-6xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold text-white mb-2">{gameRecommendation?.title?.toUpperCase() || 'FIREWATCH'}</h3>
                <div className="text-orange-200 font-medium">
                  An atmospheric walking simulator set in the Wyoming wilderness
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {gameRecommendation?.tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-semibold backdrop-blur-sm border border-white border-opacity-30"
                >
                  {tag}
                </span>
              )) || []}
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
              {gameRecommendation?.title || 'Firewatch'}
            </h2>

            <p className="text-yellow-200 text-sm font-semibold mb-4 italic">
              {gameRecommendation?.reasoning || "Perfect for contemplative weather"}
            </p>

            <p className="text-white text-lg leading-relaxed mb-8 opacity-90 font-medium">
              {gameRecommendation?.description || "Today's drizzle sets the mood for something quiet and reflective. Firewatch is a first-person mystery in the Wyoming wilderness, where your only lifeline is a voice on the other end of a radio. If you're in the mood for a scenic walk and a story that lingers, this is the perfect rainy day pick"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-yellow-400 text-purple-800 rounded-lg hover:bg-yellow-300 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105">
                View On Steam
              </button>
              <button 
                onClick={handleRollAgain}
                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-800 transition-all duration-300 font-bold"
              >
                Roll Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (currentScreen) {
    case 'loading':
      return renderLoading();
    case 'result':
      return renderResult();
    default:
      return renderLanding();
  }
};

export default SkyFable;