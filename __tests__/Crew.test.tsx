import { render, screen } from '@testing-library/react';
import Crew from '@/components/Crew';
import { CrewMembers } from '@/common/contents';

describe('Crew', () => {
    it('renders the crew members', () => {
        render(<Crew />);
        CrewMembers.forEach((member) => {
            const element = screen.getByAltText(member.alt);
            expect(element).toBeInTheDocument();
        });
    });
    it('renders the schedule a call button', () => {
        render(<Crew />);
        const button = screen.getByRole('button', { name: /schedule a call/i });
        expect(button).toBeInTheDocument();
    });
});