import Image from "next/image";
import Link from "next/link";

export default function Articles({ article }: { article: any }) {
  const {
    title,
    description,
    title2,
    text2,
    image1,
    url,
    title3,
    text3,
    title4,
    text4,
    title5,
    text5,
    title6,
    text6,
    title7,
    text7,
    title8,
    text8,
    title9,
    text9,
    title10,
    text10,
  } = article;
  console.log("imagen + " + JSON.stringify(image1));
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-black hover:shadow-lg">
      <Image
        src={image1?.data?.attributes?.formats?.medium?.url}
        width={600}
        height={400}
        alt={`Imagen ${title}`}
      />
      <div className="p-4">
        <h2 className="text-[20px] font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="mt-4">
          <Link
            href={`/articles/${url}`}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
