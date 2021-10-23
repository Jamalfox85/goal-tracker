import React from "react";
import "./Schedule.css";

const Schedule = () => {
  // const goalLength = 12;
  // const d1 = new Date()
  // d1.setMonth(d1.getMonth()+ goalLength)

  const setMilestoneDate = (milestone) => {
    const milestoneDate = new Date();
    milestoneDate.setMonth(milestoneDate.getMonth() + milestone);
    return milestoneDate.toDateString();
  };

  const schedule = [
    {
      goal: "Run more",
      milestone: 1,
      deadline: setMilestoneDate(1),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Read more",
      milestone: 2,
      deadline: setMilestoneDate(2),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Run more",
      milestone: 3,
      deadline: setMilestoneDate(3),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Run more",
      milestone: 4,
      deadline: setMilestoneDate(4),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Run more",
      milestone: 5,
      deadline: setMilestoneDate(5),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Read more",
      milestone: 6,
      deadline: setMilestoneDate(6),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Run more",
      milestone: 7,
      deadline: setMilestoneDate(7),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Run more",
      milestone: 8,
      deadline: setMilestoneDate(8),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Run more",
      milestone: 9,
      deadline: setMilestoneDate(9),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Read more",
      milestone: 10,
      deadline: setMilestoneDate(10),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Run more",
      milestone: 11,
      deadline: setMilestoneDate(11),
      completed: <input type="checkbox" />,
    },
    {
      goal: "Run more",
      milestone: 12,
      deadline: setMilestoneDate(12),
      completed: <input type="checkbox" />,
    },
  ];

  return (
    <div className="schedule-wrapper">
      <div className="schedule-header">
        <h6 className="h6-schedule-header">Roadmap</h6>
        <h1>This is Your Goal</h1>
      </div>
      <table className="schedule-main">
        <thead>
          <tr>
            <th>Step</th>
            <th>Deadline</th>

            <th>Milestone</th>
            <th>Completed?</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr className="scheduleEntry" key={index}>
              <td>{schedule[index].milestone}</td>
              <td className="schedule-deadline">{schedule[index].deadline}</td>
              <td>{schedule[index].item}</td>
              <td>{schedule[index].completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
