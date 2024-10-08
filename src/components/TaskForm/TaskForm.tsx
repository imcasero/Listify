import { useState } from "react";
import { Task } from "@/app/page";
import { useTheme } from "@/context/Theme/ThemeContext";
import { PlusIcon } from "@radix-ui/react-icons";

interface TaskFormProps {
  addTask: (newTask: Task) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const { theme } = useTheme();

  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!taskInput.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskInput.trim(),
      isDone: false,
    };

    addTask(newTask);
    setTaskInput("");
  };

  return (
    <form className="flex flex-row gap-2 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        id="task-input"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        maxLength={254}
        className={`w-3/4 h-10 bg-${theme}-background rounded-lg p-2 focus:outline-none border border-${theme}-text`}
        placeholder="Create a new task"
      />
      <button
        type="submit"
        className={`w-1/4 h-10 bg-${theme}-background placeholder-${theme}-text rounded-lg p-2 border border-${theme}-text hover:bg-${theme}-secondaryBackground flex justify-center items-center`}
      >
        <PlusIcon className={`fill-current text-${theme}-text`} />
      </button>
    </form>
  );
};
