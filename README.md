# for Google Team by Dipesh Bhoir
What is the Goal?
We have a Angular 14 Universal application with firebase@9.16.0 client and firebase-admin@11.5.0 server
- Meta tags should render from firestore data
- Html page should render filling in firestore data

# STEP1
`cd` in [google] folder then `npm install` to install client modules

# STEP2
Assuming you are in google folder
`cd dist/functions` then then `npm install` to install firebase functions modules

# STEP3
Assuming you are in google folder
`ng run client:serve-ssr` to run angular universal ssr app
project runs on http://localhost:4200

# STEP4
`cd dist` then `firebase serve` to run firebase hosting and functions
project runs on http://localhost:5002

# Suggestion
- Use postman for SSR 
- Use Chrome Browser for normal App

No need to Deploy. Just Manage to

1. Meta tags should render from firestore data
How to verify?
Use Postman Get Request on localhost:5002 after firebase serve

2. Html page should render filling in firestore data
How to verify?
Check if the below statement renders
<span style="background: green;" *ngIf="map$|async as m">id:{{m}}</span>

# STEP5 (optional)
`cd dist` then `firebase deploy` to deploy firebase hosting and functions
here is the url it will be hosted on
https://test-dipesh.web.app

# project name = client
We are not using any external library.
Angular 14 Universal application with firebase@9.16.0 client and firebase-admin@11.5.0 server
(call/whatsapp) +91 9892381514
email: DipeshBhoir@hotmail.com
We could also use GoogleMeet or any thing necessery to get this done.

# ALL RIGHTS RESERVED | Dipesh Bhoir
https://github.com/dipesious
https://twitter.com/dipesious
