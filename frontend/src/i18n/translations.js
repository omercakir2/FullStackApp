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
            "When the sun never rose, people took shelter in the capsules of Facility 07. They were told they would sleep for a hundred years; that was a lie. You have been woken seven times, and a machine called Ayna erased your memories every time. Now you wake once more in the dark. And the thing crawling toward you in the courtyard might be the previous you.",
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
      lead: "When the sun never rose, people took shelter in the capsules of Facility 07.",
      videoLabel: "Gameplay demo video",
      videoTitle: "Gameplay demo",
      videoLength: "2 min",
      playLabel: "Play gameplay demo",
      overviewTitle: "About the game",
      overview: [
        "They were told they would sleep for a hundred years; that was a lie.",
        "You have been woken seven times, and a machine called Ayna erased your memories every time. Now you wake once more in the dark. And the thing crawling toward you in the courtyard might be the previous you.",
      ],
      screenshotsTitle: "Screenshots",
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
            "Güneş doğmayınca insanlar Facility 07'nin kapsüllerine sığındı. Onlara yüz yıl uyuyacakları söylendi; bu bir yalandı. Sen yedi kez uyandırıldın ve Ayna adlı makine her seferinde anılarını sildi. Şimdi karanlıkta yeniden uyanıyorsun. Avluda sana doğru sürünen şey ise önceki sen olabilir.",
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
      lead: "Güneş doğmayınca insanlar Facility 07'nin kapsüllerine sığındı.",
      videoLabel: "Oynanış demo videosu",
      videoTitle: "Oynanış demosu",
      videoLength: "2 dk",
      playLabel: "Oynanış demosunu oynat",
      overviewTitle: "Oyun hakkında",
      overview: [
        "Onlara yüz yıl uyuyacakları söylendi; bu bir yalandı.",
        "Sen yedi kez uyandırıldın ve Ayna adlı makine her seferinde anılarını sildi. Şimdi karanlıkta yeniden uyanıyorsun. Avluda sana doğru sürünen şey ise önceki sen olabilir.",
      ],
      screenshotsTitle: "Ekran görüntüleri",
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
