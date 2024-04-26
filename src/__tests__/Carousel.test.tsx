import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from '../containers/Carousel';

describe('Carousel component', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  it('renders with default props', () => {
    const { container } = render(<Carousel images={images} />);
    expect(container).toBeInTheDocument();
  });

  it('renders images correctly', () => {
    const { getByAltText } = render(<Carousel images={images} />);
    images.forEach((image, index) => {
      expect(getByAltText(`image ${index}`)).toHaveAttribute('src', image);
    });
  });

  it('calls onImageClick prop when an image is clicked', () => {
    const mockOnImageClick = jest.fn();
    const { getByAltText } = render(
      <Carousel images={images} onImageClick={mockOnImageClick} />
    );

    images.forEach((image, index) => {
      fireEvent.click(getByAltText(`image ${index}`));
      expect(mockOnImageClick).toHaveBeenCalledWith(image);
    });
  });
});
