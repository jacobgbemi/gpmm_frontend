import { colors } from '../colors';
import { radii, textVariants } from '..';

describe('theme tokens', () => {
  it('exposes the documented GlintPM brand palette', () => {
    expect(colors.primary).toBe('#085634');
    expect(colors.gold).toBe('#F3BA25');
    expect(colors.cyan).toBe('#1EC9DF');
  });

  it('provides semantic text, surface, border, and feedback colours', () => {
    expect(colors.textPrimary).toBeTruthy();
    expect(colors.surface).toBeTruthy();
    expect(colors.background).toBeTruthy();
    expect(colors.border).toBeTruthy();
    expect(colors.successBackground).toBeTruthy();
    expect(colors.warningBackground).toBeTruthy();
    expect(colors.errorBackground).toBeTruthy();
    expect(colors.disabled).toBeTruthy();
  });

  it('exposes shared radius and text hierarchy tokens', () => {
    expect(radii.md).toBeGreaterThan(0);
    expect(textVariants.pageTitle.fontSize).toBeGreaterThan(textVariants.body.fontSize);
  });
});
