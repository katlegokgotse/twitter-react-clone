"use client"
import React, { useCallback, useState } from 'react'
import Input from '../Input';
import Modal from './Modal';
import useLoginModal from '@/hooks/useLoginModal';
import RegisterModal from './RegisterModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { signIn } from 'next-auth/react';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            await signIn('credentials', {
                email,
                password
            });
            loginModal.onClose();
        }catch (error){
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal, email, password]);
    const onToggle = useCallback(()=>{
        if (isLoading){
            return;
        }
        loginModal.onClose()
        registerModal.onOpen();
    }, [isLoading, registerModal, loginModal])
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
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
             />
        </div>
    )
    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>Don't you have an account? 
                <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>
                Register
                </span>
            </p>
        </div>
    )
  return (
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            onClose={loginModal.onClose} 
            body={bodyContent}
            onSubmit={onSubmit} 
            actionLabel={'Sign in'}
            footer={footerContent}
            />
  )
}

export default LoginModal