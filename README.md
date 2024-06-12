# ReactJS Tutorial 2024

- Made with love from [nextjsvietnam.com](https://nextjsvietnam.com/categories/reactjs-tutorial/)

> Some notes:

- ReactJS Version: ^18.2
- Language: Typescript
- Bundler Tool: vite
- Test Framework: vitest

## React Query

Let's get started with api calls

```sh
npm install json-server -D
```

- https://github.com/typicode/json-server

So we have these endpoints?

```sh
GET|POST http://localhost:1337/tasks
PUT|DELETE http://localhost:1337/tasks/1

GET http://localhost:1337/tasks?_page=1&_per_page=25&_sort=id,-views&views_gt=100
```

Let's write a httpClient service to accomplish fetching data mission.

## Data Validation

**Parse, don't validate**

- Formilk + Yup vs Form Hook + Zod
