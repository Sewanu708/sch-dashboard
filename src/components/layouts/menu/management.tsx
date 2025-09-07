import React from 'react'
import { managementMenu, } from "@/configs/menu";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, FolderKanban } from 'lucide-react';
import { Toggle } from './menu';
import { role } from '../../../../lib/data';

export default function Management(
    { toggle, isOpen }:
        {
            toggle: (value: keyof Toggle) => void,
            isOpen: boolean
        }) {
    return (
        <div>
            <div className="flex items-center justify-center cursor-pointer lg:justify-between" onClick={() => {
                toggle('m')
            }}>
                <div
                    className="flex items-center mt-4  mb-2 justify-center  gap-2 lg:justify-start ">
                    <FolderKanban
                        className="text-sm text-gray-500"
                        width={20}
                        height={20} />
                    <span className="text-gray-500 lg:block hidden">
                        Management
                    </span>
                </div>
                <ChevronDown
                    className={`text-sm lg:block hidden text-gray-500 ${isOpen && 'rotate-180'}`}
                    width={20}
                    height={20}
                />

            </div>
            {isOpen &&
                managementMenu.map((item, i) => {
                    if (item.visible.includes(role)) return <Link
                        href={item.href}
                        key={i}
                        className="lg:flex hidden items-center justify-center lg:justify-start text-gray-500 py-2 gap-4 px-4 md:px-2 rounded-md hover:bg-lamaSkyLight"
                    >
                        <Image
                            src={item.icon}
                            alt=""
                            width={20}
                            height={20}
                        />
                        <span className="hidden lg:block">
                            {item.label}
                        </span>
                    </Link>
                })

            }
        </div>

    )


}