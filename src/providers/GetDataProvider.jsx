import { useState, createContext, useContext, useEffect } from 'react';
import GalleryServices from '../services/GalleryServices';

const GetDataContext = createContext();
const GetDataProvider = ({ children }) => {
    const [authors, setAuthors] = useState('Author');
    const [locations, setLocations] = useState('Location');
    const [contentList, setContentList] = useState([])    
    const [authorsList, setAuthorsList] = useState([]);
    const [locationsList, setLocationsList] = useState([]);
    const [authorId, setAuthorId] = useState();
    const [locationId, setLocationId] = useState();
    const [valueName, setValueName] = useState();
    const [createdFrom, setCreatedFrom] = useState('');
    const [createdBefore, setCreatedBefore] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationCount, setPaginationCount] = useState();
    const { loading, error, getAuthors, getLocations, getPageItems } = GalleryServices();

  useEffect(() => {
        getPageItems(valueName, authorId, locationId, createdFrom, createdBefore, currentPage, 12 ).then(item => {
          setContentList([...item])
        })
        getPageItems(valueName, authorId, locationId, createdFrom, createdBefore).then(item => {
          setPaginationCount(Math.ceil(item.length / 12))
        })
    }, [valueName, authorId, locationId, createdFrom, createdBefore, currentPage])
  
    useEffect(() => {
        getLocations().then(item => {
            setLocationsList([...item]);
        })
        getAuthors().then(item => {
            setAuthorsList([...item])
        })
    }, [])
  return (
    <GetDataContext.Provider
      value={{
        authors,
              setAuthors,
              locations,
              setLocations,
              contentList, 
              setContentList,
              authorsList,
              locationsList,
              loading,
              authorId, 
              setAuthorId,
              locationId,
              setLocationId,
              valueName,
              createdFrom,
              setValueName, 
              setCreatedFrom,
              setCreatedBefore,
        error,
        paginationCount,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </GetDataContext.Provider>
  );
};
export const useGetDataContext = () => {
  return useContext(GetDataContext);
};
export { GetDataContext, GetDataProvider };