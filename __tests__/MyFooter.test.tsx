import { render, screen, fireEvent } from '@testing-library/react';
import MyFooter from '@/components/MyFooter';
import { FooterLinks } from '@/common/contents';

describe('MyFooter', () => {
    it('renders the footer links', () => {
        render(<MyFooter />);
        FooterLinks.forEach(column => {
            const heading = screen.getByText(column.Heading);
            expect(heading).toBeInTheDocument();
            column.links.forEach(link => {
                const footerLink = screen.getByText(link.text);
                expect(footerLink).toBeInTheDocument();
            });
        });
    });
    describe('MyFooter', () => {
        it('allows user to type in the "Email address" input field', () => {
            render(<MyFooter />);
            
            const input = screen.getByLabelText('Email address') as HTMLInputElement;
            fireEvent.change(input, { target: { value: 'test@example.com' } });
            
            expect(input.value).toBe('test@example.com');
        });
    });

});
