<h1 align="center">
    CodeLeap Network
</h1>


Web page developed as part of a recruitment process using ReactJS to simulate a social media feed. It's possible to create posts, edit and delete them, if you are the author. It is also possible to keep yourself connected and logout.

- Status: Completed 🚀
- Figma: https://www.figma.com/file/0OQWLQmU14SF2cDhHPJ2sx/CodeLeap-Frontend-Test
- Live App: https://juniorsergio.github.io/network-feed

---

## Table of Contents

  - [How to execute the project](#how-to-execute-the-project)
  - [Technologies](#technologies)
  - [Components](#components)
  - [Author](#author)

---

## How to execute the project

Before starting you will need installed the following tools: [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/). Furthermore, it is recommended to have a code editor such as [VSCode](https://code.visualstudio.com/).

```bash

# Clone the repository
$ git clone https://github.com/juniorsergio/network-feed.git

# Access the project folder with your terminal/cmd
$ cd network-feed

# Install the dependencies
$ npm install

# Execute the application in development mode
$ npm run dev

# The application will open on http://localhost:5173/network-feed
```

---

## Technologies

The following packages were used to build this project:

**Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

-   **[Vite](https://vitejs.dev/)**
-   **[React Redux](https://react-redux.js.org/)**
-   **[Styled Components](https://styled-components.com/)**
-   **[Interweave](https://interweave.dev/)**
-   **[date-fns](https://date-fns.org/)**

> See the file [package.json](https://github.com/juniorsergio/network-feed/blob/master/package.json)

---

## Components

- [Home](/src/pages/Home.tsx)
    - [Signup](/src/components/Signup/Signup.tsx) - when username is not found on local storage
    - [Feed](/src/components/Feed/Feed.tsx) - renders when user is logged
      - [WritePost](/src/components/WritePost/WritePost.tsx)
      - [Post](/src/components/Post/Post.tsx)
        - [DeleteAlert](/src/components/DeleteAlert/DeleteAlert.tsx)
        - [EditPost](/src/components/EditPost/EditPost.tsx)

---

## Author

<a href="https://juniorsergio.github.io/">
 <img style="border-radius: 50%;" src="https://github.com/juniorsergio.png" width="100px;" alt="Profile picture"/>
</a>

<br/>

[![Github Badge](https://img.shields.io/badge/Portfolio-100000?style=flat-square&logo=github&logoColor=white&link=https://juniorsergio.github.io/)](https://juniorsergio.github.io/) 


[![Linkedin Badge](https://img.shields.io/badge/-Sergio_Junior-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/juniorsergio/)](https://www.linkedin.com/in/juniorsergio/) 


[![Hotmail Badge](https://img.shields.io/badge/-sergio.junior55@hotmail.com-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:sergio.junior55@hotmail.com)](mailto:sergio.junior55@hotmail.com)
