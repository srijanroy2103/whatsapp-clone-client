import { Box , styled , Divider} from '@mui/material';


import { useEffect , useState , useContext } from "react";

import { getUsers } from '../../../service/api';

import { AccountContext } from '../../../context/AccountProvider';

//components
import Conversation from './Conversation';





const Component = styled(Box)`
    height : 81vh;
    oveflow : overlay;
`;


const StyledDivider = styled(Divider)`
    margin : 0 0 0 70px;
    background-color:#e9edef;
    opacity : 0.6;
`;

//usestate hook is used to store the api response
const Conversations = ({ text }) =>{

    const [users , setUsers] = useState([]);

    const { account , socket , setActiveUsers } = useContext(AccountContext);


    useEffect(()=>{
        const fetchData = async () =>{
            let response = await getUsers();
            const filteredData = response.filter(user=> user.name.toLowerCase().includes(text.toLowerCase()));


            setUsers(filteredData);
        }
        fetchData();

    },[text]);

   useEffect(() =>{
    socket.current.emit('addUsers',account);
    socket.current.on("getUsers",users => {
        setActiveUsers(users);
    })
   },[account]);

    return (
       <Component>
            {
                users.map(user =>(
                    user.sub !== account.sub && <>
                    <Conversation user = {user}/><StyledDivider></StyledDivider></>
                ))
            }
       </Component>
    )
};

export default Conversations ;



