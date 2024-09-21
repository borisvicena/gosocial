import Navbar from "@/components/NavbarMenu";
import MainProvider, { SectionProvider } from "@/components/ui/custom/SectionProvider";
import SectionHeader from "@/components/ui/custom/SectionHeader";

export default function Home() {
  return (
    <MainProvider>
      <SectionProvider id="content-creation">
        <SectionHeader
          title="Content Creation"
          gradientTitle="Engaging, High-Quality"
          gradient="text-blue-gradient"
          description="We create engaging, high-quality content that is tailored to your audience. Our team of writers, designers, and marketers work together to create content that drives results for your business."
          centered
        />
      </SectionProvider>
    </MainProvider>
  );
}
