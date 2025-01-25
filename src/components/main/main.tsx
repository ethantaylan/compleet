import { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex h-screen w-screen justify-center bg-slate-100 items-center">
      <div className="flex h-5/6 p-10 w-5/6 rounded-md bg-white flex-col shadow-2xl shadow-slate-200">
        {children}
      </div>
    </main>
  );
};
