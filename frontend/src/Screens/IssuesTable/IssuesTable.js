import './IssuesTable.scss';
import IssueRow from './IssueRow';
import Warning from '../../images/warning.svg';
import Tick from '../../images/check.svg';

function IssueTable({ issuesList }) {
    return (
        <div className='issues-table-wrapper'>
            <div className='table-heading'>
                <div className='open-issues'>
                    <img src={Warning}/>
                    683 Open
                </div>
                <div className='closed-issues'>
                    <img src={Tick}/>
                    10,000 Closed
                </div>
            </div>
            {issuesList && issuesList.map((issue,index) => (
                <IssueRow 
                    key={index}
                    data={issue}
                />
            ))}
        </div>
    );
}

export default IssueTable;