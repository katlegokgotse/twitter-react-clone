"use client"
import React, { useCallback, useState } from 'react'
import Input from '../Input';
import Modal from './Modal';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const onToggle = useCallback(()=>{
        if (isLoading){
            return;
        }
        registerModal.onClose()
        loginModal.onOpen();
    }, [isLoading, registerModal, loginModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            await axios.post('/api/register', {
                email,
                password,
                username,
                name
            });

            toast.success('Account created')
            signIn('credentials', {
                email,
                password
            });
            registerModal.onClose();
        }catch (error){
            console.log(error);
            toast.error('Something went wrong')
        } finally {
            setIsLoading(false);
        }
    }, [registerModal, email, password, username, name]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
             />
             <Input
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
             />
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
            <p>Do you already have an account? 
                <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>
                Login
                </span>
            </p>
        </div>
    )
  return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Registration"
            onClose={registerModal.onClose} 
            body={bodyContent}
            onSubmit={onSubmit} 
            footer={footerContent}
            actionLabel={'Sign up'}/>
  )
}

export default RegisterModal