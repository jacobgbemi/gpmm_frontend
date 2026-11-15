import { colors } from '../colors';

describe('theme colors', () => {
  it('exposes the documented GlintPM brand palette', () => {
    expect(colors.primary).toBe('#085634');
    expect(colors.gold).toBe('#F3BA25');
    expect(colors.cyan).toBe('#1EC9DF');
  });

  it('has semantic text and surface colours', () => {
    expect(colors.textPrimary).toBeTruthy();
    expect(colors.surface).toBeTruthy();
    expect(colors.background).toBeTruthy();
  });
});
