import { useContext , useState } from "react";

import { AccountContext } from "../../../context/AccountProvider";

import { Box , styled } from '@mui/material' ;
 
//icons
import ChatIcon from '@mui/icons-material/Chat';



//components 
import HeaderMenu from "./HeaderMenu";

//drawer
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
    height : 44px ;
    background : #ededed;
    padding : 10px 16px; 
    display : flex;
    align-items : center ;
`;


const Wrapper = styled(Box)`
    margin-left : auto ;
    & > * {
        margin-left : 2px;
        padding : 6px ;
    };
    & : first-child {
        font-size : 22px;
        margin-right : 6px;
        margin-top : 3px;
    }
`;

const Image = styled('img')({
    height : 40 ,
    width : 40 ,
    borderRadius : '50%'
})



const Header = () =>{

    const [openDrawer,setOpenDrawer] = useState(false);

const toggleDrawer = () => {
    setOpenDrawer(true);
}

    const { account } = useContext(AccountContext) ;
    return (
        <>
            <Component>
                <Image src={account.picture} alt="DP" onClick={()=> toggleDrawer()}/>
                <Wrapper>
                     <ChatIcon />
                     <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Wrapper>
               
            </Component>
            
            {/* in the InfoDrawer we have passed as the props  */}
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}

export default Header ;