const responses = require("./response");

const task = {
  "/task": {
    post: {
      tags: ["Task"],
      summary: "create task",
      description: "create task",
      operationId: "create task",
      consumes: ["multipart/form-data"],
      produces: "application/json",
      parameters: [
        {
          name: "file",
          in: "formData",
          required: "true",
          type: "file",
          description: "Attach task file"
        },
        {
          name: "name",
          in: "formData",
          required: "true",
          type: "string",
          description: "task title"
        },
        {
          name: "description",
          in: "formData",
          required: "true",
          type: "string",
          description: "task description"
        },
        {
          name: "priority",
          in: "formData",
          required: "true",
          type: "string",
          description: "task priority ['LOW', 'MEDIUM', 'HIGH']"
        },
        {
          name: "start_date",
          in: "formData",
          required: "true",
          type: "string",
          description: "task start_date"
        },
        {
          name: "end_date",
          in: "formData",
          required: "true",
          type: "string",
          description: "task end_date"
        },
        {
          name: "project_id",
          in: "formData",
          required: "true",
          type: "string",
          description: "Project Id"
        },
        {
          name: "assignees",
          in: "formData",
          required: "true",
          type: "string",
          description: "Project Users ex: [1]"
        }
      ],
      security: [
        {
          JWT: [],
        },
      ],
      responses,
    },
    get: {
      tags: ["Task"],
      summary: "list of all task --available for authenticated users",
      description: "list of task",
      operationId: "list of task",
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
    patch: {
      tags: ["Task"],
      summary: "update task",
      description: "update task",
      operationId: "update task",
      consumes: "application/json",
      produces: "application/json",
      parameters: [
        {
          name: "update Task",
          in: "body",
          description: "update task based on available",
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
              priority: {
                type: "string",
              },
              file: {
                type: "string",
              },
              start_date: {
                type: "string",
              },
              end_date: {
                type: "string",
              },
              project_id: {
                type: "integer",
              },
              users: {
                type: "array",
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
    delete: {
      tags: ["Task"],
      summary: "delete task by id --available for authenticated users",
      description: "delete",
      operationId: "delete",
      produces: ["application/json"],
      responses,
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/task?id={id}": {
    get: {
      tags: ["Task"],
      summary: "list of all single task --available for authenticated users",
      description:
        "list of all single task --available for authenticated users",
      operationId:
        "list of all single task --available for authenticated users",
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

const taskDefinitions = {
  Task: {
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
      priority: {
        type: "string",
      },
      start_date: {
        type: "string",
      },
      end_date: {
        type: "string",
      },
      project_id: {
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
      name: "signup page",
      description: "please do this task it is periolity",
      file: "http://localhost:3001/users/profile/2023-11-23T21:21:08.267ZKigaliKungaClinicInternetInstallation-Sheet1.pdf",
      status: 1,
      priority: "MEDIUM",
      start_date: "2023-11-22T00:00:00.000Z",
      end_date: "2023-12-01T00:00:00.000Z",
      createdAt: "2023-11-23T21:21:08.000Z",
      updatedAt: "2023-11-23T21:21:08.000Z",
      project_id: 2,
      Users: [
        {
          id: 1,
          fname: "Emmanuel",
          lname: "NTIVUGURUZWA",
          phone: "+250788596281",
          country: "Rwanda",
          location: "KIGALI City",
          username: "devemm",
          role: "USER",
          status: 1,
          email: "entivug@gmail.com",
          password:
            "$2b$08$.RJ9hEVI.CJznni.jnb8jO.flsMeftz7cML3.vgqvz0tQVw23.5TK",
          avatar:
            "http://localhost:3001/users/profile/2023-11-23T21:19:44.296Zprofile.jpg",
          createdAt: "2023-11-23T21:19:44.000Z",
          updatedAt: "2023-11-23T21:19:44.000Z",
          UserTask: {
            selfGranted: false,
            createdAt: "2023-11-23T21:21:08.000Z",
            updatedAt: "2023-11-23T21:21:08.000Z",
            user_id: 1,
            task_id: 2,
          },
        },
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
          UserTask: {
            selfGranted: false,
            createdAt: "2023-11-23T21:21:08.000Z",
            updatedAt: "2023-11-23T21:21:08.000Z",
            user_id: 2,
            task_id: 2,
          },
        },
      ],
      Project: {
        id: 2,
        name: "RISSA",
        description: "RISSA application",
        status: 1,
        start_date: "2023-03-18T00:00:00.000Z",
        end_date: "2025-11-20T00:00:00.000Z",
        createdAt: "2023-11-23T21:20:09.000Z",
        updatedAt: "2023-11-23T21:20:09.000Z",
      },
    },
  },
};

module.exports = { task, taskDefinitions };
