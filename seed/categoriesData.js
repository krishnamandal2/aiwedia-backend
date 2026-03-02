const categoriesToSeed = [
  {
    title: "AI Tools",
    desc: "All available AI tools links are listed here",
    slug: "aitools",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768645475/aitools_wn5tnv.jpg",
    type: "tools",
    buttonText: "Explore AI Tools",
    rank:1
  },
  {
  title: "Documents converter",
  desc: "Online tools to create, edit, convert, compress, and manage documents and PDF files",
  slug: "documenttools",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769265021/iLovePDF_mzzi8t.jpg",
  type: "DocumentTools",
  buttonText: "Explore Document Tools",
  rank: 2
},
{
  title: "Image Filter",
  desc: "Online tools to apply image filters, effects, and AI-based enhancements to photos",
  slug: "Imagefilter",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769267148/snapseed_lp77bb.jpg",
  type: "ImageTools",
  buttonText: "Explore Image Filters",
  rank: 3
},
{
  title: "AI Video Generation & Editing",
  desc: "Advanced AI video generation tools to create, edit, and enhance videos using intelligent effects, style transfer",
  slug: "AIVideoGeneration",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769760788/sora_vyccuz.jpg",
  type: "AIVideoGeneration",
  buttonText: "Explore website",
  rank: 4
},
{
  title: "AI Voice, Speech",
  desc: "Advanced AI voice generation tools to create, edit, and enhance voices with natural speech, multiple styles",
  slug: "AIVoice",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769761137/rvc_jkwhqy.jpg",
  type: "AIVoices",
  buttonText: "Explore website",
  rank: 5
},
{
  title: "AI Writing & Content",
  desc: "Advanced AI writing tools for generating high-quality content, blogs, emails, and marketing copy with speed and accuracy",
  slug: "AIWritingandContent",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769761125/content_jtos8f.jpg",
  type: "AIcontents",
  buttonText: "Explore website",
  rank: 6
},

{
  title: "AI Research, Search & Data",
  desc: "AI-powered tools for research, intelligent search, and data analysis to discover insights, summarize information, and make data-driven decisions.",
  slug: "ai-data-search",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769767434/research_jjyyfk.png",
  type: "AIdata",
  buttonText: "Explore website",
  rank: 7
},

{
  title: "AI Design, UI/UX & Web",
  desc: "AI-powered design tools for creating UI/UX layouts, web designs, and visuals with intelligent automation and creative enhancements.",
  slug: "aiwebdesign",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769767434/ui_kzbas3.jpg",
  type: "AIdata",
  buttonText: "Explore website",
  rank: 8
},

{
  title: "AI Marketing, SEO & Social Media",
  desc:"AI-powered tools for marketing, SEO, and social media to optimize campaigns, improve rankings, and grow online presence.",
  slug: "aimarketingseo",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769767433/seo_wk77mx.jpg",
  type: "AIseo",
  buttonText: "Explore website",
  rank: 9
},
{
  title: "Vibe Coding",
  desc:"AI-powered coding tools that let you build software using natural language, automation, and intelligent code generation.",
  slug: "vibecoding",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769767433/vibe_rfobve.jpg",
  type: "AIvibe",
  buttonText: "Explore website",
  rank: 10
},
 {
    title: "Images Generative Ai",
    desc: "Informational websites for knowledge, guides, facts, and general awareness",
    slug: "ImageGenerative",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769179514/imageai_tumglz.jpg",
    type: "Ai",
    buttonText: "Explore Info",
     rank:11

  },
  {
    title: "Web Series",
    desc: "Popular web series from Netflix, Prime, Hotstar and more",
    slug: "webseries",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644927/categories/webseries.avif",
    type: "entertainment",
    buttonText: "Explore Web Series",
    rank:12
  },
 
    {
    title: "E-Commerce",
    desc: "Top online shopping websites for electronics, fashion, groceries, and more",
    slug: "ecommerce",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644900/categories/ecommerce.jpg",
    type: "shopping",
    buttonText: "Explore Stores",
     rank:13
  },

   {
    title: "Social Media",
    desc: "Popular social media platforms for networking, sharing, and messaging",
    slug: "socialmedia",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644923/categories/socilamedia.jpg",
    type: "social",
    buttonText: "Explore Platforms",
     rank:14
  },
   {
    title: "Dating Sites",
    desc: "Online dating platforms to meet new people and build relationships",
    slug: "datingsite",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644896/categories/datingsite.jpg",
    type: "lifestyle",
    buttonText: "Explore Dating",
    rank:15
   
  },
  {
    title: "Bollywood",
    desc: "Latest Bollywood movies, songs, actors, and updates",
    slug: "bollywood",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769166774/bolywood_d6e2sy.jpg",
    type: "entertainment",
    buttonText: "Explore Bollywood",
     rank:16
  },

  
  {
    title: "Football",
    desc: "Football news, matches, teams, and player updates",
    slug: "football",
     image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644905/categories/footballmatch.jpg",
    type: "sports",
    buttonText: "Explore Football",
     rank:17
  },
  {
    title: "Cricket",
    desc: "Cricket matches, scores, teams, and player stats",
    slug: "cricket",
   image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644895/categories/criccketw.png",
    type: "sports",
    buttonText: "Explore Cricket",
     rank:18
  },
  
  {
    title: "Trending Sites",
    desc: "Currently trending and viral websites across the internet",
    slug: "trendingsite",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644923/categories/socilamedia.jpg",
    type: "trending",
    buttonText: "Explore Trends",
     rank:19
  },
  {
    title: "English News",
    desc: "Latest English news websites covering global and national updates",
    slug: "englishnews",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644901/categories/englishnews.avif",
    type: "news",
    buttonText: "Read News",
     rank:20
  },
  {
    title: "Hindi News",
    desc: "Top Hindi news websites for breaking and daily news updates",
    slug: "hindinews",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644913/categories/HidiNews.png",
    type: "news",
    buttonText: "Explore Platform",
     rank:21
  },
 
  {
    title: "Games Sites",
    desc: "Online and offline gaming platforms including PC, mobile, and cloud games",
    slug: "games",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644908/categories/games.jpg",
    type: "gaming",
    buttonText: "Play Games",
     rank:22
  },
  {
    title: "Education Sites",
    desc: "Educational websites for learning, courses, exams, and skill development",
    slug: "education",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644901/categories/education.png",
    type: "education",
    buttonText: "Start Learning",
     rank:23
  },
  
  {
   title: "Jobs Sites",
    desc: "Job portals and career websites for freshers and experienced professionals",
    slug: "jobs",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644921/categories/Jobs.avif",
    buttonText: "Find Jobs",
     rank:24
 
  },
  {
    title: "DeveloperTools",
    desc: "Tools, platforms, and resources for developers and programmers",
    slug: "developertools",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644897/categories/developer.png",
    type: "technology",
    buttonText: "Explore Dev Tools",
     rank:25
  },
    {
    title: "Housing & Real Estate",
    desc: "Property, housing, rental, and real estate listing websites",
    slug: "housing",
     image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644916/categories/housing.png",
    type: "realestate",
    buttonText: "Explore Housing",
     rank:26
  },
 
  {
    title: "FoodDelivery",
    desc: "Online food delivery platforms for restaurants and groceries",
    slug: "fooddelivery",
   image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644903/categories/food.png",
    type: "services",
    buttonText: "Order Food",
     rank:27
  },
  {
    title: "Train Booking",
    desc: "Train ticket booking and railway information websites",
    slug: "trainbooking",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644926/categories/trainbooking.png",
    type: "travel",
    buttonText: "Book Trains",
     rank:28
  },
  {
    title: "Freight Booking",
    desc: "Logistics and freight booking platforms for cargo transportation",
    slug: "freightbooking",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644906/categories/FreigtBooking.png",
    type: "logistics",
    buttonText: "Book Freight",
     rank:29
  },
  {
    title: "Hotel Booking",
   desc: "Compare and book hotels worldwide with the best prices, verified reviews, and instant confirmation.",
    slug: "hotelbooking",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644915/categories/hotels.png",
    type: "travel",
    buttonText: "Book Hotels",
     rank:30
  },
  {
    title: "Bus Booking",
    desc: "Online bus ticket booking platforms for intercity and intracity travel",
    slug: "busbooking",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768646604/busbooking_lnlili.jpg",
    type: "travel",
    buttonText: "Book Bus",
    rank:31
  },
  {
    title: "Taxi & Cab",
    desc: "Taxi and cab booking platforms for local and outstation travel",
    slug: "taxi",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644894/categories/cabbooking.jpg",
    type: "transport",
    buttonText: "Book Taxi",
     rank:32
  },
  {
    title: "Coding Platforms",
    desc: "Online coding practice, competitive programming, and learning platforms",
    slug: "codingplatform",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644922/categories/leetcode.png",
    type: "education",
    buttonText: "Start Coding",
     rank:33
  },
 
    {
    title: "Information Sites",
    desc: "Informational websites for knowledge, guides, facts, and general awareness",
    slug: "informationsite",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644918/categories/information.jpg",
    type: "information",
    buttonText: "Explore Info",
     rank:34
  },
  {
    title: "Trading Platforms",
    desc: "Stock market, crypto, forex, and trading-related platforms",
    slug: "tradingsites",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644925/categories/tradingapp.png",
    type: "finance",
    buttonText: "Explore Trading",
     rank:35
  },
     {
    title: "Hot Call Services",
    desc: "Voice and call-based entertainment services (age-restricted content)",
    slug: "hotcall",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768644914/categories/hotcalls.jpg",
    type: "restricted",
    buttonText: "Enter (18+)",
     rank:36
  
  },

    {
    title: "Indian Government Sites",
    desc: "Official Indian government websites for services, schemes, portals, and departments",
    slug: "indiagovsites",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1768646882/nda_sonehj.avif",
    type: "government",
    buttonText: "Visit Govt Sites",
     rank:37
  },
   {
    title: "Government Exams",
    desc: "Resources and updates for SSC, UPSC, Banking, Railway exams",
    slug: "governmentexam",
    image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769149765/government_h36xx4.jpg",
    type: "education",
    buttonText: "Explore Exams",
     rank:38
  },

  {
  title: "Matrimony Sites",
  desc: "List of popular Indian matrimony and wedding portals.",
  slug: "wedding",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1769177806/shaddi_vdwasr.jpg",
  type: "weedingsite",
  buttonText: "Visit Matrimony site",
  rank: 39
},

 {
  title: "Logo and favicon design",
  desc: "List of popular websites for logo and favicon design.",
  slug: "Logoandfavicondesign",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1770023996/looka_mydiuo.jpg",
  type: "logodesign",
  buttonText: "Explore website",
  rank: 40
},

 {
  title: "Online Games",
  desc: "Play all online games via a this website",
  slug: "onlinegames",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1770276166/onlinegames_obl5w0.jpg",
  type: "OnlineGmames",
  buttonText: "Explore website",
  rank: 41
},
 {
  title: "Background image remover",
  desc: "All websites that help remove backgrounds from images using AI and online editing tools.",
  slug: "ImageBackgroundRemover",
  image: "https://res.cloudinary.com/dj3vrogpl/image/upload/v1770389271/bremove_szsgx6.jpg",
  type: "imagebgRemover",
  buttonText: "Explore website",
  rank: 42
},



];

module.exports = categoriesToSeed;