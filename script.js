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
    portfolioTitle: "Решения для бизнеса.", portfolioTitleAccent: "Разные задачи.", portfolioIntro: "Решения для продаж, презентации бизнеса, сервисов и внутренних процессов.",
    filterAll: "Все", filterBusiness: "Бизнес", filterCommerce: "Продажи", filterAutomation: "Автоматизация", caseTask: "Задача", caseResult: "Результат", caseTime: "Срок", projectOneTitle: "Персональная digital-платформа", projectOneShort: "Выразительная презентация экспертизы и прямой путь к заявке.",
    projectTwoTitle: "Сайт современной кофейни", projectTwoShort: "Атмосфера бренда, меню и понятный сценарий бронирования.",
    projectThreeShort: "Безопасное мобильное хранилище с ясным интерфейсом.", viewCase: "Смотреть кейс ↗",
    projectPropertyTitle: "Жилой комплекс Nova", projectPropertyShort: "Планировки, ход строительства и запись на просмотр.", projectDentalTitle: "Стоматология Denta Care", projectDentalShort: "Услуги, врачи, цены и запись на консультацию.",
    projectEducationTitle: "Учебный центр Level Up", projectEducationShort: "Курсы, преподаватели и запись на пробный урок.", projectShopTitle: "Интернет-магазин Mono", projectShopShort: "Каталог, фильтры, корзина и оплата заказов.",
    projectB2bTitle: "Каталог B2B-поставщика", projectB2bShort: "Товары, спецификации и запрос коммерческого предложения.", projectAutoTitle: "Автосервис Drive Lab", projectAutoShort: "Услуги, расчёт стоимости и запись на обслуживание.",
    projectBeautyTitle: "Салон красоты Sélene", projectBeautyShort: "Мастера, услуги, портфолио и онлайн-запись.", projectCrmTitle: "CRM для отдела продаж", projectCrmShort: "Сделки, задачи, сотрудники и отчёты в одном интерфейсе.",
    projectBotTitle: "Бот для заявок и доставки", projectBotShort: "Приём заказов, статусы и уведомления менеджеру.", projectDeliveryTitle: "Приложение доставки Tez", projectDeliveryShort: "Каталог, заказ, оплата и отслеживание курьера.",
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
    audienceTitle: "Сайты для задач, которые уже стоят перед бизнесом.", audienceIntro: "Разбираемся в продукте, аудитории и пути клиента. Структура сайта зависит от того, как вы продаёте и какое действие ждёте от посетителя.",
    audienceBusiness: "Компании и услуги", audienceBusinessText: "Презентация компании, услуг и понятный путь к заявке.", audienceExperts: "Эксперты", audienceExpertsText: "Упаковка опыта, программ и личного бренда.",
    audienceStores: "Магазины", audienceStoresText: "Каталог, оплата и удобный выбор с телефона.", audienceProperty: "Недвижимость", audiencePropertyText: "Объекты, планировки и сбор обращений покупателей.",
    audienceMedicine: "Медицина", audienceMedicineText: "Услуги, специалисты, доверие и запись на приём.", audienceEducation: "Образование", audienceEducationText: "Курсы, программы и запись на консультацию.", audienceStartups: "Новые продукты", audienceStartupsText: "Первая версия сервиса для проверки идеи и запуска продаж.",
    resultsTitle: "Что получает клиент после запуска.", resultsIntro: "Вы получаете рабочий инструмент для продаж и коммуникации, а не набор несвязанных экранов.", seeProcess: "Посмотреть процесс работы",
    resultLeads: "Путь к заявке", resultLeadsText: "Посетитель понимает предложение и быстро выходит на связь.", resultStructure: "Понятная структура", resultStructureText: "Страницы и блоки отвечают на вопросы клиента в нужном порядке.",
    resultMobile: "Мобильная версия", resultMobileText: "Сайт удобно читать, выбирать и заполнять с телефона.", resultSeo: "SEO-основа", resultSeoText: "Корректная структура, метаданные и техническая база для продвижения.",
    resultAnalytics: "Аналитика", resultAnalyticsText: "Вы видите источники переходов, клики и отправленные заявки.", resultControl: "Удобное управление", resultControlText: "Контент можно обновлять без переделки всего сайта.",
    metricLandingDays: "дней на лендинг", metricLanguages: "языка: RU, UZ, EN", metricMobile: "адаптация под телефон", metricIntegrations: "варианта интеграций",
    customTitle: "Проектируем вокруг вашей задачи.", customIntro: "Каждое решение связано с целью проекта: от структуры страниц до форм, интеграций и поддержки после запуска.",
    customStrategy: "Стратегия", customStrategyText: "Фиксируем цель, аудиторию, предложение и нужное действие клиента.", customDesign: "Дизайн", customDesignText: "Создаём визуальную систему вокруг бренда и сценариев посетителя.",
    customDevelopment: "Разработка", customDevelopmentText: "Собираем быстрый сайт, формы и нужные бизнес-интеграции.", customResponsive: "Адаптив", customResponsiveText: "Проверяем ключевые сценарии на телефоне, планшете и компьютере.",
    customSpeed: "Скорость", customSpeedText: "Оптимизируем изображения, код и загрузку основных страниц.", customSupport: "Поддержка", customSupportText: "Помогаем с доменом, запуском, обновлениями и развитием сайта.",
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
    portfolioTitle: "Business solutions.", portfolioTitleAccent: "Different challenges.", portfolioIntro: "Solutions for sales, business presentation, services and internal operations.",
    filterAll: "All", filterBusiness: "Business", filterCommerce: "Sales", filterAutomation: "Automation", caseTask: "Task", caseResult: "Result", caseTime: "Timeline", projectOneTitle: "Personal digital platform", projectOneShort: "An expressive presentation of expertise with a direct route to contact.",
    projectTwoTitle: "Contemporary coffee shop website", projectTwoShort: "Brand atmosphere, menu and a clear booking journey.",
    projectThreeShort: "A secure mobile vault with a clear interface.", viewCase: "View case ↗",
    projectPropertyTitle: "Nova residential complex", projectPropertyShort: "Floor plans, construction progress and viewing appointments.", projectDentalTitle: "Denta Care clinic", projectDentalShort: "Services, doctors, pricing and consultation booking.",
    projectEducationTitle: "Level Up learning center", projectEducationShort: "Courses, teachers and trial lesson enrollment.", projectShopTitle: "Mono online store", projectShopShort: "Catalog, filters, cart and order payments.",
    projectB2bTitle: "B2B supplier catalog", projectB2bShort: "Products, specifications and quote requests.", projectAutoTitle: "Drive Lab auto service", projectAutoShort: "Services, cost estimate and maintenance booking.",
    projectBeautyTitle: "Sélene beauty studio", projectBeautyShort: "Specialists, services, portfolio and online booking.", projectCrmTitle: "Sales team CRM", projectCrmShort: "Deals, tasks, employees and reports in one interface.",
    projectBotTitle: "Order and delivery bot", projectBotShort: "Order intake, statuses and manager notifications.", projectDeliveryTitle: "Tez delivery app", projectDeliveryShort: "Catalog, ordering, payment and courier tracking.",
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
    audienceTitle: "Websites built for real business needs.", audienceIntro: "We study your product, audience and customer journey. The site structure follows how you sell and what you need visitors to do.",
    audienceBusiness: "Companies and services", audienceBusinessText: "A clear presentation of the company, its services and the route to an enquiry.", audienceExperts: "Experts", audienceExpertsText: "A focused presentation of your experience, programs and personal brand.",
    audienceStores: "Online stores", audienceStoresText: "Catalog, payments and comfortable mobile shopping.", audienceProperty: "Real estate", audiencePropertyText: "Properties, floor plans and buyer enquiries.",
    audienceMedicine: "Healthcare", audienceMedicineText: "Services, specialists, trust and appointment booking.", audienceEducation: "Education", audienceEducationText: "Courses, programs and consultation booking.", audienceStartups: "New products", audienceStartupsText: "A first service version for validating an idea and starting sales.",
    resultsTitle: "What you receive after launch.", resultsIntro: "You receive a working sales and communication tool with a clear system behind every screen.", seeProcess: "View our process",
    resultLeads: "Route to enquiry", resultLeadsText: "Visitors understand the offer and can contact you fast.", resultStructure: "Clear structure", resultStructureText: "Pages answer customer questions in the right order.",
    resultMobile: "Mobile experience", resultMobileText: "Visitors can read, choose and submit forms comfortably from a phone.", resultSeo: "SEO foundation", resultSeoText: "Correct structure, metadata and a technical base for promotion.",
    resultAnalytics: "Analytics", resultAnalyticsText: "You can see traffic sources, clicks and submitted enquiries.", resultControl: "Easy management", resultControlText: "You can update content without rebuilding the site.",
    metricLandingDays: "days for a landing page", metricLanguages: "languages: RU, UZ, EN", metricMobile: "mobile adaptation", metricIntegrations: "integration options",
    customTitle: "Designed around your specific task.", customIntro: "Each decision supports the project goal, from page structure to forms, integrations and post-launch support.",
    customStrategy: "Strategy", customStrategyText: "We define the goal, audience, offer and desired customer action.", customDesign: "Design", customDesignText: "We build a visual system around your brand and visitor journeys.",
    customDevelopment: "Development", customDevelopmentText: "We build a fast site, forms and the business integrations you need.", customResponsive: "Responsive", customResponsiveText: "We test key journeys on phones, tablets and computers.",
    customSpeed: "Performance", customSpeedText: "We optimize images, code and loading of the main pages.", customSupport: "Support", customSupportText: "We help with the domain, launch, updates and continued development.",
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
    portfolioTitle: "Biznes uchun yechimlar.", portfolioTitleAccent: "Turli vazifalar.", portfolioIntro: "Savdo, biznes taqdimoti, servislar va ichki jarayonlar uchun yechimlar.",
    filterAll: "Barchasi", filterBusiness: "Biznes", filterCommerce: "Savdo", filterAutomation: "Avtomatlashtirish", caseTask: "Vazifa", caseResult: "Natija", caseTime: "Muddat", projectOneTitle: "Shaxsiy raqamli platforma", projectOneShort: "Tajribani kuchli ko‘rsatish va mijozni to‘g‘ri aloqaga olib borish.",
    projectTwoTitle: "Zamonaviy qahvaxona sayti", projectTwoShort: "Brend muhiti, menyu va tushunarli bron qilish jarayoni.",
    projectThreeShort: "Aniq interfeysli xavfsiz mobil parol ombori.", viewCase: "Loyihani ko‘rish ↗",
    projectPropertyTitle: "Nova turar joy majmuasi", projectPropertyShort: "Rejalar, qurilish jarayoni va ko‘rishga yozilish.", projectDentalTitle: "Denta Care stomatologiyasi", projectDentalShort: "Xizmatlar, shifokorlar, narxlar va maslahatga yozilish.",
    projectEducationTitle: "Level Up o‘quv markazi", projectEducationShort: "Kurslar, o‘qituvchilar va sinov darsiga yozilish.", projectShopTitle: "Mono internet-do‘koni", projectShopShort: "Katalog, filtrlar, savat va buyurtma to‘lovi.",
    projectB2bTitle: "B2B yetkazib beruvchi katalogi", projectB2bShort: "Mahsulotlar, xususiyatlar va tijorat taklifi so‘rovi.", projectAutoTitle: "Drive Lab avtoservisi", projectAutoShort: "Xizmatlar, narx hisobi va ta’mirga yozilish.",
    projectBeautyTitle: "Sélene go‘zallik saloni", projectBeautyShort: "Ustalar, xizmatlar, portfolio va onlayn yozilish.", projectCrmTitle: "Savdo bo‘limi uchun CRM", projectCrmShort: "Bitimlar, vazifalar, xodimlar va hisobotlar bitta interfeysda.",
    projectBotTitle: "Buyurtma va yetkazib berish boti", projectBotShort: "Buyurtmalarni qabul qilish, statuslar va menejerga xabarlar.", projectDeliveryTitle: "Tez yetkazib berish ilovasi", projectDeliveryShort: "Katalog, buyurtma, to‘lov va kuryerni kuzatish.",
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
    audienceTitle: "Biznes oldidagi vazifalar uchun saytlar.", audienceIntro: "Mahsulot, auditoriya va mijoz yo‘lini o‘rganamiz. Sayt tuzilmasi savdo usulingiz va tashrifchidan kutgan harakatingizga mos bo‘ladi.",
    audienceBusiness: "Kompaniya va xizmatlar", audienceBusinessText: "Kompaniya, xizmatlar va murojaatga olib boruvchi aniq yo‘l.", audienceExperts: "Mutaxassislar", audienceExpertsText: "Tajriba, dasturlar va shaxsiy brend taqdimoti.",
    audienceStores: "Do‘konlar", audienceStoresText: "Katalog, to‘lov va telefonda qulay tanlov.", audienceProperty: "Ko‘chmas mulk", audiencePropertyText: "Obyektlar, rejalar va xaridor murojaatlari.",
    audienceMedicine: "Tibbiyot", audienceMedicineText: "Xizmatlar, mutaxassislar, ishonch va qabulga yozilish.", audienceEducation: "Ta’lim", audienceEducationText: "Kurslar, dasturlar va maslahatga yozilish.", audienceStartups: "Yangi mahsulotlar", audienceStartupsText: "G‘oyani tekshirish va sotuvni boshlash uchun birinchi versiya.",
    resultsTitle: "Ishga tushgandan keyin nimalar olasiz.", resultsIntro: "Siz savdo va muloqot uchun aniq tizimga ega ishchi vositani olasiz.", seeProcess: "Ish jarayonini ko‘rish",
    resultLeads: "Murojaatga yo‘l", resultLeadsText: "Tashrifchi taklifni tushunadi va tez aloqa qiladi.", resultStructure: "Aniq tuzilma", resultStructureText: "Sahifalar mijoz savollariga kerakli tartibda javob beradi.",
    resultMobile: "Mobil versiya", resultMobileText: "Saytni telefonda o‘qish, tanlash va to‘ldirish qulay.", resultSeo: "SEO asosi", resultSeoText: "To‘g‘ri tuzilma, metama’lumotlar va rivojlantirish uchun texnik baza.",
    resultAnalytics: "Analitika", resultAnalyticsText: "O‘tish manbalari, bosishlar va yuborilgan arizalarni ko‘rasiz.", resultControl: "Qulay boshqaruv", resultControlText: "Kontentni saytni qayta qurmasdan yangilash mumkin.",
    metricLandingDays: "landing uchun kun", metricLanguages: "til: RU, UZ, EN", metricMobile: "telefon uchun moslashuv", metricIntegrations: "integratsiya turi",
    customTitle: "Loyihani vazifangiz atrofida quramiz.", customIntro: "Har bir yechim loyiha maqsadiga xizmat qiladi: sahifa tuzilmasidan formalar, integratsiyalar va keyingi yordamgacha.",
    customStrategy: "Strategiya", customStrategyText: "Maqsad, auditoriya, taklif va mijozdan kutilgan harakatni belgilaymiz.", customDesign: "Dizayn", customDesignText: "Brend va tashrifchi ssenariylari asosida vizual tizim yaratamiz.",
    customDevelopment: "Dasturlash", customDevelopmentText: "Tezkor sayt, formalar va kerakli biznes integratsiyalarini yaratamiz.", customResponsive: "Moslashuv", customResponsiveText: "Asosiy ssenariylarni telefon, planshet va kompyuterda tekshiramiz.",
    customSpeed: "Tezlik", customSpeedText: "Rasmlar, kod va asosiy sahifalar yuklanishini optimallashtiramiz.", customSupport: "Yordam", customSupportText: "Domen, ishga tushirish, yangilash va rivojlantirishda yordam beramiz.",
    standardTitle: "Production standarti bo‘yicha yaratilgan", standardText: "Barcha ekranlarga mos · qulay · tez · rivojlanishga tayyor", responseTime: "Odatda bir ish kuni ichida javob beraman", skipToContent: "Kontentga o‘tish"
  }
};

Object.assign(translations.ru, {
  pricingTitle: "Прозрачные цены.", pricingTitleAccent: "Оценка до старта.", pricingIntro: "Стоимость зависит от объёма страниц, функций и интеграций. До начала работы вы получаете состав проекта, сроки и итоговую сумму.",
  packagesTitle: "Три формата. Один стандарт.", packagesIntro: "Пакеты дают ориентир по бюджету. После короткого брифа мы фиксируем точный состав работ.", priceFrom: "от", pricingPopular: "Популярный",
  pricingStarterTitle: "Лендинг", pricingStarterTime: "1–2 недели", pricingStarter1: "Одностраничный сайт", pricingStarter2: "Адаптивный дизайн", pricingStarter3: "Базовая анимация", pricingStarter4: "Форма обратной связи", pricingStarter5: "SEO-основа", pricingStarter6: "Помощь с доменом и хостингом",
  pricingBusinessTitle: "Корпоративный сайт", pricingBusinessTime: "2–4 недели", pricingBusiness1: "Многостраничный сайт", pricingBusiness2: "Индивидуальный UI/UX", pricingBusiness3: "Анимация интерфейса", pricingBusiness4: "Админ-панель или CMS", pricingBusiness5: "CRM и аналитика", pricingBusiness6: "Блог или портфолио", pricingBusiness7: "Три языка", pricingBusiness8: "3 месяца поддержки",
  pricingEnterpriseTitle: "Веб-приложение", pricingEnterpriseTime: "4–8 недель", pricingEnterprise1: "Рабочее веб-приложение", pricingEnterprise2: "Backend и база данных", pricingEnterprise3: "Авторизация и роли", pricingEnterprise4: "API и интеграции", pricingEnterprise5: "Личный кабинет", pricingEnterprise6: "Платёжные системы", pricingEnterprise7: "Мобильная адаптация", pricingEnterprise8: "6 месяцев поддержки",
  valuesTitle: "Из чего складывается цена.", valuesIntro: "На смету влияют объём интерфейса, бизнес-логика, сроки и число интеграций.", valueComplexityTitle: "Объём", valueComplexityText: "Количество страниц, сценарии, формы и интеграции определяют объём разработки.", valueTimelineTitle: "Сроки", valueTimelineText: "Сжатый график требует отдельного планирования и резерва времени на согласование.", valueQualityTitle: "Проверка", valueQualityText: "В стоимость входят адаптивность, тестирование форм и проверка скорости.", valueTeamTitle: "Один контакт", valueTeamText: "Один специалист ведёт проект от структуры до запуска и хранит весь контекст.",
  pricingFaqTitle: "Вопросы о стоимости.", pricingFaqIntro: "Условия, которые важно согласовать до начала проекта.", pricingFaqOneQ: "Почему указана цена от?", pricingFaqOneA: "Два сайта с одинаковым числом страниц могут отличаться по логике и интеграциям. После брифа вы получаете фиксированную оценку.", pricingFaqTwoQ: "Можно начать с меньшего бюджета?", pricingFaqTwoA: "Да. Мы выделим основную задачу и запустим первую версию без второстепенных функций.", pricingFaqThreeQ: "Что входит в поддержку?", pricingFaqThreeA: "Исправление ошибок, небольшие изменения и консультации по работе сайта. Срок зависит от выбранного пакета.", pricingFaqFourQ: "Как проходит оплата?", pricingFaqFourA: "Обычно 50% перед стартом и 50% перед публикацией. Крупные проекты оплачиваются по этапам.", pricingCtaTitle: "Получите расчёт проекта.", pricingCtaText: "Опишите задачу, и я подготовлю состав работ, сроки и стоимость в сумах."
});

Object.assign(translations.en, {
  pricingTitle: "Clear pricing.", pricingTitleAccent: "Estimate before work.", pricingIntro: "The price depends on page count, features and integrations. Before work begins, you receive the project scope, timeline and total price.",
  packagesTitle: "Three formats. One standard.", packagesIntro: "Packages provide a budget guide. A short brief gives us the final scope.", priceFrom: "from", pricingPopular: "Popular",
  pricingStarterTitle: "Landing page", pricingStarterTime: "1–2 weeks", pricingStarter1: "Single-page website", pricingStarter2: "Responsive design", pricingStarter3: "Basic motion", pricingStarter4: "Contact form", pricingStarter5: "SEO foundation", pricingStarter6: "Domain and hosting setup",
  pricingBusinessTitle: "Corporate website", pricingBusinessTime: "2–4 weeks", pricingBusiness1: "Multi-page website", pricingBusiness2: "Custom UI/UX", pricingBusiness3: "Interface motion", pricingBusiness4: "Admin panel or CMS", pricingBusiness5: "CRM and analytics", pricingBusiness6: "Blog or portfolio", pricingBusiness7: "Three languages", pricingBusiness8: "3 months of support",
  pricingEnterpriseTitle: "Web application", pricingEnterpriseTime: "4–8 weeks", pricingEnterprise1: "Production web application", pricingEnterprise2: "Backend and database", pricingEnterprise3: "Authentication and roles", pricingEnterprise4: "API and integrations", pricingEnterprise5: "User account", pricingEnterprise6: "Payment systems", pricingEnterprise7: "Mobile adaptation", pricingEnterprise8: "6 months of support",
  valuesTitle: "What determines the price.", valuesIntro: "Interface scope, business logic, timeline and integrations determine the estimate.", valueComplexityTitle: "Scope", valueComplexityText: "Page count, user journeys, forms and integrations determine the development effort.", valueTimelineTitle: "Timeline", valueTimelineText: "A compressed schedule needs focused planning and review time.", valueQualityTitle: "Verification", valueQualityText: "Responsive behavior, form testing and speed checks are included.", valueTeamTitle: "One contact", valueTeamText: "One specialist leads the project from structure to launch and keeps the full context.",
  pricingFaqTitle: "Pricing questions.", pricingFaqIntro: "Terms worth agreeing on before work begins.", pricingFaqOneQ: "Why do prices start from a base amount?", pricingFaqOneA: "Two sites with the same page count can differ in logic and integrations. You receive a fixed estimate after the brief.", pricingFaqTwoQ: "Can we start with a smaller budget?", pricingFaqTwoA: "Yes. We can focus on the core task and launch the first version without secondary features.", pricingFaqThreeQ: "What does support include?", pricingFaqThreeA: "Bug fixes, small changes and guidance on using the site. The period depends on the package.", pricingFaqFourQ: "How does payment work?", pricingFaqFourA: "The standard split is 50% before work and 50% before publishing. Large projects use staged payments.", pricingCtaTitle: "Get a project estimate.", pricingCtaText: "Describe the task and I will prepare the scope, timeline and price in UZS."
});

Object.assign(translations.uz, {
  pricingTitle: "Aniq narxlar.", pricingTitleAccent: "Ishdan oldin hisob.", pricingIntro: "Narx sahifalar, funksiyalar va integratsiyalar hajmiga bog‘liq. Ish boshlanishidan oldin loyiha tarkibi, muddat va umumiy summani olasiz.",
  packagesTitle: "Uch format. Bitta standart.", packagesIntro: "Paketlar byudjet yo‘nalishini ko‘rsatadi. Qisqa brifdan keyin ish tarkibini belgilaymiz.", priceFrom: "dan", pricingPopular: "Ommabop",
  pricingStarterTitle: "Landing", pricingStarterTime: "1–2 hafta", pricingStarter1: "Bir sahifali sayt", pricingStarter2: "Moslashuvchan dizayn", pricingStarter3: "Asosiy animatsiya", pricingStarter4: "Aloqa formasi", pricingStarter5: "SEO asosi", pricingStarter6: "Domen va hostingni sozlash",
  pricingBusinessTitle: "Korporativ sayt", pricingBusinessTime: "2–4 hafta", pricingBusiness1: "Ko‘p sahifali sayt", pricingBusiness2: "Individual UI/UX", pricingBusiness3: "Interfeys animatsiyasi", pricingBusiness4: "Boshqaruv paneli yoki CMS", pricingBusiness5: "CRM va analitika", pricingBusiness6: "Blog yoki portfolio", pricingBusiness7: "Uch til", pricingBusiness8: "3 oy yordam",
  pricingEnterpriseTitle: "Veb-ilova", pricingEnterpriseTime: "4–8 hafta", pricingEnterprise1: "Ishchi veb-ilova", pricingEnterprise2: "Backend va ma’lumotlar bazasi", pricingEnterprise3: "Kirish va rollar", pricingEnterprise4: "API va integratsiyalar", pricingEnterprise5: "Shaxsiy kabinet", pricingEnterprise6: "To‘lov tizimlari", pricingEnterprise7: "Mobil moslashuv", pricingEnterprise8: "6 oy yordam",
  valuesTitle: "Narx nimadan tuziladi.", valuesIntro: "Interfeys hajmi, biznes mantiqi, muddat va integratsiyalar smetaga ta’sir qiladi.", valueComplexityTitle: "Hajm", valueComplexityText: "Sahifalar, ssenariylar, formalar va integratsiyalar ish hajmini belgilaydi.", valueTimelineTitle: "Muddat", valueTimelineText: "Qisqa muddat aniq reja va kelishuv uchun vaqt talab qiladi.", valueQualityTitle: "Tekshiruv", valueQualityText: "Moslashuv, formalarni sinash va tezlik tekshiruvi narxga kiradi.", valueTeamTitle: "Bitta aloqa", valueTeamText: "Bitta mutaxassis loyihani tuzilmadan ishga tushirishgacha olib boradi.",
  pricingFaqTitle: "Narx bo‘yicha savollar.", pricingFaqIntro: "Ish boshlanishidan oldin kelishib olish kerak bo‘lgan shartlar.", pricingFaqOneQ: "Nega narxlar boshlang‘ich summadan ko‘rsatilgan?", pricingFaqOneA: "Sahifalar soni bir xil bo‘lgan saytlar mantiq va integratsiyalar bo‘yicha farq qiladi. Brifdan keyin aniq hisob olasiz.", pricingFaqTwoQ: "Kichikroq byudjet bilan boshlash mumkinmi?", pricingFaqTwoA: "Ha. Asosiy vazifani ajratib, ikkinchi darajali funksiyalarsiz birinchi versiyani chiqaramiz.", pricingFaqThreeQ: "Yordamga nimalar kiradi?", pricingFaqThreeA: "Xatolarni tuzatish, kichik o‘zgarishlar va sayt bo‘yicha maslahat. Muddat paketga bog‘liq.", pricingFaqFourQ: "To‘lov qanday amalga oshiriladi?", pricingFaqFourA: "Odatda 50% ish oldidan va 50% nashrdan oldin. Katta loyihalar bosqichma-bosqich to‘lanadi.", pricingCtaTitle: "Loyiha hisobini oling.", pricingCtaText: "Vazifani yozing, men ish tarkibi, muddat va narxni so‘mda tayyorlayman."
});

Object.assign(translations.ru, {
  solutionsTitle: "Какие сайты и сервисы мы создаём.", solutionsIntro: "Вы выбираете задачу бизнеса. Мы предлагаем структуру, состав функций и подходящий формат запуска.",
  solutionLanding: "Лендинг", solutionLandingText: "Одна страница для рекламы услуги, продукта или мероприятия.", solutionLandingFit: "Для заявок и быстрого запуска",
  solutionCorporate: "Корпоративный сайт", solutionCorporateText: "Компания, услуги, команда, проекты и понятный путь к обращению.", solutionCorporateFit: "Для компаний и B2B",
  solutionShop: "Каталог и магазин", solutionShopText: "Товары, фильтры, корзина, оплата и передача заказов менеджеру.", solutionShopFit: "Для розницы и поставщиков",
  solutionCrm: "CRM и кабинеты", solutionCrmText: "Сделки, сотрудники, документы и отчёты в одном интерфейсе.", solutionCrmFit: "Для внутренних процессов",
  solutionBot: "Telegram-бот", solutionBotText: "Приём заявок, оплата, уведомления и ответы на частые вопросы.", solutionBotFit: "Для автоматизации общения",
  solutionMobile: "Мобильное приложение", solutionMobileText: "Сервис для Android и iOS с личным кабинетом и единым backend.", solutionMobileFit: "Для постоянных пользователей",
  solutionSupport: "Поддержка и SEO", solutionSupportText: "Обновляем контент, контролируем работу форм, скорость и техническую основу продвижения.", solutionSupportFit: "Для сайтов после запуска",
  siteAdvantagesTitle: "Сайт готов к работе после публикации.", siteAdvantagesIntro: "Мы проверяем интерфейс и техническую часть до передачи проекта. Вы получаете рабочую версию с понятными правилами поддержки.",
  advDesign: "Дизайн под бренд", advDesignText: "Стиль учитывает аудиторию, продукт и характер компании.", advStable: "Стабильная работа", advStableText: "Проверяем формы, навигацию и ключевые сценарии перед запуском.",
  advSecurity: "Безопасность", advSecurityText: "Защищаем формы, доступы и данные с учётом функций проекта.", advSpeed: "Быстрая загрузка", advSpeedText: "Сжимаем изображения и сокращаем лишний код на страницах.",
  advMobile: "Удобство с телефона", advMobileText: "Адаптируем контент, формы и кнопки под небольшие экраны.", advGrowth: "Готовность к развитию", advGrowthText: "Структура позволяет добавлять страницы, языки и интеграции.",
  stepOneText: "Обсуждаем продукт, аудиторию, конкурентов и путь клиента до заявки. Фиксируем нужные страницы, функции и ограничения проекта.", stepTwoText: "Собираем прототип, определяем визуальный стиль и проектируем состояния интерфейса. Сначала согласуем ключевой экран, затем внутренние страницы.",
  stepThreeText: "Переносим дизайн в код, подключаем формы, базу данных и внешние сервисы. Вы получаете ссылку на рабочую версию и видите прогресс.", stepFourText: "Проверяем телефоны и компьютеры, формы, ссылки, скорость загрузки и основные пользовательские сценарии. Исправляем найденные ошибки.",
  stepFiveText: "Подключаем домен, хостинг, аналитику и рабочие формы. После запуска следим за сайтом, помогаем с обновлениями и развитием.", stageOutput: "Результат этапа", stepOneOutput: "Структура сайта, список функций и план работ", stepTwoOutput: "Макеты главной и внутренних страниц", stepThreeOutput: "Рабочая версия сайта на тестовом адресе", stepFourOutput: "Проверенная версия, готовая к публикации", stepFiveOutput: "Сайт на вашем домене и инструкция по работе",
  caseAdvantagesTitle: "Берём ответственность за результат после запуска.", caseAdvantagesIntro: "Вы работаете с одним специалистом от первой структуры до публикации и дальнейших обновлений.",
  caseSupportTitle: "Сопровождаем сайт", caseSupportText: "Следим за формами, исправляем ошибки и помогаем развивать проект после публикации.", caseFastTitle: "Запускаем без затяжки", caseFastText: "Лендинг занимает от 5 до 14 дней, если контент и согласования готовы вовремя.",
  caseDesignTitle: "Проектируем под бренд", caseDesignText: "Дизайн учитывает аудиторию, предложение и действия посетителя.", caseContactTitle: "Остаёмся на связи", caseContactText: "Вы знаете статус работы, ближайший этап и решения, которые требуют согласования.",
  caseSafeTitle: "Проверяем стабильность", caseSafeText: "Тестируем формы, адаптивность, скорость и защиту данных перед запуском.", caseOneTitle: "Один ответственный", caseOneText: "Вам не нужно координировать дизайнера, разработчика и специалиста по запуску."
});

Object.assign(translations.en, {
  solutionsTitle: "Websites and services we build.", solutionsIntro: "You bring the business task. We propose the structure, feature set and launch format.",
  solutionLanding: "Landing page", solutionLandingText: "One focused page for an offer, product or event.", solutionLandingFit: "For enquiries and fast launches", solutionCorporate: "Corporate website", solutionCorporateText: "Company, services, team, projects and a clear route to contact.", solutionCorporateFit: "For companies and B2B",
  solutionShop: "Catalog and store", solutionShopText: "Products, filters, cart, payment and order handoff to a manager.", solutionShopFit: "For retail and suppliers", solutionCrm: "CRM and portals", solutionCrmText: "Deals, employees, documents and reports in one interface.", solutionCrmFit: "For internal operations",
  solutionBot: "Telegram bot", solutionBotText: "Enquiries, payments, notifications and answers to common questions.", solutionBotFit: "For communication automation", solutionMobile: "Mobile application", solutionMobileText: "An Android and iOS service with accounts and one backend.", solutionMobileFit: "For returning users",
  solutionSupport: "Support and SEO", solutionSupportText: "We update content and monitor forms, speed and the technical SEO foundation.", solutionSupportFit: "For websites after launch",
  siteAdvantagesTitle: "Ready for work after publishing.", siteAdvantagesIntro: "We verify the interface and technical side before handover. You receive a working version with clear support terms.",
  advDesign: "Brand-led design", advDesignText: "The style reflects your audience, product and company character.", advStable: "Stable operation", advStableText: "We test forms, navigation and key journeys before launch.", advSecurity: "Security", advSecurityText: "We protect forms, access and data based on project functions.", advSpeed: "Fast loading", advSpeedText: "We compress images and reduce unnecessary page code.", advMobile: "Comfortable on mobile", advMobileText: "We adapt content, forms and buttons for small screens.", advGrowth: "Ready to grow", advGrowthText: "The structure supports new pages, languages and integrations.",
  stepOneText: "We discuss the product, audience, competitors and the route to an enquiry. We define pages, features and project constraints.", stepTwoText: "We create a prototype, define the visual style and design interface states. We approve the key screen before internal pages.", stepThreeText: "We turn the design into code and connect forms, data and external services. You receive a link to the working build and can track progress.", stepFourText: "We test phones, computers, forms, links, loading speed and key user journeys. We fix the issues we find.", stepFiveText: "We connect the domain, hosting, analytics and forms. After launch, we monitor the site and help with updates.", stageOutput: "Stage result", stepOneOutput: "Site structure, feature list and work plan", stepTwoOutput: "Designs for the home and internal pages", stepThreeOutput: "Working site on a test address", stepFourOutput: "Verified build ready to publish", stepFiveOutput: "Website on your domain and usage guide",
  caseAdvantagesTitle: "We stay responsible after launch.", caseAdvantagesIntro: "You work with one specialist from the first structure through publishing and future updates.", caseSupportTitle: "Ongoing support", caseSupportText: "We monitor forms, fix issues and help develop the project after publishing.", caseFastTitle: "Focused delivery", caseFastText: "A landing page takes 5 to 14 days when content and approvals arrive on schedule.", caseDesignTitle: "Design for your brand", caseDesignText: "The design follows your audience, offer and visitor actions.", caseContactTitle: "Clear communication", caseContactText: "You know the current status, the next stage and which decisions need approval.", caseSafeTitle: "Stability checks", caseSafeText: "We test forms, responsiveness, speed and data protection before launch.", caseOneTitle: "One accountable partner", caseOneText: "You do not need to coordinate separate design, development and launch specialists."
});

Object.assign(translations.uz, {
  solutionsTitle: "Biz yaratadigan sayt va servislar.", solutionsIntro: "Siz biznes vazifasini aytasiz. Biz tuzilma, funksiyalar va ishga tushirish formatini taklif qilamiz.",
  solutionLanding: "Landing", solutionLandingText: "Xizmat, mahsulot yoki tadbir uchun bitta aniq sahifa.", solutionLandingFit: "Arizalar va tezkor start uchun", solutionCorporate: "Korporativ sayt", solutionCorporateText: "Kompaniya, xizmatlar, jamoa, loyihalar va murojaatga aniq yo‘l.", solutionCorporateFit: "Kompaniya va B2B uchun",
  solutionShop: "Katalog va do‘kon", solutionShopText: "Mahsulotlar, filtrlar, savat, to‘lov va buyurtmani menejerga yuborish.", solutionShopFit: "Chakana savdo va yetkazib beruvchilar uchun", solutionCrm: "CRM va kabinetlar", solutionCrmText: "Bitimlar, xodimlar, hujjatlar va hisobotlar bitta interfeysda.", solutionCrmFit: "Ichki jarayonlar uchun",
  solutionBot: "Telegram bot", solutionBotText: "Arizalar, to‘lovlar, xabarlar va ko‘p beriladigan savollarga javoblar.", solutionBotFit: "Muloqotni avtomatlashtirish uchun", solutionMobile: "Mobil ilova", solutionMobileText: "Android va iOS uchun kabinet va yagona backendga ega servis.", solutionMobileFit: "Doimiy foydalanuvchilar uchun",
  solutionSupport: "Yordam va SEO", solutionSupportText: "Kontentni yangilaymiz, formalar, tezlik va texnik SEO asosini nazorat qilamiz.", solutionSupportFit: "Ishga tushgan saytlar uchun",
  siteAdvantagesTitle: "Sayt nashrdan keyin ishga tayyor.", siteAdvantagesIntro: "Topshirishdan oldin interfeys va texnik qismni tekshiramiz. Siz aniq yordam shartlariga ega ishchi versiyani olasiz.",
  advDesign: "Brendga mos dizayn", advDesignText: "Uslub auditoriya, mahsulot va kompaniya xarakterini hisobga oladi.", advStable: "Barqaror ishlash", advStableText: "Formalar, navigatsiya va asosiy ssenariylarni startdan oldin tekshiramiz.", advSecurity: "Xavfsizlik", advSecurityText: "Formalar, kirish va ma’lumotlarni loyiha funksiyalariga mos himoya qilamiz.", advSpeed: "Tez yuklanish", advSpeedText: "Rasmlarni siqamiz va sahifadagi ortiqcha kodni kamaytiramiz.", advMobile: "Telefonda qulay", advMobileText: "Kontent, formalar va tugmalarni kichik ekranlarga moslaymiz.", advGrowth: "Rivojlanishga tayyor", advGrowthText: "Tuzilma yangi sahifalar, tillar va integratsiyalarni qo‘shishga imkon beradi.",
  stepOneText: "Mahsulot, auditoriya, raqobatchilar va mijozning arizagacha yo‘lini muhokama qilamiz. Sahifalar, funksiyalar va cheklovlarni belgilaymiz.", stepTwoText: "Prototip yaratamiz, vizual uslub va interfeys holatlarini loyihalaymiz. Avval asosiy ekranni, keyin ichki sahifalarni tasdiqlaymiz.", stepThreeText: "Dizaynni kodga o‘tkazamiz, formalar, ma’lumotlar va tashqi servislarni ulaymiz. Siz ishchi versiya havolasini olasiz.", stepFourText: "Telefon, kompyuter, formalar, havolalar, yuklanish tezligi va asosiy ssenariylarni tekshiramiz. Topilgan xatolarni tuzatamiz.", stepFiveText: "Domen, hosting, analitika va formalarni ulaymiz. Startdan keyin saytni kuzatamiz va yangilashda yordam beramiz.", stageOutput: "Bosqich natijasi", stepOneOutput: "Sayt tuzilmasi, funksiyalar va ish rejasi", stepTwoOutput: "Asosiy va ichki sahifalar dizayni", stepThreeOutput: "Sinov manzilidagi ishchi sayt", stepFourOutput: "Nashrga tayyor tekshirilgan versiya", stepFiveOutput: "Sizning domendagi sayt va foydalanish yo‘riqnomasi",
  caseAdvantagesTitle: "Ishga tushgandan keyin ham javobgarmiz.", caseAdvantagesIntro: "Birinchi tuzilmadan nashr va keyingi yangilashlargacha bitta mutaxassis bilan ishlaysiz.", caseSupportTitle: "Saytni kuzatamiz", caseSupportText: "Formalarni tekshiramiz, xatolarni tuzatamiz va nashrdan keyin loyihani rivojlantirishga yordam beramiz.", caseFastTitle: "Aniq muddat", caseFastText: "Kontent va tasdiqlar vaqtida kelsa, landing 5 dan 14 kungacha tayyor bo‘ladi.", caseDesignTitle: "Brendga mos dizayn", caseDesignText: "Dizayn auditoriya, taklif va tashrifchi harakatlarini hisobga oladi.", caseContactTitle: "Aniq aloqa", caseContactText: "Siz ish holati, keyingi bosqich va tasdiq talab qiladigan qarorlarni bilasiz.", caseSafeTitle: "Barqarorlik tekshiruvi", caseSafeText: "Startdan oldin formalar, moslashuv, tezlik va ma’lumotlar himoyasini tekshiramiz.", caseOneTitle: "Bitta mas’ul mutaxassis", caseOneText: "Dizayner, dasturchi va ishga tushirish mutaxassisini alohida boshqarishingiz shart emas."
});

const body = document.body;
const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const progress = document.querySelector(".scroll-progress");
let lastScroll = 0;

window.addEventListener("load", () => {
  window.setTimeout(() => document.querySelector(".preloader").classList.add("done"), 450);
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
        context.fillStyle = "rgba(38, 44, 50, .32)";
        context.fill();
        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 135) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(38, 44, 50, ${0.07 * (1 - distance / 135)})`;
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

const motionAllowed = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");

if (motionAllowed.matches) {
  const motionPanels = document.querySelectorAll([
    ".audience-card",
    ".teaser-card",
    ".proof-card",
    ".solution-card",
    ".service-card",
    ".pricing-card",
    ".value-card",
    ".case-advantage",
    ".contact-card",
    ".tech-item",
    ".step-card",
    ".faq-item",
    ".result-item",
    ".advantage-card",
    ".project-card"
  ].join(","));

  motionPanels.forEach((panel) => {
    panel.classList.add("motion-3d");
    const glint = document.createElement("span");
    glint.className = "motion-glint";
    glint.setAttribute("aria-hidden", "true");
    panel.append(glint);

    let frame = 0;
    panel.addEventListener("pointermove", (event) => {
      const rect = panel.getBoundingClientRect();
      const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
      const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        panel.classList.add("is-tilting");
        panel.style.setProperty("--motion-x", `${x * 100}%`);
        panel.style.setProperty("--motion-y", `${y * 100}%`);
        panel.style.transform = `perspective(950px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 7}deg) translateY(-3px)`;
      });
    });

    panel.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      panel.classList.remove("is-tilting");
      panel.style.removeProperty("transform");
      panel.style.setProperty("--motion-x", "50%");
      panel.style.setProperty("--motion-y", "50%");
    });
  });
}

const splineScenes = {
  index: "https://prod.spline.design/FK8-z41R9daZ0u25/scene.splinecode",
  services: "https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode",
  portfolio: "https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode",
  process: "https://prod.spline.design/LEvjG3OETYd2GsRw/scene.splinecode",
  contact: "https://prod.spline.design/U9O6K7fXziMEU7Wu/scene.splinecode"
};

const pricingSplineEmbed = "https://my.spline.design/motiontrails-6pO4zFc51sjxebAx17XdffDO/";
const homeSplineBackdrop = "https://my.spline.design/blackhole-3utK4GL7XaVEonHoio4jJsE0/";

function mountSplineHero() {
  const hero = document.querySelector(".hero, .page-hero");
  if (!hero) return;

  const pageName = document.body.dataset.page || "index";
  const sceneUrl = splineScenes[pageName] || splineScenes.index;
  const mountTarget = pageName === "index" ? document.querySelector(".hero-visual") || hero : hero;
  const layer = document.createElement("div");
  layer.className = `hero-spline hero-spline-${pageName}`;
  layer.setAttribute("aria-hidden", "true");

  const fallback = document.createElement("div");
  fallback.className = "spline-fallback-shape";
  layer.append(fallback);
  if (mountTarget === hero) hero.prepend(layer);
  else mountTarget.append(layer);

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const compactScreen = window.matchMedia("(max-width: 900px)").matches;
  if (reduceMotion || compactScreen || connection?.saveData) return;

  if (pageName === "index") {
    const backdrop = document.createElement("iframe");
    backdrop.className = "hero-blackhole-embed";
    backdrop.src = homeSplineBackdrop;
    backdrop.title = "Black Hole — интерактивная 3D-сцена";
    backdrop.loading = "eager";
    backdrop.allow = "autoplay; fullscreen";
    backdrop.referrerPolicy = "strict-origin-when-cross-origin";
    backdrop.addEventListener("load", () => mountTarget.classList.add("blackhole-ready"), { once: true });
    mountTarget.prepend(backdrop);
    layer.remove();
    return;
  }

  if (pageName === "pricing") {
    const embed = document.createElement("iframe");
    embed.className = "spline-public-embed";
    embed.src = pricingSplineEmbed;
    embed.title = "Motion Trails — интерактивная 3D-сцена";
    embed.loading = "eager";
    embed.allow = "autoplay; fullscreen";
    embed.referrerPolicy = "strict-origin-when-cross-origin";
    embed.addEventListener("load", () => layer.classList.add("is-ready"), { once: true });
    layer.append(embed);
    return;
  }

  ["https://unpkg.com", "https://prod.spline.design"].forEach((origin) => {
    if (document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) return;
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = origin;
    preconnect.crossOrigin = "anonymous";
    document.head.append(preconnect);
  });

  if (!document.querySelector('script[data-spline-viewer]')) {
    const viewerScript = document.createElement("script");
    viewerScript.type = "module";
    viewerScript.src = "https://unpkg.com/@splinetool/viewer@1.12.98/build/spline-viewer.js";
    viewerScript.dataset.splineViewer = "true";
    document.head.append(viewerScript);
  }

  const viewer = document.createElement("spline-viewer");
  viewer.setAttribute("url", sceneUrl);
  viewer.setAttribute("background", "transparent");
  viewer.setAttribute("events-target", "global");
  viewer.addEventListener("load", () => layer.classList.add("is-ready"), { once: true });
  layer.append(viewer);
  customElements.whenDefined("spline-viewer").then(() => {
    window.requestAnimationFrame(() => layer.classList.add("is-ready"));
  });
}

mountSplineHero();
