import React from "react";
import { CSVLink } from "react-csv";
import styles from "../../styles/Home.module.css";
import { DateTime } from "luxon";
import { useTranslation } from "react-i18next";
import "../../src/Translation/i18n";

const CalendarExportButton = ({ events }) => {
  const { t } = useTranslation();
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

  if (events.length === 0) {
    return null;
  }

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
      <p>{t("export")}</p>
    </CSVLink>
  );
};

export default CalendarExportButton;
