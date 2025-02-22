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
                src="/logo.png"
                alt="Awesmatic"
                width={400}
                height={200}
                priority
                className="m-auto"
              />

              <div className="text-center w-full md:max-w-xl">
                <h1
                  className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent text-3xl md:text-5xl font-bold  mb-4">
                 Scheduled Maintenance in Progress
                </h1>
                <p className="text-lg text-gray-700">Our website is undergoing maintenance. We'll return soon with a better and smoother experience.</p>
                <div className="mt-6 text-sm text-gray-500">
                 
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
