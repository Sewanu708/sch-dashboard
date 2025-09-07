'use client'

import Image from "next/image";
import { useState } from "react";

const FormModal = ({
    table,
    type,
    data,
    id,
}: {
    table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignmbent"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}) => {
    const size = type === "create" ? "W-8 h-8" : "w-7 h-7"
    const bgColor = type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple";


    const [open, setOpen] = useState(false)
    return <>
        <button
            className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={() => setOpen(true)}
        >
            <Image
                src={`/${type}.png`}
                alt=""
                width={16}
                height={16}
            />
        </button>


        {/* {
            open && 
        } */}
    </>
}

export default FormModal