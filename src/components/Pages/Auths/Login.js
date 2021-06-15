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
  Input,
} from 'reactstrap';
// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './authentication.scss';

const Login = () => {
  let history = useHistory();
  const [activeButton] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event, value) => {
    setLoading(true);
    const data = {
      email: value.email.trim(),
      password: value.password.trim(),
    };
  };

  const routingHandler = (path = 'login') => {
    history.push({ pathname: path });
  };

  const { email, password } = formData;
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
            onClick={() => routingHandler()}
            className={`rounded-pill me-1 px-4 ${
              activeButton === 1
                ? 'bg-primary'
                : 'bg-white text-muted border border-white'
            }`}
          >
            Log in
          </Button>
          <Button
            onClick={() => routingHandler('register')}
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
                  Let Jam Up Today
                  <span className="ps-2">
                    <i className="bi bi-music-note-list"></i>{' '}
                  </span>
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
                      <div className="px-4">
                        <div className="d-flex justify-content-between">
                          <div className="my-auto">
                            <Input
                              type="checkbox"
                              className="custom-control-input text-primary"
                              id="customControlInline"
                            />
                            <Label
                              className="custom-control-label text-muted ms-1 fs-6"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </Label>
                          </div>
                          <Button
                            disabled={loading}
                            color="primary"
                            className="w-md waves-effect waves-light px-5 rounded-pill"
                            size="sm"
                            type="submit"
                          >
                            Log In
                          </Button>
                        </div>
                      </div>
                    </AvForm>
                    {/* Forget password */}
                    <div className="px-4">
                      <div className="my-2 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock mr-1"></i> Forgot your
                          password?
                        </Link>
                      </div>

                      {/* Sign up acc */}
                      <div className="mt-5">
                        <p className="fs-6"> Don't you have an account ? </p>
                        <Button
                          outline
                          color="primary"
                          size="sm"
                          className="w-100 rounded-pill"
                          onClick={() => routingHandler('register')}
                        >
                          SIGN UP FOR FLUXMUSIC
                        </Button>
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

export default Login;
