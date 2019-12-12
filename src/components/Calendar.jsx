import React from "react";
import moment from "moment";

const Calendar = props => {
  let state = {
    dateObject: moment()
  };

  const weekDayShortName = moment.weekdaysShort().map(day => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  const firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");
    console.log(firstDay);
    return firstDay;
  };
  let blanks = [];
  for (let i = 0; i < this.firstDayOfMonth(); i++) {
    blanks.push(<td className="calendar-day empty">{""}</td>);
  }
  let daysInMonth = [];
  for (let j = 1; j <= this.daysInMonth(); j++) {
    daysInMonth.push(
      <td key={j} className="calendar-day">
        {j}
      </td>
    );
  }
  var totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });
  daysInMonth = rows.map((j, i) => {
    return <tr>{j}</tr>;
  });
  return (
    <>
      <table className="calendar-day">
        <th>
          <tr>{weekDayShortName}</tr>
        </th>
        <tbody>daysInMonth</tbody>
      </table>
    </>
  );
};

export default Calendar;
