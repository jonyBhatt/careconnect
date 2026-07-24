import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <p>Navbar</p>
      {children}
    </section>
  );
}
