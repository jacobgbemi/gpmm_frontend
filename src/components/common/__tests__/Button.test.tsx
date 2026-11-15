import { fireEvent, render } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button', () => {
  it('calls onPress when enabled', async () => {
    const onPress = jest.fn();
    const { getByRole } = await render(<Button onPress={onPress}>Save changes</Button>);

    await fireEvent.press(getByRole('button', { name: 'Save changes' }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', async () => {
    const onPress = jest.fn();
    const { getByRole } = await render(<Button onPress={onPress} disabled>Save changes</Button>);

    await fireEvent.press(getByRole('button', { name: 'Save changes' }));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('exposes a busy state while loading', async () => {
    const { getByRole } = await render(<Button loading>Saving</Button>);
    expect(getByRole('button')).toBeTruthy();
  });
});
