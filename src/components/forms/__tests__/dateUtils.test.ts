import { formatISODate, getMonthCells, isISODateInRange, parseISODate, toISODate } from '../dateUtils';

describe('date-only helpers', () => {
  it('parses valid ISO calendar dates without timezone shifting', () => {
    const date = parseISODate('2026-11-15');
    expect(date).not.toBeNull();
    expect(date?.getFullYear()).toBe(2026);
    expect(date?.getMonth()).toBe(10);
    expect(date?.getDate()).toBe(15);
  });

  it('rejects malformed and impossible dates', () => {
    expect(parseISODate('15-11-2026')).toBeNull();
    expect(parseISODate('2026-02-30')).toBeNull();
    expect(parseISODate(undefined)).toBeNull();
  });

  it('formats dates as YYYY-MM-DD', () => {
    expect(toISODate(new Date(2026, 0, 9))).toBe('2026-01-09');
  });

  it('builds a month grid with leading weekday placeholders', () => {
    const cells = getMonthCells(2026, 10); // November 2026 begins on Sunday.
    expect(cells[0]).toBe(1);
    expect(cells[cells.length - 1]).toBe(30);
  });

  it('enforces optional minimum and maximum date bounds', () => {
    expect(isISODateInRange('2026-11-15', '2026-11-01', '2026-11-30')).toBe(true);
    expect(isISODateInRange('2026-10-31', '2026-11-01')).toBe(false);
    expect(isISODateInRange('2026-12-01', undefined, '2026-11-30')).toBe(false);
  });

  it('returns an empty display value for invalid dates', () => {
    expect(formatISODate('2026-02-30')).toBe('');
  });
});
