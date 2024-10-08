'use client'
import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import {
    StreamVideo,
    StreamVideoClient,
} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect } from 'react';
import { useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY

export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {

    const [viedoClient, setviedoClient] = useState<StreamVideoClient>()
    const { user, isLoaded } = useUser()

    useEffect(() => {
        if (!isLoaded || !user) return
        if (!apiKey) throw new Error("Stream Api key missing")

        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl
            },
            tokenProvider
        })
        setviedoClient(client)
    }, [user, isLoaded]);

    if(!viedoClient) return <Loader />

    return (
        <StreamVideo client={viedoClient}>
            {children}
        </StreamVideo>
    );
};