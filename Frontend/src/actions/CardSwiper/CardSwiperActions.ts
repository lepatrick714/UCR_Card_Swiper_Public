import request from "superagent";

export const validateStudent = (sid: number) => {
  return (
    request
      // .get(`http://localhost:8080/validateStudent/?sid=${sid}`)
      .get(`http://rgear.live:8080/validateStudent/?sid=${sid}`)
      .then(res => {
        return {
          ...res.body["success"]
        };
      })
      .catch(err => {
        return "Error";
      })
  );
};

export const checkDuplicateStudent = (sid: number) => {
  return (
    request
      // .get(`http://localhost:8080/checkDuplicateStudent/?sid=${sid}`)
      .get(`http://rgear.live:8080/checkDuplicateStudent/?sid=${sid}`)
      .then(res => {
        return {
          ...res.body["success"]
        };
      })
      .catch(err => {
        return "Error";
      })
  );
};

export const insertStudentId = (sid: number) => {
  return (
    request
      // .get(`http://localhost:8080/insertStudentId/?sid=${sid}`)
      .get(`http://rgear.live:8080/insertStudentId/?sid=${sid}`)
      .then(res => {
        return {
          ...res.body["success"]
        };
      })
      .catch(err => {
        return "Error";
      })
  );
};


export const getNumberOfSweaters = () => {
  // TODO: lepatrick714 - Add a connection test function before dispatching the request
  return (
    request
      // .get(`http://localhost:8080/getNumberOfSweaters`)
      .get(`http://rgear.live:8080/getNumberOfSweaters/`)
      .then(res => {
        return {
          ...res.body["success"]
        };
      })
      .catch(err => {
        return "Error";
      })
  );
};
