import { getInitials } from '../Avatar';

describe('getInitials', () => {
  it('returns up to two initials from a name', () => {
    expect(getInitials('Gbemi Jacob Adebayo')).toBe('GJ');
    expect(getInitials('GlintPM')).toBe('G');
  });

  it('handles blank names safely', () => {
    expect(getInitials('   ')).toBe('?');
  });
});
