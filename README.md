## GIGCO SPA Assessment
Single Page Application.

### Goals of assessment.
1. Create new GIT repo
2. Set up a NextJS application
3. Authentication with Firebase
4. Fetch data from GIGCO mockup API

#### Create new GIT repo
Create and clone a new GIT repository for your SPA assessment. Make sure you commit with
comments and push every time a task is complete.

#### Set up NextJS app
Pull nextJS with NPM and set up a new project using a free html admin template such a
Material or one of these: https://athemes.com/collections/free-bootstrap-admin-templates/
Make sure the entire app is already working correctly before moving to the next step.
#### Authentication with Firebase
Make a login / registration page where users can authenticate with Firebase. This requires you
to set up a new Firebase project and configure the correct credentials. Make sure you have at
least 1 social login such as Twitter and login with email & password.
#### Fetch data from GIGCO API
In your branch you need to handle mock-up data from the GIGCO beta-api backend server.

API main endpoint URL: https://beta-api.gigqo.com/api

API contains basic REST endpoints implementing CRUD operations:
|Metod Route |Description|
| ------ | ------ |
|GET /mockup/tracks| List all tracks
|GET /mockup/tracks/{id}| Get details for specific track
|POST /mockup/tracks| Create track
|PUT /mockup/tracks| Update track
|DELETE /mockup/tracks| Delete Track

For the moment json response for all endpoints have following common structure:

```json
    {
        "status": "", // "success" or "error"
        "data": {}, // payload of the request or null in case if error
        "message": "", // error specific message or null in case of success
    }
```

Track list data contains an array of track objects which in turn are used in other API endpoints:

```json
    {
        "id" : "", // Unique track id
        "name": "", // Name of the track
        "artist": "", // Artist
        "year": "", // Year :-)
        "cover": "" // Cover image URL
    }
```

In your requests which modify data you may use the same json object with the same structure
as the request body.

> Mockup responses contain static data, but may return errors randomly!

###### Make sure you at least have the 2 following pages:

- Display a list with all tracks from the API response
- Make a dedicated page that displays info from 1 track.

#### Optional extras

Feel free to add animations, custom design, effects and gestures. These extras aren't required
but are a plus if implemented. It's also possible to add links of your git repositories to the
README if you already built apps with these widgets.

Visit this project here: 