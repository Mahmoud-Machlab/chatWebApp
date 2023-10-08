This project is based on
[`chayns-toolkit`](https://github.com/TobitSoftware/chayns-toolkit)


# Application Overview
Sign APP is a comprehensive chat application that allows users to communicate in real-time. Here are some of its key features:

#### Real-time Messaging: 
Users can send and receive messages instantly.
#### Emojis Integration: 
Enhance conversations with a variety of emojis.
#### Seamless Synchronization: 
Leveraging Firebase's Realtime Database, chat logs are not only stored but are also synchronized in real-time. This ensures that messages reflect immediately across devices.
#### Chat Management: 
Users have the option to clear the chat if needed, ensuring that they have full control over their chat history.




# Get Started

To get started with working on the project first you have to install its
dependencies:

```bash
npm install
```

Then you will have the following commands available:

### `npm run dev`

This starts the project with a local server for development. Typically this will
be on [`http://localhost:1234/`](http://localhost:1234/), but this
[can be adjusted](https://github.com/TobitSoftware/chayns-toolkit#development-options).

### `npm run build`

This builds your project for production.

> If you want to analyze your bundle size you can do so by passing the `-a` flag
> to this command.

### `npm run lint`

Checks your project for errors and code quality.

### `npm run format`

Automatically formats all of the source code in your project.



This project is based on
[`chayns-toolkit`](https://github.com/TobitSoftware/chayns-toolkit). If you
encounter any issues with the toolchain and the commands, please
[open an issue](https://github.com/TobitSoftware/chayns-toolkit/issues/new).


---


# Step One

Since we want to use chayns-toolkit to get the features that it provides, so kindly follows the below : 

### Install chayns-toolkit:

#### Open your terminal and run the following command to install chayns-toolkit globally:

```bash
npm install -g chayns-toolkit
```


The chayns-toolkit contains pre-configured tools for the development, publishing, and quality assurance of your app, and is specialized in developing apps and plugins for the chayns® platform​​ (https://www.npmjs.com/package/chayns-toolkit).


## Create a New App:

#### Navigate to the directory where you want to create your new chayns app.

Run the following command to create a new chayns app:


### create-chayns-app my-new-app
#### or alternatively
### npx create-chayns-app my-new-app

###Replace my-new-app with the name you want for your project.

The create-chayns-app command line tool will set up an optimal development environment for your project in one command​​ (https://tobitsoftware.github.io/chayns-toolkit/docs/#:~:text=To%20start%20a%20new%20project,for%20you%20in%20one%20command).

### Navigate to Your App Directory:

Once the app has been created, navigate to its directory using the following command:


```bash
cd my-new-app
```


### Start Development Server:

#### Start the development server by running the following command:

```bash
chayns-toolkit dev
```

## In case you want to read the full documentation about creating the chayns-app then kindly follow the below Link : 

https://github.com/TobitSoftware/create-chayns-app


---


# Step Two

## Setting Up Firebase
#### Creating a Firebase Project:

### Go to the Firebase Console.

Click Add Project and follow the setup prompts.

### Configuring Realtime Database:

Navigate to Develop > Database.
Select Create Database for the Realtime Database.
Choose the appropriate database rules and region.

### Acquiring Firebase SDK credentials:

### Visit Project Settings.
Under Your apps, select the web platform </> and register your app. Firebase will then provide the configuration details needed for your web app.

### Integrating Web App with Firebase
Installing the Firebase SDK:

```bash
npm install firebase
```


## Initializing Firebase in the App:

#### Locate the Firebase SDK snippet provided during the app registration in Firebase Console.
#### Create a new file, typically named firebaseConfig.js, in your project's src directory.
#### Paste the Firebase SDK snippet into firebaseConfig.js.

## Database Operations:

```bash
// Example firebaseConfig.js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

export default firebaseConfig;
```

---


## Import firebaseConfig.js and initialize Firebase in your app's main entry file, typically index.js.

```bash
// Example index.js
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## Database Operations:

Firebase's database references are instrumental in performing various operations. With these references, you can:

### Push new data or messages:

```bash
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();
const dataRef = ref(db, 'path/to/data');
set(dataRef, {newData: "Hello World!"});
```

### Set or update existing data:

```bash
import { getDatabase, ref, update } from "firebase/database";

const db = getDatabase();
const dataRef = ref(db, 'path/to/data');
update(dataRef, {existingData: "Updated Value"});
```


### Fetch data for real-time display:

```bash

import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const dataRef = ref(db, 'path/to/data');
onValue(dataRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
```

For more detailed information and advanced configurations, refer to the official Firebase Documentation (https://firebase.google.com/docs) .


---


# Step Three

## Deploying the Web App to Firebase
#### Prerequisites:

Ensure you have installed Firebase CLI. If not, install it using the following command:

```bash
npm install -g firebase-tools
```


### Make sure you are logged into Firebase in your command line using the following command:

```bash
firebase login
```

### Initialize Firebase in Your Project:

Navigate to your project directory in the terminal and run the following command to initialize Firebase:

```bash
firebase init
```

### During initialization:

## Select Hosting: Configure and deploy Firebase Hosting sites.

Choose the Firebase project you created earlier.
Specify the build directory as your public directory.
Configure as a single-page app by responding Yes to the prompt.
Optionally, set up automatic builds and deploys with GitHub by following the prompts.
Build Your Project for Production:
Before deploying, build your project for production using the following command:

```bash
npm run build
```

### Deploy Your Project to Firebase:
Now deploy your project to Firebase using the following command:

```bash
firebase deploy
```

 Once the deployment is successful, Firebase will provide a URL to your deployed web app. You can now share this URL with others to access your web app online.

### Manage Deployments:

You can manage and rollback deployments through the Firebase console under the Hosting section.

For more advanced deployment configurations and options, refer to the official Firebase Hosting Documentation (https://firebase.google.com/docs/hosting).

---

# Step Four

## GitHub Repository Creation & Pushing

### Initialize Git in PowerShell:

```bash
cd path-to-your-project
```

```bash
git init
```

## Setting up a GitHub Repository:

#### Head to GitHub and initiate a new repository.
#### Follow the provided instructions to link your local repo to GitHub.

## Pushing to GitHub:

```bash
git add .
git commit -m "Initial commit"
git remote add origin [YOUR-GITHUB-REPOSITORY-LINK]
git push -u origin master
```

### Replace [YOUR-GITHUB-REPOSITORY-LINK] with the URL of your GitHub repo.

---

# Next Stage

Now, the web app has reached a significant milestone. It's not only crafted and polished but also registered with Firebase, tethered to its Realtime Database, and deployed onto Firebase Hosting to ensure its online availability. Furthermore, the project has found its home on GitHub, providing a centralized hub for collaborative development. This GitHub repository facilitates access from diverse computing environments, fostering a shared workspace where contributions to the project are welcomed and encouraged.

The current iteration of the web app enables real-time chatting across two browsers. Additionally, the web app extends its reach to mobile platforms — a simple tap on the provided URL transforms your mobile browser into a gateway to the web app, offering an app-like experience. Alternatively, any browser serves as a portal to the interactive chat environment the web app encapsulates.

However, the narrative of the web app doesn't end here; an intriguing facet awaits exploration. The web app is designed to engage in a dialogue with an Android app, crafted with Jetpack Compose. This Android companion app holds the key to responding to the conversations initiated on the web app, thus completing the communication cycle.

Embark on the journey of extending the chat ecosystem by diving into the development of the Android app. The repository hosting the Android app project is a click away. Embrace the collaborative spirit, and contribute to evolving the chat experience across the web and Android platforms.

Start creating the Android app on GitHub (https://github.com/Mahmoud-Machlab/sign)












