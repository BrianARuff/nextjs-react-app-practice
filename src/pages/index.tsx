import * as React from "react";
import Form from "../components/Form";
import Spinner from "../components/spinner";
import Head from "next/head";
import { Grid } from "@material-ui/core";


const Index = (props) => {

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <title>Next-JS Applicaiton</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Form />
      <Grid container>
        {props.data.map((data) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <ul key={data.id}>
                <li>{data.title}</li>
              </ul>
            </Grid>
          );
        })}
      </Grid>
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
        props: { data: res }
      };
    });
};
