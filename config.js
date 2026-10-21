// Настройки страниц эфира. Меняются здесь, в одном месте; HTML трогать не нужно.

// Приёмник заявок CRM (POST, без авторизации). Адрес относительный: запрос идёт на тот же
// домен, где лежат страницы, а его nginx проксирует /api/public/forms/ в CRM
// (deploy/nginx-efir.conf). Полный адрес другого домена — только с CORS на стороне CRM.
var FORM_ENDPOINT = "/api/public/forms/nastya-shumilova/zayavka";

// Ссылка на оплату брони в GetCourse. Пока пусто — кнопка «Оплатить бронь»
// неактивна и под ней написано «Оплата скоро откроется».
var PAY_URL = "";

// Мессенджеры Насти: ?text= и ?ref= подставляют слово-пароль для менеджера
var TG_ZAYAVKA = "https://t.me/Shymilova_Anastasia?text=%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0";
var VK_ZAYAVKA = "https://vk.me/nastya_shymilova?ref=zayavka";
var TG_BRON = "https://t.me/Shymilova_Anastasia?text=%D0%B1%D1%80%D0%BE%D0%BD%D1%8C";
var VK_BRON = "https://vk.me/nastya_shymilova?ref=bron";

// Документы школы (те же, что на neyromani.ru/nastya)
var POLICY_URL = "https://docs.google.com/document/d/1l2_z_K76LDmOkL7-rrOyRlpAAwSARFP5YIPA_q3ksEM/edit?usp=drive_link";
var CONSENT_URL = "https://docs.google.com/document/d/1Z3mx-_sXKWor2eaHb1ggFuuFx8hGXhhseDe0-Iuvx9s/edit?usp=drive_link";
