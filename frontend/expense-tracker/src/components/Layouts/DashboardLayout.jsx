import { memo, useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const DashboardLayout = ({children, activeMenu}) => {
    const {user, updateUser} = useContext(UserContext);
    
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token && !user) {
                try {
                    const response = await axiosInstance.post(API_PATHS.AUTH.GET_USER_INFO);
                    updateUser(response.data);
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            }
        };
        fetchUser();
    }, [user, updateUser]);
    
    return (
        <div className=''>
            <Navbar activeMenu={activeMenu} />
            <div className='flex'>
                <div className='max-[1080px]:hidden'>
                    <SideMenu activeMenu = {activeMenu}/>
                </div>
                <div className='grow mx-5'>{children} </div>
            </div>
        </div>
    );
};

export default memo(DashboardLayout);