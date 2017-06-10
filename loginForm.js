import React from 'react';
import styles from './loginForm.css';

export class LoginForm extends React.Component {

  constructor( props ) {
    super( props ); 

    this.submitLoginForm = this.submitLoginForm.bind(this); 
    this.state = {
        firstName:'',
        lastName:'',
        loader:false,
        errorMsg:'',
        statusMsg:'Loading.......',
        submitValue:''
    } 
  }
  componentWillMount() {
   
  }
  componentWillUnmount() {
   
  }
  submitLoginForm(){
        if(this.state.firstName !== '' && this.state.lastName !== ''){
            this.setState({loader:true,errorMsg:''});
            setTimeout(() =>{ 
                this.setState({statusMsg:'Done !.',submitVale:true,submitValue:'First name:'+this.state.firstName +'Last name:'+this.state.lastName})
                  },3000);
        }else{
                this.setState({errorMsg:'Please fill All feilds in the form',loader:false});
        }
  }
  render() {
    return (
        <div className="login-form">
            <div className="firstNM">
                    <label>First Name:</label>
                    <input type='text' ref='firstname' value={this.state.firstName} onChange={(e)=>{this.setState({firstName:e.target.value})}}/>
                </div>
                <div className="lastNM">
                    <label>Last Name:</label>
                    <input type='text' ref='lastname' value={this.state.lastName} onChange={(e)=>{this.setState({lastName:e.target.value})}}/>
                </div>
                <div className="hobbiesCT">
                    <label>Hobbies:</label>
                    <textarea className='hobbies' rows="4" cols="50">
                    </textarea>
                </div>
                    {this.state.loader && 
                    <div className="loading">
                    <label>{this.state.statusMsg}</label>
                 </div>
                }                 
                 <div className="errorMessage">
                    <label className='errorLabel'>{this.state.errorMsg}</label>
                 </div>
                 <div className='submitValue'>
                     <label>Submit value:</label>
                         <textarea className='formvalues'  rows="4" cols="50" value= {this.state.submitValue}> 
                 </textarea>
                 </div>
                <div className="footer">
                    <input type='button' value='submit' onClick={this.submitLoginForm}/> 
                 </div>
                

            </div>
    )
  }
}

export default LoginForm