import Navbar from "@/components/NavbarMenu";
import SectionHeader from "@/components/ui/custom/SectionHeader";
import MainProvider, { SectionProvider } from "@/components/ui/custom/SectionProvider";

export default function Home() {
  return (
    <MainProvider>
      <SectionProvider id="ui-and-ux-design">
        <SectionHeader
          title="UI & UX Design"
          gradientTitle="User-Friendly, Intuitive"
          gradient="text-blue-gradient"
          description="We design user-friendly, intuitive interfaces that help your users achieve their goals. Our team of designers and developers work together to create a seamless user experience that drives results for your business."
          centered
        />
      </SectionProvider>
    </MainProvider>
  );
}
