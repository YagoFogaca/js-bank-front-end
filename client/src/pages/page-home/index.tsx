import { Main } from '../../styled-components/main/index.main';
import { Header } from '../../components/header/index.header';
import { SectionHome } from '../../components/section-home/index.section-home';

export function PageHome() {
    return (
        <>
            <Main>
                <Header />
                <SectionHome />
            </Main>
        </>
    );
}
