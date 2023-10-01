import { useContext } from "react";


import { Box , Typography , styled } from "@mui/material";

import { Search, MoreVert } from "@mui/icons-material";
//import { defaultProfilePicture } from "../../../constants/data";

import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
    display :flex;
    height : 44px;
    background: #ededed ;;
    padding :  8px 16px;
    align-items : center ;
`;


const Image = styled('img')({
    borderRadius : '50%',
    width : '50px',
    height : '50px'
});

const Name = styled(Typography)`
    margin-left : 12px !important;
`;


const Status = styled(Typography)`
    margin-left : 12px !important;
    font-size : 12px;
    margin-top : 4px;
    color : rgba(0,0,0,0.6);
`;


const RightContainer = styled(Box)`
    margin-left : auto ;
    & > svg {
        padding : 8px;
        font-size : 24px;
        color : #000;
    }
`;

const ChatHeader = ({ person }) =>{


    const { activeUsers } = useContext(AccountContext) ;

    return (
        <Header>
            <Image src={person.picture} alt="sdfghjk" />
            <Box>
                <Name>
                    {person.name}
                </Name>
                <Status>
                    {activeUsers?.find(user => user.sub === person.sub) ? "Online" : "Offline"}
                </Status>
            </Box>
                
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader ;