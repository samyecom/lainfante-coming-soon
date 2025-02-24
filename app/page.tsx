import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className=" absolute top-0 left-0 right-0 bottom-0 p-4 h-screen group bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-400/35 via-blue-300/35 to-pink-400/35" id="New_body_div">
          <div className="bg-white/50 p-4 rounded-xl grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen gap-16 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
            <img
              className=" md:w-96 md:h-96 md:-bottom-24 absolute md:-right-24 w-60 h-60 -bottom-20 -right-20 "
              id="comingsoon"
              src="./comingsoon.png"
            />
            <img
              className=" md:w-96 md:h-96 md:-top-24 absolute md:-left-24 w-60 h-60 -top-20 -left-20 "
              id="comingsoon"
              src="./comingsoon.png"
            />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <Image
                src="/logo-tp.png"
                alt="Awesmatic"
                width={260}
                height={120}
                priority
                className="m-auto rounded"
              />

              <div className="text-center w-full md:max-w-xl">
                <h1 className="bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text text-3xl md:text-5xl leading-normal font-bold mb-4">
                  Website Coming Soon
                </h1>
                <p className="text-lg text-gray-700">Our website is undergoing maintenance. We'll return soon with a better and smoother experience.</p>
                <div className="mt-8 text-gray-600">
                  <span className="block mb-3">Need to reach us?</span>
                  <a href="tel:9317466666" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">931 746 6666</span>
                  </a>
                </div>
              </div>

            </main>
          </div>
        </div>
      </div>
    </>
  );
}
