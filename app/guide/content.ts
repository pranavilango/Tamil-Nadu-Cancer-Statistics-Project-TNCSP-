// --- File: app/guide/content.ts ---

export type Language = 'en' | 'ta';

export const guideContent = {
  en: {
    ui: {
      toggleLabel: "தமிழ்",
      onThisPage: "On This Page",
      guideSections: "Guide Sections",
      radiologistVerified: "Radiologist Verified",
      loading: "Loading Guide...",
      infographic: "Infographic",
    },
    sections: {
      "Introduction": { label: "Introduction", description: "Understanding the basics of one of the most complex diseases." },
      "Disease Mechanism": { label: "Disease Mechanism", description: "The biology behind cancer—explained simply and clearly." },
      "Causative Agents": { label: "Causative Agents", description: "A look at the genetic and environmental factors that trigger this disease." },
      "Stages of Cancer": { label: "Stages of Cancer", description: "From early signs to advanced spread—why staging is critical." },
      "Symptoms": { label: "Symptoms", description: "Spotting signs early can save a life. Learn what to watch for." },
      "Detection": { label: "Detection", description: "When found early, cancer can be treated more effectively." },
      "Stigmas": { label: "Stigmas", description: "The battle beyond the body. Overcoming fear and misinformation." },
      "Lifestyle Changes": { label: "Lifestyle Changes", description: "How everyday habits shape your risk—and your future." },
      "Conclusion": { label: "Conclusion", description: "Building a future where awareness leads to action and hope." },
    },
  },
  ta: {
    ui: {
      toggleLabel: "English",
      onThisPage: "இப்பக்கத்தில்",
      guideSections: "வழிகாட்டி பிரிவுகள்",
      radiologistVerified: "கதிரியக்க நிபுணரால் சரிபார்க்கப்பட்டது",
      loading: "வழிகாட்டி ஏற்றப்படுகிறது...",
      infographic: "தகவல் படம்",
    },
    sections: {
      "Introduction": { label: "அறிமுகம்", description: "மிகவும் சிக்கலான நோய்களில் ஒன்றின் அடிப்படைகளைப் புரிந்துகொள்ளுதல்." },
      "Disease Mechanism": { label: "நோய் பொறிமுறை", description: "புற்றுநோயின் பின்னால் உள்ள உயிரியல் - எளிமையாகவும் தெளிவாகவும்." },
      "Causative Agents": { label: "காரணிகள்", description: "இந்த நோயைத் தூண்டும் மரபணு மற்றும் சுற்றுச்சூழல் காரணிகள்." },
      "Stages of Cancer": { label: "புற்றுநோய் நிலைகள்", description: "ஆரம்ப அறிகுறிகள் முதல் பரவல் வரை - நிலைகளை அறிவது ஏன் முக்கியம்." },
      "Symptoms": { label: "அறிகுறிகள்", description: "அறிகுறிகளை முன்கூட்டியே கண்டறிவது உயிரைக் காப்பாற்றும். எதை கவனிக்க வேண்டும்?" },
      "Detection": { label: "கண்டறிதல்", description: "முன்கூட்டியே கண்டறியப்பட்டால், புற்றுநோயை மிகவும் திறம்பட குணப்படுத்த முடியும்." },
      "Stigmas": { label: "சமூகக் களங்கங்கள்", description: "உடலுக்கு அப்பாற்பட்ட போர். பயம் மற்றும் தவறான தகவல்களை வெல்லுதல்." },
      "Lifestyle Changes": { label: "வாழ்க்கை முறை", description: "தினசரி பழக்கவழக்கங்கள் உங்கள் ஆபத்தையும் - எதிர்காலத்தையும் எவ்வாறு வடிவமைக்கின்றன." },
      "Conclusion": { label: "முடிவுரை", description: "விழிப்புணர்வு நடவடிக்கைக்கும் நம்பிக்கைக்கும் வழிவகுக்கும் எதிர்காலத்தை உருவாக்குதல்." },
    },
  }
};

// Translations for the Right Sidebar headings (ID to Tamil Title)
export const headingTranslations: { [key: string]: string } = {
  // Introduction
  "knowledge-gap": "விழிப்புணர்வு இடைவெளி",
  "cancer-isnt-rare": "தமிழ்நாட்டின் தரவுப் பார்வை",
  "why-this-guide-exists": "எங்கள் நோக்கம்",
  "knowledge-is-power": "உங்கள் முதல் படி",
  // Disease Mechanism
  "from-healthy-to-tumor": "ஆரோக்கியமான செல் முதல் கட்டி வரை",
  "how-cancer-disrupts": "புற்றுநோய் உடலை எவ்வாறு பாதிக்கிறது",
  "root-cause-mutations": "முக்கிய காரணம்: மரபணு மாற்றங்கள்",
  "one-name-many-diseases": "ஒரு பெயர், பல நோய்கள்",
  // Causative Agents
  "core-issue": "முக்கிய பிரச்சனை: டிஎன்ஏ பாதிப்பு",
  "genetics": "மரபியல் & பரம்பரை",
  "environmental-factors": "சுற்றுச்சூழல் காரணிகள்",
  "lifestyle-choices": "வாழ்க்கை முறை தேர்வுகள்",
  // Stages
  "why-staging-matters": "நிலைகளை அறிவது ஏன் அவசியம்?",
  "tnm-system": "TNM அமைப்பு",
  "stages-at-a-glance": "நிலைகளின் சுருக்கம்",
  // Symptoms
  "general-symptoms": "பொதுவான அறிகுறிகள்",
  "type-specific-signs": "வகை சார்ந்த எச்சரிக்கை அறிகுறிகள்",
  "dont-ignore-signs": "அறிகுறிகளை அலட்சியப்படுத்தாதீர்கள்",
  // Detection
  "pillars-of-detection": "கண்டறிதலின் தூண்கள்",
  "routine-screenings": "வழக்கமான பரிசோதனைகள்",
  "dont-wait": "எச்சரிக்கைக்கு காத்திருக்க வேண்டாம்",
  // Stigmas
  "the-silent-burden": "அமைதியான சுமை",
  "breaking-the-walls": "தடைகளை உடைத்தல்",
  "change-starts-with-us": "மாற்றம் நம்மிடமிருந்து தொடங்குகிறது",
  // Lifestyle
  "key-pillars": "தடுப்பு முறையின் தூண்கள்",
  "other-critical-factors": "பிற முக்கிய காரணிகள்",
  "prevention-starts-with-you": "தடுப்பு உன்னிடமிருந்து தொடங்குகிறது",
  // Conclusion
  "key-takeaways": "நமது பாதை",
  "be-the-change": "மாற்றமாக இருங்கள்",
};