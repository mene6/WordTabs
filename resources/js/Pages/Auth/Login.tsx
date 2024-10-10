import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowUpRightIcon } from 'lucide-react';
import { FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };
    //bg-background-secondary
    return (
        <GuestLayout className='bg-background-secondary test'>
            <Head title='Log in' />

            {status && (
                <div className='mb-4 font-medium text-green-600 text-sm'>
                    {status}
                </div>
            )}

            <form onSubmit={submit} className='min-w-72'>
                <div>
                    <InputLabel htmlFor='email' value='Email' />

                    <TextInput
                        id='email'
                        type='email'
                        name='email'
                        value={data.email}
                        className='flex mt-1 w-full'
                        autoComplete='username'
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor='password' value='Password' />

                    <TextInput
                        id='password'
                        type='password'
                        name='password'
                        value={data.password}
                        className='flex mt-1 w-full'
                        autoComplete='current-password'
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <div className='flex flex-col mt-4'>
                    <label className='flex items-center'>
                        <Checkbox
                            name='remember'
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className='text-foreground text-sm ms-2'>
                            Remember me
                        </span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className='rounded-md focus:ring-2 focus:ring-primary focus:ring-offset-2 text-foreground text-sm hover:text-gray-900 underline focus:outline-none mt-2'
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className='flex flex-row justify-between items-center mt-4' disabled={processing}>
                        Log in
                        <ArrowUpRightIcon className='w-4 h-4 ms-2' />
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
