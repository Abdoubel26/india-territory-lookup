# 🇮🇳 india-state-lookup

> A lightweight, zero-dependency TypeScript utility to look up Indian States and Union Territories using their LGD code, postal-style abbreviation, name, or administrative order.

---

## 👨‍💻 Author & Creator

Created with ❤️ by **Abdou Belounis**

- **Website:** [abdoubelounis.com](https://abdoubelounis.com)

---

## 💡 What is this?

`india-state-lookup` makes it easy to look up Indian States and Union Territories using different identifiers.

Whether you have an LGD code (`32`), an unpadded string (`"2"`), a mixed-case code (`"kL"`), a full name (`"Kerala"`), or an administrative order (`"5th State"`), `findTerritory` normalizes the input and returns the corresponding State or Union Territory object.

Each entry contains:

- `name` — Full name of the State or Union Territory (e.g., `"Kerala"`)
- `code` — Two-letter abbreviation (e.g., `"KL"`)
- `lgd` — Local Government Directory code (e.g., `"32"`)
- `category` — Either `"State"` or `"Union Territory"`
- `order` — Administrative order identifier (e.g., `"5th State"`)

---

## 📦 Installation

Install the package via **npm**:

```bash
npm install india-state-lookup
```

Or using **yarn** / **pnpm**:

```bash
yarn add india-state-lookup
# or
pnpm add india-state-lookup
```

## 🚀 Quick Start & Usage

Import the default `findTerritory` function:

```typescript
import findTerritory from 'india-state-lookup';

// Basic usage
findTerritory("KL");

// Returns:
// {
//   lgd: "32",
//   name: "Kerala",
//   code: "KL",
//   category: "State",
//   order: "5th State"
// }
```

## ⚡ Flexible Lookup

`findTerritory` supports multiple ways of identifying a State or Union Territory.

### By LGD Code

```typescript
findTerritory(32);
findTerritory("32");
findTerritory("032");
```

### By Code

```typescript
findTerritory("KL");
findTerritory("kl");
findTerritory("kL");
```

### By Name

```typescript
findTerritory("Kerala");
findTerritory("kerala");
findTerritory("KERALA");
```

### By Administrative Order

```typescript
findTerritory("5th State");
findTerritory("1st UT");
findTerritory("29th State");
```

All successful lookups return a `StateOrUT` object.

---

## 🏛️ States & Union Territories

The dataset contains **36 entries** covering India's States and Union Territories.

Every entry includes a `category` property that distinguishes between the two:

```typescript
import findTerritory from 'india-state-lookup';

console.log(findTerritory("dL"));

// {
//   lgd: "07",
//   name: "Delhi",
//   code: "DL",
//   category: "Union Territory",
//   order: "3rd UT"
// }
```

For a State:

```typescript
console.log(findTerritory("KA"));

// {
//   lgd: "29",
//   name: "Karnataka",
//   code: "KA",
//   category: "State",
//   order: "4th State"
// }
```

---

## 📊 Accessing the Raw Data

If you need the complete dataset for dropdown menus, tables, filtering, or custom lookups, you can import `indiaTerritories` directly:

```typescript
import { indiaTerritories } from 'india-state-lookup';

console.log(indiaTerritories.length); // 36
```

Each item follows the `StateOrUT` type:

```typescript
type StateOrUT = {
  lgd: string | number;
  name: string;
  code: string;
  category: "State" | "Union Territory";
  order: string;
};
```

---

## 🔎 TypeScript Support

The package is written in TypeScript and includes a strongly typed `StateOrUT` interface.

```typescript
const result = findTerritory("MH");

if (result) {
  console.log(result.name);     // "Maharashtra"
  console.log(result.code);     // "MH"
  console.log(result.lgd);      // "27"
  console.log(result.category); // "State"
  console.log(result.order);    // "16th State"
}
```

If no matching State or Union Territory is found, `findTerritory` returns `null`:

```typescript
const result = findTerritory("Not a territory");

console.log(result); // null
```

---

## 📄 License

[MIT](LICENSE) © [Abdou Belounis](https://abdoubelounis.com/)