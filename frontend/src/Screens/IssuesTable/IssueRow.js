import './IssueRow.scss';
import Chip from '../../Components/Chip/Chip';
import WarningGreen from '../../images/warning_green.svg';

function IssueRow({data}) {
    return(
        <div className='issue-row-container'>
            <div className='issue-heading'>
                <img src={WarningGreen}/>
                <div className='title-area-right'>
                    <div className='title-area'>
                        <a className='title' href={data.html_url}>
                            {data.title}
                        </a>
                        {data.labels.map(label => (
                            <Chip 
                                key={label.id}
                                data={label}
                            />
                        ))}
                    </div>
                    <div className='issue-sub-details'>
                        #{data.id} opened 5 days ago by <a className="user-name" href={data.user.url}> {data.user.login}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IssueRow;