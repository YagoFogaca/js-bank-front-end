import { useEffect, useState } from 'react';
import { Main } from '../../styled-components/main/index.main';

export function PageHome() {
    const [backgroundImgIndex, setBackgroundImgIndex] = useState(0);
    const imgs = [
        './src/assets/imgs/banner-0.jpg',
        './src/assets/imgs/banner-1.jpg',
        './src/assets/imgs/banner-2.jpg',
    ];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundImgIndex(prevIndex =>
                prevIndex === imgs.length - 1 ? 0 : prevIndex + 1,
            );
        }, 5500);

        return () => clearInterval(intervalId);
    }, [imgs]);
    return (
        <Main backgroundImg={imgs[backgroundImgIndex]}>
            <section></section>
            <section></section>
        </Main>
    );
}
