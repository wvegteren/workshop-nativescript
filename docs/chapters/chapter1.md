## Getting Started with the NativeScript Playground

Now you'll learn how to use the NativeScript Playground to get started quickly, build your first app, and run the app on your phone.

### About the NativeScript Playground

The [NativeScript Playground](https://play.nativescript.org) is a browser-based environment for developing simple NativeScript apps. 
It’s a great place to get started learning NativeScript, as you can develop apps without needing to install the various 
SDKs and tools needed for native iOS and Android development. All you need is your browser, and an Android or iOS mobile 
device connected to the internet to get started. 


<h4 class="exercise-start">
    <b>Exercise</b>: Explore the Playground and Run an App
</h4>

In this exercise, you'll explore the NativeScript Playground and learn how to run an app built in the Playground on your mobile device.

#### Prerequisites

Before we get started, you'll need to install 2 apps on your mobile device: 

* NativeScript Playground: [iOS](https://itunes.apple.com/us/app/nativescript-playground/id1263543946?mt=8), [Android](https://play.google.com/store/apps/details?id=org.nativescript.play&hl=en)
* NativeScript Preview: [iOS](https://itunes.apple.com/us/app/nativescript-preview/id1264484702?mt=8), [Android](https://play.google.com/store/apps/details?id=org.nativescript.preview&hl=en)

In your respective App Store (Google Play or Apple App Store), locate both apps and install them on your mobile device. 
If you're having trouble finding the app, use the links above.

#### Explore the NativeScript Playground

Next, navigate to the [NativeScript Playground](https://play.nativescript.org) in your browser. 

<img src="images/chapter1/playground-overlay.png" class="img-large" />

Click "Play now" to begin.

<img src="images/chapter1/play-now.png" class="img-small" />

After clicking "Play now" a QR code will appear, and you'll be notified that your Playground is ready:
Open the NativeScript Playground app on your mobile device, and select the "Scan QR code" action.

<img src="images/chapter1/scan-qr.png" class="img-small" />

Using the QR code scanner in the NativeScript Playground app, scan the QR code displayed on the NativeScript Playground 
website. 

After scanning the QR code, the NativeScript Playground app will open the NativeScript Preview app and dynamically load 
the code from the Playground Website and launch a native mobile app on your mobile device!

When all of this happens, you should see this on your mobile device:

<img src="images/chapter1/preview-app.png" class="img-small" />

...and you should also see the following on the Playground website:

<img src="images/chapter1/playground-default.png" class="img-large" />

Congratulations! You just used the Playground to write your first mobile app with Angular. Then, you ran the app on your 
phone. That was fast - and you didn't need to install anything on your computer!

OK, we know you didn't have to do much of anything to write this app, but we promise you'll learn more and build something 
more advanced during the workshop.

<div class="exercise-end"></div>

Before we move on, let's take a minute to understand what happened and explore the NativeScript Playground UI.

### How the NativeScript Playground Works

The NativeScript Playground is a web-based IDE. You write your Angular code in the browser, then save it. When you scan 
the QR code, the NativeScript Playground app coordinates with the NativeScript Preview app and reaches out to the 
Playground website. The code is pulled down, loaded into the NativeScript runtime in the Preview app, and renders native 
iOS/Android UI on your mobile device.

### Exploring the Playground UI

Now that you've learned how the Playground works, let's explore the UI.

As you'll notice, the Playground UI is similar to a basic IDE, like Visual Studio Code, Visual Studio, Eclipse, or Web 
Storm.



On the left is a file explorer, where you can add or update files and folders to your mobile app:


The large central area is a file editor with Intellisense:


The bottom central area shows you which mobile devices are connected to the Playground and device/error logs for debugging 
purposes.


> **Connected Devices** 
>
> Hold on...the Playground shows you connected devices. Yes, that's right. When your mobile device connects to the Playground, 
it registers itself with the website. You can see a variety of information about a connected device. 

Pretty cool, right? Well, there's something even cooler about the Playground: *LiveSync*. 

> **LiveSync**
>
> LiveSync is a technology that syncs changes made in the Playground down to your mobile device in real time. 
This means that you can quickly make changes to your app in the Playground and the changes will be instantly pushed to 
connected devices. If you've ever done mobile development before, you'll understand how useful this is - getting feedback 
from your code running on real mobile devices usually takes time, but with LiveSync, it's instantaneous.

### LiveSync in Action

Now that you've learned about LiveSync, let's see it in action. 

<h4 class="exercise-start">
    <b>Exercise</b>: Using LiveSync
</h4>

In this exercise, you'll learn how to use LiveSync by interacting wth the Playground website and seeing the app on your 
mobile device update automatically.

#### Getting Started

Before we get started with this exercise, be sure to have your Playground app loaded in the NativeScript Preview app.

If your app isn't running, press the "QR code" button in the Playground website, and re-scan the code on your mobile device:

<img src="images/chapter1/qr-code.png" class="img-small" />

#### Understanding Markup

Now that your app is running on your mobile device, let's make a change.

Start by finding the home.component.html file in the _Explorer_ section on the left, then open it for editing by clicking on it.

You'll notice some markup in the home.component.html file. It's not important for you to understand the markup right now, 
but you should know that any markup you place in this file will affect the native UI generated on the home page of your app.

Even though you may not understand all of the markup, you can probably guess at the meaning on most tags. 
NativeScript UI markup is can be easy to understand, because it's similar to HTML. 

For example, look at the markup that displays a label on the screen that contains the text "Play with NativeScript!":

```xml
<Label 
    textWrap="true" 
    text="Play with NativeScript!" 
    class="h2 description-label">
</Label>
```

#### Changing markup with LiveSync

Let's change the text in the home.component.html file. 

Change the text that reads "Play with NativeScript!" to somethings else. Feel free to use the code snippet below, or your own text.

```xml
<Label 
    textWrap="true" 
    text="Using LiveSync is easy and convenient!" 
    class="h2 description-label">
</Label>
```

After making this change, press the "Save" button:

<img src="images/chapter1/save-button.png" class="img-small" />

Then, look back at your mobile device, and watch the UI of the app change.

Easy and cool! 

We'll continue to rely on LiveSync throughout this workshop to get instant feedback in our apps. 

<div class="exercise-end"></div>

Take some time to play around a bit more to get a feel with the various components that NativeScript offers you.
You can drag and drop the components from the components palette to the editor. 
Take a little time to understand the different layouts. They are the key elements for every UI.
  

