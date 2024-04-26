import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from '../containers/Carousel';
describe('Carousel component', function () {
    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    it('renders with default props', function () {
        var container = render(React.createElement(Carousel, { images: images })).container;
        expect(container).toBeInTheDocument();
    });
    it('renders images correctly', function () {
        var getByAltText = render(React.createElement(Carousel, { images: images })).getByAltText;
        images.forEach(function (image, index) {
            expect(getByAltText("image ".concat(index))).toHaveAttribute('src', image);
        });
    });
    it('calls onImageClick prop when an image is clicked', function () {
        var mockOnImageClick = jest.fn();
        var getByAltText = render(React.createElement(Carousel, { images: images, onImageClick: mockOnImageClick })).getByAltText;
        images.forEach(function (image, index) {
            fireEvent.click(getByAltText("image ".concat(index)));
            expect(mockOnImageClick).toHaveBeenCalledWith(image);
        });
    });
});
