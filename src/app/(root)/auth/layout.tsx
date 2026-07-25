import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col min-h-dvh">
      <nav className="h-20 bg-white sticky top-0 z-50 shadow-2xl">
        <div className="flex justify-between items-center h-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold">CareConnect</span>
          </div>
        </div>
      </nav>
      <main className="flex-1  bg-white/30">{children}</main>
    </section>
  );
}
