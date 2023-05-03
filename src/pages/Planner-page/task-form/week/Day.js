import ListMapper from '../List-mapper';


export default function Day(props) {
    let arr = props.tasks.task.filter(obj => obj.day === props.day).sort((a, b) => (a.time).localeCompare(b.time))

    return (
        <div key={props.day}>
             <p className='day-of-week'>{props.day}</p>
    <ul className='day-ul' >
        <ListMapper
            day={props.tasks.task.day}
            arr={arr}
        />
    </ul>
        </div>
    )
}