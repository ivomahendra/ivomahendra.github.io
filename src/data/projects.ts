export type Project = {
  slug: string;
  featured: boolean;
  status: "in-progress" | "prototype" | "published";
  category: string;
  stack: string[];
  links: { demo?: string; source?: string };
  title: { id: string; en: string };
  description: { id: string; en: string };
  proof: { id: string; en: string };
  cover: string;
};

// Replace or complete these draft entries only after verifying the project state,
// screenshots, source repository, and public demo.
export const projects: Project[] = [
  {
    slug: "quran-murottal",
    featured: true,
    status: "in-progress",
    category: "Web Application",
    stack: ["HTML", "CSS", "JavaScript", "Audio API"],
    links: {},
    title: { id: "Quran Murottal", en: "Quran Murottal" },
    description: {
      id: "Aplikasi web untuk pemutaran murottal dan kebutuhan tampilan broadcast. Detail implementasi dan sumber audio perlu diverifikasi sebelum publikasi.",
      en: "A web application for Quran recitation playback and broadcast display workflows. Implementation details and audio sources must be verified before publication."
    },
    proof: {
      id: "Studi kasus dalam pengembangan; demo publik belum dikonfirmasi.",
      en: "Case study in development; public demo not yet confirmed."
    },
    cover: "/images/projects/quran-murottal.svg"
  },
  {
    slug: "activity-tracking",
    featured: true,
    status: "prototype",
    category: "Data & PWA",
    stack: ["JavaScript", "PWA", "FIT", "TCX", "CSV"],
    links: {},
    title: { id: "Activity Tracking Platform", en: "Activity Tracking Platform" },
    description: {
      id: "Konsep platform untuk mengolah dan menyajikan data aktivitas olahraga dari berkas FIT, TCX, dan CSV.",
      en: "A platform concept for processing and presenting activity data from FIT, TCX, and CSV files."
    },
    proof: {
      id: "Konsep dan rancangan; status implementasi perlu diperbarui.",
      en: "Concept and design; implementation status needs an update."
    },
    cover: "/images/projects/activity-tracking.svg"
  },
  {
    slug: "local-ai-radio",
    featured: true,
    status: "in-progress",
    category: "Streaming & AI",
    stack: ["Linux", "Icecast", "Liquidsoap", "FFmpeg"],
    links: {},
    title: { id: "Local AI Radio", en: "Local AI Radio" },
    description: {
      id: "Eksperimen sistem radio lokal berbasis streaming dengan Icecast, Liquidsoap, dan pipeline audio.",
      en: "An experiment in local streaming radio using Icecast, Liquidsoap, and an audio processing pipeline."
    },
    proof: {
      id: "Eksperimen aktif; arsitektur dan demo akan ditambahkan setelah stabil.",
      en: "Active experiment; architecture and demo will be added when stable."
    },
    cover: "/images/projects/local-ai-radio.svg"
  }
];
