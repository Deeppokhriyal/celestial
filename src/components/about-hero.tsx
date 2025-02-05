import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/deepak.jpg";
import heroProfileImg2 from "@/public/images/his_gf.jpg";

export default function AboutHero() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-20 sm:px-14 md:px-20">
      {/* First Person */}
      <div className="mt-0 flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="hero-image-1" duration={0.6}>
              <Image
                src={heroProfileImg}
                width={100}
                height={100}
                className="h-auto w-full rounded-[50px] px-0  xl:px-16 "
                alt="Deepak Pokhriyal's profile"
                unoptimized
              />
            </FadeUp>
          </AnimatePresence>
        </div>
        <div className="sm:1/2 mt-10 w-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="title-greeting-1" duration={0.6}>
              <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
                Hi, I&apos;m Deepak Pokhriyal
              </h1>
            </FadeUp>
            <FadeUp key="description-1-1" duration={0.6} delay={0.2}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                Hello, I am Deepak Pokhriyal, a 23-year-old guy. I hold a
                diploma in Information Technology. and also Bachelors in
                Information Technology. I have foundational knowledge in
                editing, programming languages, designing and graphics.
              </p>
            </FadeUp>
            <FadeUp key="description-2-1" duration={0.6} delay={0.4}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                Explore my latest projects showcasing my expertise in flutter,
                Xamarin, Native script, Dart, Swift, firebase, Node js, Laravel,
                Html, Css, Java script and App development.
              </p>
            </FadeUp>
            <FadeRight
              key="hero-location-1"
              duration={0.6}
              delay={0.8}
              className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
            >
              <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                <Image
                  className="-z-10 h-full w-full bg-cover bg-no-repeat"
                  alt="Indian flag"
                  src="https://flagcdn.com/in.svg"
                  width={15}
                  height={15}
                />
              </div>
              <span className="text-lg font-medium text-foreground">
                UK, India
              </span>
            </FadeRight>
          </AnimatePresence>
        </div>
      </div>

      {/* Second Person */}
      <div className="mt-20 flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="hero-image-2" duration={0.6}>
              <Image
                src={heroProfileImg2}
                width={100}
                height={100}
                className=" w-full rounded-[10px] px-0 xl:px-16"
                alt="Second person's profile"
                unoptimized
              />
            </FadeUp>
          </AnimatePresence>
        </div>
        <div className="sm:1/2 mt-10 w-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="title-greeting-2" duration={0.6}>
              <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
                Hi, I&apos;m Shivanshi Mishra
              </h1>
            </FadeUp>
            <FadeUp key="description-1-2" duration={0.6} delay={0.2}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                Hello, I am Shivanshi Mishra, a 22-year-old . I hold a diploma
                in Information Technology. and also Bachelors in Information
                Technology. I have foundational knowledge in editing,
                programming languages, designing and graphics.
              </p>
            </FadeUp>
            <FadeUp key="description-2-2" duration={0.6} delay={0.4}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                Explore my latest projects showcasing my expertise in flutter,
                Xamarin, Native script, Dart, Swift, firebase, Node js, Laravel,
                Html, Css, Java script and App development.{" "}
              </p>
            </FadeUp>
            <FadeRight
              key="hero-location-2"
              duration={0.6}
              delay={0.8}
              className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
            >
              <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                <Image
                  className="-z-10 h-full w-full bg-cover bg-no-repeat"
                  alt="India flag"
                  src="https://flagcdn.com/in.svg"
                  width={15}
                  height={15}
                />
              </div>
              <span className="text-lg font-medium text-foreground">
                Uk, India
              </span>
            </FadeRight>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
