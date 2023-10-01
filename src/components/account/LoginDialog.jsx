
import { Dialog , Box , Typography , List , ListItem , styled } from '@mui/material';

import { useContext } from 'react';

import { AccountContext } from '../../context/AccountProvider';

import { addUser } from '../../service/api';


import { qrCodeImage } from '../../constants/data';

import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode';




const Component = styled(Box)`
display : flex;
`;

const QRCode =styled('img')({
    height : 264,
    width : 264,
    margin : '50px 0 0 50px'
});


const Container = styled(Box)`
padding : 56px 0 56px 56px;
`;

const ListCss = styled(List)`
& > li {
    padding : 0;
    margin-top : 15px;
    font-size : 18px;
    line-height : 24px;
    color : #4a4a4a;
    margin-left : 10px;
}
`;

const Title = styled(Typography)`
    font-size : 30px;
    color : #525252;
    font-weight : 300;
    font-family : inherit;
    margin-right : 120px;
    margin-bottom : 30px;
`;

const dialogStyle = {
    height : '96%' ,
    marginTop : '12%' ,
    width : '65%',
    maxHeight : '100%' ,
    maxWidth : '100%' ,
    boxShadow : 'none' ,
    overflow : 'hidden'
};

const LoginDialog =() => {
    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess =async (res) =>{
        /*this is used to get the encoded information from the google and decode and store for valid authentication
        
        in this we have used google jwt login 
        
        to get the credentials from the google we have used google.cloud.oauth
        
        setup the project then go 
        */
        const decoded = jwt_decode(res.credential);
     
     /*in the decoded variable we have various kinds of infoprmation like profile pic etc
     
     we need to store this information globally
     for this we are using context api*/    
     
        setAccount(decoded);
        await addUser(decoded);
    }

    const onLoginError = (res) =>{
        console.log('failed',res);
    }

    return (
        <Dialog open={true} PaperProps={{sx : dialogStyle}}
        hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>Use WhatsApp on Your Computer</Title>
                        <ListCss>
                            <ListItem>1. Open WhatsApp on Your Computer</ListItem>
                            <ListItem>2. Tap Menu - Settings - select WhatsApp Web</ListItem>

                            <ListItem>3. Tap On Link Device</ListItem>
                            <ListItem>4. Point your phone to this screen to capture the image</ListItem>
                        </ListCss>
                    
                </Container>

                <Box style={{position : 'relative'}}>
                    <QRCode src={qrCodeImage} alt='qr code' />
                    <Box style = {{
                        position : 'absolute' , 
                        top : '50%' ,
                        transform : 'translateX(50%) translateY(10px)'
                    }}>
                        <GoogleLogin onSuccess={onLoginSuccess}
                        onError={onLoginError} />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;