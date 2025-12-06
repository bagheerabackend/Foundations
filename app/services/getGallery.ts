import { ref, watchEffect, toValue } from 'vue'

export async function fetchImages(lastId: number = 0, length: number = 10) {
    const url = `https://api.goldstarfoundations.com/api/v1/gallery/images?length=${length}&last_id=${lastId}`;
    console.log(url);
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        return { data, error: null };
    } catch (e) {
        const error = e instanceof Error ? e : new Error(String(e));
        return { data: null, error };
    }
}

export async function fetchVideos(lastId: number = 0, length: number = 10) {
    const url = `https://api.goldstarfoundations.com/api/v1/gallery/videos?length=${length}&last_id=${lastId}`;
    console.log(url);
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        return { data, error: null };
    } catch (e) {
        const error = e instanceof Error ? e : new Error(String(e));
        return { data: null, error };
    }
}
