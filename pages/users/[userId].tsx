import Header from '@/components/layout/Home/Header';
import useUser from '@/hooks/useUser';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/router';
import React from 'react'

const UserView = () => {
    const router = useRouter()
    const { userId } = router.query;
    const { data: fetchedUser, isLoading} = useUser(userId as string);

    if (isLoading || !fetchedUser){
        return (
            <div className='flex justify-center items-center h-full'>
                <ClipLoader color="lightblue" size={80}/>
            </div>
        )
    }
  return (
    <>
        <Header showBackArrow label={fetchedUser?.name}/>
    </>
  )
}

export default UserView;