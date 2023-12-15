import Address from "@/components/address";
import CaseStudyBanner from "@/components/casestudy-banner";
import ClientBanner from "@/components/client-banner";
import HomeBanner from "@/components/home-banner";
import QuoteBanner from "@/components/quote-banner";
import ServiceBanner from "@/components/service-banner";
import ServiceItem from "@/components/service-item";

export default function Home() {
  return (
    <main className="w-full flex-auto">
      <HomeBanner />
      <ClientBanner />
      {/* Case Study */}
      <CaseStudyBanner />
      {/* quote */}
      <QuoteBanner />
      {/* services */}
      <ServiceBanner />
      {/* all sertice */}
      <ServiceItem />
      {/* message */}
      <Address />
    </main>
  );
}
