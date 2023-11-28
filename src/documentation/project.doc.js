const responses = require("./response");

const project = {
  "/project": {
    post: {
      tags: ["Project"],
      summary: "create",
      description: "create project",
      operationId: "Create",
      consumes: "application/json",
      produces: "application/json",
      parameters: [
        {
          name: "Create Project",
          in: "body",
          description:
            "Create a project to allow project manager to be able to create a task based on the available projects",
          required: true,
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              description: {
                type: "string",
              },
              start_date: {
                type: "string",
              },
              end_date: {
                type: "string",
              },
            },
          },
        },
      ],
      security: [
        {
          JWT: [],
        },
      ],
      responses,
    },
    get: {
      tags: ["Project"],
      summary: "information of all project --available for authenticated users",
      description: "list of project",
      operationId: "list of project",
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      tags: ["Project"],
      summary: "delete project --available for authenticated users",
      description: "delete project",
      operationId: "delete project",
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
    patch: {
      tags: ["Project"],
      summary: "update project",
      description: "update project",
      operationId: "Update",
      consumes: "application/json",
      produces: "application/json",
      parameters: [
        {
          name: "update Project",
          in: "body",
          description:
            "update a project to allow project manager to be able to create a task based on the available projects",
          required: true,
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              description: {
                type: "string",
              },
              start_date: {
                type: "string",
              },
              end_date: {
                type: "string",
              },
            },
          },
        },
      ],
      security: [
        {
          JWT: [],
        },
      ],
      responses,
    },
  },
  "/project?id={id}": {
    get: {
      tags: ["Project"],
      summary: "list of single project --available for authenticated users",
      description: "list of single project --available for authenticated users",
      operationId: "list of single project --available for authenticated users",
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
};

const projectDefinitions = {
  Project: {
    type: "object",
    properties: {
      id: {
        type: "integer",
      },
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      start_date: {
        type: "string",
      },
      end_date: {
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
      id: 2,
      name: "RISSA",
      description: "RISSA application",
      status: 1,
      start_date: "2023-03-18T00:00:00.000Z",
      end_date: "2025-11-20T00:00:00.000Z",
      createdAt: "2023-11-23T21:20:09.000Z",
      updatedAt: "2023-11-23T21:20:09.000Z",
      Users: [
        {
          id: 2,
          fname: "Joayesse",
          lname: "UWINEZA",
          phone: "+250788596281",
          country: "Rwanda",
          location: "Kigali Gasabo",
          username: "jou",
          role: "USER",
          status: 1,
          email: "jua@gmail.com",
          password:
            "$2b$08$vdBhPeiVAZ2sekSpKE4BVu.ZeTUIKG5qXQswucu.REFaVBGYPm2GW",
          avatar: "",
          createdAt: "2023-11-23T21:19:58.000Z",
          updatedAt: "2023-11-23T21:19:58.000Z",
          UserProject: {
            selfGranted: false,
            createdAt: "2023-11-23T21:21:08.000Z",
            updatedAt: "2023-11-24T08:07:19.000Z",
            user_id: 2,
            project_id: 2,
          },
        },
      ],
      Tasks: [
        {
          id: 3,
          name: "signup page",
          description: "please do this task it is periolity",
          file: "http://localhost:3001/task/2023-11-24T08:07:18.967ZKigaliKungaClinicInternetInstallation-Sheet1.pdf",
          status: 1,
          start_date: "2023-11-22T00:00:00.000Z",
          end_date: "2023-12-01T00:00:00.000Z",
          createdAt: "2023-11-24T08:07:18.000Z",
          updatedAt: "2023-11-24T08:07:18.000Z",
          project_id: 2,
        },
        {
          id: 2,
          name: "signup page",
          description: "please do this task it is periolity",
          file: "http://localhost:3001/users/profile/2023-11-23T21:21:08.267ZKigaliKungaClinicInternetInstallation-Sheet1.pdf",
          status: 1,
          start_date: "2023-11-22T00:00:00.000Z",
          end_date: "2023-12-01T00:00:00.000Z",
          createdAt: "2023-11-23T21:21:08.000Z",
          updatedAt: "2023-11-23T21:21:08.000Z",
          project_id: 2,
        },
        {
          id: 1,
          name: "signup page",
          description: "please do this task it is periolity",
          file: "http://localhost:3001/users/profile/2023-11-23T21:20:20.517ZKigaliKungaClinicInternetInstallation-Sheet1.pdf",
          status: 1,
          start_date: "2023-11-22T00:00:00.000Z",
          end_date: "2023-12-01T00:00:00.000Z",
          createdAt: "2023-11-23T21:20:20.000Z",
          updatedAt: "2023-11-23T21:20:20.000Z",
          project_id: 2,
        },
      ],
    },
  },
};

module.exports = { project, projectDefinitions };
