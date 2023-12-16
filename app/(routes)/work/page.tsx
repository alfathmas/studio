import { monasansLight, monasansMedium } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Culture from "@/components/ui/culture";
import Teams from "@/components/ui/teams";

// const fetchData = async () => {
//   try {
//     const options: RequestInit = {
//       headers: {
//         Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//       },
//       cache: "no-cache",
//     };

//     const response = await fetch(
//       `${process.env.STRAPI_API_URL}/api/about-us-page`,
//       options
//     );
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

const WorkPage = async () => {
  // const { data } = await fetchData();

  // const bodyLines = data.attributes.Body.split("\n");

  return (
    <main className="w-full flex-auto">
      <div className={cn(
          `${monasansMedium.className} mx-auto max-w-2xl lg:max-w-none`)}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="opacity: 1; transform: none;">
                <h1>
                  <span className="block font-display text-base font-semibold text-neutral-950">Our work</span>
                  <span className="sr-only"> - </span>
                  <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">Proven solutions for real-world problems.</span>
                </h1>
                <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                  <p>We believe in efficiency and maximizing our resources to provide the best value to our clients. The primary way we do that is by re-using the same five projects we’ve been developing for the past decade.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="opacity: 1; transform: none;">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Case studies</h2>
          </div>
          <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
            <div className="opacity: 1; transform: none;">
              <article>
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      <img alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" className="h-16 w-16 flex-none" src="/_next/static/media/logomark-dark.4d2947be.svg" />
                      <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">FamilyFund</h3>
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">Web development, CMS</p>
                      <p className="text-sm text-neutral-950 lg:mt-2">
                        <time datetime={"2023-01"}>January 2023</time>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-neutral-950">
                      <a href="/work/family-fund">Skip the bank, borrow from those you trust</a>
                    </p>
                    <div className="mt-6 space-y-6 text-base text-neutral-600">
                      <p>FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.</p>
                      <p>We developed a custom CMS to power their blog with and optimised their site to rank higher for the keywords “Gary Vee” and “Tony Robbins”.</p>
                    </div>
                    <div className="mt-8 flex">
                      <a className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" aria-label="Read case study: FamilyFund" href="/work/family-fund">
                        <span className="relative top-px">Read case study</span>
                      </a>
                    </div>
                    <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <figure className="text-sm">
                        <blockquote className="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                          <p>Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions.</p>
                        </blockquote>
                        <figcaption className="mt-6 font-semibold text-neutral-950">Debra Fiscal, CEO of FamilyFund</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>  
      {/* Culture */}
      {/* <Culture /> */}
      {/* Team Members */}
      {/* <Teams /> */}
    </main>
  );
};

export default WorkPage;
