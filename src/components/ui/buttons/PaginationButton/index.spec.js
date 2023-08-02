import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import PaginationButton from '@/components/ui/buttons/PaginationButton/index.vue';

describe('PaginationButton', () => {
    function renderWrapper (doubleIcon = false, left = false, isDisabled = false) {
        return render(PaginationButton, {
            props: {
                doubleIcon,
                left,
                isDisabled,
            },
        });
    }

    it('renders the correct icon based on the doubleIcon prop', async () => {
        const { getByRole, rerender } = renderWrapper(false);

        expect(getByRole(/button/i).firstChild).not.toHaveClass(
            'pagination-button__icon--double-icon',
        );

        await rerender({ doubleIcon: true });

        expect(getByRole(/button/i).firstChild).toHaveClass(
            'pagination-button__icon--double-icon',
        );
    });

    it('renders the correct icon based on the left prop', async () => {
        const { getByRole, rerender } = renderWrapper(false, false);

        expect(getByRole(/button/i).firstChild).toHaveClass('right');

        await rerender({ left: true });

        expect(getByRole(/button/i).firstChild).toHaveClass('left');
    });

    it('renders the correct icon based on the isDisabled prop', async () => {
        const { getByRole, rerender } = renderWrapper(false, false, false);

        expect(getByRole(/button/i).firstChild).not.toHaveAttribute(
            'data-state',
            'disabled',
        );

        await rerender({ isDisabled: true });

        expect(getByRole(/button/i).firstChild).toHaveAttribute(
            'data-state',
            'disabled',
        );
    });
});
