// SkyFable Game Database with Steam App IDs for video integration
// Weather-based game recommendations with Steam integration

const gameDatabase = {
  rain: [
    {
      title: "Firewatch",
      tags: ["Single-player", "Atmospheric", "Story-Rich"],
      description: "Today's drizzle sets the mood for something quiet and reflective. Firewatch is a first-person mystery in the Wyoming wilderness, where your only lifeline is a voice on the other end of a radio. If you're in the mood for a scenic walk and a story that lingers, this is the perfect rainy day pick.",
      reasoning: "Rainy weather calls for introspective, slower-paced experiences",
      steamUrl: "https://store.steampowered.com/app/383870/Firewatch/",
      steamAppId: "383870",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/383870/header.jpg"
    },
    {
      title: "Stardew Valley",
      tags: ["Farming", "Relaxing", "Pixel Art"],
      description: "There's something magical about tending virtual crops while real rain nourishes the world outside. The cozy pixel art and gentle gameplay create the perfect indoor sanctuary, letting you build your dream farm while staying warm and dry.",
      reasoning: "Indoor comfort gaming for rainy day coziness",
      steamUrl: "https://store.steampowered.com/app/413150/Stardew_Valley/",
      steamAppId: "413150",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg"
    },
    {
      title: "Coffee Talk",
      tags: ["Narrative", "Chill", "Music"],
      description: "Listen to customers' stories while brewing the perfect coffee. The rainy atmosphere outside matches the warm, intimate café setting perfectly, creating the ultimate cozy evening experience.",
      reasoning: "Cozy café vibes perfect for rainy evenings",
      steamUrl: "https://store.steampowered.com/app/914800/Coffee_Talk/",
      steamAppId: "914800",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/914800/header.jpg"
    },
    {
      title: "Rain World",
      tags: ["Survival", "Artistic", "Challenging"],
      description: "Navigate a harsh ecosystem where the rain cycle affects everything. When it's raining outside, embrace the rain inside too - this atmospheric survival game perfectly captures the mood of stormy weather.",
      reasoning: "Literally raining in-game matches your weather",
      steamUrl: "https://store.steampowered.com/app/312520/Rain_World/",
      steamAppId: "312520",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/312520/header.jpg"
    },
    {
      title: "Ori and the Blind Forest",
      tags: ["Platformer", "Emotional", "Musical"],
      description: "A stunning forest adventure with emotional storytelling. The lush environments and melancholic soundtrack feel perfect when you're stuck inside but yearning for nature during a rainy day.",
      reasoning: "Beautiful forest adventure for nature-loving rainy days",
      steamUrl: "https://store.steampowered.com/app/261570/Ori_and_the_Blind_Forest_Definitive_Edition/",
      steamAppId: "261570",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/261570/header.jpg"
    },
    {
      title: "Spiritfarer",
      tags: ["Emotional", "Beautiful", "Heartfelt"],
      description: "A cozy management game about caring for spirits before releasing them into the afterlife. The emotional depth and beautiful hand-drawn art style create the perfect rainy day meditation.",
      reasoning: "Contemplative journey perfect for reflective rainy moods",
      steamUrl: "https://store.steampowered.com/app/972660/Spiritfarer_Farewell_Edition/",
      steamAppId: "972660",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/972660/header.jpg"
    },
    {
      title: "Night in the Woods",
      tags: ["Story-Rich", "Drama", "Mystery"],
      description: "Explore a dying rust belt town with deep characters and mysterious happenings. Perfect for when rain makes you want to dive into someone else's problems and atmospheric storytelling.",
      reasoning: "Small-town mysteries match rainy day introspection",
      steamUrl: "https://store.steampowered.com/app/481510/Night_in_the_Woods/",
      steamAppId: "481510",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/481510/header.jpg"
    },
    {
      title: "Unpacking",
      tags: ["Zen", "Meditative", "Narrative"],
      description: "Unpack belongings and piece together life stories through objects. The methodical, peaceful gameplay is incredibly soothing during storms, letting you organize virtual spaces while chaos reigns outside.",
      reasoning: "Quiet methodical gameplay perfect for rainy afternoons",
      steamUrl: "https://store.steampowered.com/app/1135690/Unpacking/",
      steamAppId: "1135690",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/1135690/header.jpg"
    }
  ],

  sunny: [
    {
      title: "No Man's Sky",
      tags: ["Space", "Exploration", "Colorful"],
      description: "Brilliant sunshine deserves brilliant alien worlds! Your sunny mood is perfect for exploring vibrant planets, discovering new species, and building bases under exotic skies. The game's boundless optimism matches your weather perfectly.",
      reasoning: "Bright, expansive experiences that match sunny energy",
      steamUrl: "https://store.steampowered.com/app/275850/No_Mans_Sky/",
      steamAppId: "275850",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg"
    },
    {
      title: "Horizon Zero Dawn",
      tags: ["Action", "Open World", "Epic"],
      description: "Sunny weather gives you energy for epic adventures! Join Aloy as she explores stunning post-apocalyptic landscapes with gorgeous outdoor environments and high-energy combat that perfectly capture that 'seize the day' feeling.",
      reasoning: "High-energy adventures that match sunny day motivation",
      steamUrl: "https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/",
      steamAppId: "1151640",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg"
    },
    {
      title: "Spider-Man Remastered",
      tags: ["Action", "Open World", "Heroic"],
      description: "Swing through sunny New York City as your friendly neighborhood Spider-Man. The bright, energetic gameplay and heroic adventure perfectly match the optimistic energy of beautiful sunny weather.",
      reasoning: "High-energy superhero action for energetic sunny days",
      steamUrl: "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/",
      steamAppId: "1817070",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg"
    },
    {
      title: "Slime Rancher",
      tags: ["Cute", "Farming", "Cheerful"],
      description: "Raise adorable slimes on a colorful ranch under bright blue skies. The cheerful art style and upbeat gameplay perfectly match the pure joy and optimism that sunshine brings to your day.",
      reasoning: "Adorable farming simulation for bright happy moods",
      steamUrl: "https://store.steampowered.com/app/433340/Slime_Rancher/",
      steamAppId: "433340",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/433340/header.jpg"
    },
    {
      title: "A Hat in Time",
      tags: ["Platformer", "Colorful", "Whimsical"],
      description: "A delightful 3D platformer with incredible charm and vibrant worlds. The playful energy and colorful aesthetic match the boundless possibility feeling of perfect sunny weather.",
      reasoning: "Whimsical platforming adventure for energetic sunny days",
      steamUrl: "https://store.steampowered.com/app/253230/A_Hat_in_Time/",
      steamAppId: "253230",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/253230/header.jpg"
    },
    {
      title: "Rocket League",
      tags: ["Sports", "Cars", "Fast-paced"],
      description: "Fast-paced car soccer that gets your adrenaline pumping! The bright arenas and energetic gameplay capture that 'let's do something active' sunny day feeling perfectly.",
      reasoning: "High-energy competitive action for active sunny moods",
      steamUrl: "https://store.steampowered.com/app/252950/Rocket_League/",
      steamAppId: "252950",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg"
    },
    {
      title: "Forza Horizon 5",
      tags: ["Racing", "Tropical", "Bright"],
      description: "Race through vibrant Mexican landscapes under brilliant blue skies. The sunny, tropical setting and high-speed action capture that perfect sunny day energy and wanderlust.",
      reasoning: "Fast-paced racing through beautiful sunny landscapes",
      steamUrl: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
      steamAppId: "1551360",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg"
    },
    {
      title: "Subnautica",
      tags: ["Underwater", "Exploration", "Colorful"],
      description: "Crystal clear skies make us dream of crystal clear waters! Dive into an alien ocean world full of wonder, mystery, and vibrant sea life. The bright underwater landscapes match your sunny disposition.",
      reasoning: "Bright underwater worlds for sunny exploration moods",
      steamUrl: "https://store.steampowered.com/app/264710/Subnautica/",
      steamAppId: "264710",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg"
    }
  ],

  cloudy: [
    {
      title: "What Remains of Edith Finch",
      tags: ["Narrative", "Atmospheric", "Mystery"],
      description: "Overcast skies create the perfect backdrop for mysterious stories. This hauntingly beautiful narrative adventure thrives in the contemplative mood that cloudy weather brings, where every room holds secrets waiting to be discovered.",
      reasoning: "Mysterious, atmospheric games for contemplative cloudy moods",
      steamUrl: "https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/",
      steamAppId: "501300",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/501300/header.jpg"
    },
    {
      title: "Gris",
      tags: ["Art", "Emotional", "Musical"],
      description: "The muted tones of cloudy weather perfectly complement this watercolor masterpiece. Gris's emotional journey through grief and healing resonates beautifully with the introspective mood that overcast skies inspire.",
      reasoning: "Emotional, artistic experiences for reflective weather",
      steamUrl: "https://store.steampowered.com/app/683320/GRIS/",
      steamAppId: "683320",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/683320/header.jpg"
    },
    {
      title: "Control",
      tags: ["Supernatural", "Mysterious", "Paranormal"],
      description: "Navigate a brutalist government building filled with supernatural phenomena. The mysterious, uncertain atmosphere of this mind-bending adventure matches perfectly with the contemplative uncertainty of cloudy weather.",
      reasoning: "Supernatural mysteries matching cloudy uncertainty",
      steamUrl: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/",
      steamAppId: "870780",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg"
    },
    {
      title: "Kentucky Route Zero",
      tags: ["Surreal", "Literary", "Atmospheric"],
      description: "A magical realist adventure through rural Kentucky's underground highways. The dreamlike, uncertain narrative perfectly matches the contemplative uncertainty of cloudy skies and overcast moods.",
      reasoning: "Surreal storytelling for contemplative cloudy moods",
      steamUrl: "https://store.steampowered.com/app/231200/Kentucky_Route_Zero_PC_Edition/",
      steamAppId: "231200",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/231200/header.jpg"
    },
    {
      title: "Disco Elysium",
      tags: ["Detective", "Literary", "Deep"],
      description: "Solve crimes while battling your own demons in this incredible RPG. The complex, layered storytelling and philosophical depth match the contemplative mood that cloudy weather brings.",
      reasoning: "Deep detective work for thoughtful overcast days",
      steamUrl: "https://store.steampowered.com/app/632470/Disco_Elysium_The_Final_Cut/",
      steamAppId: "632470",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/632470/header.jpg"
    },
    {
      title: "Life is Strange",
      tags: ["Photography", "Supernatural", "Emotional"],
      description: "Navigate teenage drama with time-travel powers in the moody Pacific Northwest. The atmospheric setting and emotional depth perfectly match the introspective mood of overcast contemplation.",
      reasoning: "Emotional time-travel drama for reflective cloudy weather",
      steamUrl: "https://store.steampowered.com/app/319630/Life_is_Strange__Episode_1/",
      steamAppId: "319630",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/319630/header.jpg"
    }
  ],

  snow: [
    {
      title: "The Long Dark",
      tags: ["Survival", "Winter", "Atmospheric"],
      description: "Snowy weather calls for the ultimate winter survival experience! Feel the chill alongside your character as you navigate the beautiful but unforgiving Canadian wilderness. Perfect for when you want to appreciate your warm indoor space.",
      reasoning: "Immersive winter experiences that complement snowy conditions",
      steamUrl: "https://store.steampowered.com/app/305620/The_Long_Dark/",
      steamAppId: "305620",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/305620/header.jpg"
    },
    {
      title: "Alto's Odyssey",
      tags: ["Zen", "Beautiful", "Relaxing"],
      description: "Let the falling snow outside inspire graceful virtual snowboarding! This meditative endless runner captures the peaceful beauty of winter landscapes, creating a zen experience that matches the quiet calm of snowy days.",
      reasoning: "Peaceful winter sports for snowy day tranquility",
      steamUrl: "https://store.steampowered.com/app/1181430/Alto_Collection/",
      steamAppId: "1181430",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/1181430/header.jpg"
    },
    {
      title: "Frostpunk",
      tags: ["City Builder", "Survival", "Apocalyptic"],
      description: "Build and manage a city in a frozen post-apocalyptic world. The constant battle against the cold perfectly captures the challenge and coziness of snowy weather, making you appreciate your warm shelter.",
      reasoning: "Civilization survival in endless winter",
      steamUrl: "https://store.steampowered.com/app/323190/Frostpunk/",
      steamAppId: "323190",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/323190/header.jpg"
    },
    {
      title: "Never Alone",
      tags: ["Adventure", "Arctic", "Cultural"],
      description: "Experience Inuit folklore while navigating beautiful arctic landscapes with a young girl and her arctic fox companion. The cultural celebration of winter perfectly matches snowy weather appreciation.",
      reasoning: "Arctic adventure celebrating winter culture",
      steamUrl: "https://store.steampowered.com/app/295790/Never_Alone_Kisima_Ingitchuna/",
      steamAppId: "295790",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/295790/header.jpg"
    },
    {
      title: "SnowRunner",
      tags: ["Trucks", "Snow", "Simulation"],
      description: "Navigate treacherous snowy terrain with powerful trucks and heavy machinery. The challenging snow physics and winter conditions perfectly match the struggle and adventure of dealing with real winter weather.",
      reasoning: "Heavy machinery battling snow just like real winter",
      steamUrl: "https://store.steampowered.com/app/1465360/SnowRunner/",
      steamAppId: "1465360",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/1465360/header.jpg"
    },
    {
      title: "A Short Hike",
      tags: ["Exploration", "Meditative", "Nature"],
      description: "Take a meditative hike through snowy mountain trails to reach a beautiful summit. The peaceful winter exploration and cozy pixel art perfectly match the contemplative mood of falling snow.",
      reasoning: "Peaceful mountain hiking in snowy landscapes",
      steamUrl: "https://store.steampowered.com/app/1055540/A_Short_Hike/",
      steamAppId: "1055540",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/1055540/header.jpg"
    }
  ],

  clear: [
    {
      title: "Journey",
      tags: ["Transcendent", "Beautiful", "Meditative"],
      description: "Clear skies inspire clear journeys of the soul. This wordless adventure through mystical landscapes captures the sense of possibility and wonder that comes with perfect weather. A transformative experience for a perfect day.",
      reasoning: "Transcendent experiences for perfect weather days",
      steamUrl: "https://store.steampowered.com/app/638230/Journey/",
      steamAppId: "638230",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/638230/header.jpg"
    },
    {
      title: "Breath of the Wild",
      tags: ["Open World", "Adventure", "Beautiful"],
      description: "When the weather is absolutely perfect, you need the perfect adventure. Explore Hyrule's vast landscapes under beautiful clear skies that mirror your own perfect conditions outside.",
      reasoning: "Ultimate open-world exploration for perfect outdoor weather",
      steamUrl: "https://store.steampowered.com/app/1174180/The_Legend_of_Zelda_Breath_of_the_Wild/",
      steamAppId: "1174180",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg"
    },
    {
      title: "Outer Wilds",
      tags: ["Space", "Mystery", "Exploration"],
      description: "Explore a miniature solar system caught in a time loop. The sense of cosmic wonder and discovery perfectly matches the expansive feeling of looking up at perfectly clear, infinite skies.",
      reasoning: "Cosmic exploration under infinite clear skies",
      steamUrl: "https://store.steampowered.com/app/753640/Outer_Wilds/",
      steamAppId: "753640",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/753640/header.jpg"
    },
    {
      title: "Abzu",
      tags: ["Underwater", "Meditative", "Beautiful"],
      description: "Dive into beautiful underwater worlds with stunning sea life and perfect visibility. The crystal clear waters and serene exploration match the perfect clarity of your weather outside.",
      reasoning: "Serene underwater meditation for crystal clear conditions",
      steamUrl: "https://store.steampowered.com/app/384190/ABZU/",
      steamAppId: "384190",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/384190/header.jpg"
    },
    {
      title: "The Witness",
      tags: ["Puzzle", "Beautiful", "Zen"],
      description: "Clear skies, clear mind! This gorgeous puzzle island is perfect when clear weather has you feeling mentally sharp and ready for intellectual challenges in a beautiful environment.",
      reasoning: "Mental clarity puzzles for perfectly clear thinking",
      steamUrl: "https://store.steampowered.com/app/210970/The_Witness/",
      steamAppId: "210970",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/210970/header.jpg"
    },
    {
      title: "Astroneer",
      tags: ["Space", "Exploration", "Crafting"],
      description: "Explore and reshape distant worlds under alien skies. The sense of infinite possibility and creative freedom matches the boundless feeling of perfect clear weather days.",
      reasoning: "Planetary exploration under endless clear skies",
      steamUrl: "https://store.steampowered.com/app/361420/ASTRONEER/",
      steamAppId: "361420",
      gameImage: "https://cdn.akamai.steamstatic.com/steam/apps/361420/header.jpg"
    }
  ]
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = gameDatabase;
} else if (typeof window !== 'undefined') {
  window.gameDatabase = gameDatabase;
}
