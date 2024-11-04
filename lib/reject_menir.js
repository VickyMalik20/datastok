import useSWR from 'swr';

async function fetcher(url) {
    const res = await fetch(url);
    return res.json();
}

export const useRejectMenir = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reject_menir/total`;
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });

    return { data, error };
};
