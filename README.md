# 📄 Language JSON Structure Documentation

## File Naming Convention
```
{language-code}.json
```
**Examples:** `sr.json`, `sn.json`, `gu.json`, `hi.json`, `fr.json`, `es.json`, `de.json`, `ja.json`

---

## 📋 Required Fields (Mandatory)

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **`LANGUAGE`** | `string` | Language code (ISO 639-1) | `"sr"`, `"sn"`, `"gu"` |
| **`LOCALE`** | `string` | Locale identifier (BCP 47) | `"sr-ingr.in"`, `"sn-IN"`, `"gu-IN"` |
| **`MONTH_NAMES`** | `string[]` | Full month names (12 items) | `["January", "February", ...]` |
| **`DAY_NAMES`** | `string[]` | Full day names (7 items, Sunday first) | `["Sunday", "Monday", ...]` |

---

## 📌 Optional Fields (Recommended)

| Field | Type | Description | Example | Behavior if missing |
|-------|------|-------------|---------|---------------------|
| **`SHORT_MONTH_NAMES`** | `string[]` | Abbreviated month names (3-4 chars, 12 items) | `["Jan", "Feb", ...]` | Auto-generated from `MONTH_NAMES` (first 3 chars) |
| **`SHORT_DAY_NAMES`** | `string[]` | Abbreviated day names (2-4 chars, 7 items) | `["Sun", "Mon", ...]` | Auto-generated from `DAY_NAMES` (first 3 chars) |
| **`SANKHYA_NUMBERS`** | `string[]` | Localized digit characters (0-9, 10 items) | `["०","१","२",...]` or `["0","1","2",...]` | Falls back to English digits `["0","1",...]` |

---

## 📝 Optional Fields (Metadata)

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **`create`** | `string` | Creator/maintainer name | `"author"` |
| **`contributor`** | `string` | Contributor list | `"contributors names"` |
| **`version`** | `string` | Version number | `"1.0.0"` |
| **`description`** | `string` | Language description | `"sr (ingr.in) localization"` |

---

## ✅ Valid JSON Structure

```json
{
  // ====== MANDATORY FIELDS ======
  "LANGUAGE": "sr",
  "LOCALE": "sr-ingr.in",
  
  "MONTH_NAMES": [
  "गौरी", "उर्वशी", "मरीचिः", "अरुन्धती",
  "मेनका", "ध्रुव", "पुलस्त्य", "अगस्त्य",
  "सप्तर्षि", "अपर्णा", "आर्या", "विश्वाची"
  ],
  "DAY_NAMES": [
  "आदित्यवासरः", "चंन्द्रिकावासरः", 
  "महेशंवासरः", "बुधवासरः", "बृहस्पतिवासरः",
  "भार्गववासरः", "शैनेयंवासरः"
  ],
  // ====== OPTIONAL FIELDS ======
  "SHORT_DAY_NAMES": [
  "आदित्यः", "चंन्द्रिकाः",
  "महेशंः", "बुध्धंः", "बृहस्पतिः", 
  "भार्गवः", "शैनेयंः"
  ],
  // ====== RECOMMENDED FIELDS ======
  "SANKHYA_NUMBERS": [
  "०","१","२","३","४",
  "५","६","७","८","९"
  ],
  // ====== OPTIONAL METADATA ======
  "create": "author",
  "contributor": "contributors names"
}
```

---

## 📖 Language-Specific Examples

### shruti ( suru - sr - suru)
```json
{
  "LANGUAGE": "sr",
  "LOCALE": "sr-ingr.in",
  "MONTH_NAMES": ["गौरी", "उर्वशी", "मरीचिः", "अरुन्धती", "मेनका", "ध्रुव", "पुलस्त्य", "अगस्त्य", "सप्तर्षि", "अपर्णा", "आर्या", "विश्वाची"],
  "DAY_NAMES": ["आदित्यवासरः", "चंन्द्रिकावासरः", "महेशंवासरः", "बुधवासरः", "बृहस्पतिवासरः", "भार्गववासरः", "शैनेयंवासरः"],
  "SHORT_DAY_NAMES": ["आदित्यः", "चंन्द्रिकाः", "महेशंः", "बुध्धंः", "बृहस्पतिः", "भार्गवः", "शैनेयंः"],
  "SANKHYA_NUMBERS": ["०","१","२","३","४","५","६","७","८","९"]
}
```
### संस्कृत (Sanskrit - sn)
```json
{
  "LANGUAGE": "sn",
  "LOCALE": "sa-IN",
  "MONTH_NAMES": ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
  "SHORT_MONTH_NAMES": ["जन", "फर", "मार", "अप्र", "मई", "जून", "जुल", "अग", "सित", "अक्ट", "नव", "दिस"],
  "DAY_NAMES": ["रविवासरः", "सोमवासरः", "मंगलवासरः", "बुधवासरः", "गुरुवासरः", "शुक्रवासरः", "शनिवासरः"],
  "SHORT_DAY_NAMES": ["रवि", "सोम", "मंग", "बुध", "गुरु", "शुक्र", "शनि"],
  "SANKHYA_NUMBERS": ["०","१","२","३","४","५","६","७","८","९"]
}
```

---

### हिन्दी (Hindi)
```json
{
  "LANGUAGE": "hi",
  "LOCALE": "hi-IN",
  "MONTH_NAMES": ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
  "SHORT_MONTH_NAMES": ["जन", "फर", "मार", "अप्र", "मई", "जून", "जुल", "अग", "सित", "अक्ट", "नव", "दिस"],
  "DAY_NAMES": ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
  "SHORT_DAY_NAMES": ["रवि", "सोम", "मंग", "बुध", "गुरु", "शुक्र", "शनि"],
  "SANKHYA_NUMBERS": ["०","१","२","३","४","५","६","७","८","९"]
}
```

### ગુજરાતી (Gujarati)
```json
{
  "LANGUAGE": "gu",
  "LOCALE": "gu-IN",
  "MONTH_NAMES": ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"],
  "SHORT_MONTH_NAMES": ["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિ", "મે", "જૂન", "જુલા", "ઓગ", "સપ્ટે", "ઓક્ટો", "નવે", "ડિસે"],
  "DAY_NAMES": ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"],
  "SHORT_DAY_NAMES": ["રવિ", "સોમ", "મંગ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
  "SANKHYA_NUMBERS": ["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"]
}
```

### Français (French)
```json
{
  "LANGUAGE": "fr",
  "LOCALE": "fr-FR",
  "MONTH_NAMES": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  "SHORT_MONTH_NAMES": ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
  "DAY_NAMES": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  "SHORT_DAY_NAMES": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  "SANKHYA_NUMBERS": ["0","1","2","3","4","5","6","7","8","9"]
}
```

### Español (Spanish)
```json
{
  "LANGUAGE": "es",
  "LOCALE": "es-ES",
  "MONTH_NAMES": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  "SHORT_MONTH_NAMES": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  "DAY_NAMES": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  "SHORT_DAY_NAMES": ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  "SANKHYA_NUMBERS": ["0","1","2","3","4","5","6","7","8","9"]
}
```

### Deutsch (German)
```json
{
  "LANGUAGE": "de",
  "LOCALE": "de-DE",
  "MONTH_NAMES": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  "SHORT_MONTH_NAMES": ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
  "DAY_NAMES": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "SHORT_DAY_NAMES": ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
  "SANKHYA_NUMBERS": ["0","1","2","3","4","5","6","7","8","9"]
}
```

### 日本語 (Japanese)
```json
{
  "LANGUAGE": "ja",
  "LOCALE": "ja-JP",
  "MONTH_NAMES": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  "SHORT_MONTH_NAMES": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  "DAY_NAMES": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
  "SHORT_DAY_NAMES": ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"],
  "SANKHYA_NUMBERS": ["0","1","2","3","4","5","6","7","8","9"]
}
```

---

## 🔧 Auto-Generation Rules

### If `SHORT_MONTH_NAMES` is missing:
- Auto-generated from first 3 characters of each `MONTH_NAMES` item
- **Example:** `"January"` → `"Jan"`

### If `SHORT_DAY_NAMES` is missing:
- Auto-generated from first 3 characters of each `DAY_NAMES` item
- **Example:** `"Sunday"` → `"Sun"`

### If `SANKHYA_NUMBERS` is missing:
- Defaults to English digits: `["0","1","2","3","4","5","6","7","8","9"]`

---

## 📝 Validation Checklist

| ✓ | Validation Rule |
|---|----------------|
| ☐ | `LANGUAGE` must be a valid 2-letter ISO code (e.g., `sr`, `sn`, `gu`) |
| ☐ | `LOCALE` must follow BCP 47 format (e.g., `sr-ingr.in`, `sn-IN`) |
| ☐ | `MONTH_NAMES` must contain exactly 12 strings |
| ☐ | `DAY_NAMES` must contain exactly 7 strings |
| ☐ | `SHORT_MONTH_NAMES` if provided, must have 12 strings |
| ☐ | `SHORT_DAY_NAMES` if provided, must have 7 strings |
| ☐ | `SANKHYA_NUMBERS` if provided, must have 10 strings (0-9) |
| ☐ | JSON syntax must be valid (proper commas, brackets, quotes) |

---

## 🚀 Usage Example

```html
<!-- Using language-specific digits -->

<varsha shruti="sn-DD/MM/YYYY"></varsha>
<!-- Output: १२/०९/२०२६ -->

<varsha shruti="gu-DD/MM/YYYY"></varsha>
<!-- Output: ૧૨/૦૯/૨૦૨૬ -->

<varsha shruti="hi-DD/MM/YYYY"></varsha>
<!-- Output: १२/०९/२०२६ -->

<varsha shruti="sn-DD/MM/YYYY"></varsha>
<!-- Output: १२/०९/२०२६ -->
```

---

## 📂 File Structure

```
varsha/kinjal/anuradha/sejal/punam/
 |
 ├──/kinjal/anuradha/sejal/punam/bhasha              # Bhasha
 |  ├── sr.json          # suru (ingr.in)
 |  ├── sn.json          # Sanskrit (modern)
 |  ├── gu.json          # Gujarati
 |  ├── hi.json          # Hindi
 |  ├── fr.json          # French
 |  ├── es.json          # Spanish
 |  ├── de.json          # German 
 |  └── ja.json          # Japanese
 ├── bhasha.suchi.json   # New Language add Named
 ├── indumati.js         # Language loader
 ├── fatima.js           # Date formatter
 └── divya.js            # Custom element
```

---

## 🔄 JavaScript Integration

### **indumati.js** - Language Loader
```javascript
// Load language data with SANKHYA_NUMBERS support
async function loadLanguage(lang) {
  const response = await fetch(`./${lang}.json`);
  const data = await response.json();
  
  // Validate and provide defaults
  if (!data.SANKHYA_NUMBERS) {
    data.SANKHYA_NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];
  }
  
  return data;
}
```

### **fatima.js** - Date Formatter
```javascript
// Convert numbers to localized digits
function toLocalDigits(num, sankhyaNumbers) {
  if (!sankhyaNumbers) return String(num);
  return String(num).split('').map(d => 
    sankhyaNumbers[parseInt(d)] || d
  ).join('');
}

// Format date with localization
export async function formatDate(date, format, lang) {
  // Get language data including SANKHYA_NUMBERS
  const langData = await loadLanguage(lang);
  const sankhya = langData.SANKHYA_NUMBERS;
  
  // Format numbers with localization
  const year = toLocalDigits(date.getFullYear(), sankhya);
  const month = toLocalDigits(date.getMonth() + 1, sankhya);
  const day = toLocalDigits(date.getDate(), sankhya);
  
  // ... rest of formatting logic
}
```

---

## 🌍 Supported Languages

| Code | Language | Script | Locale |
|------|----------|--------|--------|
| `sr` | Sanskrit (Vedic) | Devanagari | sr-ingr.in |
| `sn` | Sanskrit (Modern) | Devanagari | sa-IN |
| `gu` | Gujarati | Gujarati | gu-IN |
| `hi` | Hindi | Devanagari | hi-IN |
| `fr` | French | Latin | fr-FR |
| `es` | Spanish | Latin | es-ES |
| `de` | German | Latin | de-DE |
| `ja` | Japanese | Japanese | ja-JP |

---

## 📌 Quick Reference Card

```
✅ MANDATORY (4 fields):
   LANGUAGE, LOCALE, MONTH_NAMES[12], DAY_NAMES[7]

📌 RECOMMENDED (3 fields):
   SHORT_MONTH_NAMES[12], SHORT_DAY_NAMES[7], SANKHYA_NUMBERS[10]

📝 OPTIONAL (metadata):
   create, contributor, version, description

🔄 AUTO-GENERATED (if missing):
   SHORT_MONTH_NAMES → first 3 chars of MONTH_NAMES
   SHORT_DAY_NAMES → first 3 chars of DAY_NAMES
   SANKHYA_NUMBERS → ["0","1","2","3","4","5","6","7","8","9"]
```

---

## 📝 Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-08-09 | suru.ingr.in @ Team Varsha |
| 1.1.0 | 2026-08-11 | Added metadata fields (create) |
| 1.2.0 | 2026-08-013 | Added inspect uri |

---
| *Documentation for Varsha* |
|---|
| _**[SURU•INGR•IN](suru.ingr.in)**_ |
| _**Author : IN INGR SURU LOVE**_ |
| **_Maintained by: Varsha Team_** |
| **_Last Updated: August 9, 2026_** |