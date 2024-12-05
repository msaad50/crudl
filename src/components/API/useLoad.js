import { useState, useEffect } from "react";
import modules from "../../data/modules";
import users from "../../data/users";

const useLoad = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (endpoint === "modules") {
        setData(modules);
      } else if (endpoint === "users") {
        setData(users);
      }
      setIsLoading(false);
    }, 1000);
  }, [endpoint]);

  return [data, setData, isLoading];
};

export default useLoad;
