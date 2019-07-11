/* Vendor types */

/* Types */
export type SortDir = 'ascending' | 'descending' | 'none'

export type TableCell = string

export type TableRow = TableCell[]

export interface Props {
  className?: string;
  rows: TableRow[];
  rowHeaders: TableCell[];
  sortable?: boolean;
  caption?: string;
  headers?: TableCell[];
}

export interface State {
  tabindex?: number;
  rows: TableRow[];
  rowHeaders: TableCell[];
  sortedBy: string | null;
  sortDir: SortDir;
}
