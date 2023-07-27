import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

describe('SvgIcon', () => {
    function renderWrapper (name = 'save') {
        return render(SvgIcon, {
            props: { name },
            global: {
                stubs: {
                    component: {
                        template:
                            '<svg :aria-label="`icon-${key}`" :class="`icon-${key}`"></svg>',
                        props: ['key'],
                    },
                },
            },
        });
    }

    it('renders svg icon', async () => {
        const name = 'save';
        const { findByLabelText } = renderWrapper(name);
        expect(await findByLabelText(`icon-${name}`)).toHaveClass(`icon-${name}`);
    });
});
