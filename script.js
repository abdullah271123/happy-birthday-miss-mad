/* ═══════════════════════════════════════════════════════════════
   Madiha's Birthday — script
   Vanilla JS, no build step. Everything editable lives in CONFIG.
   ═══════════════════════════════════════════════════════════════ */

/* ───────────────────────── PHOTOS ─────────────────────────
   Add / remove photos here. Missing files are skipped automatically.
   photo1 is also used as the page background (see BG_PHOTO). */
const PHOTOS = [
  "photos/photo1.jpg",
  "photos/photo2.jpg",
  "photos/photo3.jpg",
  "photos/photo4.jpg",
  "photos/photo5.jpg",
  "photos/photo6.jpg",
  "photos/photo7.jpg",
  "photos/photo8.jpg",
  "photos/photo9.jpg",
  "photos/photo10.jpg",
  "photos/photo11.jpg",
];

/* ───────────────────────── CONFIG ───────────────────────── */
const CONFIG = {
  herName: "مدیحہ",
  herNameEn: "Madiha",
  myName: "Abdullah",

  BG_PHOTO: "photos/photo1.jpg",

  audio: {
    landing: "audios/audio1.mp3",   // loops on the landing page
    film: "audios/audio2.mp3",      // plays once during the film
    landingVolume: 0.7,
    filmVolume: 0.9,
    landingFadeIn: 1500,            // ms
    landingFadeOut: 1000,           // ms
    filmStartAt: 99,                // seconds into audio2 (1:39) where the film begins (pick the part you love)
  },

  splash: {
    to: "مدیحہ کے نام ❤️",
    hint: "تمہارے لیے ایک چھوٹا سا سرپرائز... کھولنے کے لیے سیل کو ٹیپ کرو 💌",
    sound: "🔊 آواز آن رکھنا",
    letter: [
      "سالگرہ مبارک میری جان ❤️",
      "آج کا دن صرف تمہارا ہے...",
      "چلو، تمہیں کچھ دکھاتا ہوں ✨",
    ],
  },

  hero: {
    title: "سالگرہ مبارک، مدیحہ ❤️",
    couplet: "چاند بھی آج تمہیں دیکھ کے شرمایا ہے\nتمہارے نام کا دن پھر سے لوٹ آیا ہے",
    cakeHint: "موم بتی پر ٹیپ کرو اور دل میں ایک خواہش مانگو ✨",
    cakeDone: "تمہاری ہر خواہش پوری ہو 🤍",
  },

  wishesTitle: "دعائیں",
  wishes: [
    { icon: "🌙", text: "اللہ تمہیں لمبی اور خوشیوں بھری زندگی دے، اور ہر نیا سال پچھلے سے زیادہ حسین ہو۔" },
    { icon: "🌿", text: "تمہاری صحت ہمیشہ سلامت رہے، اور تمہاری مسکراہٹ کبھی نہ تھکے۔" },
    { icon: "🌸", text: "جو خواب تم نے چپکے سے دل میں سنبھال کر رکھے ہیں، وہ سب ایک ایک کر کے پورے ہوں۔" },
    { icon: "✨", text: "تمہاری محنت کو ہمیشہ کامیابی ملے، اور ہر راستہ تمہارے لیے آسان ہو جائے۔" },
    { icon: "🤲", text: "اللہ تمہیں ہر غم، ہر بری نظر اور ہر دکھ سے اپنی پناہ میں رکھے۔ آمین۔" },
  ],

  storyTitle: "ہماری کہانی",
  story: [
    { icon: "❤️", title: "پہلی نظر", text: "نو سال پہلے جب تمہیں پہلی بار دیکھا تھا، اسی لمحے دل نے کہہ دیا تھا کہ بس، یہی ہے۔ وہ دن آج بھی ویسے ہی یاد ہے۔" },
    { icon: "🚲", title: "سائیکل والے دن", text: "تم اپنی سائیکل پر کوچنگ جایا کرتی تھیں۔ وہ راستے، وہ شامیں، وہ دن... آج بھی سوچتا ہوں تو دل مسکرا دیتا ہے۔" },
    { icon: "🚆", title: "ایک ہی ٹرین", text: "پھر کالج کے دن آئے۔ روز ایک ہی ٹرین، ایک ہی شہر، ایک ہی وقت۔ کالج الگ تھے، مگر سفر ہمیشہ ایک ہی تھا۔" },
    { icon: "🎓", title: "کالج کا شہر", text: "اس شہر کی ہر گلی میں کہیں نہ کہیں تمہاری یاد رکھی ہے۔ وہ عام سے دن میری زندگی کے سب سے خاص دن بن گئے۔" },
    { icon: "💫", title: "نو سال، ایک ہی دل", text: "نو سال گزر گئے، بہت کچھ بدل گیا... بس ایک چیز نہیں بدلی، تمہارے لیے میرا دل۔" },
  ],

  loveTitle: "میری محبت",
  loveLetter: [
    "مدیحہ،",
    "تمہیں پہلی بار دیکھا تھا تو سمجھ نہیں آیا تھا کہ دل کو کیا ہوا ہے،",
    "آج نو سال بعد سمجھ آتا ہے، دل اسی دن تمہارا ہو گیا تھا۔",
    "وقت گزرتا گیا، موسم بدلتے رہے، راستے بدلتے رہے،",
    "مگر یہ محبت ایک دن بھی کم نہیں ہوئی، ہر روز تھوڑی اور بڑھتی گئی۔",
    "تم میری دعاؤں میں سب سے پہلے آتی ہو،",
    "میری خاموشی میں بھی تم ہو، اور میری ہنسی کی وجہ بھی تم۔",
    "تم مسکراتی ہو تو لگتا ہے دنیا ٹھیک چل رہی ہے۔",
    "مجھے بہت کچھ نہیں چاہیے، بس تم چاہیے ہو، ساری زندگی کے لیے۔",
    "تم میرا سکون ہو، میری عادت ہو، میرا گھر ہو۔ ❤️",
  ],
  loveYears: 9,
  loveYearsLabel: "سال، اور ہر دن پہلے سے زیادہ",
  loveCouplet: "نو برس بیت گئے، دل وہیں پہ ٹھہرا ہے\nپہلی نظر کا وہ لمحہ آج بھی گہرا ہے",

  dreamsTitle: "میرے خواب، تمہارے لیے",
  dreams: [
    { icon: "💍", text: "تم سے نکاح کرنا، پوری عزت کے ساتھ، صحیح طریقے سے، سب کی دعاؤں میں۔" },
    { icon: "🏡", text: "ایک چھوٹا سا گھر، جس میں تمہاری ہنسی گونجے اور سکون بسے۔" },
    { icon: "🤍", text: "تمہیں ہمیشہ خوش، محفوظ اور مسکراتا ہوا دیکھنا۔" },
    { icon: "🤝", text: "ہر مشکل میں تمہارا ہاتھ تھامے رکھنا، اور ہر خوشی مل کر منانا۔" },
    { icon: "🌅", text: "تمہارے ساتھ بوڑھا ہونا... اور سفید بالوں میں بھی تمہیں ویسے ہی دیکھنا جیسے پہلی بار دیکھا تھا۔" },
  ],
  vaada: "جب تک سانس ہے، یہ ہاتھ نہیں چھوڑوں گا۔\nدھوپ ہو یا چھاؤں،\nتم مجھے ہمیشہ اپنے ساتھ پاؤ گی۔",

  promisesTitle: "تمہیں خوش رکھنے کا وعدہ",
  promises: [
    "تمہاری ہر بات دھیان سے سنوں گا، چاہے کتنی ہی چھوٹی کیوں نہ ہو۔",
    "تمہیں کبھی رونے کی وجہ نہیں دوں گا، اور آنسو آئے تو پونچھنے والا میں ہوں گا۔",
    "ناراض ہو گی تو منانے میں پہل ہمیشہ میری ہو گی۔",
    "تمہاری پسند کی چائے، تمہاری پسند کی باتیں، تمہاری پسند کی شامیں۔",
    "تمہارے خوابوں کو اپنے خوابوں جتنا ہی اہم سمجھوں گا۔",
    "ہر سالگرہ پر تمہیں یاد دلاؤں گا کہ تم کتنی خاص ہو۔",
  ],

  photosTitle: "تمہارے لمحے",
  captions: [
    "یہ مسکراہٹ میری دنیا ہے",
    "دوپٹے میں چھپی ہنسی",
    "شام، اینٹیں، اور تم",
    "خاموش، پھر بھی سب کہتی ہوئی",
    "یہ آنکھیں...",
    "میری صبح کی روشنی",
    "تمہارے سارے رنگ",
    "ہوا سے باتیں کرتی ہوئی",
    "سب سے پیاری نظر",
    "جگنو بھی تمہیں دیکھنے آئے",
    "نیلے رنگ میں چاند",
  ],

  gift: {
    line: "بس ایک بار یہاں دبا دو...",
    button: "ایک چھوٹا سا تحفہ تمہارے لیے 🎁",
  },

  /* The film. Times are in seconds from the start of the film.
     photos: indexes into PHOTOS (0 = photo1). Scenes overlap slightly for cross-fades. */
  FILM: {
    duration: 34,                    // 1:39 → 2:13 of audio2
    title: { ur: "مدیحہ کے لیے ❤️", en: "for Madiha" },
    closing: { ur: "سالگرہ مبارک میری جان ❤️" },
    scenes: [
      { type: "title",     from: 0.0,    to: 3.5 },
      { type: "full",      from: 3.2,  to: 7.0,  photos: [0], kb: "in",  caption: "پہلی نظر سے آج تک..." },
      { type: "tilt",      from: 6.7,  to: 10.5,  photos: [1] },
      { type: "polaroids", from: 10.2,  to: 14.3, photos: [2, 3, 4] },
      { type: "full",      from: 14.0, to: 17.7, photos: [8], kb: "out", caption: "تم ہو تو ہر دن خاص ہے" },
      { type: "reveal",    from: 17.4, to: 21.1, photos: [5], caption: "میری صبح کی روشنی" },
      { type: "collage",   from: 20.8, to: 24.5, photos: [6, 7, 10] },
      { type: "full",      from: 24.2, to: 28.2, photos: [9], kb: "pan", caption: "میری ہر دعا میں تم ❤️" },
      { type: "close",     from: 27.8, to: 34.5 },
    ],
    fireworksAt: [26.1, 28.3, 29.3, 30.3, 31.5, 32.5],
  },
};

/* ───────────────────────── Helpers ───────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeBack = (t) => { const c = 1.7; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const URDU_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const toUrduNum = (n) => String(n).replace(/\d/g, (d) => URDU_DIGITS[d]);
const wordsHTML = (text) => text.split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(" ");

const PARAMS = new URLSearchParams(location.search);
const REEL = PARAMS.has("reel");                        // automated demo mode used to record the reel
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = matchMedia("(pointer: fine)").matches;
const DPR = Math.min(2, window.devicePixelRatio || 1);
const reelMarks = (window.__reelMarks = {});
const mark = (k) => (reelMarks[k] = performance.now() / 1000);

let PHOTO_OK = [];   // photos that actually loaded
const photoAt = (i) => (PHOTO_OK.length ? PHOTO_OK[i % PHOTO_OK.length] : null);

/* Check which photos exist (no broken images) */
function loadPhotos() {
  return Promise.all(PHOTOS.map((src) => new Promise((res) => {
    const img = new Image();
    img.onload = () => res(src);
    img.onerror = () => res(null);
    img.src = src;
  }))).then((list) => { PHOTO_OK = list.filter(Boolean); });
}

/* ═════════════════════════ AUDIO ═════════════════════════ */
const Audio_ = {
  a1: $("#audio1"),
  a2: $("#audio2"),
  muted: false,
  a1Failed: false,
  fades: new Map(),

  init() {
    this.a1.src = CONFIG.audio.landing;
    this.a2.src = CONFIG.audio.film;
    this.a1.loop = true;
    this.a2.loop = false;
    this.a1.load();
    this.a2.load();
  },

  /* volume tween (note: iOS ignores .volume, there it simply plays at full volume) */
  fade(el, to, ms, done) {
    const from = el.volume;
    const start = performance.now();
    const id = Symbol();
    this.fades.set(el, id);
    const step = (now) => {
      if (this.fades.get(el) !== id) return;
      const t = clamp((now - start) / ms);
      try { el.volume = clamp(lerp(from, to, t)); } catch (e) {}
      if (t < 1) requestAnimationFrame(step); else done && done();
    };
    requestAnimationFrame(step);
  },

  /* Call inside a user gesture */
  startLanding() {
    if (REEL) return;
    const a1 = this.a1;
    a1.muted = this.muted;
    a1.volume = 0;
    const p = a1.play();
    if (p && p.then) {
      p.then(() => {
        this.a1Failed = false;
        this.fade(a1, CONFIG.audio.landingVolume, CONFIG.audio.landingFadeIn);
        updateMuteBtn();
      }).catch(() => { this.a1Failed = true; updateMuteBtn(); });
    }
    this.unlock(this.a2);
  },

  /* iOS: a media element must be started once inside a gesture before it can play later */
  unlock(el) {
    if (el._unlocked) return;
    const wasMuted = el.muted;
    el.muted = true;
    const p = el.play();
    if (p && p.then) p.then(() => { el.pause(); el.muted = wasMuted || this.muted; el._unlocked = true; }).catch(() => { el.muted = wasMuted; });
  },

  stopLanding(ms = CONFIG.audio.landingFadeOut) {
    if (this.a1.paused) return;
    this.fade(this.a1, 0, ms, () => this.a1.pause());
  },

  resumeLanding() {
    if (REEL) return;
    this.a1.muted = this.muted;
    this.a1.volume = 0;
    this.a1.play().then(() => {
      this.a1Failed = false;
      this.fade(this.a1, CONFIG.audio.landingVolume, CONFIG.audio.landingFadeIn);
    }).catch(() => { this.a1Failed = true; updateMuteBtn(); });
  },

  setMuted(m) {
    this.muted = m;
    this.a1.muted = m;
    this.a2.muted = m;
    updateMuteBtn();
  },
};

function updateMuteBtn() {
  const b = $("#muteBtn");
  const off = Audio_.muted || Audio_.a1Failed;
  b.textContent = off ? "🔇" : "🔊";
  b.classList.toggle("needs-tap", Audio_.a1Failed && !Audio_.muted);
  $("#fcMute").textContent = Audio_.muted ? "🔇" : "🔊";
}

$("#muteBtn").addEventListener("click", () => {
  if (Audio_.a1Failed) {           // audio was blocked: this tap starts it
    Audio_.setMuted(false);
    Audio_.startLanding();
    return;
  }
  Audio_.setMuted(!Audio_.muted);
  if (!Audio_.muted && Audio_.a1.paused && state === "landing") Audio_.resumeLanding();
});

/* Pause when the tab is hidden; resume when visible */
let resumeOnVisible = null;
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    if (state === "landing" && !Audio_.a1.paused) { Audio_.a1.pause(); resumeOnVisible = "a1"; }
    else if (state === "film" && Film.playing) { Film.pause(); resumeOnVisible = "film"; }
  } else {
    if (resumeOnVisible === "a1" && state === "landing") Audio_.a1.play().catch(() => {});
    if (resumeOnVisible === "film" && state === "film") Film.play();
    resumeOnVisible = null;
  }
});

/* ═════════════════════ PARTICLE ENGINE ═════════════════════ */
function drawHeart(ctx, x, y, s, color, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.scale(s / 30, s / 30);
  ctx.beginPath();
  ctx.moveTo(0, 9);
  ctx.bezierCurveTo(-2, 5, -15, 1, -15, -7);
  ctx.bezierCurveTo(-15, -14, -6, -17, 0, -10);
  ctx.bezierCurveTo(6, -17, 15, -14, 15, -7);
  ctx.bezierCurveTo(15, 1, 2, 5, 0, 9);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function drawStar4(ctx, x, y, r, color, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -r); ctx.quadraticCurveTo(0, 0, r, 0); ctx.quadraticCurveTo(0, 0, 0, r);
  ctx.quadraticCurveTo(0, 0, -r, 0); ctx.quadraticCurveTo(0, 0, 0, -r);
  ctx.fill();
  ctx.restore();
}

class FX {
  constructor(canvas) {
    this.c = canvas;
    this.ctx = canvas.getContext("2d");
    this.p = [];
    this.resize();
    addEventListener("resize", () => this.resize());
  }
  resize() {
    const r = this.c.getBoundingClientRect();
    this.w = r.width || innerWidth;
    this.h = r.height || innerHeight;
    this.c.width = this.w * DPR;
    this.c.height = this.h * DPR;
    this.ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  add(o) { if (this.p.length < 900) this.p.push(o); }

  confetti(x, y, n = 120, spread = Math.PI * 2, dir = -Math.PI / 2, power = 1) {
    if (REDUCED) n = Math.min(n, 20);
    const cols = ["#ffc2d1", "#f2d08c", "#e7b08f", "#ff5c8a", "#fff6ea", "#c58cf0"];
    for (let i = 0; i < n; i++) {
      const a = dir + rand(-spread / 2, spread / 2);
      const v = rand(4, 13) * power;
      const kind = Math.random() < .28 ? "heart" : Math.random() < .2 ? "spark" : "conf";
      this.add({ kind, x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: .22, drag: .985,
        rot: rand(0, 6), vr: rand(-.3, .3), s: kind === "heart" ? rand(9, 17) : rand(5, 10),
        color: pick(cols), life: rand(2.2, 3.6), age: 0, flip: rand(0, 6) });
    }
  }
  hearts(x, y, n = 18) {
    if (REDUCED) n = 6;
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2), v = rand(1.5, 6);
      this.add({ kind: "heart", x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 2, g: .05, drag: .97,
        rot: rand(-.4, .4), vr: rand(-.05, .05), s: rand(10, 22), color: pick(["#ff5c8a", "#ffc2d1", "#ff8fab", "#f2d08c"]),
        life: rand(1.2, 2.2), age: 0 });
    }
  }
  sparkle(x, y, n = 1, col) {
    for (let i = 0; i < n; i++) {
      this.add({ kind: "spark", x: x + rand(-4, 4), y: y + rand(-4, 4), vx: rand(-1, 1), vy: rand(-1.4, .4), g: .02, drag: .96,
        rot: 0, vr: 0, s: rand(3, 7), color: col || pick(["#fff6ea", "#f2d08c", "#ffc2d1"]), life: rand(.5, 1), age: 0 });
    }
  }
  firework(x, y) {
    const n = REDUCED ? 16 : 70;
    const col = pick(["#ffc2d1", "#f2d08c", "#ff5c8a", "#c58cf0", "#9fe3ff"]);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2, v = rand(2.5, 6.5);
      this.add({ kind: "fw", x, y, px: x, py: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: .06, drag: .975,
        s: rand(1.6, 2.8), color: Math.random() < .2 ? "#fff6ea" : col, life: rand(1.1, 1.8), age: 0 });
    }
    // heart-shaped ring
    for (let i = 0; i < (REDUCED ? 0 : 40); i++) {
      const t = (i / 40) * Math.PI * 2;
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      this.add({ kind: "fw", x, y, px: x, py: y, vx: hx * .28, vy: hy * .28, g: .03, drag: .965, s: 2.2, color: "#ff8fab", life: 1.6, age: 0 });
    }
  }
  rocket(x0, y0, x1, y1, fx = this) {
    this.add({ kind: "rocket", x: x0, y: y0, tx: x1, ty: y1, sx: x0, sy: y0, age: 0, life: .7, s: 3, color: "#fff2cf", fx });
  }

  step(dt) {
    const ctx = this.ctx, f = dt * 60;
    ctx.clearRect(0, 0, this.w, this.h);
    const keep = [];
    for (const p of this.p) {
      p.age += dt;
      if (p.age > p.life) { if (p.kind === "rocket") p.fx.firework(p.tx, p.ty); continue; }
      const k = p.age / p.life;
      if (p.kind === "rocket") {
        const e = easeOut(k);
        p.x = lerp(p.sx, p.tx, e); p.y = lerp(p.sy, p.ty, e);
        ctx.globalAlpha = 1; ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, 7); ctx.fill();
        if (Math.random() < .8) this.sparkle(p.x, p.y + 4, 1, "#f2d08c");
        keep.push(p); continue;
      }
      p.px = p.x; p.py = p.y;
      p.vx *= Math.pow(p.drag, f); p.vy = p.vy * Math.pow(p.drag, f) + p.g * f;
      p.x += p.vx * f; p.y += p.vy * f; p.rot += (p.vr || 0) * f;
      const a = k < .7 ? 1 : 1 - (k - .7) / .3;
      if (p.kind === "conf") {
        ctx.save(); ctx.globalAlpha = a; ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.scale(1, Math.cos(p.age * 9 + p.flip)); ctx.fillStyle = p.color;
        ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore();
      } else if (p.kind === "heart") {
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); drawHeart(ctx, 0, 0, p.s, p.color, a); ctx.restore();
      } else if (p.kind === "spark") {
        drawStar4(ctx, p.x, p.y, p.s * (1 - k * .5), p.color, a);
      } else if (p.kind === "fw") {
        ctx.globalAlpha = a; ctx.strokeStyle = p.color; ctx.lineWidth = p.s; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(p.px - p.vx * 2, p.py - p.vy * 2); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      if (p.y < this.h + 60) keep.push(p);
    }
    ctx.globalAlpha = 1;
    this.p = keep;
  }
}

/* ═══════════════ AMBIENT (stars, petals, hearts, bokeh, balloons) ═══════════════ */
class Ambient {
  constructor(canvas, opts = {}) {
    this.c = canvas; this.ctx = canvas.getContext("2d");
    this.balloons = opts.balloons ?? true;
    this.density = opts.density ?? 1;
    this.resize();
    addEventListener("resize", () => this.resize());
    this.seed();
    this.nextBalloon = 4;
    this.t = 0;
  }
  resize() {
    const r = this.c.getBoundingClientRect();
    this.w = r.width || innerWidth; this.h = r.height || innerHeight;
    this.c.width = this.w * DPR; this.c.height = this.h * DPR;
    this.ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  seed() {
    const W = this.w, H = this.h, d = REDUCED ? .3 : this.density;
    const area = Math.min(1.6, (W * H) / (420 * 860));
    this.stars = Array.from({ length: Math.round(90 * area * d) }, () => ({ x: rand(0, W), y: rand(0, H * .9), r: rand(.4, 1.6), ph: rand(0, 6), sp: rand(.6, 2) }));
    this.petals = Array.from({ length: Math.round(14 * area * d) }, () => this.newPetal(true));
    this.hearts = Array.from({ length: Math.round(9 * area * d) }, () => this.newHeart(true));
    this.bokeh = Array.from({ length: Math.round(12 * area * d) }, () => ({ x: rand(0, W), y: rand(0, H), r: rand(18, 60), vx: rand(-.15, .15), vy: rand(-.25, -.05), ph: rand(0, 6), col: pick(["255,194,209", "242,208,140", "231,176,143", "197,140,240"]) }));
    this.balloonList = [];
  }
  newPetal(init) {
    return { x: rand(-20, this.w + 20), y: init ? rand(-this.h, this.h) : rand(-80, -20), s: rand(7, 14), vy: rand(.5, 1.2), sw: rand(.5, 1.6), ph: rand(0, 6), rot: rand(0, 6), vr: rand(-.02, .02), col: pick(["#ffb7c9", "#ff9fb8", "#f7c6d5", "#e98fa6"]) };
  }
  newHeart(init) {
    return { x: rand(0, this.w), y: init ? rand(0, this.h) : this.h + 30, s: rand(8, 18), vy: rand(.3, .8), ph: rand(0, 6), a: rand(.25, .6) };
  }
  step(dt) {
    const ctx = this.ctx, W = this.w, H = this.h, f = dt * 60;
    this.t += dt;
    ctx.clearRect(0, 0, W, H);
    // bokeh
    for (const b of this.bokeh) {
      b.x += b.vx * f; b.y += b.vy * f;
      if (b.y < -b.r) { b.y = H + b.r; b.x = rand(0, W); }
      const a = .07 + .05 * Math.sin(this.t * .8 + b.ph);
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, `rgba(${b.col},${a})`); g.addColorStop(1, `rgba(${b.col},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 7); ctx.fill();
    }
    // stars
    for (const s of this.stars) {
      const a = .35 + .65 * Math.abs(Math.sin(this.t * s.sp + s.ph));
      ctx.globalAlpha = a; ctx.fillStyle = "#fff6ea";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
      if (s.r > 1.3) drawStar4(ctx, s.x, s.y, s.r * 3.2, "#fff6ea", a * .5);
    }
    ctx.globalAlpha = 1;
    // rising hearts
    for (const h of this.hearts) {
      h.y -= h.vy * f; h.x += Math.sin(this.t + h.ph) * .3 * f;
      if (h.y < -30) Object.assign(h, this.newHeart(false));
      drawHeart(ctx, h.x, h.y, h.s, "#ff7aa0", h.a * clamp(h.y / (H * .3)));
    }
    // falling petals
    for (const p of this.petals) {
      p.y += p.vy * f; p.x += Math.sin(this.t * p.sw + p.ph) * .8 * f; p.rot += p.vr * f;
      if (p.y > H + 30) Object.assign(p, this.newPetal(false));
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot + Math.sin(this.t * 2 + p.ph) * .4);
      ctx.scale(1, .55 + .45 * Math.sin(this.t * 2.4 + p.ph));
      ctx.globalAlpha = .85; ctx.fillStyle = p.col;
      ctx.beginPath(); ctx.moveTo(0, -p.s); ctx.quadraticCurveTo(p.s, -p.s * .2, 0, p.s); ctx.quadraticCurveTo(-p.s, -p.s * .2, 0, -p.s); ctx.fill();
      ctx.restore();
    }
    // balloons (occasionally)
    if (this.balloons && !REDUCED) {
      this.nextBalloon -= dt;
      if (this.nextBalloon <= 0) {
        this.nextBalloon = rand(7, 13);
        this.balloonList.push({ x: rand(W * .1, W * .9), y: H + 60, r: rand(16, 24), vy: rand(.7, 1.1), ph: rand(0, 6), col: pick(["#ff8fab", "#f2d08c", "#e98fa6", "#c58cf0"]) });
      }
      this.balloonList = this.balloonList.filter((b) => b.y > -120);
      for (const b of this.balloonList) {
        b.y -= b.vy * f; const sx = Math.sin(this.t * 1.2 + b.ph) * 14;
        ctx.globalAlpha = .85;
        ctx.strokeStyle = "rgba(255,246,234,.5)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(b.x + sx, b.y + b.r * 1.2);
        ctx.quadraticCurveTo(b.x + sx - 8, b.y + b.r * 2.4, b.x + sx + 4, b.y + b.r * 3.6); ctx.stroke();
        const g = ctx.createRadialGradient(b.x + sx - b.r * .35, b.y - b.r * .4, 2, b.x + sx, b.y, b.r * 1.3);
        g.addColorStop(0, "#fff"); g.addColorStop(.25, b.col); g.addColorStop(1, b.col);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(b.x + sx, b.y, b.r, b.r * 1.2, 0, 0, 7); ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
  }
}

/* ═══════════════════════ STATE + LOOP ═══════════════════════ */
let state = "splash"; // splash → landing → film
const fx = new FX($("#fx"));
const ambient = new Ambient($("#ambient"));
let lastT = performance.now();

function loop(now) {
  const dt = Math.min(.05, (now - lastT) / 1000);
  lastT = now;
  if (state !== "film") ambient.step(dt);
  fx.step(dt);
  if (state === "film") Film.tick(now, dt);
  requestAnimationFrame(loop);
}

/* Custom smooth scroll (consistent across browsers) */
function scrollToY(y, ms = 1200) {
  return new Promise((res) => {
    const from = scrollY, start = performance.now();
    const max = document.documentElement.scrollHeight - innerHeight;
    y = clamp(y, 0, max);
    const step = (now) => {
      const t = clamp((now - start) / ms);
      window.scrollTo(0, lerp(from, y, easeInOut(t)));
      if (t < 1) requestAnimationFrame(step); else res();
    };
    requestAnimationFrame(step);
  });
}
const elTop = (el) => el.getBoundingClientRect().top + scrollY;

/* Sparkle cursor trail (desktop) + tap sparkles (mobile) */
let lastTrail = 0;
addEventListener("pointermove", (e) => {
  if (!FINE_POINTER || REEL || REDUCED || state === "film") return;
  const now = performance.now();
  if (now - lastTrail < 28) return;
  lastTrail = now;
  fx.sparkle(e.clientX, e.clientY, 2);
});
addEventListener("pointerdown", (e) => {
  if (state === "film" || REDUCED) return;
  fx.sparkle(e.clientX, e.clientY, 8);
});

/* ═══════════════════════ SPLASH ═══════════════════════ */
const splash = $("#splash");
const envWrap = $("#envelopeWrap");
let splashReady = false, opened = false;

function setupSplash() {
  $("#envTo").textContent = CONFIG.splash.to;
  $("#splashHint").textContent = CONFIG.splash.hint;
  $("#splashSound").textContent = CONFIG.splash.sound;
  $$(".letter-line").forEach((p, i) => (p.innerHTML = wordsHTML(CONFIG.splash.letter[i] || "")));

  const pol = $("#envPolaroid");
  const src = photoAt(1);
  if (src) pol.querySelector("img").src = src; else pol.classList.add("hidden");

  // Ready when audio1 can play through (or after a short fallback, iOS ignores preload)
  const ready = () => {
    if (splashReady) return;
    splashReady = true;
    splash.classList.add("ready");
    envWrap.setAttribute("aria-disabled", "false");
  };
  Audio_.a1.addEventListener("canplaythrough", ready, { once: true });
  setTimeout(ready, REEL ? 500 : 3500);

  const go = (e) => { if (e) e.preventDefault(); if (splashReady && !opened) openEnvelope(); };
  envWrap.addEventListener("click", go);
  envWrap.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") go(e); });
}

async function openEnvelope() {
  opened = true;
  mark("open");
  // 1. Start audio1 *inside* the tap handler (satisfies autoplay policy)
  Audio_.startLanding();

  const sealR = $("#seal").getBoundingClientRect();
  const sx = sealR.left + sealR.width / 2, sy = sealR.top + sealR.height / 2;

  if (REDUCED) {
    splash.classList.add("cracked", "flap-open", "letter-out");
    $$(".letter-line .w").forEach((w) => w.classList.add("on"));
    await sleep(1400);
    return land();
  }

  // 2. Seal cracks with a pop
  splash.classList.add("cracked");
  fx.sparkle(sx, sy, 16);
  fx.hearts(sx, sy, 8);

  // 3. Flap opens in 3D, light glows out
  await sleep(380);
  splash.classList.add("flap-open");

  // 4. Letter slides up, words appear
  await sleep(750);
  splash.classList.add("letter-out");
  await sleep(450);
  const words = $$(".letter-line .w");
  const per = 1500 / words.length;
  words.forEach((w, i) => setTimeout(() => w.classList.add("on"), i * per));

  // 5. Confetti + hearts burst out of the envelope
  await sleep(500);
  const er = envWrap.getBoundingClientRect();
  fx.confetti(er.left + er.width / 2, er.top + er.height * .2, 140, Math.PI * .9, -Math.PI / 2, 1.1);
  fx.hearts(er.left + er.width / 2, er.top, 14);

  // 6. Letter scales up and dissolves into the landing page
  await sleep(1350);
  splash.classList.add("letter-up");
  await sleep(450);
  land();
}

function land() {
  state = "landing";
  splash.classList.add("dissolve");
  document.body.classList.remove("is-splash");
  document.body.classList.add("landed");
  $("#main").setAttribute("aria-hidden", "false");
  window.scrollTo(0, 0);
  updateMuteBtn();
  mark("landed");
  setTimeout(() => {
    splash.classList.add("gone");
    // one-time landing confetti
    fx.confetti(innerWidth * .2, innerHeight * .35, 70, Math.PI * .8, -Math.PI / 2.4);
    fx.confetti(innerWidth * .8, innerHeight * .35, 70, Math.PI * .8, -Math.PI / 1.7);
  }, 900);
}

/* ═══════════════════════ LANDING CONTENT ═══════════════════════ */
function buildPage() {
  $("#heroTitle").textContent = CONFIG.hero.title;
  $("#heroNameEn").textContent = CONFIG.herNameEn;
  $("#heroCouplet").textContent = CONFIG.hero.couplet;
  $("#cakeHint").textContent = CONFIG.hero.cakeHint;

  $("#wishesTitle").textContent = CONFIG.wishesTitle;
  $("#wishGrid").innerHTML = CONFIG.wishes.map((w) => `<div class="wish glass"><span class="wish-ico">${w.icon}</span><p>${w.text}</p></div>`).join("");

  $("#storyTitle").textContent = CONFIG.storyTitle;
  $("#tlItems").innerHTML = CONFIG.story.map((s) => `<article class="tl-item glass" data-icon="${s.icon}"><h3><span class="tl-ico">${s.icon}</span> ${s.title}</h3><p>${s.text}</p></article>`).join("");

  $("#loveTitle").textContent = CONFIG.loveTitle;
  $("#loveLetter").innerHTML = CONFIG.loveLetter.map((l) => `<p>${l}</p>`).join("");
  $("#loveCounterLabel").textContent = CONFIG.loveYearsLabel;
  $("#loveCouplet").textContent = CONFIG.loveCouplet;

  $("#dreamsTitle").textContent = CONFIG.dreamsTitle;
  $("#dreamGrid").innerHTML = CONFIG.dreams.map((d, i) => `<div class="dream glass"><span class="dream-ico" style="animation-delay:${i * .5}s">${d.icon}</span><p>${d.text}</p></div>`).join("");
  $("#vaadaText").textContent = CONFIG.vaada;

  $("#promisesTitle").textContent = CONFIG.promisesTitle;
  $("#promiseList").innerHTML = CONFIG.promises.map((p) => `<li class="glass"><span class="pop">💗</span>${p}</li>`).join("");

  $("#photosTitle").textContent = CONFIG.photosTitle;
  buildStrip();

  $("#giftLine").textContent = CONFIG.gift.line;
  $("#giftBtn").textContent = CONFIG.gift.button;

  $(".fe-name").textContent = CONFIG.herName;
  $(".fe-en").textContent = CONFIG.herNameEn;
}

function buildStrip() {
  const track = $("#stripTrack");
  const items = PHOTO_OK.map((src) => {
    const idx = PHOTOS.indexOf(src);
    return { src, cap: CONFIG.captions[idx] || "❤️" };
  });
  if (!items.length) { $("#photos").style.display = "none"; return; }
  const one = items.map((it) => `<figure class="polaroid" data-src="${it.src}" data-cap="${it.cap}"><img src="${it.src}" alt="${it.cap}" loading="lazy" /><figcaption>${it.cap}</figcaption></figure>`).join("");
  track.innerHTML = one + one; // duplicated for a seamless loop
  track.style.setProperty("--strip-dur", `${items.length * 5.5}s`);
  track.addEventListener("click", (e) => {
    const f = e.target.closest(".polaroid");
    if (f) openLightbox(f.dataset.src, f.dataset.cap);
  });
}

function openLightbox(src, cap) {
  $("#lbImg").src = src; $("#lbImg").alt = cap; $("#lbCap").textContent = cap;
  $("#lightbox").classList.add("open");
}
$("#lbClose").addEventListener("click", () => $("#lightbox").classList.remove("open"));
$("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") e.currentTarget.classList.remove("open"); });

/* Scroll-triggered reveals */
function setupReveals() {
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      const el = en.target;
      io.unobserve(el);
      if (el.id === "ecg") { drawEcg(); continue; }
      if (el.id === "loveLetter") { $$("p", el).forEach((p, i) => setTimeout(() => p.classList.add("in"), i * 260)); continue; }
      if (el.classList.contains("love-counter")) { countUp(); continue; }
      el.classList.add("in");
      if (el.tagName === "LI") {
        setTimeout(() => { const r = el.getBoundingClientRect(); fx.hearts(r.right - 26, r.top + r.height / 2, 5); }, 450);
      }
    }
  }, { threshold: .25, rootMargin: "0px 0px -8% 0px" });

  const groups = [".wish", ".tl-item", ".dream", ".promise-list li"];
  groups.forEach((g) => $$(g).forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * .12}s`; io.observe(el); }));
  $$(".reveal").forEach((el) => io.observe(el));
  io.observe($("#ecg"));
  io.observe($("#loveLetter"));
  io.observe($(".love-counter"));
}

function drawEcg() {
  const e = $("#ecg");
  e.classList.add("draw");
  setTimeout(() => {
    e.classList.add("beat");
    const r = e.getBoundingClientRect();
    fx.hearts(r.left + r.width * .76, r.top + r.height * .5, 10);
  }, 3200);
}

function countUp() {
  const el = $("#loveCounter"), n = CONFIG.loveYears, start = performance.now(), dur = 2200;
  const step = (now) => {
    const t = clamp((now - start) / dur);
    el.textContent = toUrduNum(Math.round(easeOut(t) * n));
    if (t < 1) requestAnimationFrame(step);
    else { const r = el.getBoundingClientRect(); fx.sparkle(r.left + r.width / 2, r.top + r.height / 2, 18); }
  };
  requestAnimationFrame(step);
}

/* Timeline: the fill grows and a traveller (🚲 → 🚆 → 🎓 → ❤️) rides along as she scrolls */
let travellerIcon = "", lastScrollT = 0;
function updateTimeline() {
  const tl = $("#timeline"), r = tl.getBoundingClientRect();
  const p = clamp((innerHeight * .6 - r.top) / r.height);
  $("#tlFill").style.transform = `scaleY(${p})`;
  const trav = $("#tlTraveller");
  const y = p * (r.height - 40);
  trav.style.transform = `translateY(${y}px)`;
  // icon of the last item the traveller has passed
  let icon = "🚲";
  for (const it of $$(".tl-item")) {
    if (it.offsetTop - 10 <= y) icon = it.dataset.icon;
  }
  if (p <= 0.02) icon = "🚲";
  if (icon === "❤️" && p < .2) icon = "🚲";
  if (icon !== travellerIcon) {
    travellerIcon = icon;
    trav.querySelector("span").textContent = icon;
    trav.classList.remove("bump"); void trav.offsetWidth; trav.classList.add("bump");
  }
  trav.classList.add("riding");
  lastScrollT = performance.now();
}
setInterval(() => { if (performance.now() - lastScrollT > 300) $("#tlTraveller").classList.remove("riding"); }, 200);

/* Cake: tap the candle → blow out, burst, scroll to the next section */
function setupCake() {
  const cake = $("#cake");
  cake.addEventListener("click", () => blowCandle());
}
function blowCandle() {
  const cake = $("#cake");
  if (cake.classList.contains("out")) return;
  cake.classList.add("out");
  $("#cakeHint").textContent = CONFIG.hero.cakeDone;
  const r = cake.getBoundingClientRect();
  fx.sparkle(r.left + r.width / 2, r.top + r.height * .12, 20);
  fx.confetti(r.left + r.width / 2, r.top + r.height * .2, 110, Math.PI * 1.1, -Math.PI / 2, 1.1);
  if (!REEL) setTimeout(() => scrollToY(elTop($("#wishes")) - 10, 1600), 1300);
}

/* Hero name → heart burst */
$("#heroTitle").addEventListener("click", (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  fx.hearts(e.clientX || r.left + r.width / 2, e.clientY || r.top + r.height / 2, 26);
});

/* Gift button: floating hearts + click → film */
function setupGift() {
  const wrap = $("#giftHearts");
  setInterval(() => {
    if (state !== "landing" || REDUCED) return;
    const i = document.createElement("i");
    i.textContent = pick(["❤", "♥", "💗"]);
    i.style.left = `${rand(10, 90)}%`;
    i.style.setProperty("--dx", `${rand(-30, 30)}px`);
    wrap.appendChild(i);
    setTimeout(() => i.remove(), 3000);
  }, 450);
  $("#giftBtn").addEventListener("click", (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    fx.hearts(r.left + r.width / 2, r.top + r.height / 2, 24);
    Audio_.unlock(Audio_.a2);   // inside the gesture, for iOS
    Film.open();
  });
}

/* ═══════════════════════ THE FILM ═══════════════════════ */
const Film = {
  el: $("#film"),
  stage: $("#filmStage"),
  fx: null,
  scenes: [],
  t: 0,
  playing: false,
  ended: false,
  fired: new Set(),
  useAudioClock: false,
  idleTimer: null,

  build() {
    this.fx = new FX($("#filmFx"));
    const F = CONFIG.FILM;
    this.stage.innerHTML = "";
    this.scenes = F.scenes.map((sc) => {
      const el = document.createElement("div");
      el.className = `scene scene-${sc.type}`;
      const ph = (sc.photos || []).map((i) => photoAt(i)).filter(Boolean);
      const bg = (src) => `style="background-image:url('${src}')"`;
      let html = "";
      if (sc.type === "title") {
        html = `<div class="sc-title"><h2>${F.title.ur}</h2><p>${F.title.en}</p></div>`;
      } else if (sc.type === "close") {
        html = `<div class="sc-close"><div class="big-heart">❤</div><h2>${wordsHTML(F.closing.ur)}</h2><p class="sign">${CONFIG.myName}</p></div>`;
      } else if (!ph.length) {
        return null; // no photos at all → skip photo scenes
      } else if (sc.type === "full") {
        html = `<div class="sc-blur" ${bg(ph[0])}></div><div class="sc-center"><div class="sc-fit" ${bg(ph[0])}></div></div>`;
      } else if (sc.type === "tilt") {
        html = `<div class="sc-blur" ${bg(ph[0])}></div><div class="sc-center sc-persp"><div class="sc-tilt" ${bg(ph[0])}><i class="sc-sheen"></i></div></div>`;
      } else if (sc.type === "reveal") {
        html = `<div class="sc-blur" ${bg(ph[0])}></div><div class="sc-center"><div class="sc-reveal"><div class="sc-reveal-img" ${bg(ph[0])}></div><i class="sc-line top"></i><i class="sc-line bot"></i></div></div>`;
      } else if (sc.type === "polaroids") {
        html = `<div class="sc-blur" ${bg(ph[0])}></div>` + ph.map((src) => {
          const cap = CONFIG.captions[PHOTOS.indexOf(src)] || "❤️";
          return `<div class="sc-pol"><div ${bg(src)}></div><p>${cap}</p></div>`;
        }).join("");
      } else if (sc.type === "collage") {
        html = `<div class="sc-blur" ${bg(ph[0])}></div><div class="sc-collage">${ph.map((src) => `<div ${bg(src)}></div>`).join("")}</div>`;
      }
      if (sc.caption) html += `<p class="sc-caption">${wordsHTML(sc.caption)}</p>`;
      el.innerHTML = html;
      this.stage.appendChild(el);
      return { ...sc, el, words: $$(".w", el) };
    }).filter(Boolean);

    // controls
    $("#fcPlay").onclick = () => (this.playing ? this.pause() : this.play());
    $("#fcMute").onclick = () => Audio_.setMuted(!Audio_.muted);
    $("#fcReplay").onclick = () => this.restart();
    $("#fcClose").onclick = () => this.back();
    $("#feReplay").onclick = () => this.restart();
    $("#feBack").onclick = () => this.back();
    this.el.addEventListener("pointermove", () => this.wake());
    this.el.addEventListener("pointerdown", () => this.wake());
    addEventListener("keydown", (e) => {
      if (state !== "film") return;
      if (e.code === "Space") { e.preventDefault(); if (!this.ended) this.playing ? this.pause() : this.play(); }
      if (e.key === "Escape") this.back();
    });
    Audio_.a2.addEventListener("ended", () => { if (state === "film") this.finish(); });
  },

  wake() {
    this.el.classList.remove("idle");
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => this.playing && this.el.classList.add("idle"), 2600);
  },

  async open() {
    if (state === "film") return;
    state = "film";
    mark("click");
    Audio_.stopLanding();                     // fade audio1 out over ~1s
    document.body.classList.add("film-open");
    if (REEL) this.el.classList.add("reel");
    this.el.setAttribute("aria-hidden", "false");
    this.el.classList.add("open");
    this.fx.resize();
    this.render(0);
    await sleep(1100);                        // black → fade in, while audio1 fades out
    $("#filmLoader").classList.add("hide");
    this.restart();
  },

  restart() {
    $("#filmEnd").classList.remove("show");
    this.ended = false;
    this.fired.clear();
    this.fx.p = [];
    this.t = 0;
    const a2 = Audio_.a2;
    try { a2.currentTime = CONFIG.audio.filmStartAt; } catch (e) {}
    this.play();
    mark("filmStart");
  },

  play() {
    if (this.ended) return;
    this.playing = true;
    $("#fcPlay").textContent = "❚❚";
    this.wake();
    if (REEL) { this.useAudioClock = false; return; }
    const a2 = Audio_.a2;
    a2.muted = Audio_.muted;
    a2.volume = this.volumeAt(this.t);
    const p = a2.play();
    this.useAudioClock = false;
    if (p && p.then) p.then(() => { this.useAudioClock = true; }).catch(() => { this.useAudioClock = false; });
  },

  pause() {
    this.playing = false;
    Audio_.a2.pause();
    $("#fcPlay").textContent = "▶";
    this.el.classList.remove("idle");
  },

  finish() {
    if (this.ended) return;
    this.ended = true;
    this.playing = false;
    Audio_.a2.pause();
    $("#fcBar").style.width = "100%";
    $("#filmEnd").classList.add("show");
    mark("filmEnd");
    const w = innerWidth, h = innerHeight;
    this.fx.confetti(w / 2, h * .45, 120);
  },

  back() {
    this.pause();
    this.ended = false;
    $("#filmEnd").classList.remove("show");
    this.el.classList.remove("open");
    this.el.setAttribute("aria-hidden", "true");
    document.body.classList.remove("film-open");
    state = "landing";
    lastT = performance.now();
    Audio_.resumeLanding();                   // only on "back", with a fade-in
  },

  volumeAt(t) {
    const D = CONFIG.FILM.duration;
    const fin = clamp(t / .8), fout = clamp((D - t) / 1.5);
    return clamp(CONFIG.audio.filmVolume * Math.min(fin, fout));
  },

  tick(now, dt) {
    if (!this.playing) { this.fx.step(0); return; }
    const a2 = Audio_.a2;
    if (this.useAudioClock && !a2.paused && a2.readyState >= 2) {
      // audio is the master clock, so visuals never drift from the song
      this.t = a2.currentTime - CONFIG.audio.filmStartAt;
      try { a2.volume = this.volumeAt(this.t); } catch (e) {}
    } else {
      this.t += dt;
    }
    const D = CONFIG.FILM.duration;
    if (this.t >= D) { this.render(D); this.finish(); return; }
    this.render(this.t);
    this.ambientFx(dt);
    this.fx.step(dt);
    $("#fcBar").style.width = `${(this.t / D) * 100}%`;
  },

  /* overlay effects: floating hearts, petals, sparkles, fireworks */
  ambientFx(dt) {
    const f = this.fx, w = f.w, h = f.h, t = this.t;
    if (Math.random() < dt * 2.2) f.add({ kind: "heart", x: rand(0, w), y: h + 20, vx: rand(-.3, .3), vy: rand(-2.2, -1.2), g: 0, drag: 1, rot: rand(-.3, .3), vr: 0, s: rand(10, 20), color: pick(["#ff8fab", "#ffc2d1", "#ff5c8a"]), life: rand(4, 6), age: 0 });
    if (Math.random() < dt * 2.6) f.add({ kind: "conf", x: rand(0, w), y: -10, vx: rand(-.5, .5), vy: rand(1, 2), g: .005, drag: 1, rot: rand(0, 6), vr: rand(-.05, .05), s: rand(8, 12), color: pick(["#ffb7c9", "#f7c6d5", "#e98fa6"]), life: rand(5, 7), age: 0, flip: rand(0, 6) });
    if (Math.random() < dt * 5) f.sparkle(rand(0, w), rand(0, h), 1);
    for (const ft of CONFIG.FILM.fireworksAt) {
      if (t >= ft && !this.fired.has(ft)) {
        this.fired.add(ft);
        f.rocket(rand(w * .15, w * .85), h + 10, rand(w * .2, w * .8), rand(h * .12, h * .4));
      }
    }
    // light leak breathing
    $(".film-leak").style.opacity = (.12 + .14 * Math.sin(t * .9)).toFixed(3);
  },

  /* Draw every scene for time t — pure function of t, so pause/seek stay in sync */
  render(t) {
    for (const sc of this.scenes) {
      const { from, to, el } = sc;
      if (t < from - .05 || t > to + .05) { if (el.style.opacity !== "0") el.style.opacity = "0"; continue; }
      const lt = t - from, len = to - from, p = clamp(lt / len);
      const fadeIn = .55, fadeOut = .55;
      const aIn = sc.type === "title" ? clamp(lt / 1) : clamp(lt / fadeIn);
      const aOut = sc.type === "close" ? 1 : clamp((to - t) / fadeOut);
      const a = Math.min(aIn, aOut);
      el.style.opacity = a.toFixed(3);
      // dreamy blur on transitions
      const blur = (1 - a) * 10;
      el.style.filter = blur > .3 ? `blur(${blur.toFixed(1)}px)` : "";
      this.renderScene(sc, lt, p, len);
      // captions word by word
      if (sc.words.length && sc.type !== "close") {
        sc.words.forEach((w, i) => {
          const k = clamp((lt - .7 - i * .3) / .5);
          w.style.opacity = k; w.style.transform = `translateY(${(1 - k) * 14}px)`; w.style.filter = k < 1 ? `blur(${(1 - k) * 8}px)` : "";
        });
      }
    }
  },

  renderScene(sc, lt, p, len) {
    const el = sc.el;
    switch (sc.type) {
      case "title": {
        const h = $("h2", el), s = $("p", el);
        const k = easeOut(clamp(lt / 1.6)), k2 = easeOut(clamp((lt - .9) / 1.2));
        h.style.transform = `scale(${lerp(.86, 1, k)}) translateY(${(1 - k) * 20}px)`;
        h.style.opacity = k; s.style.opacity = k2; s.style.transform = `translateY(${(1 - k2) * 16}px)`;
        if (this.playing && Math.random() < .5) this.fx.sparkle(rand(this.fx.w * .2, this.fx.w * .8), rand(this.fx.h * .35, this.fx.h * .62), 1, "#f2d08c");
        break;
      }
      case "full": {
        const f = $(".sc-fit", el), e = easeInOut(p);
        let tr = "";
        if (sc.kb === "in") tr = `scale(${lerp(1, 1.12, e)}) translateY(${lerp(0, -2, e)}%)`;
        else if (sc.kb === "out") tr = `scale(${lerp(1.16, 1.02, e)})`;
        else tr = `scale(1.1) translateX(${lerp(-3, 3, e)}%) rotate(${lerp(-1, 1, e)}deg)`;
        f.style.transform = tr;
        break;
      }
      case "tilt": {
        // card swings in on a 3D hinge, then drifts; a light sheen sweeps across
        const c = $(".sc-tilt", el), sheen = $(".sc-sheen", el);
        const k = easeOut(clamp(lt / 1.4));
        c.style.transform = `rotateY(${lerp(-70, 0, k) + Math.sin(lt * .9) * 4}deg) rotateX(${Math.cos(lt * .7) * 3}deg) translateZ(${lerp(-300, 0, k)}px) scale(${lerp(1, 1.04, p)})`;
        c.style.opacity = clamp(k * 2);
        sheen.style.transform = `translateX(${lerp(-160, 160, clamp((lt - 1.1) / 1.3))}%) skewX(-18deg)`;
        break;
      }
      case "polaroids": {
        const pols = $$(".sc-pol", el);
        const n = pols.length;
        const landing = [
          { x: -24, y: -16, r: -9 },
          { x: 22, y: -2, r: 7 },
          { x: -2, y: 14, r: -3 },
        ];
        pols.forEach((pol, i) => {
          const start = .15 + i * 1.0;
          const k = clamp((lt - start) / .9);
          const e = easeBack(k);
          const L = landing[i % 3];
          const drift = Math.sin(lt * .8 + i) * .8;
          pol.style.opacity = clamp(k * 3);
          pol.style.left = "50%"; pol.style.top = "50%";
          pol.style.transform = `translate(-50%,-50%) translate(${L.x + drift}vw, ${lerp(-90, L.y, e)}vh) rotate(${lerp(L.r * 4, L.r, e)}deg) scale(${lerp(1.3, 1, e)})`;
          pol.style.zIndex = i + 1;
        });
        break;
      }
      case "reveal": {
        // a gold line splits open like curtains to reveal the photo
        const img = $(".sc-reveal-img", el), top = $(".sc-line.top", el), bot = $(".sc-line.bot", el);
        const kLine = easeOut(clamp(lt / .6));
        const kOpen = easeInOut(clamp((lt - .5) / 1.2));
        const gap = kOpen * 50;
        img.style.clipPath = `inset(${50 - gap}% 0 ${50 - gap}% 0)`;
        img.style.transform = `scale(${lerp(1.25, 1.05, easeOut(p))})`;
        top.style.top = `${50 - gap}%`; bot.style.top = `${50 + gap}%`;
        top.style.transform = bot.style.transform = `translateY(-50%) scaleX(${kLine})`;
        top.style.opacity = bot.style.opacity = 1 - clamp((lt - 1.9) / .6) * .7;
        if (lt > .5 && lt < .56 && this.playing) { this.fx.sparkle(this.fx.w * .2, this.fx.h / 2, 10, "#f2d08c"); this.fx.sparkle(this.fx.w * .8, this.fx.h / 2, 10, "#f2d08c"); }
        break;
      }
      case "collage": {
        $$(".sc-collage div", el).forEach((tile, i) => {
          const k = easeOut(clamp((lt - i * .45) / .8));
          tile.style.opacity = k;
          tile.style.transform = `scale(${lerp(.7, 1, k)}) translateY(${(1 - k) * 40}px)`;
          tile.style.backgroundSize = `auto ${lerp(130, 110, p)}%`;
          tile.style.clipPath = `inset(${(1 - k) * 50}% round 6px)`;
        });
        break;
      }
      case "close": {
        const h = $(".big-heart", el), sign = $(".sign", el), words = sc.words;
        const k = easeBack(clamp(lt / 1.2));
        const beat = 1 + .08 * Math.pow(Math.max(0, Math.sin(lt * 5)), 4);
        h.style.transform = `scale(${lerp(0, 1, k) * beat})`;
        words.forEach((w, i) => {
          const kk = clamp((lt - 1 - i * .25) / .5);
          w.style.opacity = kk; w.style.transform = `translateY(${(1 - kk) * 16}px)`; w.style.filter = kk < 1 ? `blur(${(1 - kk) * 8}px)` : "";
        });
        const ks = easeOut(clamp((lt - 2.6) / 1.2));
        sign.style.opacity = ks;
        sign.style.transform = `translateY(${(1 - ks) * 20}px) scale(${lerp(.9, 1, ks)})`;
        sign.style.clipPath = `inset(0 ${(1 - ks) * 100}% 0 0)`;
        // fade to dark at the very end
        el.style.opacity = Math.min(parseFloat(el.style.opacity), clamp((CONFIG.FILM.duration + .2 - this.t) / 1));
        break;
      }
    }
  },
};

/* ═══════════════════════ REEL (automated demo for recording) ═══════════════════════ */
async function runReel() {
  document.documentElement.style.scrollBehavior = "auto";
  if (PARAMS.has("filmonly")) { land(); await sleep(300); return Film.open(); }
  await sleep(1300);
  openEnvelope();
  await sleep(5200);                        // envelope sequence → landing
  await sleep(2000);                        // enjoy the hero
  blowCandle();
  await sleep(1500);
  const secs = ["#wishes", "#story", "#love", "#dreams", "#promises", "#photos", "#gift"];
  for (const id of secs) {
    const s = $(id);
    const top = elTop(s) - 8;
    await scrollToY(top, 850);
    const extra = Math.max(0, s.offsetHeight - innerHeight * .9);
    const dwell = id === "#gift" ? 900 : clamp(1000 + extra * 2.2, 1200, 3400);
    if (extra > 0 && id !== "#gift") await scrollToY(top + extra, dwell);
    else await sleep(dwell);
  }
  const r = $("#giftBtn").getBoundingClientRect();
  fx.sparkle(r.left + r.width / 2, r.top + r.height / 2, 14);
  await sleep(500);
  $("#giftBtn").click();
}

/* ═══════════════════════ BOOT ═══════════════════════ */
(async function boot() {
  Audio_.init();
  await loadPhotos();
  if (!PHOTO_OK.includes(CONFIG.BG_PHOTO)) {
    const bg = PHOTO_OK[0];
    $(".bg-photo").style.backgroundImage = bg ? `url('${bg}')` : "none";
  }
  setupSplash();
  buildPage();
  setupReveals();
  setupCake();
  setupGift();
  Film.build();
  addEventListener("scroll", () => { if (state === "landing") updateTimeline(); }, { passive: true });
  addEventListener("resize", () => updateTimeline());
  updateTimeline();
  requestAnimationFrame(loop);
  if (REEL) runReel();
})();
