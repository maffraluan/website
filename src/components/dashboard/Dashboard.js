import React, { Component } from 'react';
import Notifications from './Notification';
import ProjectLists from '../projects/ProjectLists';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render(){
        //console.log(this.props);
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectLists projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                    <Notifications />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);