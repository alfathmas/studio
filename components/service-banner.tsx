import { monasansLight, monasansMedium } from "@/styles/fonts";
import { cn } from "@/lib/utils";

const fetchData = async () => {
  try {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-cache",
    };

    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/service-banner`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const ServiceBanner = async () => {
  const { data } = await fetchData();

  return (
    <div
      className={cn(
        `${monasansMedium.className} mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40`
      )}
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-2xl">
          <h2>
            <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
              Services
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
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
