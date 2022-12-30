import './Content.scss';
import photo1 from '../../resources/photo1.png'

const Content = () => {
    return (
        <section className='Content'>
            <ul className="Content-list">
                <li className="Content-item">
                    <img src={photo1} alt="images" />
                    <div className="Content-item__descr">
                        <div className="Content-item__name">
                            The Night Watch
                        </div>
                        <div className="Content-item__author">
                            <address>Author:</address>
                            <span>Rembrandt</span>
                        </div>
                        <div className="Content-item__created">
                            <span>Created:</span>
                            <data value={1642} > 1642</data>
                        </div>
                        <div className="Content-item__location">
                            <span>Location:</span>
                            <span>The Rijksmuseum</span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Content;