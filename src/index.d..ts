interface CellData {
 [key:string]: {value: string};
}

export type SheetData = CellData[][];

export interface ToolbarButtonProps {
  label: string;
  action: string;
  icon?: React.ReactNode;
  onClick: (action: string) => void;
}

export interface TabProps {
  name: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

export interface SpreadsheetProps {
  initialData?: SheetData;
}

export interface CellProps {
  value: string;
  onChange: (value: string) => void;
}