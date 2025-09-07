import Menu from '@/components/layouts/menu/menu'
import Others from '@/components/layouts/menu/others'
import Navbar from '@/components/layouts/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='h-screen flex'>
            {/* left */}
            <div className='xl:w-1/6 w-1/6 lg:w-[16%] md:w-[8%] flex flex-col '>

                <Link
                    href='/'
                    className='flex items-center justify-center lg:justify-start gap-2 p-4'>
                    <Image src='/logo.png' alt='logo' width={32} height={32} />

                    <span className='hidden lg:block'>SchoolLama</span>
                </Link>

                <Menu />

                <Others />

            </div>
            {/* right */}
            <div className='xl:w-5/6 w-5/6 lg:w-[84%] md:w-[92%] bg-[#F7F8FA] overflow-y-scroll flex flex-col'>
                <Navbar />
                {
                    children
                }
            </div>
        </div>
    )
}

export default DashboardLayout