## Getting started with NativeScript Sidekick


NativeScript Sidekick is a lightweight but powerful GUI client which runs on your desktop and is available for Windows, 
macOS, and Linux. It enhances the power of the NativeScript Command-Line Interface (CLI) and simplifies the entire 
process of developing a mobile application. Sidekick is designed to be an unobtrusive companion that complements your 
favorite code editor, IDE, source control system, and any other tools you use.

NativeScript Sidekick is pretty straigt forward to use, you can find the [user-guide here](https://docs.nativescript.org/sidekick/user-guide/)

### Create your first app
After NativeScript Sidekick is launched it is realy easy to create your first app - just hit the button `Create App`.
In the `Create App` dialog you can select a template that serves as base for your app. 
<img src="images/chapter2/sidekick-create-app.png" class="img-large" />

Click the `Create` button and your first app is there.

### Configure your IDE
Before you can use the `Open in Editor` button to open your app directly in your preferred code editor, you need to 
configure it properly. To do this, you need to provide a valid path to the executable of your favorite code editor.

To open the settings dialog click the settings icon in the rop right corner of Sidekick.
<img src="images/chapter2/sidekick-settings.png" class="img-small" />

### Build your app

With NativeScript Sidekick you have two choices for building your app:

 * Local build - requires the SDK and platform tools to be installed on your machine
 * Cloud build - no SDKs and tooling required

As the screenshot below shows it is just selecting the right switches ... at least for Android builds. 
<img src="images/chapter2/sidekick-build.png" class="img-large" /> 

If you only plan to build for Android you can continue with chapter 3.
 

### iOS specific - code signing
For iOS builds you will need a certificate and a provisioning profile. When you have a paid Apple subscription
you probably are familiair with it. In that case you can configure your cerificate and provisioning profile 
by clicking the `gear` icon for the connected device. IE in the screenshot below te `gear` icon next
to `iPhone Winfred`.

<img src="images/chapter2/sidekick-ios-sign1.png" class="img-large" />

A yellow exclamation mark next to your device indicate issues with the code signing credentials.
If you don't have a certificate and provisioning profile yet, you can generate them by clicking the 
`Auto Generate` button.
<img src="images/chapter2/sidekick-ios-sign3.png" class="img-large" />
Once the certificate is generated you will need to secure it with a password.
In case you get an eror, you probably need to change the `Application Identifier`. You can access this setting
by clicking the `Properties` icon in the left navication bar.
<img src="images/chapter2/sidekick-ios-sign4.png" class="img-large" />

Now you can create a (cloud) build an run the app on your device. 
<img src="images/chapter2/sidekick-ios-sign8.png" class="img-large" />

Below links to Sidekick videos that guide you through the build and signing process in more detail 
 * [iOS with a **Free** Apple Developer Account](https://www.youtube.com/watch?time_continue=6&v=5gKuR2UCOnM)
 * [iOS with a **Paid** Apple Developer Account](https://www.youtube.com/watch?time_continue=6&v=5gKuR2UCOnM)


 
### iOS specific - untrusted developer
In case you have created your code signing credentials by clicking the `Auto Generate` button you will see 
a message `Untrusted Developer` the first time you start the app. 

<img src="images/chapter2/untrusted-developer.png" class="img-small" />

You can trust your personal profile in the `Settings / Instellingen` app on your phone. In the `Settings / Instellingen` 
app select the options below:
 * `General / Algemeen` 
 * `Profile & Device Management / Beheer profielen en apparaten`
 * Select your personal profile
 * `Trust 'your personal profile'`
 
Once you have trusted your personal profile you can use the app on your device.



