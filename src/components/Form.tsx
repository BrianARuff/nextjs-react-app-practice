import * as React from "react";
import { useState, useEffect, useCallback, memo } from "react";

type Props = {
  props: {
    data: {}[];
  };
};

const Form: React.NamedExoticComponent<
  | React.RefAttributes<React.Component<Props, any, any>>
  | { children?: React.ReactNode }
> = memo((props) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
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
    </>
  );
});

export default Form;
