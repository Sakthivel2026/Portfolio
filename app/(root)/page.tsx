import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.png";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Sakthivel - Applied AI Engineer working at the intersection of AI, data, and scalable software systems. Explore my projects, experience, and contributions.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="relative overflow-hidden pt-12 pb-16 md:py-20 lg:py-28 min-h-[85vh] flex items-center">
        {/* Abstract organic background elements for hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Content & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Status indicator */}
            <AnimatedText delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Available for opportunities
              </div>
            </AnimatedText>

            {/* Greeting Tag */}
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-xs sm:text-sm font-semibold tracking-widest text-primary/80 uppercase mb-2 font-mono"
            >
              HELLO, I'M
            </AnimatedText>

            {/* Name */}
            <AnimatedText
              as="h1"
              delay={0.2}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            >
              Sakthivel
            </AnimatedText>

            {/* Role */}
            <AnimatedText
              as="h2"
              delay={0.3}
              className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-primary/90 mt-2"
            >
              Full Stack Developer
            </AnimatedText>

            {/* Description */}
            <AnimatedText delay={0.4}>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I’m a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications. I work with React, Next.js, Node.js, Express.js, and MongoDB, turning ideas into scalable and reliable digital experiences while continuously improving my development skills.
              </p>
            </AnimatedText>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <AnimatedText delay={0.5}>
                <Link
                  href="https://drive.google.com/uc?export=download&id=1VIz-qV91AM42OSTMx7dV0nAp9CUJcpni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-xl gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
                  )}
                  aria-label="Download Resume"
                >
                  <Icons.post className="w-5 h-5" /> Resume
                </Link>
              </AnimatedText>

              <AnimatedText delay={0.6}>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-xl gap-2 font-semibold transition-all hover:bg-accent"
                  )}
                  aria-label="Contact Sakthivel"
                >
                  <Icons.contact className="w-5 h-5" /> Contact Me
                </Link>
              </AnimatedText>
            </div>
          </div>

          {/* RIGHT SIDE: Circular Profile Image & Abstract Background Design */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              {/* Organic Curved SVG Backdrop */}
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full text-muted/60 dark:text-muted/30 animate-pulse-slow"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M390,290Q350,330,310,380Q270,430,210,410Q150,390,110,340Q70,290,80,220Q90,150,140,110Q190,70,260,80Q330,90,380,140Q430,190,390,290Z"
                />
              </svg>

              {/* Decorative Geometric Layered Circles */}
              <div className="absolute inset-2 sm:inset-4 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-2 sm:-inset-4 rounded-full border border-primary/10 pointer-events-none" />

              {/* Glowing Accent Glow Ring */}
              <div className="absolute w-[80%] h-[80%] rounded-full bg-primary/10 blur-2xl -z-10" />

              {/* Circular Profile Image Frame */}
              <div className="relative z-10 w-[72%] h-[72%] rounded-full border-4 sm:border-8 border-background shadow-2xl overflow-hidden bg-muted group">
                <Image
                  src={profileImg}
                  fill
                  sizes="(max-width: 768px) 280px, 340px"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  alt="Sakthivel - Full Stack Developer Profile Photo"
                  priority
                />
              </div>

              {/* Interactive Floating Badge (Inspired by reference screenshot) */}
              <div className="absolute bottom-6 left-2 sm:left-4 z-20 bg-background/95 dark:bg-background/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-border shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Full Stack</div>
                  <div className="text-xs text-muted-foreground">React & Node.js</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <ContributionCard contributions={featuredContributions} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
