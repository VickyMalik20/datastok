import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url)
    return res.json();
}

export const useBerasPolos = () => {
    const url = "http://localhost:3000/api/beras_polos/total";
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });

    return { data, error }
}