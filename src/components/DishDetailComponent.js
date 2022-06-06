import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'

class DishDetail extends Component{
    constructor(props){
        super(props);

       
    }

    renderDish(SelectDish){
        
        if(SelectDish != null)
        {
            return(
                
                <Card>
                    <CardImg width="100%" object src={SelectDish.image} alt={SelectDish.name}/>
                    <CardBody>
                        <CardTitle> {SelectDish.name}</CardTitle>
                        <CardText>{SelectDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

    render(){
        const DishDetail = this.renderDish(this.props.SelectedDish);
            return( <div className="col-12 col-md-5 m-1">
                    {DishDetail}
                    </div>
           );

        }

    

}

export default DishDetail;