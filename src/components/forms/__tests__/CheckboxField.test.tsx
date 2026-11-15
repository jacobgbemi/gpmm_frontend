import { fireEvent, render } from '@testing-library/react-native';
import { CheckboxField } from '../CheckboxField';

describe('CheckboxField', () => {
  it('reports the next checked value and exposes checkbox semantics', async () => {
    const onChange = jest.fn();
    const { getByRole } = await render(
      <CheckboxField checked={false} onChange={onChange} label="Agree to terms" />
    );

    await fireEvent.press(getByRole('checkbox', { name: 'Agree to terms' }));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
