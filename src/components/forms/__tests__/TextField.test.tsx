import { fireEvent, render } from '@testing-library/react-native';
import { TextField } from '../TextField';

describe('TextField', () => {
  it('renders an accessible label and forwards text changes', async () => {
    const onChangeText = jest.fn();
    const { getByLabelText } = await render(
      <TextField label="Email address" value="" onChangeText={onChangeText} keyboardType="email-address" />
    );

    await fireEvent.changeText(getByLabelText('Email address'), 'learner@example.com');
    expect(onChangeText).toHaveBeenCalledWith('learner@example.com');
  });

  it('renders validation feedback', async () => {
    const { getByText } = await render(<TextField label="Email" value="" onChangeText={() => undefined} error="Enter a valid email address." />);
    expect(getByText('Enter a valid email address.')).toBeTruthy();
  });
});
