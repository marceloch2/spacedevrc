# Quin SpaceDev Test App

1. Install your dependencies

```
cd QuinTest && yarn
```

2. Start Metro Bundle

```
yarn start
```

3. Start IOS Simulator

```
yarn ios
```

# Running E2E test with Detox

1. Build the App

```
yarn builde2e
```

2. Start E2E tests

```
yarn teste2e
```

# TECH DECISIONS

# STRUCTURE OF THE PROJECT

As a test app, I've decided to not use a boilerplate like Igniter and many other CLI to generate all the config.
Using the default React Native CLI to Bootstrap the project and configuring Jest, Typescript, StyledComponents, Navigator, State Management, and Detox shows an understanding of an RC App development end-to-end lifecycle.

# Style

Decided to use the StyledComponents library as it's easy to create and extend style for multiple components and screens when a project started to grow. Also writing plain CSS instead ReactNative style properties makes more sense in general, for maintenance and other developer's sake.

# State Management

Using Recoil over Redux or simple Context API makes sense as using Atoms and Selector makes it easier while sharing data between components.

# E2E

Using Detox for E2E test is easy and the plugins and extensions are plenty, the configuration to build the first time is kind of a mess but after it's set the possibilities are huge.

# Final considerations

# Areas you would have liked to change, why, and how.

Well, that's a lot and the 429 error from the API was a bit frustrating, not sure if it was my fault but after the first hour, I already started to get back the exceed quota error.

I would write a proper structure of typescript interfaces and modules to organize the types;
I would write Unit tests for SpaceDev Fetch method;
I would isolate all the filters methods to create Unit tests using Mock data and test all Filters Functionalities required;
I would make Detox navigate the filters and test the List of launches filtered;

And most important I would fetch first the SpaceDev API and mock all the data returned, for launches and agencies. Having all the JSON data locally would make my life easier to keep developing and when creating Unit tests.

Side note: After 3 Map libraries tried I manage to put up and running react-native-maps, the promised no link needed from RC sometimes is not true, had to unlink and ios/ pod install many times. To make it really works I had to build using XCode at the end.
