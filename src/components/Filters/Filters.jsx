import { useState, useEffect } from "react";
import arrow from "../../resources/arrow.svg";
import closeSelect from "../../resources/close-select.svg";
import GalleryServices from "../../services/GalleryServices";
import LittleSpinner from "../spinners/LittleSpinner";
import "./Filters.scss";



const Filters = () => {
  const [isOpenAuthor, setIsOpenAuthor] = useState(false);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [isOpenCreated, setIsOpenCreated] = useState(false);
  const [author, setAuthor] = useState('Author');
  const [location, setLocation] = useState('Location');
  const [authorBtn, setAuthorBtn] = useState(false);
  const [locationBtn, setLocationBtn] = useState(false);
  const [authorList, setAuthorList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  
  const { loading, error, getAuthors, getLocation } = GalleryServices();
  
  useEffect(() => {
    getLocation().then(item => {
      setLocationList([...item]);
    })
    getAuthors().then(item => {
      setAuthorList([...item])
    })
  }, [])
 
  const onHandler = (e, value) => {
    switch (value) {
      case "author":
        if (e.target.dataset.author) { 
          setAuthor(e.target.textContent);
          setIsOpenAuthor(false)
          setAuthorBtn(true)
        }
        break;
      case "location":
        if (e.target.dataset.location) {
          setLocation(e.target.textContent)
          setIsOpenLocation(false)
          setLocationBtn(true)
        }
        break;
      default:
        return;
    }
  }
  const onHandlerHeader = (e) => {
    if (e.target.dataset.filters) { 
      switch (e.target.dataset.filters) {
        case "author":
          setIsOpenAuthor(!isOpenAuthor);
          break;
        case "location":
          setIsOpenLocation(!isOpenLocation)
          break;
        default:
          return;
      }
    }
    if (e.target.dataset.close) {
      switch (e.target.dataset.close) {
        case "author":
          setAuthor('Author')
          setAuthorBtn(false)
          break;
        case "location":
          setLocation('Location')
          setLocationBtn(false)
          break;
        default:
          return;
      }
    } 
  }
  return (
    <section className="Filters">
    <input type="search" className="Filters-input" placeholder="Name" />
    <div className={isOpenAuthor ? "Filters-select Filters-select__active" : 'Filters-select'} id="Filters-author">
        {loading || error ? <LittleSpinner /> :
          <div className="Filters-header" data-filters='author' onClick={(e) => onHandlerHeader(e)}>
            <span className="Filters-header__name">{author}</span>
            <div className="Filters-header__icons">
            <img src={closeSelect} alt="arrow-close" width={10} height={10} data-close='author' className={authorBtn ? "Filters-header__close Filters-header__close-active" : 'Filters-header__close'} />
            <img src={arrow} className={isOpenAuthor ? 'Filters-header__icons-active' : ""} alt="arrow" width={10} height={10}  />
            </div>
          </div>
        }
      <div className="Filters-authors">
        <ul className="Filters-list" onClick={(e) => onHandler(e, "author")} >
          {authorList.map(item => {
            return <li className="Filters-list__item" data-author={item.name} key={item.id} >{item.name}</li>
          })}
        </ul>
      </div>
    </div>
    <div className={isOpenLocation ? "Filters-select Filters-select__active" : "Filters-select"} id="Filters-location">
        {loading ? <LittleSpinner /> : 
        <div className="Filters-header" data-filters='location' onClick={(e) => onHandlerHeader(e)}>
          <span className="Filters-header__name">{location}</span>
          <div className="Filters-header__icons">
            <img src={closeSelect} alt="arrow-close" width={10} height={10} data-close="location" className={locationBtn ? "Filters-header__close Filters-header__close-active" : 'Filters-header__close'} />
            <img src={arrow} className={isOpenLocation ? "Filters-header__icons-active" : ""} alt="arrow" width={10} height={10} />
          </div>
        </div>
      }
      <div className="Filters-location">
          <ul className="Filters-list" onClick={(e) => onHandler(e, 'location')}>
          {locationList.map(item => {
            return <li className="Filters-list__item" data-location={item.location} key={item.id} >{item.location}</li>
          })}
        </ul>
      </div>
    </div>
    <div className={isOpenCreated ? "Filters-select Filters-select__created Filters-outline" : 'Filters-select Filters-outline'} id="Filters-created">
      <div className='Filters-header'  onClick={() => setIsOpenCreated(!isOpenCreated)} >
          <span>Created</span>
          <div className="Filters-header__icons">
              <img src={arrow} className={isOpenCreated ?  "Filters-header__icons-active" : ''}  alt="arrow" width={10} height={10} />
          </div>
          </div>
          <div className="Filters-created">
              <input type="text" maxLength={4} className="Filters-created__from" placeholder="from" />
              <span className="Filters-created__dash">-</span>
              <input type="text"  maxLength={4} className="Filters-created__before" placeholder="before" />
          </div>
      </div>
  </section>
  );
};


export default Filters;
