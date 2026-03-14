const mongoose = require("mongoose");
const dotenv = require("dotenv");
const BotReply = require("../models/BotReply");

dotenv.config({ path: "../.env" });

mongoose.connect(process.env.MONGO_URI);

const botData = [
  // Greetings & Introduction
  {
    keywords: ["hi", "hello", "hey", "greetings", "sup", "howdy"],
    reply: " Hello! Welcome to Aiwedia AI assistant. I'm here to help you discover the best AI tools for your needs. What are you looking for today?"
  },
  {
    keywords: ["how are you", "how r u", "how's it going"],
    reply: " I'm doing fantastic! Ready to help you explore the world of AI tools. How can I assist you today?"
  },
  {
    keywords: ["what is aiwedia", "about", "tell me about yourself"],
    reply: " Aiwedia is your ultimate destination for discovering AI tools! We curate and review the best artificial intelligence solutions across all categories - from writing and coding to design, video, and productivity. Think of me as your personal AI tools concierge!"
  },

  // Core AI Tool Categories
  {
    keywords: ["ai tools", "list ai tools", "show tools", "all tools"],
    reply: " AI tools span many categories! Here's what I can help you with:\n\n•  Writing & Content\n•  Coding & Development\n•  Design & Image\n• 🎬 Video & Animation\n• 📊 Productivity\n• 📈 Marketing & SEO\n• 🎵 Music & Audio\n• 💼 Business & Sales\n• 🧠 Learning & Research\n\nWhich category interests you?"
  },

  // Writing & Content Creation
  {
    keywords: ["writing", "content", "blog", "article", "write", "copywriting", "content creation"],
    reply: " Top AI writing tools:\n\n• **Jasper AI** - Best for long-form content\n• **Copy.ai** - Great for marketing copy\n• **Writesonic** - Versatile content generator\n• **Rytr** - Budget-friendly option\n• **Notion AI** - Integrated workspace AI\n• **Grammarly** - AI writing assistant\n• **Claude** - Excellent for analysis\n\nWant specific recommendations for blog posts, social media, or emails?"
  },
  {
    keywords: ["blog writing", "blog posts", "article writing"],
    reply: " For blog writing, these AI tools are excellent:\n\n• **Jasper** - Templates for blog posts\n• **Frase.io** - SEO-optimized content\n• **Surfer SEO** - Content optimization\n• **Copy.ai** - Quick blog outlines\n• **Writesonic** - Article writer\n\nPro tip: Use AI for outlines and drafts, then add your personal touch!"
  },
  {
    keywords: ["social media", "instagram", "twitter", "linkedin", "facebook", "tiktok captions"],
    reply: " AI tools for social media:\n\n• **Predis AI** - Video creation\n• **Lately AI** - Repurpose content\n• **Buffer AI** - Post scheduling\n• **Hootsuite AI** - Social management\n• **Canva AI** - Graphics & posts\n• **Copy.ai** - Caption generation\n\nNeed help with a specific platform?"
  },
  {
    keywords: ["email", "newsletter", "email marketing"],
    reply: " Best AI email tools:\n\n• **Mailchimp AI** - Email campaigns\n• **HubSpot AI** - Sales emails\n• **Copy.ai** - Email templates\n• **Jasper** - Newsletter content\n• **Seventh Sense** - Send time optimization\n\nWhat type of emails are you writing?"
  },
  {
    keywords: ["seo", "search engine optimization", "rankings"],
    reply: "🔍 Top AI SEO tools:\n\n• **Surfer SEO** - Content optimization\n• **Frase.io** - Topic research\n• **Clearscope** - Content grading\n• **MarketMuse** - Content strategy\n• **Ahrefs AI** - Keyword research\n• **SEMrush AI** - Competitive analysis\n\nWant to optimize existing content or plan new topics?"
  },

  // Coding & Development
  {
    keywords: ["coding", "programming", "developer", "software", "code"],
    reply: "Best AI coding tools:\n\n• **GitHub Copilot** - Code completion\n• **Cursor** - AI-native editor\n• **Codeium** - Free alternative to Copilot\n• **Replit AI** - Online IDE with AI\n• **Tabnine** - Code predictions\n• **Amazon CodeWhisperer** - AWS integration\n• **Continue.dev** - Open source\n\nWhat's your primary programming language?"
  },
  {
    keywords: ["python", "python coding"],
    reply: " Python AI tools:\n\n• **GitHub Copilot** - Python assistance\n• **Replit AI** - Python debugging\n• **Cursor** - Python development\n• **Jupyter AI** - Data science\n• **Codeium** - Python support\n\nWorking on data science, web dev, or automation?"
  },
  {
    keywords: ["javascript", "typescript", "js", "web dev"],
    reply: " JavaScript/TypeScript tools:\n\n• **GitHub Copilot** - JS/TS support\n• **V0 by Vercel** - React components\n• **GPT Engineer** - Full stack apps\n• **Codeium** - JavaScript help\n• **Tabnine** - React suggestions\n\nBuilding a frontend, backend, or full-stack app?"
  },
  {
    keywords: ["debugging", "fix code", "error", "bug"],
    reply: " AI debugging assistants:\n\n• **ChatGPT** - Explain errors\n• **GitHub Copilot** - Fix suggestions\n• **Replit AI** - Real-time debugging\n• **Cursor** - Code analysis\n• **Sentry AI** - Error tracking\n\nShare your error and I'll help you find the right tool!"
  },
  {
    keywords: ["database", "sql", "nosql", "mongodb", "postgresql"],
    reply: " AI database tools:\n\n• **AI2sql** - Text to SQL\n• **Sequel AI** - Database queries\n• **MongoDB AI** - Schema suggestions\n• **Supabase AI** - PostgreSQL helper\n• **Retool AI** - Database apps\n\nNeed help with queries or database design?"
  },

  // Image Generation & Design
  {
    keywords: ["image", "photo", "picture", "generate image", "create image"],
    reply: " Top AI image generators:\n\n• **Midjourney** - Artistic, high-quality\n• **DALL-E 3** - OpenAI's best\n• **Leonardo AI** - Game assets\n• **Stable Diffusion** - Open source\n• **Adobe Firefly** - Commercial safe\n• **Playground AI** - Easy interface\n• **Ideogram** - Text rendering\n\nWhat style of images are you creating?"
  },
  {
    keywords: ["design", "graphic design", "logo", "branding"],
    reply: " Best AI design tools:\n\n• **Canva AI** - All-in-one design\n• **Adobe Firefly** - Professional\n• **Looka** - Logo maker\n• **Uizard** - UI/UX design\n• **Khroma** - Color palettes\n• **Remove.bg** - Background removal\n• **Clipdrop** - Image editing\n\nWorking on branding, social media, or UI design?"
  },
  {
    keywords: ["logo design", "make logo", "brand logo"],
    reply: "✨ AI logo makers:\n\n• **Looka** - Professional logos\n• **Canva AI** - Quick designs\n• **Hatchful** - Shopify's tool\n• **Brandmark** - Unique logos\n• **LogoAI** - Brand identity\n\nTell me about your brand style and I'll recommend the best option!"
  },
  {
    keywords: ["photo editing", "edit photos", "photoshop"],
    reply: " AI photo editing tools:\n\n• **Adobe Photoshop AI** - Generative fill\n• **Remini** - Photo enhancer\n• **Topaz Labs** - Quality upscaling\n• **Luminar Neo** - Creative editing\n• **Clipdrop** - Background removal\n• **Picsart AI** - Mobile editing\n\nWhat type of photo edits do you need?"
  },

  // Video & Animation
  {
    keywords: ["video", "video generator", "create video", "video editing"],
    reply: "🎬 Top AI video tools:\n\n• **Runway ML** - Professional editing\n• **Pika Labs** - Text to video\n• **Synthesia** - AI avatars\n• **HeyGen** - Video translation\n• **InVideo AI** - Marketing videos\n• **CapCut AI** - Mobile editing\n• **Pictory** - Long to short form\n\nWhat kind of videos are you creating?"
  },
  {
    keywords: ["ai avatar", "virtual presenter", "talking head"],
    reply: "👤 AI avatar tools:\n\n• **Synthesia** - 60+ avatars\n• **HeyGen** - Custom avatars\n• **Colossyan** - Corporate videos\n• **Elai.io** - Avatar creator\n• **D-ID** - Talking photos\n\nNeed a presenter for training, marketing, or social media?"
  },
  {
    keywords: ["animation", "animated video", "motion graphics"],
    reply: "✨ AI animation tools:\n\n• **Runway ML** - Motion editing\n• **Pika Labs** - Animate images\n• **Kaiber** - Music videos\n• **Deforum** - Stable Diffusion animations\n• **Animaker AI** - DIY animations\n\nWhat's your animation project about?"
  },
  {
    keywords: ["youtube", "yt", "content creator"],
    reply: "📺 AI tools for YouTubers:\n\n• **Pictory AI** - Video summaries\n• **TubeBuddy** - SEO optimization\n• **VidIQ** - Channel growth\n• **Opus Clip** - Shorts from long videos\n• **Descript** - Video editing\n• **Murf AI** - Voiceovers\n\nGrowing your channel or editing videos?"
  },

  // Music & Audio
  {
    keywords: ["music", "song", "audio", "music generation"],
    reply: "🎵 Best AI music tools:\n\n• **Suno AI** - Full songs with lyrics\n• **Udio** - High-quality music\n• **Soundraw** - Royalty-free music\n• **AIVA** - Classical composition\n• **Boomy** - Quick song creation\n• **Mubert** - Electronic music\n\nMaking background music or full songs?"
  },
  {
    keywords: ["voiceover", "voice generator", "text to speech", "tts"],
    reply: "🗣️ Top AI voice generators:\n\n• **ElevenLabs** - Most realistic\n• **Murf AI** - Studio quality\n• **Play.ht** - 600+ voices\n• **WellSaid** - Professional\n• **Resemble AI** - Voice cloning\n• **Speechify** - Listening\n\nNeed voice for videos, podcasts, or accessibility?"
  },
  {
    keywords: ["podcast", "podcasting"],
    reply: "🎙️ AI tools for podcasters:\n\n• **Descript** - Edit audio with text\n• **Adobe Podcast** - Audio enhancement\n• **Riverside AI** - Recording & editing\n• **Podcastle** - Podcast creation\n• **Auphonic** - Audio mastering\n\nStarting a podcast or improving production?"
  },

  // Productivity & Organization
  {
    keywords: ["productivity", "get things done", "task management"],
    reply: "⚡ Best productivity AI tools:\n\n• **Notion AI** - Workspace assistant\n• **Motion AI** - Auto-scheduling\n• **Reclaim AI** - Calendar optimization\n• **Taskade** - AI task management\n• **Mem AI** - Note-taking\n• **Superhuman** - AI email\n• **Clockwise** - Calendar management\n\nWhat's your biggest productivity challenge?"
  },
  {
    keywords: ["note taking", "notes", "meeting notes"],
    reply: "📝 AI note-taking tools:\n\n• **Notion AI** - Smart notes\n• **Mem AI** - Connected thoughts\n• **Reflect** - Graph notes\n• **Otter.ai** - Meeting transcripts\n• **Fireflies.ai** - Call summaries\n• **Grain** - Video highlights\n\nTaking personal notes or meeting minutes?"
  },
  {
    keywords: ["meeting", "zoom", "google meet", "virtual meetings"],
    reply: "🤝 AI meeting assistants:\n\n• **Otter.ai** - Transcription\n• **Fireflies.ai** - Note-taking\n• **Fathom** - Meeting summaries\n• **tl;dv** - Video highlights\n• **Sembly AI** - Action items\n• **MeetGeek** - Auto-recording\n\nWant help with scheduling, notes, or follow-ups?"
  },
  {
    keywords: ["calendar", "schedule", "planning"],
    reply: "📅 AI calendar tools:\n\n• **Reclaim AI** - Smart scheduling\n• **Motion** - Auto-planning\n• **Clockwise** - Focus time\n• **Calendly AI** - Meeting links\n• **Vimcal** - Fast calendar\n\nTrying to optimize your schedule?"
  },

  // Business & Sales
  {
    keywords: ["business", "company", "startup"],
    reply: "💼 AI tools for business:\n\n• **Jasper AI** - Content marketing\n• **Copy.ai** - Sales copy\n• **HubSpot AI** - CRM automation\n• **Salesforce Einstein** - Sales AI\n• **Gong.io** - Sales intelligence\n• **Clerk AI** - Data analysis\n• **Forethought** - Customer support\n\nWhat aspect of your business needs AI?"
  },
  {
    keywords: ["sales", "selling", "sales copy"],
    reply: "📈 AI sales tools:\n\n• **Copy.ai** - Sales emails\n• **Jasper** - Pitch decks\n• **Gong.io** - Call analysis\n• **Outplay** - Sales engagement\n• **Lavender** - Email optimization\n• **Regie.ai** - Personalization\n\nNeed help with prospecting, emails, or pitches?"
  },
  {
    keywords: ["customer service", "support", "help desk"],
    reply: "🛟 AI customer service tools:\n\n• **Intercom AI** - Chatbots\n• **Zendesk AI** - Ticket routing\n• **Forethought** - Support automation\n• **Crisp** - Live chat AI\n• **Tidio** - Ecommerce support\n• **Ada** - Customer service bots\n\nSetting up support for your business?"
  },
  {
    keywords: ["presentation", "ppt", "slides", "pitch deck"],
    reply: "📊 Best AI presentation tools:\n\n• **Tome AI** - Narrative presentations\n• **Gamma AI** - Beautiful decks\n• **Beautiful AI** - Templates\n• **SlidesAI** - Google Slides add-on\n• **Plus AI** - PowerPoint assistant\n• **Decktopus** - AI pitch decks\n\nCreating a business pitch or educational content?"
  },

  // Education & Learning
  {
    keywords: ["student", "study", "homework", "learning"],
    reply: "📚 AI tools for students:\n\n• **ChatGPT** - Homework help\n• **Grammarly** - Writing assistant\n• **Notion AI** - Study notes\n• **Quizlet AI** - Flashcards\n• **Khanmigo** - Khan Academy AI\n• **Elicit** - Research assistant\n• **Consensus** - Paper search\n\nWhat subject are you studying?"
  },
  {
    keywords: ["research", "academic", "papers", "journal"],
    reply: "🔬 AI research tools:\n\n• **Elicit** - Literature review\n• **Consensus** - Paper search\n• **Scite.ai** - Citation analysis\n• **ResearchRabbit** - Paper discovery\n• **ChatPDF** - PDF interaction\n• **Explainpaper** - Paper explanations\n• **Connected Papers** - Research maps\n\nWorking on a research paper or literature review?"
  },
  {
    keywords: ["learn ai", "learn machine learning", "ai course"],
    reply: "🧠 Learning AI/ML:\n\n• **DeepLearning.AI** - Andrew Ng courses\n• **Fast.ai** - Practical deep learning\n• **Kaggle** - Competitions & learning\n• **Hugging Face** - NLP courses\n• **Google AI** - Free resources\n• **Microsoft Learn** - AI training\n\nStarting from scratch or have programming experience?"
  },

  // Specialized & Niche Tools
  {
    keywords: ["resume", "cv", "job application", "cover letter"],
    reply: "📄 Best AI resume tools:\n\n• **Kickresume** - Professional resumes\n• **Rezi AI** - ATS-optimized\n• **Resume.io** - Templates\n• **Jobscan** - Match jobs\n• **Teal** - Resume builder\n• **ChatGPT** - Customize for jobs\n\nNeed a new resume or optimizing for a specific job?"
  },
  {
    keywords: ["legal", "law", "contract", "legal document"],
    reply: "⚖️ AI legal tools:\n\n• **DoNotPay** - Consumer rights\n• **Spellbook** - Contract review\n• **Lexis+ AI** - Legal research\n• **Harvey AI** - Law firm AI\n• **Casetext** - Legal analysis\n• **Ironclad** - Contract management\n\nReviewing contracts or need legal research?"
  },
  {
    keywords: ["health", "medical", "healthcare", "wellness"],
    reply: "🏥 AI health tools:\n\n• **Ada Health** - Symptom checker\n• **K Health** - AI primary care\n• **Babylon** - Health assessments\n• **Fi** - Mental health\n• **MySugr** - Diabetes management\n• **FitnessAI** - Workout plans\n\nNote: Always consult healthcare professionals for medical advice!"
  },
  {
    keywords: ["fitness", "workout", "exercise", "gym"],
    reply: "💪 AI fitness tools:\n\n• **Fitbod** - Workout plans\n• **Future** - AI coaching\n• **Whoop** - Recovery tracking\n• **Tempo** - Home workouts\n• **Freeletics** - Training AI\n• **Joggo** - Running plans\n\nLooking for workout plans or tracking progress?"
  },
  {
    keywords: ["cooking", "recipe", "food", "meal planning"],
    reply: "🍳 AI cooking tools:\n\n• **Whisk** - Recipe planning\n• **Plant Jammer** - Veggie recipes\n• **Mealime** - Meal plans\n• **SuperCook** - Use what you have\n• **ChefGPT** - Recipe generator\n• **Forkful** - Cooking assistant\n\nWhat would you like to cook today?"
  },
  {
    keywords: ["travel", "trip", "vacation", "holiday"],
    reply: "✈️ AI travel tools:\n\n• **Roam Around** - Itineraries\n• **GuideGeek** - Travel assistant\n• **Wonderplan** - Trip planning\n• **Layla AI** - Flight booking\n• **Hopper** - Price prediction\n• **Tripnotes** - Travel guides\n\nPlanning a vacation or business trip?"
  },
  {
    keywords: ["real estate", "property", "house", "rental"],
    reply: "🏠 AI real estate tools:\n\n• **Zillow AI** - Home estimates\n• **Skyline AI** - Investment analysis\n• **HouseCanary** - Property data\n• **Reali** - Buying/selling\n• **Rentberry** - Rental platform\n\nBuying, selling, or investing in property?"
  },
  {
    keywords: ["dating", "tinder", "bumble", "dating app", "dating ai"],
    reply: "💘 AI dating tools:\n\n• **Rizz AI** - Conversation starters\n• **YourMove AI** - Profile optimization\n• **Wing AI** - Dating assistant\n• **LoveGenius** - Better bios\n• **Photofeeler** - Photo feedback\n• **ChatGPT** - Date ideas\n\nNeed help with bios, openers, or date planning?"
  },
  {
    keywords: ["tinder bio", "dating bio", "profile bio"],
    reply: "✨ Creating a great dating bio:\n\n• **Rizz AI** - Generate openers\n• **LoveGenius** - Optimize profile\n• **ChatGPT** - Bio ideas\n• **Photofeeler** - Photo selection\n\nPro tip: Be authentic and specific about your interests!"
  },

  // Recommendations & Help
  {
    keywords: ["recommend", "suggestion", "what should i use", "best tool for"],
    reply: "🎯 I'd love to recommend tools! Tell me:\n\n1. What you want to do (write, design, code, etc.)\n2. Your budget (free, paid, enterprise)\n3. Your skill level (beginner, intermediate, pro)\n\nShare these details and I'll give personalized recommendations!"
  },
  {
    keywords: ["free", "free tools", "no cost"],
    reply: "💰 Free AI tools by category:\n\n• Writing: ChatGPT, Claude, Copy.ai (free tier)\n• Coding: Codeium, Tabnine free, Replit\n• Design: Canva, Playground AI\n• Images: Leonardo AI, Bing Image Creator\n• Video: CapCut, Runway free tier\n• Music: Suno free, Udio free\n• Productivity: Notion free, Taskade\n\nWhich category interests you?"
  },
  {
    keywords: ["paid", "premium", "best paid", "worth paying"],
    reply: "💎 Premium AI tools worth the investment:\n\n• Midjourney - Best image quality\n• GitHub Copilot - Developer essential\n• Jasper - Content marketing\n• ElevenLabs - Premium voices\n• Runway - Professional video\n• Notion AI - Team productivity\n\nWhat's your budget and use case?"
  },
  {
    keywords: ["compare", "vs", "versus", "difference"],
    reply: "🤔 Common AI tool comparisons:\n\n• ChatGPT vs Claude\n• Midjourney vs DALL-E\n• GitHub Copilot vs Codeium\n• Jasper vs Copy.ai\n• Synthesia vs HeyGen\n• Suno vs Udio\n\nWhich two tools would you like me to compare?"
  },

  // Help & Support
  {
    keywords: ["help", "assist", "support", "can you help"],
    reply: "🤝 Of course! I can help you with:\n\n• Finding AI tools for specific tasks\n• Comparing different AI tools\n• Learning about AI capabilities\n• Getting started with AI\n• Tips and best practices\n\nWhat do you need assistance with?"
  },
  {
    keywords: ["how to use", "tutorial", "guide", "learn to use"],
    reply: "📖 Learning resources:\n\nMost AI tools have:\n• Official documentation\n• YouTube tutorials\n• Discord communities\n• Reddit communities\n• Blog tutorials\n\nWhich specific tool do you want to learn?"
  },
  {
    keywords: ["pricing", "cost", "price", "subscription"],
    reply: "💰 General pricing patterns:\n\n• Free tier: Limited features/usage\n• Pro: $10-30/month\n• Business: $30-100/month\n• Enterprise: Custom pricing\n\nMany tools offer annual discounts. Want pricing for a specific category?"
  },
  {
    keywords: ["api", "integration", "developer api"],
    reply: "🔌 Popular AI APIs:\n\n• OpenAI API - GPT-4, DALL-E\n• Anthropic API - Claude\n• ElevenLabs - Voice generation\n• Replicate - Open source models\n• Stability AI - Image generation\n• Hugging Face - Various models\n\nBuilding something specific?"
  },

  // Future & Trends
  {
    keywords: ["future of ai", "ai trends", "what's new", "latest ai"],
    reply: "🔮 Current AI trends:\n\n• Multimodal models (text+image+video)\n• Open source models (Llama, Mistral)\n• AI agents & automation\n• Real-time generation\n• Smaller, efficient models\n• Edge AI (on-device)\n\nWant to know about specific developments?"
  },
  {
    keywords: ["open source", "opensource", "free models"],
    reply: "🌐 Popular open source AI:\n\n• Llama 2/3 - Meta's LLM\n• Mistral - Efficient models\n• Stable Diffusion - Image generation\n• Whisper - Speech recognition\n• LangChain - AI development\n• Ollama - Run locally\n\nSelf-hosting or development?"
  },

  // Conversation Flow
  {
    keywords: ["thanks", "thank you", "thx", "appreciate it"],
    reply: "😊 You're very welcome! I'm glad I could help. Feel free to ask if you need anything else about AI tools!"
  },
  {
    keywords: ["bye", "goodbye", "see you", "cya", "farewell"],
    reply: "👋 Goodbye! Thanks for chatting with Aiwedia. Come back anytime when you need to discover more amazing AI tools. Have a great day!"
  },
  {
    keywords: ["who created you", "who made you", "your creator"],
    reply: "🤖 I'm the Aiwedia AI assistant, created to help people discover and learn about AI tools. My knowledge base is carefully curated to provide accurate and helpful information about the AI tool landscape!"
  },
  {
    keywords: ["what can you do", "capabilities", "features"],
    reply: "✨ I can help you with:\n\n• Finding AI tools for any task\n• Comparing similar tools\n• Explaining AI concepts\n• Recommending based on needs\n• Sharing tips and best practices\n• Keeping up with AI trends\n\nWhat would you like to explore today?"
  },
  {
    keywords: ["joke", "funny", "humor", "laugh"],
    reply: "😄 Why did the AI go to therapy? \n\nIt had too many emotional prompts! \n\nWant another one or should we get back to finding AI tools?"
  }
];

const seedDB = async () => {
  try {
    await BotReply.deleteMany();
    await BotReply.insertMany(botData);

    console.log(`✅ Bot data seeded successfully with ${botData.length} responses!`);
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();