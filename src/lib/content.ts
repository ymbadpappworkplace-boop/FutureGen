/**
 * All copy for the website lives here, in Sinhala (si) and English (en).
 * Have a native Sinhala speaker review the wording before launch.
 * Items marked `sample: true` are demo content — replace them with real posts / events.
 */
import type { L, Lang } from "./i18n";

export const ui = {
  site: {
    title: {
      si: "YMBA FutureGen — කොළඹ තරුණ බෞද්ධ සංගමය",
      en: "YMBA FutureGen — Colombo Young Men's Buddhist Association",
    },
    description: {
      si: "පිංකම්, දහම් අධ්‍යාපනය, ප්‍රජාව සහ තාක්ෂණය එක්තැන් කරන කොළඹ තරුණ බෞද්ධ සංගමයේ නව අන්තර්ජාල දැනුම් මධ්‍යස්ථානය.",
      en: "The new online knowledge hub of the Colombo Young Men's Buddhist Association: merit-making events, Dhamma education, community and technology.",
    },
    slogan: {
      si: "සීලය සහ ප්‍රඥාව සාර්ථකත්වයට මඟ පාදයි",
      en: "Morality and wisdom lead to success",
    },
    org: { si: "කොළඹ තරුණ බෞද්ධ සංගමය", en: "Colombo Young Men's Buddhist Association" },
  },
  nav: {
    home: { si: "මුල් පිටුව", en: "Home" },
    events: { si: "පිංකම්", en: "Events" },
    blog: { si: "බ්ලොග්", en: "Blog" },
    academy: { si: "ඇකඩමිය", en: "Academy" },
    software: { si: "මෘදුකාංග", en: "Software" },
    community: { si: "ප්‍රජාව", en: "Community" },
    about: { si: "අප ගැන", en: "About" },
    contact: { si: "සම්බන්ධ වන්න", en: "Contact" },
    donate: { si: "පරිත්‍යාග", en: "Donate" },
    join: { si: "සාමාජික වන්න", en: "Join" },
    menu: { si: "මෙනුව", en: "Menu" },
    close: { si: "වසන්න", en: "Close" },
    search: { si: "සොයන්න", en: "Search" },
    searchPlaceholder: { si: "පිටු, ලිපි, පාඨමාලා සොයන්න…", en: "Search pages, articles, courses…" },
    noResults: { si: "ප්‍රතිඵල නැත", en: "No results" },
    theme: { si: "තේමාව මාරු කරන්න", en: "Toggle theme" },
    language: { si: "Switch to English", en: "සිංහලට මාරු වන්න" },
    langShort: { si: "EN", en: "සිං" },
    skip: { si: "ප්‍රධාන අන්තර්ගතයට පිවිසෙන්න", en: "Skip to content" },
    pages: { si: "පිටු", en: "Pages" },
  },
  common: {
    learnMore: { si: "වැඩි විස්තර", en: "Learn more" },
    read: { si: "කියවන්න", en: "Read" },
    back: { si: "ආපසු", en: "Back" },
    notFoundTitle: { si: "පිටුව හමු නොවීය", en: "Page not found" },
    notFoundText: {
      si: "ඔබ සොයන පිටුව ගෙන ගොස් හෝ ඉවත් කර තිබිය හැක.",
      en: "The page you're looking for has moved or doesn't exist.",
    },
    goHome: { si: "මුල් පිටුවට", en: "Back to home" },
  },
  home: {
    eyebrow: { si: "පංසලෙන් ගමට ගම පංසලට", en: "From the temple to the village, from the village to the temple" },
    line1: { si: "Welcome to Your New", en: "Welcome to Your New" },
    line2: { si: "Online Knowledge Hub", en: "Online Knowledge Hub" },
    sub: {
      si: '"DSMS මෘදුකාංගය හරහා ලාංකීය බෞද්ධ අධ්‍යාපනය ශක්තිමත් කරමින්, පරම්පරා අතර පාලමක් නිර්මාණය කිරීමට සහ අතීත ප්‍රඥාව ඩිජිටල් අනාගතයකට ගෙන එන්නට දරන වෑයමකි."',
      en: '"DSMS මෘදුකාංගය හරහා ලාංකීය බෞද්ධ අධ්‍යාපනය ශක්තිමත් කරමින්, පරම්පරා අතර පාලමක් නිර්මාණය කිරීමට සහ අතීත ප්‍රඥාව ඩිජිටල් අනාගතයකට ගෙන එන්නට දරන වෑයමකි."',
    },
    ctaEvents: { si: "පිංකම් බලන්න", en: "See events" },
    ctaJoin: { si: "සාමාජික වන්න", en: "Become a member" },
    ctaRegisterPinkama: { si: "පිංකමට ලියාපදිංචි වන්න", en: "Register the Pinkama" },
    motto: {
      si: "පංසලෙන් ගමට, ගමෙන් පංසලට",
      en: "From the temple to the village, and from the village to the temple",
    },
    nextEvent: { si: "ඉදිරි පිංකම", en: "Next pinkama" },
    recentEvent: { si: "මෑත පිංකම", en: "Recent pinkama" },
    words: [
      { si: "ධර්මය", en: "Dhamma" },
      { si: "අධ්‍යාපනය", en: "Education" },
      { si: "ප්‍රජාව", en: "Community" },
      { si: "තාක්ෂණය", en: "Technology" },
      { si: "සේවය", en: "Service" },
      { si: "ප්‍රඥාව", en: "Wisdom" },
    ] as L[],
    pillarsTitle: { si: "සියල්ල එකම තැනක", en: "Everything, in one place" },
    pillars: {
      events: {
        title: { si: "පිංකම්", en: "Events & pinkam" },
        text: {
          si: "පිං පැමිණවීමේ පූජා, සහන වැඩසටහන් සහ ප්‍රජා පිංකම් භක්තියෙන් සහ විනිවිදභාවයෙන් සංවිධානය කෙරේ.",
          en: "Merit-making pujas, relief drives and community gatherings, organised with devotion and openness.",
        },
      },
      academy: {
        title: { si: "FutureGen ඇකඩමිය", en: "FutureGen Academy" },
        text: {
          si: "සෑම දහම් පාසල් සිසුවෙකු සඳහාම AI-සහාය ඇති පාඨමාලා සහ විභාග විශ්ලේෂණ.",
          en: "AI-assisted courses and exam analyses for every Dahampasal student.",
        },
      },
      software: {
        title: { si: "DSMS මෘදුකාංගය", en: "DSMS software" },
        text: {
          si: "පැමිණීම, ප්‍රතිඵල සහ දැනුම්දීම් ඔබේ අතේ.",
          en: "Attendance, results and notices, in your pocket.",
        },
      },
      community: {
        title: { si: "ප්‍රජාව සහ බ්ලොග්", en: "Community & blog" },
        text: {
          si: "ශ්‍රී ලංකාව පුරා YMBA පවුලේ කතා, ලිපි සහ අදහස්.",
          en: "Stories, articles and voices from the YMBA family across Sri Lanka.",
        },
      },
    },
    quote: {
      si: "මාධ්‍ය අවධානය ගිලිහෙන මොහොතේ, සැබෑ මනුෂ්‍යත්වය අවදි කරමු.!",
      en: "When media attention fades, let us awaken true humanity!",
    },
    quoteLead: { si: "අපේම මිනිසුන් වෙනුවෙන්...!", en: "For our very own people…!" },
    quoteCta: { si: "පිංකම ගැන කියවන්න", en: "Read the story" },
    academyText: {
      si: "ලාංකීය බෞද්ධ අධ්‍යාපනය ශක්තිමත් කරමින්, පරපුර අතර පාලමක් නිර්මාණය කිරීමට සහ අතීත ප්‍රඥාව ඩිජිටල් අනාගතයකට රැගෙන එන්නට දරන වෑයමකි.",
      en: "An effort to strengthen Sri Lankan Buddhist education, build a bridge between generations, and carry the wisdom of the past into a digital future.",
    },
    academyCta: { si: "සියලු පාඨමාලා", en: "Browse courses" },
    softwareTitle: { si: "දහම් පාසල ඔබේ අතේ", en: "Your Dahampasal, in your pocket" },
    softwareText: {
      si: "දහම් පාසල් කළමනාකරණ පද්ධතිය (DSMS) සමඟ පැමිණීම, ප්‍රතිඵල, දැනුම්දීම් සහ සිසු ගුරු වාර්තා එකම ඇප් එකකින් කළමනාකරණය කරන්න.",
      en: "Run attendance, results, notices and student records from one app with the Dahampasal Management System (DSMS).",
    },
    getApp: { si: "ඇප් එක ලබාගන්න", en: "Get the app" },
    seeFeatures: { si: "විශේෂාංග බලන්න", en: "See features" },
    blogTitle: { si: "නවතම ලිපි", en: "Latest articles" },
    allPosts: { si: "සියලු ලිපි", en: "All articles" },
    leadersTitle: { si: "නායකත්වය", en: "Leadership" },
    leadersText: {
      si: "FutureGen ව්‍යාපෘතිය මෙහෙයවන කණ්ඩායම.",
      en: "The team steering the FutureGen initiative.",
    },
    ctaTitle: { si: "සාමාජිකත්වය ලබාගන්න", en: "Become a member" },
    ctaText: {
      si: "YMBA පවුලට එක්වන්න. විනාඩි දෙකක් පමණයි.",
      en: "Join the YMBA family. It takes two minutes.",
    },
    ctaButton: { si: "ආරම්භ කරමු", en: "Let's go" },
  },
  events: {
    title: { si: "පිංකම්", en: "Events & pinkam" },
    intro: {
      si: "පිං පැමිණවීමේ පූජා, සහන වැඩසටහන් සහ ප්‍රජා කටයුතු එක තැනකින්.",
      en: "Merit-making pujas, relief drives and community gatherings in one place.",
    },
    upcoming: { si: "ඉදිරි පිංකම්", en: "Upcoming" },
    past: { si: "පසුගිය පිංකම්", en: "Past events" },
    empty: {
      si: "දැනට ඉදිරි පිංකම් නැත. නව දැනුම්දීම් සඳහා අපව අනුගමනය කරන්න.",
      en: "No upcoming events right now. Follow us to hear first.",
    },
    venue: { si: "ස්ථානය", en: "Venue" },
    when: { si: "දිනය සහ වේලාව", en: "Date and time" },
    badgeUpcoming: { si: "ඉදිරියට", en: "Upcoming" },
    badgePast: { si: "අවසන්", en: "Completed" },
    done: { si: "මෙම පිංකම දැනටමත් පැවැත්විණි.", en: "This pinkama has already taken place." },
    donateCta: { si: "සහන සඳහා පරිත්‍යාග කරන්න", en: "Donate to relief" },
    all: { si: "සියලු පිංකම්", en: "All events" },
    cd: {
      d: { si: "දින", en: "Days" },
      h: { si: "පැය", en: "Hours" },
      m: { si: "මිනිත්තු", en: "Min" },
      s: { si: "තත්පර", en: "Sec" },
    },
  },
  blog: {
    title: { si: "බ්ලොග්", en: "Blog" },
    intro: {
      si: "ප්‍රජාවෙන්, ගුරුවරුන්ගෙන් සහ ස්වේච්ඡා සේවකයන්ගෙන් ලිපි සහ සටහන්.",
      en: "Articles and notes from our community, teachers and volunteers.",
    },
    all: { si: "සියල්ල", en: "All" },
    cat: {
      dhamma: { si: "ධර්මය", en: "Dhamma" },
      education: { si: "අධ්‍යාපනය", en: "Education" },
      community: { si: "ප්‍රජාව", en: "Community" },
      technology: { si: "තාක්ෂණය", en: "Technology" },
    },
    search: { si: "ලිපි සොයන්න", en: "Search articles" },
    minRead: { si: "මිනිත්තු {n}ක කියවීම", en: "{n} min read" },
    none: { si: "ගැළපෙන ලිපි නැත.", en: "No matching articles." },
    more: { si: "තවත් ලිපි", en: "More articles" },
    back: { si: "සියලු ලිපි", en: "All articles" },
    by: { si: "ලේඛක", en: "By" },
  },
  academy: {
    title: { si: "FutureGen ඇකඩමිය", en: "FutureGen Academy" },
    quote: {
      si: "ලාංකීය බෞද්ධ අධ්‍යාපනය ශක්තිමත් කරමින්, පරපුර අතර පාලමක් නිර්මාණය කිරීමට සහ අතීත ප්‍රඥාව ඩිජිටල් අනාගතයකට රැගෙන එන්නට දරන වෑයමකි.",
      en: "Strengthening Sri Lankan Buddhist education, bridging generations and carrying the wisdom of the past into a digital future.",
    },
    intro: {
      si: "YMBA FutureGen Academy යනු කොළඹ තරුණ බෞද්ධ සංගමය (YMBA) විසින් දියත් කරන ලද අධ්‍යාපනික වැඩසටහනකි. අපගේ දහම් පාසල් කළමනාකරණ පද්ධතිය (DSMS) භාවිතා කරන්නන් සඳහා NotebookLM AI තාක්ෂණය යොදා ගනිමින් පුළුල් අධ්‍යාපනික පාඨමාලා පිරිනමනු ලැබේ.",
      en: "YMBA FutureGen Academy is an educational programme launched by the Colombo Young Men's Buddhist Association (YMBA). Users of our Dahampasal Management System (DSMS) get comprehensive courses built with NotebookLM AI technology.",
    },
    level: {
      all: { si: "සියල්ල", en: "All levels" },
      beginner: { si: "ආරම්භක", en: "Beginner" },
      intermediate: { si: "මධ්‍යම", en: "Intermediate" },
      advanced: { si: "උසස්", en: "Advanced" },
    },
    kind: {
      pdf: { si: "PDF", en: "PDF" },
      course: { si: "පාඨමාලාව", en: "Course" },
    },
    search: { si: "පාඨමාලා සොයන්න", en: "Search courses" },
    none: { si: "ගැළපෙන පාඨමාලා නැත.", en: "No matching courses." },
    howTitle: { si: "ඉගෙනීම ක්‍රියා කරන ආකාරය", en: "How learning works" },
    steps: [
      {
        icon: "cap",
        title: { si: "පාඨමාලාව තෝරන්න", en: "Choose a course" },
        text: {
          si: "ඔබේ ශ්‍රේණියට හෝ විභාගයට ගැළපෙන පාඨමාලාව තෝරන්න.",
          en: "Pick the course that matches your grade or exam.",
        },
      },
      {
        icon: "sparkles",
        title: { si: "AI සමඟ ඉගෙනගන්න", en: "Study with AI" },
        text: {
          si: "NotebookLM මගින් සාරාංශ, පුහුණු ප්‍රශ්න සහ ශ්‍රව්‍ය විග්‍රහ ලබාගන්න.",
          en: "Get summaries, practice questions and audio overviews generated with NotebookLM.",
        },
      },
      {
        icon: "users",
        title: { si: "ගුරුවරයා සමඟ සමාලෝචනය", en: "Review with your teacher" },
        text: {
          si: "ඉගෙනගත් දේ ඔබේ ගුරුවරයා සමඟ සාකච්ඡා කර තහවුරු කරගන්න.",
          en: "Talk through what you learned with your teacher to make it stick.",
        },
      },
    ] as { icon: "cap" | "sparkles" | "users"; title: L; text: L }[],
    openDsms: { si: "DSMS හරහා පිවිසෙන්න", en: "Open in DSMS" },
  },
  software: {
    title: { si: "DSMS", en: "DSMS" },
    subtitle: { si: "දහම් පාසල් කළමනාකරණ පද්ධතිය", en: "Dahampasal Management System" },
    intro: {
      si: "දහම් පාසලක දෛනික කටයුතු සරල කරන, ගුරුවරුන් සහ දෙමාපියන් සම්බන්ධ කරන ඇප් එකක්.",
      en: "An app that simplifies the daily work of a Dahampasal and keeps teachers and parents connected.",
    },
    featuresTitle: { si: "ඇතුළත ඇත්තේ මොනවාද", en: "What's inside" },
    features: [
      {
        icon: "check",
        title: { si: "පැමිණීම", en: "Attendance" },
        text: {
          si: "ඉක්මනින් පැමිණීම සටහන් කර වාර්තා එක බැල්මකින් බලන්න.",
          en: "Mark attendance quickly and see reports at a glance.",
        },
      },
      {
        icon: "chart",
        title: { si: "ප්‍රතිඵල සහ වාර්තා", en: "Results & reports" },
        text: {
          si: "විභාග ප්‍රතිඵල ඇතුළත් කර සිසු ප්‍රගති වාර්තා සකසන්න.",
          en: "Enter exam marks and produce student progress reports.",
        },
      },
      {
        icon: "bell",
        title: { si: "දැනුම්දීම්", en: "Notices" },
        text: {
          si: "දෙමාපියන්ට සහ සිසුන්ට දැනුම්දීම් සහ පිංකම් ආරාධනා යවන්න.",
          en: "Send notices and event invitations to parents and students.",
        },
      },
      {
        icon: "users",
        title: { si: "සිසු සහ ගුරු වාර්තා", en: "People records" },
        text: {
          si: "සිසුන්, ගුරුවරුන් සහ ශ්‍රේණි එක් තැනක කළමනාකරණය කරන්න.",
          en: "Manage students, teachers and grades in one place.",
        },
      },
      {
        icon: "cap",
        title: { si: "ඇකඩමි පාඨමාලා", en: "Academy courses" },
        text: {
          si: "FutureGen ඇකඩමි පාඨමාලා වෙත ඇප් එකෙන්ම පිවිසෙන්න.",
          en: "Open FutureGen Academy courses straight from the app.",
        },
      },
      {
        icon: "smartphone",
        title: { si: "ජංගම දුරකථනයට ගැළපේ", en: "Made for mobile" },
        text: {
          si: "ඕනෑම තැනක සිට දුරකථනයෙන් භාවිතා කරන්න.",
          en: "Use it from your phone, wherever you are.",
        },
      },
    ] as { icon: "check" | "chart" | "bell" | "users" | "cap" | "smartphone"; title: L; text: L }[],
    mock: {
      attendance: { si: "අද පැමිණීම", en: "Today's attendance" },
      results: { si: "ප්‍රතිඵල", en: "Results" },
      notice: { si: "නව දැනුම්දීමක්", en: "New notice" },
      grades: { si: "ශ්‍රේණි", en: "Grades" },
    },
  },
  community: {
    title: { si: "ප්‍රජාව", en: "Community" },
    intro: {
      si: "YMBA පවුලට එක්වී ශ්‍රී ලංකාව පුරා දහම් සේවයේ නියැලෙන්න.",
      en: "Join the YMBA family and serve the Dhamma across Sri Lanka.",
    },
    ways: [
      {
        icon: "heart",
        title: { si: "සාමාජිකයෙකු වන්න", en: "Become a member" },
        text: {
          si: "පිංකම්, වැඩසටහන් සහ ඇකඩමිය සඳහා පූර්ණ ප්‍රවේශය ලබාගන්න.",
          en: "Get full access to events, programmes and the Academy.",
        },
        path: "/join",
        cta: { si: "සාමාජික වන්න", en: "Apply to join" },
      },
      {
        icon: "users",
        title: { si: "ස්වේච්ඡා සේවකයෙකු වන්න", en: "Volunteer" },
        text: {
          si: "ඔබේ කාලය සහ කුසලතා පිංකම් සහ සහන වැඩසටහන් සඳහා දායක කරන්න.",
          en: "Offer your time and skills to our pujas and relief drives.",
        },
        path: "/contact",
        cta: { si: "අප හා සම්බන්ධ වන්න", en: "Get in touch" },
      },
      {
        icon: "book",
        title: { si: "ලිපියක් ලියන්න", en: "Write for us" },
        text: {
          si: "ධර්මය, අධ්‍යාපනය හෝ තාක්ෂණය ගැන ඔබේ අදහස් බෙදාගන්න.",
          en: "Share your thoughts on Dhamma, education or technology.",
        },
        path: "/contact",
        cta: { si: "ලිපියක් යවන්න", en: "Pitch an article" },
      },
    ] as { icon: "heart" | "users" | "book"; title: L; text: L; path: string; cta: L }[],
    follow: { si: "අප සමඟ රැඳී සිටින්න", en: "Follow along" },
  },
  about: {
    title: { si: "FutureGen ගැන", en: "About FutureGen" },
    intro: {
      si: "FutureGen යනු කොළඹ තරුණ බෞද්ධ සංගමයේ තාක්ෂණය සහ අධ්‍යාපනය මුල් කරගත් ව්‍යාපෘතියයි.",
      en: "FutureGen is the technology and education initiative of the Colombo Young Men's Buddhist Association.",
    },
    mission: { si: "අපගේ මෙහෙවර", en: "Our mission" },
    missionText: {
      si: "ලාංකීය බෞද්ධ අධ්‍යාපනය ශක්තිමත් කරමින්, පරපුර අතර පාලමක් නිර්මාණය කිරීම.",
      en: "To strengthen Sri Lankan Buddhist education and build a bridge between generations.",
    },
    vision: { si: "අපගේ දැක්ම", en: "Our vision" },
    visionText: {
      si: "අතීත ප්‍රඥාව ඩිජිටල් අනාගතයකට රැගෙන යාම.",
      en: "To carry the wisdom of the past into a digital future.",
    },
    valuesTitle: { si: "අපගේ අගයන්", en: "What we stand for" },
    values: [
      {
        title: { si: "ශීලය", en: "Morality" },
        text: {
          si: "අප කරන සෑම දෙයක්ම සදාචාරයෙන් සහ විනිවිදභාවයෙන් සිදු කරමු.",
          en: "We act with integrity and openness in everything we do.",
        },
      },
      {
        title: { si: "ප්‍රඥාව", en: "Wisdom" },
        text: {
          si: "දැනුම බෙදාගනිමින් අඛණ්ඩව ඉගෙනීමට දිරිමත් කරමු.",
          en: "We share knowledge and keep learning.",
        },
      },
      {
        title: { si: "මෛත්‍රිය", en: "Compassion" },
        text: {
          si: "අපේම මිනිසුන්ට ඔවුන්ට අවශ්‍ය මොහොතේ පිහිට වෙමු.",
          en: "We stand by our own people when they need us most.",
        },
      },
    ],
  },
  donate: {
    title: { si: "පරිත්‍යාග", en: "Donate" },
    intro: {
      si: "ඔබේ දායකත්වය පිංකම්, සහන වැඩසටහන් සහ දහම් අධ්‍යාපනය ශක්තිමත් කරයි.",
      en: "Your gift powers merit-making events, relief work and Dhamma education.",
    },
    once: { si: "එක් වරක්", en: "One time" },
    monthly: { si: "මාසිකව", en: "Monthly" },
    other: { si: "වෙනත් මුදලක්", en: "Other amount" },
    amountLabel: { si: "මුදල (රු.)", en: "Amount (LKR)" },
    give: { si: "{amt} පරිත්‍යාග කරන්න", en: "Donate {amt}" },
    showBank: { si: "බැංකු විස්තර බලන්න", en: "Show bank details" },
    bankTitle: { si: "බැංකු තැන්පතුව", en: "Bank transfer" },
    bankNote: {
      si: "තැන්පත් කිරීමෙන් පසු රිසිට්පත අපට එවන්න.",
      en: "After transferring, send us the receipt so we can acknowledge your gift.",
    },
    labels: {
      accountName: { si: "ගිණුම් නම", en: "Account name" },
      bank: { si: "බැංකුව", en: "Bank" },
      branch: { si: "ශාඛාව", en: "Branch" },
      accountNo: { si: "ගිණුම් අංකය", en: "Account number" },
    },
    usesTitle: { si: "ඔබේ දායකත්වය යොදවන්නේ", en: "Where your gift goes" },
    uses: [
      {
        title: { si: "සහන වැඩසටහන්", en: "Relief drives" },
        text: {
          si: "ගංවතුර සහ නායයෑම් වැනි ව්‍යසනවලින් පීඩාවට පත් පවුල්වලට සහාය.",
          en: "Support for families hit by floods, landslides and other disasters.",
        },
      },
      {
        title: { si: "දහම් අධ්‍යාපනය", en: "Dhamma education" },
        text: {
          si: "ඇකඩමි පාඨමාලා සහ දහම් පාසල් සඳහා ද්‍රව්‍ය.",
          en: "Academy courses and learning material for Dahampasals.",
        },
      },
      {
        title: { si: "තාක්ෂණය", en: "Technology" },
        text: {
          si: "DSMS සහ අනෙකුත් මෙවලම් සැමට ලබාගත හැකි ලෙස පවත්වාගෙන යාම.",
          en: "Keeping DSMS and our other tools within everyone's reach.",
        },
      },
    ],
  },
  contact: {
    title: { si: "සම්බන්ධ වන්න", en: "Contact us" },
    intro: {
      si: "ප්‍රශ්න, යෝජනා හෝ සහභාගීත්වය සඳහා අප වෙත ලියන්න.",
      en: "Questions, ideas or want to take part? Write to us.",
    },
    name: { si: "නම", en: "Name" },
    email: { si: "විද්‍යුත් තැපෑල", en: "Email" },
    phone: { si: "දුරකථන (විකල්ප)", en: "Phone (optional)" },
    message: { si: "පණිවිඩය", en: "Message" },
    interest: { si: "ඔබේ උනන්දුව", en: "I'm interested in" },
    interests: [
      { value: "general", label: { si: "සාමාන්‍ය විමසුමක්", en: "A general question" } },
      { value: "volunteer", label: { si: "ස්වේච්ඡා සේවය", en: "Volunteering" } },
      { value: "software", label: { si: "DSMS මෘදුකාංගය", en: "DSMS software" } },
      { value: "donation", label: { si: "පරිත්‍යාග", en: "Donations" } },
    ] as { value: string; label: L }[],
    send: { si: "පණිවිඩය යවන්න", en: "Send message" },
    sending: { si: "යවමින්…", en: "Sending…" },
    success: {
      si: "ස්තූතියි! ඔබේ පණිවිඩය ලැබුණි. ඉක්මනින් ඔබ හා සම්බන්ධ වෙමු.",
      en: "Thank you. Your message is in and we'll reply soon.",
    },
    error: {
      si: "යැවීමට නොහැකි විය. විස්තර පරීක්ෂා කර නැවත උත්සාහ කරන්න.",
      en: "Couldn't send your message. Check the fields and try again.",
    },
    reach: { si: "අප හමුවන්න", en: "Reach us" },
    joinTitle: { si: "සාමාජික වන්න", en: "Become a member" },
    joinIntro: {
      si: "විස්තර කිහිපයක් දෙන්න. අපි ඔබ හා සම්බන්ධ වෙමු.",
      en: "Share a few details and we'll be in touch.",
    },
    joinSend: { si: "සාමාජිකත්වය සඳහා අයදුම් කරන්න", en: "Apply for membership" },
    joinPerks: [
      { si: "පිංකම් සහ වැඩසටහන් සඳහා කලින් දැනුම්දීම්", en: "Early notice of events and programmes" },
      { si: "FutureGen ඇකඩමි පාඨමාලා වෙත ප්‍රවේශය", en: "Access to FutureGen Academy courses" },
      { si: "ප්‍රජා කණ්ඩායම් සහ ස්වේච්ඡා අවස්ථා", en: "Community groups and volunteering opportunities" },
    ] as L[],
  },
  footer: {
    explore: { si: "ගවේෂණය", en: "Explore" },
    connect: { si: "සම්බන්ධ වන්න", en: "Connect" },
    rights: { si: "සියලු හිමිකම් ඇවිරිණි.", en: "All rights reserved." },
  },
};

/* ------------------------------------------------------------------ */
/* Events                                                              */
/* ------------------------------------------------------------------ */

export type EventItem = {
  slug: string;
  date: string; // ISO with Sri Lanka offset
  title: L;
  venue: L;
  summary: L;
  story: Record<Lang, string[]>;
  quote?: L;
  seed: number;
  sample?: boolean;
};

export const events: EventItem[] = [
  {
    slug: "thesaththa-gnana-ashirwada-maha-pujawa",
    date: "2026-01-31T18:00:00+05:30",
    seed: 0,
    title: {
      si: "තෙසැත්තෑ ඥාන ආශිර්වාද මහා පූජාව",
      en: "Thesaththa Gnana Ashirwada Maha Puja",
    },
    venue: {
      si: "තිලකරත්නාරාම පුරාණ මහා විහාරය, බොරැල්ල",
      en: "Thilakarathnarama Purana Maha Viharaya, Borella",
    },
    summary: {
      si: "ගංවතුරින් සහ නායයෑම් වලින් මියගිය සැමට පිං පැමිණවීමේ සහ අවතැන් වූ අය වෙනුවෙන් සහන සැලසීමේ මහානුභාව සම්පන්න පිංකම් මාලාව.",
      en: "A great merit-transference offering for all who perished in floods and landslides, together with relief for those who were displaced.",
    },
    quote: {
      si: "මාධ්‍ය අවධානය ගිලිහෙන මොහොතේ, සැබෑ මනුෂ්‍යත්වය අවදි කරමු.!",
      en: "When media attention fades, let us awaken true humanity!",
    },
    story: {
      si: [
        "අපේම මිනිසුන් වෙනුවෙන්...! ගංවතුරින් සහ නායයෑම් වලින් මියගිය සැමට පිං පැමිණවීමටත්, අවතැන් වූ අය වෙනුවෙන් සහන සැලසීමටත් YMBA FutureGen විසින් තෙසැත්තෑ ඥාන ආශිර්වාද මහා පූජාව සහිත පිංකම් මාලාවක් සංවිධානය කරයි.",
        "පූජාව බොරැල්ල තිලකරත්නාරාම පුරාණ මහා විහාරයේදී 2026 ජනවාරි 31 වන දින සවස 6.00 ට පැවැත්වේ.",
        "ව්‍යසනය ඉක්මනින් අමතක වෙයි; එහෙත් එයින් පීඩාවට පත් පවුල්වල දුක අමතක නොවේ. මේ මොහොතේ ඔවුන් සමඟ සිටිමු.",
      ],
      en: [
        "For our very own people…! In memory of everyone lost to floods and landslides, and in support of those who were displaced, YMBA FutureGen presents the Thesaththa Gnana Ashirwada Maha Puja and a series of merit-making programmes.",
        "The puja takes place at Thilakarathnarama Purana Maha Viharaya, Borella, on 31 January 2026 at 6.00 pm.",
        "Headlines move on quickly, but the grief of affected families does not. Let us stand with them.",
      ],
    },
  },
  {
    slug: "community-dhamma-evening",
    date: "2026-12-12T17:00:00+05:30",
    seed: 2,
    sample: true,
    title: { si: "ප්‍රජා දහම් සවස", en: "Community Dhamma Evening" },
    venue: { si: "ස්ථානය පසුව දැනුම් දෙනු ලැබේ", en: "Venue to be announced" },
    summary: {
      si: "දහම් සාකච්ඡාව, භාවනාව සහ තේ සංග්‍රහයක් සමඟ ප්‍රජාව එක්රැස් වන සවසක්.",
      en: "An evening of Dhamma discussion, meditation and tea as the community comes together.",
    },
    story: {
      si: ["මෙය නියැදි අන්තර්ගතයකි. සැබෑ පිංකමක විස්තර මෙහි ඇතුළත් කරන්න."],
      en: ["This is sample content. Replace it with the details of a real event."],
    },
  },
  {
    slug: "dahampasal-teachers-workshop",
    date: "2027-02-20T09:00:00+05:30",
    seed: 3,
    sample: true,
    title: { si: "දහම් පාසල් ගුරු වැඩමුළුව", en: "Dahampasal Teachers' Workshop" },
    venue: { si: "ස්ථානය පසුව දැනුම් දෙනු ලැබේ", en: "Venue to be announced" },
    summary: {
      si: "DSMS සහ FutureGen ඇකඩමිය ගුරුවරුන්ට හඳුන්වා දෙන ප්‍රායෝගික වැඩමුළුවක්.",
      en: "A hands-on workshop introducing DSMS and FutureGen Academy to teachers.",
    },
    story: {
      si: ["මෙය නියැදි අන්තර්ගතයකි. සැබෑ පිංකමක විස්තර මෙහි ඇතුළත් කරන්න."],
      en: ["This is sample content. Replace it with the details of a real event."],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export type PostCategory = "dhamma" | "education" | "community" | "technology";

export type Post = {
  slug: string;
  category: PostCategory;
  date: string;
  read: number;
  seed: number;
  title: L;
  excerpt: L;
  author: L;
  body: Record<Lang, string[]>;
};

const team: L = { si: "FutureGen කණ්ඩායම", en: "The FutureGen team" };

export const posts: Post[] = [
  {
    slug: "why-dhamma-education-needs-a-digital-home",
    category: "technology",
    date: "2026-10-12",
    read: 3,
    seed: 0,
    author: team,
    title: {
      si: "දහම් අධ්‍යාපනයට ඩිජිටල් නිවහනක් අවශ්‍ය ඇයි?",
      en: "Why Dhamma education needs a digital home",
    },
    excerpt: {
      si: "දහම් පාසල අපේ සංස්කෘතියේ මුල්ය. තාක්ෂණයට එය ආරක්ෂා කර ශක්තිමත් කළ හැකි ආකාරය.",
      en: "The Dahampasal is the root of our culture. Here is how technology can protect and strengthen it.",
    },
    body: {
      si: [
        "පරම්පරා ගණනාවක් තිස්සේ ශ්‍රී ලාංකික දරුවන් ධර්මය හඳුනාගන්නේ දහම් පාසලෙනි. පන්ති කාමරය බොහෝ වෙනස් නොවුවද, එය වටා ඇති ලෝකය වෙනස් වී ඇත.",
        "FutureGen පවතින්නේ එම පරතරය පිරවීමටය: පහසුවෙන් සොයාගත හැකි පාඩම් ද්‍රව්‍ය, ගුරුවරුන්ගේ පරිපාලන කටයුතු සැහැල්ලු කරන මෙවලම්, සහ ඉරිදා පන්තියෙන් ඔබ්බටත් සම්බන්ධව සිටින ප්‍රජාවක්.",
      ],
      en: [
        "For generations, the Dahampasal has been where Sri Lankan children first meet the Dhamma. The classroom has not changed much, but the world around it has.",
        "FutureGen exists to close that gap: lesson material that is easy to find, tools that lighten teachers' administrative work, and a community that stays connected beyond Sunday morning.",
      ],
    },
  },
  {
    slug: "learning-smarter-with-ai-study-guides",
    category: "education",
    date: "2026-09-28",
    read: 4,
    seed: 1,
    author: team,
    title: {
      si: "AI අධ්‍යයන මාර්ගෝපදේශ සමඟ දක්ෂව ඉගෙනීම",
      en: "Learning smarter with AI study guides",
    },
    excerpt: {
      si: "අපගේ ඇකඩමිය පසුගිය ප්‍රශ්න පත්‍ර සහ පෙළපොත් කුඩා කොටස් වශයෙන් අධ්‍යයන ද්‍රව්‍ය බවට පත් කරන ආකාරය.",
      en: "How the Academy turns past papers and textbooks into guided, bite-sized study material.",
    },
    body: {
      si: [
        "Google හි NotebookLM භාවිතා කරමින් ඇකඩමි කණ්ඩායම විෂය නිර්දේශ ද්‍රව්‍ය සහ පසුගිය ප්‍රශ්න පත්‍ර සාරාංශ, ප්‍රශ්න බැංකු සහ ශ්‍රව්‍ය විග්‍රහ බවට පත් කරයි.",
        "සිසුන් අතට පත්වීමට පෙර සෑම ප්‍රතිදානයක්ම සුදුසුකම්ලත් ගුරුවරුන් විසින් පරීක්ෂා කළ යුතු යැයි අපගේ අරමුණයි; වේගය නිවැරදිභාවයට හානි නොවිය යුතුය.",
      ],
      en: [
        "Using Google's NotebookLM, the Academy team turns syllabus material and past papers into summaries, question banks and audio overviews.",
        "Our aim is for every output to be checked by a qualified teacher before it reaches students, because speed should never cost accuracy.",
      ],
    },
  },
  {
    slug: "when-the-cameras-leave",
    category: "community",
    date: "2026-01-20",
    read: 3,
    seed: 2,
    author: team,
    title: {
      si: "කැමරා ඉවත් වූ පසු: ක්‍රියාත්මක වන කරුණාව",
      en: "When the cameras leave: compassion in action",
    },
    excerpt: {
      si: "සහන වැඩ අවසන් වන්නේ ප්‍රවෘත්ති නිමා වූ විට නොවේ. ගංවතුර සහ නායයෑම් වලින් පීඩාවට පත් පවුල් වෙනුවෙන් අප පෙනී සිටින්නේ ඇයි.",
      en: "Relief doesn't end when the headlines do. Why we stand with families hit by floods and landslides.",
    },
    body: {
      si: [
        "ගංවතුර සහ නායයෑම් මිනිත්තු කිහිපයකින් ජීවිත උදුරා ගනී; නමුත් යළි ගොඩනැගීමට මාස ගණනක් ගත වේ. තෙසැත්තෑ ඥාන ආශිර්වාද මහා පූජාව සහිත පිංකම් මාලාව සංවිධානය කළේ මිය ගිය අයට පින් පැමිණවීමටත්, නිවාස අහිමි වූ අයට සහන සැලසීමටත්ය.",
        "අපගේ විශ්වාසය සරලය: මාධ්‍ය අවධානය ගිලිහෙන මොහොතේ, සැබෑ මනුෂ්‍යත්වය අවදි විය යුතුය.",
      ],
      en: [
        "Floods and landslides take lives in minutes, but recovery takes months. The Thesaththa Gnana Ashirwada Maha Puja series was organised to transfer merit to those who lost their lives and to support those who lost their homes.",
        "Our belief is simple: when media attention fades, true humanity must awaken.",
      ],
    },
  },
  {
    slug: "five-minutes-of-dhamma-a-day",
    category: "dhamma",
    date: "2026-08-15",
    read: 2,
    seed: 3,
    author: team,
    title: { si: "දිනකට විනාඩි පහක දහමක්", en: "Five minutes of Dhamma a day" },
    excerpt: {
      si: "කාර්යබහුල නූතන ජීවිතයට ගැලපෙන, නොකඩවා කරගෙන යා හැකි කුඩා පුරුදු.",
      en: "Small, steady practices that fit into a busy modern life.",
    },
    body: {
      si: [
        "පුහුණුවට නිදහස් දහවලක් අවශ්‍ය නැත. වැඩට පෙර සිහියෙන් ආශ්වාස කිහිපයක්, එක් දානමය ක්‍රියාවක්, බසයේදී සජ්ඣායනා කරන ගාථාවක් — මේවා ගොඩනැගිලි කොටස්ය.",
        "මෙම ලිපි මාලාවෙන් අපගේ ප්‍රජාවේ ගුරුවරුන්ගෙන් සහ ස්වේච්ඡා සේවකයන්ගෙන් ලැබෙන සරල, ප්‍රායෝගික සිතුවිලි බෙදාගනු ලැබේ.",
      ],
      en: [
        "You don't need a free afternoon to practise. A few mindful breaths before work, one act of generosity, a verse recited on the bus: these are the building blocks.",
        "This series shares simple, practical reflections from our community's teachers and volunteers.",
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Academy courses                                                     */
/* ------------------------------------------------------------------ */

export type Course = {
  id: string;
  title: L;
  subtitle: L;
  level: "beginner" | "intermediate" | "advanced";
  kind: "pdf" | "course";
  seed: number;
};

export const courses: Course[] = [
  {
    id: "dhammacharya",
    title: { si: "බෞද්ධ ධර්මාචාර්ය විභාගය", en: "Buddhist Dhammacharya Examination" },
    subtitle: { si: "විභාග විශ්ලේෂණ සහ අධ්‍යයන මාර්ගෝපදේශ", en: "Exam analysis and study guides" },
    level: "advanced",
    kind: "course",
    seed: 0,
  },
  {
    id: "abhidhamma",
    title: { si: "අභිධර්මය", en: "Abhidhamma" },
    subtitle: { si: "ධර්මාචාර්ය ශ්‍රේණිය", en: "Dhammacharya grade" },
    level: "advanced",
    kind: "course",
    seed: 1,
  },
  {
    id: "buddha-charitaya",
    title: { si: "බුද්ධ චරිතය", en: "Life of the Buddha" },
    subtitle: { si: "පියවරෙන් පියවර අධ්‍යයනය", en: "A step-by-step study" },
    level: "beginner",
    kind: "course",
    seed: 2,
  },
  {
    id: "dahampasal-final",
    title: { si: "දහම් පාසල් අවසාන සහතික පත්‍ර විභාගය", en: "Dahampasal Final Certificate Exam" },
    subtitle: { si: "ප්‍රශ්න පත්‍ර විශ්ලේෂණය", en: "Past paper analysis" },
    level: "intermediate",
    kind: "pdf",
    seed: 3,
  },
  {
    id: "pali-language",
    title: { si: "බුද්ධ ධර්මය හා පාලි භාෂාව", en: "Buddhist teachings and Pali" },
    subtitle: { si: "මූලික සිට උසස් දක්වා", en: "From basics to fluency" },
    level: "beginner",
    kind: "pdf",
    seed: 4,
  },
];

/* ------------------------------------------------------------------ */
/* Leadership (placeholders: replace names and add photos in /public)  */
/* ------------------------------------------------------------------ */

export const leaders: { name: L; role: L }[] = [
  { name: { si: "නම මෙහි", en: "Full name" }, role: { si: "සභාපති", en: "President" } },
  { name: { si: "නම මෙහි", en: "Full name" }, role: { si: "ලේකම්", en: "Secretary" } },
  { name: { si: "නම මෙහි", en: "Full name" }, role: { si: "භාණ්ඩාගාරික", en: "Treasurer" } },
  { name: { si: "නම මෙහි", en: "Full name" }, role: { si: "තාක්ෂණ ප්‍රධානී", en: "Technology lead" } },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
