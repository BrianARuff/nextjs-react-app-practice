import * as React from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { variants } from "../motion/variants";
import Form from "../components/Form";
import { TooManyUsers } from "./_error";

const Index = (props) => {

  const [isVisible, setIsVisible] = React.useState(true);

  const handleSetIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <title>Next-JS Applicaiton</title>
        <meta name="viewport"
              content="initial-scale=1.0, width=device-width" />
      </Head>
      <Form />
      <button onClick={handleSetIsVisible}>Hide Data</button>
      {
        props.data.length > 100
          ? <motion.div animate={isVisible ? "active" : "inactive"}
                        variants={variants.FadeFrameRtoL}>
            <Grid container>
              {props.data.map((data) => {
                return (
                  <Grid style={{ border: "1px solid black" }}
                        key={data.id}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}>
                    <ul>
                      <li>{data.title}</li>
                    </ul>
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>
          : <TooManyUsers />
      }
    </>
  );
};

export default Index;

export const getStaticProps = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((res) => {
      if (!res) {
        return {
          redirect: {
            destination: "/",
            permanent: false
          }
        };
      }
      return {
        props: { data: res }
      };
    });
};