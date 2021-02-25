import * as React from "react";
import { useState, useEffect, useCallback, memo } from "react";
import {GetStaticProps} from "next"

const Form: React.FC = memo((props) => {
  const [apiData, setApiData] = useState([]);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefautl();
  };

  const handleSetFormData = useCallback(
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <input onChange={handleSetFormData} type="text" name="username" />
        <input onChange={handleSetFormData} type="text" name="password" />
        <button type="submit">Submit</button>
      </form>
      {props.data.map((data) => {
        return (
          <ul key={data.id}>
            <li style={{ color: "red", fontSize: "24px" }}>{data.completed}</li>
            <li>{data.title}</li>
          </ul>
        );
      })}
    </>
  );
});

type GetStaticPropsTypeInterface = {
  props: {
    data: {}[]
  }
}

export const getStaticProps: GetStaticProps = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((res) => {
      return {
        props: { data: res },
      };
    });
};

export default Form;
