import './Content.scss';
import ModalError from '../errors/ModalError';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useGetDataContext } from '../../providers/GetDataProvider';
import LittleSpinner from '../spinners/LittleSpinner';

const Content = () => {
    const { contentList, authorsList, locationsList, loading, error } = useGetDataContext();
    const contentClass = loading ? 'Content-list Content-list__opacity' : 'Content-list';
    return (
        <section className='Content'>
            {error ? <ModalError open={true} /> : ''}
            {loading ? <LittleSpinner content={true}/> : ''}
              <ul className={contentClass}>
              {contentList.map(item => {
                  return (
                   <li className='Content-item' key={item.id} id={item.id} >
                      <LazyLoadImage src={`https://test-front.framework.team${item.imageUrl}`}
                              width={"100%"} 
                          effect="blur"
                          alt={item.name}
                    />
                      <div className="Content-item__descr">
                          <div className="Content-item__name"> {item.name} </div>
                              <div className="Content-item__author">
                              <span className='Content-item__left'>Author:</span>
                              <span className='Content-item__right'> 
                                  {authorsList.map(author => {
                                      return author.id === item.authorId ? author.name : ''
                                  })}
                              </span>
                          </div>
                          <div className="Content-item__created">
                              <span className='Content-item__left'>Created:</span>
                              <data className='Content-item__right' value={item.created} > {item.created} </data>
                              </div>
                          <div className="Content-item__location" id={item.locationId}>  
                              <span className='Content-item__left'>Location:</span>
                              <span className='Content-item__right'> 
                                  {locationsList.map(location => {
                                      return location.id === item.locationId ? location.location : ''
                                  })}
                              </span>
                          </div>
                      </div>
                   </li>
                  )
               })}
               </ul>
        </section>
    );
};

export default Content;