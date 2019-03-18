##PROJECT PROPOSAL
Includes:
-A description of the project you'll be building with the objective described in non-technical language.
-An explanation of the major problems you plan to face while implementing this app.
-An explanation of how you foresee yourself solving the aforementioned problems.
-A visual of your component hierarchy.
-A link to the API you plan to use.
-A section defining MVP and POST MVP.
-A section explaining relevant databases and database relations.
-If you plan on incorporating a component library, include a link in your proposal.

**description and user story**
Subway Rats is an app that crowdsources user information to make the commuter community of NYC a more effective and efficient unit. Commuting is hectic, stressful, and uncomfortable (especially when you are funneled into a packed car). Maybe the trains at your favorite station are always busy at 8:32 am, but if you go to either of the farthest cars you’re guaranteed a spot to sit. Maybe you get into a car that smells like old garbage (and looks like it too). Maybe you’d be willing to wait two minutes for a less packed train, but you don’t trust all of the apps that work on traditional MTA data.

Our app allows users to not only see nearby subway station stops, but also allows them to create a user profile - saving their favorite stations for easy viewing. These ideas aren’t ground-breaking, but what our app adds is user-provided details. Our app gives the commuter community a way to vent about and praise subway stations. Users can review a station and make comments about busyness/cleanliness/timeliness/emergency-situations/etc. Your comments can include current updates about specific train lines and train car numbers to alert your fellow commuters to stressful situations. Not only will users be able to rate the station and add optional comments, but they can also search user-reviews by subway stations and favorite stations in their profile.

**technologies**

- React and react router
- CSS and stylized React Components
- Bcrypt and jswebtoken
- Npm packages
- Axios
- Sequelize, express, and postgres

**major problems & solutions**
Major problems we anticipate include login and authorization, as well as recognizing a current user that is still logged in (using local storage). As well, there might be difficulty finding data for basic information. While we are designing a crowd-sourced app built on user data (for train times and reviews), there needs to be a starting level of base data accessible to the user.

In researching solutions for these problems, our team anticipates using local storage and potentially oAuth\* for login capabilities. As well, we have found an api that provides some data for train arrivals and departures.

**MVP**
Our app MVP contains the following:

- Styled front-end using CSS and Stylized Components
- Component-based(React) front-end with an efficient App hierarchy
- User Features:
  - Adding favorite subway stations
  - Adding reviews of subway stations and comments including lines and routes
  - Creating a user profile
  - Searching for other stations and reviews
- An authorization system that allows a user to register and log in
  - oAuth\*
- Adding a chart for stations mapping trends of user comments
- Server with logical databases and relations between those databases
- User ability to create, update, read, and destroy information in databases
- Administrative Features\*: - See all information(? Is this safe ?)
  Ability to delete and update user information
  Functionality to hit an API and return mta data to the user

\*all items marked with (\*) are POST-MVP items

**component library**
List of react components:

- Login (function)
- Register (function)
- Logout (function)
- Home (function)
- UserProfile (function)
- Contact (function)
- Search (Class, added state of menuType)
- Station (Class, added state of stationData)
- CommentForm(Class, added state of showing more/less)
- StationList (function)
- CommentList (function - Class if showMore is added)
- Header (function)
- Footer (function)
- Map (function)
- QueryBar (function)

**API**
API for station list: NYC Subway Data http://nycpulse.herokuapp.com/api

**databases and relations**
See database photo in images.
List of databases:

- Users (hasManyComments hasManyStations)
- Stations (hasManyUsers hasManyComments)
- Comments (belongsToUser belongsToStation)
- Avatars (belongsToUsers)
