import { useState, useCallback } from "react";

export const useHttp = () => {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append(
    'Cache-Control',
    'public, max-age=31536000, immutable, no-store'
    );
    const options = {
        method: 'GET',
        headers: headers,
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const request = useCallback(async (url) => {
        setLoading(true);
        try {
            let response = await fetch(url, options);
            if (!response.ok ) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json();
            setTimeout(() => {
                setLoading(false);
            }, 500);
            return data;
        } catch (e) {
            setLoading(false)
            setError(e.message);
            throw e;
        }
    }, []);
    return {loading, request, error}
}