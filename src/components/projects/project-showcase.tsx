import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

const generateImageData = (proj: ProjectShowcaseListItem[]) => {
  if (!proj || proj.length === 0) return []; // Ensure proj is valid
  return proj.reduce<ProjectShowcaseListItem["image"][]>((acc, p) => {
    if (p.image) acc.push(p.image);
    return acc;
  }, []);
};

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase({
  projects = [],
}: ProjectShowcaseProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = useMemo(() => generateImageData(projects), [projects]);

  const handleAnimate = (index: number) => {
    if (index !== currentImage) {
      setCurrentImage(index);
    }
  };

  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative right-0 top-0 hidden lg:block">
          <AnimatePresence>
            {images.length > 0 && (
              <motion.div
                key={projects[currentImage]?.title}
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: 0, // Improved transition for smooth entry
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{
                  x: "-100%",
                  opacity: 0,
                  transition: { duration: 0.3 },
                }}
                className="absolute right-0 top-0 -z-50"
              >
                <Image
                  src={images[currentImage]?.LIGHT || "/placeholder.jpg"} // Fallback to placeholder if LIGHT is undefined
                  unoptimized
                  width={100}
                  height={100}
                  className="h-auto w-1/2 rounded-lg border border-zinc-300 shadow-lg dark:hidden dark:border-accent/50"
                  alt={`project ${currentImage}`}
                />
                {images[currentImage]?.DARK && (
                  <Image
                    src={images[currentImage].DARK || "/placeholder.jpg"} // Ensure fallback for DARK as well
                    unoptimized
                    width={100}
                    height={100}
                    className="hidden h-auto w-1/2 rounded-lg border border-zinc-300 shadow-lg dark:inline-block dark:border-accent/20 dark:shadow-lg dark:shadow-emerald-400/5"
                    alt={`project ${currentImage}`}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <button onClick={() => handleAnimate(0)}></button>
      <button onClick={() => handleAnimate(1)}></button>
    </section>
  );
}
