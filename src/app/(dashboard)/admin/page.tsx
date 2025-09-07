import Announcement from '@/components/announcement'
import AttendanceChart from '@/components/charts/attendance-chart'
import CountChart from '@/components/charts/count-chart'
import FinanceChart from '@/components/charts/finance-chart'
import EventCalendar from '@/components/event-calendar'
import UserCard from '@/components/user-card'
import React from 'react'

export default function AdminPage() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* user cards */}
        <div className='flex gap-4 justify-between flex-wrap '>
          <UserCard type='student' />
          <UserCard type='teacher' />
          <UserCard type='parent' />
          <UserCard type='staff' />
        </div>

        {/* middle chart */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* count chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* attendance chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>

        {/* bottom chart */}
        <div className='w-full h-[500px]'>
          <FinanceChart />
        </div>
      </div>

      {/* right */}

      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        <Announcement/>
      </div>
    </div>
  )
}
