import useSWR from 'swr';

async function fetcher(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Gagal mengambil data");
    return res.json();
}

export const useBroken = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/broken/total`;
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });

    return { data, error };
};
