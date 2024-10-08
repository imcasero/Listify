import { Task as TaskType } from "@/app/page";
import { useTheme } from "@/context/Theme/ThemeContext";

interface TaskProps extends TaskType {
  handleIsDoneTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export const Task: React.FC<TaskProps> = (props) => {
  const { id, title, isDone, handleIsDoneTask, handleDeleteTask } = props;
  const { theme } = useTheme();

  return (
    <div
      className={`w-full flex flex-row justify-between p-2 bg-${theme}-background rounded-lg p-2 border border-${theme}-text`}
    >
      <div className="flex gap-2 justify-center items-center">
        <input
          type="checkbox"
          name="isDone"
          checked={isDone}
          onChange={() => handleIsDoneTask(id)}
        />
        <p>{title}</p>
      </div>
      <button onClick={() => handleDeleteTask(id)}>Delete</button>
    </div>
  );
};
