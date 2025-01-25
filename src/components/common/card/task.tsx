import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

export interface TaskProps {
  index: number;
}
export const Task = ({ index }: TaskProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-0 border rounded-md w-full justify-between flex px-2 py-4 items-center">
        <div className="flex h-full items-center">
          <div className="flex items-center justify-center text-white bg-slate-300 border-slate-300 w-5 h-5 text-xs me-3 p-1 rounded-full">
            <span className="text-sm font-semibold">{index}</span>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold">Task Title</h2>
            <h3 className="text-sm text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              suscipit voluptatibus molestias magni consequuntur.
            </h3>
          </div>
        </div>

        <div className="w-10 cursor-pointer">
          <EllipsisVerticalIcon height={20} />
        </div>
      </div>
    </div>
  );
};
