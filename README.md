# MVP For Quiz Manager App



## Description


## How To Use


## Screengrabs
Login screen:

![login screen](demo/login-screen.jpg)

Admin Page:

![admin page](demo/admin-page.jpg)

User Page:

![user page](demo/user-view.jpg)

Quiz Page:

![quiz page](demo/quiz-page.jpg)
## The Stack

* **The Front End**
  * React
  * Redux
  * CSS
* **The Back End**
  * Node
  * Express
  * Mongo instance on mLab
  * Mongoose

## Lessons Learned

* **Process, Planning, Development, Coordination**
  * For the purposes of an MVP go for the simpler solution that works, worry about higher functionality later.
* **Development and Technology**
  * Pros:
    * React is fun to work with.
    * Redux makes is really easy to think about and manage state.
  * Cons:
    * How does passport.session() work?
    * The fetch api does not automatically send cookies (more research needed).
* **Next Steps**
  * Persistent login system so users stay logged in after refresh (cookies!).
  * Better authentication so users can't take other user's quizzes.
  * Sign out button!
  * User creation.
  * More admin features such as quiz creation.
