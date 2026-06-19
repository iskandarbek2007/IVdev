const translations = {
  ru: {
    navServices: "Услуги", navProjects: "Проекты", navPricing: "Цены", navProcess: "Процесс", navContact: "Контакты",
    available: "Доступен для новых проектов", heroKicker: "САЙТЫ / ПРИЛОЖЕНИЯ / BACKEND ДЛЯ БИЗНЕСА",
    heroLine1: "Сайты, приложения", heroLine2: "и backend", heroLine3: "для бизнеса.",
    heroCopy: "Разрабатываю быстрые сайты, мобильные приложения, API и системы заявок — от идеи и дизайна до запуска.",
    seeProjects: "Посмотреть работы", contactMe: "Обсудить проект", scroll: "Листайте, чтобы узнать больше",
    aboutLabel: "О разработке", aboutTitle: "Разработка от идеи до запуска — без разрыва между дизайном и кодом.",
    aboutP1: "Я разрабатываю веб-сайты, мобильные интерфейсы и backend-логику. Помогаю бизнесу запускать цифровые продукты: от идеи и дизайна до публикации и поддержки.",
    aboutP2: "Основные направления — сайты для бизнеса, приложения и системы заявок для малого бизнеса и сервисных компаний.",
    directions: "направления", freelance: "фриланс", development: "от идеи до запуска",
    skillsLabel: "Технологии", skillsTitle: "Технологии — инструмент, а не самоцель.",
    skillsCopy: "Подбираю стек под задачу: от лёгкого лендинга до приложения с базой данных, API и админ-панелью.",
    skill1Copy: "Быстрые адаптивные сайты и удобные интерфейсы.", skill2Copy: "Мобильные приложения для Android и iOS.",
    skill3Copy: "Backend, API, бизнес-логика и интеграции.", skill4Copy: "Данные, заявки, авторизация и админ-функции.",
    servicesLabel: "Услуги", servicesTitle: "Что я могу сделать для вашего бизнеса.",
    service1Title: "Сайт для бизнеса", service1Copy: "Презентация услуг и форма, через которую клиенты смогут оставить заявку.",
    service2Title: "Мобильное приложение", service2Copy: "Приложение для Android и iOS с удобным интерфейсом и серверной частью.",
    service3Title: "Backend и API", service3Copy: "Авторизация, бизнес-логика, платежи и интеграции с внешними сервисами.",
    service4Title: "Telegram-интеграция", service4Copy: "Заявки с сайта будут сразу приходить вам в Telegram.",
    service5Title: "База данных", service5Copy: "Хранение заявок, контента и пользователей с удобным управлением.",
    service6Title: "Админ-панель", service6Copy: "Меняйте данные и управляйте заявками без обновления приложения.",
    getEstimate: "Получить оценку", projectsLabel: "Кейсы", projectsTitle: "Проекты как решение конкретной задачи.",
    projectsCopy: "Показываю не только интерфейс, но и задачу, решение и практический результат.",
    portfolioTitle: "Персональное портфолио", coffeeTitle: "Сайт для кофейни", passwordTitle: "Менеджер паролей",
    caseTask: "Задача", caseSolution: "Решение", caseResult: "Результат",
    portfolioTask: "Собрать личный бренд и контакты в одном месте.",
    portfolioSolution: "Мультиязычный адаптивный сайт с проектами и быстрыми CTA.",
    portfolioResult: "Понятная презентация услуг для локальных и международных клиентов.",
    coffeeTask: "Показать меню, атмосферу и контакты кофейни.",
    coffeeSolution: "Адаптивный лендинг с визуальным меню и точками контакта.",
    coffeeResult: "Онлайн-витрина и понятный путь к визиту или заявке.",
    passwordTask: "Сделать хранение паролей понятным на мобильном устройстве.",
    passwordSolution: "React Native интерфейс с категориями, поиском и защищённым хранилищем.",
    passwordResult: "Единое место для управления данными без перегруженного интерфейса.",
    discussSimilar: "Обсудить похожий проект",
    pricingLabel: "Пакеты", pricingTitle: "Ориентир по стоимости.", popular: "Популярный",
    price1: "от 2 500 000 сум", price1Copy: "Одностраничный сайт, адаптив, форма заявки и базовая SEO-настройка.",
    price2: "от 5 000 000 сум", price2Copy: "Многостраничный сайт, услуги, формы, портфолио и аналитика.",
    price3: "от 10 000 000 сум", price3Copy: "Сайт или приложение с базой данных, API, авторизацией и админ-панелью.",
    pricingNote: "Точная стоимость зависит от функций, дизайна и сроков. После обсуждения вы получите понятную оценку.",
    processLabel: "Процесс работы", processTitle: "Понятные этапы без хаоса.",
    process1: "Обсуждение задачи", process2: "Структура и дизайн", process3: "Разработка",
    process4: "Формы, база и API", process5: "Тестирование", process6: "Запуск и поддержка",
    includedLabel: "Что входит", includedTitle: "Базовый стандарт каждой работы.",
    included1: "Адаптивная версия", included2: "Чистый и понятный код", included3: "Быстрая загрузка",
    included4: "Подключение домена", included5: "Форма заявки", included6: "Помощь с запуском",
    included7: "Поддержка после сдачи", included8: "Базовая SEO-настройка",
    contactLabel: "Новый проект", contactTitle1: "Есть идея для сайта", contactTitle2: "или приложения?",
    contactCopy: "Опишите задачу — я предложу структуру, технологии и примерную стоимость. Обычно отвечаю в течение дня.",
    telegramButton: "Написать в Telegram", directContact: "Предпочитаете написать сразу?", phone: "Телефон",
    formName: "Имя", formNamePlaceholder: "Как к вам обращаться?", formContact: "Telegram / WhatsApp",
    formContactPlaceholder: "@username или номер", formType: "Тип проекта", formType1: "Сайт для бизнеса",
    formType2: "Мобильное приложение", formType3: "Backend / API", formType4: "Другое",
    formBudget: "Бюджет", formBudget1: "До 3 000 000 сум", formBudget2: "3–7 млн сум",
    formBudget3: "7–15 млн сум", formBudget4: "Нужно оценить", formDescription: "Описание задачи",
    formDescriptionPlaceholder: "Что нужно создать и какие функции важны?", formSubmit: "Отправить заявку",
    backTop: "Наверх"
  },
  en: {
    navServices: "Services", navProjects: "Work", navPricing: "Pricing", navProcess: "Process", navContact: "Contact",
    available: "Available for new projects", heroKicker: "WEBSITES / APPS / BACKEND FOR BUSINESS",
    heroLine1: "Websites, apps", heroLine2: "and backend", heroLine3: "for business.",
    heroCopy: "I build fast websites, mobile apps, APIs and lead systems — from idea and design to launch.",
    seeProjects: "View work", contactMe: "Discuss a project", scroll: "Scroll to learn more",
    aboutLabel: "Development", aboutTitle: "From idea to launch, with design and code working together.",
    aboutP1: "I build websites, mobile interfaces and backend systems. I help businesses launch digital products from concept and design to deployment and support.",
    aboutP2: "My focus is business websites, apps and lead systems for small businesses and service companies.",
    directions: "core services", freelance: "freelance", development: "idea to launch",
    skillsLabel: "Technology", skillsTitle: "Technology is a tool, not the product.",
    skillsCopy: "I choose the stack for the job, from a focused landing page to a product with database, API and admin panel.",
    skill1Copy: "Fast responsive websites and clear interfaces.", skill2Copy: "Mobile apps for Android and iOS.",
    skill3Copy: "Backend, APIs, business logic and integrations.", skill4Copy: "Data, leads, authentication and admin features.",
    servicesLabel: "Services", servicesTitle: "What I can build for your business.",
    service1Title: "Business website", service1Copy: "Present your services and let customers submit requests.",
    service2Title: "Mobile application", service2Copy: "An Android and iOS app with a clear interface and backend.",
    service3Title: "Backend and API", service3Copy: "Authentication, business logic, payments and external integrations.",
    service4Title: "Telegram integration", service4Copy: "New website leads can arrive directly in Telegram.",
    service5Title: "Database", service5Copy: "Store and manage leads, content and users.",
    service6Title: "Admin panel", service6Copy: "Update data and manage requests without changing the app.",
    getEstimate: "Get an estimate", projectsLabel: "Case studies", projectsTitle: "Projects built around a clear problem.",
    projectsCopy: "Each case explains the task, solution and practical result.",
    portfolioTitle: "Personal portfolio", coffeeTitle: "Coffee shop website", passwordTitle: "Password manager",
    caseTask: "Task", caseSolution: "Solution", caseResult: "Result",
    portfolioTask: "Bring a personal brand, work and contacts into one place.",
    portfolioSolution: "A multilingual responsive website with projects and clear calls to action.",
    portfolioResult: "A focused service presentation for local and international clients.",
    coffeeTask: "Present the menu, atmosphere and contact details.",
    coffeeSolution: "A responsive landing page with a visual menu and clear contact paths.",
    coffeeResult: "An online storefront that guides visitors toward a visit or enquiry.",
    passwordTask: "Make password storage clear and usable on mobile.",
    passwordSolution: "A React Native interface with categories, search and secure storage.",
    passwordResult: "One simple place to manage sensitive data without a crowded interface.",
    discussSimilar: "Discuss a similar project",
    pricingLabel: "Packages", pricingTitle: "Starting prices.", popular: "Popular",
    price1: "from 2,500,000 UZS", price1Copy: "One-page website, responsive layout, lead form and basic SEO.",
    price2: "from 5,000,000 UZS", price2Copy: "Multi-page website, services, forms, portfolio and analytics.",
    price3: "from 10,000,000 UZS", price3Copy: "Website or app with database, API, authentication and admin panel.",
    pricingNote: "Final pricing depends on features, design and timeline. You will receive a clear estimate after a short discussion.",
    processLabel: "Process", processTitle: "Clear steps, no chaos.",
    process1: "Project discussion", process2: "Structure and design", process3: "Development",
    process4: "Forms, database and API", process5: "Testing", process6: "Launch and support",
    includedLabel: "Included", includedTitle: "A solid baseline for every project.",
    included1: "Responsive layout", included2: "Clean maintainable code", included3: "Fast loading",
    included4: "Domain connection", included5: "Lead form", included6: "Launch assistance",
    included7: "Post-launch support", included8: "Basic SEO setup",
    contactLabel: "New project", contactTitle1: "Have an idea for a website", contactTitle2: "or application?",
    contactCopy: "Describe your goal and I will suggest the structure, technology and estimated budget. I usually reply within one day.",
    telegramButton: "Message on Telegram", directContact: "Prefer to message directly?", phone: "Phone",
    formName: "Name", formNamePlaceholder: "How should I address you?", formContact: "Telegram / WhatsApp",
    formContactPlaceholder: "@username or phone number", formType: "Project type", formType1: "Business website",
    formType2: "Mobile application", formType3: "Backend / API", formType4: "Other",
    formBudget: "Budget", formBudget1: "Up to 3,000,000 UZS", formBudget2: "3–7 million UZS",
    formBudget3: "7–15 million UZS", formBudget4: "Need an estimate", formDescription: "Project details",
    formDescriptionPlaceholder: "What do you need and which features matter?", formSubmit: "Send enquiry",
    backTop: "Back to top"
  },
  uz: {
    navServices: "Xizmatlar", navProjects: "Loyihalar", navPricing: "Narxlar", navProcess: "Jarayon", navContact: "Aloqa",
    available: "Yangi loyihalar uchun ochiqman", heroKicker: "BIZNES UCHUN SAYTLAR / ILOVALAR / BACKEND",
    heroLine1: "Biznes uchun", heroLine2: "sayt, ilova", heroLine3: "va backend.",
    heroCopy: "Tezkor saytlar, mobil ilovalar, API va ariza tizimlarini g'oyadan dizayn va ishga tushirishgacha yarataman.",
    seeProjects: "Ishlarni ko'rish", contactMe: "Loyihani muhokama qilish", scroll: "Ko'proq bilish uchun pastga",
    aboutLabel: "Dasturlash", aboutTitle: "G'oyadan ishga tushirishgacha — dizayn va kod birgalikda.",
    aboutP1: "Veb-saytlar, mobil interfeyslar va backend tizimlarini yarataman. Biznesga raqamli mahsulotni g'oya va dizayndan nashr hamda qo'llab-quvvatlashgacha ishga tushirishga yordam beraman.",
    aboutP2: "Asosiy yo'nalishlar: kichik biznes va servis kompaniyalari uchun saytlar, ilovalar va ariza tizimlari.",
    directions: "yo'nalish", freelance: "frilans", development: "g'oyadan ishga tushirishgacha",
    skillsLabel: "Texnologiyalar", skillsTitle: "Texnologiya — vosita, mahsulot emas.",
    skillsCopy: "Vazifaga mos stek tanlayman: oddiy landingdan baza, API va admin panelga ega ilovagacha.",
    skill1Copy: "Tezkor moslashuvchan saytlar va qulay interfeyslar.", skill2Copy: "Android va iOS uchun mobil ilovalar.",
    skill3Copy: "Backend, API, biznes mantiqi va integratsiyalar.", skill4Copy: "Ma'lumotlar, arizalar, avtorizatsiya va admin funksiyalar.",
    servicesLabel: "Xizmatlar", servicesTitle: "Biznesingiz uchun nimalar yarata olaman.",
    service1Title: "Biznes sayti", service1Copy: "Xizmatlarni ko'rsatish va mijozlardan ariza olish.",
    service2Title: "Mobil ilova", service2Copy: "Android va iOS uchun qulay interfeys va backendga ega ilova.",
    service3Title: "Backend va API", service3Copy: "Avtorizatsiya, biznes mantiqi, to'lovlar va integratsiyalar.",
    service4Title: "Telegram integratsiyasi", service4Copy: "Saytdagi yangi arizalar to'g'ridan-to'g'ri Telegramga keladi.",
    service5Title: "Ma'lumotlar bazasi", service5Copy: "Arizalar, kontent va foydalanuvchilarni saqlash va boshqarish.",
    service6Title: "Admin panel", service6Copy: "Ilovani yangilamasdan ma'lumot va arizalarni boshqaring.",
    getEstimate: "Narxni bilish", projectsLabel: "Keyslar", projectsTitle: "Aniq vazifa uchun yaratilgan loyihalar.",
    projectsCopy: "Har bir keysda vazifa, yechim va amaliy natija ko'rsatilgan.",
    portfolioTitle: "Shaxsiy portfolio", coffeeTitle: "Kofeyna sayti", passwordTitle: "Parol menejeri",
    caseTask: "Vazifa", caseSolution: "Yechim", caseResult: "Natija",
    portfolioTask: "Shaxsiy brend, ishlar va aloqalarni bir joyga yig'ish.",
    portfolioSolution: "Loyihalar va aniq CTA'larga ega ko'p tilli moslashuvchan sayt.",
    portfolioResult: "Mahalliy va xalqaro mijozlar uchun tushunarli xizmat taqdimoti.",
    coffeeTask: "Menyu, atmosfera va kontaktlarni ko'rsatish.",
    coffeeSolution: "Vizual menyu va aniq aloqa yo'llariga ega moslashuvchan landing.",
    coffeeResult: "Tashrif yoki arizaga olib boradigan onlayn vitrina.",
    passwordTask: "Parollarni mobil qurilmada tushunarli saqlash.",
    passwordSolution: "Kategoriyalar, qidiruv va xavfsiz saqlashga ega React Native interfeysi.",
    passwordResult: "Ortiqcha murakkabliksiz maxfiy ma'lumotlarni boshqarish joyi.",
    discussSimilar: "O'xshash loyihani muhokama qilish",
    pricingLabel: "Paketlar", pricingTitle: "Boshlang'ich narxlar.", popular: "Ommabop",
    price1: "2 500 000 so'mdan", price1Copy: "Bir sahifali sayt, adaptiv, ariza formasi va asosiy SEO.",
    price2: "5 000 000 so'mdan", price2Copy: "Ko'p sahifali sayt, xizmatlar, formalar, portfolio va analitika.",
    price3: "10 000 000 so'mdan", price3Copy: "Baza, API, avtorizatsiya va admin panelga ega sayt yoki ilova.",
    pricingNote: "Aniq narx funksiyalar, dizayn va muddatga bog'liq. Muhokamadan so'ng tushunarli baho olasiz.",
    processLabel: "Ish jarayoni", processTitle: "Tushunarli bosqichlar, tartibli ish.",
    process1: "Vazifani muhokama qilish", process2: "Tuzilma va dizayn", process3: "Dasturlash",
    process4: "Forma, baza va API", process5: "Test", process6: "Ishga tushirish va yordam",
    includedLabel: "Nimalar kiradi", includedTitle: "Har bir loyiha uchun asosiy standart.",
    included1: "Moslashuvchan versiya", included2: "Toza va tushunarli kod", included3: "Tez yuklanish",
    included4: "Domen ulash", included5: "Ariza formasi", included6: "Ishga tushirishda yordam",
    included7: "Topshirgandan keyingi yordam", included8: "Asosiy SEO sozlamasi",
    contactLabel: "Yangi loyiha", contactTitle1: "Sayt yoki ilova uchun", contactTitle2: "g'oyangiz bormi?",
    contactCopy: "Vazifani yozing — men tuzilma, texnologiya va taxminiy narxni taklif qilaman. Odatda bir kun ichida javob beraman.",
    telegramButton: "Telegram orqali yozish", directContact: "Darhol yozishni xohlaysizmi?", phone: "Telefon",
    formName: "Ism", formNamePlaceholder: "Sizga qanday murojaat qilay?", formContact: "Telegram / WhatsApp",
    formContactPlaceholder: "@username yoki raqam", formType: "Loyiha turi", formType1: "Biznes sayti",
    formType2: "Mobil ilova", formType3: "Backend / API", formType4: "Boshqa",
    formBudget: "Budjet", formBudget1: "3 000 000 so'mgacha", formBudget2: "3–7 mln so'm",
    formBudget3: "7–15 mln so'm", formBudget4: "Baholash kerak", formDescription: "Vazifa tavsifi",
    formDescriptionPlaceholder: "Nima yaratish va qaysi funksiyalar muhim?", formSubmit: "Ariza yuborish",
    backTop: "Yuqoriga"
  }
};

const languageButtons = document.querySelectorAll(".lang");
const textElements = document.querySelectorAll("[data-i18n]");
const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
let currentLanguage = localStorage.getItem("iv-language") || "ru";

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "ru";
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;

  textElements.forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  placeholderElements.forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.placeholder = value;
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
  });

  localStorage.setItem("iv-language", currentLanguage);
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(currentLanguage);

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuButton.classList.remove("is-open");
  mobileMenu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuButton.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.querySelectorAll("a").forEach((link, index) => {
  link.style.setProperty("--menu-delay", `${index * 60}ms`);
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 28), { passive: true });

const revealElements = document.querySelectorAll(".reveal");
document.querySelectorAll(".stagger-group").forEach((group) => {
  group.querySelectorAll(":scope > .reveal").forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${index * 120}ms`);
  });
});
revealElements.forEach((element) => {
  if (element.dataset.delay) element.style.setProperty("--reveal-delay", `${element.dataset.delay}ms`);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: "0px 0px -7% 0px" });

requestAnimationFrame(() => requestAnimationFrame(() => revealElements.forEach((element) => revealObserver.observe(element))));

const video = document.querySelector(".hero-video video");
const videoFallback = document.querySelector(".hero-fallback");
if (video) {
  const showFallback = () => videoFallback.classList.add("is-visible");
  video.addEventListener("error", showFallback, { once: true });
  video.querySelector("source")?.addEventListener("error", showFallback, { once: true });
  video.play().catch(() => {});
}

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "media-fallback";
    fallback.textContent = "I.V";
    image.replaceWith(fallback);
  }, { once: true });
});

const projectForm = document.getElementById("project-form");
projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(projectForm);
  const subject = encodeURIComponent(`Новая заявка: ${data.get("type")}`);
  const body = encodeURIComponent(
    `Имя: ${data.get("name")}\nКонтакт: ${data.get("contact")}\nТип проекта: ${data.get("type")}\nБюджет: ${data.get("budget")}\n\nЗадача:\n${data.get("description")}`
  );
  window.location.href = `mailto:iskandarbek2007@gmail.com?subject=${subject}&body=${body}`;
});

const cursorGlow = document.querySelector(".cursor-glow");
let pointerFrame = 0;
window.addEventListener("pointermove", (event) => {
  if (window.matchMedia("(pointer: coarse)").matches || pointerFrame) return;
  pointerFrame = requestAnimationFrame(() => {
    cursorGlow.style.transform = `translate3d(${event.clientX - 240}px, ${event.clientY - 240}px, 0)`;
    pointerFrame = 0;
  });
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();
