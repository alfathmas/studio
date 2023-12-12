import { cn } from "@/lib/utils";
import { monasansLight, monasansMedium } from "@/styles/fonts";
import clsx from "clsx";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-3xl">
          <h1 className={cn(`${monasansMedium.className} font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl`)}>
            Award-winning development studio based in Denmark.
          </h1>
          <p className={cn(`${monasansLight.className} mt-6 text-xl text-neutral-600`)}>
            We are a development studio working at the intersection of design and technology. It’s a really busy intersection though — a lot of our staff have been involved in hit and runs.
          </p>
        </div>
      </div>
    </div>
  );
};