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
      `${process.env.STRAPI_API_URL}/api/case-study-banner`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const CaseStudyBanner = async () => {
  const { data } = await fetchData();

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2 className={monasansMedium.className}>
              <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                Case Study
              </span>
              <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                {data.attributes?.Title}
              </span>
            </h2>
            <div className="mt-6 text-xl text-neutral-600">
              <p>
                {data.attributes?.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* 1 */}
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href="/test">
                    <span className="absolute inset-0 rounded-3xl"></span>
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2023" className="font-semibold">
                    2023
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Skip the bank, borrow from those you trust
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  FamilyFund is a crowdfunding platform for friends and family.
                  Allowing users to take personal loans from their network
                  without a traditional financial institution.
                </p>
              </article>
            </div>
            {/* 2 */}
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href="/test">
                    <span className="absolute inset-0 rounded-3xl"></span>
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2023" className="font-semibold">
                    2023
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Skip the bank, borrow from those you trust
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  FamilyFund is a crowdfunding platform for friends and family.
                  Allowing users to take personal loans from their network
                  without a traditional financial institution.
                </p>
              </article>
            </div>
            {/* 3 */}
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href="/test">
                    <span className="absolute inset-0 rounded-3xl"></span>
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2023" className="font-semibold">
                    2023
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Skip the bank, borrow from those you trust
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  FamilyFund is a crowdfunding platform for friends and family.
                  Allowing users to take personal loans from their network
                  without a traditional financial institution.
                </p>
              </article>
            </div>
            {/* 4 */}
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href="/test">
                    <span className="absolute inset-0 rounded-3xl"></span>
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2023" className="font-semibold">
                    2023
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Skip the bank, borrow from those you trust
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  FamilyFund is a crowdfunding platform for friends and family.
                  Allowing users to take personal loans from their network
                  without a traditional financial institution.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyBanner;
