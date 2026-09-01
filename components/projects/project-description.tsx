import React from "react";
import Image from "next/image";
import { Icons } from "@/components/common/icons";

export interface KeyFeatureGroup {
  title: string;
  bullets: string[];
}

export interface TechCategory {
  categoryName: string;
  items: string[];
}

export interface FlowItem {
  title: string;
  steps: string[];
}

export interface ProjectDescriptionProps {
  paragraphs: string[];
  bullets?: string[];
  keyFeatures?: KeyFeatureGroup[];
  technicalArchitecture?: TechCategory[];
  architectureImg?: string;
  architectureFlow?: FlowItem[];
  developmentHighlights?: string[];
  outcomeParagraphs?: string[];
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  paragraphs,
  bullets,
  keyFeatures,
  technicalArchitecture,
  architectureImg,
  architectureFlow,
  developmentHighlights,
  outcomeParagraphs,
}) => {
  return (
    <div className="space-y-8 text-foreground">
      {/* Overview Paragraphs */}
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-foreground/90">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Key Features Section */}
      {keyFeatures && keyFeatures.length > 0 && (
        <div className="space-y-6 pt-2">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground border-b pb-2">
            Key Features
          </h3>
          <div className="grid gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-5 shadow-sm space-y-3"
              >
                <h4 className="font-heading text-lg font-semibold text-primary flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                  {feature.title}
                </h4>
                <ul className="grid gap-2 pl-4 list-disc text-sm text-muted-foreground">
                  {feature.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Architecture Section */}
      {technicalArchitecture && technicalArchitecture.length > 0 && (
        <div className="space-y-4 pt-2">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground border-b pb-2">
            Technical Architecture
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {technicalArchitecture.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-lg border bg-card/60 p-4 space-y-2"
              >
                <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider text-primary">
                  {tech.categoryName}
                </h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {tech.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2">
                      <span className="text-xs text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* System Architecture Image */}
      {architectureImg && (
        <div className="space-y-3 pt-4">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground border-b pb-2">
            System Architecture Diagram
          </h3>
          <div className="overflow-hidden rounded-xl border bg-muted/40 p-2 shadow-md">
            <img
              src={architectureImg}
              alt="System Architecture Diagram"
              className="w-full h-auto rounded-lg object-contain mx-auto max-h-[600px]"
            />
            <p className="text-center text-xs text-muted-foreground mt-2 italic pb-1">
              End-to-End System Architecture & Data Flow
            </p>
          </div>
        </div>
      )}

      {/* Architecture Flow */}
      {architectureFlow && architectureFlow.length > 0 && (
        <div className="space-y-4 pt-2">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground border-b pb-2">
            Architecture Flow
          </h3>
          <div className="space-y-4">
            {architectureFlow.map((flow, idx) => (
              <div
                key={idx}
                className="rounded-lg border bg-card p-4 space-y-3"
              >
                <h4 className="font-semibold text-foreground text-base">
                  {flow.title}
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                  {flow.steps.map((step, stepIdx) => (
                    <React.Fragment key={stepIdx}>
                      <span className="rounded-md bg-secondary px-2.5 py-1 text-secondary-foreground border">
                        {step}
                      </span>
                      {stepIdx < flow.steps.length - 1 && (
                        <span className="text-muted-foreground font-bold">
                          →
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Development Highlights */}
      {developmentHighlights && developmentHighlights.length > 0 && (
        <div className="space-y-4 pt-2">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground border-b pb-2">
            Development Highlights
          </h3>
          <ul className="grid gap-2.5 pl-4 list-disc text-sm text-muted-foreground">
            {developmentHighlights.map((highlight, idx) => (
              <li key={idx} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Project Outcome */}
      {outcomeParagraphs && outcomeParagraphs.length > 0 && (
        <div className="space-y-3 pt-2">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground border-b pb-2">
            Project Outcome
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {outcomeParagraphs.map((outcome, idx) => (
              <p key={idx} className="text-foreground/90">
                {outcome}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Fallback Legacy Bullets */}
      {!keyFeatures && bullets && bullets.length > 0 && (
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectDescription;

