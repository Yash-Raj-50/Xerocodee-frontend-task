import { render, screen, fireEvent } from '@testing-library/react';
import Reviews from '@/components/Reviews';
import { MyReviews } from '@/common/contents';

describe('Reviews', () => {
    it('renders the reviews', () => {
        render(<Reviews />);
        MyReviews.forEach((review) => {
            const element = screen.getByTestId(review.id.toString());
            expect(element).toBeInTheDocument();
        });
    });
    it('renders the intersect image', () => {
        render(<Reviews />);
        const image = screen.getByAltText('Intersect');
        expect(image).toBeInTheDocument();
    });

    it('scrolls to the right when right arrow button is clicked', () => {
        render(<Reviews />);
        const rightArrowButton = screen.getByRole('button', { name: /right arrow/i });
        const reviewsContainer = screen.getByTestId('reviews-container');
        
        if (rightArrowButton) {
            fireEvent.click(rightArrowButton);
        }
        
        expect(reviewsContainer.scrollLeft===reviewsContainer.scrollWidth);
    });

    it('scrolls to the left when left arrow button is clicked', () => {
        render(<Reviews />);
        const leftArrowButton = screen.getByRole('button', { name: /left arrow/i });
        const reviewsContainer = screen.getByTestId('reviews-container');
        
        if (leftArrowButton) {
            fireEvent.click(leftArrowButton);
        }
        
        expect(reviewsContainer.scrollLeft===0);
    });
});
