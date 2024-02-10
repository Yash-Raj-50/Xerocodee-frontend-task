import { render, screen } from '@testing-library/react';
import Challenges from '@/components/Challenges';
import { TechObjectItems } from '@/common/contents';

describe('Challenges', () => {
    it('renders the tech object items', () => {
        render(<Challenges />);
        TechObjectItems.forEach((item) => {
            const element = screen.getByText(item.Heading as string);
            expect(element).toBeInTheDocument();
        });
    });
});

