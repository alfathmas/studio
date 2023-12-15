import { monasansLight, monasansMedium } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ImageData {
  id: string;
  attributes: {
    url: string;
  }
}

const fetchData = async () => {
  try {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-cache",
    };

    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/client-banner?populate=*`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const ClientBanner = async () => {
  const { data } = await fetchData();

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              {data.attributes?.Title}
            </h2>
            <div className="h-px flex-auto bg-neutral-800"></div>
          </div>
          <div>
            <ul
              role="list"
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
            >
              {data.attributes?.Image.data.map((image: ImageData) => (
                <li key={image.id}>
                  <div>
                    <Image
                      src={`${process.env.STRAPI_API_URL}${image.attributes.url}`}
                      alt="logo"
                      width={200}
                      height={200}
                    />
                  </div>
                </li>
              )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBanner;
