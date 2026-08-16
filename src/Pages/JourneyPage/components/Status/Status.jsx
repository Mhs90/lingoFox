import StatusDetail from './StatusDetail/StatusDetail';
import './style.css';

export default function Status() {
    return (
        <div className="status">
            <StatusDetail icon='flag' title='2' text='Adventures Completed' />
            <StatusDetail icon='clock' title='12' text='Hours Learned' />
            <StatusDetail icon='book-open' title='700' text='Words Learned' />
            <StatusDetail icon='award' title='Itermediate' text='Your Current Level' />
            
        </div>
    )
}
