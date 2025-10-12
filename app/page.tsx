import Link from "next/link";


export default function Home() {


  return (
    <div className="h-screen w-full  flex  flex-col justify-center items-center mx-auto pt-20 pb-10 bg-blue-300">

      <h1>Creating Web designing</h1>
      <Link href="./masonary">
      <button className="px-4 py-2 mt-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Masonary Grid </button>
      </Link>


    </div>
  );
}
