import { useContext, useEffect, useState } from "react";

import { Box, Typography , styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";

import { setConversion , getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";


const Container = styled(Box)`
    display : flex;
`;

const Timestamp = styled(Typography)`
    color : #00000099;
    margin-left : auto;
    font-size : 12px;
    margin-top : 4px;
`;

const Text = styled(Typography)`
    color : rgba(0,0,0,0.6);
    font-size : 14px;
    margin-right : 20px;
`;

const Component = styled(Box)`
    display :flex;
    height : 45px;
    padding : 13px 0;
    cursor : pointer ;
`;

const Image = styled('img')({
    width : 50,
    height : 50,
    borderRadius : '50%',
    padding : '0 14px',
    objectFit : 'cover'
})

const Conversation = ({ user }) =>{

    const { setPerson ,account , newMessageFlag } = useContext(AccountContext);

    const [message , setMessage ] = useState({});

    useEffect(() =>{
        const getConversationDetails = async ()=> {
            const data = await getConversation({senderId : account.sub , receiverId : user.sub });
            setMessage({ text : data?.message , timestamp: data?.updatedAt })
        }
        getConversationDetails();
    },[newMessageFlag]);

    const getUser = async()=>{
        setPerson(user);
        await setConversion ({ senderId: account.sub,receiverId : user.sub})
    };


    return (
        <Component onClick={()=>getUser()}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box styled = {{ width : '50%' }}>
                <Container>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text && 
                        <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                </Box>
            </Box>
        </Component>
    )
}


export default Conversation;