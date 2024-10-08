"use client"
import React, { useCallback, useState } from 'react'
import Input from '../Input';
import Modal from './Modal';
import useLoginModal from '@/hooks/useLoginModal';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            loginModal.onClose();
        }catch (error){
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
             />
            <Input
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
             />
        </div>
    )
  return (
    <div>
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            onClose={loginModal.onClose } 
            body={bodyContent}
            onSubmit={onSubmit} actionLabel={'Sign in'}/>
    </div>
  )
}

export default LoginModal