import { AppBar , Toolbar , styled , Box} from '@mui/material';

import LoginDialog from "./account/LoginDialog";

import { useContext } from 'react';


import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
height : 100vh ;
background : black;
`;

const Header = styled(AppBar)`
height : 125px;
background-color : #00a884
;
box-shadow : none;
`;

const LoginHeader = styled(AppBar)`
height : 30%;
background-color : #00a884
;
box-shadow : none;
`;


const Messenger = ()=>
{

    const { account } = useContext(AccountContext);

    return (
        <Component>
            {
        //in this we are checking if the user has logged in then we will open chat dialog orelse open login dialog
                account ? 
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>    
                    </Header>                
                    <ChatDialog />
                </>
                :
                <>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog />
            </>
            }
        </Component>
        
    )
}

export default Messenger;