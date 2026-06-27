const translations = {
  ru: {
    navServices: "Услуги", navPricing: "Цены", navPortfolio: "Кейсы", navProcess: "Процесс", navContact: "Контакты",
    availableShort: "Свободен", availableLong: "Доступен для новых проектов", startProject: "Начать проект",
    heroLabel: "FULL-STACK DIGITAL FORGE", heroTitleOne: "Превращаем идеи", heroTitleTwo: "в цифровую реальность",
    heroText: "Full-stack разработка от первой концепции до production: интерфейс, серверная логика, база данных, интеграции и запуск.",
    discuss: "Обсудить проект", viewCases: "Посмотреть кейсы", scroll: "Листайте",
    heroStatServices: "направлений разработки", heroStatTech: "основных технологий", heroStatPlatforms: "платформы: web, mobile, API",
    servicesTitle: "Полный цикл разработки.", servicesTitleAccent: "Один ответственный.", servicesIntro: "Создаю цифровые продукты целиком — без разрыва между дизайном, клиентской частью и сервером.",
    frontendText: "Быстрые адаптивные интерфейсы с продуманными состояниями и плавной анимацией.",
    backendText: "API, авторизация, бизнес-логика и надежная работа с данными.",
    devopsText: "Контейнеризация, развертывание и стабильная production-среда.",
    mobileText: "Кроссплатформенные приложения для Android и iOS с единым backend.",
    designText: "Интерфейсы, в которых визуальный характер поддерживает удобство и цели бизнеса.",
    qaText: "Проверка сценариев, адаптивности, производительности и поведения перед запуском.",
    stackTitle: "Инструменты, которые решают задачу.", stackIntro: "Стек подбирается под продукт, а не наоборот. Основа — современная типизация, понятная архитектура и масштабируемый backend.",
    metricServices: "направлений", metricTech: "технологий", metricPlatforms: "платформы", metricResponsive: "адаптивность",
    portfolioTitle: "Реальные проекты.", portfolioTitleAccent: "Разные задачи.", portfolioIntro: "Три направления работы: выразительный web, продуктовый интерфейс и мобильное приложение.",
    filterAll: "Все", projectOneTitle: "Персональная digital-платформа", projectOneShort: "Выразительная презентация экспертизы и прямой путь к заявке.",
    projectTwoTitle: "Сайт современной кофейни", projectTwoShort: "Атмосфера бренда, меню и понятный сценарий бронирования.",
    projectThreeShort: "Безопасное мобильное хранилище с ясным интерфейсом.", viewCase: "Смотреть кейс ↗",
    processTitle: "От идеи до запуска.", processTitleAccent: "Без чёрного ящика.", processIntro: "На каждом этапе понятно, что происходит, какой результат готов и что будет дальше.",
    stepOne: "Погружение", stepOneText: "Цели, аудитория, функции и ограничения будущего продукта.",
    stepTwo: "Система и дизайн", stepTwoText: "Структура, пользовательские сценарии и визуальное направление.",
    stepThree: "Разработка", stepThreeText: "Frontend, backend, база данных и необходимые интеграции.",
    stepFour: "Тестирование", stepFourText: "Проверка устройств, сценариев, скорости и стабильности.",
    stepFive: "Запуск и поддержка", stepFiveText: "Публикация, настройка окружения и помощь после релиза.",
    faqTitle: "До старта проекта.", faqIntro: "Короткие ответы на вопросы, которые обычно возникают перед разработкой.",
    faqOneQ: "Сколько времени занимает разработка?", faqOneA: "Лендинг обычно занимает от 1–2 недель. Сайт или приложение со сложной логикой — от нескольких недель, в зависимости от функций.",
    faqTwoQ: "Как формируется стоимость?", faqTwoA: "Стоимость зависит от объема экранов, логики, интеграций и backend. После обсуждения задачи вы получаете понятную оценку.",
    faqThreeQ: "Можно начать только с идеи?", faqThreeA: "Да. Я помогу превратить идею в структуру, определить необходимый функционал и выбрать подходящий стек.",
    faqFourQ: "Что происходит после запуска?", faqFourA: "Проверяю production-версию, помогаю с доменом и публикацией, а также остаюсь на связи для поддержки и развития.",
    contactTitle: "Есть идея?", contactTitleAccent: "Давайте выкуем продукт.", contactText: "Расскажите, что нужно создать. Я отвечу лично, уточню детали и предложу технический путь.",
    phone: "Телефон", formName: "Ваше имя", formNamePlaceholder: "Как к вам обращаться?", formProject: "О проекте", formProjectPlaceholder: "Что нужно создать?",
    formBudget: "Бюджет", budgetUnknown: "Пока не определён", formSubmit: "Отправить запрос",
    proofTitle: "Не просто красиво. Готово к реальной работе.", proofIntro: "Проектирую продукт как единую систему: от первого экрана и логики до скорости, безопасности и стабильного запуска.",
    proofProductTitle: "Продуктовое мышление", proofProductText: "Сначала цель, аудитория и сценарий. Каждый экран получает понятную задачу, а не просто эффектный вид.",
    proofSystemTitle: "Системный дизайн", proofSystemText: "Компоненты, состояния и единые правила делают интерфейс цельным и легко расширяемым.",
    proofSpeedTitle: "Скорость и качество", proofSpeedText: "Адаптивность, доступность, SEO и производительность проверяются до релиза.",
    proofScore: "контроль продукта", proofOwnerText: "Один ответственный за дизайн, frontend, backend и запуск — без потери контекста между этапами.",
    homeCtaTitle: "Есть задача? Соберём сильный продукт.", homeCtaText: "Опишите идею в нескольких предложениях. Я отвечу лично, задам точные вопросы и предложу понятный следующий шаг.",
    standardTitle: "Собрано по стандарту production", standardText: "Адаптивно на всех экранах · доступно · быстро · готово к развитию", responseTime: "Обычно отвечаю в течение рабочего дня", skipToContent: "Перейти к содержимому"
  },
  en: {
    navServices: "Services", navPricing: "Pricing", navPortfolio: "Work", navProcess: "Process", navContact: "Contact",
    availableShort: "Available", availableLong: "Available for new projects", startProject: "Start a project",
    heroLabel: "FULL-STACK DIGITAL FORGE", heroTitleOne: "Turning ideas", heroTitleTwo: "into digital reality",
    heroText: "Full-stack development from the first concept to production: interface, backend logic, database, integrations and launch.",
    discuss: "Discuss a project", viewCases: "View selected work", scroll: "Scroll",
    heroStatServices: "development disciplines", heroStatTech: "core technologies", heroStatPlatforms: "platforms: web, mobile, API",
    servicesTitle: "The full development cycle.", servicesTitleAccent: "One accountable partner.", servicesIntro: "I build complete digital products without gaps between design, client-side experience and backend.",
    frontendText: "Fast responsive interfaces with thoughtful states and smooth motion.",
    backendText: "APIs, authentication, business logic and reliable data handling.",
    devopsText: "Containerization, deployment and a stable production environment.",
    mobileText: "Cross-platform Android and iOS applications with one backend.",
    designText: "Interfaces where visual character supports usability and business goals.",
    qaText: "Testing user flows, responsiveness, performance and behavior before launch.",
    stackTitle: "Tools chosen to solve the problem.", stackIntro: "The stack follows the product, not the other way around. The foundation is typed code, clear architecture and a scalable backend.",
    metricServices: "disciplines", metricTech: "technologies", metricPlatforms: "platforms", metricResponsive: "responsive",
    portfolioTitle: "Real projects.", portfolioTitleAccent: "Different challenges.", portfolioIntro: "Three fields of work: expressive web, product interfaces and mobile applications.",
    filterAll: "All", projectOneTitle: "Personal digital platform", projectOneShort: "An expressive presentation of expertise with a direct route to contact.",
    projectTwoTitle: "Contemporary coffee shop website", projectTwoShort: "Brand atmosphere, menu and a clear booking journey.",
    projectThreeShort: "A secure mobile vault with a clear interface.", viewCase: "View case ↗",
    processTitle: "From idea to launch.", processTitleAccent: "No black box.", processIntro: "At every stage you know what is happening, what is ready and what comes next.",
    stepOne: "Discovery", stepOneText: "Goals, audience, features and constraints of the future product.",
    stepTwo: "System and design", stepTwoText: "Structure, user journeys and visual direction.",
    stepThree: "Development", stepThreeText: "Frontend, backend, database and required integrations.",
    stepFour: "Testing", stepFourText: "Device, flow, speed and stability verification.",
    stepFive: "Launch and support", stepFiveText: "Publishing, environment setup and post-release support.",
    faqTitle: "Before we start.", faqIntro: "Short answers to common questions before development begins.",
    faqOneQ: "How long does development take?", faqOneA: "A landing page usually takes 1–2 weeks. A website or application with complex logic takes several weeks depending on features.",
    faqTwoQ: "How is the price calculated?", faqTwoA: "The price depends on screens, logic, integrations and backend. After discussing the task, you receive a clear estimate.",
    faqThreeQ: "Can we start with just an idea?", faqThreeA: "Yes. I can turn the idea into a structure, define the right feature set and choose the technology stack.",
    faqFourQ: "What happens after launch?", faqFourA: "I verify the production version, help with domain and publishing, and remain available for support and further development.",
    contactTitle: "Have an idea?", contactTitleAccent: "Let’s forge the product.", contactText: "Tell me what you need to build. I will reply personally, clarify the details and suggest a technical path.",
    phone: "Phone", formName: "Your name", formNamePlaceholder: "How should I address you?", formProject: "About the project", formProjectPlaceholder: "What should be built?",
    formBudget: "Budget", budgetUnknown: "Not defined yet", formSubmit: "Send request",
    proofTitle: "More than beautiful. Built for real work.", proofIntro: "I design the product as one system: from the first screen and business logic to speed, security and a stable launch.",
    proofProductTitle: "Product thinking", proofProductText: "Goals, audience and journeys come first. Every screen has a clear job, not just a striking look.",
    proofSystemTitle: "Systematic design", proofSystemText: "Components, states and shared rules keep the interface consistent and easy to extend.",
    proofSpeedTitle: "Speed and quality", proofSpeedText: "Responsiveness, accessibility, SEO and performance are verified before release.",
    proofScore: "product oversight", proofOwnerText: "One accountable partner for design, frontend, backend and launch — with no context lost between stages.",
    homeCtaTitle: "Have a challenge? Let’s build a strong product.", homeCtaText: "Describe the idea in a few sentences. I will reply personally, ask focused questions and suggest a clear next step.",
    standardTitle: "Built to production standards", standardText: "Responsive on every screen · accessible · fast · ready to grow", responseTime: "I usually reply within one business day", skipToContent: "Skip to content"
  },
  uz: {
    navServices: "Xizmatlar", navPricing: "Narxlar", navPortfolio: "Loyihalar", navProcess: "Jarayon", navContact: "Aloqa",
    availableShort: "Bo‘sh", availableLong: "Yangi loyihalar uchun ochiqman", startProject: "Loyihani boshlash",
    heroLabel: "FULL-STACK DIGITAL FORGE", heroTitleOne: "G‘oyalarni", heroTitleTwo: "raqamli haqiqatga aylantiramiz",
    heroText: "Birinchi konsepsiyadan productiongacha full-stack dasturlash: interfeys, backend mantiqi, ma’lumotlar bazasi, integratsiya va ishga tushirish.",
    discuss: "Loyihani muhokama qilish", viewCases: "Loyihalarni ko‘rish", scroll: "Pastga",
    heroStatServices: "dasturlash yo‘nalishi", heroStatTech: "asosiy texnologiya", heroStatPlatforms: "platforma: web, mobile, API",
    servicesTitle: "To‘liq ishlab chiqish sikli.", servicesTitleAccent: "Bitta mas’ul mutaxassis.", servicesIntro: "Dizayn, mijoz tomoni va server o‘rtasida uzilishsiz to‘liq raqamli mahsulot yarataman.",
    frontendText: "Puxta holatlar va silliq animatsiyaga ega tezkor moslashuvchan interfeyslar.",
    backendText: "API, autentifikatsiya, biznes mantiqi va ishonchli ma’lumotlar bilan ishlash.",
    devopsText: "Konteynerlash, joylashtirish va barqaror production muhiti.",
    mobileText: "Yagona backend bilan Android va iOS uchun krossplatforma ilovalar.",
    designText: "Vizual xarakter qulaylik va biznes maqsadini qo‘llab-quvvatlaydigan interfeyslar.",
    qaText: "Ishga tushirishdan oldin ssenariy, moslashuvchanlik, tezlik va xatti-harakatni tekshirish.",
    stackTitle: "Vazifani hal qiladigan vositalar.", stackIntro: "Stek mahsulotga mos tanlanadi. Asos — tiplangan kod, tushunarli arxitektura va kengayadigan backend.",
    metricServices: "yo‘nalish", metricTech: "texnologiya", metricPlatforms: "platforma", metricResponsive: "moslashuvchan",
    portfolioTitle: "Haqiqiy loyihalar.", portfolioTitleAccent: "Turli vazifalar.", portfolioIntro: "Uch yo‘nalish: ifodali web, mahsulot interfeysi va mobil ilova.",
    filterAll: "Barchasi", projectOneTitle: "Shaxsiy raqamli platforma", projectOneShort: "Tajribani kuchli ko‘rsatish va mijozni to‘g‘ri aloqaga olib borish.",
    projectTwoTitle: "Zamonaviy qahvaxona sayti", projectTwoShort: "Brend muhiti, menyu va tushunarli bron qilish jarayoni.",
    projectThreeShort: "Aniq interfeysli xavfsiz mobil parol ombori.", viewCase: "Loyihani ko‘rish ↗",
    processTitle: "G‘oyadan ishga tushirishgacha.", processTitleAccent: "Hammasi ochiq.", processIntro: "Har bosqichda nima qilinayotgani, nima tayyorligi va keyingi qadam ma’lum.",
    stepOne: "Tahlil", stepOneText: "Maqsad, auditoriya, funksiyalar va mahsulot cheklovlari.",
    stepTwo: "Tizim va dizayn", stepTwoText: "Tuzilma, foydalanuvchi ssenariylari va vizual yo‘nalish.",
    stepThree: "Dasturlash", stepThreeText: "Frontend, backend, ma’lumotlar bazasi va integratsiyalar.",
    stepFour: "Sinov", stepFourText: "Qurilma, ssenariy, tezlik va barqarorlik tekshiruvi.",
    stepFive: "Ishga tushirish", stepFiveText: "Nashr, muhitni sozlash va relizdan keyingi yordam.",
    faqTitle: "Boshlashdan oldin.", faqIntro: "Dasturlash boshlanishidan oldingi odatiy savollarga qisqa javoblar.",
    faqOneQ: "Ishlab chiqish qancha vaqt oladi?", faqOneA: "Landing odatda 1–2 hafta. Murakkab mantiqli sayt yoki ilova funksiyalarga qarab bir necha hafta oladi.",
    faqTwoQ: "Narx qanday hisoblanadi?", faqTwoA: "Narx ekranlar, mantiq, integratsiya va backend hajmiga bog‘liq. Muhokamadan keyin aniq baho beriladi.",
    faqThreeQ: "Faqat g‘oya bilan boshlash mumkinmi?", faqThreeA: "Ha. G‘oyani tuzilmaga aylantirish, kerakli funksiyalarni aniqlash va stek tanlashga yordam beraman.",
    faqFourQ: "Ishga tushirgandan keyin nima bo‘ladi?", faqFourA: "Production versiyani tekshiraman, domen va nashrga yordam beraman, keyingi rivojlanish uchun aloqada qolaman.",
    contactTitle: "G‘oyangiz bormi?", contactTitleAccent: "Mahsulotni birga yaratamiz.", contactText: "Nima yaratish kerakligini ayting. Shaxsan javob beraman, tafsilotlarni aniqlayman va texnik yo‘l taklif qilaman.",
    phone: "Telefon", formName: "Ismingiz", formNamePlaceholder: "Sizga qanday murojaat qilay?", formProject: "Loyiha haqida", formProjectPlaceholder: "Nima yaratish kerak?",
    formBudget: "Byudjet", budgetUnknown: "Hali aniqlanmagan", formSubmit: "So‘rov yuborish",
    proofTitle: "Faqat chiroyli emas. Haqiqiy ishga tayyor.", proofIntro: "Mahsulotni yagona tizim sifatida loyihalayman: birinchi ekran va mantiqdan tezlik, xavfsizlik va barqaror ishga tushirishgacha.",
    proofProductTitle: "Mahsulot fikrlashi", proofProductText: "Avval maqsad, auditoriya va ssenariy. Har bir ekran faqat ko‘rinish emas, aniq vazifaga ega.",
    proofSystemTitle: "Tizimli dizayn", proofSystemText: "Komponentlar, holatlar va yagona qoidalar interfeysni yaxlit va kengaytirishga qulay qiladi.",
    proofSpeedTitle: "Tezlik va sifat", proofSpeedText: "Moslashuvchanlik, qulaylik, SEO va unumdorlik relizgacha tekshiriladi.",
    proofScore: "mahsulot nazorati", proofOwnerText: "Dizayn, frontend, backend va ishga tushirish uchun bitta mas’ul — bosqichlar orasida kontekst yo‘qolmaydi.",
    homeCtaTitle: "Vazifa bormi? Kuchli mahsulot yaratamiz.", homeCtaText: "G‘oyani bir necha jumlada yozing. Shaxsan javob beraman, aniq savollar beraman va keyingi qadamni taklif qilaman.",
    standardTitle: "Production standarti bo‘yicha yaratilgan", standardText: "Barcha ekranlarga mos · qulay · tez · rivojlanishga tayyor", responseTime: "Odatda bir ish kuni ichida javob beraman", skipToContent: "Kontentga o‘tish"
  }
};

const body = document.body;
const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const progress = document.querySelector(".scroll-progress");
let lastScroll = 0;

window.addEventListener("load", () => {
  window.setTimeout(() => document.querySelector(".preloader").classList.add("done"), 450);
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) heroVideo.play().catch(() => {});
});

function setLanguage(language) {
  const dictionary = translations[language] || translations.ru;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (!value) return;
    if (element.classList.contains("hero-accent")) {
      element.textContent = value;
    } else if (element.matches("h1 span, h2")) {
      const words = value.split(" ");
      if (element.matches("h1 span") && element.dataset.i18n === "heroTitleTwo") {
        const last = words.pop();
        element.innerHTML = `${words.join(" ")} <em>${last}</em>`;
      } else if (element.matches("h2")) {
        const midpoint = Math.max(1, Math.ceil(words.length * 0.58));
        element.innerHTML = `${words.slice(0, midpoint).join(" ")}<br><em>${words.slice(midpoint).join(" ")}</em>`;
      } else {
        element.textContent = value;
      }
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll(".lang").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("iv-language", language);
}

function setActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".desktop-nav a[data-page]").forEach((link) => {
    const active = link.getAttribute("href") === page;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  document.querySelectorAll(".mobile-menu nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === page);
  });
}

function buildGlobalChrome() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const main = document.querySelector("main");
  const pageHero = document.querySelector(".page-hero");

  if (main) {
    main.id = main.id || "main-content";
    if (!document.querySelector(".skip-link")) {
      const skipLink = document.createElement("a");
      skipLink.className = "skip-link";
      skipLink.href = "#main-content";
      skipLink.dataset.i18n = "skipToContent";
      skipLink.textContent = "Перейти к содержимому";
      document.body.prepend(skipLink);
    }
  }

  if (main && pageHero) {
    const standard = document.createElement("section");
    standard.className = "quality-rail";
    standard.setAttribute("aria-label", "Production standard");
    standard.innerHTML = `
      <div class="container quality-rail-inner">
        <span class="quality-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>
        </span>
        <div><strong data-i18n="standardTitle">Собрано по стандарту production</strong><small data-i18n="standardText">Адаптивно на всех экранах · доступно · быстро · готово к развитию</small></div>
        <span class="quality-code">QA / 01</span>
      </div>`;
    pageHero.insertAdjacentElement("afterend", standard);
  }

  const footerInner = document.querySelector(".footer-inner");
  if (footerInner) {
    footerInner.classList.add("footer-pro");
    footerInner.innerHTML = `
      <div class="footer-brand">
        <a class="logo" href="index.html" aria-label="IV Digital Forge">
          <span class="logo-mark">IV</span><span class="logo-copy"><strong>Digital Forge</strong><small>Full-stack studio</small></span>
        </a>
        <p>Design, frontend, backend and launch — one coherent production process.</p>
        <div class="footer-status"><i></i><span data-i18n="availableLong">Доступен для новых проектов</span></div>
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">
        <span>EXPLORE</span>
        <a href="services.html" data-i18n="navServices">Услуги</a>
        <a href="portfolio.html" data-i18n="navPortfolio">Кейсы</a>
        <a href="pricing.html" data-i18n="navPricing">Цены</a>
        <a href="process.html" data-i18n="navProcess">Процесс</a>
      </nav>
      <div class="footer-contact">
        <span>START A PROJECT</span>
        <a href="mailto:iskandarbek2007@gmail.com">iskandarbek2007@gmail.com</a>
        <a href="tel:+998938882027">+998 93 888 20 27</a>
        <a class="footer-telegram" href="https://t.me/iskandarbek0220" target="_blank" rel="noreferrer">Telegram ↗</a>
        <small data-i18n="responseTime">Обычно отвечаю в течение рабочего дня</small>
      </div>
      <div class="footer-bottom">
        <p>© <span id="year"></span> Iskandarbek Valijonov</p>
        <span>UZ / TASHKENT</span>
        <a href="#" aria-label="Наверх">BACK TO TOP ↑</a>
      </div>`;
  }

  document.body.dataset.page = page.replace(".html", "") || "home";
}

document.querySelectorAll(".lang").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
buildGlobalChrome();
setLanguage(localStorage.getItem("iv-language") || "ru");
setActiveNav();

function closeMenu() {
  body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Открыть меню");
  mobileMenu.setAttribute("aria-hidden", "true");
}

menuButton.addEventListener("click", () => {
  const open = body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  mobileMenu.setAttribute("aria-hidden", String(!open));
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (current / max) * 100 : 0}%`;
  header.classList.toggle("compact", current > 35);
  header.classList.toggle("hidden", current > lastScroll && current > 180 && !body.classList.contains("menu-open"));
  lastScroll = Math.max(current, 0);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -45px" });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const metrics = document.querySelector(".metrics");
let countersStarted = false;
const counterObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting || countersStarted) return;
  countersStarted = true;
  document.querySelectorAll("[data-count]").forEach((counter) => {
    const target = Number(counter.dataset.count);
    const suffix = counter.dataset.suffix || "";
    const start = performance.now();
    const duration = 1200;
    function update(time) {
      const amount = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - amount, 3);
      counter.textContent = `${Math.round(target * eased)}${suffix}`;
      if (amount < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}, { threshold: 0.4 });
if (metrics) counterObserver.observe(metrics);

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("filtered", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
});

const timeline = document.querySelector(".timeline");
const timelineProgress = document.querySelector(".timeline-progress");
window.addEventListener("scroll", () => {
  if (!timeline) return;
  const rect = timeline.getBoundingClientRect();
  const visible = Math.min(Math.max(window.innerHeight * 0.65 - rect.top, 0), rect.height);
  timelineProgress.style.height = `${visible}px`;
}, { passive: true });

if (currentPage === "index.html" || currentPage === "") {
  const canvas = document.getElementById("particleCanvas");
  if (canvas) {
    const context = canvas.getContext("2d");
    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    let animationFrame;

    function resizeCanvas() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = window.innerWidth < 640 ? 26 : 62;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.4 + 0.5
      }));
    }

    function drawParticles() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        const dxMouse = particle.x - mouse.x;
        const dyMouse = particle.y - mouse.y;
        const mouseDistance = Math.hypot(dxMouse, dyMouse);
        if (mouseDistance < 105 && mouseDistance > 0) {
          particle.x += (dxMouse / mouseDistance) * 0.8;
          particle.y += (dyMouse / mouseDistance) * 0.8;
        }
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(0, 212, 255, .42)";
        context.fill();
        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 135) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(0, 212, 255, ${0.09 * (1 - distance / 135)})`;
            context.stroke();
          }
        }
      });
      animationFrame = requestAnimationFrame(drawParticles);
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      resizeCanvas();
      drawParticles();
      window.addEventListener("resize", resizeCanvas);
      document.querySelector(".hero").addEventListener("pointermove", (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      });
      document.querySelector(".hero").addEventListener("pointerleave", () => { mouse = { x: -1000, y: -1000 }; });
    } else {
      canvas.style.display = "none";
    }
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
