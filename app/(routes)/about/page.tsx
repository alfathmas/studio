import { monasansLight, monasansMedium } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Culture from "@/components/ui/culture";
import Teams from "@/components/ui/teams";

const fetchData = async () => {
  try {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-cache",
    };

    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/about-us-page`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const AboutPage = async () => {
  const { data } = await fetchData();

  const bodyLines = data.attributes.Body.split("\n");

  return (
    <main className="w-full flex-auto">
      <div
        className={cn(
          `${monasansMedium.className} mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40`
        )}
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                About us
              </span>
              <span className="sr-only"> - </span>
              <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                {data.attributes?.Title}
              </span>
            </h2>
            <div className="mt-6 text-xl text-neutral-600">
              <p className={cn(`${monasansLight.className}`)}>
                {data.attributes?.Description}
              </p>
            </div>
            <div className="mt-10 max-w-2xl space-y-6 text-base text-neutral-600">
              {bodyLines.map((body: string, index: number) => (
                <p key={index} className={cn(`${monasansLight.className}`)}>
                  {body}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Culture */}
      <Culture />
      {/* Team Members */}
      <Teams />
    </main>
  );
};

export default AboutPage;
