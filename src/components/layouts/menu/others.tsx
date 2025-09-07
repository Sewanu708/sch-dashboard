import { otherMenu } from "@/configs/menu";
import Image from "next/image";
import Link from "next/link";

export default function Others() {
    return (
        <div className="mb-2">
            <div className="w-full h-[1px] bg-gray-400 "/>
            <div className="flex flex-col px-4 ">
                {
                    otherMenu.map((item, i) => (
                        <Link
                            href={item.href}
                            key={i}
                            className="flex items-center justify-center lg:justify-start text-gray-500 py-2 gap-4"
                        >
                            <Image
                                src={item.icon}
                                alt=""
                                width={20}
                                height={20}
                            />
                            <span className="hidden lg:block text-sm">
                                {item.label}
                            </span>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}