import { monasansLight, monasansMedium } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const fetchData = async () => {
  try {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-cache",
    };

    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/quote-banner?populate=*`,
      options
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const QuoteBanner = async () => {
  const { data } = await fetchData();

  return (
    <div className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <figure className="mx-auto max-w-4xl">
              <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                <p
                  className={cn(
                    `${monasansMedium.className} before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full`
                  )}
                >
                  {data.attributes?.Quote}
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <Image
                  src={`${process.env.STRAPI_API_URL}${data.attributes?.Image.data.attributes.url}`}
                  alt="logo"
                  width={200}
                  height={200}
                />
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBanner;
