import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="text-fuchsia-500 shadow-inner backdrop-filter backdrop-blur-sm backdrop-opacity-50 shadow-fuchsia-500 rounded-lg p-4 drop-shadow-lg ">
      {children}
    </div>
  );
}
