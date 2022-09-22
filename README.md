# Getting Started with Create React Native App ("hello_react_native")

## Setting up the environment
https://reactnative.dev/docs/environment-setup

## Install chocolatey with Powershell (Run as administrator)
> `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`

## Install NodeJs
https://nodejs.org/en/download/

## Choose OpenJDK11 or JDK18 as below:

## Install Java SE Development Kit (OpenJDK 11)
> `choco install -y nodejs-lts openjdk11`

C:\Program Files\Eclipse Adoptium\jdk-11.0.16.101-hotspot
C:\ProgramData\chocolatey\lib\openjdk11

## Install Java SE Development Kit 18 :
https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html

## Create new environment variable:
JAVA_HOME=C:\Program Files\Java\jdk-18.0.2.1

## Install Android Studio:
Download and install Android Studio at https://developer.android.com/studio

- While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:
	+ Android SDK
	+ Android SDK Platform
	+ Android Virtual Device
	+ If you are not already using Hyper-V: Performance (Intel ® HAXM) (See here for AMD or Hyper-V)

## Check the new environment variable:
> `Get-ChildItem -Path Env:\`

## Configure the ANDROID_HOME environment variable to User Variables environment
- ANDROID_HOME=C:\Users\DELL3427\AppData\Local\Android\Sdk
- Add to Path `%LOCALAPPDATA%\Android\Sdk\platform-tools`

## Open "Turn Window features on or off" at window os
- Check "Window Hypervisor Platform" and click OK to install this

## Install react-native-cli
> `npm install -g react-native-cli`

## Install yarn
> `npm install -g yarn`

## Permit yarn work on this system by command:
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted`

## Create new device "Pixel 4"
- Open Android Studio -> Projects -> More Actions -> Virtual Device Manager -> Create Device -> Phone -> Pixel 4 -> Next -> ... Download R

## Open the current folder with Visual Studio Code
> `cd D:\projects\vinhquantic\hello_react_native`
> `code .`

## Start the device "Pixel 4", before run the application
Pixel 4 API 30 (Android 11.0 Google Play | x86)

## Generate the react native project with name "hello_react_native". This is new folder, not overide
> `npx react-native init hello_react_native`

## Run the application
> `cd hello_react_native`
> `yarn android`


# Some Errors in setting up and how to fix:

## If occur error "TypeError: cli.init is not a function" when create new project :
 https://stackoverflow.com/questions/72768245/typeerror-cli-init-is-not-a-function-for-react-native
### Remove react-native-cli
> `npm uninstall -g react-native-cli`
### Then install react-native-cli and react-native again:
> `npm install -g react-native-cli`
> `npm install -g react-native`
### Then create project again
> `npx react-native init AwesomeProject`

### If you did not install react-native, quire to install: You enter y to say yes.
### Go to the project folder
> `cd hello_react_native`

### Start application and android studio
> `npx react-native run-android`

### For me the solution that worked is to run emulator from terminal, forcing it to run using hardware graphics (instead of letting emulator decide on which) using command
> `cd C:\Users\DELL3427\AppData\Local\Android\Sdk\emulator`
> `emulator -avd avd_name -gpu mode`

### Find emulator to run by listing available ones:
> `emulator -list-avds`

### Run emulator with -gpu host option:
> `emulator -avd avd_name -gpu host`