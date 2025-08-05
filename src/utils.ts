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

const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

const banglaMonths = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

const banglaWeekdays = [
  'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
];

// বাংলা মাস (বাংলা ক্যালেন্ডার অনুযায়ী)
const banglaMonthsBengaliCalendar = [
  'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
  'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
];

const engDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function toBanglaDigits(input: string | number): string {
  return input.toString().split('').map(char => {
    if (char >= '0' && char <= '9') {
      return banglaDigits[parseInt(char)];
    }
    return char;
  }).join('');
}

export function toEnglishDigits(input: string): string {
  return input.split('').map(char => {
    const index = banglaDigits.indexOf(char);
    if (index !== -1) return engDigits[index];
    return char;
  }).join('');
}

export function formatBanglaDate(date: Date): string {
  const dayName = banglaWeekdays[date.getDay()];
  const day = toBanglaDigits(date.getDate());
  const month = banglaMonths[date.getMonth()];
  const year = toBanglaDigits(date.getFullYear());
  return `${dayName}, ${day} ${month} ${year}`;
}

export function formatBanglaTime(date: Date, includeSeconds = true): string {
  const hours = toBanglaDigits(date.getHours());
  const minutes = toBanglaDigits(date.getMinutes());
  const seconds = toBanglaDigits(date.getSeconds());
  return includeSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
}

export function formatBanglaTime12(date: Date, includeSeconds = true): string {
  let hours = date.getHours();
  const minutes = toBanglaDigits(date.getMinutes());
  const seconds = toBanglaDigits(date.getSeconds());
  const ampm = hours >= 12 ? 'অপরাহ্ন' : 'পুর্বাহ্ন';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const banglaHours = toBanglaDigits(hours);
  return includeSeconds
    ? `${banglaHours}:${minutes}:${seconds} ${ampm}`
    : `${banglaHours}:${minutes} ${ampm}`;
}

export function getCurrentBanglaDateTime(): { banglaDate: string; banglaTime: string } {
  const now = new Date();
  return {
    banglaDate: formatBanglaDate(now),
    banglaTime: formatBanglaTime(now),
  };
}

export function getBanglaWeekNumber(date: Date): string {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
  return toBanglaDigits(weekNumber);
}

// বাংলা মাস বের করার জন্য (English month থেকে Bengali calendar month হিসেবে approximation)
// এখানে একটি সিম্পল ম্যাপ দেওয়া হয়েছে (১:১ না হলেও প্রাথমিক হিসেবে কাজ করবে)
export function getBanglaMonthFromEnglish(date: Date): string {
  // ইংরেজি মাসের ইনডেক্স (0-11)
  const monthIndex = date.getMonth();

  // সিম্পল ম্যাপ (আপনার প্রয়োজনে আরও জটিল ক্যালকুলেশন দিতে পারেন)
  // ইংরেজি মাস অনুযায়ী বাংলা মাসের ইনডেক্স (সাধারণ অনুমান)
  const mapping: Record<number, number> = {
    0: 8,  // জানুয়ারি -> পৌষ
    1: 9,  // ফেব্রুয়ারি -> মাঘ
    2: 10, // মার্চ -> ফাল্গুন
    3: 11, // এপ্রিল -> চৈত্র
    4: 0,  // মে -> বৈশাখ
    5: 1,  // জুন -> জ্যৈষ্ঠ
    6: 2,  // জুলাই -> আষাঢ়
    7: 3,  // আগস্ট -> শ্রাবণ
    8: 4,  // সেপ্টেম্বর -> ভাদ্র
    9: 5,  // অক্টোবর -> আশ্বিন
    10: 6, // নভেম্বর -> কার্তিক
    11: 7  // ডিসেম্বর -> অগ্রহায়ণ
  };

  return banglaMonthsBengaliCalendar[mapping[monthIndex]];
}

// ফাংশন: শুধু দিন এর নাম দেখাবে
export function getDayName(date: Date): string {
  return banglaWeekdays[date.getDay()];
}

// ফাংশন: শুধু ইংরেজি মাসের নাম দেখাবে
export function getEnglishMonthName(date: Date): string {
  return banglaMonths[date.getMonth()];
}

// ফাংশন: শুধু বাংলা মাসের নাম দেখাবে (বাংলা ক্যালেন্ডার)
export function getBanglaMonthName(date: Date): string {
  return getBanglaMonthFromEnglish(date);
}

// ফাংশন: বাংলা মাস + বাংলা তারিখ দেখাবে
export function formatBanglaDateWithBanglaMonth(date: Date): string {
  const day = toBanglaDigits(date.getDate());
  const banglaMonth = getBanglaMonthFromEnglish(date);
  return `${day} ${banglaMonth}`;
}

// ফাংশন: বাংলা মাস, দিন নাম, তারিখ, মাস, সাল, সময় সব একসাথে দেখাবে
export function formatFullBanglaDateTime(date: Date, includeSeconds = true): string {
  const dayName = getDayName(date);
  const day = toBanglaDigits(date.getDate());
  const banglaMonth = getBanglaMonthFromEnglish(date);
  const year = toBanglaDigits(date.getFullYear());
  const time = formatBanglaTime(date, includeSeconds);
  return `${dayName}, ${day} ${banglaMonth} ${year}, সময়: ${time}`;
}
