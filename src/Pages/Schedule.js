import React from 'react'

const Schedule = () => {

    const schedule = [

        {
            goal: "Run more",
            deadline: "December 31st",
            completed: <input type="checkbox"/>
        },
        {
            goal: "Read more",
            deadline: "December 21st",
            completed: <input type="checkbox"/>
        },
        {
            goal: "Run more",
            deadline: "December 31st",
            completed: <input type="checkbox"/>
        }

    ]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Deadline</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((item, index) => (
                        <tr>
                            <td>{schedule[index].goal}</td>
                            <td>{schedule[index].deadline}</td>
                            <td>{schedule[index].completed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Schedule
