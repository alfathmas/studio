import { cn } from "@/lib/utils";
import { monasansLight, monasansMedium } from "@/styles/fonts";

const fetchData = async () => {
  try {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-cache",
    };

    const response = await fetch(`${process.env.STRAPI_API_URL}/api/home-banner`, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const Hero = async() => {
  const { data } = await fetchData();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-3xl">
          <h1 className={cn(`${monasansMedium.className} font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl`)}>
            {data.attributes?.Title}
          </h1>
          <p className={cn(`${monasansLight.className} mt-6 text-xl text-neutral-600`)}>
            {data.attributes?.Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;