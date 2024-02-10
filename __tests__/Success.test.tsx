import { render, screen, fireEvent } from '@testing-library/react';
import Success from '@/components/Success';
import { SuccessObejcts } from '@/common/contents';

describe('Success', () => {
    it('renders the success objects', () => {
        render(<Success />);
        SuccessObejcts.forEach((success) => {
            const element = screen.getByTestId(success.id.toString());
            expect(element).toBeInTheDocument();
        });
    });
    it('scrolls to the right when right arrow button is clicked', () => {
        render(<Success />);
        const rightArrowButton = screen.getByTestId('right-arrow-button');
        const successContainer = screen.getByTestId('success-container');
        
        if (rightArrowButton) {
            fireEvent.click(rightArrowButton);
        }
        
        expect(successContainer.scrollLeft===200);
    });
    it('scrolls to the left when left arrow button is clicked', () => {
        render(<Success />);
        const leftArrowButton = screen.getByTestId('left-arrow-button');
        const successContainer = screen.getByTestId('success-container');
        
        if (leftArrowButton) {
            fireEvent.click(leftArrowButton);
        }
        
        expect(successContainer.scrollLeft===0);
    });
});