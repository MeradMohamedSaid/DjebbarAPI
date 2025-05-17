import express from "express";
import { DateTime } from "luxon";

const app = express();

app.get("/", (req, res) => res.send("Djebbar API"));

app.get("/api/datetime", (req, res) => {
  const dt = DateTime.now().setZone("Africa/Algiers");

  const response = {
    year: dt.year,
    month: dt.month,
    day: dt.day,
    hour: dt.hour,
    minute: dt.minute,
    seconds: dt.second,
    milliSeconds: dt.millisecond,
    dateTime: dt.toISO({ includeOffset: false }),
    date: dt.toFormat("MM/dd/yyyy"),
    time: dt.toFormat("HH:mm"),
    timeZone: dt.zoneName,
    dayOfWeek: (dt.weekday + 4) % 7, // 👈 Monday = 6
    dstActive: dt.isInDST,
  };
  res.json(response);
});

export default app;
