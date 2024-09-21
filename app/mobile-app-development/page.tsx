import Navbar from "@/components/NavbarMenu";
import SectionHeader from "@/components/ui/custom/SectionHeader";
import MainProvider, { SectionProvider } from "@/components/ui/custom/SectionProvider";

export default function Home() {
  return (
    <MainProvider>
      <SectionProvider id="mobile-app-development">
        <SectionHeader
          title="Mobile App Development"
          gradientTitle="Fast, Secure, User-Friendly"
          gradient="text-blue-gradient"
          description="We build mobile applications that are fast, secure, and user-friendly. Our team of developers are experts in front-end and back-end technologies, ensuring that your mobile app is built to the highest standards."
          centered
        />
      </SectionProvider>
    </MainProvider>
  );
}
