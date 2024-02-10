import { render, screen } from '@testing-library/react';
import Organizations from '@/components/Organizations';
import { Companies } from '@/common/contents';

describe('Organizations', () => {
    it('renders the partner organizations logos', () => {
        render(<Organizations />);
        Companies.forEach(company => {
            const image = screen.getByAltText(company.alt);
            expect(image).toBeInTheDocument();
        });
    });
    it('renders the "Our full repertoire" button', () => {
        render(<Organizations />);
        const button = screen.getByRole('button', { name: /Our full repertorie/i });
        expect(button).toBeInTheDocument();
    });
});
