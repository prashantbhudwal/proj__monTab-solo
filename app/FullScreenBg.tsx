import Image from "next/image";

export default function FullScreenBg({ url }: { url: string }) {
  return (
    <div className="absolute -z-10 w-screen h-screen">
      <Image
        src={url}
        alt="Background Image"
        fill={true}
        placeholder="blur"
        blurDataURL="/shiba.jpg"
        className="-z-10"
      />
    </div>
  );
}
