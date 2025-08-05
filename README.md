# Bangla Calendar

<!-- ![Image Description](https://i.ibb.co/Y7hZzNYf/images-1.jpg) -->

A TypeScript-supported NPM package for displaying dates and times in Bangla (Bengali) format.

## Installation

You can install the package using npm:

```bash
npm i bengali-calendar
```

## Usage

### Importing the package

To use the `bangla-calendar` package, import it into your project:

```typescript
import {
  toBanglaDigits,
  toEnglishDigits,
  formatBanglaDate,
  formatBanglaTime,
  formatBanglaTime12,
  getCurrentBanglaDateTime,
  getBanglaWeekNumber,
  getBanglaMonthFromEnglish,
  getDayName,
  getEnglishMonthName,
  getBanglaMonthName,
  formatBanglaDateWithBanglaMonth,
  formatFullBanglaDateTime,
} from "bangla-calendar";
```

### Getting Bangla Date

- Pass a JavaScript Date object to `formatBanglaDate` to get the date in Bangla format:

```typescript
const banglaDate = formatBanglaDate(new Date());
// Output example: রবিবার, ১২ মার্চ ২০২৫
```

### Getting Bangla Time

- Use `formatBanglaTime` to format the time part of a Date object in Bangla digits:

```typescript
const banglaTime = formatBanglaTime(new Date());
// Output example: ১৪:৩০:১৫

// Without seconds:
const banglaTimeShort = formatBanglaTime(new Date(), false);
// Output example: ১৪:৩০
```

### Convert English digits to Bangla digits

- Convert any string or number containing English digits to Bangla digits using `toBanglaDigits`

```typescript
const banglaNumber = toBanglaDigits("1234567890");
// Output: ১২৩৪৫৬৭৮৯০
```

### Get current Bangla date and time together

- Use `getCurrentBanglaDateTime` to get both formatted date and time in Bangla as an object:

```typescript
const { banglaDate, banglaTime } = getCurrentBanglaDateTime();
console.log(banglaDate); // রবিবার, ১২ মার্চ ২০২৫
console.log(banglaTime); // ১৪:৩০:১৫
```

### Convert Bangla digits to English digits

```typescript
import { toEnglishDigits } from "bangla-calendar";

const engNumber = toEnglishDigits("১২৩৪৫৬৭৮৯০");
// Output: "1234567890"
```

### Get current Bangla date and time together

```typescript
import { formatBanglaTime12 } from "bangla-calendar";

const time12 = formatBanglaTime12(new Date());
// Output example: ২:৩০:১৫ অপরাহ্ন

const time12NoSeconds = formatBanglaTime12(new Date(), false);
// Output example: ২:৩০ অপরাহ্ন
```

### Get Bangla week number of the year

```typescript
import { getBanglaWeekNumber } from "bangla-calendar";

const weekNum = getBanglaWeekNumber(new Date());
console.log(weekNum); // Output example: ১৫
```

- Use `getCurrentBanglaDateTime` to get both formatted date and time in Bangla as an object:

```typescript
const { banglaDate, banglaTime } = getCurrentBanglaDateTime();
console.log(banglaDate); // রবিবার, ১২ মার্চ ২০২৫
console.log(banglaTime); // ১৪:৩০:১৫
```

### Get Bangla Month from English Date

- Convert a Gregorian date's English month to approximate Bangla calendar month name.

```typescript
import { getBanglaMonthFromEnglish } from "bangla-calendar";

const banglaMonth = getBanglaMonthFromEnglish(new Date());
// Output example: 'চৈত্র' (depending on current month)
```

### Get Day Name (Bangla)

- Get the Bangla name of the weekday for a given date

```typescript
import { getDayName } from "bangla-calendar";

const dayName = getDayName(new Date());
// Output example: 'রবিবার'
```

### Get English Month Name (Bangla Digits)

- Get the English (Gregorian) month name in Bangla script.

```typescript
import { getEnglishMonthName } from "bangla-calendar";

const engMonthName = getEnglishMonthName(new Date());
// Output example: 'মার্চ'
```

### Get Bangla Month Name (Bengali Calendar)

- Get the Bangla calendar month name from a given Date.

```typescript
import { getBanglaMonthName } from "bangla-calendar";

const banglaCalMonth = getBanglaMonthName(new Date());
// Output example: 'ফাল্গুন'
```

### Format Bangla Date with Bangla Month

- Returns Bangla date string showing only day (in Bangla digits) and Bengali calendar month.

```typescript
import { formatBanglaDateWithBanglaMonth } from "bangla-calendar";

const formattedDate = formatBanglaDateWithBanglaMonth(new Date());
// Output example: '১২ ফাল্গুন'
```

### Format Full Bangla DateTime

- Returns a full date-time string including day name, Bangla date, Bengali calendar month, year and time.

```typescript
import { formatFullBanglaDateTime } from "bangla-calendar";

const fullDateTime = formatFullBanglaDateTime(new Date());
// Output example: 'রবিবার, ১২ ফাল্গুন ২০২৫, সময়: ১৪:৩০:১৫'
```

## Features

- Converts Gregorian calendar dates to Bangla calendar format.
- Supports Bangla month names, day names, and numbers.
- Displays time in Bangla format with AM/PM.
- TypeScript support with type definitions.
- ES Module support for modern JavaScript applications.

## Development

To build the package, run:

```bash
npm run build
```

To run tests:

```bash
npm test
```

## License

This project is licensed under the MIT License.
