export default function Polyverse() {
  return (
    <>
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Polyverse
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              A new app is coming soon to change the game!
            </span>
          </div>

          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-sm font-bold md:text-2xl">
              Polyverse – Your All-in-One College Management App
            </span>
            <p className="mt-4 text-sm md:text-lg">
              Polyverse simplifies college life for students and faculty with
              easy attendance tracking, leave requests, and seamless
              communication. Access study materials, manage schedules, and stay
              connected—all in one place.
            </p>
            <p className="mt-10 text-base md:text-xl">
              We will notify you when Polyverse launches.{" "}
            </p>
          </div>

          {/* <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
                rel="noreferrer"
              >
                Github
              </a> */}
        </div>
      </section>
    </>
  );
}
