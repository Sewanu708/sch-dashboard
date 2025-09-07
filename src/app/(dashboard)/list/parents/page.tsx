import Pagination from '@/components/pagination'
import Table from '@/components/table'
import TableSearch from '@/components/table-search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { parentsData, role, teachersData } from '../../../../../lib/data'
import FormModal from '@/components/form-modal'

const columns = [
    {
        header: "Info", accessor: "info"
    }, {
        header: "Student Name(s)", accessor: "students", className: "hidden md:table-cell "
    }, {
        header: "Phone", accessor: "phone", className: "hidden md:table-cell"
    }, {
        header: "Address", accessor: "address", className: "hidden md:table-cell"
    }, {
        header: "Actions", accessor: "actions", className: "hidden md:table-cell"
    },
]

type Parent = {
    id: number;
    name: string;
    teacherId: string;
    email?: string;
    students: string[];
    address: string;
    phone: string;
}

function ParentListPage() {

    const renderRow = (item: Parent) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>

                <div className='flex flex-col'>
                    <h3 className='font-semibold'>
                        {item.name}
                    </h3>
                    <p className='text-xs text-gray-500'>{item?.email}</p>
                </div>
            </td>
            <td className='hidden md:table-cell'>{item.students.join(',')}</td>
            <td className='hidden md:table-cell'>{item.phone}</td>
            <td className='hidden md:table-cell'>{item.address}</td>
            <td>
                <div className='flex items-center gap-2'>
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                            <Image src='/edit.png' width={16} height={16} alt='' />
                        </button>
                    </Link>
                    {
                        role === 'admin' && <>
                         <FormModal type='update' data={item} table='parent' />

                          <FormModal type='delete' table='parent' id={item.id} />
                        </>

                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* top */}
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>
                    All Parents
                </h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch />
                    <div className='flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src="/filter.png" alt='' width={14} height={14} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src="/sort.png" alt='' width={14} height={14} />
                        </button>
                        {role === 'admin' &&  <FormModal type='create'  table='parent' />}
                        
                    </div>
                </div>
            </div>

            {/* list */}

            <Table columns={columns} renderRow={renderRow} data={parentsData} />


            {/* pagination */}

            <Pagination />

        </div>
    )
}

export default ParentListPage