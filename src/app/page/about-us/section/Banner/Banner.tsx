export default function Banner() {
  return (
    <div className="page-layout flex h-full flex-col items-start justify-center gap-0 border border-red-500 bg-white px-10 py-10 md:pt-24 lg:mt-0 lg:gap-4 lg:px-44 lg:pt-32">
      <h1 className="mb-1 w-full border text-center text-xl font-bold lg:text-4xl">
        We accelerate humanity..{" "}
        <span className="hidden md:inline">By accelerating startup..</span>
      </h1>
      <div className="h-20 w-full rounded-xl border border-red-500 md:h-36 lg:h-56">
        <img src="/sun.jpg" className="h-full w-full rounded-xl object-cover" />
      </div>
    </div>
  );
}
