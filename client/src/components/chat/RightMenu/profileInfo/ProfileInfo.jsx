import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import { selectUserinfo } from '../../../../redux/slices/userSlice';

export const ProfileInfo = ({toggleShowInfo}) => {


  const user = useSelector(state => state.users)

  return (  
    <div className='w-[410px] h-[100vh] bg-custom-gray z-[1010]'>
        <div className='bg-custom-green2 h-[60px]'>
        </div>
      <div className='bg-custom-green2 text-white flex space-x-6 items-center px-6 pb-[20px]'>
        <span
        onClick={toggleShowInfo} className='cursor-pointer'
        ><ArrowBackIcon sx={{fontSize:25}} color='white'/></span> 
          <p className='text-lg font-medium'>Profile</p>
      </div>

      <div className='flex justify-center items-center py-8'>
        <img src={user.userInfo.displayPicture} alt='ProfilePicture' className='w-[200px] rounded-full'/>
      </div>
      <div className='px-8 py-2'>
        <p className='text-sm text-green-600'>Your Name</p>
        <p className='py-4'>{user.userInfo.fullName}</p>
        <p className='text-sm py-2 text-gray-800'>This is your username or pin.This name will be visible to your Whatsapp Contpacts.</p>
        <p className='text-sm py-4 text-green-600'>About</p>
        <p className='text-sm'>i am chilling call me later</p>

      </div>
    </div>
  )
}
