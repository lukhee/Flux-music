import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
} from 'reactstrap';
// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './authentication.scss';

const Register = () => {
  let history = useHistory();
  const [activeButton] = useState(2);
  const [loading, setLoading] = useState(false);
  const [formData] = useState({
    email: '',
    password: '',
    userName: '',
    gender: 'male',
  });

  const handleSubmit = (event, value) => {
    setLoading(true);
    // Todo: set form data
    // const data = {
    //   email: value.email.trim(),
    //   password: value.password.trim(),
    // };
    // Todo: Call the dispatch
    // Todo: Set sumit button to disabled
  };

  const routeHandler = (path = 'login') => {
    history.push({ pathname: path });
  };

  const { email, password, userName, gender } = formData;
  return (
    <div
      className="container-fluid pt-5 bg-dark vh-100 text-center"
      style={{
        background: 'linear-gradient(to top right, #212629 0%, #432874 100%)',
      }}
    >
      <div className="auth-button">
        <ButtonGroup className="bg-white p-1 rounded-pill">
          <Button
            onClick={() => routeHandler('login')}
            className={`rounded-pill me-1 px-4 ${
              activeButton === 1
                ? 'bg-primary'
                : 'bg-white text-muted border border-white'
            }`}
          >
            Log in
          </Button>
          <Button
            onClick={() => routeHandler('register')}
            className={`rounded-pill px-4 ${
              activeButton === 2
                ? 'bg-primary'
                : 'bg-white text-muted border border-white'
            }`}
          >
            Sign up
          </Button>
        </ButtonGroup>
      </div>

      <div className="auth-form mt-5 pt-5">
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <Card>
              <CardBody>
                <CardTitle tag="h5" className="fw-bold">
                  Ready to sign up ?
                </CardTitle>
                <div>
                  <div className="p-2 mt-4">
                    <div className="connect-with-social mb-4 d-flex justify-content-around">
                      <Button
                        size="sm"
                        className="rounded-pill px-4 d-flex justify-content-between"
                        style={{ backgroundColor: '#3b5998' }}
                      >
                        <i className="bi bi-facebook me-4"></i>
                        <span> FaceBook </span>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white text-dark border border-dark rounded-pill px-4 justify-content-between"
                      >
                        <i className="bi bi-google me-4"></i>
                        Google
                      </Button>
                    </div>
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={handleSubmit}
                    >
                      <FormGroup className="auth-form-group-custom mb-4">
                        <i className="bi bi-person text-primary auti-custom-input-icon"></i>
                        <Label htmlFor="email">Email</Label>
                        <AvField
                          name="email"
                          value={email}
                          type="text"
                          className="form-control"
                          id="email"
                          validate={{ email: true, required: true }}
                          placeholder="Enter Email"
                        />
                      </FormGroup>

                      <FormGroup className="auth-form-group-custom mb-4">
                        <i className="bi bi-file-lock text-primary auti-custom-input-icon"></i>
                        <Label htmlFor="userpassword">Password</Label>
                        <AvField
                          name="password"
                          value={password}
                          type="password"
                          className="form-control"
                          id="userpassword"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Password can't be empty",
                            },
                          }}
                          placeholder="Enter password"
                        />
                      </FormGroup>

                      <Row>
                        <Col>
                          <FormGroup className="auth-form-group-custom mb-4">
                            <i className="bi bi-person-bounding-box text-primary auti-custom-input-icon"></i>
                            <Label htmlFor="userName">UserName</Label>
                            <AvField
                              name="userName"
                              value={userName}
                              type="userName"
                              className="form-control"
                              id="userName"
                              validate={{
                                required: {
                                  value: true,
                                  errorMessage: "userName can't be empty",
                                },
                              }}
                              placeholder="Enter userName"
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup className="auth-form-group-custom mb-4">
                            <i className="bi bi-gender-ambiguous text-primary auti-custom-input-icon"></i>
                            <Label htmlFor="userName">Gender</Label>
                            <AvField
                              name="gender"
                              value={gender}
                              type="select"
                              className="form-control"
                              id="gender"
                              placeholder="gender here "
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </AvField>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Button
                        disabled={loading}
                        color="primary"
                        className="w-md waves-effect waves-light py-2 px-5 rounded-pill w-100"
                        size="sm"
                        type="submit"
                        onClick={() => routeHandler('register')}
                      >
                        SIGN UP
                      </Button>
                    </AvForm>

                    {/* Forget password */}
                    <div className="px-4">
                      <div className="my-2 text-center">
                        Already have an account ?
                        <Link to="/login" className="text-muted">
                          <i className="mdi mdi-lock mr-1"></i>{' '}
                          <span className="text-secondary"> Log in</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
