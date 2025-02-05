import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark"); // Force dark mode on mount
    setMounted(true);
  }, [setTheme]);

  return (
    <button
      type="button"
      aria-label="toggle theme"
      className="mt-8 h-10 w-10 rounded-full text-accent transition-[scale] duration-200 hover:scale-[1.1] md:mr-4 md:mt-0 md:h-6 md:w-6"
      disabled // Disabled since no toggle is needed
    >
      {mounted && (
        <svg
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="100%"
          width="100%"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93M19.07 19.07l-1.414-1.414M12 17a5 5 0 100-10 5 5 0 000 10z"
          ></path>
        </svg>
      )}
    </button>
  );
}
