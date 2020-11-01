import React, {useEffect} from "react";
import { connect } from 'react-redux';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    //CardActionIcons
} from "@material/react-card";
import Button from '@material/react-button';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import {
    setAccountPassword,
    login,
    checkLogined
} from '../redux/Actions/loginAction';

const Login = ({
    account, 
    password, 
    status, 
    message, 
    setAccountPassword,
    login,
    checkLogined
}) => {
    useEffect(() => {
        // const token =  getCookie('token');
        // if(token) dispatch(push('/'));
        checkLogined();
    }, []);

    let loginHandler = async (e) => {
        if(account === ""){
            alert("Please enter your account");
            return;
        }
        if(!account.includes('@')){
            alert("Illegal email address format");
            return;
        }
        if(password === ""){
            alert("Please enter your password");
            return;
        }
        login(account, password)
    }

    return(
    <Grid>        
        <Row>    
            <Cell columns={3} />
            <Cell columns={6}>
                <Card id="loginCard">
                    <CardPrimaryContent id="tittle">
                        <h1>Rick's Chat Room: Beta</h1>
                        <CardMedia id="logoImg" square imageUrl={require('../Image/chat.png')} />   
                    </CardPrimaryContent>
                    <CardActions style={{display: "block"}}>
                        <CardActionButtons id="textFieldArea">
                            <TextField
                                label='Email'
                                className="textField" 
                                //helperText={<HelperText>Help Me!</HelperText>}
                                //onTrailingIconSelect={() => setAccount("")}
                                trailingIcon={<MaterialIcon role="button" icon="delete"/>}
                            >
                                <Input
                                    id="account"
                                    type="email"
                                    value={account}
                                    onChange={setAccountPassword} 
                                />
                            </TextField>
                            <TextField
                                label='Password'
                                className="textField"  
                                //helperText={<HelperText>Help Me!</HelperText>}
                                //onTrailingIconSelect={() => setPassword("")}
                                trailingIcon={<MaterialIcon role="button" icon="delete"/>}
                            >
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={setAccountPassword} 
                                />
                            </TextField>
                            <div>
                                <Button 
                                    className="loginBtn"
                                    outlined={true} 
                                    raised={true} 
                                    icon={<MaterialIcon role="button" icon="login" />}
                                    onClick={loginHandler}
                                >Login
                                </Button>
                                <Button 
                                    className="loginBtn"
                                    outlined={true} 
                                    raised={true} 
                                    disabled={true}
                                    icon={<MaterialIcon role="button" icon="account_box" />}
                                    onClick={loginHandler}
                                >Signup
                                </Button>
                            </div>
                        </CardActionButtons>
                    </CardActions>
                    {(status === "error")?(
                        <div>
                            <p className='warnMsg'>{message}</p>
                        </div>
                    ): []}
                </Card>
            </Cell>
            <Cell columns={3} />
        </Row>
    </Grid>
    )
}

let mapDispatchToProps = {
    setAccountPassword,
    login,
    checkLogined
}

let mapStateToProps = (state) => {
    return {
        account: state.loginReducer.account,
        password: state.loginReducer.password, 
        status: state.loginReducer.status, 
        message: state.loginReducer.message, 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);