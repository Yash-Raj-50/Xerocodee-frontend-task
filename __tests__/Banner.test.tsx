import { render, screen } from '@testing-library/react';
import Banner from '@/components/Banner';

describe('Banner', () => {
    it('renders the banner text', () => {
        render(<Banner />);
        const bannerText = screen.getByText('TechSynergy: Innovate, Create, Elevate');
        expect(bannerText).toBeInTheDocument();
    });

    it('renders a button with text "See projects"', () => {
        render(<Banner />);
        const seeProjectsButton = screen.getByRole('button', { name: /see projects/i });
        expect(seeProjectsButton).toBeInTheDocument();
    });

});
