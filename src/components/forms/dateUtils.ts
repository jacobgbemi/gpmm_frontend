/** Date-only helpers use local calendar dates and ISO YYYY-MM-DD values. */
export function parseISODate(value?: string): Date | null {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split('-').map(Number);
  const parsed = new Date(year, month - 1, day);
  if (parsed.getFullYear() !== year || parsed.getMonth() !== month - 1 || parsed.getDate() !== day) return null;
  return parsed;
}

export function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getMonthCells(year: number, monthIndex: number): Array<number | null> {
  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells: Array<number | null> = Array.from({ length: firstWeekday }, () => null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);
  return cells;
}

export function isISODateInRange(value: string, minDate?: string, maxDate?: string): boolean {
  if (!parseISODate(value)) return false;
  if (minDate && parseISODate(minDate) && value < minDate) return false;
  if (maxDate && parseISODate(maxDate) && value > maxDate) return false;
  return true;
}

export function formatISODate(value?: string, locale = 'en-GB'): string {
  const parsed = parseISODate(value);
  if (!parsed) return '';
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(parsed);
}
