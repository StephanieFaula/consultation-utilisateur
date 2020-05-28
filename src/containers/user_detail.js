import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {


    render() {
        const { myActiveUser } = this.props;
        return(
            <div>
                {!myActiveUser &&
                    <div>Selectionnez un utilisateur pour d�marrer</div>
                }
                
                {myActiveUser &&
                    <div>
                        <h5>D�tails de : {myActiveUser.name}</h5>
                        <ul>
                            <li>Id : {myActiveUser.id}</li>
                            <li>R�le : {myActiveUser.role}</li>
                            <li>Actif : {myActiveUser.active}</li>
                        </ul>
                    </div>
                } 
            </div>
        )
    }
}

function mapStateToProps(state){
    return{ 
        myActiveUser : state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);