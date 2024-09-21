import Navbar from "@/components/NavbarMenu";
import SectionHeader from "@/components/ui/custom/SectionHeader";
import MainProvider, { SectionProvider } from "@/components/ui/custom/SectionProvider";

export default function Home() {
  return (
    <MainProvider>
      <SectionProvider id="branding-and-identity">
        <SectionHeader
          title="Branding & Identity"
          gradientTitle="Memorable, Unique"
          gradient="text-blue-gradient"
          description="We create memorable, unique branding and identity solutions that help your business stand out from the competition. Our team of designers and marketers work together to create a brand that resonates with your audience."
          centered
        />
      </SectionProvider>
    </MainProvider>
  );
}
