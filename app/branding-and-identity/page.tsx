import Navbar from "@/components/NavbarMenu";

export default function Home() {
  return (
    <main className="relative bg-gray-100 dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden antialiased">
      <div className="w-full scroll-smooth">
        <Navbar className="top-2" />
        <div className="relative flex justify-center items-center mt-40">
          <h1 className="font-bold text-4xl">Branding & Identity</h1>
        </div>
      </div>
    </main>
  );
}
