# BidmcAtHomeRN
This is an open source, volunteer effort to create a RN application that allows patients to log health information (e.g. oxygen saturation levels) and send that data back to their health care provider.


## Usage
Just run `yarn` to install and `yarn start` to run all the dev stuff. Then just connect to it via the web interface, a local emulator, or the Expo app via your phone. 


## Quick note on Expo
This project is currently using [Expo](http://expo.io/), "a framework and a platform for universal React applications". Basically it lets you not worry about the native iOS/Android aspects of the project and just write JS. And provides a few  neat build/debugging tools, like the ability to put a local version of the app on your phone and have it automatically reload as you write code on your computer. The downside of all this is it's kinda heavy and limits you to only doing  certain native things. The good news is if we run into any of those limitations or want to optimize our app, we can just "eject" the project - which gets rid of some of the ease and neat features but lets us treat this as any other React Native application. 



