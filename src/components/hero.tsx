import Image from "next/image";
import Animation from "@/components/animation";
import Link from "next/link";

export function Hero(){
    return (
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Animation/>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">항상 지식을 탐구하고 기록하는 개발자 정성훈입니다</h1>
                    <p className="mb-8 leading-relaxed">주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리.</p>
                    <div className="flex justify-center">
                        <Link href='/projects/a'>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Projects</button>


                        </Link>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Books</button>
                    </div>
                </div>
        </div>
    )
}