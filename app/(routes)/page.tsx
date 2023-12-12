import Feature from '@/components/feature'
import HomeBanner from '@/components/home-banner'
import Container from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { monasansLight, monasansMedium } from '@/styles/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-full flex-auto'>
        <HomeBanner />
        <Feature />
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='max-w-2xl'>
              <h2 className={monasansMedium.className}>
                <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950'>
                Harnessing technology for a brighter future
                </span>
              </h2>
              <div className='mt-6 text-xl text-neutral-600'>
                <p>We believe technology is the answer to the world’s greatest challenges. It’s also the cause, so we find ourselves in bit of a catch 22 situation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-16'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              {/* 1 */}
              <div className='flex'>
                <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
                  <h3>
                    <Link href="/test">
                      <span className='absolute inset-0 rounded-3xl'></span>
                    </Link>
                  </h3>
                  <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
                    <time dateTime='2023' className='font-semibold'>2023</time>
                    <span className='text-neutral-300' aria-hidden="true">/</span>
                    <span>Case study</span>
                  </p>
                  <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>Skip the bank, borrow from those you trust</p>
                  <p className='mt-4 text-base text-neutral-600'>
                  FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.
                  </p>
                </article>
              </div>
              {/* 2 */}
              <div className='flex'>
                <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
                  <h3>
                    <Link href="/test">
                      <span className='absolute inset-0 rounded-3xl'></span>
                    </Link>
                  </h3>
                  <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
                    <time dateTime='2023' className='font-semibold'>2023</time>
                    <span className='text-neutral-300' aria-hidden="true">/</span>
                    <span>Case study</span>
                  </p>
                  <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>Skip the bank, borrow from those you trust</p>
                  <p className='mt-4 text-base text-neutral-600'>
                  FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.
                  </p>
                </article>
              </div>
              {/* 3 */}
              <div className='flex'>
                <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
                  <h3>
                    <Link href="/test">
                      <span className='absolute inset-0 rounded-3xl'></span>
                    </Link>
                  </h3>
                  <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
                    <time dateTime='2023' className='font-semibold'>2023</time>
                    <span className='text-neutral-300' aria-hidden="true">/</span>
                    <span>Case study</span>
                  </p>
                  <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>Skip the bank, borrow from those you trust</p>
                  <p className='mt-4 text-base text-neutral-600'>
                  FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.
                  </p>
                </article>
              </div>
              {/* 4 */}
              <div className='flex'>
                <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
                  <h3>
                    <Link href="/test">
                      <span className='absolute inset-0 rounded-3xl'></span>
                    </Link>
                  </h3>
                  <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
                    <time dateTime='2023' className='font-semibold'>2023</time>
                    <span className='text-neutral-300' aria-hidden="true">/</span>
                    <span>Case study</span>
                  </p>
                  <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>Skip the bank, borrow from those you trust</p>
                  <p className='mt-4 text-base text-neutral-600'>
                  FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* quote */}
        <div className='relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
              <div>
                <figure className='mx-auto max-w-4xl'>
                  <blockquote className='relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
                    <p className={cn(`${monasansMedium.className} before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full`)}>
                      The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.
                    </p>
                  </blockquote>
                  <figcaption className='mt-10'>
                    <Image src="/logo-dark.353d4760.svg" alt="logo" width={200} height={200} />
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* services */}
        <div className={cn(`${monasansMedium.className} mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40`)}>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='max-w-2xl'>
              <h2>
                <span className='mb-6 block font-display text-base font-semibold text-neutral-950'>
                  Services
                </span>
                <span className='sr-only'> - </span>
                <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950'>
                We help you identify, explore and respond to new opportunities.
                </span>
              </h2>
              <div className='mt-6 text-xl text-neutral-600'>
                <p className={cn(`${monasansLight.className}`)}>
                As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* all sertice */}
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-16'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='lg:flex lg:items-center lg:justify-end'>
              <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
                <div className='w-[33.75rem] flex-none lg:w-[45rem]'>
                  <div className='justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale'>
                    <svg viewBox='0 0 655 680' fill='none' className='h-full'>
                      <g clipPath='url(#:S1:-clip)' className='group'>
                        <g className='origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105'>
                          <foreignObject width={655} height={680}>
                            <Image src="/laptop.webp" alt="logo" width={2400} height={3000} className='w-full bg-neutral-100 object-cover' />
                          </foreignObject>
                        </g>
                      </g>
                      <defs>
                        <clipPath id=':S1:-clip'>
                          <path id='' d='M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z' fillRule='evenodd' clipRule="evenodd">
                          </path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <ul role='list' className='text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
                  <li className='group mt-10 first:mt-0'>
                    <div>
                      <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                        <strong className={cn(`${monasansMedium.className} font-semibold text-neutral-950`)}>
                        Web development.{" "}
                        </strong>
                        We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere.
                      </div>
                    </div>
                  </li>
                  <li className='group mt-10 first:mt-0'>
                    <div>
                      <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                        <strong className={cn(`${monasansMedium.className} font-semibold text-neutral-950`)}>
                        Application development.{" "}
                        </strong>
                        We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit.
                      </div>
                    </div>
                  </li>
                  <li className='group mt-10 first:mt-0'>
                    <div>
                      <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                        <strong className={cn(`${monasansMedium.className} font-semibold text-neutral-950`)}>
                        E-commerce.{" "}
                        </strong>
                        We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years.
                      </div>
                    </div>
                  </li>
                  <li className='group mt-10 first:mt-0'>
                    <div>
                      <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                        <strong className={cn(`${monasansMedium.className} font-semibold text-neutral-950`)}>
                        Custom content management.{" "}
                        </strong>
                        At Studio we understand the importance of having a robust and customised CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* message */}
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12'>
              <div className='mx-auto max-w-4xl'>
                <div className='max-w-xl'>
                  <h2 className='max-w-xl text-white'>Tell us about your project</h2>
                  <div className='mt-6 flex'>
                    <Link href="/contacts" className='inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200'>
                      <span className='relative top-px'>
                        Get in touch
                      </span>
                    </Link>
                  </div>
                  <div className='mt-10 border-t border-white/10 pt-10'>
                    <h3 className='font-display text-base font-semibold text-white'>
                      Our offices
                    </h3>
                    <ul role='list' className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
                      <li>
                        <address className='text-sm not-italic text-neutral-300'>
                          <strong className='text-white'>
                            Copenhagen
                          </strong>
                          <br />
                          1 Carlsberg Gate
                          <br />
                          1260, København, Denmark
                        </address>
                      </li>
                      <li className='ext-sm not-italic text-neutral-300'>
                        <address className='text-sm not-italic text-neutral-300'>
                          <strong className='text-white'>
                          Billund
                          </strong>
                          <br />
                          24 Lego Allé
                          <br />
                          7190, Billund, Denmark
                        </address>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div>
              <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
                <nav>
                  <ul role='list' className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                    <li>
                      <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
                        Work
                      </div>
                      <ul role='list' className='mt-4 text-sm text-neutral-700'>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>FamilyFund</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Unseal</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Phobia</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>See all
                            <span aria-hidden={true}>→</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
                        Company
                      </div>
                      <ul role='list' className='mt-4 text-sm text-neutral-700'>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>About</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Process</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Blog</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Contact Us
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
                        Connect
                      </div>
                      <ul role='list' className='mt-4 text-sm text-neutral-700'>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Facebook</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Instagram</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Twitter</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Github</Link>
                        </li>
                        <li className='mt-4'>
                          <Link href="/test" className='transition hover:text-neutral-950'>Linkedin</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className='flex lg:justify-end'>
                  <form action="" className='max-w-sm'>
                    <h2 className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
                    Sign up for our newsletter
                    </h2>
                    <p className='mt-4 text-sm text-neutral-700'>
                    Subscribe to get the latest design news, articles, resources and inspiration.
                    </p>
                    <div className='relative mt-6'>
                      <input type="email" placeholder='Email address' className='block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5' />
                      <div className='absolute inset-y-1 right-1 flex justify-end'>
                        <button className='flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800' type='submit'>
                          <svg viewBox='0 0 16 6' className='w-4' aria-hidden={true}>
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12'>
              <Link href="/">
                <svg viewBox="0 0 130 32" aria-hidden="true" className="group/logo h-8"><svg viewBox="0 0 32 32" aria-hidden="true" preserveAspectRatio="xMinYMid meet"><rect clipPath="url(#:Rbblda:-clip)" className="h-8 transition-all duration-300 fill-neutral-950 w-0 group-hover/logo:w-8"></rect><use href="#:Rbblda:-path" className="stroke-neutral-950" fill="none" strokeWidth="1.5"></use><defs><path id=":Rbblda:-path" d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"></path><clipPath id=":Rbblda:-clip"><use href="#:Rbblda:-path"></use></clipPath></defs></svg><path className="fill-neutral-950" d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"></path></svg>
              </Link>
              <p className='text-sm text-neutral-700'>© Studio Agency Inc. 2023</p>
            </div>
          </div>
        </footer>
    </main>
  )
}
