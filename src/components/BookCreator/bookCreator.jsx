import React,{Component} from 'react';

class BookCreator extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:''
        }
handleChange(event) {
    this.setState({
        [event.targ.name]: event.target.value});
}

    }
    render(){
        return(
            <div>
                <form onSubmit={/*Call a function to handle form submission*/}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Title:</label>
                            <input type="text" name ="title" value={this.state.title}
                            onChange={/*Call a function to handle title input change */}/>
                            <div>
                                <div className="col-md-4">
                                    <label> autho:</label>
                                    <input type ="text" name="author" value ={this.state.autho}
                                    onChange={/*Call a function to handle author input change*/}/>
                                </div>
                            <div className="col-mid-4">
                                <input type="submit" value="add"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );


export default BookCreator;