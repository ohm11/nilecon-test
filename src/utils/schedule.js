// Pure helpers for turning a start/end schedule into "what's on right now".
// No component state lives here — screens decide how often to recompute
// (see the useNow hook) so this stays easy to unit test.

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export const STATUS = {
  CURRENT: "current",
  PAST: "past",
  UPCOMING: "upcoming",
};

const STATUS_LABEL = {
  [STATUS.CURRENT]: "กำลังรับชม",
  [STATUS.PAST]: "ออกอากาศแล้ว",
  [STATUS.UPCOMING]: "รายการถัดไป",
};

/**
 * Attach a live on-air status (+ display label + formatted time range)
 * to every item in a schedule, based on the given `now`.
 * Handles schedules that cross midnight (end <= start) too.
 */
export function withLiveStatus(schedule, now = new Date()) {
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  return schedule.map((item) => {
    const start = toMinutes(item.startTime);
    let end = toMinutes(item.endTime);
    if (end <= start) end += 24 * 60; // crosses midnight

    const isOnAir = nowMinutes >= start && nowMinutes < end;
    const status = isOnAir ? STATUS.CURRENT : nowMinutes >= end ? STATUS.PAST : STATUS.UPCOMING;

    return {
      ...item,
      status,
      statusLabel: STATUS_LABEL[status],
      timeLabel: `${item.startTime} น. - ${item.endTime} น.`,
    };
  });
}

/** The single item currently on air, if any. */
export function getCurrentProgram(schedule, now = new Date()) {
  return withLiveStatus(schedule, now).find((item) => item.status === STATUS.CURRENT) ?? null;
}

/** "วันอังคารที่ 07 กรกฎาคม 2569" — Thai weekday + Buddhist-era date, no manual prefixing. */
export function formatThaiDate(now = new Date()) {
  return now.toLocaleDateString("th-TH-u-ca-buddhist", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
