/* ==========================================================================
   🎉 APPA'S 50TH BIRTHDAY - JAVASCRIPT CONFIGURATION & LOGIC
   ==========================================================================
   HOW TO EDIT:
   All editable details (Names, Milestones, Photos, Reasons, Letter) are right
   here in the CONFIG object below. You don't need to touch anything else!
   ========================================================================== */

const CONFIG = {
  // --- Personal Details ---
  fatherName: "Sridhar",
  nickname: "Appa",
  senderName: "Sivesh",
  birthdayDate: "October 3",
  age: 50,

  // --- Tamil & English Hero Headings ---
  hero: {
    badge: "✨ Golden Jubilee Celebration • 50 Years of Awesome ✨",
    tamilGreeting: "இனிய 50வது பிறந்த நாள் வாழ்த்துக்கள் அப்பா!",
    tamilPhonetic: "Iniya 50-vadhu Pirandha Naal Vazhthukkal, Appa!",
    mainHeading: "Happy 50th Birthday,",
    subtitle: "Fifty incredible years of wisdom, unconditional love, endless sacrifices, and legendary dad jokes. Today we celebrate our greatest hero!",
    dateBadge: "3rd October • Half a Century of Greatness"
  },

  // --- Section 2: His Story (Milestones) ---
  timeline: [
    {
      milestone: "Milestone 1",
      title: "The Legend is Born",
      tamil: "ஒரு நாயகன் பிறக்கிறார்",
      desc: "A bright-eyed, smiling boy entered the world on 3rd October, destined to bring boundless warmth, joy, and laughter to everyone around him."
    },
    {
      milestone: "Milestone 2",
      title: "The Hustle & Ambition",
      tamil: "கடின உழைப்பும் கனவுகளும்",
      desc: "Mastering academics, taking on early responsibilities, and working tirelessly with relentless dedication to build a strong foundation for the future."
    },
    {
      milestone: "Milestone 3",
      title: "A Golden Partnership",
      tamil: "இல்லற வாழ்வின் புதிய தொடக்கம்",
      desc: "Finding his soulmate, tying the knot, and beginning a beautiful journey of building a warm, loving home filled with respect and happiness."
    },
    {
      milestone: "Milestone 4",
      title: "Becoming 'Appa' to Sivesh",
      tamil: "அப்பா என்ற உன்னத பட்டம்",
      desc: "The proudest, most emotional day — holding me for the very first time. From that day on, his whole universe revolved around our family."
    },
    {
      milestone: "Milestone 5",
      title: "The Unshakeable Family Pillar",
      tamil: "எங்கள் குடும்பத்தின் தூண்",
      desc: "Chief problem solver, best road-trip driver, master filter-coffee brewer, and the calm anchor of our entire household."
    },
    {
      milestone: "Milestone 6",
      title: "50 & Fabulous — The Golden Jubilee!",
      tamil: "பொன் விழா கொண்டாட்டம்!",
      desc: "Half a century of unforgettable memories, infinite love, and inspiring everyone around him. Still as sharp, energetic, handsome, and loving as ever!"
    }
  ],

  // --- Section 3: Photo Gallery Captions ---
  // Images correspond to images/photo1.jpg through photo12.jpg
  gallery: [
    {
      src: "images/photo1.jpg",
      title: "The Trademark Smile",
      tamil: "மகிழ்ச்சியான புன்னகை",
      desc: "A smile that brightens any room and washes away all worries."
    },
    {
      src: "images/photo2.jpg",
      title: "Pure Grace & Style",
      tamil: "நேர்த்தி மற்றும் கம்பீரம்",
      desc: "Nobody carries traditional elegance and timeless charm quite like Appa."
    },
    {
      src: "images/photo3.jpg",
      title: "The Pillar of Our World",
      tamil: "குடும்பத்தின் பலம்",
      desc: "Always guiding us, always protecting us, always leading from the front."
    },
    {
      src: "images/photo4.jpg",
      title: "Unconditional Warmth",
      tamil: "அன்பின் வடிவம்",
      desc: "The heart of every celebration and the soul of our household."
    },
    {
      src: "images/photo5.jpg",
      title: "Golden Moments Together",
      tamil: "மறக்க முடியாத தருணங்கள்",
      desc: "Memories that we will cherish for a lifetime and beyond."
    },
    {
      src: "images/photo6.jpg",
      title: "Heartfelt Laughter",
      tamil: "மனம் திறந்த சிரிப்பு",
      desc: "Capturing the happiest, most genuine moments with the people who matter most."
    },
    {
      src: "images/photo7.jpg",
      title: "Always Our Inspiration",
      tamil: "என்றும் எங்கள் வழிகாட்டி",
      desc: "Teaching through action, kindness, and unwavering integrity."
    },
    {
      src: "images/photo8.jpg",
      title: "50 Years of Being Awesome",
      tamil: "50 பொற்கால ஆண்டுகள்",
      desc: "Cheers to 50 years of greatness and many more golden decades ahead!"
    },
    {
      src: "images/photo9.jpg",
      title: "Our Entire World",
      tamil: "எங்கள் உலகம்",
      desc: "Standing strong together — our family's greatest anchor and guardian."
    },
    {
      src: "images/photo10.jpg",
      title: "Journey of Companionship",
      tamil: "அன்பின் பயணம்",
      desc: "Appa and Amma — partners in every journey, blessing our lives with boundless love."
    },
    {
      src: "images/photo11.jpg",
      title: "The Favorite Among Kids",
      tamil: "குடும்பத்தின் பொக்கிஷம்",
      desc: "Always the warmest center of laughter, storytelling, and joyful gatherings."
    },
    {
      src: "images/photo12.jpg",
      title: "Festive Joy & Warmth",
      tamil: "மகிழ்ச்சியான திருநாள்",
      desc: "Cherished celebrations and timeless family traditions that make a house a home."
    }
  ],

  // --- Section 4: 50 Reasons We Love You ---
  // (First 10 show upfront; clicking 'Show More' displays all 50!)
  reasons: [
    { num: 1, text: "Your reassuring words: 'Paathukalam, don't worry' (பாத்துக்கலாம்) that instantly fixes anything.", tamil: "பாத்துக்கலாம் என்ற நம்பிக்கை" },
    { num: 2, text: "How you always make sure everyone else has eaten their meal before you sit down.", tamil: "அன்புடன் உபசரிக்கும் குணம்" },
    { num: 3, text: "Your legendary dad jokes that you always chuckle at before even finishing the punchline!", tamil: "உங்கள் சிரிப்பூட்டும் நகைச்சுவைகள்" },
    { num: 4, text: "The unbeatable aroma and perfection of your morning South Indian filter coffee.", tamil: "அப்பாவின் கைவண்ண பில்டர் காபி" },
    { num: 5, text: "Waking up early on road trips, putting on classic Ilaiyaraaja songs, and driving with utmost confidence.", tamil: "இளையராஜா பாடல்களுடன் பயணம்" },
    { num: 6, text: "How you quietly sacrifice your own wishes without ever mentioning it, just to give us the best.", tamil: "உங்கள் தியாகங்கள்" },
    { num: 7, text: "Answering every phone call within two rings, no matter how busy you are at work.", tamil: "எப்போதும் கிடைக்கும் துணை" },
    { num: 8, text: "The warm, proud look in your eyes every time I achieved even the smallest victory.", tamil: "உங்கள் பெருமித பார்வை" },
    { num: 9, text: "Teaching me that integrity, honesty, and kindness matter more than anything else in life.", tamil: "நேர்மையும் நற்பண்புகளும்" },
    { num: 10, text: "Being our rock, our compass, and our greatest cheerleader every single day.", tamil: "எங்கள் குடும்பத்தின் ஆதாரம்" },
    // Reasons 11 to 50:
    { num: 11, text: "The way you check car tires and lights three times before any long journey.", tamil: "அக்கறையான பாதுகாப்பு" },
    { num: 12, text: "How you bargain politely with shopkeepers and still end up becoming good friends with them.", tamil: "அனைவருடனும் இனிமையான நட்பு" },
    { num: 13, text: "Always having a screwdriver, torch, or spare battery handy when anything breaks.", tamil: "எதையும் சரிசெய்யும் திறமை" },
    { num: 14, text: "Your calm patience when explaining difficult life decisions without ever raising your voice.", tamil: "பொறுமையான வழிகாட்டல்" },
    { num: 15, text: "Never complaining, even when you are exhausted after a very long day.", tamil: "சளைக்காத உழைப்பு" },
    { num: 16, text: "Your sweet tooth and sneaking a piece of Mysore Pak or Halwa when Amma isn't watching!", tamil: "ரகசிய இனிப்பு பிரியம்" },
    { num: 17, text: "The unmatched style and poise when you wear a silk Veshti & Shirt for festivals.", tamil: "பட்டு வேட்டியில் கம்பீரம்" },
    { num: 18, text: "How you remember every family birthday, anniversary, and important date by heart.", tamil: "சிறப்பான நினைவாற்றல்" },
    { num: 19, text: "Your deep respect and caring affection towards elders and relatives.", tamil: "பெரியவர்களிடம் மரியாதை" },
    { num: 20, text: "Encouraging me to aim high and dream without boundaries.", tamil: "உயர்ந்த கனவுகளுக்கு ஊக்கம்" },
    { num: 21, text: "Standing by me when I made mistakes, focusing on lessons instead of scolding.", tamil: "தவறுகளை மன்னித்த பெருந்தன்மை" },
    { num: 22, text: "The warm tight hug that makes the entire world feel safe.", tamil: "பாதுகாப்பான அணைப்பு" },
    { num: 23, text: "Your genuine curiosity to learn new technology, apps, and gadgets.", tamil: "புதியவற்றை அறியும் ஆர்வம்" },
    { num: 24, text: "How you remember people by name and greet the watchman, cab driver, and neighbors alike.", tamil: "சமத்துவமான மனிதநேயம்" },
    { num: 25, text: "Making festival mornings at home feel so holy, festive, and special.", tamil: "பண்டிகை கால மகிழ்ச்சி" },
    { num: 26, text: "Your trademark morning greetings with beautiful flower photos wishing everyone a blessed day!", tamil: "அழகான காலை வணக்கங்கள்" },
    { num: 27, text: "The way you hold Amma's hand while crossing busy roads.", tamil: "அம்மா மீது மாறாத அன்பு" },
    { num: 28, text: "Inspiring me with your discipline, punctuality, and work ethic.", tamil: "நேரந்தவறாமை மற்றும் ஒழுக்கம்" },
    { num: 29, text: "Your infectious hearty laugh when watching classic comedy scenes.", tamil: "கவுண்டமணி, செந்தில் சிரிப்பு" },
    { num: 30, text: "Always ordering extra food because 'someone might still be hungry'.", tamil: "தாராளமான உள்ளம்" },
    { num: 31, text: "Teaching me how to handle money wisely while remaining generous.", tamil: "பொருளாதார விவேகம்" },
    { num: 32, text: "Checking if I reached home safely every time I stepped out.", tamil: "பாதுகாப்பு பற்றிய அக்கறை" },
    { num: 33, text: "Your unwavering loyalty to your childhood friends.", tamil: "நீடித்த நட்பு" },
    { num: 34, text: "The way you light the evening deepam with such reverence and peace.", tamil: "ஆன்மீக அமைதி" },
    { num: 35, text: "Your quiet generosity — helping people without ever showing off.", tamil: "ரகசிய தான குணம்" },
    { num: 36, text: "Knowing the exact shortcut through every Chennai / Tamil Nadu street without Google Maps.", tamil: "ஊர் வழிகள் விரல் நுனியில்" },
    { num: 37, text: "Telling stories from your college days with that nostalgic twinkle in your eye.", tamil: "கல்லூரி கால நினைவுகள்" },
    { num: 38, text: "Never letting family stress reach me when I was preparing for exams.", tamil: "படிப்புக்கு முழு ஆதரவு" },
    { num: 39, text: "Your impeccable handwriting that looks like a calligraphy print.", tamil: "அழகான கையெழுத்து" },
    { num: 40, text: "The pride in your voice when you introduce me to your colleagues and friends.", tamil: "நண்பர்களிடம் என்னை அறிமுகம் செய்த விதம்" },
    { num: 41, text: "Always celebrating other people's successes with an open, happy heart.", tamil: "பிறர் நலம் விரும்பும் மனம்" },
    { num: 42, text: "Teaching me how to be humble in victory and gracious in defeat.", tamil: "பணிவான நடத்தை" },
    { num: 43, text: "Your Sunday morning routines: newspaper, tea, and calm silence.", tamil: "ஞாயிறு காலை அமைதி" },
    { num: 44, text: "Being the strongest pillar whenever our family faced any storm.", tamil: "புயலிலும் சாயாத மரம்" },
    { num: 45, text: "How you treasure old photographs, handwritten notes, and childhood drawings.", tamil: "நினைவுகளை போற்றும் குணம்" },
    { num: 46, text: "Never letting anyone in the house go to sleep upset or angry.", tamil: "சமாதானத்தின் தூதர்" },
    { num: 47, text: "Your unmatched ability to stay calm and level-headed during emergencies.", tamil: "பதற்றமில்லா மனவலிமை" },
    { num: 48, text: "Showing me what it truly means to be a loving husband and father.", tamil: "சிறந்த குடும்பத் தலைவர்" },
    { num: 49, text: "Being my very first superhero, and still the one I look up to every day.", tamil: "என் முதல் சூப்பர் ஹீரோ" },
    { num: 50, text: "Simply being YOU, Appa — irreplaceable, unmatched, and loved beyond measure!", tamil: "எங்கள் அன்பான அப்பா!" }
  ],

  // --- Section 5: A Letter From Me (Typewriter Animated Letter) ---
  letter: {
    salutationEnglish: "Dear Appa,",
    salutationTamil: "என் அன்பான அப்பாவுக்கு,",
    body: `Happy 50th Birthday, Appa! (பிறந்த நாள் வாழ்த்துக்கள் அப்பா!)

Today marks half a century of a life lived with extraordinary dignity, relentless hard work, and endless love. Turning 50 is not just a milestone on a calendar — it is 50 golden years of being the rock our entire family leans on.

Thank you for being my mentor, my best friend, my patient teacher, and the finest example of what a good human being should be. Everything good in me today is a reflection of your guidance and unconditional love.

On your 50th birthday, my only prayer is for your vibrant health, complete peace of mind, endless laughter, and many more decades of golden moments together. 

Stay the same fun, loving, coffee-loving superhero you have always been!`,
    signOff: "With boundless love, gratitude, and pride,",
    senderEnglish: "Sivesh",
    senderTamil: "அன்புடன் உங்கள் மகன், சிவேஷ்"
  },

  // --- Section 6: Pre-seeded Wishes on Wall ---
  initialWishes: [
    {
      id: "wish-1",
      author: "Sivesh",
      relation: "Proud Son",
      message: "Happy 50th Birthday to the greatest dad in the universe! Thank you for being my hero every single day. Love you Appa! ❤️",
      color: "sticky-gold",
      hearts: 12,
      timestamp: "Today"
    },
    {
      id: "wish-2",
      author: "Amma",
      relation: "Loving Wife",
      message: "இனிய 50வது பிறந்த நாள் வாழ்த்துக்கள்! 50 பொன்னான ஆண்டுகள் போல் இனியும் மகிழ்ச்சியோடு வாழ்வோம். வாழ்க வளமுடன்! 🌸",
      color: "sticky-rose",
      hearts: 15,
      timestamp: "Today"
    },
    {
      id: "wish-3",
      author: "Family & Cousins",
      relation: "Family",
      message: "Golden Jubilee Greetings Sridhar! Wishing you robust health, joy, and peace. Let's celebrate big tonight! 🎉🎂",
      color: "sticky-amber",
      hearts: 8,
      timestamp: "Today"
    },
    {
      id: "wish-4",
      author: "Childhood Friends",
      relation: "Best Buddies",
      message: "Happy 50th macha! You haven't aged a bit since college days. Keep rocking and smiling always! 🌟",
      color: "sticky-cream",
      hearts: 9,
      timestamp: "Today"
    }
  ],

  // --- Section 7: Surprise Modal Details ---
  surprise: {
    trophy: "🏆",
    badgeTamil: "வாழ்நாள் சாதனையாளர் விருது",
    title: "Lifetime Greatest Appa Award!",
    message: "Presented to <strong>Sridhar</strong> on the occasion of his <strong>50th Birthday</strong>.<br><br>For 50 years of boundless patience, unconditional love, selfless sacrifices, and making our family the happiest place on earth.<br><br><em>\"A father is neither an anchor to hold us back, nor a sail to take us there, but a guiding light whose love shows us the way.\"</em>",
    shareText: "Check out this surprise celebration for Appa's 50th Birthday!"
  }
};


/* ==========================================================================
   APPLICATION LOGIC & INTERACTIVE FEATURES
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initHeroBalloons();
  initConfetti();
  initTimeline();
  initGallery();
  initReasons();
  initLetterTypewriter();
  initAudioPlayer();
  initNavigation();
  initScrollAnimations();
});


/* --------------------------------------------------------------------------
   1. HERO FLOATING BALLOONS CANVAS
   -------------------------------------------------------------------------- */
function initHeroBalloons() {
  const canvas = document.getElementById("balloon-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const colors = [
    { main: "rgba(212, 175, 55, 0.45)", highlight: "rgba(255, 240, 180, 0.6)" }, // Gold
    { main: "rgba(155, 27, 48, 0.35)", highlight: "rgba(255, 150, 170, 0.5)" }, // Maroon
    { main: "rgba(243, 229, 171, 0.4)", highlight: "rgba(255, 255, 255, 0.7)" }, // Cream
    { main: "rgba(180, 130, 40, 0.35)", highlight: "rgba(255, 220, 120, 0.5)" }  // Deep Amber
  ];

  const balloons = [];
  const balloonCount = Math.min(22, Math.floor(width / 50));

  for (let i = 0; i < balloonCount; i++) {
    balloons.push({
      x: Math.random() * width,
      y: Math.random() * height + height * 0.1,
      radius: Math.random() * 22 + 18,
      speedY: Math.random() * 0.7 + 0.4,
      wobbleSpeed: Math.random() * 0.02 + 0.01,
      wobbleAmp: Math.random() * 30 + 15,
      wobbleOffset: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      stringLength: Math.random() * 25 + 30
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    frame++;

    balloons.forEach((b) => {
      b.y -= b.speedY;
      const currentX = b.x + Math.sin(frame * b.wobbleSpeed + b.wobbleOffset) * (b.wobbleAmp * 0.03);

      if (b.y + b.radius * 2 < 0) {
        b.y = height + b.radius * 2;
        b.x = Math.random() * width;
      }

      ctx.save();
      // Draw Balloon Body
      ctx.beginPath();
      ctx.ellipse(currentX, b.y, b.radius * 0.85, b.radius, 0, 0, Math.PI * 2);
      ctx.fillStyle = b.color.main;
      ctx.fill();

      // Balloon Highlight
      ctx.beginPath();
      ctx.ellipse(currentX - b.radius * 0.28, b.y - b.radius * 0.35, b.radius * 0.2, b.radius * 0.32, -0.4, 0, Math.PI * 2);
      ctx.fillStyle = b.color.highlight;
      ctx.fill();

      // Balloon Knot
      ctx.beginPath();
      ctx.moveTo(currentX - 3, b.y + b.radius);
      ctx.lineTo(currentX + 3, b.y + b.radius);
      ctx.lineTo(currentX, b.y + b.radius + 5);
      ctx.closePath();
      ctx.fillStyle = b.color.main;
      ctx.fill();

      // Balloon String
      ctx.beginPath();
      ctx.moveTo(currentX, b.y + b.radius + 5);
      ctx.bezierCurveTo(
        currentX + Math.sin(frame * 0.05) * 6,
        b.y + b.radius + b.stringLength * 0.5,
        currentX - Math.sin(frame * 0.05) * 6,
        b.y + b.radius + b.stringLength * 0.8,
        currentX,
        b.y + b.radius + b.stringLength
      );
      ctx.strokeStyle = "rgba(212, 175, 55, 0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}


/* --------------------------------------------------------------------------
   2. LIGHTWEIGHT CANVAS CONFETTI (No external libraries required)
   -------------------------------------------------------------------------- */
let fireConfettiTrigger = null;

function initConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  let particles = [];
  const palette = ["#D4AF37", "#FFD700", "#9B1B30", "#FAF6EE", "#E6C265", "#FF4757", "#2ED573"];

  function addBurst(x, y, count = 80) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 8 + 6,
        color: palette[Math.floor(Math.random() * palette.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.18,
        friction: 0.96,
        opacity: 1,
        decay: Math.random() * 0.008 + 0.004
      });
    }
  }

  fireConfettiTrigger = (x = width / 2, y = height * 0.35, count = 100) => {
    addBurst(x, y, count);
  };

  // Auto trigger confetti burst on page load after a brief sweet delay
  setTimeout(() => {
    addBurst(width * 0.25, height * 0.3, 70);
    addBurst(width * 0.75, height * 0.3, 70);
    setTimeout(() => {
      addBurst(width * 0.5, height * 0.2, 90);
    }, 400);
  }, 700);

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.vx *= p.friction;
      p.vy = p.vy * p.friction + p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > height) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  render();
}


/* --------------------------------------------------------------------------
   3. SECTION 2: TIMELINE POPULATION
   -------------------------------------------------------------------------- */
function initTimeline() {
  const container = document.getElementById("timeline-list");
  if (!container) return;

  container.innerHTML = "";
  CONFIG.timeline.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <span class="timeline-year-badge">${item.milestone || `Milestone ${index + 1}`}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-tamil">${item.tamil}</p>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    container.appendChild(el);
  });
}


/* --------------------------------------------------------------------------
   4. SECTION 3: PHOTO GALLERY & INTERACTIVE LIGHTBOX
   -------------------------------------------------------------------------- */
let currentLightboxIndex = 0;

function initGallery() {
  const galleryGrid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!galleryGrid) return;
  galleryGrid.innerHTML = "";

  CONFIG.gallery.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.setAttribute("data-index", idx);
    card.innerHTML = `
      <div class="gallery-image-wrapper">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-badge">${item.tamil}</span>
          <h4 class="gallery-caption">${item.title}</h4>
          <span class="gallery-zoom-hint">🔍 Tap to expand</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      openLightbox(idx);
    });

    galleryGrid.appendChild(card);
  });

  function openLightbox(idx) {
    currentLightboxIndex = idx;
    updateLightbox();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const item = CONFIG.gallery[currentLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxCaption.innerHTML = `<strong>${item.title}</strong> — <span class="tamil-text">${item.tamil}</span><br><small style="color:rgba(255,255,255,0.7);">${item.desc}</small>`;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${CONFIG.gallery.length}`;
  }

  function showNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % CONFIG.gallery.length;
    updateLightbox();
  }

  function showPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
    updateLightbox();
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  // Close when clicking modal backdrop
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) showNext();
    if (touchEndX > touchStartX + 50) showPrev();
  }, { passive: true });
}


/* --------------------------------------------------------------------------
   5. SECTION 4: 50 REASONS WE LOVE YOU (Interactive Flip Cards)
   -------------------------------------------------------------------------- */
function initReasons() {
  const container = document.getElementById("reasons-grid");
  const toggleBtn = document.getElementById("toggle-reasons-btn");
  if (!container) return;

  container.innerHTML = "";
  let isExpanded = false;

  CONFIG.reasons.forEach((r, idx) => {
    const card = document.createElement("div");
    // Show first 10 initially, hide the rest
    card.className = `reason-card ${idx >= 10 ? "extra-reason" : ""}`;
    card.innerHTML = `
      <div class="reason-card-inner">
        <div class="reason-front">
          <span class="reason-number">#${r.num}</span>
          <span class="reason-preview-tag">Reason To Love Appa</span>
          <span class="reason-flip-hint">👆 Tap to flip</span>
        </div>
        <div class="reason-back">
          <p class="reason-text">${r.text}</p>
          <span class="reason-tamil-phrase">${r.tamil}</span>
        </div>
      </div>
    `;

    // Flip card on click or tap
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    container.appendChild(card);
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      const extraCards = container.querySelectorAll(".extra-reason");
      extraCards.forEach((c) => {
        if (isExpanded) {
          c.classList.add("expanded");
        } else {
          c.classList.remove("expanded");
          c.classList.remove("flipped");
        }
      });

      toggleBtn.innerHTML = isExpanded
        ? `<span>Show Less Reasons ▲</span>`
        : `<span>Show All 50 Reasons We Love You (${CONFIG.reasons.length - 10} more) ▼</span>`;

      if (!isExpanded) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
}


/* --------------------------------------------------------------------------
   6. SECTION 5: A LETTER FROM ME (Typewriter Animation)
   -------------------------------------------------------------------------- */
let letterTypewriterStarted = false;
let typewriterInterval = null;

function initLetterTypewriter() {
  const bodyEl = document.getElementById("letter-body-text");
  const replayBtn = document.getElementById("btn-replay-letter");
  const skipBtn = document.getElementById("btn-skip-letter");
  const letterSection = document.getElementById("letter");

  if (!bodyEl) return;

  const fullText = CONFIG.letter.body;

  function runTypewriter() {
    clearInterval(typewriterInterval);
    bodyEl.textContent = "";
    let i = 0;
    const speed = 20; // ms per char

    typewriterInterval = setInterval(() => {
      if (i < fullText.length) {
        bodyEl.textContent += fullText.charAt(i);
        i++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, speed);
  }

  function showFull() {
    clearInterval(typewriterInterval);
    bodyEl.textContent = fullText;
  }

  if (replayBtn) replayBtn.addEventListener("click", runTypewriter);
  if (skipBtn) skipBtn.addEventListener("click", showFull);

  // Start typewriter when scrolled into view
  if ("IntersectionObserver" in window && letterSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !letterTypewriterStarted) {
            letterTypewriterStarted = true;
            runTypewriter();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(letterSection);
  } else {
    showFull();
  }
}


/* --------------------------------------------------------------------------
   7. SECTION 6: WISHES WALL (Sticky Notes with LocalStorage)
   -------------------------------------------------------------------------- */
function initWishesWall() {
  const form = document.getElementById("wishes-form");
  const board = document.getElementById("wishes-board");
  const colorOptions = document.querySelectorAll(".color-option");
  const quickTags = document.querySelectorAll(".tag-btn");
  const msgInput = document.getElementById("wish-message");

  if (!board) return;

  let selectedColor = "sticky-gold";

  // Color picker selection
  colorOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
      colorOptions.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedColor = btn.getAttribute("data-color");
    });
  });

  // Quick Tamil phrase tags
  quickTags.forEach((btn) => {
    btn.addEventListener("click", () => {
      const phrase = btn.textContent.trim();
      if (msgInput.value.length > 0 && !msgInput.value.endsWith(" ")) {
        msgInput.value += " " + phrase;
      } else {
        msgInput.value += phrase;
      }
      msgInput.focus();
    });
  });

  // Load from LocalStorage or fall back to defaults
  function getWishes() {
    const stored = localStorage.getItem("appa_50th_wishes");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return CONFIG.initialWishes;
      }
    }
    return CONFIG.initialWishes;
  }

  function saveWishes(wishes) {
    localStorage.setItem("appa_50th_wishes", JSON.stringify(wishes));
  }

  function renderWishes() {
    const wishes = getWishes();
    board.innerHTML = "";

    wishes.forEach((w) => {
      // Random tilt between -3deg and +3deg for organic sticky note look
      const tilt = ((Math.random() - 0.5) * 6).toFixed(1);
      const card = document.createElement("div");
      card.className = `sticky-note ${w.color || "sticky-gold"}`;
      card.style.setProperty("--tilt", `${tilt}deg`);
      card.innerHTML = `
        <p class="note-message">"${escapeHTML(w.message)}"</p>
        <div class="note-footer">
          <div>
            <span class="note-author">${escapeHTML(w.author)}</span>
            <span class="note-relation">${escapeHTML(w.relation || "Family")}</span>
          </div>
          <div class="note-actions">
            <button class="note-heart-btn" title="Send Love" data-id="${w.id}">
              ❤️ <span>${w.hearts || 1}</span>
            </button>
            <button class="note-delete-btn" title="Remove Note" data-id="${w.id}">✕</button>
          </div>
        </div>
      `;

      // Heart like button
      const heartBtn = card.querySelector(".note-heart-btn");
      heartBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        w.hearts = (w.hearts || 0) + 1;
        heartBtn.querySelector("span").textContent = w.hearts;
        saveWishes(wishes);
        if (fireConfettiTrigger) {
          const rect = heartBtn.getBoundingClientRect();
          fireConfettiTrigger(rect.left + rect.width / 2, rect.top, 25);
        }
      });

      // Delete button
      const deleteBtn = card.querySelector(".note-delete-btn");
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const updated = wishes.filter((item) => item.id !== w.id);
        saveWishes(updated);
        renderWishes();
        showToast("Wish removed from wall");
      });

      board.appendChild(card);
    });
  }

  // Handle new submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("wish-name").value.trim();
      const relation = document.getElementById("wish-relation").value.trim();
      const message = msgInput.value.trim();

      if (!name || !message) return;

      const newWish = {
        id: "wish-" + Date.now(),
        author: name,
        relation: relation || "Well Wisher",
        message: message,
        color: selectedColor,
        hearts: 1,
        timestamp: "Just now"
      };

      const wishes = getWishes();
      wishes.unshift(newWish);
      saveWishes(wishes);
      renderWishes();

      form.reset();
      showToast("🎉 Your wish has been pinned to Appa's wall!");
      if (fireConfettiTrigger) {
        fireConfettiTrigger(window.innerWidth / 2, window.innerHeight * 0.4, 60);
      }
    });
  }

  renderWishes();
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}


/* --------------------------------------------------------------------------
   8. SECTION 7: SURPRISE BUTTON & FIREWORKS
   -------------------------------------------------------------------------- */
function initSurpriseModal() {
  const surpriseBtn = document.getElementById("btn-surprise-trigger");
  const modal = document.getElementById("surprise-modal");
  const closeBtn = document.getElementById("surprise-close-btn");
  const modalContent = document.getElementById("surprise-modal-content");

  if (!surpriseBtn || !modal) return;

  function triggerSurprise() {
    modal.classList.add("active");
    startFireworks();
    playCelebrationChime();

    if (fireConfettiTrigger) {
      fireConfettiTrigger(window.innerWidth * 0.3, window.innerHeight * 0.3, 120);
      fireConfettiTrigger(window.innerWidth * 0.7, window.innerHeight * 0.3, 120);
    }
  }

  function closeSurprise() {
    modal.classList.remove("active");
    stopFireworks();
  }

  surpriseBtn.addEventListener("click", triggerSurprise);
  if (closeBtn) closeBtn.addEventListener("click", closeSurprise);

  const copyUrlBtn = document.getElementById("btn-copy-website-url");
  if (copyUrlBtn) {
    copyUrlBtn.addEventListener("click", () => {
      const url = window.location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          showToast("🔗 Website URL copied to clipboard!");
        }).catch(() => {
          fallbackCopyUrl(url);
        });
      } else {
        fallbackCopyUrl(url);
      }
    });
  }

  function fallbackCopyUrl(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand("copy");
      showToast("🔗 Website URL copied to clipboard!");
    } catch (err) {
      showToast("Please copy URL from browser address bar: " + text);
    }
    document.body.removeChild(tempInput);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSurprise();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeSurprise();
    }
  });
}

/* Fireworks Canvas Animation */
let fireworksAnimationId = null;

function startFireworks() {
  const canvas = document.getElementById("fireworks-canvas");
  if (!canvas) return;
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let particles = [];
  const colors = ["#D4AF37", "#FF4757", "#2ED573", "#1E90FF", "#FFA502", "#FFFFFF", "#FF6B81"];

  function createFirework(x, y) {
    const count = 70;
    const baseColor = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 7 + 2;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: Math.random() > 0.3 ? baseColor : "#FFF",
        size: Math.random() * 3 + 2,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01,
        gravity: 0.06
      });
    }
  }

  let timer = 0;
  function loop() {
    ctx.fillStyle = "rgba(18, 2, 4, 0.2)";
    ctx.fillRect(0, 0, width, height);

    timer++;
    if (timer % 25 === 0) {
      createFirework(
        Math.random() * (width * 0.8) + width * 0.1,
        Math.random() * (height * 0.5) + height * 0.1
      );
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    fireworksAnimationId = requestAnimationFrame(loop);
  }

  // Initial burst
  createFirework(width * 0.3, height * 0.25);
  createFirework(width * 0.7, height * 0.25);
  loop();
}

function stopFireworks() {
  if (fireworksAnimationId) {
    cancelAnimationFrame(fireworksAnimationId);
    fireworksAnimationId = null;
  }
  const canvas = document.getElementById("fireworks-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = "none";
  }
}

/* Synthesize Celebratory Chime Fanfare via Web Audio API */
function playCelebrationChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);

      gain.gain.setValueAtTime(0.01, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + i * 0.12 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 1.3);
    });
  } catch (err) {
    console.log("Audio not supported or permitted", err);
  }
}


/* --------------------------------------------------------------------------
   9. BACKGROUND MUSIC PLAYER (MP3 with Synthesized Ambient Fallback)
   -------------------------------------------------------------------------- */
function initAudioPlayer() {
  const musicWidget = document.getElementById("floating-music-btn");
  const musicAudio = document.getElementById("bg-music-audio");
  const musicBtn = document.getElementById("music-icon-btn");

  if (!musicWidget || !musicAudio) return;

  let isPlaying = false;
  let synthLoop = null;

  function togglePlay() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  function playMusic() {
    // Attempt standard HTML5 Audio first
    const playPromise = musicAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying = true;
          updateUI(true);
          showToast("🎵 Playing: Vaa Rayil Vida Polaama (வா ரயில் விட போலாமா)");
        })
        .catch(() => {
          // If browser blocked audio or file format issue, start gentle Web Audio synth melody
          startSynthAmbientMelody();
          isPlaying = true;
          updateUI(true);
          showToast("🎵 Playing festive ambient melody");
        });
    }
  }

  function pauseMusic() {
    musicAudio.pause();
    stopSynthAmbientMelody();
    isPlaying = false;
    updateUI(false);
    showToast("⏸️ Music paused");
  }

  function updateUI(playing) {
    if (playing) {
      musicWidget.classList.add("playing");
      if (musicBtn) musicBtn.textContent = "⏸️";
    } else {
      musicWidget.classList.remove("playing");
      if (musicBtn) musicBtn.textContent = "🎵";
    }
  }

  musicWidget.addEventListener("click", togglePlay);

  // Soft Indian Pentatonic Flute Melody Synthesizer Fallback
  let synthCtx = null;
  function startSynthAmbientMelody() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!synthCtx) synthCtx = new AudioCtx();
      if (synthCtx.state === "suspended") synthCtx.resume();

      // Mohanam / Bhoopali celebratory notes: Sa, Ri2, Ga3, Pa, Dha2
      const scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];
      let step = 0;

      function playNote() {
        if (!isPlaying) return;
        const osc = synthCtx.createOscillator();
        const gain = synthCtx.createGain();

        const freq = scale[step % scale.length];
        step = (step + Math.floor(Math.random() * 2) + 1) % scale.length;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, synthCtx.currentTime);

        gain.gain.setValueAtTime(0.001, synthCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.12, synthCtx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, synthCtx.currentTime + 0.85);

        osc.connect(gain);
        gain.connect(synthCtx.destination);

        osc.start(synthCtx.currentTime);
        osc.stop(synthCtx.currentTime + 0.9);

        synthLoop = setTimeout(playNote, 500);
      }

      playNote();
    } catch (e) {
      console.log(e);
    }
  }

  function stopSynthAmbientMelody() {
    if (synthLoop) {
      clearTimeout(synthLoop);
      synthLoop = null;
    }
  }
}


/* --------------------------------------------------------------------------
   10. NAVIGATION, SCROLL REVEAL & TOAST HELPER
   -------------------------------------------------------------------------- */
function initNavigation() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Back to top button
  const topBtn = document.getElementById("btn-back-to-top");
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function initScrollAnimations() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
}

function showToast(message) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
