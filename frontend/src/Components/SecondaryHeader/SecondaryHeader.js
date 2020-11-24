// import repoImage from '../../images/repo-img.svg'
import './SecondaryHeader.scss';
import HeaderButton from '../HeaderButton/HeaderButton';

function SecondaryHeader({handleStarUpdate, stars, clicked}) {
    return (
        <div className="seconadry-header-wrapper">
            {/* <img src={repoImage}/> */}
            <div className='repo-names'>
                <a href='' className='owner'>facebook</a> / <a href='' className='repo-name'>create-react-app</a>
            </div>
            <div className='button-area'>
                <HeaderButton 
                    label={clicked ? 'Unstar': 'Stars'}
                    handleClick={handleStarUpdate}
                    value={stars}
                />
            </div>
        </div>
    );
}

export default SecondaryHeader;