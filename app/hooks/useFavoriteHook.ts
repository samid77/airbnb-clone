import React, {useCallback, useMemo} from 'react'
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { SafeUser } from '../types';
import useLoginModal from './useLoginModal';

interface IUseFavorite {
    listingId: string;
    currentUser?: SafeUser | null;
}

const useFavoriteHook = ({listingId, currentUser}: IUseFavorite) => {
    const router = useRouter();
    const loginModal = useLoginModal();
    
    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        return list.includes(listingId)
    }, [currentUser, listingId])

    const toggleFavorite = useCallback(async(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if(!currentUser) return loginModal.onOpen();
        
        try {
            let request;
            if(hasFavorited) {
                console.log(`delete favorite`)
                request = () => axios.delete(`/api/favorites/${listingId}`)
            } else {
                console.log(`tag favorite`)
                request = () => axios.post(`/api/favorites/${listingId}`)
            }

            await request();
            router.refresh();
            toast.success('Favorite tagged')
        } catch (error) {
            console.error(error)
            toast.error('Something went wrong')
        }

    }, [currentUser, hasFavorited, listingId, loginModal, router])

    return {
        hasFavorited,
        toggleFavorite,
    }
}


export default useFavoriteHook;
