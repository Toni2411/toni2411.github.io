/* ==========================================================
   Muhammad Fathoni — Portfolio
   Project data, i18n (EN/ID), gallery modal, motion. Vanilla JS.
   ========================================================== */

/* ---------- Project data ---------- */
const PROJECTS = [
  {
    id: "sems",
    title: "SEMS — Smart Energy Management System",
    short: "SEMS",
    cat: "iot",
    year: "2025 – 2026",
    featured: true,
    badge: { en: "Final project · Sole developer", id: "Tugas akhir · Pengembang tunggal" },
    role: { en: "Sole Developer — Hardware, Firmware, ML, Web, AI Integration", id: "Pengembang Tunggal — Hardware, Firmware, ML, Web, Integrasi AI" },
    desc: {
      en: "An end-to-end smart energy platform for Indonesian homes. ESP32 with PZEM-004T and DHT22 sensors streams power data in real time, a Random Forest model forecasts monthly consumption with R² 0.9893, and Google Gemini 2.5 Flash turns it into saving tips matched to the user's PLN tariff. N8N automates Telegram alerts and daily reports.",
      id: "Platform energi pintar end-to-end untuk rumah tangga Indonesia. ESP32 dengan sensor PZEM-004T dan DHT22 mengirim data daya secara real time, model Random Forest memprediksi konsumsi bulanan dengan R² 0,9893, dan Google Gemini 2.5 Flash mengubahnya menjadi tips hemat sesuai golongan tarif PLN. N8N mengotomasi notifikasi Telegram dan laporan harian."
    },
    highlights: {
      en: [
        "Real-time power monitoring: ESP32 + PZEM-004T + DHT22 over MQTT, buzzer alerts on anomalies",
        "Random Forest model with R² 0.9893 (98.93%) deployed as a Flask REST API on Heroku",
        "Gemini 2.5 Flash assistant with tips for every PLN tariff bracket (450VA – 5500VA)",
        "Firebase real-time dashboard with tariff calculator; N8N for Telegram bot and daily reports"
      ],
      id: [
        "Monitoring daya real-time: ESP32 + PZEM-004T + DHT22 via MQTT, alarm buzzer saat anomali",
        "Model Random Forest dengan R² 0,9893 (98,93%) di-deploy sebagai Flask REST API di Heroku",
        "Asisten Gemini 2.5 Flash dengan tips untuk setiap golongan tarif PLN (450VA – 5500VA)",
        "Dashboard real-time Firebase dengan kalkulator tarif; N8N untuk bot Telegram dan laporan harian"
      ]
    },
    stack: ["ESP32", "PZEM-004T", "MQTT", "Random Forest", "Flask", "Firebase", "Gemini 2.5", "N8N"],
    cover: "sems-device",
    coverFit: "",
    gallery: [
      ["sems-device", { en: "SEMS device — front panel with LCD display", id: "Perangkat SEMS — panel depan dengan LCD" }],
      ["sems-dashboard", { en: "Real-time dashboard with SEMS AI Assistant (Gemini)", id: "Dashboard real-time dengan Asisten AI SEMS (Gemini)" }],
      ["sems-architecture", { en: "System architecture: input → processing → output layer", id: "Arsitektur sistem: input → pemrosesan → output" }],
      ["sems-schematic", { en: "Hardware schematic — ESP32, PZEM-004T, MCB, relay, LCD", id: "Skematik hardware — ESP32, PZEM-004T, MCB, relay, LCD" }],
      ["sems-wiring", { en: "Internal wiring of the SEMS prototype enclosure", id: "Pengkabelan internal enclosure prototipe SEMS" }]
    ],
    links: []
  },
  {
    id: "noora",
    title: "Noora — Muslim Habit-Building App",
    short: "Noora",
    cat: "ai",
    year: "2026",
    featured: true,
    badge: { en: "Flagship product · Co-founder", id: "Produk utama · Co-founder" },
    role: { en: "Co-Founder & Sole Engineer — Mobile, Backend, UI · Noora Deen Technology", id: "Co-Founder & Engineer Tunggal — Mobile, Backend, UI · Noora Deen Technology" },
    desc: {
      en: "A mobile app that helps Muslims build consistent daily worship habits in a positive, engaging way. It combines an international prayer-time engine, a complete digital Qur'an with an authentic 604-page Madinah mushaf mode, and a gamified \"Garden\" that grows with the user's consistency. Runs fully offline or syncs across devices, and is currently in closed testing on the Play Store.",
      id: "Aplikasi mobile yang membantu Muslim membangun kebiasaan ibadah harian secara konsisten dan menyenangkan. Menggabungkan mesin jadwal salat internasional, Al-Qur'an digital lengkap dengan mode mushaf Madinah 604 halaman, dan \"Taman\" gamifikasi yang tumbuh seiring konsistensi pengguna. Berjalan penuh offline atau sinkron antar perangkat, dan kini dalam closed testing di Play Store."
    },
    highlights: {
      en: [
        "Region-aware prayer times: Kemenag for Indonesia, auto-switching to JAKIM, MUIS, Umm al-Qura, ISNA or Diyanet abroad",
        "Full Qur'an with Kemenag & Saheeh International translation, tafsir, per-ayah audio, and a 604-page mushaf with page-turn animation",
        "Gamified habit engine: per-category and combined streaks, freeze tokens, an evolving garden and claimable achievements",
        "Offline-first vanilla JS frontend; Supabase Postgres + Realtime sync with conflict handling and row-level security; custom ID/EN i18n engine"
      ],
      id: [
        "Jadwal salat sesuai wilayah: Kemenag untuk Indonesia, otomatis beralih ke JAKIM, MUIS, Umm al-Qura, ISNA atau Diyanet di luar negeri",
        "Al-Qur'an lengkap dengan terjemah Kemenag & Saheeh International, tafsir, audio per ayat, dan mushaf 604 halaman dengan animasi balik halaman",
        "Mesin kebiasaan gamifikasi: streak per kategori dan gabungan, freeze token, taman yang berkembang, serta pencapaian",
        "Frontend offline-first vanilla JS; sinkronisasi Supabase Postgres + Realtime dengan penanganan konflik dan row-level security; mesin i18n ID/EN"
      ]
    },
    stack: ["Capacitor 8", "JavaScript", "Supabase", "PostgreSQL", "Realtime", "Android", "iOS"],
    cover: "noora-screens",
    coverFit: "contain",
    gallery: [
      ["noora-screens", { en: "Read the Qur'an · Progress & Score · Medals & Rewards", id: "Baca Al-Qur'an · Progres & Skor · Medali & Hadiah" }],
      ["noora-home", { en: "Noora home — prayer times, daily habits and streaks", id: "Beranda Noora — jadwal salat, kebiasaan harian dan streak" }]
    ],
    links: [{ label: "nooradeen.com", url: "https://nooradeen.com/" }]
  },
  {
    id: "saku",
    title: "Saku — AI-Powered Personal Finance Manager",
    short: "Saku",
    cat: "ai",
    year: "2026",
    badge: { en: "Personal product · AI", id: "Produk pribadi · AI" },
    role: { en: "Sole Developer — Front-End, Backend, AI, Mobile", id: "Pengembang Tunggal — Front-End, Backend, AI, Mobile" },
    desc: {
      en: "A mobile-first personal finance manager for Indonesian users. Logging income and expenses is nearly frictionless, then an AI advisor grounded on the user's own transactions answers questions in natural Bahasa Indonesia. A Telegram bot lets users record spending by just chatting: \"60rb makan siang\" becomes a categorised Rp 60.000 expense.",
      id: "Pengelola keuangan pribadi mobile-first untuk pengguna Indonesia. Pencatatan pemasukan dan pengeluaran hampir tanpa hambatan, lalu penasihat AI yang berbasis transaksi pengguna sendiri menjawab pertanyaan dalam Bahasa Indonesia natural. Bot Telegram memungkinkan pencatatan hanya dengan chat: \"60rb makan siang\" menjadi pengeluaran Rp 60.000 yang terkategori."
    },
    highlights: {
      en: [
        "Telegram bot parses natural language into categorised transactions",
        "Grounded AI advisor (Gemini 2.5 Flash): WhatsApp-style chat about the user's real transactions",
        "Analytics suite: category donut, 7-day income-vs-expense trends, budget progress and AI insights",
        "React 19 + Vite client wrapped with Capacitor 8, serverless on Vercel, Excel export"
      ],
      id: [
        "Bot Telegram mengubah bahasa natural menjadi transaksi terkategori",
        "Penasihat AI (Gemini 2.5 Flash) bergaya chat WhatsApp tentang transaksi nyata pengguna",
        "Analitik: donat kategori, tren 7 hari pemasukan vs pengeluaran, progres anggaran dan insight AI",
        "Klien React 19 + Vite dibungkus Capacitor 8, serverless di Vercel, ekspor Excel"
      ]
    },
    stack: ["React 19", "TypeScript", "Gemini 2.5", "Express", "Capacitor 8", "Vercel"],
    cover: "saku-home",
    coverFit: "contain",
    gallery: [
      ["saku-home", { en: "Saku home — balance and quick add", id: "Beranda Saku — saldo dan tambah cepat" }],
      ["saku-analytics", { en: "Analytics — categories, trends and budgets", id: "Analitik — kategori, tren dan anggaran" }],
      ["saku-advisor", { en: "AI advisor chat in Bahasa Indonesia", id: "Chat penasihat AI dalam Bahasa Indonesia" }],
      ["saku-telegram", { en: "Telegram bot logging expenses from chat", id: "Bot Telegram mencatat pengeluaran dari chat" }]
    ],
    links: []
  },
  {
    id: "ndweb",
    title: "Noora Deen Technology — Company Website",
    short: "Noora Deen Website",
    cat: "ai",
    year: "2026",
    badge: { en: "Corporate website", id: "Website perusahaan" },
    role: { en: "Designer & Developer — Front-End, Branding", id: "Desainer & Developer — Front-End, Branding" },
    desc: {
      en: "A lightweight, fast single-page company profile built entirely with vanilla HTML, CSS and JavaScript: no framework, no build step. It presents the company's mission (\"Making Everyday Life Simpler\"), products, values and contact channels, engineered for accessibility and smooth performance on any device.",
      id: "Profil perusahaan satu halaman yang ringan dan cepat, dibangun sepenuhnya dengan vanilla HTML, CSS dan JavaScript: tanpa framework, tanpa build step. Menampilkan misi perusahaan (\"Making Everyday Life Simpler\"), produk, nilai dan kanal kontak, dirancang untuk aksesibilitas dan performa mulus di perangkat apa pun."
    },
    highlights: {
      en: [
        "Fully responsive with sticky navbar, hamburger menu and scroll-spy navigation",
        "Scroll-reveal animations and animated counters without any animation library",
        "Accessibility-first: keyboard navigation, ARIA labels, prefers-reduced-motion",
        "Custom brand system: navy-and-green palette and north-star \"ND\" monogram"
      ],
      id: [
        "Responsif penuh dengan navbar sticky, menu hamburger dan navigasi scroll-spy",
        "Animasi scroll-reveal dan counter animasi tanpa library apa pun",
        "Aksesibilitas utama: navigasi keyboard, label ARIA, prefers-reduced-motion",
        "Sistem brand kustom: palet navy-hijau dan monogram \"ND\" bintang utara"
      ]
    },
    stack: ["HTML", "CSS", "JavaScript", "Responsive", "Accessibility"],
    cover: "ndweb-hero",
    coverFit: "top",
    gallery: [
      ["ndweb-hero", { en: "Landing — Making Everyday Life Simpler", id: "Landing — Making Everyday Life Simpler" }],
      ["ndweb-why", { en: "Product section — Why Noora?", id: "Bagian produk — Why Noora?" }],
      ["ndweb-principles", { en: "Principles we stand for", id: "Prinsip yang dipegang" }]
    ],
    links: [{ label: "nooradeen.com", url: "https://nooradeen.com/" }]
  },
  {
    id: "aroma",
    title: "AromatheraWrist — Smart Bracelet for Anxiety Relief",
    short: "AromatheraWrist",
    cat: "iot",
    year: "2024",
    badge: { en: "PKM-KC funded · Lead developer", id: "Didanai PKM-KC · Lead developer" },
    role: { en: "Lead Developer · PKM-KC Team", id: "Lead Developer · Tim PKM-KC" },
    desc: {
      en: "A wearable bracelet that integrates aromatherapy delivery with a real-time pulse sensor, controlled from a companion mobile app to help reduce anxiety symptoms. The project combined biomedical signal processing with user-centred design and was awarded PKM Karsa Cipta funding by the Indonesian Ministry of Education.",
      id: "Gelang wearable yang mengintegrasikan aromaterapi dengan sensor denyut nadi real-time, dikendalikan dari aplikasi mobile pendamping untuk membantu mengurangi gejala kecemasan. Proyek ini menggabungkan pemrosesan sinyal biomedis dengan desain berpusat pengguna dan mendapat pendanaan PKM Karsa Cipta dari Kemendikbud."
    },
    highlights: {
      en: [
        "Awarded PKM Karsa Cipta funding by the Ministry of Education (2024)",
        "4th place — PKM IC Karsa Cipta scheme",
        "Real-time pulse rate monitoring with an embedded sensor system",
        "Mobile app integration for aromatherapy spray control and stress tracking"
      ],
      id: [
        "Mendapat pendanaan PKM Karsa Cipta dari Kemendikbud (2024)",
        "Juara 4 — skema PKM IC Karsa Cipta",
        "Monitoring denyut nadi real-time dengan sistem sensor embedded",
        "Integrasi aplikasi mobile untuk kontrol semprot aromaterapi dan pelacakan stres"
      ]
    },
    stack: ["Wearable", "Biomedical", "Embedded", "Mobile App"],
    cover: "aroma-prototype",
    coverFit: "",
    gallery: [
      ["aroma-prototype", { en: "AromatheraWrist prototype — aromatherapy spray and pulse sensor", id: "Prototipe AromatheraWrist — semprot aromaterapi dan sensor nadi" }]
    ],
    links: []
  },
  {
    id: "temp",
    title: "IoT Automatic Temperature Control",
    short: "IoT Temperature Control",
    cat: "iot",
    year: "2024",
    badge: { en: "Electronics systems project", id: "Proyek sistem elektronika" },
    role: { en: "Developer", id: "Pengembang" },
    desc: {
      en: "An IoT-based automatic temperature control system using an ESP32 and DHT11 sensor, with a Python PID controller communicating over MQTT to dynamically regulate fan speed based on real-time room temperature. The system demonstrated stable closed-loop control with accurate response to environmental changes.",
      id: "Sistem kontrol suhu otomatis berbasis IoT menggunakan ESP32 dan sensor DHT11, dengan pengendali PID Python yang berkomunikasi lewat MQTT untuk mengatur kecepatan kipas secara dinamis berdasarkan suhu ruangan real-time. Sistem menunjukkan kontrol loop tertutup yang stabil dan respons akurat terhadap perubahan lingkungan."
    },
    highlights: {
      en: [
        "ESP32 (publisher) + Python application (subscriber) over an MQTT broker",
        "L298N motor driver controlling a DC fan with a PID-tuned response",
        "Real-time monitoring dashboard with temperature, humidity and fan-speed gauges",
        "Demonstrated stability and accuracy in a real-time control loop"
      ],
      id: [
        "ESP32 (publisher) + aplikasi Python (subscriber) melalui broker MQTT",
        "Driver motor L298N mengendalikan kipas DC dengan respons PID yang dituning",
        "Dashboard monitoring real-time dengan gauge suhu, kelembapan dan kecepatan kipas",
        "Terbukti stabil dan akurat pada loop kontrol real-time"
      ]
    },
    stack: ["ESP32", "MQTT", "PID Control", "Python", "L298N"],
    cover: "temp-control",
    coverFit: "",
    gallery: [
      ["temp-control", { en: "Hardware setup + monitoring dashboard with PID output", id: "Rangkaian hardware + dashboard monitoring dengan output PID" }]
    ],
    links: []
  },
  {
    id: "airq",
    title: "Air Quality Monitoring Tool",
    short: "Air Quality Monitor",
    cat: "iot",
    year: "2024",
    badge: { en: "Embedded system final project", id: "Proyek akhir sistem embedded" },
    role: { en: "Developer", id: "Pengembang" },
    desc: {
      en: "A real-time air quality monitoring system that measures temperature, humidity, gas concentration (PPM) and light intensity using multiple sensors on an Arduino Uno and NodeMCU ESP8266. Data is sent to the Blynk IoT platform for live monitoring and remote control from a smartphone.",
      id: "Sistem monitoring kualitas udara real-time yang mengukur suhu, kelembapan, konsentrasi gas (PPM) dan intensitas cahaya menggunakan beberapa sensor pada Arduino Uno dan NodeMCU ESP8266. Data dikirim ke platform Blynk IoT untuk pemantauan langsung dan kendali jarak jauh dari smartphone."
    },
    highlights: {
      en: [
        "Multi-sensor integration: DHT11 (temp/humidity), MQ-135 (gas), LDR (light)",
        "Cloud dashboard with mobile remote control via Blynk IoT",
        "Real-time environmental logging with notification alerts",
        "Day/night detection with automatic relay switching"
      ],
      id: [
        "Integrasi multi-sensor: DHT11 (suhu/kelembapan), MQ-135 (gas), LDR (cahaya)",
        "Dashboard cloud dengan kendali jarak jauh via Blynk IoT",
        "Pencatatan lingkungan real-time dengan notifikasi peringatan",
        "Deteksi siang/malam dengan pengalihan relay otomatis"
      ]
    },
    stack: ["Arduino Uno", "NodeMCU ESP8266", "Blynk IoT", "MQ-135", "DHT11"],
    cover: "airquality",
    coverFit: "contain",
    gallery: [
      ["airquality", { en: "Hardware schematic, breadboard prototype and Blynk app", id: "Skematik hardware, prototipe breadboard dan aplikasi Blynk" }]
    ],
    links: []
  },
  {
    id: "traffic",
    title: "Three-Lane Adaptive Traffic Light Simulator",
    short: "Adaptive Traffic Light",
    cat: "ee",
    year: "2024",
    badge: { en: "Microprocessor systems project", id: "Proyek sistem mikroprosesor" },
    role: { en: "Developer", id: "Pengembang" },
    desc: {
      en: "An adaptive traffic light controller for a three-way intersection, programmed in C via CodeVision AVR and simulated in Proteus 8 Professional. Each lane has a seven-segment countdown timer, and the system dynamically adjusts green-light duration based on traffic density signals from push buttons combined with JK flip-flop logic.",
      id: "Pengendali lampu lalu lintas adaptif untuk persimpangan tiga arah, diprogram dalam C via CodeVision AVR dan disimulasikan di Proteus 8 Professional. Setiap jalur memiliki timer hitung mundur seven-segment, dan sistem menyesuaikan durasi lampu hijau secara dinamis berdasarkan sinyal kepadatan dari push button yang dikombinasikan dengan logika JK flip-flop."
    },
    highlights: {
      en: [
        "ATmega328P microcontroller programmed in C via CVAVR",
        "7-segment countdown display per lane with dynamic timing",
        "Density-aware green-phase scheduling using JK flip-flop logic",
        "Simulated and validated in Proteus 8 Professional"
      ],
      id: [
        "Mikrokontroler ATmega328P diprogram dalam C via CVAVR",
        "Tampilan hitung mundur 7-segment per jalur dengan timing dinamis",
        "Penjadwalan fase hijau berbasis kepadatan menggunakan logika JK flip-flop",
        "Disimulasikan dan divalidasi di Proteus 8 Professional"
      ]
    },
    stack: ["ATmega328P", "CodeVision AVR", "Proteus", "C"],
    cover: "traffic-sim",
    coverFit: "",
    gallery: [
      ["traffic-sim", { en: "Three-way intersection simulation in Proteus 8", id: "Simulasi persimpangan tiga arah di Proteus 8" }]
    ],
    links: []
  },
  {
    id: "iris",
    title: "Iris Flower Classification with SVM",
    short: "Iris SVM Classifier",
    cat: "ai",
    year: "2024",
    badge: { en: "Machine learning course", id: "Mata kuliah machine learning" },
    role: { en: "Developer", id: "Pengembang" },
    desc: {
      en: "Built and evaluated a Support Vector Machine to classify Iris species from petal and sepal measurements. The project followed a complete ML pipeline, from exploratory analysis and preprocessing through training, confusion-matrix evaluation and classification reporting.",
      id: "Membangun dan mengevaluasi Support Vector Machine untuk mengklasifikasikan spesies Iris dari ukuran kelopak dan mahkota. Proyek mengikuti pipeline ML lengkap, dari analisis eksploratif dan praproses hingga pelatihan, evaluasi confusion matrix dan laporan klasifikasi."
    },
    highlights: {
      en: [
        "Over 90% test accuracy with a linear-kernel SVM",
        "80:20 train-test split with proper cross-validation",
        "Full pipeline: preprocessing, training, evaluation, reporting"
      ],
      id: [
        "Akurasi uji di atas 90% dengan SVM kernel linear",
        "Pembagian train-test 80:20 dengan cross-validation yang tepat",
        "Pipeline lengkap: praproses, pelatihan, evaluasi, pelaporan"
      ]
    },
    stack: ["Python", "SVM", "scikit-learn", "Google Colab"],
    cover: "iris-confusion",
    coverFit: "contain",
    gallery: [
      ["iris-confusion", { en: "Confusion matrix — training vs testing performance", id: "Confusion matrix — performa training vs testing" }]
    ],
    links: []
  }
];

/* ---------- Translations ---------- */
const T = {
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.experience": "Experience", "nav.achievements": "Awards", "nav.contact": "Contact", "nav.cv": "Download CV",
    "hero.eyebrow": "// Electrical Engineer · AI · IoT",
    "hero.rolePrefix": "I build",
    "hero.desc": "Electrical Engineering graduate from Universitas Islam Indonesia who builds products end to end, from circuit boards and sensors to machine learning models and mobile apps. Currently co-founder & engineer at Noora Deen Technology, shipping Noora to Android and iOS.",
    "hero.ctaProjects": "See my projects", "hero.ctaContact": "Let's talk",
    "hero.scroll": "scroll",
    "about.eyebrow": "About", "about.title": "Hardware roots, software reach.", "about.bioLabel": "Who I am",
    "about.p1": "I graduated in Electrical Engineering from Universitas Islam Indonesia in May 2026 with a GPA of 3.78, on a full scholarship from the UII Excellent Community. Somewhere along the way I realized I enjoy the software side as much as the hardware side, so instead of choosing one, I kept both.",
    "about.p2": "That mix shows up in everything I build. My final project, SEMS, wires ESP32 sensors into a Random Forest model and a Gemini-powered assistant that helps households cut their electricity bill. At Noora Deen Technology I built and shipped Noora, a habit-building app for Muslims, owning everything from UI to backend to the Android and iOS release pipeline.",
    "about.p3": "I'm most excited by work that sits between disciplines: applied AI, electric vehicles, robotics, and IoT. I learn fast, I like owning things end to end, and I do my best work when the problem is a little outside my comfort zone.",
    "about.photoCap": "Jakarta, Indonesia", "about.f1": "Based in", "about.f2": "Degree", "about.f2v": "B.Eng. Electrical Engineering", "about.f3": "Status", "about.f3v": "Open to opportunities",
    "about.statGpa": "GPA of 4.00", "about.statStudents": "Students mentored", "about.statProjects": "Projects built end to end", "about.statAwards": "National-level awards",
    "about.nowLabel": "Currently", "about.nowTitle": "Co-founder & Engineer at Noora Deen Technology",
    "about.nowDesc": "Shipping Noora, a Muslim habit-building app, to Android and iOS as the sole engineer. Offline-first frontend, Supabase backend with realtime sync, and the full native release pipeline.",
    "about.eduLabel": "Education", "about.eduDeg": "B.Eng. Electrical Engineering · Faculty of Industrial Technology",
    "about.intLabel": "Interests", "about.int1": "Applied AI & LLM products", "about.int2": "Electric vehicles", "about.int3": "Robotics", "about.int4": "IoT & smart energy",
    "about.langLabel": "Languages", "about.langNative": "Native", "about.langEn": "Professional", "about.openLabel": "Open to", "about.openTo": "Engineering, AI/ML, and data roles · Jakarta / remote / relocation",
    "skills.eyebrow": "Skills", "skills.title": "A full-stack toolkit, from copper to cloud.",
    "skills.ai": "AI & Automation", "skills.aiDesc": "Language models doing real product work, plus the automation glue around them.",
    "skills.mobile": "Frontend & Mobile", "skills.mobileDesc": "Cross-platform apps with native packaging and release pipelines.",
    "skills.backend": "Backend & Cloud", "skills.backendDesc": "Auth, realtime sync, row-level security, and REST APIs that hold up in production.",
    "skills.hardware": "Electrical & Embedded", "skills.hardwareDesc": "From wiring and troubleshooting to control loops, FPGA logic, and EV systems.",
    "skills.langsLabel": "Programming languages",
    "projects.eyebrow": "Projects", "projects.title": "Things I've built, from prototype to product.", "projects.lead": "Click any project to see photos, architecture, and the details behind it.",
    "projects.fAll": "All", "projects.fAi": "AI & Software", "projects.fIot": "IoT & Embedded", "projects.fEe": "Electrical & Simulation", "projects.more": "More on GitHub", "projects.view": "View details", "projects.ctaTitle": "More experiments live on GitHub.", "projects.ctaDesc": "Firmware, notebooks, and side projects that didn't make the cut here. Have a look, or reach out if you want a walkthrough of any of them.",
    "exp.eyebrow": "Experience", "exp.title": "Where I've worked and taught.",
    "exp.nooraDate": "May 2026 — Present", "exp.nooraType": "Part-time", "exp.nooraRole": "Full Stack / AI Engineer · Co-founder",
    "exp.noora1": "Develop Noora, a cross-platform Islamic lifestyle app: location-based prayer times, the full 30-juz Quran with Kemenag translation and per-ayah audio, daily hadith, digital tasbih, Hijri-based sunnah fasting reminders, and a streak system.",
    "exp.noora2": "Own the entire technical stack: offline-first vanilla JS frontend, Supabase backend (auth, Postgres, realtime, row-level security), and the native packaging and release pipeline for Android and iOS.",
    "exp.plnType": "Internship", "exp.plnRole": "Engineering Intern · Technical Division",
    "exp.pln1": "Analyzed customer outage data through the APKT system and evaluated distribution reliability using SAIDI and SAIFI indices.",
    "exp.pln2": "Documented service interruption cases, compiled reliability reports for performance reviews, and worked with field technicians on outage resolution.",
    "exp.labType": "Teaching", "exp.labRole": "Laboratory Assistant", "exp.labOrg": "Department of Electrical Engineering, Universitas Islam Indonesia",
    "exp.lab1": "Ran practical sessions across four subjects: Electric Circuit II, Digital Systems (VHDL on Quartus with FPGA), Control Systems (PID on LabVIEW with air heater and DC motor rigs), and Telecommunication Systems.",
    "exp.lab2": "Mentored 200+ undergraduate students, prepared lab modules, evaluated reports, and helped students work through tough engineering concepts.",
    "exp.photoCap": "Lab session — undergraduate practical at UII", "exp.orgLabel": "Leadership & organizations",
    "exp.org1": "Director of Academies · Jun 2024 – May 2026", "exp.org1b": "Academies Staff (2023–24) · IEEE Global Member (2024)",
    "exp.org2": "Head of Programming / Electrical Engineer · Jul 2023 – Mar 2025", "exp.org2b": "Vehicle control programming, EV wiring, Proteus simulation",
    "exp.org3": "Electrical Division Staff · May 2024 – May 2026", "exp.org3b": "Wiring systems and electrical troubleshooting for robots",
    "exp.org4": "Full Scholarship Awardee · 2022 – 2026", "exp.org5": "Master of Ceremony · Events Department",
    "ach.eyebrow": "Achievements", "ach.title": "Awards, grants & certifications.",
    "ach.a1": "IT Centrum Startup Hackathon 2024", "ach.a1s": "Universitas Islam Indonesia · Dec 13–14, 2024",
    "ach.a2": "Business Idea Competition", "ach.a2s": "Student Entrepreneur Day 2024",
    "ach.a3": "PKM IC — Community Service Scheme", "ach.a3s": "Ministry of Education · 2025",
    "ach.a4": "PKM IC — Karsa Cipta Scheme", "ach.a4s": "Ministry of Education · 2024 · AromatheraWrist",
    "ach.a5": "PKM IC — Innovative Work Scheme", "ach.a5s": "Ministry of Education · 2025",
    "ach.a6": "PKM Karsa Cipta Research Funding", "ach.a6s": "Ministry of Education · 2024",
    "ach.a7": "UII Excellent Community Full Scholarship", "ach.a7s": "Universitas Islam Indonesia · 2022 – 2026",
    "ach.linkedin": "See photos & posts on LinkedIn", "ach.certLabel": "Certifications & training", "ach.c2": "Basic PLC Training", "ach.c3": "Python for Data Science", "ach.c4": "Leadership Training UII EC 2022", "ach.c5": "Personal Development Basic Training", "ach.c6": "IEEE Leadership Class 2022",
    "contact.eyebrow": "Contact", "contact.title": "Let's build something<br>that actually ships.",
    "contact.lead": "I'm open to engineering, AI/ML, and data roles, and always happy to talk about interesting projects. My inbox is open and I usually reply fast.",
    "contact.cta": "Send me an email", "contact.copy": "Copy email", "contact.copied": "Email copied to clipboard", "contact.loc": "Location",
    "modal.highlights": "Key highlights",
    "footer.text": "Designed & built by Muhammad Fathoni with vanilla HTML, CSS and JavaScript. No framework needed.",
    roles: ["smart energy systems", "mobile apps for Android & iOS", "AI-powered products", "IoT & embedded devices", "control systems", "things end to end"]
  },
  id: {
    "nav.about": "Tentang", "nav.skills": "Keahlian", "nav.projects": "Proyek", "nav.experience": "Pengalaman", "nav.achievements": "Prestasi", "nav.contact": "Kontak", "nav.cv": "Unduh CV",
    "hero.eyebrow": "// Insinyur Elektro · AI · IoT",
    "hero.rolePrefix": "Saya membangun",
    "hero.desc": "Lulusan Teknik Elektro Universitas Islam Indonesia yang membangun produk secara end to end, dari papan sirkuit dan sensor hingga model machine learning dan aplikasi mobile. Saat ini co-founder & engineer di Noora Deen Technology, merilis Noora ke Android dan iOS.",
    "hero.ctaProjects": "Lihat proyek saya", "hero.ctaContact": "Mari bicara",
    "hero.scroll": "gulir",
    "about.eyebrow": "Tentang", "about.title": "Berakar di hardware, menjangkau software.", "about.bioLabel": "Siapa saya",
    "about.p1": "Saya lulus dari Teknik Elektro Universitas Islam Indonesia pada Mei 2026 dengan IPK 3,78, melalui beasiswa penuh UII Excellent Community. Di tengah perjalanan saya sadar bahwa saya menikmati sisi software sama besarnya dengan hardware, jadi alih-alih memilih satu, saya menekuni keduanya.",
    "about.p2": "Perpaduan itu terlihat di semua yang saya bangun. Tugas akhir saya, SEMS, menghubungkan sensor ESP32 ke model Random Forest dan asisten berbasis Gemini yang membantu rumah tangga menghemat tagihan listrik. Di Noora Deen Technology saya membangun dan merilis Noora, aplikasi pembentuk kebiasaan untuk Muslim, mengerjakan semuanya dari UI, backend, hingga pipeline rilis Android dan iOS.",
    "about.p3": "Saya paling antusias dengan pekerjaan yang berada di antara disiplin: AI terapan, kendaraan listrik, robotika, dan IoT. Saya belajar cepat, suka memegang tanggung jawab penuh, dan bekerja paling baik saat masalahnya sedikit di luar zona nyaman.",
    "about.photoCap": "Jakarta, Indonesia", "about.f1": "Berdomisili di", "about.f2": "Gelar", "about.f2v": "S.T. Teknik Elektro", "about.f3": "Status", "about.f3v": "Terbuka untuk peluang",
    "about.statGpa": "IPK dari 4,00", "about.statStudents": "Mahasiswa dibimbing", "about.statProjects": "Proyek dibangun end to end", "about.statAwards": "Penghargaan tingkat nasional",
    "about.nowLabel": "Saat ini", "about.nowTitle": "Co-founder & Engineer di Noora Deen Technology",
    "about.nowDesc": "Merilis Noora, aplikasi pembentuk kebiasaan untuk Muslim, ke Android dan iOS sebagai engineer tunggal. Frontend offline-first, backend Supabase dengan sinkronisasi realtime, dan pipeline rilis native lengkap.",
    "about.eduLabel": "Pendidikan", "about.eduDeg": "S1 Teknik Elektro · Fakultas Teknologi Industri",
    "about.intLabel": "Minat", "about.int1": "AI terapan & produk LLM", "about.int2": "Kendaraan listrik", "about.int3": "Robotika", "about.int4": "IoT & energi pintar",
    "about.langLabel": "Bahasa", "about.langNative": "Native", "about.langEn": "Profesional", "about.openLabel": "Terbuka untuk", "about.openTo": "Posisi engineering, AI/ML, dan data · Jakarta / remote / relokasi",
    "skills.eyebrow": "Keahlian", "skills.title": "Toolkit full-stack, dari tembaga hingga cloud.",
    "skills.ai": "AI & Otomasi", "skills.aiDesc": "Model bahasa yang mengerjakan tugas produk nyata, plus otomasi di sekitarnya.",
    "skills.mobile": "Frontend & Mobile", "skills.mobileDesc": "Aplikasi lintas platform dengan packaging native dan pipeline rilis.",
    "skills.backend": "Backend & Cloud", "skills.backendDesc": "Auth, sinkronisasi realtime, row-level security, dan REST API yang andal di produksi.",
    "skills.hardware": "Elektrikal & Embedded", "skills.hardwareDesc": "Dari pengkabelan dan troubleshooting hingga control loop, logika FPGA, dan sistem EV.",
    "skills.langsLabel": "Bahasa pemrograman",
    "projects.eyebrow": "Proyek", "projects.title": "Yang telah saya bangun, dari prototipe hingga produk.", "projects.lead": "Klik proyek mana pun untuk melihat foto, arsitektur, dan detail di baliknya.",
    "projects.fAll": "Semua", "projects.fAi": "AI & Software", "projects.fIot": "IoT & Embedded", "projects.fEe": "Elektrikal & Simulasi", "projects.more": "Lainnya di GitHub", "projects.view": "Lihat detail", "projects.ctaTitle": "Eksperimen lainnya ada di GitHub.", "projects.ctaDesc": "Firmware, notebook, dan proyek sampingan yang tidak masuk di sini. Silakan lihat, atau hubungi saya jika ingin penjelasan langsung.",
    "exp.eyebrow": "Pengalaman", "exp.title": "Tempat saya bekerja dan mengajar.",
    "exp.nooraDate": "Mei 2026 — Sekarang", "exp.nooraType": "Paruh waktu", "exp.nooraRole": "Full Stack / AI Engineer · Co-founder",
    "exp.noora1": "Mengembangkan Noora, aplikasi gaya hidup Islami lintas platform: jadwal salat berbasis lokasi, Al-Qur'an 30 juz dengan terjemah Kemenag dan audio per ayat, hadis harian, tasbih digital, pengingat puasa sunnah berbasis kalender Hijriah, dan sistem streak.",
    "exp.noora2": "Menangani seluruh stack teknis: frontend offline-first vanilla JS, backend Supabase (auth, Postgres, realtime, row-level security), serta packaging native dan pipeline rilis untuk Android dan iOS.",
    "exp.plnType": "Magang", "exp.plnRole": "Magang Teknik · Divisi Teknik",
    "exp.pln1": "Menganalisis data gangguan pelanggan melalui sistem APKT dan mengevaluasi keandalan distribusi dengan indeks SAIDI dan SAIFI.",
    "exp.pln2": "Mendokumentasikan kasus gangguan layanan, menyusun laporan keandalan untuk evaluasi kinerja, dan bekerja bersama teknisi lapangan dalam penanganan gangguan.",
    "exp.labType": "Mengajar", "exp.labRole": "Asisten Laboratorium", "exp.labOrg": "Jurusan Teknik Elektro, Universitas Islam Indonesia",
    "exp.lab1": "Memandu praktikum empat mata kuliah: Rangkaian Listrik II, Sistem Digital (VHDL di Quartus dengan FPGA), Sistem Kendali (PID di LabVIEW dengan rig air heater dan motor DC), dan Sistem Telekomunikasi.",
    "exp.lab2": "Membimbing 200+ mahasiswa, menyiapkan modul praktikum, menilai laporan, dan membantu mahasiswa memahami konsep teknik yang sulit.",
    "exp.photoCap": "Sesi praktikum — mahasiswa S1 di UII", "exp.orgLabel": "Kepemimpinan & organisasi",
    "exp.org1": "Director of Academies · Jun 2024 – Mei 2026", "exp.org1b": "Staf Academies (2023–24) · Anggota IEEE Global (2024)",
    "exp.org2": "Kepala Divisi Programming / Electrical Engineer · Jul 2023 – Mar 2025", "exp.org2b": "Pemrograman kontrol kendaraan, pengkabelan EV, simulasi Proteus",
    "exp.org3": "Staf Divisi Elektrikal · Mei 2024 – Mei 2026", "exp.org3b": "Sistem pengkabelan dan troubleshooting elektrikal untuk robot",
    "exp.org4": "Penerima Beasiswa Penuh · 2022 – 2026", "exp.org5": "Master of Ceremony · Departemen Acara",
    "ach.eyebrow": "Prestasi", "ach.title": "Penghargaan, hibah & sertifikasi.",
    "ach.a1": "IT Centrum Startup Hackathon 2024", "ach.a1s": "Universitas Islam Indonesia · 13–14 Des 2024",
    "ach.a2": "Business Idea Competition", "ach.a2s": "Student Entrepreneur Day 2024",
    "ach.a3": "PKM IC — Skema Pengabdian Masyarakat", "ach.a3s": "Kemendikbud · 2025",
    "ach.a4": "PKM IC — Skema Karsa Cipta", "ach.a4s": "Kemendikbud · 2024 · AromatheraWrist",
    "ach.a5": "PKM IC — Skema Karya Inovatif", "ach.a5s": "Kemendikbud · 2025",
    "ach.a6": "Pendanaan Riset PKM Karsa Cipta", "ach.a6s": "Kemendikbud · 2024",
    "ach.a7": "Beasiswa Penuh UII Excellent Community", "ach.a7s": "Universitas Islam Indonesia · 2022 – 2026",
    "ach.linkedin": "Lihat foto & postingan di LinkedIn", "ach.certLabel": "Sertifikasi & pelatihan", "ach.c2": "Pelatihan Dasar PLC", "ach.c3": "Python untuk Data Science", "ach.c4": "Leadership Training UII EC 2022", "ach.c5": "Pelatihan Dasar Pengembangan Diri", "ach.c6": "IEEE Leadership Class 2022",
    "contact.eyebrow": "Kontak", "contact.title": "Mari bangun sesuatu<br>yang benar-benar dirilis.",
    "contact.lead": "Saya terbuka untuk posisi engineering, AI/ML, dan data, dan selalu senang berdiskusi tentang proyek menarik. Inbox saya terbuka dan biasanya saya membalas cepat.",
    "contact.cta": "Kirim email", "contact.copy": "Salin email", "contact.copied": "Email disalin ke clipboard", "contact.loc": "Lokasi",
    "modal.highlights": "Sorotan utama",
    "footer.text": "Didesain & dibangun oleh Muhammad Fathoni dengan vanilla HTML, CSS dan JavaScript. Tanpa framework.",
    roles: ["sistem energi pintar", "aplikasi Android & iOS", "produk berbasis AI", "perangkat IoT & embedded", "sistem kendali", "produk secara end to end"]
  }
};

/* ---------- State ---------- */
let lang = localStorage.getItem("lang") || "en";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- i18n ---------- */
function applyLang(next) {
  lang = next;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const val = T[lang][key];
    if (val === undefined) return;
    if (key === "contact.title") el.innerHTML = val; else el.textContent = val;
  });
  $$(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  renderProjects();
  restartTypewriter();
}

/* ---------- Theme ---------- */
function initTheme() {
  const saved = localStorage.getItem("theme");
  const theme = saved || "dark";
  document.documentElement.dataset.theme = theme;
  $("#themeToggle").addEventListener("click", () => {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    localStorage.setItem("theme", t);
    $('meta[name="theme-color"]').content = t === "dark" ? "#0a0b0f" : "#f6f5f1";
  });
}

/* ---------- Preloader ---------- */
function initPreloader() {
  const pre = $("#preloader");
  const done = () => {
    pre.classList.add("done");
    document.body.classList.remove("no-scroll");
    splitHero();
  };
  document.body.classList.add("no-scroll");
  if (prefersReduced) { done(); return; }
  window.addEventListener("load", () => setTimeout(done, 700));
  setTimeout(done, 2500); // safety
}

/* ---------- Hero split text ---------- */
let heroSplit = false;
function splitHero() {
  if (heroSplit) return;
  heroSplit = true;
  $$("[data-split]").forEach((word, wi) => {
    const text = word.textContent;
    word.textContent = "";
    [...text].forEach((ch, i) => {
      const s = document.createElement("span");
      s.className = "char";
      s.textContent = ch;
      s.style.animationDelay = `${wi * 0.25 + i * 0.045}s`;
      word.appendChild(s);
    });
  });
  setTimeout(() => $$(".hero .reveal").forEach(el => el.classList.add("in")), 500);
}

/* ---------- Typewriter ---------- */
let twTimer = null;
function restartTypewriter() {
  clearTimeout(twTimer);
  const el = $("#roleText");
  const roles = T[lang].roles;
  let ri = 0, ci = 0, deleting = false;
  if (prefersReduced) { el.textContent = roles[0]; return; }
  const tick = () => {
    const word = roles[ri];
    if (!deleting) {
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci === word.length) { deleting = true; twTimer = setTimeout(tick, 1800); return; }
      twTimer = setTimeout(tick, 55);
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; twTimer = setTimeout(tick, 350); return; }
      twTimer = setTimeout(tick, 28);
    }
  };
  el.textContent = "";
  twTimer = setTimeout(tick, 400);
}

/* ---------- Navbar ---------- */
function initNav() {
  const nav = $("#navbar");
  const links = $("#navLinks");
  const burger = $("#hamburger");
  const bar = $("#progressBar");
  const backTop = $("#backTop");
  let lastY = 0;

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    const dy = y - lastY;
    nav.classList.toggle("hidden", dy > 0 && dy < 120 && y > 400 && !links.classList.contains("open"));
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = `${(y / h) * 100}%`;
    backTop.classList.toggle("show", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  $$("a", links).forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
  }));
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" }));

  // scroll-spy
  const sections = $$("main section[id]");
  const navAnchors = $$("a[href^='#']", links);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => spy.observe(s));
}

/* ---------- Reveal + counters ---------- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      $$("[data-count]", e.target).forEach(countUp);
      if (e.target.matches("[data-count]")) countUp(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));
  $$(".lang-pills span").forEach(s => s.style.setProperty("--w", `${s.dataset.level}%`));
}
function countUp(el) {
  if (el.dataset.done) return;
  el.dataset.done = "1";
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  if (prefersReduced) { el.textContent = target.toFixed(decimals); return; }
  const dur = 1400, start = performance.now();
  const step = now => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Cursor glow + card spotlight + magnetic buttons ---------- */
function initPointer() {
  if (!window.matchMedia("(hover: hover)").matches || prefersReduced) return;
  const glow = $("#cursorGlow");
  let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
  window.addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  const loop = () => {
    gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
    glow.style.transform = `translate(${gx - 260}px, ${gy - 260}px)`;
    requestAnimationFrame(loop);
  };
  loop();

  document.addEventListener("pointermove", e => {
    const card = e.target.closest(".bento-card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, { passive: true });

  $$(".btn-magnetic").forEach(btn => {
    btn.addEventListener("pointermove", e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
    });
    btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
  });
}

/* ---------- Projects ---------- */
let activeFilter = "all";
function renderProjects() {
  const grid = $("#projectsGrid");
  grid.innerHTML = "";
  PROJECTS.forEach(p => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `project-card${p.featured ? " featured" : ""}`;
    card.dataset.cat = p.cat;
    card.dataset.id = p.id;
    card.setAttribute("aria-label", `${p.title} — ${T[lang]["projects.view"]}`);
    card.innerHTML = `
      <div class="project-media ${p.coverFit}">
        <img src="assets/img/${p.cover}.webp" alt="${p.title}" loading="lazy" />
        <span class="project-badge">${p.badge[lang]}</span>
        <span class="project-year">${p.year}</span>
        <span class="project-open"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span>
      </div>
      <div class="project-body">
        <p class="mono">${p.stack.slice(0, 3).join(" · ")}</p>
        <h3>${p.short}</h3>
        <p>${p.desc[lang]}</p>
      </div>`;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
  const cta = document.createElement("a");
  cta.className = "project-cta";
  cta.href = "https://github.com/Toni2411";
  cta.target = "_blank";
  cta.rel = "noopener";
  cta.innerHTML = `
    <div class="cta-row">
      <span class="cta-icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12 0 1.54-.01 2.77-.01 3.15 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg></span>
      <span class="mono muted">github.com/Toni2411</span>
    </div>
    <div>
      <h3>${T[lang]["projects.ctaTitle"]}</h3>
      <p>${T[lang]["projects.ctaDesc"]}</p>
    </div>
    <span class="link-arrow">${T[lang]["projects.more"]}</span>`;
  grid.appendChild(cta);
  applyFilter(activeFilter, false);
  initTilt();
}
function applyFilter(f, animate = true) {
  activeFilter = f;
  $$(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === f));
  $$(".project-card").forEach((c, i) => {
    const show = f === "all" || c.dataset.cat === f;
    c.classList.toggle("hide", !show);
    c.classList.remove("pop");
    if (show && animate && !prefersReduced) {
      c.style.animationDelay = `${i * 0.05}s`;
      void c.offsetWidth;
      c.classList.add("pop");
    }
  });
}
function initFilters() {
  $("#projectFilters").addEventListener("click", e => {
    const b = e.target.closest(".filter-btn");
    if (b) applyFilter(b.dataset.filter);
  });
}
function initTilt() {
  if (!window.matchMedia("(hover: hover)").matches || prefersReduced) return;
  $$(".project-card").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

/* ---------- Modal / gallery ---------- */
let gallery = [], gIndex = 0, lastFocus = null;
function openModal(p) {
  const m = $("#projectModal");
  lastFocus = document.activeElement;
  $("#modalMeta").textContent = `${p.badge[lang]} · ${p.year}`;
  $("#modalTitle").textContent = p.title;
  $("#modalRole").textContent = p.role[lang];
  $("#modalDesc").textContent = p.desc[lang];
  $("#modalHighlights").innerHTML = p.highlights[lang].map(h => `<li>${h}</li>`).join("");
  $("#modalStack").innerHTML = p.stack.map(s => `<span>${s}</span>`).join("");
  $("#modalLinks").innerHTML = p.links.map(l => `<a class="btn btn-ghost btn-sm" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("");
  gallery = p.gallery;
  gIndex = 0;
  $("#galleryThumbs").innerHTML = gallery.map(([img, cap], i) =>
    `<button type="button" data-i="${i}" aria-label="Image ${i + 1}"><img src="assets/img/${img}.webp" alt="${cap[lang]}" loading="lazy" /></button>`).join("");
  $("#galleryThumbs").style.display = gallery.length > 1 ? "" : "none";
  $("#galleryPrev").style.display = $("#galleryNext").style.display = gallery.length > 1 ? "" : "none";
  showSlide(0);
  m.hidden = false;
  document.body.classList.add("no-scroll");
  $(".modal-close", m).focus();
}
function showSlide(i) {
  gIndex = (i + gallery.length) % gallery.length;
  const [img, cap] = gallery[gIndex];
  const el = $("#galleryImg");
  el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
  el.src = `assets/img/${img}.webp`;
  el.alt = cap[lang];
  $("#galleryCap").textContent = cap[lang];
  $$("#galleryThumbs button").forEach((b, j) => b.classList.toggle("active", j === gIndex));
}
function closeModal() {
  const m = $("#projectModal");
  m.hidden = true;
  document.body.classList.remove("no-scroll");
  if (lastFocus) lastFocus.focus();
}
function initModal() {
  const m = $("#projectModal");
  m.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
  $("#galleryPrev").addEventListener("click", () => showSlide(gIndex - 1));
  $("#galleryNext").addEventListener("click", () => showSlide(gIndex + 1));
  $("#galleryThumbs").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (b) showSlide(+b.dataset.i);
  });
  document.addEventListener("keydown", e => {
    if (m.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showSlide(gIndex - 1);
    if (e.key === "ArrowRight") showSlide(gIndex + 1);
  });
  // swipe on touch
  let sx = 0;
  const main = $(".gallery-main");
  main.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
  main.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) showSlide(gIndex + (dx < 0 ? 1 : -1));
  });
}

/* ---------- Contact ---------- */
function initContact() {
  const toast = $("#toast");
  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("fathonimuhammad2411@gmail.com");
      toast.textContent = T[lang]["contact.copied"];
    } catch {
      toast.textContent = "fathonimuhammad2411@gmail.com";
    }
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPreloader();
  $$(".lang-btn").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  applyLang(lang);
  initNav();
  initReveal();
  initPointer();
  initFilters();
  initModal();
  initContact();
});
