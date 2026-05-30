// ================================================
// ⚠ KONFIGURATION — Deinen OpenAI API Key eintragen
// ================================================
// ⚠ API Key hier eintragen (nicht auf GitHub hochladen!)
const OPENAI_API_KEY = '';

// ================================================
// I18N — Sprachumschaltung DE / EN
// ================================================

const LANG_KEY = 'weara_lang';

const i18n = {
  de: {
    // Nav
    'nav.methode': 'METHODE',
    'nav.kontakt': 'KONTAKT',
    // Index
    'index.hero.was': 'WAS',
    'index.hero.mid.html': 'ziehst <span class="text-pink">DU</span>',
    'index.hero.an': 'AN?',
    'index.tagline.html': 'Wetterdaten + gefühlte Temperatur + dein Stil.<br />Outfit in unter 30 Sekunden.',
    'index.nav.methode': 'METHODE →',
    // Mood
    'mood.sportlich': 'sportlich.',
    'mood.back': '← ZURÜCK',
    'mood.next': 'WEITER →',
    // Daten
    'daten.headline.your': 'DEINE',
    'daten.headline.please': 'bitte.',
    'daten.step1': 'DU BIST...',
    'daten.step2': 'WO BIST DU?',
    'daten.step3': 'WIE LANGE BIST DU UNTERWEGS?',
    'step.mood': 'STIMMUNG',
    'step.you': 'DU',
    'gender.frau': 'FRAU',
    'gender.mann': 'MANN',
    'gender.divers': 'DIVERS',
    'location.placeholder': 'STADT TIPPEN...',
    'duration.unit': 'Stunden',
    // GPS
    'gps.loading': '○ STANDORT WIRD GELADEN...',
    'gps.found': '✓ STANDORT ERKANNT',
    'gps.error': '○ STANDORT NICHT VERFÜGBAR',
    // Autocomplete
    'ac.searching': 'SUCHE...',
    'ac.noresults': 'KEINE ERGEBNISSE GEFUNDEN',
    // Validation errors
    'err.location.empty': 'STANDORT BITTE EINGEBEN',
    'err.location.select': 'BITTE ORTSCHAFT AUS DER LISTE AUSWÄHLEN',
    'err.duration': 'MINDESTENS 1 STUNDE ANGEBEN',
    // Outfit
    'outfit.today': 'HEUTE',
    'outfit.loading': 'ANALYSIERE WETTER + STIL...',
    'outfit.regen': '↺ NEU GENERIEREN',
    'outfit.restart': '← NEU STARTEN',
    'outfit.back': '← ZURÜCK',
    'outfit.analyzing': 'analysiert...',
    'outfit.feels': 'GEFÜHLT',
    'outfit.no_weather': 'kein Wetter verfügbar.',
    'outfit.weather_error': 'Wetterdaten konnten nicht geladen werden. Bitte Internetverbindung prüfen und neu generieren.',
    'outfit.weather_initial': 'WIRD GELADEN',
    'outfit.weather_desc_initial': 'Wetterdaten werden<br>abgerufen…',
    'outfit.duration':      (h)    => `${h}H unterwegs`,
    'outfit.duration.city': (h, c) => `${h}H unterwegs · ${c}`,
    'outfit.desc.evening':  (a, e) => `${a}° jetzt · ~${e}° abends`,
    'outfit.desc.rain':     (a, p) => `${a}° effektiv · Regen ${p}%`,
    // Kontakt
    'kontakt.tag': 'hast du ein problem?',
    'kontakt.h1.html': 'SCHREIB <span class="serif-italic">uns.</span>',
    'kontakt.sub.html': '— wir freuen uns über <span class="pink">DEINE</span> Nachricht.',
    'kontakt.name': 'DEIN NAME',
    'kontakt.email': 'DEINE E-MAIL',
    'kontakt.role': 'DEINE ROLLE',
    'kontakt.presse': 'PRESSE',
    'kontakt.message': '· DEINE NACHRICHT',
    'kontakt.placeholder': 'Hey WEARA, ich habe eine Frage...',
    'kontakt.privacy': 'deine Daten bleiben bei uns. Immer.',
    'kontakt.submit': 'NACHRICHT SCHICKEN',
    'kontakt.sent': '✓ GESENDET',
    'kontakt.back': '← ZURÜCK',
    // Weather labels
    'w.sunny':      'SONNIG',
    'w.clear':      'HEITER',
    'w.overcast':   'BEDECKT',
    'w.foggy':      'NEBLIG',
    'w.drizzle':    'NIESELREGEN',
    'w.rainy':      'REGNERISCH',
    'w.sleet':      'EISREGEN',
    'w.snow':       'SCHNEE',
    'w.snowgrain':  'SCHNEEGRIESEL',
    'w.showers':    'REGENSCHAUER',
    'w.snowshowers':'SCHNEESCHAUER',
    'w.thunder':    'GEWITTER',
    // Fallback text
    'fallback.intro':   (apparent, label, location, items) =>
      `Für ${apparent}°C und ${label} in ${location} empfehlen wir: ${items}.`,
    'fallback.evening': (endTemp) =>
      ` Die Temperaturen sinken gegen Abend auf ca. ${endTemp}° — pack eine extra Schicht ein.`,
    'fallback.rain':    (maxPrecip) =>
      ` Mit ${maxPrecip}% Regenwahrscheinlichkeit im Tagesverlauf lieber den Schirm mitnehmen.`,
    // AI prompt instruction
    'ai.lang_instruction':
      'Schreib 3–5 Sätze Fließtext auf Deutsch. Nenne konkrete Kleidungsstücke. Sei präzise, stilbewusst und praktisch. Erwähne bei Bedarf Sonnenschutz, Regenschutz oder eine Abendschicht. Kein Listenformat — nur Fließtext im klaren, redaktionellen WEARA-Ton.',
  },

  en: {
    // Nav
    'nav.methode': 'METHOD',
    'nav.kontakt': 'CONTACT',
    // Index
    'index.hero.was': 'WHAT',
    'index.hero.mid.html': 'do <span class="text-pink">YOU</span>',
    'index.hero.an': 'WEAR?',
    'index.tagline.html': 'Weather data + feels-like temperature + your style.<br />Your outfit in under 30 seconds.',
    'index.nav.methode': 'METHOD →',
    // Mood
    'mood.sportlich': 'sporty.',
    'mood.back': '← BACK',
    'mood.next': 'NEXT →',
    // Daten
    'daten.headline.your': 'YOUR',
    'daten.headline.please': 'please.',
    'daten.step1': 'YOU ARE...',
    'daten.step2': 'WHERE ARE YOU?',
    'daten.step3': 'HOW LONG WILL YOU BE OUT?',
    'step.mood': 'MOOD',
    'step.you': 'YOU',
    'gender.frau': 'WOMAN',
    'gender.mann': 'MAN',
    'gender.divers': 'DIVERSE',
    'location.placeholder': 'TYPE CITY...',
    'duration.unit': 'Hours',
    // GPS
    'gps.loading': '○ LOCATING...',
    'gps.found': '✓ LOCATION FOUND',
    'gps.error': '○ LOCATION UNAVAILABLE',
    // Autocomplete
    'ac.searching': 'SEARCHING...',
    'ac.noresults': 'NO RESULTS FOUND',
    // Validation errors
    'err.location.empty': 'PLEASE ENTER A LOCATION',
    'err.location.select': 'PLEASE SELECT A CITY FROM THE LIST',
    'err.duration': 'MINIMUM 1 HOUR REQUIRED',
    // Outfit
    'outfit.today': 'TODAY',
    'outfit.loading': 'ANALYSING WEATHER + STYLE...',
    'outfit.regen': '↺ REGENERATE',
    'outfit.restart': '← START OVER',
    'outfit.back': '← BACK',
    'outfit.analyzing': 'analysing...',
    'outfit.feels': 'FEELS LIKE',
    'outfit.no_weather': 'no weather available.',
    'outfit.weather_error': 'Weather data could not be loaded. Please check your connection and regenerate.',
    'outfit.weather_initial': 'LOADING',
    'outfit.weather_desc_initial': 'Fetching weather<br>data…',
    'outfit.duration':      (h)    => `${h}H out`,
    'outfit.duration.city': (h, c) => `${h}H out · ${c}`,
    'outfit.desc.evening':  (a, e) => `${a}° now · ~${e}° evening`,
    'outfit.desc.rain':     (a, p) => `${a}° actual · rain ${p}%`,
    // Kontakt
    'kontakt.tag': 'got a problem?',
    'kontakt.h1.html': 'WRITE <span class="serif-italic">us.</span>',
    'kontakt.sub.html': '— we\'d love to hear from <span class="pink">YOU</span>.',
    'kontakt.name': 'YOUR NAME',
    'kontakt.email': 'YOUR E-MAIL',
    'kontakt.role': 'YOUR ROLE',
    'kontakt.presse': 'PRESS',
    'kontakt.message': '· YOUR MESSAGE',
    'kontakt.placeholder': 'Hey WEARA, I have a question...',
    'kontakt.privacy': 'your data stays with us. Always.',
    'kontakt.submit': 'SEND MESSAGE',
    'kontakt.sent': '✓ SENT',
    'kontakt.back': '← BACK',
    // Weather labels
    'w.sunny':      'SUNNY',
    'w.clear':      'CLEAR',
    'w.overcast':   'OVERCAST',
    'w.foggy':      'FOGGY',
    'w.drizzle':    'DRIZZLY',
    'w.rainy':      'RAINY',
    'w.sleet':      'SLEET',
    'w.snow':       'SNOW',
    'w.snowgrain':  'SNOW GRAINS',
    'w.showers':    'SHOWERS',
    'w.snowshowers':'SNOW SHOWERS',
    'w.thunder':    'THUNDERSTORM',
    // Fallback text
    'fallback.intro':   (apparent, label, location, items) =>
      `For ${apparent}°C and ${label} in ${location} we recommend: ${items}.`,
    'fallback.evening': (endTemp) =>
      ` Temperatures will drop to around ${endTemp}° in the evening — bring an extra layer.`,
    'fallback.rain':    (maxPrecip) =>
      ` With ${maxPrecip}% chance of rain throughout the day, better take an umbrella.`,
    // AI prompt instruction
    'ai.lang_instruction':
      'Write 3–5 sentences of flowing prose in English. Name specific clothing items. Be precise, style-conscious and practical. Mention sun protection, rain protection or an evening layer if needed. No list format — flowing editorial text in the clear WEARA style.',
  },
};

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'de';
}

function t(key, ...args) {
  const dict = i18n[getLang()] || i18n.de;
  const val = dict[key] !== undefined ? dict[key] : (i18n.de[key] !== undefined ? i18n.de[key] : key);
  if (typeof val === 'function') return val(...args);
  return val;
}

function applyTranslations() {
  const id   = document.body?.id || '';
  const lang = getLang();

  // ── html[lang] attr ──
  document.documentElement.lang = lang;

  // ── Lang-Button: zeigt aktive Sprache zuerst ──
  const langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.textContent = lang === 'de' ? 'DE / EN' : 'EN / DE';

  // ── Nav links (alle Seiten) ──
  document.querySelectorAll('.nav-links a[href="mood.html"]').forEach(el => {
    el.textContent = t('nav.methode');
  });
  document.querySelectorAll('.nav-links a[href="kontakt.html"]').forEach(el => {
    el.textContent = t('nav.kontakt');
  });

  // ── Info-Bar (seitenspezifisch) ──
  const infoBar = document.querySelector('.info-bar span:first-child');
  if (infoBar) {
    const texts = {
      'page-mood':    { de: 'WEARA / METHODE / 01 MOOD',   en: 'WEARA / METHOD / 01 MOOD'   },
      'page-outfit':  { de: 'WEARA / METHODE / 03 OUTFIT', en: 'WEARA / METHOD / 03 OUTFIT' },
      'page-kontakt': { de: 'WEARA / KONTAKT',             en: 'WEARA / CONTACT'             },
    };
    if (texts[id]) infoBar.textContent = texts[id][lang];
  }

  // ════ INDEX ════
  if (id === 'page-index') {
    const hWas = document.querySelector('.h-was');
    const hMid = document.querySelector('.h-mid');
    const hAn  = document.querySelector('.h-an');
    if (hWas) hWas.textContent = t('index.hero.was');
    if (hMid) hMid.innerHTML   = t('index.hero.mid.html');
    if (hAn)  hAn.textContent  = t('index.hero.an');
    const taglinePara = document.querySelector('.hero-tagline > p');
    if (taglinePara) taglinePara.innerHTML = t('index.tagline.html');
    const bottomLink = document.querySelector('.bottom-nav a[href="mood.html"]');
    if (bottomLink) bottomLink.textContent = t('index.nav.methode');
  }

  // ════ MOOD ════
  if (id === 'page-mood') {
    const sportlichLabel = document.querySelector('[data-mood="sportlich"] .mood-card-label');
    if (sportlichLabel) sportlichLabel.textContent = t('mood.sportlich');
    const backLink = document.querySelector('.bottom-nav a[href="index.html"]');
    if (backLink) backLink.textContent = t('mood.back');
    const nextLink = document.querySelector('.bottom-nav a.btn-primary');
    if (nextLink) nextLink.textContent = t('mood.next');
  }

  // ════ DATEN ════
  if (id === 'page-daten') {
    // Headline-Wörter
    const dBolds = document.querySelectorAll('.daten-h1-row .d-bold');
    if (dBolds[0]) dBolds[0].textContent = t('daten.headline.your');
    if (dBolds[1]) dBolds[1].textContent = t('daten.headline.please');

    // Step-Nav
    const stepNavLinks = document.querySelectorAll('.step-nav a');
    if (stepNavLinks[0]) stepNavLinks[0].textContent = `[ 01 ] ${t('step.mood')}`;
    if (stepNavLinks[1]) stepNavLinks[1].textContent = `[ 02 ] ${t('step.you')}`;

    // Step-Labels (Text-Node hinter dem <span>, leer-Nodes überspringen)
    const stepLabels = document.querySelectorAll('.step-label');
    const stepKeys   = ['daten.step1', 'daten.step2', 'daten.step3'];
    stepLabels.forEach((el, i) => {
      const tn = [...el.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0);
      if (tn && stepKeys[i]) tn.textContent = ' ' + t(stepKeys[i]);
    });

    // Gender-Buttons
    const frauBtn   = document.querySelector('[data-value="frau"]');
    const mannBtn   = document.querySelector('[data-value="mann"]');
    const diversBtn = document.querySelector('[data-value="divers"]');
    if (frauBtn)   frauBtn.textContent   = t('gender.frau');
    if (mannBtn)   mannBtn.textContent   = t('gender.mann');
    if (diversBtn) diversBtn.textContent = t('gender.divers');

    // Standort-Placeholder
    const locInput = document.getElementById('locationText');
    if (locInput) locInput.placeholder = t('location.placeholder');

    // Dauer-Einheit
    const unitEl = document.querySelector('.duration-unit');
    if (unitEl) unitEl.textContent = t('duration.unit');

    // Statische Fehlermeldungen (werden beim Anzeigen nochmal gesetzt)
    const locErr = document.getElementById('locationError');
    if (locErr) locErr.textContent = t('err.location.empty');
    const durErr = document.getElementById('durationError');
    if (durErr) durErr.textContent = t('err.duration');
  }

  // ════ OUTFIT ════
  if (id === 'page-outfit') {
    // "HEUTE:" / "TODAY:" – Text-Node im h1 (nicht-leeren Node finden)
    const outfitH1 = document.querySelector('.outfit-h1');
    if (outfitH1) {
      const tn = [...outfitH1.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0);
      if (tn) tn.textContent = t('outfit.today') + ': ';
    }
    // Loading-Label
    const loadLabel = document.querySelector('.outfit-loading-label');
    if (loadLabel) loadLabel.textContent = t('outfit.loading');
    // Initiale Wetterpanel-Texte (werden von initOutfit überschrieben)
    const weatherTypeEl = document.getElementById('weatherType');
    if (weatherTypeEl) weatherTypeEl.textContent = t('outfit.weather_initial');
    const weatherDescEl = document.getElementById('weatherDesc');
    if (weatherDescEl) weatherDescEl.innerHTML = t('outfit.weather_desc_initial');
    // Buttons
    const regenBtn   = document.getElementById('outfitRegen');
    const restartBtn = document.getElementById('outfitRestart');
    if (regenBtn)   regenBtn.textContent   = t('outfit.regen');
    if (restartBtn) restartBtn.textContent = t('outfit.restart');
    // Zurück-Link
    const backLink = document.querySelector('.bottom-nav a[href="daten.html"]');
    if (backLink) backLink.textContent = t('outfit.back');
  }

  // ════ KONTAKT ════
  if (id === 'page-kontakt') {
    const tagLabel = document.querySelector('.tag-label');
    if (tagLabel) tagLabel.textContent = t('kontakt.tag');
    const kontaktH1 = document.querySelector('.kontakt-h1');
    if (kontaktH1) kontaktH1.innerHTML = t('kontakt.h1.html');
    const kontaktSub = document.querySelector('.kontakt-sub');
    if (kontaktSub) kontaktSub.innerHTML = t('kontakt.sub.html');
    const nameLabel  = document.querySelector('label[for="name"]');
    if (nameLabel) nameLabel.textContent = t('kontakt.name');
    const emailLabel = document.querySelector('label[for="email"]');
    if (emailLabel) emailLabel.textContent = t('kontakt.email');
    const roleLabel  = document.querySelectorAll('.field-label')[2];
    if (roleLabel) roleLabel.textContent = t('kontakt.role');
    const presseBtn = document.querySelector('[data-role="presse"]');
    if (presseBtn) presseBtn.textContent = t('kontakt.presse');
    const mehrLabel = document.querySelector('.mehr-label');
    if (mehrLabel) mehrLabel.textContent = t('kontakt.message');
    const msgArea = document.getElementById('message');
    if (msgArea) msgArea.placeholder = t('kontakt.placeholder');
    const privNote = document.querySelector('.privacy-note');
    if (privNote) privNote.textContent = t('kontakt.privacy');
    const submitBtn = document.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.textContent = t('kontakt.submit');
    const backLink = document.querySelector('.bottom-nav a[href="index.html"]');
    if (backLink) backLink.textContent = t('kontakt.back');
  }
}

// ================================================
// OUTFIT DATENBANK  (Fallback wenn kein API Key)
// ================================================

const outfitDB = {
  elegant: {
    cold_rain:  { headline: 'elegant — Stil trotz Regen.',          headlineEN: 'style despite the rain.',    items: ['TRENCHCOAT', 'KASCHMIRPULLI', 'SEIDENBLUSE', 'ANZUGHOSE', 'CHELSEA BOOTS', 'REGENSCHIRM', 'LEDERHANDTASCHE', 'WOLLSCHAL'] },
    cold_dry:   { headline: 'elegant — kühl & scharf.',             headlineEN: 'sharp in the cold.',         items: ['WOLLMANTEL', 'ROLLKRAGENPULLI', 'BLUSE', 'SLIM-HOSE', 'ANKLE BOOTS', 'LEDERHANDSCHUHE', 'STRUKTURIERTE TASCHE', 'WOLLSCHAL'] },
    cool_rain:  { headline: 'elegant — frisch & poliert.',          headlineEN: 'polished in the drizzle.',   items: ['LEICHTER MANTEL', 'FEINSTRICKPULLI', 'HEMDBLUSE', 'CHINO', 'OXFORD-SCHUHE', 'REGENSCHIRM', 'LEDER-SHOPPER', 'SEIDENTUCH'] },
    cool_dry:   { headline: 'elegant — frische Luft, klarer Look.', headlineEN: 'cool air, clean look.',      items: ['BLAZER', 'FEINSTRICKPULLI', 'SEIDENBLUSE', 'ANZUGHOSE', 'LOAFER', 'LEDERHANDTASCHE', 'SONNENBRILLE', 'SEIDENSCHAL'] },
    mild_rain:  { headline: 'elegant — mild mit Charakter.',        headlineEN: 'mild with character.',       items: ['LEICHTER TRENCHCOAT', 'LONGSLEEVE', 'BLUSE', 'CULOTTES', 'MULES', 'REGENSCHIRM', 'STRUKTURIERTE TASCHE', 'HALSTUCH'] },
    mild_dry:   { headline: 'elegant — mit Wärme.',                 headlineEN: 'warm elegance.',             items: ['BLAZER', 'FEINSTRICK-TOP', 'SEIDENBLUSE', 'MIDI-ROCK', 'MULES', 'SONNENBRILLE', 'LEDERHANDTASCHE', 'TUCH'] },
    warm_rain:  { headline: 'elegant — leicht & regen-ready.',      headlineEN: 'light & rain-ready.',        items: ['LEICHTER MANTEL', 'LEINENHOSE', 'SEIDENBLUSE', 'WEITHOSE', 'SANDALEN', 'REGENSCHIRM', 'RAFFIA-TASCHE', 'HUT'] },
    warm_dry:   { headline: 'elegant — sommerhaft & sharp.',        headlineEN: 'summer sharp.',              items: ['LEINENKLEID', 'SEIDENHOSE', 'SEIDENTOP', 'MINIROCK', 'SANDALEN', 'SONNENBRILLE', 'RAFFIA-TASCHE', 'STROHHUT'] },
  },
  sportlich: {
    cold_rain:  { headline: 'sportlich — wasserdicht & ready.',         headlineEN: 'waterproof & ready.',        items: ['REGENJACKE', 'THERMOSHIRT', 'SPORT-BH', 'LAUFTIGHTS', 'TRAIL-SCHUHE', 'SPORTMÜTZE', 'LAUFRUCKSACK', 'HANDSCHUHE'] },
    cold_dry:   { headline: 'sportlich — power durch die Kälte.',       headlineEN: 'power through the cold.',    items: ['WINDJACKE', 'FLEECEPULLI', 'THERMOSHIRT', 'LAUFTIGHTS', 'TURNSCHUHE', 'BEANIE', 'RUCKSACK', 'HANDSCHUHE'] },
    cool_rain:  { headline: 'sportlich — frisch & funktional.',         headlineEN: 'fresh & functional.',        items: ['REGENJACKE', 'LONGSLEEVE', 'T-SHIRT', 'JOGGINGHOSE', 'SNEAKERS', 'KAPPE', 'SPORTTASCHE', 'SPORTSOCKEN'] },
    cool_dry:   { headline: 'sportlich — Bewegung bei frischer Luft.',  headlineEN: 'moving in fresh air.',       items: ['HOODIE', 'T-SHIRT', 'SHORTS', 'LAUFSCHUHE', 'KAPPE', 'RUCKSACK', 'WASSERFLASCHE', 'LAUFSOCKEN'] },
    mild_rain:  { headline: 'sportlich — auch bei Regen.',              headlineEN: 'even in the rain.',          items: ['WINDBREAKER', 'T-SHIRT', 'SHORTS', 'LAUFSCHUHE', 'KAPPE', 'RUCKSACK', 'WASSERFLASCHE', 'REGENCAPE'] },
    mild_dry:   { headline: 'sportlich — bestes Laufwetter.',           headlineEN: 'perfect running weather.',   items: ['T-SHIRT', 'SPORTS-BH', 'SHORTS', 'LAUFSCHUHE', 'KAPPE', 'SONNENBRILLE', 'WASSERFLASCHE', 'SCHWEISSBAND'] },
    warm_rain:  { headline: 'sportlich — leicht & schnell.',            headlineEN: 'light & fast.',              items: ['CROP-TOP', 'SPORT-BH', 'SHORTS', 'TRAIL-SCHUHE', 'KAPPE', 'SPORTTASCHE', 'WASSERFLASCHE', 'SONNENSCHUTZ'] },
    warm_dry:   { headline: 'sportlich — Sommer-Power.',                headlineEN: 'summer power.',              items: ['TANK-TOP', 'SPORT-BH', 'SHORTS', 'SNEAKERS', 'KAPPE', 'SONNENBRILLE', 'WASSERFLASCHE', 'SONNENSCHUTZ SPF50'] },
  },
  casual: {
    cold_rain:  { headline: 'casual — cosy trotz Regen.',       headlineEN: 'cosy despite the rain.',    items: ['PARKA', 'HOODIE', 'LONGSLEEVE', 'JEANS', 'BOOTS', 'REGENSCHIRM', 'TOTE BAG', 'WOLLMÜTZE'] },
    cold_dry:   { headline: 'casual — layered & warm.',         headlineEN: 'layered & warm.',           items: ['PARKA', 'HOODIE', 'STRICKPULLI', 'JEANS', 'CHELSEA BOOTS', 'SCHAL', 'RUCKSACK', 'BEANIE'] },
    cool_rain:  { headline: 'casual — entspannt & regenfest.',  headlineEN: 'relaxed & rain-proof.',     items: ['JEANSJACKE', 'HOODIE', 'T-SHIRT', 'JEANS', 'SNEAKERS', 'REGENSCHIRM', 'TOTE BAG', 'CAP'] },
    cool_dry:   { headline: 'casual — easy & cool.',            headlineEN: 'easy & cool.',              items: ['JEANSJACKE', 'STRICKPULLI', 'T-SHIRT', 'JEANS', 'SNEAKERS', 'SCHAL', 'RUCKSACK', 'CAP'] },
    mild_rain:  { headline: 'casual — leicht & regen-ready.',   headlineEN: 'light & rain-ready.',       items: ['LEICHTE JACKE', 'LANGARMSHIRT', 'T-SHIRT', 'JEANS', 'SNEAKERS', 'REGENSCHIRM', 'TOTE BAG', 'SOCKEN'] },
    mild_dry:   { headline: 'casual — einfach gut.',            headlineEN: 'simply good.',              items: ['HEMD / BLUSE', 'T-SHIRT', 'JEANS', 'SNEAKERS', 'SONNENBRILLE', 'TOTE BAG', 'CAP', 'GÜRTEL'] },
    warm_rain:  { headline: 'casual — sommerlich & quick-dry.', headlineEN: 'summery & quick-dry.',      items: ['LEICHTES TOP', 'SHORTS', 'LEINENHOSE', 'SANDALEN', 'CAP', 'REGENJACKE', 'TOTE BAG', 'SONNENCREME'] },
    warm_dry:   { headline: 'casual — Sommer-Vibes.',           headlineEN: 'summer vibes.',             items: ['TOP', 'SHORTS', 'LEINENHOSE', 'SANDALEN', 'SONNENBRILLE', 'TOTE BAG', 'HUT', 'SONNENCREME SPF50'] },
  },
};

// ================================================
// KLEIDUNGS-ÜBERSETZUNGEN (DE → EN Fallback)
// ================================================

const clothingEN = {
  // Oberbekleidung
  'TRENCHCOAT': 'TRENCH COAT', 'LEICHTER TRENCHCOAT': 'LIGHT TRENCH COAT',
  'WOLLMANTEL': 'WOOL COAT', 'LEICHTER MANTEL': 'LIGHT COAT',
  'PARKA': 'PARKA', 'BLAZER': 'BLAZER',
  'JEANSJACKE': 'DENIM JACKET', 'LEICHTE JACKE': 'LIGHT JACKET',
  'WINDJACKE': 'WINDBREAKER', 'WINDBREAKER': 'WINDBREAKER',
  'REGENJACKE': 'RAIN JACKET', 'REGENCAPE': 'RAIN CAPE',
  'FLEECEPULLI': 'FLEECE PULLOVER', 'HOODIE': 'HOODIE',
  'LEICHTER HOODIE': 'LIGHT HOODIE', 'LEICHTER CARDIGAN': 'LIGHT CARDIGAN',
  // Tops & Pullover
  'KASCHMIRPULLI': 'CASHMERE SWEATER', 'ROLLKRAGENPULLI': 'TURTLENECK',
  'FEINSTRICKPULLI': 'FINE KNIT SWEATER', 'STRICKPULLI': 'KNIT SWEATER',
  'FEINSTRICK-TOP': 'FINE KNIT TOP', 'SEIDENBLUSE': 'SILK BLOUSE',
  'HEMDBLUSE': 'SHIRT BLOUSE', 'BLUSE': 'BLOUSE',
  'SEIDENTOP': 'SILK TOP', 'LONGSLEEVE': 'LONG SLEEVE TOP',
  'LANGARMSHIRT': 'LONG-SLEEVE SHIRT', 'T-SHIRT': 'T-SHIRT',
  'THERMOSHIRT': 'THERMAL SHIRT', 'SPORT-BH': 'SPORTS BRA',
  'SPORTS-BH': 'SPORTS BRA', 'CROP-TOP': 'CROP TOP',
  'TANK-TOP': 'TANK TOP', 'LEICHTES TOP': 'LIGHT TOP', 'TOP': 'TOP',
  'SPORT-SHIRT': 'SPORT SHIRT', 'HEMD': 'SHIRT',
  'SEIDENHEMD': 'SILK SHIRT', 'LEINENHEMD': 'LINEN SHIRT',
  'HEMD / BLUSE': 'SHIRT / BLOUSE',
  // Hosen & Röcke
  'JEANS': 'JEANS', 'ANZUGHOSE': 'DRESS TROUSERS',
  'SLIM-HOSE': 'SLIM TROUSERS', 'CHINO': 'CHINOS',
  'LEINENHOSE': 'LINEN TROUSERS', 'SEIDENHOSE': 'SILK TROUSERS',
  'JOGGINGHOSE': 'JOGGERS', 'LAUFTIGHTS': 'RUNNING TIGHTS',
  'MIDI-ROCK': 'MIDI SKIRT', 'MINIROCK': 'MINI SKIRT',
  'CULOTTES': 'CULOTTES', 'SHORTS': 'SHORTS',
  'WEITHOSE': 'WIDE-LEG TROUSERS',
  // Kleider
  'LEINENKLEID': 'LINEN DRESS',
  // Schuhe
  'CHELSEA BOOTS': 'CHELSEA BOOTS', 'ANKLE BOOTS': 'ANKLE BOOTS',
  'BOOTS': 'BOOTS', 'OXFORD-SCHUHE': 'OXFORD SHOES',
  'LOAFER': 'LOAFERS', 'MULES': 'MULES', 'SANDALEN': 'SANDALS',
  'SNEAKERS': 'SNEAKERS', 'TURNSCHUHE': 'SNEAKERS',
  'LAUFSCHUHE': 'RUNNING SHOES', 'TRAIL-SCHUHE': 'TRAIL SHOES',
  'KOMFORT-PUMPS': 'COMFORT HEELS',
  // Accessoires
  'REGENSCHIRM': 'UMBRELLA', 'SONNENBRILLE': 'SUNGLASSES',
  'SONNENCREME': 'SUNSCREEN', 'SONNENCREME SPF50': 'SUNSCREEN SPF50',
  'SONNENSCHUTZ': 'SUN PROTECTION', 'SONNENSCHUTZ SPF50': 'SUN PROTECTION SPF50',
  'WOLLSCHAL': 'WOOL SCARF', 'SEIDENSCHAL': 'SILK SCARF',
  'SCHAL': 'SCARF', 'HALSTUCH': 'NECK SCARF',
  'SEIDENTUCH': 'SILK SCARF', 'TUCH': 'SCARF',
  'LEDERHANDSCHUHE': 'LEATHER GLOVES', 'HANDSCHUHE': 'GLOVES',
  'BEANIE': 'BEANIE', 'WOLLMÜTZE': 'WOOL BEANIE',
  'SPORTMÜTZE': 'SPORT CAP', 'KAPPE': 'CAP', 'CAP': 'CAP',
  'STROHHUT': 'STRAW HAT', 'STROH-CAP': 'STRAW CAP', 'HUT': 'HAT',
  'GÜRTEL': 'BELT', 'SCHWEISSBAND': 'SWEATBAND',
  'SOCKEN': 'SOCKS', 'SPORTSOCKEN': 'SPORTS SOCKS', 'LAUFSOCKEN': 'RUNNING SOCKS',
  'EINSTECKTUCH': 'POCKET SQUARE',
  // Taschen & Rucksäcke
  'LEDERHANDTASCHE': 'LEATHER BAG', 'STRUKTURIERTE TASCHE': 'STRUCTURED BAG',
  'LEDER-SHOPPER': 'LEATHER SHOPPER', 'RAFFIA-TASCHE': 'RAFFIA BAG',
  'TOTE BAG': 'TOTE BAG', 'SPORTTASCHE': 'SPORTS BAG',
  'LAUFRUCKSACK': 'RUNNING BACKPACK', 'RUCKSACK': 'BACKPACK',
  // Sonstiges
  'WASSERFLASCHE': 'WATER BOTTLE',
};

function translateItem(item) {
  if (getLang() !== 'en') return item;
  // "(ABENDS)" Suffix → "(EVENING)"
  const base   = item.replace(/\s*\(ABENDS\)$/i, '').trim();
  const suffix = /\(ABENDS\)/i.test(item) ? ' (EVENING)' : '';
  return (clothingEN[base] ?? base) + suffix;
}

// ================================================
// WETTER-CODES → Label (i18n-fähig)
// ================================================

function getWeatherLabel(code) {
  if (code === 0)  return t('w.sunny');
  if (code <= 2)   return t('w.clear');
  if (code === 3)  return t('w.overcast');
  if (code <= 48)  return t('w.foggy');
  if (code <= 55)  return t('w.drizzle');
  if (code <= 65)  return t('w.rainy');
  if (code <= 67)  return t('w.sleet');
  if (code <= 75)  return t('w.snow');
  if (code <= 77)  return t('w.snowgrain');
  if (code <= 82)  return t('w.showers');
  if (code <= 86)  return t('w.snowshowers');
  return t('w.thunder');
}

// ================================================
// WETTER-BEDINGUNG bestimmen
// ================================================

function getConditionKey(apparent, code, maxPrecipProb) {
  const isRain = code >= 51 || maxPrecipProb >= 40;
  let temp;
  if (apparent < 8)       temp = 'cold';
  else if (apparent < 15) temp = 'cool';
  else if (apparent < 22) temp = 'mild';
  else                    temp = 'warm';
  return `${temp}_${isRain ? 'rain' : 'dry'}`;
}

// ================================================
// GENDER-ANPASSUNG der Kleidungsstücke
// ================================================

function genderAdjust(items, gender) {
  if (gender !== 'mann') return items;

  const swaps = {
    'SPORT-BH':        'SPORT-SHIRT',
    'SPORTS-BH':       'SPORT-SHIRT',
    'BUSTIER':         'TANK-TOP',
    'CROP-TOP':        'SPORT-SHIRT',
    'BLUSE':           'HEMD',
    'HEMDBLUSE':       'HEMD',
    'SEIDENBLUSE':     'SEIDENHEMD',
    'LEINENBLUSE':     'LEINENHEMD',
    'LEINENKLEID':     'LEINENHEMD',
    'MIDI-ROCK':       'CHINO',
    'MINIROCK':        'SHORTS',
    'CULOTTES':        'CHINO',
    'MULES':           'LOAFER',
    'SEIDENTOP':       'SEIDENHEMD',
    'FEINSTRICK-TOP':  'FEINSTRICKPULLI',
    'SEIDENHOSE':      'LEINENHOSE',
    'RAFFIA-TASCHE':   'LEDER-SHOPPER',
    'STROHHUT':        'STROH-CAP',
    'HALSTUCH':        'SCHAL',
    'SEIDENTUCH':      'EINSTECKTUCH',
  };

  return items.map(item => {
    const base   = item.replace(/\s*\(.*\)$/, '').trim();
    const suffix = item.slice(base.length);
    return (swaps[base] ?? base) + suffix;
  });
}

// ================================================
// SMART OUTFIT-ANPASSUNG nach Dauer & Kontext
// ================================================

function smartAdjust(items, weather, mood, duration) {
  const result = [...items];
  const { tempDrop = 0, maxPrecipProb = 0, maxUV = 0 } = weather;

  // Abend-Schicht
  if (tempDrop >= 4 && duration >= 5) {
    const hasLayer = result.some(i => /PULLI|STRICK|JACKE|MANTEL|HOODIE|CARDIGAN|FLEECE|BLAZER|TRENCH|WINDJACKE/i.test(i));
    if (!hasLayer) {
      const layer = { elegant: 'LEICHTER CARDIGAN', sportlich: 'WINDBREAKER', casual: 'LEICHTER HOODIE' };
      result[7] = `${layer[mood] ?? 'LEICHTE JACKE'} (ABENDS)`;
    }
  }

  // Regen im Tagesverlauf
  if (maxPrecipProb >= 40) {
    const hasRain = result.some(i => /SCHIRM|REGENJACKE|REGENCAPE|PONCHO|REGEN/i.test(i));
    if (!hasRain) result[5] = 'REGENSCHIRM';
  }

  // Hohe UV + lange Zeit draussen
  if (maxUV >= 5 && duration >= 3) {
    const hasSun = result.some(i => /SONNENBRILLE|SONNENCREME|SONNENSCHUTZ|STROHHUT|HUT|CAP|KAPPE/i.test(i));
    if (!hasSun) result[6] = 'SONNENCREME SPF50';
  }

  // Sehr langer Tag: Komfort-Schuhe
  if (duration >= 10) {
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].replace(/^MULES$/, 'LOAFER').replace(/^STILETTOS$/, 'KOMFORT-PUMPS');
    }
  }

  return result;
}

// ================================================
// HILFSFUNKTIONEN
// ================================================

function debounce(fn, delay) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

// Ob der User eine Ortschaft aus dem Dropdown bestätigt hat
let _locationConfirmed = false;

// ================================================
// GEOCODING: Stadtname → Koordinaten
// ================================================

async function geocodeCity(cityName) {
  const cleaned = cityName.replace(/,.*$/, '').trim();
  try {
    const url  = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cleaned)}&count=1&language=de&format=json`;
    const res  = await fetch(url, { signal: AbortSignal.timeout(5000) });
    const data = await res.json();
    if (data.results?.length > 0) {
      return { lat: data.results[0].latitude, lon: data.results[0].longitude, name: data.results[0].name };
    }
  } catch { /* fallback */ }
  return { lat: 47.3769, lon: 8.5417, name: 'Zürich' };
}

// ================================================
// WETTER-API: Open-Meteo (inkl. Stundenverlauf)
// ================================================

async function fetchWeatherData(lat, lon, durationHours = 4) {
  const params = [
    `latitude=${lat}`,
    `longitude=${lon}`,
    'current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation,relative_humidity_2m',
    'hourly=apparent_temperature,precipitation_probability,uv_index',
    'forecast_days=1',
    'timezone=auto',
    'wind_speed_unit=kmh',
  ].join('&');

  const res  = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal: AbortSignal.timeout(6000) });
  const data = await res.json();
  const current = { ...data.current };

  const currentHour = new Date(current.time).getHours();
  const endHour     = Math.min(currentHour + durationHours, 23);
  const range       = Array.from({ length: endHour - currentHour + 1 }, (_, i) => currentHour + i);

  const hourlyApparent = data.hourly?.apparent_temperature        ?? [];
  const hourlyPrecip   = data.hourly?.precipitation_probability   ?? [];
  const hourlyUV       = data.hourly?.uv_index                    ?? [];

  current.precipitation_probability = hourlyPrecip[currentHour] ?? 0;
  current.uv_index                  = hourlyUV[currentHour]     ?? 0;

  current.maxPrecipProb   = Math.max(...range.map(h => hourlyPrecip[h] ?? 0));
  current.maxUV           = Math.max(...range.map(h => hourlyUV[h]     ?? 0));
  current.endApparentTemp = hourlyApparent[endHour] ?? current.apparent_temperature;
  current.tempDrop        = current.apparent_temperature - current.endApparentTemp;

  current.weathercode   = current.weather_code  ?? 0;
  current.windspeed_10m = current.wind_speed_10m ?? 0;

  return current;
}

// ================================================
// OPENAI: Outfit-Text generieren (i18n-fähig)
// ================================================

async function generateOutfitText(weather, mood, duration, location, gender = 'frau') {
  const apparent  = Math.round(weather.apparent_temperature);
  const actual    = Math.round(weather.temperature_2m);
  const code      = weather.weathercode;
  const wind      = Math.round(weather.windspeed_10m);
  const humidity  = weather.relative_humidity_2m;
  const maxPrecip = weather.maxPrecipProb ?? weather.precipitation_probability ?? 0;
  const maxUV     = Math.round(weather.maxUV ?? weather.uv_index ?? 0);
  const endTemp   = Math.round(weather.endApparentTemp ?? apparent);
  const tempDrop  = Math.round(weather.tempDrop ?? 0);
  const label     = getWeatherLabel(code);

  if (!OPENAI_API_KEY || OPENAI_API_KEY.startsWith('sk-DEIN') || OPENAI_API_KEY.trim() === '') {
    return getFallbackText(weather, mood, duration, location);
  }

  const lang = getLang();

  const moodLabel = lang === 'en'
    ? { elegant: 'elegant and stylish', sportlich: 'sporty and functional', casual: 'casual and relaxed' }[mood] || mood
    : { elegant: 'elegant und stilvoll', sportlich: 'sportlich und funktional', casual: 'casual und entspannt' }[mood] || mood;

  const genderLabel = lang === 'en'
    ? { frau: 'woman', mann: 'man', divers: 'non-binary person' }[gender] || 'person'
    : { frau: 'Frau', mann: 'Mann', divers: 'non-binäre Person' }[gender] || 'Person';

  const abendInfo = (tempDrop >= 4 && duration >= 5)
    ? (lang === 'en'
      ? `Important: Temperature drops from ${apparent}°C to ~${endTemp}°C during the outing — an evening layer is needed.`
      : `Wichtig: Die Temperatur fällt im Tagesverlauf von ${apparent}°C auf ~${endTemp}°C — eine Abendschicht wird nötig.`)
    : '';

  const prompt = lang === 'en'
    ? `You are WEARA, a precise personal styling algorithm. Recommend a concrete outfit for today.

Weather data:
- Location: ${location}
- Feels-like temperature: ${apparent}°C (actual ${actual}°C)
- Conditions: ${label}
- Wind: ${wind} km/h · Humidity: ${humidity}%
- Rain probability (throughout day): ${maxPrecip}%
- UV index (daily max): ${maxUV}
${abendInfo}

Person details:
- Gender: ${genderLabel}
- Style: ${moodLabel}
- Outing duration: ${duration} hours

Recommend clothing suitable for a ${genderLabel}. ${t('ai.lang_instruction')}`

    : `Du bist WEARA, ein präziser persönlicher Styling-Algorithmus. Empfehle ein konkretes Outfit für heute.

Wetterdaten:
- Standort: ${location}
- Gefühlte Temperatur: ${apparent}°C (tatsächlich ${actual}°C)
- Wetterlage: ${label}
- Wind: ${wind} km/h · Luftfeuchtigkeit: ${humidity}%
- Regenwahrscheinlichkeit (Tagesverlauf): ${maxPrecip}%
- UV-Index (Tagesmaximum): ${maxUV}
${abendInfo}

Angaben der Person:
- Geschlecht: ${genderLabel}
- Stil: ${moodLabel}
- Dauer des Ausflugs: ${duration} Stunden

Empfehle Kleidung passend für eine ${genderLabel}. ${t('ai.lang_instruction')}`;

  const systemMsg = lang === 'en'
    ? 'You are WEARA, a fashion styling assistant. You MUST respond entirely in English — never in German or any other language, regardless of the location or other inputs.'
    : 'Du bist WEARA, ein Fashion-Styling-Assistent. Du antwortest ausschliesslich auf Deutsch.';

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` },
    body:    JSON.stringify({
      model:       'gpt-4o-mini',
      messages:    [
        { role: 'system', content: systemMsg },
        { role: 'user',   content: prompt },
      ],
      max_tokens:  350,
      temperature: 0.75,
    }),
    signal: AbortSignal.timeout(20000),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = err.error?.message ?? 'Unbekannter Fehler';
    console.error(`OpenAI Fehler ${res.status}:`, msg);
    throw new Error(`OpenAI ${res.status}: ${msg}`);
  }

  const json = await res.json();
  return json.choices[0].message.content.trim();
}

// ================================================
// FALLBACK TEXT (i18n-fähig)
// ================================================

function getFallbackText(weather, mood, duration, location) {
  const apparent  = Math.round(weather.apparent_temperature);
  const code      = weather.weathercode;
  const maxPrecip = weather.maxPrecipProb ?? weather.precipitation_probability ?? 0;
  const tempDrop  = weather.tempDrop ?? 0;
  const endTemp   = Math.round(weather.endApparentTemp ?? apparent);
  const label     = getWeatherLabel(code).toLowerCase();
  const gender    = sessionStorage.getItem('selectedGender') || 'frau';

  const condition = getConditionKey(apparent, code, maxPrecip);
  const moodData  = outfitDB[mood] || outfitDB.elegant;
  const outfit    = moodData[condition] || moodData['mild_dry'];
  const rawItems  = smartAdjust(outfit.items, weather, mood, duration);
  const items     = genderAdjust(rawItems, gender).map(translateItem);

  let text = t('fallback.intro', apparent, label, location, items.join(', '));
  if (tempDrop >= 4 && duration >= 5) text += t('fallback.evening', endTemp);
  if (maxPrecip >= 40)                text += t('fallback.rain', maxPrecip);

  return text;
}

// ================================================
// SHARED: Info-Bar
// ================================================

async function updateInfoBar() {
  const el = document.getElementById('dateTime');
  if (!el) return;
  const now  = new Date();
  const dd   = String(now.getDate()).padStart(2, '0');
  const mm   = String(now.getMonth() + 1).padStart(2, '0');
  const yy   = String(now.getFullYear()).slice(-2);
  const loc  = sessionStorage.getItem('locationName') || 'ZURICH';
  const city = loc.replace(/,.*$/, '').trim().toUpperCase();
  el.textContent = `${city} · ${dd}.${mm}.${yy}`;
  setTimeout(updateInfoBar, 60_000);
}

// ================================================
// MOOD PAGE
// ================================================

function initMoodCards() {
  const cards = document.querySelectorAll('.mood-card');
  const saved = sessionStorage.getItem('selectedMood');
  cards.forEach(card => {
    if (saved && card.dataset.mood === saved) card.classList.add('active');
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      sessionStorage.setItem('selectedMood', card.dataset.mood);
      setTimeout(() => { window.location.href = 'daten.html'; }, 200);
    });
  });
}

// ================================================
// DATEN PAGE
// ================================================

function initGenderButtons() {
  const btns  = document.querySelectorAll('.gender-btn');
  const saved = sessionStorage.getItem('selectedGender');

  btns.forEach(btn => {
    if (saved && btn.dataset.value === saved) {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sessionStorage.setItem('selectedGender', btn.dataset.value);
    });
  });

  if (!saved) {
    const activeBtn = document.querySelector('.gender-btn.active');
    if (activeBtn) sessionStorage.setItem('selectedGender', activeBtn.dataset.value);
  }
}

const durationDescs = {
  0: '~ JUST A MOMENT',     1: '~ A QUICK ERRAND',     2: '~ A SHORT TRIP',
  3: '~ A HALF MORNING',    4: '~ A LONG AFTERNOON',   5: '~ HALF A DAY',
  6: '~ A GOOD CHUNK',      7: '~ ALMOST A FULL DAY',  8: '~ A FULL DAY',
  9: '~ A LONG DAY',       10: '~ A VERY LONG DAY',   11: '~ ALMOST ALL DAY',
  12: '~ HALF A DAY & NIGHT', 13: '~ INTO THE EVENING', 14: '~ A LONG STRETCH',
  15: '~ DAY & NIGHT',     16: '~ ALL DAY LONG',       17: '~ NEARLY A FULL DAY',
  18: '~ SUN UP TO SUN DOWN', 19: '~ A FULL DAY & BEYOND', 20: '~ AN ENTIRE WAKING DAY',
  21: '~ ALMOST OVERNIGHT', 22: '~ LONG INTO THE NIGHT', 23: '~ NEARLY 24H',
  24: '~ AROUND THE CLOCK',
};

function initSlider() {
  const slider  = document.getElementById('durationSlider');
  const numEl   = document.getElementById('durationNum');
  const descEl  = document.getElementById('durationDesc');
  const markEls = document.querySelectorAll('.slider-marks span');
  if (!slider || !numEl) return;

  const saved = sessionStorage.getItem('selectedDuration');
  if (saved) slider.value = saved;

  function update() {
    const val = parseInt(slider.value);
    const pct = ((val - +slider.min) / (+slider.max - +slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--black) ${pct}%, #ccc ${pct}%)`;
    numEl.textContent = String(val).padStart(2, '0');
    if (descEl) descEl.textContent = durationDescs[val] || '';
    sessionStorage.setItem('selectedDuration', slider.value);
    const idx = Math.round(pct / 100 * (markEls.length - 1));
    markEls.forEach((el, i) => el.classList.toggle('active-mark', i === idx));
  }

  update();
  slider.addEventListener('input', update);
}

function initLocationInput() {
  const input    = document.getElementById('locationText');
  const dropdown = document.getElementById('locationSuggestions');
  if (!input) return;

  const savedName = sessionStorage.getItem('locationName');
  const savedLat  = sessionStorage.getItem('locationLat');
  if (savedName) {
    input.value = savedName.toUpperCase();
    if (savedLat) _locationConfirmed = true;
  }

  const closeDropdown = () => {
    if (dropdown) dropdown.style.display = 'none';
  };

  const confirmPlace = (name, lat, lon) => {
    input.value = name.toUpperCase();
    sessionStorage.setItem('locationName', name);
    sessionStorage.setItem('locationLat',  lat);
    sessionStorage.setItem('locationLon',  lon);
    _locationConfirmed = true;
    closeDropdown();
    document.querySelector('.location-box')?.classList.remove('error');
    const err = document.getElementById('locationError');
    if (err) err.style.display = 'none';
  };

  const fetchSuggestions = debounce(async (query) => {
    if (!dropdown) return;
    if (query.length < 2) { closeDropdown(); return; }

    dropdown.innerHTML = `<div class="suggestion-hint">${t('ac.searching')}</div>`;
    dropdown.style.display = 'block';

    try {
      const res  = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=6&language=de&format=json`,
        { signal: AbortSignal.timeout(4000) }
      );
      const data = await res.json();

      dropdown.innerHTML = '';

      if (!data.results?.length) {
        dropdown.innerHTML = `<div class="suggestion-hint">${t('ac.noresults')}</div>`;
        return;
      }

      data.results.forEach(place => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        const sub = [place.admin1, place.country].filter(Boolean).join(', ');
        item.innerHTML = `<span class="sug-name">${place.name.toUpperCase()}</span><span class="sug-sub">${sub}</span>`;
        item.addEventListener('mousedown', (e) => {
          e.preventDefault();
          confirmPlace(place.name, place.latitude, place.longitude);
        });
        dropdown.appendChild(item);
      });
    } catch {
      closeDropdown();
    }
  }, 300);

  input.addEventListener('input', () => {
    _locationConfirmed = false;
    sessionStorage.removeItem('locationLat');
    sessionStorage.removeItem('locationLon');
    document.querySelector('.location-box')?.classList.remove('error');
    const err = document.getElementById('locationError');
    if (err) err.style.display = 'none';
    fetchSuggestions(input.value.trim());
  });

  input.addEventListener('blur', () => setTimeout(closeDropdown, 160));

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.location-wrap')) closeDropdown();
  });
}

function initLocationButton() {
  const link  = document.getElementById('getLocation');
  const input = document.getElementById('locationText');
  if (!link) return;

  link.addEventListener('click', () => {
    if (!navigator.geolocation) return;
    link.textContent = t('gps.loading');
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const { latitude: lat, longitude: lon } = pos.coords;
        sessionStorage.setItem('locationLat', lat);
        sessionStorage.setItem('locationLon', lon);
        try {
          const res  = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
          const data = await res.json();
          const city = data.address?.city || data.address?.town || data.address?.village || `${lat.toFixed(2)}N`;
          if (input) input.value = city.toUpperCase();
          sessionStorage.setItem('locationName', city);
        } catch {
          if (input) input.value = `${lat.toFixed(2)}N ${lon.toFixed(2)}E`;
        }
        _locationConfirmed = true;
        link.textContent = t('gps.found');
      },
      () => { link.textContent = t('gps.error'); }
    );
  });
}

// ── Pflichtfelder-Validierung ──

function initDatenValidation() {
  const btn = document.getElementById('generateBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    let valid = true;

    const locationInput = document.getElementById('locationText');
    const locationBox   = document.querySelector('.location-box');
    const locationError = document.getElementById('locationError');
    const locVal        = (locationInput?.value || '').trim();

    if (!locVal) {
      locationBox?.classList.add('error');
      if (locationError) { locationError.textContent = t('err.location.empty'); locationError.style.display = 'block'; }
      valid = false;
    } else if (!_locationConfirmed) {
      locationBox?.classList.add('error');
      if (locationError) { locationError.textContent = t('err.location.select'); locationError.style.display = 'block'; }
      valid = false;
    } else {
      locationBox?.classList.remove('error');
      if (locationError) locationError.style.display = 'none';
    }

    const slider        = document.getElementById('durationSlider');
    const durationError = document.getElementById('durationError');
    if (parseInt(slider?.value ?? '0') < 1) {
      if (durationError) { durationError.textContent = t('err.duration'); durationError.style.display = 'block'; }
      valid = false;
    } else {
      if (durationError) durationError.style.display = 'none';
    }

    if (valid) window.location.href = 'outfit.html';
  });
}

// ================================================
// OUTFIT PAGE
// ================================================

async function initOutfit() {
  const mood     = sessionStorage.getItem('selectedMood')   || 'elegant';
  const gender   = sessionStorage.getItem('selectedGender') || 'frau';
  const duration = parseInt(sessionStorage.getItem('selectedDuration') || '4');
  const locName  = sessionStorage.getItem('locationName')   || 'Zürich';
  const savedLat = sessionStorage.getItem('locationLat');
  const savedLon = sessionStorage.getItem('locationLon');

  const headlineEl = document.getElementById('outfitHeadline');
  const durationEl = document.getElementById('outfitDuration');
  const loadingEl  = document.getElementById('outfitLoading');
  const textEl     = document.getElementById('outfitRecommendation');
  const actionsRow = document.getElementById('outfitActions');
  const divider2   = document.getElementById('outfitDivider2');

  if (headlineEl)  headlineEl.textContent  = t('outfit.analyzing');
  if (loadingEl)   loadingEl.style.display = 'flex';
  if (textEl)      textEl.style.display    = 'none';
  if (actionsRow)  actionsRow.style.display = 'none';
  if (divider2)    divider2.style.display  = 'none';
  if (durationEl)  durationEl.textContent  = t('outfit.duration', duration);

  try {
    let lat, lon, displayName;
    if (savedLat && savedLon) {
      lat = parseFloat(savedLat); lon = parseFloat(savedLon); displayName = locName;
    } else {
      const geo = await geocodeCity(locName);
      lat = geo.lat; lon = geo.lon; displayName = geo.name;
    }

    const weather = await fetchWeatherData(lat, lon, duration);

    const apparent  = Math.round(weather.apparent_temperature);
    const actual    = Math.round(weather.temperature_2m);
    const code      = weather.weathercode;
    const wind      = Math.round(weather.windspeed_10m);
    const humidity  = weather.relative_humidity_2m;
    const maxPrecip = weather.maxPrecipProb ?? weather.precipitation_probability ?? 0;
    const maxUV     = Math.round(weather.maxUV ?? weather.uv_index ?? 0);
    const endTemp   = Math.round(weather.endApparentTemp ?? apparent);
    const tempDrop  = Math.round(weather.tempDrop ?? 0);

    const condition = getConditionKey(apparent, code, maxPrecip);
    const outfit    = (outfitDB[mood] || outfitDB.elegant)[condition] || outfitDB.elegant['mild_dry'];

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('weatherTemp', `${apparent}°`);
    set('weatherWind', wind);
    set('weatherHumidity', humidity);
    set('weatherUv', maxUV);

    const typeEl = document.getElementById('weatherType');
    if (typeEl) typeEl.textContent = getWeatherLabel(code);

    const descEl = document.getElementById('weatherDesc');
    if (descEl) {
      descEl.innerHTML = (tempDrop >= 4 && duration >= 5)
        ? t('outfit.desc.evening', actual, endTemp)
        : t('outfit.desc.rain', actual, maxPrecip);
    }

    if (durationEl) durationEl.textContent = t('outfit.duration.city', duration, displayName);

    if (headlineEl) {
      const deHeadline = outfit.headline.replace(/^[^—]+— /, '');
      headlineEl.textContent = (getLang() === 'en' && outfit.headlineEN) ? outfit.headlineEN : deHeadline;
    }
    const tagEl = document.querySelector('.outfit-tag');
    if (tagEl) tagEl.textContent = `[ ${mood.toUpperCase()} / ${getWeatherLabel(code)} / ${apparent}° ${t('outfit.feels')} ]`;

    let text;
    try {
      text = await generateOutfitText(weather, mood, duration, displayName, gender);
    } catch (aiErr) {
      console.warn('OpenAI nicht erreichbar, nutze Fallback:', aiErr.message);
      text = getFallbackText(weather, mood, duration, displayName);
    }

    if (loadingEl)   loadingEl.style.display   = 'none';
    if (textEl)    { textEl.textContent = text;  textEl.style.display = 'block'; }
    if (divider2)    divider2.style.display     = 'block';
    if (actionsRow)  actionsRow.style.display   = 'flex';

  } catch (err) {
    console.error('Wetter-Fehler:', err);
    if (loadingEl)   loadingEl.style.display = 'none';
    if (headlineEl)  headlineEl.textContent  = t('outfit.no_weather');
    if (textEl) { textEl.textContent = t('outfit.weather_error'); textEl.style.display = 'block'; }
    if (divider2)    divider2.style.display   = 'block';
    if (actionsRow)  actionsRow.style.display = 'flex';
  }
}

// ================================================
// KONTAKT PAGE
// ================================================

function initRoleButtons() {
  const btns = document.querySelectorAll('.role-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function initKontaktForm() {
  const form = document.getElementById('kontaktForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = t('kontakt.sent');
    btn.style.background = '#333';
    setTimeout(() => {
      form.reset();
      btn.textContent = t('kontakt.submit');
      btn.style.background = '';
      document.querySelectorAll('.role-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
    }, 2500);
  });
}

// ================================================
// INIT
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  updateInfoBar();
  const id = document.body.id;

  if (id === 'page-mood') initMoodCards();

  if (id === 'page-daten') {
    initGenderButtons();
    initSlider();
    initLocationInput();
    initLocationButton();
    initDatenValidation();
  }

  if (id === 'page-outfit') {
    initOutfit();
    document.getElementById('outfitRegen')?.addEventListener('click', initOutfit);
    document.getElementById('outfitRestart')?.addEventListener('click', () => {
      sessionStorage.clear();
      window.location.href = 'mood.html';
    });
  }

  if (id === 'page-kontakt') {
    initRoleButtons();
    initKontaktForm();
  }

  // ── Sprachumschaltung ──
  applyTranslations();

  document.getElementById('langBtn')?.addEventListener('click', () => {
    const newLang = getLang() === 'de' ? 'en' : 'de';
    localStorage.setItem(LANG_KEY, newLang);
    applyTranslations();
    // Outfit-Text in neuer Sprache neu generieren
    if (id === 'page-outfit') initOutfit();
  });
});
