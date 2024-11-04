import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url)
    return res.json();
}

export const useAgri5 = () => {
    // Gunakan URL dinamis sesuai environment
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/agri_5/total`;
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });

    return { data, error }
}
