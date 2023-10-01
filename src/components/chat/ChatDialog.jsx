import { Dialog } from "@mui/material";

import { useContext } from "react";

import { Box , styled } from '@mui/material' ;

import { AccountContext } from "../../context/AccountProvider";


//components
import Menu from "../chat/menu/Menu";
import EmptyChat from './chat-side/EmptyChat'
import ChatBox from "./chat-side/ChatBox";

const Component= styled(Box)`
    display : flex
` ; 


const LeftComponent = styled (Box)`
min-width :  29%;
`;


const RightComponent = styled(Box)`
    width : 80%;
    min-width : 200px;
    height : 100%;
    border-left : 1px solid rgba(0,0,0,0.14);
`;

const dialogStyle = {
    height : '96%' ,
    width : '100%',
    maxHeight : '100%' ,
    maxWidth : '100%' ,
    boxShadow : 'none' ,
    overflow : 'hidden' ,
    borderRadius : 0
}


const ChatDialog = () =>
{

    const { person } = useContext(AccountContext);

    return (
        <Dialog
        open = {true}
        PaperProps={{ sx : dialogStyle }}
        hideBackdrop={true}
        maxWidth = {'md'}>

            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>

                <RightComponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}            
                </RightComponent>
            </Component>

        </Dialog> 
    )
}

export default ChatDialog;