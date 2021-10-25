import React from "react";
import { useState, useEffect } from "react";
import AppLoading from "../components/AppLoading";

const Quotes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return (
      <div className="alert alert-success text-center m-5" role="alert">
        <h4 className="alert-heading">Warning!</h4>
        <p>{error.message}</p>
      </div>
    );
  } else if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">qoutes</th>
          </tr>
        </thead>
        <tbody>
          {items.map((char) => (
            //   <li key={char.name}>{char.name}</li>
            <tr>
              <th scope="row">{char.quote_id}</th>
              <td>{char.author}</td>
              <td>{char.quote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default Quotes;
