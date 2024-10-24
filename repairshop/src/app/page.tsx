import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-neutral-950 w-4/5 sm:max-w-96 mx-auto text-neutral-200 sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Welcome to the Computer Repair Shop!
          </h1>
          <address>
            123 Main St.
            <br />
            Anytown, USA
          </address>
          <p>Open Daily: 9am - 5pm</p>
          <Link href="tel:5555555555" className="hover:underline">
            Call us at 555-555-5555
          </Link>
        </div>
      </main>
    </div>
  );
}
