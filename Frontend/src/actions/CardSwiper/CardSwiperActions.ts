import request from "superagent";

export const validateStudent = (sid: number) => {
  return (
    request
      .get(`http://localhost:8080/validateStudent/?sid=${sid}`)
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
      .get(`http://localhost:8080/checkDuplicateStudent/?sid=${sid}`)
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
      .get(`http://localhost:8080/insertStudentId/?sid=${sid}`)
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
  return (
    request
      .get(`http://localhost:8080/getNumberOfSweaters`)
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
