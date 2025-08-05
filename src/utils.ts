// const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

// const banglaMonths = [
//   'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
//   'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
// ];

// const banglaWeekdays = [
//   'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
// ];

// const engDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// export function toBanglaDigits(input: string | number): string {
//   return input.toString().split('').map(char => {
//     if (char >= '0' && char <= '9') {
//       return banglaDigits[parseInt(char)];
//     }
//     return char;
//   }).join('');
// }

// export function toEnglishDigits(input: string): string {
//   return input.split('').map(char => {
//     const index = banglaDigits.indexOf(char);
//     if (index !== -1) return engDigits[index];
//     return char;
//   }).join('');
// }

// export function formatBanglaDate(date: Date): string {
//   const dayName = banglaWeekdays[date.getDay()];
//   const day = toBanglaDigits(date.getDate());
//   const month = banglaMonths[date.getMonth()];
//   const year = toBanglaDigits(date.getFullYear());
//   return `${dayName}, ${day} ${month} ${year}`;
// }

// export function formatBanglaTime(date: Date, includeSeconds = true): string {
//   const hours = toBanglaDigits(date.getHours());
//   const minutes = toBanglaDigits(date.getMinutes());
//   const seconds = toBanglaDigits(date.getSeconds());
//   return includeSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
// }

// export function formatBanglaTime12(date: Date, includeSeconds = true): string {
//   let hours = date.getHours();
//   const minutes = toBanglaDigits(date.getMinutes());
//   const seconds = toBanglaDigits(date.getSeconds());
//   const ampm = hours >= 12 ? 'অপরাহ্ন' : 'পুর্বাহ্ন';
//   hours = hours % 12;
//   if (hours === 0) hours = 12;
//   const banglaHours = toBanglaDigits(hours);
//   return includeSeconds
//     ? `${banglaHours}:${minutes}:${seconds} ${ampm}`
//     : `${banglaHours}:${minutes} ${ampm}`;
// }

// export function getCurrentBanglaDateTime(): { banglaDate: string; banglaTime: string } {
//   const now = new Date();
//   return {
//     banglaDate: formatBanglaDate(now),
//     banglaTime: formatBanglaTime(now),
//   };
// }

// export function getBanglaWeekNumber(date: Date): string {
//   const oneJan = new Date(date.getFullYear(), 0, 1);
//   const numberOfDays = Math.floor((date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
//   const weekNumber = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
//   return toBanglaDigits(weekNumber);
// }

const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

const banglaMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

const banglaWeekdays = [
  "রবিবার",
  "সোমবার",
  "মঙ্গলবার",
  "বুধবার",
  "বৃহস্পতিবার",
  "শুক্রবার",
  "শনিবার",
];

const banglaMonthsBengaliCalendar = [
  "বৈশাখ",
  "জ্যৈষ্ঠ",
  "আষাঢ়",
  "শ্রাবণ",
  "ভাদ্র",
  "আশ্বিন",
  "কার্তিক",
  "অগ্রহায়ণ",
  "পৌষ",
  "মাঘ",
  "ফাল্গুন",
  "চৈত্র",
];

const engDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function toBanglaDigits(input: string | number): string {
  return input
    .toString()
    .split("")
    .map((char) => {
      if (char >= "0" && char <= "9") {
        return banglaDigits[parseInt(char)];
      }
      return char;
    })
    .join("");
}

export function toEnglishDigits(input: string): string {
  return input
    .split("")
    .map((char) => {
      const index = banglaDigits.indexOf(char);
      if (index !== -1) return engDigits[index];
      return char;
    })
    .join("");
}

export function getBanglaDate(date: Date): {
  day: string;
  month: string;
  year: string;
} {
  const banglaYearStart = new Date(date.getFullYear(), 3, 14);
  let banglaYear = date.getFullYear() - 593;

  if (date < banglaYearStart) {
    banglaYear--;
    banglaYearStart.setFullYear(banglaYearStart.getFullYear() - 1);
  }

  const diffDays = Math.floor(
    (date.getTime() - banglaYearStart.getTime()) / (1000 * 60 * 60 * 24)
  );

  const banglaMonthDays = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29, 30];

  let monthIndex = 0;
  let remainingDays = diffDays;
  while (remainingDays >= banglaMonthDays[monthIndex]) {
    remainingDays -= banglaMonthDays[monthIndex];
    monthIndex++;
  }
  const banglaDay = toBanglaDigits(remainingDays + 1);
  const banglaMonth = banglaMonthsBengaliCalendar[monthIndex % 12];
  const banglaYearStr = toBanglaDigits(banglaYear);

  return { day: banglaDay, month: banglaMonth, year: banglaYearStr };
}

export function formatBanglaDate(date: Date): string {
  const dayName = banglaWeekdays[date.getDay()];
  const { day, month, year } = getBanglaDate(date);
  return `${dayName}, ${day} ${month} ${year}`;
}

export function formatBanglaTime(date: Date, includeSeconds = true): string {
  const hours = toBanglaDigits(date.getHours());
  const minutes = toBanglaDigits(date.getMinutes());
  const seconds = toBanglaDigits(date.getSeconds());
  return includeSeconds
    ? `${hours}:${minutes}:${seconds}`
    : `${hours}:${minutes}`;
}

export function formatBanglaTime12(date: Date, includeSeconds = true): string {
  let hours = date.getHours();
  const minutes = toBanglaDigits(date.getMinutes());
  const seconds = toBanglaDigits(date.getSeconds());
  const ampm = hours >= 12 ? "অপরাহ্ন" : "পুর্বাহ্ন";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const banglaHours = toBanglaDigits(hours);
  return includeSeconds
    ? `${banglaHours}:${minutes}:${seconds} ${ampm}`
    : `${banglaHours}:${minutes} ${ampm}`;
}

export function getCurrentBanglaDateTime(): {
  banglaDate: string;
  banglaTime: string;
} {
  const now = new Date();
  return {
    banglaDate: formatBanglaDate(now),
    banglaTime: formatBanglaTime(now),
  };
}

export function getBanglaWeekNumber(date: Date): string {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor(
    (date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
  );
  const weekNumber = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
  return toBanglaDigits(weekNumber);
}

export function getBanglaMonthFromEnglish(date: Date): string {
  const monthIndex = date.getMonth();
  const mapping: Record<number, number> = {
    0: 8,
    1: 9,
    2: 10,
    3: 11,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
    8: 4,
    9: 5,
    10: 6,
    11: 7,
  };

  return banglaMonthsBengaliCalendar[mapping[monthIndex]];
}

export function getDayName(date: Date): string {
  return banglaWeekdays[date.getDay()];
}

export function getEnglishMonthName(date: Date): string {
  const englishMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return englishMonths[date.getMonth()];
}

export function getBanglaMonthName(date: Date): string {
  return getBanglaDate(date).month;
}

export function formatBanglaDateWithBanglaMonth(date: Date): string {
  const { day, month } = getBanglaDate(date);
  return `${day} ${month}`;
}

export function formatFullBanglaDateTime(
  date: Date,
  includeSeconds = true
): string {
  const dayName = banglaWeekdays[date.getDay()];
  const { day, month, year } = getBanglaDate(date);
  const time = formatBanglaTime(date, includeSeconds);
  return `${dayName}, ${day} ${month} ${year}, সময়: ${time}`;
}

export function getBanglEnglishFullDateTimeInfo(date: Date = new Date()) {
  const banglaDateInfo = getBanglaDate(date);
  const banglaDayName = banglaWeekdays[date.getDay()];
  const banglaTime24 = formatBanglaTime(date);
  const banglaTime12 = formatBanglaTime12(date);

  const englishDay = date.getDate();
  const englishMonthName = getEnglishMonthName(date);
  const englishDayName = date.toLocaleString("en-US", { weekday: "long" });
  const englishYear = date.getFullYear();
  const englishTime24 = date.toLocaleTimeString("en-GB");
  const englishTime12 = date.toLocaleTimeString("en-US");

  return {
    bangla: {
      day: banglaDateInfo.day,
      month: banglaDateInfo.month,
      year: banglaDateInfo.year,
      weekday: banglaDayName,
      time24: banglaTime24,
      time12: banglaTime12,
    },
    english: {
      day: englishDay,
      month: englishMonthName,
      year: englishYear,
      weekday: englishDayName,
      time24: englishTime24,
      time12: englishTime12,
    },
  };
}

export function formatFullDateTimeDual(
  date: Date = new Date(),
  includeSeconds = false
): string {
  const banglaDateInfo = getBanglaDate(date);
  const banglaDayName = banglaWeekdays[date.getDay()];
  const banglaHours = toBanglaDigits(date.getHours());
  const banglaMinutes = toBanglaDigits(date.getMinutes());
  const banglaTime = includeSeconds
    ? `${banglaHours}:${toBanglaDigits(date.getMinutes())}:${toBanglaDigits(
        date.getSeconds()
      )}`
    : `${banglaHours}:${banglaMinutes}`;

  const englishDayName = date.toLocaleString("en-US", { weekday: "long" });
  const englishDay = date.getDate();
  const englishMonthName = getEnglishMonthName(date);
  const englishYear = date.getFullYear();
  const englishHours = date.getHours().toString().padStart(2, "0");
  const englishMinutes = date.getMinutes().toString().padStart(2, "0");
  const englishTime = includeSeconds
    ? `${englishHours}:${date.getMinutes().toString().padStart(2, "0")}:${date
        .getSeconds()
        .toString()
        .padStart(2, "0")}`
    : `${englishHours}:${englishMinutes}`;

  return `${banglaDayName}, ${banglaDateInfo.day} ${banglaDateInfo.month} ${banglaDateInfo.year} (${banglaTime}) | ${englishDayName}, ${englishDay} ${englishMonthName} ${englishYear} (${englishTime})`;
}
