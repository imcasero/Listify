import { Task as TaskType } from "@/app/page";
import { useTheme } from "@/context/Theme/ThemeContext";

type TaskProps = TaskType;

export const Task: React.FC<TaskProps> = (props) => {
  const { title, isDone } = props;
  const { theme } = useTheme();
  return (
    <div
      className={`w-full flex flex-row justify-between p-2 bg-${theme}-background rounded-lg p-2 border border-${theme}-text`}
    >
      <div className="flex gap-2 justify-center align-middle">
        <input type="checkbox" name="isDone" checked={isDone} />
        <p>{title}</p>
      </div>
      <button>Delete</button>
    </div>
  );
};
