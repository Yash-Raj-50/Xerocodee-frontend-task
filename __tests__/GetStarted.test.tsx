import { render, screen } from '@testing-library/react';
import GetStarted from '@/components/GetStarted';

describe('GetStarted', () => {
    it('renders the Schedule a Call button', () => {
        render(<GetStarted />);
        const button = screen.getByRole('button', { name: /schedule a call/i });
        expect(button).toBeInTheDocument();
    });
    it('renders the Intersect_2 image', () => {
        render(<GetStarted />);
        const image = screen.getByAltText('Intersect_2');
        expect(image).toBeInTheDocument();
    });
});