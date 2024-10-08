"use client";
import { useTheme } from "@/context/Theme/ThemeContext";
import { GitHubLogoIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";

type ThemeType = "light" | "dark";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const themeClasses: Record<ThemeType, string> = {
    light: "bg-light-background text-light-text",
    dark: "bg-dark-background text-dark-text",
  };

  return (
    <main className={`min-h-screen ${themeClasses[theme]}`}>
      <div className="min-h-screen w-[768px] m-auto py-5 font-[family-name:var(--font-geist-sans)]">
        <header className="flex justify-between align-middle">
          <h1 className="font-bold text-lg">Listify</h1>
          <div className="flex gap-4">
            <button className="hover: ">
              <GitHubLogoIcon width={20} height={20} />
            </button>
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <MoonIcon width={20} height={20} />
              ) : (
                <SunIcon width={20} height={20} />
              )}
            </button>
          </div>
        </header>
        <p className="w-full mt-5">
          Stay on top of your tasks with simple scheduling and tracking. Create,
          complete, and manage your to-dos effortlessly
        </p>
      </div>
    </main>
  );
}
