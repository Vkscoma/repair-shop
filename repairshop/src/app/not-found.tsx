import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-8 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image src="/404.svg" alt="404" width={400} height={400} />
      </div>
    </div>
  );
}
