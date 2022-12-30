import { useState } from "react";
import arrow from "../../resources/arrow.svg";
import closeSelect from "../../resources/close-select.svg";
import "./Filters.scss";

const Filters = () => {
  const [author, setAuthor] = useState("Author");
  const [location, setLocation] = useState("Location");
  const [stateAuthor, setStateAuthor] = useState(false);
  const [stateLocation, setStateLocation] = useState(false);
  const [stateCreated, setStateCreated] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);


  const onHandler = (e) => {
    if (!e.target.dataset.author) return;
    setAuthor(e.target.dataset.author)
    setCloseBtn(true)
  }
  const onCloseBtn = () => {
    setAuthor('Author');
    setCloseBtn(false)
  }


  const authorClass = stateAuthor
    ? "Filters-header Filters-header__active"
    : "Filters-header";
  const filtersSelectAuthor = stateAuthor
    ? "Filters-select Filters-select__active"
        : "Filters-select";
    const locationClass = stateLocation
    ? "Filters-header Filters-header__active"
        : "Filters-header";
    const filtersSelectLocation = stateLocation
    ? "Filters-select Filters-select__active"
        : "Filters-select";
    const filtersSelectCreated = stateCreated
        ? "Filters-select Filters-select__created Filters-outline"
        : "Filters-select Filters-outline";
    const closeBtnClass = closeBtn
      ? "Filters-header__close Filters-header__close-active"
      : "Filters-header__close";
  return (
    <section className="Filters">
      <input type="search" className="Filters-input" placeholder="Name" />
      <div className={filtersSelectAuthor}>
        <div
          className={authorClass}
          onClick={() => setStateAuthor((state) => !state)}
        >
          <span>{author}</span>
          <div className="Filters-header__icons">
            <img src={closeSelect} alt="arrow" width={10} height={10} className={closeBtnClass} onClick={() => onCloseBtn()} />
            <img src={arrow} alt="arrow" width={10} height={10} onClick={() => setAuthor('Author')} />
          </div>
        </div>
        <div className="Filters-authors">
          <ul className="Filters-menu" onClick={(e) => onHandler(e)} >
            <li className="Filters-menu__item" data-author="123">
              123
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-author="asdasd">
              asdasd
            </li>
          </ul>
        </div>
      </div>
      <div className={filtersSelectLocation}>
        <div
          className={locationClass}
          onClick={() => setStateLocation((state) => !state)}
        >
          <span>{location}</span>
          <div className="Filters-header__icons">
            <img src={closeSelect} alt="arrow" width={10} height={10} className={closeBtnClass}  />
            <img src={arrow} alt="arrow" width={10} height={10} />
          </div>
        </div>
        <div className="Filters-location">
          <ul className="Filters-menu">
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
            <li className="Filters-menu__item" data-location="asdasd">
              asdasd
            </li>
          </ul>
        </div>
      </div>
      <div className={filtersSelectCreated}>
        <div className='Filters-header'  onClick={() => setStateCreated((state) => !state)} >
            <span>Created</span>
            <div className="Filters-header__icons">
                <img src={closeSelect} alt="arrow" width={10} height={10} className={closeBtnClass} />
                <img src={arrow} alt="arrow" width={10} height={10} />
            </div>
            </div>
            <div className="Filters-created">
                <input type="text" maxLength={4} className="Filters-created__from" placeholder="from" />
                <span>-</span>
                <input type="text"  maxLength={4} className="Filters-created__before" placeholder="before" />
            </div>
        </div>
    </section>
  );
};
export default Filters;
