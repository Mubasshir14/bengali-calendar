const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

const banglaMonths = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

const banglaWeekdays = [
  'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
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
