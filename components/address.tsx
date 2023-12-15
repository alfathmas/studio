import { monasansLight, monasansMedium } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const fetchData = async () => {
  try {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-cache",
    };

    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/our-office`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const Address = async () => {
  const { data } = await fetchData();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-xl">
              <h2 className="max-w-xl text-white">
                Tell us about your project
              </h2>
              <div className="mt-6 flex">
                <Link
                  href="/contacts"
                  className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                >
                  <span className="relative top-px">Get in touch</span>
                </Link>
              </div>
              <div className="mt-10 border-t border-white/10 pt-10">
                <h3 className="font-display text-base font-semibold text-white">
                  Our offices
                </h3>
                <ul
                  role="list"
                  className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                >
                  <li>
                    <address className="text-sm not-italic text-neutral-300">
                      <strong className="text-white">{data.attributes.City}</strong>
                      <br />
                      {data.attributes.Address}
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
