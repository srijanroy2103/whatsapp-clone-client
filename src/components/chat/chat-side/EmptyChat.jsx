

import { Box, Divider, Typography ,styled } from '@mui/material';

import { emptyChatImage } from '../../../constants/data';


const Component = styled(Box)`
    background : #f8f9fa;
    padding : 30pz 0;
    text-align : center;
    height : 100vh;

`;


const Container = styled(Box)`
    padding : 0 200px;
`;

const Image = styled('img')({
    width : 400,
    marginTop : 100
});

const Title = styled(Typography)`
    font-size : 32px;
    margin : 25px 0 10px 0;
    font-family : inherit ;
    fonst-weight :300;
    color : #41525d;
`;

const Subtitle = styled(Typography)`
    font-size : 14px;
    color : #667781;
    font-weight : 400;
    font-family : inherit ;
`;

const StyledDivider = styled(Divider)`
    margin : 40px 0;
    opcity : 0.4;
`;

const EmptyChat = () =>
{
    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt= "img" />
                <Title>
                    whatsapp Web
                </Title>
                <Subtitle>
                 Now send and receive messages without keeping your phone online
                </Subtitle>
                <Subtitle>Use Whatsapp on up to 4 linked devices and 1 phone at the same time</Subtitle>

                <StyledDivider />
            </Container>
        </Component>
    )
}


export default EmptyChat ;