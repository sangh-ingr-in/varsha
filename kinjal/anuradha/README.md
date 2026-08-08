# varsha
वर्षा


# Language Files Template

Create new language files in this directory following this template:

## kinjal/anuradha/sejal/punam/xx.js` - [Language Name]

```javascript
// languages/xx.js - [Language Name]
export const MONTH_NAMES = [
  'Month1', 'Month2', 'Month3', 'Month4', 'Month5', 'Month6',
  'Month7', 'Month8', 'Month9', 'Month10', 'Month11', 'Month12'
];

export const DAY_NAMES = [
  'Day1', 'Day2', 'Day3', 'Day4',
  'Day5', 'Day6', 'Day7'
];

export const SHORT_MONTH_NAMES = MONTH_NAMES.map(m => m.substring(0, 3));
export const SHORT_DAY_NAMES = DAY_NAMES.map(d => d.substring(0, 3));

export const LOCALE = 'xx-XX';
export const LANGUAGE = 'xx';
