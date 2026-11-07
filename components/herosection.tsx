"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "shinonome",
            subtitle: "The taste of ena",
            imageUrl: "/images/enacheesecake.webp",
        },
        {
            title: "Ena",
            subtitle: "Our beutiful owner",
            imageUrl: "/images/enacheesecake2.webp",
        },
        {
            title: "enanan",
            subtitle: "We sell cheese cakes",
            imageUrl: "/images/enacheesecake3.webp",
        }
    ]

    return (
        <Carousel fade interval={ 4000 } data-bs-theme="dark">
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        style={{
                            backgroundImage:`url(${ slide.imageUrl})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            height:"70vh",
                        }}>
                    </div>
                    <Carousel.Caption>
                        <h1 className="display-4 fw-bold">{ slide.title }</h1>
                        <p className="lead">{ slide.subtitle }</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;
