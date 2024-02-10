import { render, screen } from '@testing-library/react';
import TechServices from '@/components/TechServices';
import { TechServiceObjects } from '@/common/contents';

describe('TechServices', () => {
    it('renders the tech service objects', () => {
        render(<TechServices />);
        TechServiceObjects.forEach((service) => {
            const element = screen.getByText(service.Heading.toString());
            expect(element).toBeInTheDocument();
        });
    });
});

