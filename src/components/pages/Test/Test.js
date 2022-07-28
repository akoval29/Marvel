import React, {useState, memo} from 'react';
import {Container, Form} from 'react-bootstrap';

import './test.scss';

function propsCompare(prevProps, nextProps) {
  return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
}

const CustomForm = memo((props) => {
  console.log('render');

  return (
    <Container>
      <Form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
          <input value={props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </Form>

      {/* <Form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </Form> */}

    </Container>
  );

}, propsCompare);



function TestPage() {
  const [data, setData] = useState({
    mail: {
      name: "name@example.com"
    },
    text: 'some text'
  });

  return (
    <>
    <h2>В розробці</h2>
      {/* <CustomForm mail={data.mail} text={data.text}/>
      
      <button className="inner"
        onClick={() => setData({
          mail: {
            name: "name@example.com"
          },
          text: 'some text'
          // mail: "another name@example.com",
          // text: 'another text'
        })}>
        Click me
      </button> */}

    </>
  );
}

export default TestPage;
