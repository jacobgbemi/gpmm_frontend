import { fireEvent, render } from '@testing-library/react-native';
import { NavigationBar } from '../NavigationBar';

describe('NavigationBar', () => {
  it('exposes tabs and reports the selected key', async () => {
    const onChange = jest.fn();
    const { getByRole } = await render(
      <NavigationBar
        activeKey="home"
        onChange={onChange}
        items={[
          { key: 'home', label: 'Home' },
          { key: 'learn', label: 'Learn' },
        ]}
      />
    );

    await fireEvent.press(getByRole('tab', { name: 'Learn' }));
    expect(onChange).toHaveBeenCalledWith('learn');
  });
});
