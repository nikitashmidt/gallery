import { useHttp } from "../hooks/useHttp";

const GalleryServices = () => {
  const { loading, request, error } = useHttp();
  const getAuthors = async () => {
    const res = await request(`https://test-front.framework.team/authors`);
    return res;
  };
  const getLocations = async () => {
    const res = await request(`https://test-front.framework.team/locations`);
    return res;
  };
  const getPageItems = async(
    qText,
    authorId,
    locationId,
    createdFrom,
    createdBefore,
    countPage,
    limit,
  ) => {
    const q = qText ? qText : "";
    const idAuthor = authorId ? `&authorId=${authorId}` : "";
    const idLocation = locationId ? `&locationId=${locationId}` : "";
    const from = createdFrom ? `&created_gte=${createdFrom}` : "";
    const before = createdBefore ? `&created_lte=${createdBefore}` : "";
    const limitItems = limit ? `&_limit=${limit}` : '';
    const page = countPage ? `&_page=${countPage}` : '';
    const res = await request(
      `https://test-front.framework.team/paintings?q=${q}${idAuthor}${idLocation}${from}${before}${page}${limitItems}`
    );
    return res;
  };
  return { loading, error, getAuthors, getLocations, getPageItems };
};
export default GalleryServices;
