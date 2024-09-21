import Navbar from "@/components/NavbarMenu";
import MainProvider, { SectionProvider } from "@/components/ui/custom/SectionProvider";
import SectionHeader from "@/components/ui/custom/SectionHeader";

export default function Home() {
  return (
    <MainProvider>
      <SectionProvider id="digital-marketing">
        <SectionHeader
          title="Digital Marketing"
          gradientTitle="SEO, PPC, Social Media"
          gradient="text-blue-gradient"
          description="We offer a range of digital marketing services to help your business grow online. Our team of experts can help you with SEO, PPC, social media, and more."
          centered
        />
      </SectionProvider>
    </MainProvider>
  );
}
