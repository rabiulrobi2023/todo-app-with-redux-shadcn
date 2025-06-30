import { getTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Task = () => {
  const todo = useAppSelector(getTask);
  console.log(todo);
  return (
    <div>
      <h1>This is Task Route</h1>
    </div>
  );
};

export default Task;
