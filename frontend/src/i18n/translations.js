const GAME_TITLE = "The Seventh Waking";

const translations = {
  en: {
    nav: {
      aria: "Primary",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      menuToggle: "Toggle navigation menu",
      langToggle: "Switch language",
      langEn: "EN",
      langTr: "TR",
      themeToDark: "Switch to dark theme",
      themeToLight: "Switch to light theme",
    },
    hero: {
      intro: "Ömer Çakır · CTIS, Bilkent University",
      title: "Ömer Çakır",
      subtitle:
        "Third year CTIS student at Bilkent. I like developing web apps, games and small tools. Open to internships and collaborations.",
      viewProjects: "View projects",
      getInTouch: "Get in touch",
      shipped: "Shipped",
      shippedValue: "5+ projects",
      studies: "Studies",
      studiesValue: "CTIS · Bilkent",
      stack: "Stack",
      stackValue: "React · Node · DBMS",
      basedIn: "Based in",
      location: "Ankara, Türkiye",
      photoAlt: "Ömer Çakır",
    },
    about: {
      label: "About",
      title: "A bit about me",
      p1: "I'm a third year CTIS student at Bilkent. I learn best by building things, so most of what I know comes from projects.",
      p2: "I've taken many technical courses like networking, databases and backend. Alongside my classes, I like making time for my own personal projects.",
      p3: "Outside of code I play guitar and saz. I like story games like Ghost of Tsushima and Detroit: Become Human. I also swim and play football.",
      closing:
        "I like simple things that work. I build something quickly, then keep fixing it until I'm happy with it.",
      toolsTitle: "Tools I use",
      skillsAria: "Skills",
      resume: "Download Resume",
    },
    projects: {
      label: "Work",
      title: "Projects",
      lead: "School projects and things I built on my own.",
      expandLabel: "View details",
      viewRepo: "View repository",
      closeLabel: "Close project details",
      prevImage: "Previous image",
      nextImage: "Next image",
      items: [
        {
          title: `${GAME_TITLE} - Demo`,
          content:
            "A third-person horror and survival game demo I developed on my own with Unity. When the sun never rose, people took shelter in the capsules of Facility 07. They were told they would sleep for a hundred years; that was a lie.",
        },
        {
          title : "Network Management System",
          content: "A tool for managing devices on a LAN. It uses Go to find and monitor devices, TimescaleDB to store the data, an LSTM model for forecasting, and a graph view of the network."
        },
        {
          title: "GreenMarkt",
          content:
            "Team project for a backend course. A full-stack web app built with Node.js, Express, EJS and Ajax.",
        },
        {
          title: "Hitting the Balloons",
          content:
            "A game I made with OpenGL and GLUT for the Technical Mathematics with Programming course.",
        },
        {
          title: "Dynamic QR Generator",
          content:
            "A Django web app for creating and managing dynamic QR codes.",
        },
        {
          title: "Bilkent Attendance Counter",
          content:
            "A Chrome extension for Bilkent's STARS system that tracks your attendance automatically.",
        },
        {
          title: "Tap the Black Tiles",
          content:
            "A reflex game made with plain JavaScript, HTML and CSS. Tap the black tiles and watch your score go up.",
        },
      ],
    },
    game: {
      back: "All projects",
      label: "Game demo",
      title: GAME_TITLE,
      lead: "A third-person horror and survival game demo I developed on my own with Unity.",
      videoLabel: "Gameplay demo video",
      videoTitle: "Gameplay demo",
      videoLength: "2 min",
      playLabel: "Play gameplay demo",
      overviewTitle: "About the game",
      overview: [
        "When the sun never rose, people took shelter in the capsules of Facility 07. They were told they would sleep for a hundred years; that was a lie.",
        "You have been woken seven times, and a machine called Ayna erased your memories every time. Now you wake once more in the dark. And the thing crawling toward you in the courtyard might be the previous you.",
      ],
      screenshotsTitle: "Screenshots",
      techTitle: "Technical details",
      specsTitle: "Tech stack",
      specs: [
        { label: "Game engine", value: "Unity 6 (6000.6.5f1)" },
        { label: "Rendering", value: "Universal Render Pipeline (URP) 17.6, Forward+" },
        { label: "Camera and cinematics", value: "Cinemachine 6.6" },
        { label: "Input", value: "Unity Input System 1.20" },
        { label: "AI movement", value: "AI Navigation 2.0" },
        { label: "UI", value: "Unity UI (uGUI) and TextMeshPro" },
        { label: "Language", value: "C#, around 87 scripts and 18,900 lines" },
        { label: "Characters and animation", value: "Mixamo" },
      ],
      tech: [
        {
          title: "Characters and animation",
          text: "The player and zombie characters and their animations come from Mixamo. An Animator Controller handles states like climbing, vaulting, shooting, standing up, crawling, screaming, running and dying. Foot IK keeps the feet placed correctly on stairs.",
        },
        {
          title: "Camera and cinematics",
          text: "In-game, I use a Cinemachine Third Person Follow camera. The opening cinematic runs on a custom C# script: a Cinemachine camera circles the capsule, short memory shots cut in, then the capsule opens and control passes to the player. I also wrote the timed subtitles and the music transitions for this game.",
        },
        {
          title: "Game systems",
          items: [
            "Vaulting and climbing using LedgeMarker markers",
            "Pistol, ammo and inventory",
            "Throwable light ball",
            "Zombie AI that dies after three hits, with a hit marker and blood effect",
            "Rain and ground splashes",
          ],
        },
        {
          title: "Visual polish",
          text: "I added a wet asphalt material, realtime reflection probes, light volumes around the lamps, film grain and motion blur. A 1080p test build reached 110+ FPS at the three spots I measured. Running and zombie chases aren't included in that measurement.",
        },
        {
          title: "Third-party assets",
          items: [
            "Environment and props: Industrial, SciFiCapsule, Realistic Terrain Textures Lite, GrassFlowersFREE and other Asset Store packs",
            "Blood effect: Blood Gush (BloodDecalsAndEffects)",
            "Weapon sounds: FreeWeaponSFX",
          ],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Say hi",
      lead: "Have a question or an idea? Send me a message.",
      location: "Location",
      locationValue: "Ankara, Türkiye",
      responseTime: "Response time",
      responseValue: "Usually within a few days",
      name: "Your name",
      namePlaceholder: "Alex Morgan",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Write your message here…",
      charsRemaining: "Characters remaining:",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent. I'll get back to you soon.",
      errorRateLimit: "Too many requests. Please try again later.",
      errorGeneric: "Something went wrong. Please try again.",
      errorConnection: "Connection error. Is the backend running?",
    },
    footer: {
      crafted: "Built with React.",
      note: "I would be happy to meet you if you are reading this :)",
    },
  },
  tr: {
    nav: {
      aria: "Ana menü",
      home: "Ana Sayfa",
      about: "Hakkımda",
      projects: "Projeler",
      contact: "İletişim",
      menuToggle: "Menüyü aç/kapat",
      langToggle: "Dili değiştir",
      langEn: "EN",
      langTr: "TR",
      themeToDark: "Koyu temaya geç",
      themeToLight: "Açık temaya geç",
    },
    hero: {
      intro: "Ömer Çakır · CTIS, Bilkent Üniversitesi",
      title: "Ömer Çakır",
      subtitle:
        "Bilkent'te CTIS 3. sınıf öğrencisiyim. Web uygulamaları, oyunlar ve küçük araçlar geliştirmeyi seviyorum. Staj ve ortak projelere açığım.",
      viewProjects: "Projelere bak",
      getInTouch: "İletişime geç",
      shipped: "Teslim",
      shippedValue: "5+ proje",
      studies: "Eğitim",
      studiesValue: "CTIS · Bilkent",
      stack: "Yığın",
      stackValue: "React · Node · DBMS",
      basedIn: "Konum",
      location: "Ankara, Türkiye",
      photoAlt: "Ömer Çakır",
    },
    about: {
      label: "Hakkımda",
      title: "Kısaca ben",
      p1: "Bilkent CTIS 3. sınıftayım. En iyi bir şeyler yaparak öğreniyorum, bildiklerimin çoğu da projelerden geliyor.",
      p2: "Network, veritabanı, backend gibi birçok teknik ders verdim. Derslerime devam etmenin yanında kendi kişisel projelerime de vakit ayırmayı seviyorum.",
      p3: "Kod dışında gitar ve saz çalıyorum. Ghost of Tsushima ve Detroit: Become Human gibi hikâyeli oyunları seviyorum. Bir de yüzüyorum ve futbol oynuyorum.",
      closing:
        "Basit ve çalışan şeyleri seviyorum. Önce hızlıca yapıyorum, sonra içime sinene kadar düzeltiyorum.",
      toolsTitle: "Kullandığım araçlar",
      skillsAria: "Beceriler",
      resume: "Özgeçmişi İndir",
    },
    projects: {
      label: "İşler",
      title: "Projeler",
      lead: "Okul projeleri ve kendi yaptığım şeyler.",
      expandLabel: "Detayları gör",
      viewRepo: "Depoyu görüntüle",
      closeLabel: "Proje detaylarını kapat",
      prevImage: "Önceki görsel",
      nextImage: "Sonraki görsel",
      items: [
        {
          title: `${GAME_TITLE} - Demo`,
          content:
            "Unity ile tek başıma geliştirdiğim üçüncü şahıs korku ve hayatta kalma oyunu demosu. Güneş doğmayınca insanlar Facility 07'nin kapsüllerine sığındı. Onlara yüz yıl uyuyacakları söylendi; bu bir yalandı.",
        },
        {
          title : "Ağ Yönetim Sistemi",
          content: "LAN'daki cihazları yönetmek için yaptığım bir araç. Cihazları bulup izlemek için Go, verileri tutmak için TimescaleDB, tahmin için LSTM modeli kullanıyor. Ağı da grafik olarak gösteriyor."
        },
        {
          title: "GreenMarkt",
          content:
            "Backend dersi için yaptığımız ekip projesi. Node.js, Express, EJS ve Ajax ile yazılmış full-stack bir web uygulaması.",
        },
        {
          title: "Hitting the Balloons",
          content:
            "Programlamalı Teknik Matematik dersi için OpenGL ve GLUT ile yaptığım bir oyun.",
        },
        {
          title: "Dynamic QR Generator",
          content:
            "Dinamik QR kod oluşturup yönetmeye yarayan bir Django uygulaması.",
        },
        {
          title: "Bilkent Attendance Counter",
          content:
            "Bilkent'in STARS sistemi için devamsızlığını otomatik takip eden bir Chrome eklentisi.",
        },
        {
          title: "Tap the Black Tiles",
          content:
            "Düz JavaScript, HTML ve CSS ile yaptığım bir refleks oyunu. Siyah kareleri tıkla, skorun artsın.",
        },
      ],
    },
    game: {
      back: "Tüm projeler",
      label: "Oyun demosu",
      title: GAME_TITLE,
      lead: "Unity ile tek başıma geliştirdiğim üçüncü şahıs korku ve hayatta kalma oyunu demosu.",
      videoLabel: "Oynanış demo videosu",
      videoTitle: "Oynanış demosu",
      videoLength: "2 dk",
      playLabel: "Oynanış demosunu oynat",
      overviewTitle: "Oyun hakkında",
      overview: [
        "Güneş doğmayınca insanlar Facility 07'nin kapsüllerine sığındı. Onlara yüz yıl uyuyacakları söylendi; bu bir yalandı.",
        "Sen yedi kez uyandırıldın ve Ayna adlı makine her seferinde anılarını sildi. Şimdi karanlıkta yeniden uyanıyorsun. Avluda sana doğru sürünen şey ise önceki sen olabilir.",
      ],
      screenshotsTitle: "Ekran görüntüleri",
      techTitle: "Teknik detaylar",
      specsTitle: "Kullanılan teknolojiler",
      specs: [
        { label: "Oyun motoru", value: "Unity 6 (6000.6.5f1)" },
        { label: "Görüntüleme", value: "Universal Render Pipeline (URP) 17.6, Forward+" },
        { label: "Kamera ve sinematik", value: "Cinemachine 6.6" },
        { label: "Girdi sistemi", value: "Unity Input System 1.20" },
        { label: "Yapay zekâ hareketi", value: "AI Navigation 2.0" },
        { label: "Arayüz", value: "Unity UI (uGUI) ve TextMeshPro" },
        { label: "Dil", value: "C#, yaklaşık 87 script ve 18.900 satır" },
        { label: "Karakter ve animasyon", value: "Mixamo" },
      ],
      tech: [
        {
          title: "Karakter ve animasyon",
          text: "Oyuncu ve zombi karakterlerini ve animasyonlarını Mixamo'dan aldım. Tırmanma, engel aşma, ateş etme, ayağa kalkma, sürünme, çığlık, koşma ve ölüm gibi durumları Animator Controller ile yönetiyorum. Merdivenlerde ayakların doğru basması için foot IK kullandım.",
        },
        {
          title: "Kamera ve sinematikler",
          text: "Oyun içinde Cinemachine Third Person Follow kamerası kullanıyorum. Açılış sinematiğini kendi yazdığım bir C# script'i yönetiyor: Cinemachine kamerası kapsülün çevresinde dönüyor, kısa anı görüntüleri giriyor, ardından kapsül açılıyor ve kontrol oyuncuya geçiyor. Zamanlı altyazıları ve geçişli müzik sistemini de oyuna özel yazdım.",
        },
        {
          title: "Oyun sistemleri",
          items: [
            "LedgeMarker işaretçileriyle engel aşma ve tırmanma",
            "Tabanca, cephane ve envanter",
            "Fırlatılabilir ışık topu",
            "Üç isabette ölen zombi yapay zekâsı, isabet işareti ve kan efekti",
            "Yağmur ve zemin sıçramaları",
          ],
        },
        {
          title: "Görsel iyileştirme",
          text: "Islak asfalt materyali, realtime reflection probe'lar, lamba çevresinde ışık hacmi, film grain ve motion blur ekledim. 1080p test build'inde ölçtüğüm üç noktada 110+ FPS aldım. Koşma ve zombi kovalamacası bu ölçüme dahil değil.",
        },
        {
          title: "Hazır içerikler",
          items: [
            "Çevre ve obje paketleri: Industrial, SciFiCapsule, Realistic Terrain Textures Lite, GrassFlowersFREE ve diğer Asset Store paketleri",
            "Kan efekti: Blood Gush (BloodDecalsAndEffects)",
            "Silah sesleri: FreeWeaponSFX",
          ],
        },
      ],
    },
    contact: {
      label: "İletişim",
      title: "Bana yaz",
      lead: "Sorun ya da bir fikrin varsa mesaj at.",
      location: "Konum",
      locationValue: "Ankara, Türkiye",
      responseTime: "Yanıt süresi",
      responseValue: "Genellikle birkaç gün içinde",
      name: "Adın",
      namePlaceholder: "Mustafa Parlak",
      email: "E-posta",
      emailPlaceholder: "sen@ornek.com",
      message: "Mesaj",
      messagePlaceholder: "Mesajını buraya yaz…",
      charsRemaining: "Kalan karakter:",
      send: "Mesaj gönder",
      sending: "Gönderiliyor…",
      success: "Mesajın gönderildi. En kısa sürede dönerim.",
      errorRateLimit: "Çok fazla istek. Lütfen daha sonra tekrar deneyin.",
      errorGeneric: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
      errorConnection: "Bağlantı hatası. Backend çalışıyor mu?",
    },
    footer: {
      crafted: "React ile yapıldı.",
      note: "Bunu okuyorsan tanışmaktan mutluluk duyarım :)",
    },
  },
};

export default translations;
