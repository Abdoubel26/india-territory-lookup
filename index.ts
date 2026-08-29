export type StateOrUT = {
    lgd: string | number;
    name: string;
    code: string;
    category: "State" | "Union Territory";
    order: string;
};

export const indiaTerritories: StateOrUT[] = [
  { lgd: "35", name: "Andaman and Nicobar Islands", code: "AN", category: "Union Territory", order: "1st UT" },
  { lgd: "28", name: "Andhra Pradesh", code: "AP", category: "State", order: "1st State" },
  { lgd: "12", name: "Arunachal Pradesh", code: "AR", category: "State", order: "24th State" },
  { lgd: "18", name: "Assam", code: "AS", category: "State", order: "2nd State" },
  { lgd: "10", name: "Bihar", code: "BR", category: "State", order: "3rd State" },
  { lgd: "04", name: "Chandigarh", code: "CH", category: "Union Territory", order: "2nd UT" },
  { lgd: "22", name: "Chhattisgarh", code: "CG", category: "State", order: "26th State" },
  { lgd: "26", name: "Dadra and Nagar Haveli and Daman and Diu", code: "DH", category: "Union Territory", order: "8th UT" },
  { lgd: "07", name: "Delhi", code: "DL", category: "Union Territory", order: "3rd UT" },
  { lgd: "30", name: "Goa", code: "GA", category: "State", order: "25th State" },
  { lgd: "24", name: "Gujarat", code: "GJ", category: "State", order: "15th State" },
  { lgd: "06", name: "Haryana", code: "HR", category: "State", order: "17th State" },
  { lgd: "02", name: "Himachal Pradesh", code: "HP", category: "State", order: "18th State" },
  { lgd: "37", name: "Jammu and Kashmir", code: "JK", category: "Union Territory", order: "6th UT" },
  { lgd: "20", name: "Jharkhand", code: "JH", category: "State", order: "28th State" },
  { lgd: "29", name: "Karnataka", code: "KA", category: "State", order: "4th State" },
  { lgd: "32", name: "Kerala", code: "KL", category: "State", order: "5th State" },
  { lgd: "38", name: "Ladakh", code: "LA", category: "Union Territory", order: "7th UT" },
  { lgd: "31", name: "Lakshadweep", code: "LD", category: "Union Territory", order: "4th UT" },
  { lgd: "23", name: "Madhya Pradesh", code: "MP", category: "State", order: "6th State" },
  { lgd: "27", name: "Maharashtra", code: "MH", category: "State", order: "16th State" },
  { lgd: "14", name: "Manipur", code: "MN", category: "State", order: "19th State" },
  { lgd: "17", name: "Meghalaya", code: "ML", category: "State", order: "21st State" },
  { lgd: "15", name: "Mizoram", code: "MZ", category: "State", order: "23rd State" },
  { lgd: "13", name: "Nagaland", code: "NL", category: "State", order: "14th State" },
  { lgd: "21", name: "Odisha", code: "OD", category: "State", order: "7th State" },
  { lgd: "34", name: "Puducherry", code: "PY", category: "Union Territory", order: "5th UT" },
  { lgd: "03", name: "Punjab", code: "PB", category: "State", order: "8th State" },
  { lgd: "08", name: "Rajasthan", code: "RJ", category: "State", order: "9th State" },
  { lgd: "11", name: "Sikkim", code: "SK", category: "State", order: "22nd State" },
  { lgd: "33", name: "Tamil Nadu", code: "TN", category: "State", order: "10th State" },
  { lgd: "36", name: "Telangana", code: "TS", category: "State", order: "29th State" },
  { lgd: "16", name: "Tripura", code: "TR", category: "State", order: "20th State" },
  { lgd: "05", name: "Uttarakhand", code: "UK", category: "State", order: "27th State" },
  { lgd: "09", name: "Uttar Pradesh", code: "UP", category: "State", order: "11th State" },
  { lgd: "19", name: "West Bengal", code: "WB", category: "State", order: "12th State" }
];

type ClueType = string | number;


const findTerritory = (clue: ClueType): StateOrUT | null => {

    if (typeof clue === "number" || !Number.isNaN(Number(clue))) {
        return indiaTerritories.find(t => Number(t.lgd) === Number(clue)) ?? null;
    }

    const normalized = clue.trim();

    if (normalized.length === 2) {
        return indiaTerritories.find(t => t.code === normalized.toUpperCase()) ?? null;
    }

    if (!Number.isNaN(Number(normalized[0]))) {
        return indiaTerritories.find(t => t.order.toLowerCase() === normalized.toLowerCase()) ?? null;
    }

    return indiaTerritories.find(t => t.name.toLowerCase() === normalized.toLowerCase()) ?? null;
};

export default findTerritory;