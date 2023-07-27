import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/vue';
import { ref } from 'vue';
import BaseInput from '@/components/ui/inputs/BaseInput/index.vue';

describe('BaseInput test', () => {
    function renderWrapper (modelValue = 'text', hasError = false, errorMsg = '', ticker = '') {
        return render(BaseInput, {
            global: {
                provide: {
                    isHSm: ref(false),
                },
            },
            props: {
                modelValue,
                inputNumber: false,
                integerNumber: false,
                placeholder: 'placeholder',
                name: 'input_name',
                autocomplete: 'on',
                focusOnMounted: true,
            },
        });
    }

    it('Should render correctly', () => {
        const { html } = renderWrapper();
        expect(html()).toContain('base__input-wrapper');
    });

    it('Input component accepts props', () => {
        const { getByRole } = renderWrapper();

        const input = getByRole(/textbox/i);

        expect(input.value).toBe('text');
        expect(input.placeholder).toBe('placeholder');
        expect(input.autocomplete).toBe('on');
    });

    it('Input update value', async () => {
        const { getByRole } = renderWrapper();

        const input = getByRole('textbox');

        await fireEvent.update(input, '');
        expect(input.value).toBe('');
        await fireEvent.update(input, 'qwerty');
        expect(input.value).toBe('qwerty');
    });
});
