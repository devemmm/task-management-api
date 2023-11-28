const responses = require("./response");

const user = {
  "/user/signin": {
    post: {
      tags: ["User"],
      summary: "sigin",
      description: "signin",
      operationId: "Signin",
      consumes: "application/json",
      produces: "application/json",
      parameters: [
        {
          name: "Signin",
          in: "body",
          description:
            "Signin route for purpose of getting the valid authorization token to use for other requests",
          required: true,
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
              },
              password: {
                type: "string",
              },
            },
          },
        },
      ],
      responses,
    },
  },
  "/user/signup": {
    post: {
      tags: ["User"],
      summary: "Signup",
      description: "Signup",
      operationId: "Signup",
      consumes: ["multipart/form-data"],
      produces: "application/json",
      parameters: [
        {
          name: "avatar",
          in: "formData",
          required: "true",
          type: "file",
          description: "Profile image",
        },
        {
          name: "fname",
          in: "formData",
          required: "true",
          type: "string",
          description: "first name"
        },
        {
          name: "lname",
          in: "formData",
          required: "true",
          type: "string",
          description: "last name"
        },
        {
          name: "phone",
          in: "formData",
          required: "true",
          type: "integer",
          description: "Phone number"
        },
        {
          name: "country",
          in: "formData",
          required: "true",
          type: "string",
          description: "country"
        },
        {
          name: "location",
          in: "formData",
          required: "true",
          type: "string",
          description: "location"
        },
        {
          name: "username",
          in: "formData",
          required: "true",
          type: "string",
          description: "username"
        },
        {
          name: "email",
          in: "formData",
          required: "true",
          type: "string",
          description: "email"
        },
        {
          name: "password",
          in: "formData",
          required: "true",
          type: "string",
          description: "password"
        }
      ],
      responses,
    },
  },
  "/user": {
    get: {
      tags: ["User"],
      summary: "list of employees ",
      description: "list of users",
      operationId: "list of users",
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
    patch: {
      tags: ["User"],
      summary: "update",
      description: "update",
      operationId: "update",
      consumes: ["multipart/form-data"],
      produces: "application/json",
      parameters: [
        {
          name: "id",
          in: "path",
        },
        {
          name: "avatar",
          in: "formData",
          required: "true",
          type: "file",
          description: "Profile image",
        },
        {
          name: "fname",
          in: "formData",
          required: "true",
          type: "string",
          description: "first name"
        },
        {
          name: "lname",
          in: "formData",
          required: "true",
          type: "string",
          description: "last name"
        },
        {
          name: "phone",
          in: "formData",
          required: "true",
          type: "integer",
          description: "Phone number"
        },
        {
          name: "country",
          in: "formData",
          required: "true",
          type: "string",
          description: "country"
        },
        {
          name: "location",
          in: "formData",
          required: "true",
          type: "string",
          description: "location"
        }
      ],
      responses,
    },
    delete: {
      tags: ["User"],
      summary: "delete employee of employees ",
      description: "delete employee",
      operationId: "delete employee",
      produces: ["application/json"],
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/user?id={id}": {
    get: {
      tags: ["User"],
      summary: "single user info ",
      description: "single user info ",
      operationId: "single user info ",
      produces: ["application/json"],
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/user/changePassword": {
    patch: {
      tags: ["User"],
      summary: "reset password",
      description: "reset password",
      operationId: "reset password",
      consumes: "application/json",
      produces: "application/json",
      parameters: [
        {
          name: "id",
          in: "path",
        },
        {
          name: "oldPassword",
          in: "body",
          required: "true",
          type: "string",
          description: "Old password",
        },
        {
          name: "newPassword",
          in: "body",
          required: "true",
          type: "string",
          description: "new  Password",
        },
      ],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
};

const userDefinitions = {
  User: {
    type: "object",
    properties: {
      id: {
        type: "integer",
      },
      fname: {
        type: "string",
      },
      lname: {
        type: "string",
      },
      phone: {
        type: "string",
      },
      country: {
        type: "string",
      },
      location: {
        type: "string",
      },
      username: {
        type: "string",
      },
      status: {
        type: "integer",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
      avatar: {
        type: "string",
      },
      createdAt: {
        type: "string",
      },
      updatedAt: {
        type: "string",
      },
    },
    example: {
      fname: "Emmanuel",
      lname: "NTIVUGURUZWA",
      phone: "+250788596281",
      country: "Rwanda",
      location: "KIGALI City",
      username: "devemm",
      role: "USER",
      status: 1,
      email: "entivug@gmail.com",
      avatar:
        "http://localhost:3001/users/profile/2023-11-23T21:19:44.296Zprofile.jpg",
      createdAt: "2023-11-23T21:19:44.000Z",
      updatedAt: "2023-11-23T21:19:44.000Z",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDA4MjQwMDJ9.KLZ1lE-frBFBFKgbxc1kCo1QzgZPazuC-aOF8ekBunk",
    },
  },
};

module.exports = { user, userDefinitions };
