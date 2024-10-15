import userSWR from 'swr'
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'
const useUser = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR(userId ? `/api/user/${userId}` : null, fetcher)
    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useUser;