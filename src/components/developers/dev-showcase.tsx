import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import DevPill, { type DevPillProps } from "@/components/developers/dev-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";
export interface DevShowcaseProps {
  devs: {
    sectionName: string;
    devs: DevPillProps[];
  }[];
}

export default function DevShowcase({ devs }: DevShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
  return (
    <section className="overflow-hidden px-6 pb-32 pt-0 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl">
          <Link href="/about" className="hover:underline">
            Developers
          </Link>
        </h2>
        {devs.map((section) => (
          <AnimatePresence key={section.sectionName}>
            <div className="mt-4">
              <span className="text-xs font-semibold text-foreground sm:text-sm">
                {section.sectionName}
              </span>
              <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                {section.devs.map((pill, index) => (
                  <FadeRight
                    key={`lang-${index}`}
                    duration={0.9}
                    delay={0.1 + index * 0.8}
                    whileInView={!isMobileDebonced}
                    className="-z-20"
                  >
                    <DevPill {...pill} />
                  </FadeRight>
                ))}
              </div>
            </div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}
