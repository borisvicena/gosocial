import Navbar from "@/components/sections/NavbarMenu";
import SectionHeader from "@/components/ui/custom/SectionHeader";
import MainProvider, { SectionProvider } from "@/components/ui/custom/SectionProvider";

export default function Home() {
  return (
    <MainProvider>
      <SectionProvider id="web-development">
        <SectionHeader
          title="Web Development"
          gradientTitle="Fast, Secure, User-Friendly"
          gradient="text-blue-gradient"
          description="We build websites and web applications that are fast, secure, and user-friendly. Our team of developers are experts in front-end and back-end technologies, ensuring that your website is built to the highest standards."
          centered
        />
      </SectionProvider>
    </MainProvider>
  );
}
