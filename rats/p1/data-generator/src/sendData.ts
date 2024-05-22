import axios from "axios";
import {persons} from "./example-data";
require("dotenv").config();

const sendData = async () => {
  
  for (const person of persons) {
    try {
      const response = await axios.post(
        "http://localhost:3000/persons",
        person
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error with person:", person);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // status != 2xx
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
        } else if (error.request) {
          // without response (timeout)
          console.error("Error request:", error.request);
        } else {
          // other error
          console.error("Error message:", error.message);
        }
      } else {
        // error without axios
        console.error("Error:", error);
      }
    }
  }
};

sendData();
