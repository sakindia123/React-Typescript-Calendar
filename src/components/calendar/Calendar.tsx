import { differenceInDays, endOfMonth, startOfMonth, format } from "date-fns";
import Cell from "./Cell"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

interface Props {
    date?: Date;
}

const Calendar: React.FC<Props> = ({ date = new Date() }) => {
    const startDate = startOfMonth(date)
    const endDate = endOfMonth(date)
    const numOfDays = differenceInDays(endDate, startDate) + 1
    const emptyDays = startDate.getDay()
    const endDays = 6 - endDate.getDay()

    return (
        <div id="" className='w-[400px] border'>
            <div className="grid grid-cols-7 items-center justify-center text-center">
                <Cell className='font-bold uppercase text-xm col-span-7'>{format(date, 'LLLL yyyy')}</Cell>
                {days.map((day) => (
                    <Cell className="font-bold uppercase text-xs" key={day}>{day}</Cell>
                ))}

                {Array.from({ length: emptyDays }).map((_, index) => (
                    <Cell key={index} />
                ))}

                {Array.from({ length: numOfDays }).map((_, index) => {
                    const dates = index + 1
                    const selectDate = dates === date.getDate()
                    return (
                        <Cell key={dates} highlight={selectDate}>{dates}</Cell>
                    )
                })}

                {Array.from({ length: endDays }).map((_, index) => (
                    <Cell key={index} />
                ))}
            </div>
        </div>
    )
}

export default Calendar