import { Task } from "../common/card/task";

export const Tasks = () => {
  return (
    <div className="flex flex-col h-4/6 gap-3 mt-3 overflow-auto pe-5 pb-10">
      {Array.from({ length: 4 }).map((_, index) => (
        <Task key={index} index={index + 1} />
      ))}
    </div>
  );
};
