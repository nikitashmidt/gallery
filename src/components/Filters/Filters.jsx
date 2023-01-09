import { useState } from "react";
import ModalError from "../errors/ModalError";
import arrow from "../../resources/arrow.svg";
import closeSelect from "../../resources/close-select.svg";
import LittleSpinner from "../spinners/LittleSpinner";
import "./Filters.scss";
import { useGetDataContext } from "../../hooks/useGetDataContext";

const Filters = () => {
  const [isOpenAuthors, setIsOpenAuthors] = useState(false);
  const [isOpenLocations, setIsOpenLocations] = useState(false);
  const [isOpenCreated, setIsOpenCreated] = useState(false);
  const [authorBtn, setAuthorBtn] = useState(false);
  const [locationsBtn, setLocationsBtn] = useState(false);
  const {
    authorsList,
    locations,
    setLocations,
    authors,
    setAuthors,
    setLocationId,
    setCurrentPage,
  } = useGetDataContext();
  const {
    locationsList,
    valueName,
    setValueName,
    error,
    loading,
    setAuthorId,
    createdFrom,
    setCreatedFrom,
    createdBefore,
    setCreatedBefore,
  } = useGetDataContext();
  const onHandler = (e, value) => {
    switch (value) {
      case "author":
        if (e.target.dataset.author) {
          setCurrentPage(1);
          setAuthorId(+e.target.id);
          setIsOpenAuthors(false);
          setAuthorBtn(true);
          setAuthors(e.target.textContent);
        }
        break;
      case "location":
        if (e.target.dataset.location) {
          setCurrentPage(1);
          setLocationId(e.target.id);
          setIsOpenLocations(false);
          setLocationsBtn(true);
          setLocations(e.target.textContent);
        }
        break;
      default:
        return;
    }
  };
  const onHandlerHeader = (e) => {
    if (e.target.dataset.filters) {
      switch (e.target.dataset.filters) {
        case "author":
          setIsOpenAuthors(!isOpenAuthors);
          break;
        case "location":
          setIsOpenLocations(!isOpenLocations);
          break;
        default:
          return;
      }
    }
    if (e.target.dataset.close) {
      switch (e.target.dataset.close) {
        case "author":
          setAuthors("Author");
          setAuthorId("");
          setIsOpenAuthors(false);
          setAuthorBtn(false);
          break;
        case "location":
          setLocations("Location");
          setLocationId("");
          setIsOpenLocations(false);
          setLocationsBtn(false);
          break;
        default:
          return;
      }
    }
  };
  return (
    <section className="Filters">
      <input
        type="search"
        className="Filters-input"
        value={valueName}
        onChange={(e) => setValueName(e.target.value)}
        placeholder="Name"
      />
      <div
        className={
          isOpenAuthors
            ? "Filters-select Filters-select__active"
            : "Filters-select"
        }
        id="Filters-author"
      >
        {loading ? (
          <LittleSpinner />
        ) : (
          <div
            className="Filters-header"
            data-filters="author"
            onClick={(e) => onHandlerHeader(e)}
          >
            <span className="Filters-header__name">{authors}</span>
            <div className="Filters-header__icons">
              <img
                src={closeSelect}
                alt="arrow-close"
                width={10}
                height={10}
                data-close="author"
                className={
                  authorBtn
                    ? "Filters-header__close Filters-header__close-active"
                    : "Filters-header__close"
                }
              />
              <img
                src={arrow}
                className={isOpenAuthors ? "Filters-header__icons-active" : ""}
                alt="arrow"
                width={10}
                height={10}
              />
            </div>
          </div>
        )}
        <div className="Filters-authors">
          <ul className="Filters-list" onClick={(e) => onHandler(e, "author")}>
            {authorsList.map((item) => {
              return (
                <li
                  className="Filters-list__item"
                  data-author={item.name}
                  key={item.id}
                  id={item.id}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={
          isOpenLocations
            ? "Filters-select Filters-select__active"
            : "Filters-select"
        }
        id="Filters-location"
      >
        {loading ? (
          <LittleSpinner />
        ) : (
          <div
            className="Filters-header"
            data-filters="location"
            onClick={(e) => onHandlerHeader(e)}
          >
            <span className="Filters-header__name">{locations}</span>
            <div className="Filters-header__icons">
              <img
                src={closeSelect}
                alt="arrow-close"
                width={10}
                height={10}
                data-close="location"
                className={
                  locationsBtn
                    ? "Filters-header__close Filters-header__close-active"
                    : "Filters-header__close"
                }
              />
              <img
                src={arrow}
                className={
                  isOpenLocations ? "Filters-header__icons-active" : ""
                }
                alt="arrow"
                width={10}
                height={10}
              />
            </div>
          </div>
        )}
        <div className="Filters-locations">
          <ul
            className="Filters-list"
            onClick={(e) => onHandler(e, "location")}
          >
            {locationsList.map((item) => {
              return (
                <li
                  className="Filters-list__item"
                  data-location={item.location}
                  key={item.id}
                  id={item.id}
                >
                  {item.location}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={
          isOpenCreated
            ? "Filters-select Filters-select__created Filters-outline"
            : "Filters-select Filters-outline"
        }
        id="Filters-created"
      >
        <div
          className="Filters-header"
          onClick={() => setIsOpenCreated(!isOpenCreated)}
        >
          <span>Created</span>
          <div className="Filters-header__icons">
            <img
              src={arrow}
              className={isOpenCreated ? "Filters-header__icons-active" : ""}
              alt="arrow"
              width={10}
              height={10}
            />
          </div>
        </div>
        <div className="Filters-created">
          <input
            type="number"
            value={createdFrom}
            onChange={(e) => {
              setCreatedFrom(e.target.value);
              setCurrentPage(1);
            }}
            className="Filters-created__from"
            placeholder="from"
          />
          <span className="Filters-created__dash">-</span>
          <input
            type="number"
            value={createdBefore}
            onChange={(e) => {
              setCreatedBefore(e.target.value);
              setCurrentPage(1);
            }}
            className="Filters-created__before"
            placeholder="before"
          />
        </div>
      </div>
      {error ? <ModalError open={true} /> : ""}
    </section>
  );
};

export default Filters;
