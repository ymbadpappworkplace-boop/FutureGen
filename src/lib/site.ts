import type { L } from "./i18n";
import type { IconName } from "@/components/Icon";

/**
 * Central site settings. Replace the placeholder values (marked TODO) before going live.
 */
export const siteConfig = {
  name: "YMBA FutureGen",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "info@example.com", // TODO
  phone: "+94 11 000 0000", // TODO
  address: { si: "කොළඹ, ශ්‍රී ලංකාව", en: "Colombo, Sri Lanka" } as L, // TODO
  social: {
    facebook: "https://www.facebook.com/", // TODO
    youtube: "https://www.youtube.com/", // TODO
  },
  appUrl: "https://example.com/dsms", // TODO: link to the DSMS app / sign-in
  donateUrl: process.env.NEXT_PUBLIC_DONATE_URL ?? "",
  bank: {
    accountName: "Colombo Young Men's Buddhist Association", // TODO
    bank: "Your Bank", // TODO
    branch: "Your Branch", // TODO
    accountNo: "0000 0000 0000", // TODO
  },
};

export type NavKey = "events" | "blog" | "academy" | "software" | "community" | "about";

export const navItems: { key: NavKey; path: string; icon: IconName }[] = [
  { key: "events", path: "/events", icon: "calendar" },
  { key: "blog", path: "/blog", icon: "book" },
  { key: "academy", path: "/academy", icon: "cap" },
  { key: "software", path: "/software", icon: "smartphone" },
  { key: "community", path: "/community", icon: "users" },
  { key: "about", path: "/about", icon: "sparkles" },
];
