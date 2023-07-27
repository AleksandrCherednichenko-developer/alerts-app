import { fireEvent, render } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import InputPassword from '@/components/ui/inputs/PasswordInput/index.vue';

describe('InputPassword', () => {
    function renderWrapper (
        modelValue = 'test',
        placeholder = 'Enter password',
    ) {
        return render(InputPassword, {
            props: {
                modelValue,
                placeholder,
            },
        });
    }

    it('displays placeholder correctly', () => {
        const { getByPlaceholderText } = renderWrapper();
        expect(getByPlaceholderText('Enter password')).toBeInTheDocument();
    });

    it('shows and hides the password when you click on the button', async () => {
        const { getByLabelText } = renderWrapper(
            'pass123',
        );
        const button = getByLabelText(/toggle-password/i);
        const input = getByLabelText(/password-input/i);

        expect(input.type).toBe('password');
        expect(input.value).toBe('pass123');

        await fireEvent.click(button);
        expect(input.type).toBe('text');
    });

    it('triggers the update:modelValue event on input', async () => {
        const { getByLabelText, emitted } = renderWrapper();

        const input = getByLabelText(/password-input/i);
        await fireEvent.update(input, 'test');

        expect(emitted()).toHaveProperty('update:modelValue');
        expect(emitted()['update:modelValue'][0]).toEqual(['test']);
    });
});
