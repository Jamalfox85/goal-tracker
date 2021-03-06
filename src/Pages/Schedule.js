import React from "react";
import "./Schedule.css";

const Schedule = ({ milestoneInformation }) => {
  // const goalLength = 12;
  // const d1 = new Date()
  // d1.setMonth(d1.getMonth()+ goalLength)

  const setMilestoneDate = (milestone) => {
    const milestoneDate = new Date();
    milestoneDate.setMonth(milestoneDate.getMonth() + milestone);
    return milestoneDate.toDateString();
  };
  const printWindow = () => {
    window.print();
  };

  const schedule = [
    {
      goal: milestoneInformation[4],
      milestone: 1,
      deadline: setMilestoneDate(1),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[5],
      milestone: 2,
      deadline: setMilestoneDate(2),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[1],
      milestone: 3,
      deadline: setMilestoneDate(3),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[6],
      milestone: 4,
      deadline: setMilestoneDate(4),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[7],
      milestone: 5,
      deadline: setMilestoneDate(5),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[2],
      milestone: 6,
      deadline: setMilestoneDate(6),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[8],
      milestone: 7,
      deadline: setMilestoneDate(7),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[9],
      milestone: 8,
      deadline: setMilestoneDate(8),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[3],
      milestone: 9,
      deadline: setMilestoneDate(9),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[10],
      milestone: 10,
      deadline: setMilestoneDate(10),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[11],
      milestone: 11,
      deadline: setMilestoneDate(11),
      completed: <input type="checkbox" />,
    },
    {
      goal: milestoneInformation[0],
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
          <tr className="table-header-wrapper">
            <th className="schedule-entry-step">Step</th>
            <th className="schedule-entry-deadline">Deadline</th>

            <th className="schedule-entry-milestone">Milestone</th>
            <th className="schedule-entry-checkbox">Completed?</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr className="scheduleEntry" key={index}>
              <td className="schedule-entry-step">
                {schedule[index].milestone}
              </td>
              <td className="schedule-entry-deadline">
                {schedule[index].deadline}
              </td>
              <td className="schedule-entry-milestone">
                {schedule[index].goal}
              </td>
              <td className="schedule-entry-checkbox">
                {schedule[index].completed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="print-schedule-bttn" onClick={printWindow}>
        Print Schedule
      </button>
    </div>
  );
};

export default Schedule;
