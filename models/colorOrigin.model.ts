type ColorOrigin = {
  id: string;
  name: string;
  nameShort: string;
  baseRate: string;

  img: string;
  group:
    | "Серийный цвет"
    | "New Inspiration"
    | "RAL Classic"
    | "Серия Metallic"
    | "Серия Terra"
    | "Серия Pastell"
    | "Серия Nature";
};

export type { ColorOrigin };
