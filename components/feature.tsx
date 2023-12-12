import Image from "next/image";
import FeatureItem from "./feature-item";
import Container from "./ui/container";

export default function Feature() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              We’ve worked with hundreds of amazing people
            </h2>
            <div className="h-px flex-auto bg-neutral-800"></div>
          </div>
          <div>
            <ul role="list" className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              <li>
                <div>
                  <Image src="/logo-light.ada2d552.svg" alt="logo" width={200} height={200} />
                </div>
              </li>
              <li>
                <div>
                  <Image src="/logo-light.1704e6d8.svg" alt="logo" width={200} height={200} />
                </div>
              </li>
              <li>
                <div>
                  <Image src="/logo-light.249606f6.svg" alt="logo" width={200} height={200} />
                </div>
              </li>
              <li>
                <div>
                  <Image src="/logo-light.456aa9d9.svg" alt="logo" width={200} height={200} />
                </div>
              </li>
              <li>
                <div>
                  <Image src="/logo-light.5c8de99c.svg" alt="logo" width={200} height={200} />
                </div>
              </li>
              <li>
                <div>
                  <Image src="/logo-light.da1195d8.svg" alt="logo" width={200} height={200} />
                </div>
              </li>
              <li>
                <div>
                  <Image src="/logo-light.e19f9c9b.svg" alt="logo" width={200} height={200} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}