import { useHttp } from '../hooks/useHttp';

const GalleryServices = () => {
    const {loading, request, error, clearError} = useHttp();
    const urlLocation = 'https://test-front.framework.team/locations';
    const urlAuthors = 'https://test-front.framework.team/authors';
   
    const getAuthors = async () => {
        const res = await request(urlAuthors);
        return res;
    }
    const getLocation = async () => {
        const res = await request(urlLocation);
        return res;
    }
    return {loading, error, clearError, getAuthors, getLocation}
}
export default GalleryServices;