import * as React from "react";
import Form from "../components/Form";

const Index = (props) => {
  return (
    <>
      <Form />
      {props.data.map((data) => {
        return (
          <ul key={data.id}>
            <li>{data.title}</li>
          </ul>
        );
      })}
    </>
  );
};

type GetStaticPropsTypeInterface = {
  props: {
    data: {}[];
  };
};

export default Index;

export const getStaticProps = async (props: GetStaticPropsTypeInterface) => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((res) => {
      return {
        props: { data: res },
      };
    });
};
