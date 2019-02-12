import React from 'react';
import styled from 'styled-components';
import logo from '../../public/logo.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    width: 500px;
    height: 40%;
`;

const Logo = styled.h1`
    height: 130px;
    width: 130px;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`;

const Subtitle = styled.h3`
    color: black;
    font-size: 1.0rem;
    font-weight: 400;
    margin-bottom: 40px;
`;

const Paragraph = styled.p`
    color: black;
    font-size: 0.9rem;
    padding: 5px;
`;

const Link = styled.a`
    color: #00a8e8;
`;

const App = () => (
    <Container>
        <Wrapper>

            <Logo>
                <img src={logo}/>
            </Logo>

            <Title>

                Libre Food Pantry
            </Title>

            <Subtitle>Below are some helpful links to get you started.</Subtitle>

            <Paragraph>
                Read the {' '}
                <Link href="https://github.com/hawzie197/Libre-Food-Pantry/blob/master/CODING_STANDARDS.md" target="_blank">
                    CODING_STANDARDS.
                </Link>
            </Paragraph>

            <Paragraph>
                Understand the {' '}
                <Link href="https://github.com/hawzie197/Libre-Food-Pantry/blob/master/CHANGELOG.md" target="_blank">
                    CHANGELOG.
                </Link>
            </Paragraph>

            <Paragraph>
                Know the {' '}
                <Link href="https://github.com/hawzie197/Libre-Food-Pantry/blob/master/LICENSE.md" target="_blank">
                    LICENSE.
                </Link>
            </Paragraph>

        </Wrapper>
    </Container>
);

export default App;
