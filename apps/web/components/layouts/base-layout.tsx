"use client";

import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <main className="relative flex flex-col items-center w-full h-full min-h-screen">
      <div className="container grid items-center flex-grow px-8 py-4 mx-auto mt-24 mb-16 max-w-screen-2xl lg:px-12 lg:py-6">
        {children}
      </div>
    </main>
  );
}
