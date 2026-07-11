export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "QuickCart",
    contibutionDescription:
      `QuickCart is an open-source Next.js eCommerce frontend project.
       It provides a modern, fast and customizable shopping UI.
       This repo is frontend only contributors can improve the design, add new pages, animations and more.`,
    repoOwner: "Sakthivel2026",
    link: "https://github.com/Sakthivel2026/QuickCart",
  },
  {
    repo: "terminal-chat",
    contibutionDescription:
      `Terminal Chat - A pure terminal-based multi-user chat application built using Node.js TCP sockets. No browser, no Express, no Socket.IO — fully CLI-driven`,
    repoOwner: "Sakthivel2026",
    link: "https://github.com/Sakthivel2026/terminal-chat",
  },
  {
    repo: "Tichi-Web-Application",
    contibutionDescription:
      `Comprehensive Manual QA testing project for the Tichi Web App featuring 78 test cases, defect reporting, API analysis with Chrome DevTools, and structured test documentation covering functional, validation, security, and UI testing.`,
    repoOwner: "Sakthivel2026",
    link: "https://github.com/Sakthivel2026/Tichi-Web-Application-",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
