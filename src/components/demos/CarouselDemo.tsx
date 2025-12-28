import { Carousel } from '../ui/advanced/carousel';
import { carouselItems } from './mocks/carousel-items';

export const CarouselDemo = () => {
    return (
        <>
            <Carousel.Root autoplay loop>
                <Carousel.Content>
                    {carouselItems.map((item) => (
                        <Carousel.Item key={item.id}>
                            <Carousel.Banner
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel.Content>

                <Carousel.Previous />
                <Carousel.Next />
                <Carousel.Dots type="rectangular" />
            </Carousel.Root>
        </>
    );
};
