import React from "react";
import { CSVLink } from "react-csv";
import styles from "../../styles/Home.module.css";
import { DateTime } from "luxon";

const CalendarExportButton = ({ events }) => {
  const headers = [
    { label: "Subject", key: "title" },
    { label: "Start Date", key: "start_date" },
    { label: "Start Time", key: "start_time" },
    { label: "End Date", key: "end_date" },
    { label: "End Time", key: "end_time" },
  ];

  const csvData = events.map(({ title, start, end }) => ({
    title,
    start_date: DateTime.fromJSDate(start).toISODate(),
    start_time: DateTime.fromJSDate(start).toISOTime(),
    end_date: DateTime.fromJSDate(end).toISODate(),
    end_time: DateTime.fromJSDate(end).toISOTime(),
  }));

  return (
    <CSVLink
      data={csvData}
      headers={headers}
      filename={"calendar.csv"}
      className={styles.loginbutton}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <p>Export Calendar</p>
    </CSVLink>
  );
};

export default CalendarExportButton;
