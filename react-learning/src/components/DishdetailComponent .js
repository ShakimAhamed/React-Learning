import React, { Component } from 'react';
import { Card, CardBody,} from 'reactstrap';
import Moment from 'moment';

class DishDetail  extends Component {

    renderComments(cmnt) {
       
        if (cmnt != null){
            const listItems = cmnt.map((cmt) =>
                <li key={cmt.id.toString()}>
                    {cmt.comment}<br/>
                    -- {cmt.author}, {Moment(cmt.date).format('LL')}
                </li>
            );
            return(
                <ul style={{listStyleType: "none",padding:0}}>{listItems}</ul>
               
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardBody>
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        return (
            <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
            </div>
        );
    }
}

export default DishDetail ;