import { fireEvent, render } from '@testing-library/react-native';
import { DatePickerField } from '../DatePickerField';

describe('DatePickerField', () => {
  it('opens the calendar and returns a selected ISO date', async () => {
    const onChange = jest.fn();
    const { getByRole } = await render(
      <DatePickerField label="Preferred date" value="2026-11-01" onChange={onChange} />
    );

    await fireEvent.press(getByRole('button', { name: 'Preferred date' }));
    await fireEvent.press(getByRole('button', { name: /15 November 2026/i }));

    expect(onChange).toHaveBeenCalledWith('2026-11-15');
  });
});
