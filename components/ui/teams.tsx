import { inter, monasansLight, monasansMedium } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Culture from "@/components/ui/culture";
import Image from "next/image";

interface ItemType {
  id: string;
  attributes: {
    Name: string;
    Position: string;
    Image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
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
      `${process.env.STRAPI_API_URL}/api/leadership-teams?populate=*`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const Teams = async () => {
  const { data } = await fetchData();

  console.log(data.map((item: ItemType) => item.attributes.Image.data.attributes.url))

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="space-y-24">
          <div>
            <div className="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <div style={{ opacity: 1, transform: "none" }}>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Leadership
                </h2>
              </div>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {data.map((item: ItemType) => (
                    <li style={{ opacity: 1, transform: "none" }} key={item.id}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <Image
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={`${process.env.STRAPI_API_URL}${item.attributes.Image.data.attributes.url}`}
                          alt="logo"
                          width={500}
                          height={500}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            {item.attributes.Name}
                          </p>
                          <p className="mt-2 text-sm text-white">
                            {item.attributes.Position}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
