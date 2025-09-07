'use client'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { eventsData } from '../../lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const calendarEvents = eventsData.map(event => ({
  title: `${event.title} (${event.class})`,
  start: new Date(`${event.date}T${event.startTime}`),
  end: new Date(`${event.date}T${event.endTime}`)
}))

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK)

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView)
  }

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "98%" }}
      views={["work_week", "day"]}
      view={view}
      onView={handleOnChangeView}
      min={new Date(0, 0, 0, 8, 0, 0)}
      max={new Date(0, 0, 0, 20, 0, 0)}
    />
  )
}

export default BigCalendar
