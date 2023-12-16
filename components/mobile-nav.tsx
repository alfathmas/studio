"use client";

import * as React from "react";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="text-xl font-medium pt-10">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <a
                className="group relative -mx-6 py-6 sm:mx-0 sm:px-0 sm:py-16 sm:even:border-neutral-800"
                href="/about"
              >
                About Us
                <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-950/10 opacity-0 transition -left-6 group-hover:opacity-100"></span>
              </a>
              <a
                className="group relative -mx-6 py-6 sm:mx-0 sm:px-0 sm:py-16 sm:even:border-neutral-800"
                href="/work"
              >
                Our Work
                <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-950/10 opacity-0 transition -left-6 group-hover:opacity-100"></span>
              </a>

              <a
                className="group relative -mx-6 py-6 sm:mx-0 sm:px-0 sm:py-16 sm:even:border-neutral-800"
                href="/services"
              >
                Services
                <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-950/10 opacity-0 transition -left-6 group-hover:opacity-100"></span>
              </a>
              <a
                className="group relative -mx-6 py-6 sm:mx-0 sm:px-0 sm:py-16 sm:even:border-neutral-800"
                href="/blogs"
              >
                Blogs
                <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-950/10 opacity-0 transition -left-6 group-hover:opacity-100"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
