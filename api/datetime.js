// api/datetime.js

import { DateTime } from "luxon";

export default function handler(req, res) {
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
    dayOfWeek: dt.weekdayLong,
    dstActive: dt.isInDST,
  };

  res.status(200).json(response);
}
