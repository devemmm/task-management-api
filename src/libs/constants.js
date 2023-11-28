class Constant {
  static responses = {
    SUCCESS: { CODE: 200, MSG: "Success" },
    HEADER: {
      AUTHORIZATION: "Authorization",
      CONTENT_TYPE: "application/json",
      MULTIPART_CONTENT_TYPE: "multipart/form-data",
      TIMEOUT: 120000,
    },
    ERROR: {
      MSG: "error",
      INVALID_RESPONSE: "INVALID_RESPONSE",
    },
    BAD_REQUEST: { CODE: 400, MSG: "Bad Request" },
    RESOURCE_ALREADY_EXISTS: { CODE: 409, MSG: "Resource Already Exists" },
    MOVED_PERMANENTLY: { CODE: 301, MSG: "Moved Permanently" },
    UNAUTHORIZED_REQUEST: { CODE: 401, MSG: "Unauthorized Request" },
    FORBIDDEN_REQUEST: { CODE: 403, MSG: "Forbidden Request" },
    RESOURCE_NOT_FOUND: { CODE: 404, MSG: "Resource Not Found" },
    INVALID_PAYLOAD: { CODE: 422, MSG: "Invalid Input Payload" },
    INTERNAL_SERVER_ERROR: { CODE: 500, MSG: "Internal Server Error" },
    CONNECTION: {
      CONNECTED_SUCCESS: {
        CODE: 200,
        MSG: "Connection has been established successfully.",
      },
      CONNECTION_FAILED: {
        CODE: 400,
        MSG: "Could not connect to the database.",
      },
    },
    SQL: {
      TABLE_CREATED_SUCCESS: {
        CODE: 201,
        MSG: "Table was created successfully",
      },
      ERROR_OCP: { CODE: 400, MSG: "error ocpaied" },
    },
  };
}

module.exports = Constant;
