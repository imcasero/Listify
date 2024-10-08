import { useTheme } from "@/context/Theme/ThemeContext";
import { PlusIcon } from "@radix-ui/react-icons";

interface TaskFormProps {
  addTask: () => void;
}

export const TaskForm: React.FC = () => {
  const { theme } = useTheme();

  return (
    <form className="flex flex-row gap-2 w-full">
      <input
        type="text"
        name="task"
        id="task-input"
        maxLength={254}
        className={`w-3/4 h-10 bg-${theme}-background rounded-lg p-2 focus:outline-none border border-${theme}-text`}
        placeholder="Create a new task"
      />
      <button
        type="submit"
        className={`w-1/4 h-10 bg-${theme}-background placeholder-${theme}-text  rounded-lg p-2 border border-${theme}-text hover:bg-${theme}-secondaryBackground flex justify-center items-center`}
      >
        <PlusIcon className={`fill-current text-${theme}-text`} />
      </button>
    </form>
  );
};
