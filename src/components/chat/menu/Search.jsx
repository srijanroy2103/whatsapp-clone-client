import { Search as SearchIcon } from '@mui/icons-material';

import { InputBase , Box , styled } from '@mui/material'; 


const Component = styled(Box)`
        background : #f0f2f5;
        height : 35px;
        margin-top : 10px;
        margin-left:10px;
        margin-right : 10px;
        border-bottom : 1px solid #f2f2f2 ;
        align-item : center;
        border-radius : 15px;
`;

const Wrapper = styled(Box) `
    background-color : #ededed;
    position : relative ;
    margin : 0 12px;
    width : 100%;
`;

const Icon = styled(Box)`
    position : absolute ;
    height : 100% ;
    padding-top : 6px ;
    color : #919191;
`;

const InputField = styled(InputBase)`
    width : 100%;
    padding : 16px;
    padding-left : 65px ;
    padding-top : 18px;
    height : 15px;
`;

const Search = ({ setText }) => {

    
    return (
        
            
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon 
                    fontSize='small'/>
                </Icon>
            </Wrapper>
            

            <InputField 
            placeholder='Search or start a new chat'
            onChange={(e)=> setText(e.target.value) }/>
        </Component> 
        
    )
}


export default Search ;