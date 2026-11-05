import { leaders } from "./content";
import type { L } from "./i18n";

export const memberCategories = {
  advisors: { en: "Project Advisors", si: "ව්‍යාපෘති උපදේශකවරු" },
  priests: { en: "Chief Priests", si: "නායක ස්වාමීන් වහන්සේලා" },
  board: { en: "Board Members", si: "අධ්‍යක්ෂ මණ්ඩලය" },
  mentors: { en: "Mentors", si: "මාර්ගෝපදේශකවරු" },
  ambassadors: { en: "Ambassadors", si: "සන්නාම තානාපතිවරු" },
  coordinators: { en: "Coordinators", si: "සම්බන්ධීකාරකවරු" },
} satisfies Record<string, L>;
export type MemberCategory = keyof typeof memberCategories;
export type Member = { id: string; name: L; role: L; category: MemberCategory | null; image?: string };

// Names and roles transcribed from the supplied legacy-site screenshots.
// Null categories mean that only the legacy All view identified the member.
export const members: Member[] = [
  ...leaders.map((leader) => ({ ...leader, id: leader.image, category: "advisors" as const })),
  { id: "niyangoda", category: "priests", name: { en: "Most Venerable Niyangoda Vijitha Siri Thero", si: "අතිපූජ්‍ය නියංගොඩ විජිතසිරි හිමි" }, role: { en: "Anunayaka", si: "අනුනායක හිමි" } },
  { id: "muruttettuwe", category: "priests", name: { en: "Most Venerable Muruththettuwe Ananda Thero", si: "අතිපූජ්‍ය මුරුත්තෙට්ටුවේ ආනන්ද හිමි" }, role: { en: "President, AIBSB Colombo", si: "සභාපති, AIBSB කොළඹ" } },
  { id: "iduragare", category: "priests", name: { en: "Most Venerable Iduragare Dhammarathana Thero", si: "අතිපූජ්‍ය ඉඳුරාගාරේ ධම්මරතන හිමි" }, role: { en: "Professor", si: "මහාචාර්ය" } },
  { id: "mugunuwela", category: "priests", name: { en: "Most Venerable Mugunuwela Anuruddha Thero", si: "අතිපූජ්‍ය මුගුණුවෙල අනුරුද්ධ හිමි" }, role: { en: "General Secretary", si: "මහ ලේකම්" } },
  { id: "nalaka", category: "board", name: { en: "Mr. Nalaka Siriwardena", si: "නාලක සිරිවර්ධන මහතා" }, role: { en: "Board Member — YMBA", si: "අධ්‍යක්ෂ මණ්ඩල සාමාජික — YMBA" } },
  { id: "sriyani", category: "ambassadors", name: { en: "Mrs. Sriyani Amarasena", si: "ශ්‍රියානි අමරසේන මහත්මිය" }, role: { en: "Veteran Actress", si: "ප්‍රවීණ කලා ශිල්පිනී" } },
  { id: "dilrukshi", category: "ambassadors", name: { en: "Mrs. Dilrukshi Dias", si: "දිල්රුක්ෂි ඩයස් මහත්මිය" }, role: { en: "Former Director General of the Bribery Commission", si: "අල්ලස් කොමිසමේ හිටපු අධ්‍යක්ෂ ජනරාල්" } },
  { id: "gamya", category: "ambassadors", name: { en: "Ms. Gamya Nuwandhina", si: "ගම්‍යා නුවන්ධිනා මහත්මිය" }, role: { en: "Entrepreneur", si: "ව්‍යවසායිකා" } },
  { id: "ramya", category: "ambassadors", name: { en: "Ms. Ramya Gomas", si: "රම්‍යා ගෝමස් මහත්මිය" }, role: { en: "Entrepreneur", si: "ව්‍යවසායිකා" } },
  { id: "nuwanya", category: "ambassadors", name: { en: "Ms. Nuwanya Saheli", si: "නුවන්‍යා සහේලි මහත්මිය" }, role: { en: "Entrepreneur", si: "ව්‍යවසායිකා" } },
  { id: "ananya", category: null, name: { en: "Ananya Pawel", si: "අනන්‍යා පවෙල්" }, role: { en: "Entrepreneur", si: "ව්‍යවසායක" } },
  { id: "carlos", category: null, name: { en: "Carlos Martinez", si: "කාර්ලෝස් මාර්ටිනෙස්" }, role: { en: "Entrepreneur", si: "ව්‍යවසායක" } },
  { id: "jane", category: null, name: { en: "Jane Smith", si: "ජේන් ස්මිත්" }, role: { en: "Entrepreneur", si: "ව්‍යවසායිකා" } },
];

export const memberCopy = {
  title: { en: "FutureGen Members", si: "FutureGen සාමාජිකයින්" },
  intro: { en: "Meet the leaders inspiring societal change through Buddhist education and digital empowerment.", si: "බෞද්ධ අධ්‍යාපනය සහ ඩිජිටල් සවිබලගැන්වීම තුළින් සමාජ වෙනසකට මඟ පෙන්වන නායකයින් හඳුනාගන්න." },
  all: { en: "All members", si: "සියලු සාමාජිකයින්" },
  search: { en: "Search names or roles…", si: "නම හෝ තනතුර සොයන්න…" },
  categories: { en: "Member categories", si: "සාමාජික කාණ්ඩ" },
  none: { en: "No members match your search.", si: "ඔබගේ සෙවුමට ගැළපෙන සාමාජිකයින් නැත." },
  pending: { en: "Member details will be added here soon.", si: "සාමාජික තොරතුරු ළඟදීම මෙහි එක් කෙරේ." },
  clear: { en: "Reset filters", si: "පෙරහන් යළි සකසන්න" },
  count: { en: "members", si: "සාමාජිකයින්" },
};
