'use client'
import Link from "next/link";
import Management from "./management";
import { LayoutDashboard } from "lucide-react";
import { useState } from "react";
import Communications from "./communications";
import Activities from "./activities";

export type Toggle = {
    m: boolean,
    a: boolean,
    c: boolean
}

function Menu() {

    const [closeFeats, setCloseFeats] = useState<Toggle>({
        m: false,
        a: false,
        c: false
    })


    const handleToggle = (feat: keyof Toggle) => {
        setCloseFeats(prev => {
            console.log('prev', prev)
            const update: Toggle = {
                m: false,
                a: false,
                c: false
            }

            Object.keys(prev).forEach(e => (
                update[e as keyof Toggle] = false
            ))
            update[feat] = !prev[feat]
            console.log(update)
            return update
        })

        // setTimeout(()=>console.log(closeFeats),1000)
    }

    return (
        <div className=" mt-4 text-sm lg:px-4 overflow-y-auto flex-1 ">
            <div className=" text-gray-400 lg:block hidden text-xs">GENERAL</div>
            <Link
                href={'/'}
                className="flex items-center mt-4  mb-2 justify-center  gap-2 lg:justify-start">
                <LayoutDashboard className="text-sm text-gray-500" width={20} height={20} />
                <span className="text-gray-500 lg:block hidden">
                    Home
                </span>
            </Link>


            <div className="mt-6 text-gray-400 lg:block hidden text-xs">FEATURES</div>
            {/* Managemnets */}
            <Management
                isOpen={closeFeats.m}
                toggle={handleToggle}
            />
            <Communications
                isOpen={closeFeats.c}
                toggle={handleToggle}
            />
            <Activities
                isOpen={closeFeats.a}
                toggle={handleToggle}
            />


        </div>
    )
}

export default Menu