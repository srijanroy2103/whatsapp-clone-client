import { useEffect } from "react";


import { Box ,InputBase , styled } from "@mui/material";

import { EmojiEmotionsOutlined ,AttachFile , Mic} from '@mui/icons-material';

import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
    height : 55px;
    background : #ededed;
    display : flex ;
    width : 100%;
    align-items : center;
    padding : 0 15px;
    & * {
        margin :5px;
        color : #919191;
    }
`;

const Search = styled(Box)`
    background-color : #ffffff;
    border-radius : 20px;
    width:calc(94% - 100px) ; 
    height : 45px;
    margin-top : 20px;
    margin-bottom : 20px;
`;


const InputField = styled(InputBase)`
    width : 100%;
    padding : 20px;
    height :16px;
    padding-left : 25px;
    font-size : 14px;
`;

const ClipIcon = styled(AttachFile)`
    transform : rotate(40deg);
`;

const Footer = ({ sendText, setValue , value , file , setFile, setImage }) =>{

    useEffect(()=>{
        const getImage = async ()=>{
            //this is to check whether file is there or not 
            if(file){
                //we do no the send the whole we senbd in chunks of data
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                //now we need to call an api so that it can sen dthe file data to the mongo db server
               let response = await uploadFile(data); 
               setImage(response.data);
            }
        }
        getImage();
    },[file])

    const onFileChange = (e) =>{
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <Container>
            {/* emoji icon */}
            <EmojiEmotionsOutlined />
            {/* clip icon  */} 
            <label htmlFor = 'fileinput'>
                <ClipIcon />
            </label>
            <input 
                type='file'
                id = 'fileinput'
                style = {{display: 'none'}}
                onChange = {(e) => onFileChange(e)}
            /> 

            <Search>
                <InputField
                placeholder="type a message" 
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) =>sendText(e) }
                value={value} />
            </Search>

            {/* mic icon */}
            <Mic /> 
        </Container>
    )
};

export default Footer ;