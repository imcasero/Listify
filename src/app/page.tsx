"use client";
import { Task } from "@/components/Task/Task";
import { TaskForm } from "@/components/TaskForm/TaskForm";
import { useTheme } from "@/context/Theme/ThemeContext";
import { GitHubLogoIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type ThemeType = "light" | "dark";

export type Task = {
  title: string;
  isDone: boolean;
};

const getLocalStorageTask = (): Task[] => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [tasks, setTasks] = useState<Task[]>(getLocalStorageTask());

  const handleNewTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const themeClasses: Record<ThemeType, string> = {
    light: "bg-light-background text-light-text",
    dark: "bg-dark-background text-dark-text",
  };

  return (
    <main className={`min-h-screen ${themeClasses[theme]}`}>
      <div className="flex flex-col gap-5 min-h-screen w-[768px] m-auto py-5 font-[family-name:var(--font-geist-sans)]">
        <header className="flex justify-between align-middle">
          <h1 className="font-bold text-lg">Listify</h1>
          <div className="flex gap-4">
            <button className={`hover: bg-${theme}-secondaryBackground`}>
              <GitHubLogoIcon width={20} height={20} />
            </button>
            <button
              onClick={toggleTheme}
              className={`hover: bg-${theme}-secondaryBackground`}
            >
              {theme === "light" ? (
                <MoonIcon width={20} height={20} />
              ) : (
                <SunIcon width={20} height={20} />
              )}
            </button>
          </div>
        </header>
        <p className="w-full">
          Stay on top of your tasks with simple scheduling and tracking. Create,
          complete, and manage your to-dos effortlessly
        </p>
        <TaskForm addTask={handleNewTask} />
        <section className="flex flex-col gap-2">
          <p>Your tasks</p>
          {tasks.map((data) => {
            return <Task title={data.title} isDone={data.isDone} />;
          })}
        </section>
      </div>
    </main>
  );
}
