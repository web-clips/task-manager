import './Dashboard.scss';
import { Clock4, CircleCheck, CircleAlert } from 'lucide-react';

const Dashboard = () => {
    return (
        <>
            <div className="page__head">
                <h3 className="page__head__title">Dashboard</h3>
                <p className="page__head__subtitle">Overview of your tasks and productivity</p>
            </div>
            <div className="dashboard__stats">
                <div className="stats__item">
                    <div className="stats__item__icon">
                        <Clock4 size={18} strokeWidth={2} color="#0c41ff"/>
                    </div>
                    <div className="stats__item__info">
                        <h5>4</h5>
                        <p>Active Tasks</p>
                    </div>
                </div>
                <div className="stats__item">
                    <div className="stats__item__icon">
                        <CircleCheck />
                    </div>
                    <div className="stats__item__info">
                        <h5>2</h5>
                        <p>Completed</p>
                    </div>
                </div>
                <div className="stats__item">
                    <div className="stats__item__icon">
                        <CircleAlert />
                    </div>
                    <div className="stats__item__info">
                        <h5>2</h5>
                        <p>High Priority</p>
                    </div></div>
            </div>
        </>
    )
}

export default Dashboard;