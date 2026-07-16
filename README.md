<div align="center">

# 🚀 qa orders Academy

**منصة تعليمية متكاملة لدورات ضمان الجودة (QA Courses)**

منصة ويب تفاعلية مبنية بـ Next.js 14 لتقديم دورات اختبار البرمجيات وضمان الجودة، مع لوحات تحكم مخصصة للمسؤولين والطلاب وأولياء الأمور.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.21-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e?logo=supabase)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-Private-red)]()

</div>

---

## 📋 نظرة عامة

SpaceCoder Academy هي منصة تعليمية شاملة مصممة لتقديم دورات متخصصة في اختبار البرمجيات وضمان الجودة (QA). توفر المنصة تجربة مستخدم غنية بتصميم فضائي عصري مع ثلاث لوحات تحكم مخصصة حسب نوع المستخدم، مما يضمن تجربة مخصصة وفعالة لكل فئة.

### ✨ المميزات الرئيسية

- **🎓 نظام دورات متكامل** — إنشاء وإدارة دورات QA مع محتوى تفاعلي
- **📝 نظام اختبارات (Quizzes)** — اختبارات تفاعلية لكل دورة مع تقييم فوري
- **🏆 نظام نقاط ومكافآت** — تحفيز الطلاب عبر نظام Leaderboard والمكافآت
- **📊 تحليلات شاملة** — لوحة تحكم تحليلية للمسؤولين مع رسوم بيانية تفاعلية
- **👨‍👩‍👧 ربط أولياء الأمور** — متابعة تقدم الأبناء في الوقت الفعلي
- **💬 نظام رسائل** — تواصل مباشر بين المسؤولين والطلاب وأولياء الأمور
- **🔔 إشعارات ذكية** — تنبيهات فورية للأحداث المهمة
- **🌙 وضع داكن/فاتح** — دعم الثيمات عبر next-themes
- **📱 تصميم متجاوب** — متوافق مع جميع أحجام الشاشات
- **⏰ تقارير أسبوعية تلقائية** — cron job لتوليد تقارير دورية

---

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|-----------|
| **Next.js 14** | إطار العمل الرئيسي (App Router) |
| **React 18** | مكتبة واجهة المستخدم |
| **TypeScript 5.7** | لغة البرمجة الرئيسية |
| **Tailwind CSS 3.4** | تنسيق وتصميم الواجهات |
| **Supabase** | قاعدة البيانات والمصادقة (Auth + DB + Storage) |
| **Recharts** | الرسوم البيانية والتحليلات |
| **React Hook Form + Zod** | إدارة النماذج والتحقق من البيانات |
| **Resend** | إرسال البريد الإلكتروني |
| **Lucide React** | مكتبة الأيقونات |
| **Sonner** | إشعارات Toast |
| **next-themes** | إدارة الثيمات (داكن/فاتح) |
| **Vercel** | النشر والاستضافة مع Cron Jobs |

---

## 📁 هيكل المشروع

```
QA-courses/
├── 📂 public/                          # الملفات الثابتة
│   ├── 📂 images/                      # الصور والأصول المرئية
│   ├── 📂 icons/                       # أيقونات مخصصة
│   └── 📂 fonts/                       # خطوط مخصصة
│
├── 📂 src/                             # الكود المصدري
│   ├── 📂 app/                         # صفحات Next.js App Router
│   │   ├── 📂 (auth)/                  # صفحات المصادقة
│   │   │   ├── 📂 login/               # صفحة تسجيل الدخول
│   │   │   └── 📂 register/            # صفحة إنشاء حساب
│   │   │
│   │   ├── 📂 (dashboard)/             # لوحات التحكم (بـ Layout مشترك)
│   │   │   ├── 📂 admin/               # لوحة تحكم المسؤول
│   │   │   │   ├── 📂 analytics/       # صفحة التحليلات والإحصائيات
│   │   │   │   ├── 📂 courses/         # إدارة الدورات
│   │   │   │   │   ├── 📂 new/         # إضافة دورة جديدة
│   │   │   │   │   └── 📂 [id]/        # تعديل/عرض دورة محددة
│   │   │   │   ├── 📂 enrollments/     # إدارة التسجيلات
│   │   │   │   └── 📂 students/        # إدارة الطلاب
│   │   │   │
│   │   │   ├── 📂 student/             # لوحة تحكم الطالب
│   │   │   │   ├── 📂 courses/         # الدورات المتاحة
│   │   │   │   │   ├── 📂 [id]/        # تفاصيل الدورة
│   │   │   │   │   │   └── 📂 quiz/[quizId]/  # صفحة الاختبار
│   │   │   │   ├── 📂 leaderboard/     # لوحة المتصدرين
│   │   │   │   ├── 📂 profile/         # الملف الشخصي
│   │   │   │   └── 📂 rewards/         # المكافآت والإنجازات
│   │   │   │
│   │   │   └── 📂 parent/              # لوحة تحكم ولي الأمر
│   │   │       ├── 📂 children/[id]/   # متابعة تقدم الابن
│   │   │       ├── 📂 link/            # ربط الحساب بالابن
│   │   │       └── 📂 messages/        # الرسائل
│   │   │
│   │   ├── 📂 api/                     # API Routes
│   │   │   └── 📂 cron/weekly-reports/ # تقارير أسبوعية تلقائية
│   │   ├── 📂 messages/                # صفحة الرسائل العامة
│   │   └── 📂 notifications/           # صفحة الإشعارات
│   │
│   ├── 📂 components/                  # المكونات القابلة لإعادة الاستخدام
│   │   ├── 📂 ui/                      # مكونات واجهة المستخدم الأساسية
│   │   ├── 📂 layout/                  # مكونات التخطيط (Navbar, Sidebar...)
│   │   ├── 📂 forms/                   # مكونات النماذج
│   │   └── 📂 dashboard/               # مكونات لوحات التحكم
│   │
│   ├── 📂 lib/                         # المكتبات والأدوات المساعدة
│   │   ├── 📂 supabase/                # إعداد وتوصيل Supabase (Client, Server, Middleware)
│   │   └── 📂 utils/                   # دوال مساعدة عامة
│   │
│   ├── 📂 hooks/                       # Custom React Hooks
│   ├── 📂 types/                       # تعريفات TypeScript المخصصة
│   └── 📂 styles/                      # الأنماط العامة (globals.css...)
│
├── 📂 docs/                            # الوثائق والمستندات
│   ├── agent-rules.md                  # قواعد وكيل البرمجة AI
│   └── build-log.txt                   # سجل البناء الأخير
│
├── .env.example                        # قالب متغيرات البيئة
├── .env.local                          # متغيرات البيئة المحلية (⚠️ لا ترفعه على Git)
├── .eslintrc.json                      # إعدادات ESLint
├── .gitignore                          # ملفات Git المُتجاهلة
├── next.config.js                      # إعدادات Next.js
├── next-env.d.ts                       # تعريفات TypeScript لـ Next.js
├── package.json                        # تبعيات المشروع والسكريبتات
├── package-lock.json                   # قفل التبعيات
├── postcss.config.js                   # إعدادات PostCSS
├── tailwind.config.ts                  # إعدادات Tailwind CSS والثيم
├── tsconfig.json                       # إعدادات TypeScript
├── vercel.json                         # إعدادات النشر على Vercel
└── README.md                           # هذا الملف
```

---

## 🚀 التشغيل المحلي

### المتطلبات الأساسية

- **Node.js** — الإصدار 18 أو أحدث
- **npm** — يأتي مع Node.js
- **حساب Supabase** — لقاعدة البيانات والمصادقة
- **مفتاح Gemini API** — (اختياري) للميزات المدعومة بالذكاء الاصطناعي

### خطوات التثبيت

```bash
# 1. استنساخ المستودع
git clone <repository-url>
cd QA-courses

# 2. تثبيت التبعيات
npm install

# 3. إعداد متغيرات البيئة
cp .env.example .env.local
```

### إعداد متغيرات البيئة

افتح ملف `.env.local` وأضف القيم التالية:

```env
# Supabase — مطلوب
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Gemini API — اختياري
GEMINI_API_KEY=your-gemini-api-key

# رابط التطبيق — يُحقن تلقائياً عند النشر
APP_URL=http://localhost:3000
```

### تشغيل المشروع

```bash
# تشغيل في وضع التطوير
npm run dev

# بناء نسخة الإنتاج
npm run build

# تشغيل نسخة الإنتاج
npm start

# فحص الكود بـ ESLint
npm run lint
```

افتح المتصفح على [http://localhost:3000](http://localhost:3000)

---

## 👥 أنواع المستخدمين والصلاحيات

### 🛡️ المسؤول (Admin)
- إنشاء وتعديل وحذف الدورات
- إدارة التسجيلات والطلاب
- عرض التحليلات والإحصائيات التفصيلية
- إرسال الرسائل والإشعارات

### 🎓 الطالب (Student)
- تصفح الدورات المتاحة والتسجيل فيها
- دراسة المحتوى التفاعلي لكل دورة
- أداء الاختبارات والحصول على النتائج فورياً
- متابعة الترتيب على لوحة المتصدرين
- جمع النقاط والمكافآت
- تعديل الملف الشخصي

### 👨‍👩‍👧 ولي الأمر (Parent)
- ربط حسابه بحساب الابن/الابنة
- متابعة تقدم الأبناء في الدورات
- عرض النتائج والإنجازات
- التواصل مع المسؤولين عبر الرسائل

---

## 🎨 نظام التصميم

المنصة تستخدم تصميماً فضائياً (Space Theme) عصرياً مع ألوان نيون وتأثيرات توهج:

| اللون | الكود | الاستخدام |
|-------|-------|-----------|
| `space-bg` | `#0B0E1C` | الخلفية الرئيسية |
| `space-card` | `#141829` | خلفية البطاقات |
| `cosmic-purple` | `#8B5CF6` | اللون الأساسي المميز |
| `electric-blue` | `#3B82F6` | الأزرق الكهربائي |
| `neon-green` | `#10B981` | النجاح والتأكيد |
| `warm-yellow` | `#F59E0B` | التحذيرات والنقاط |
| `rocket-red` | `#EF4444` | الأخطاء والتنبيهات |

### الخطوط المستخدمة
- **Outfit** — الخط الرئيسي للواجهة (Latin)
- **Cairo** — خط اللغة العربية
- **JetBrains Mono** — الخط أحادي المسافة للكود

---

## 🌐 النشر على Vercel

المشروع جاهز للنشر المباشر على Vercel مع دعم:

- **Cron Jobs** — تقارير أسبوعية تلقائية (كل جمعة الساعة 5 مساءً)
- **Edge Middleware** — حماية المسارات وإعادة التوجيه
- **صور خارجية** — Supabase Storage و DiceBear Avatars

```bash
# النشر عبر Vercel CLI
npm i -g vercel
vercel
```

---

## 📊 المسارات (Routes)

| المسار | النوع | الوصف |
|--------|-------|-------|
| `/` | Static | الصفحة الرئيسية |
| `/login` | Static | تسجيل الدخول |
| `/register` | Static | إنشاء حساب |
| `/admin` | Static | لوحة تحكم المسؤول الرئيسية |
| `/admin/analytics` | Static | التحليلات والإحصائيات |
| `/admin/courses` | Static | إدارة الدورات |
| `/admin/courses/new` | Static | إضافة دورة جديدة |
| `/admin/courses/[id]` | Dynamic | تفاصيل/تعديل دورة |
| `/admin/enrollments` | Static | إدارة التسجيلات |
| `/admin/students` | Static | إدارة الطلاب |
| `/student` | Static | لوحة الطالب الرئيسية |
| `/student/courses` | Static | دورات الطالب |
| `/student/courses/[id]` | Dynamic | تفاصيل الدورة |
| `/student/courses/[id]/quiz/[quizId]` | Dynamic | صفحة الاختبار |
| `/student/leaderboard` | Static | لوحة المتصدرين |
| `/student/profile` | Static | الملف الشخصي |
| `/student/rewards` | Static | المكافآت |
| `/parent` | Static | لوحة ولي الأمر |
| `/parent/children/[id]` | Dynamic | متابعة ابن محدد |
| `/parent/link` | Static | ربط حساب بولي أمر |
| `/parent/messages` | Static | رسائل ولي الأمر |
| `/messages` | Static | الرسائل العامة |
| `/notifications` | Static | صفحة الإشعارات |

---

## 📄 الترخيص

هذا المشروع خاص (Private) — جميع الحقوق محفوظة.

---

<div align="center">
صُنع بـ ❤️ بواسطة <qa orders team>
</div>
