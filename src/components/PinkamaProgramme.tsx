import Image from "next/image";
import { ui } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

const questions = [
  ["මෙම තෙසැත්තෑ ඥාන පූජාව යනු කුමක්ද?", "What is the Thesaththa Gnana Puja?",
   "බුදුරජාණන් වහන්සේගේ තෙසැත්තෑ ඥාන සිහි කරමින් පවත්වන ආශිර්වාද පූජාවකි. මෙහිදී ගංවතුරින් හා නායයෑම්වලින් මියගිය අයට පින් අනුමෝදන් කරමු.",
   "This blessing ceremony honours the seventy-three knowledges of the Buddha. Families gather to dedicate merit to those who died in floods and landslides."],
  ["සම්බුදු පියාණන්ගේ තෙසැත්තෑ ඥාන යනු මොනවාද?", "What are the Buddha’s seventy-three knowledges?",
   "තෙසැත්තෑ ඥාන යන්නෙන් අදහස් වන්නේ බුදුරජාණන් වහන්සේගේ ඥාන හැත්තෑ තුනයි. මෙම පූජාවේදී ඒ ඥාන ගුණ සිහි කරමු.",
   "Thesaththa Gnana refers to the seventy-three knowledges of the Buddha. The puja invites participants to reflect on that wisdom."],
  ["මෙම පූජාව සිදු කරනුයේ ඇයි?", "Why hold this puja?",
   "ගංවතුර බැස ගියත් පවුල්වලට යළි ජීවිත ගොඩනගා ගැනීමට කාලය අවශ්‍යයි. දරුවන්ට පාසල් පොත් සහ පවුල්වලට පිරිසිදු ඇඳුම් වැනි දේ තවදුරටත් අවශ්‍ය වේ.",
   "When the water recedes and the cameras leave, families still face the work of rebuilding. A child may need new schoolbooks, and a family may need clean clothes."],
  ["මෙම පිංකමේ තිරසාර දැක්ම කුමක්ද?", "What is the longer-term aim?",
   "හදිසි ආධාරවලින් පසුවත් විපතට පත් පවුල් සමඟ රැඳී සිටීම අපගේ අරමුණයි.",
   "The aim is to stay alongside affected families as their needs change beyond the first days of emergency relief."],
  ["මෙම පිංකමෙන් ඔබට ලැබෙන ප්‍රතිලාභ සහ ප්‍රයෝජන මොනවාද?", "What can participants gain from the pinkama?",
   "මියගිය අය සිහි කර පින් අනුමෝදන් කිරීමටත්, දානය හා කරුණාව ප්‍රගුණ කරමින් විපතට පත් පවුල්වලට පිහිට වීමටත් මෙය අවස්ථාවකි.",
   "Participants can remember those who died, dedicate merit to them and practise generosity by helping families rebuild."],
];
const portraits = [
  ["අඤ්ඤා කොණ්ඩඤ්ඤ", "Aññā Koṇḍañña"],
  ["සාරිපුත්ත", "Sāriputta"],
  ["මහා මොග්ගල්ලාන", "Mahā Moggallāna"],
  ["මහා කාශ්‍යප", "Mahā Kassapa"],
];
const contacts = [
  ["සෝභිත හිමි", "Ven. Sobhitha", "077 770 1035", "94777701035"],
  ["දේවින්ද", "Devinda", "072 269 5786", "94722695786"],
];

export function PinkamaProgramme({ lang }: { lang: Lang }) {
  const si = lang === "si";
  const channel = process.env.NEXT_PUBLIC_PINKAMA_WHATSAPP_CHANNEL;
  const venue = si ? "YMBA ප්‍රධාන ශාලාව, බොරැල්ල" : "YMBA Main Hall, Borella";
  const mapsLabel = si ? "Google Maps තුළ බලන්න" : "Open in Google Maps";
  return <div id="pinkama-programme" className="wrap space-y-12">
    <header className="grid items-center gap-6 lg:grid-cols-2">
      <Image src="/pinkama-2026.webp" width={870} height={331} className="w-full rounded-2xl" alt={si ? "2026 ජනවාරි මහා පූජාවේ ආරාධනා පත්‍රය" : "Original invitation to the January 2026 Maha Puja"} />
      <div>
        <p className="text-sm font-semibold text-muted">{ui.home.quoteLead[lang]}</p>
        <h2 className="title mt-2 text-3xl">{si ? "තෙසැත්තෑ ඥාන ආශිර්වාද මහා පූජාව සහිත පිංකම් මාලාව" : "Thesaththa Gnana Ashirwada Maha Puja series"}</h2>
        <p className="mt-4">{si ? "ගංවතුරින් සහ නායයෑම්වලින් මියගිය සැමට පිං පැමිණවීමටත් අවතැන් වූ අයට සහන සැලසීමටත් කැප වූ පිංකම් මාලාවකි." : "A series of gatherings to dedicate merit to those who died in floods and landslides and to support displaced families."}</p>
        <blockquote className="mt-4 border-l-2 border-lamp pl-4 font-semibold">{ui.home.quote[lang]}</blockquote>
      </div>
    </header>
    <section aria-labelledby="programme-venues">
      <h2 id="programme-venues" className="title mb-5 text-3xl">{si ? "පිංකම් පැවැත්වූ ස්ථාන හා වේලාවන්" : "Programme dates and venues"}</h2>
      <div className="surface grid overflow-hidden rounded-3xl md:grid-cols-2">
        <div className="space-y-6 p-6 sm:p-8">
          <div>
            <time dateTime="2025-12-31T14:00:00+05:30" className="text-sm text-muted">{si ? "2025 දෙසැම්බර් 31 බදාදා · සවස 2.00" : "Wednesday 31 December 2025 · 2 pm"}</time>
            <h3 className="title mt-2 text-xl">{venue}</h3>
            <a className="mt-3 inline-block font-semibold text-gen underline" href="https://www.google.com/maps/search/?api=1&query=YMBA+Main+Hall+Borella">{mapsLabel}</a>
          </div>
          <div className="border-t border-line pt-5">
            <time dateTime="2026-01-31T18:00:00+05:30" className="text-sm text-muted">{si ? "2026 ජනවාරි 31 · සවස 6.00" : "31 January 2026 · 6 pm"}</time>
            <h3 className="title mt-2 text-xl">{si ? "තිලකරත්නාරාම පුරාණ මහා විහාරය, බොරැල්ල" : "Thilakarathnarama Purana Maha Viharaya, Borella"}</h3>
            <a className="mt-3 inline-block font-semibold text-gen underline" href="https://www.google.com/maps/search/?api=1&query=Thilakarathnarama+Purana+Maha+Viharaya+Borella">{mapsLabel}</a>
          </div>
        </div>
        <iframe className="h-64 w-full md:h-full" loading="lazy" title={venue} src="https://maps.google.com/maps?q=YMBA%20Main%20Hall%20Borella&t=m&z=16&output=embed" />
      </div>
    </section>
    <section>
      <h2 className="title mb-6 text-3xl">{si ? "පිංකම පිළිබඳ විමසුම්" : "Understanding the pinkama"}</h2>
      <div className="mb-6 max-w-3xl space-y-3">
        <p>{si ? "ගංවතුර පැවති දින කිහිපයේ මුළු රටම ඒ ගැන කතා කළා. නමුත් අද? අද ජලය බැස ගොස් ඇත. කැමරා සහ මාධ්‍ය කණ්ඩායම් ආපසු ගොස් ඇත. නමුත් විපතට පත් මිනිසා තවමත් සිටින්නේ දණක් උසට මඩ පිරුණු නිවසකය." : "For days the whole country spoke about the floods. Now the water has receded and the camera crews have gone home. A family returning to their house may still be standing knee-deep in mud."}</p>
        <p>{si ? "ඔහුට දැන් අවශ්‍ය බත් පැකට් එකක් නොවේ. ඔහුට අවශ්‍ය නැවත ජීවිතය පණ ගන්වා ගන්නට ශක්තියයි. දරුවාගේ තෙත බරිත වූ පොත් ටික වෙනුවට අලුත් පොත් ටිකයි. මඩ වී ගිය ඇඳුම වෙනුවට පිරිසිදු ඇඳුමයි. මේ මොහොතේ සමාජය නිහඬ වෙද්දී, “කරුණා දහර” හඬ අවදි කරන්නේ, ඒ හුදකලා වූ මිනිසුන්ගේ හෙට දවස වෙනුවෙනි. මේ අරගලය ජලයත් සමඟ නිමා නොවන්නකි." : "A meal answers one immediate need. Starting again takes more: new schoolbooks for a child whose books are soaked, clean clothing to replace garments caked in mud. As public attention fades, Karuna Dahara speaks up for families facing those days alone. Their struggle continues long after the floodwaters have gone."}</p>
      </div>
      {questions.map(([sq, eq, sa, ea]) => <details key={eq} className="border-t border-line py-4">
        <summary className="cursor-pointer py-2 text-lg font-semibold">{si ? sq : eq}</summary>
        <p className="mt-2 max-w-3xl text-muted">{si ? sa : ea}</p>
      </details>)}
    </section>
    <section>
      <h2 className="title mb-6 text-3xl">{si ? "මහා රහතන් වහන්සේලා" : "The great Arahants"}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {portraits.map(([sn, en], i) => <figure key={en} className="overflow-hidden rounded-2xl surface">
          <Image src={`/arahant-${i}.webp`} width={158} height={193} alt="" className="aspect-[4/5] w-full object-cover" />
          <figcaption className="p-4 font-semibold">{si ? sn + " මහ රහතන් වහන්සේ" : "Venerable " + en}</figcaption>
        </figure>)}
      </div>
    </section>
    <section className="rounded-3xl bg-vihara p-7 text-white sm:p-10">
      <h2 className="title text-3xl">{si ? "ඔබත් දායක වන්න" : "Take part in the pinkama"}</h2>
      <p className="mt-4">{si ? "පිංකමට දායක වීමට හෝ සහන අවශ්‍යතා ගැන දැන ගැනීමට අමතන්න." : "Speak with an organiser to take part or ask which relief supplies are needed."}</p>
      <div className="my-6 grid gap-6 sm:grid-cols-2">
        {contacts.map(([sn, en, display, number]) => <div key={number} className="border-t border-white/30 pt-4">
          <h3 className="font-bold">{si ? sn : en}</h3>
          <p>{display}</p>
          <div className="mt-3 flex gap-5 underline"><a href={`tel:+${number}`}>{si ? "අමතන්න" : "Call"}</a><a href={`https://wa.me/${number}`}>WhatsApp</a></div>
        </div>)}
      </div>
      <a className="btn btn-lamp" href={channel || "https://wa.me/94777701035?text=" + encodeURIComponent(si ? "පිංකම් පිළිබඳ WhatsApp නාලිකාවේ සබැඳිය ලබා දෙන්න." : "Please share the WhatsApp channel link for pinkama updates.")}>
        {channel ? (si ? "WhatsApp නාලිකාව අනුගමනය කරන්න" : "Follow the WhatsApp channel") : (si ? "WhatsApp නාලිකාවේ සබැඳිය ඉල්ලන්න" : "Request the WhatsApp channel link")}
      </a>
    </section>
  </div>;
}
