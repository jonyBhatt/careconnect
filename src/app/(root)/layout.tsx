import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-dvh flex flex-col w-full bg-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
