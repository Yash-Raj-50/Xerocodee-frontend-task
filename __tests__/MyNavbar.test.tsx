import { render, screen } from '@testing-library/react';
import MyNavbar from '@/components/MyNavbar';
import { NavbarMenuItems } from '@/common/contents';

describe('MyNavbar', () => {
    it('renders the navbar links', () => {
        render(<MyNavbar />);
        NavbarMenuItems.forEach(item => {
            const navbarItem = screen.getByText(item);
            expect(navbarItem).toBeInTheDocument();
        });
    });
    it('renders the logo', () => {
        render(<MyNavbar />);
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the "Schedule a Call" button', () => {
        render(<MyNavbar />);
        const scheduleButton = screen.getByRole('button', { name: /schedule a call/i });
        expect(scheduleButton).toBeInTheDocument();
    });
});