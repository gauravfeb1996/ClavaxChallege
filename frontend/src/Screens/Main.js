import { useEffect, useState } from 'react';
import './Main.scss';
import IssueTable from './IssuesTable/IssuesTable';
import { connect } from 'react-redux';
import { getIssuesDataRequest, updateStarCount } from '../store/actions/getIssuesData';
import Header from '../Components/Header/Header';
import SecondaryHeader from '../Components/SecondaryHeader/SecondaryHeader';

function Main({ getIssuesDataRequest, issues, updateStarCount, stars }) {

    const [pageNumber, setPageNumber] = useState(1);
    const [starGiven, setStarToggle] = useState(false);

    useEffect(()=> {
        getIssuesDataRequest(pageNumber);
    },[])

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 ) {
            getIssuesDataRequest(pageNumber+1);
            setPageNumber(pageNumber+1);
        }
    })

    const handleUpdateStar = () => {
        if(starGiven){
            updateStarCount('unstar');
        } else {
            updateStarCount('star');
        }
        setStarToggle(!starGiven);
    }
    
    return (
        <>
            <Header />
            <SecondaryHeader 
                handleStarUpdate={handleUpdateStar}
                stars={stars}
                clicked={starGiven}
            />
            <div className='container'>
                <IssueTable 
                    issuesList = {issues}
                />
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    issues: state.issuesStore.issues,
    stars: state.issuesStore.stars,
})
  
const mapDispatchToProps = dispatch => ({
    getIssuesDataRequest: (pageNumber) => dispatch(getIssuesDataRequest(pageNumber)),
    updateStarCount: (operation) => dispatch(updateStarCount(operation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);