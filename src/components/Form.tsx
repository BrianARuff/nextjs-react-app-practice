import * as React from "react";
import { useState, useCallback, memo } from "react";

export const config = { amp: true }

type Props = {
  props: {
    data: {}[];
  };
};

type FormDataInterface = {
  username: string,
  password: string
}

type UserAccountInterface = {
  username: string,
  password: string,
  id: number
}

const Form: React.NamedExoticComponent<| React.RefAttributes<React.Component<Props, any, any>>
  | { children?: React.ReactNode }> = memo((props) => {
  const [formData, setFormData] = useState<FormDataInterface>({
    username: "",
    password: ""
  });
  const [userAccount, setUserAccount] = useState<UserAccountInterface>({
    username: "",
    password: "",
    id: 0
  });
  type Fetch = {
    input: Request | string,
    init?: RequestInit | Promise<Response>
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => res.json())
      .then(res => {
        setUserAccount({
          username: res.username,
          password: res.password,
          id: res.id
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  const handleSetFormData = useCallback(
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    },
    [formData]
  );

  return (
    <>
      <form action="/" target="_blank" onSubmit={handleSubmit}>
        <input onChange={handleSetFormData} type="text" name="username" />
        <input onChange={handleSetFormData} type="text" name="password" />
        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <article>
        <p>
          {formData.username}...{formData.password}
        </p>
      </article>
      <article>
        {
          userAccount.id ?
            <p>
              UserName: {userAccount.username} |
              Password: {userAccount.password} |
              ID: {userAccount.id}
            </p> :
            null
        }
      </article>
    </>
  );
});

export default Form;
