## Lesson 3 - Components and Services

### Services
<!-- https://angular.io/docs/ts/latest/tutorial/toh-pt4.html-->

Services are JavaScript functions that are responsible for doing a specific task. Angular services are injected using a 
Dependency Injection mechanism and include the value, function or feature that is required by the application. 
There is nothing especially related to Services in NativeScript Angular--there is no ServiceBase class--but still 
services can be treated as fundamental to Angular applications.

#### Creating a service

Creating a `Service` is really simple. You need to import `Injectable` function and apply it as the `@Injectable` 
decorator. Then we need to create a class for our service and `export` it:

``` javascript
import { Injectable } from '@angular/core';

@Injectable()
export class MyHappyService {
  
  public doSomethingFun() {
    console.log('I am a happy bunny... hop, hop, hop');
  }
}
```

#### Naming convention

Following the naming convention in Angular, the above service should be placed in a file called: `my-happy.service.ts`. 
This is basically the name of the class in lower case, each word (excluding the word `service`) separated with `-` and 
followed by `.service.ts`.

The same naming convention applies to all files in an Angular app like: `currency.pipe.ts`, `navigation-menu.component.ts`, 
`login.model.ts`.

#### Adding the service to app.modules.ts

In order to make our service available in the app, you need to add to `providers` in the `@NgModule`.
The global `@NgModule` is located in `app.module.ts`.

``` javascript
import { MyHappyService } from './my-happy.service';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
  ],
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  providers: [
    MyHappyService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
```

#### Injecting services

<!--Angular docs: https://angular.io/docs/ts/latest/guide/dependency-injection.html-->
In order to use a service in a component, we need to inject it in the component's `constructor`.

> Note: You can also inject services into other services or pipes.

This is done like this:

``` javascript
constructor(private myHappyService: MyHappyService) {
  //constructor code
}
```

Here is how you inject and then use a service:

``` javascript
import { MyHappyService } from '../my-happy.service';

@Component({
  selector: 'app-mood',
  templateUrl: './mood/mood.component.html'
})
export class MoodComponent {

  constructor(private myHappyService: MyHappyService) {
  }

  showYourMood() {
    this.myHappyService.doSomethingFun();
  }
}
```

### Http
<!--https://medium.com/google-developer-experts/angular-2-introduction-to-new-http-module-1278499db2a0#.nh7b07pjg-->

NativeScript comes with its own implementation of the `Http` module, which uses `Android` and `iOS` native functionality 
to perform the calls.

This is exposed as `NativeScriptHttpClientModule`, which implements the same interface as the web `HttpClient` module.

#### Http: adding the module to the app

This means that all you have to do is declare our NativeScript wrapper in the respective module file and Dependency 
Injection will take care of the rest.

This is done by adding `NativeScriptHttpClientModule` to `@NgModule` `imports`.

``` javascript
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
```

``` javascript
imports: [
  ...
  NativeScriptHttpClientModule,
],
```

From this point onwards the code that uses the `HttpClient` module is `exactly the same` as the code you would write for 
a `web application`.

This gives us a high level Angular `Http` module that is capable of performing various request natively for `Android`, 
`iOS` and `Web`.

![Http](images/chapter6/http.png?raw=true)

#### Http: Injecting the service

Then you can `import` and `Inject` the `HttpClient` module where you are planning to use it.

``` javascript
import { HttpClient } from '@angular/common/http';
```

``` javascript
constructor(private http: HttpClient) {
}
```

### RxJS

Before we call an API we need to first discuss RxJS. You may have heard of it before - if so feel free to skip ahead. 
[RxJS](http://reactivex.io/rxjs/) is the ReactiveX library for JavaScript.

RxJS is a library for using Observables. We aren't going to discuss observables in detail, but, you do need to know that 
observables are objects that allow you to subscribe events. For example, if a value changes in an observable, 
subscribers will be notified of the change. Luckily for us NativeScript and Angular already know how to use observables 
so we can bind observable objects straight to our UI when we receive them back from our API calls.


#### Http: calling the service

The http module has a bunch of useful functions like, `get`, `post`, `put`, `delete` and others.
Each takes a `url` as a parameter and optional `options`, and then they return an `Observable` with a `Response`.

``` javascript
get(url: string, options?: RequestOptionsArgs): Observable<Response>
```

Example of how to call `get` and `subscribe` to the `Observable` result:

``` javascript
doSomething() {
  this.http.get('http://api.someopendata.org/cities') // make the call
  .pipe(                                              // pipe() let you combine multiple functions into a single function
    map(result => result.cities)                      // map the result to the object we need to return
  )
  .subscribe(                                         // subscribe and do something with the result
    cities => console.log(cities),
    error => console.error('Error: ' + err),
    () => console.log('Completed!')
  )
}
```


#### Http: Adding Headers to http calls

If you need to pass headers into a `http` call, you can construct it by using `HttpHeaders` class, append data and then 
add it to `options?`.

``` javascript
import { HttpClient, HttpHeaders } from "@angular/common/http";
```

``` javascript
let myHeaders = new HttpHeaders();
myHeaders.append('key', 'value');

this.http.get('http://api.someopendata.org/cities', { headers: myHeaders })

```

#### Http: Constructing URL search params

If you need to pass query parameters (like service?mood='happy'&face='round') into a `http` call, you can construct it 
by using `HttpParams` class, append query params and then add it to `options?`.

``` javascript
import { HttpClient, HttpHeaders } from "@angular/common/http";
```

``` javascript
let searchParams: HttpParams = new HttpParams();
searchParams.set('mood', 'happy');
searchParams.set('face', 'round');

this.http.get('http://api.someopendata.org/cities', { headers: myHeaders, params: searchParams })
```

### Exercise: Launch Service

For this exercise we will use APIs from SpaceX to get information for upcoming and past launches.
All code for ths exercise is located in the `spacex` folder. You can find the `LaunchService` in `spacex/services/launch.service.ts`.

If you are using `Playground` then you should head to: [https://play.nativescript.org/?template=play-ng&id=OAc6BX&v=4](https://play.nativescript.org/?template=play-ng&id=OAc6BX&v=4)
Please `Fork` the Playground app to create your 'own' Playground environment.

You can find the documentation for the [SpaceX APIs here](https://github.com/r-spacex/SpaceX-API/tree/master/docs).


<h4 class="exercise-start">
  <b>Exercise</b>: Injecting SpaceX launch service
</h4>

Let's start with changing the default route in `app-routing.module.ts` to `'/spacex'`:

``` javascript
{ path: '', redirectTo: '/spacex', pathMatch: 'full' },
```

The app will start but when you tap the button `View Launches`, it will fail with the following error: 
`Error: No provider for LaunchService!` 

You need to add the `LaunchService!` to `app.module.ts`.

<b>HINT</b> Remember that this should be added to the providers.

<div class="solution-start"></div>

First import `LaunchService`

``` javascript
import { LaunchService } from "./spacex/services/launchService"
```

And then add this inside `@NgModule`:

``` javascript
providers: [
  LaunchService
],
```

<div class="solution-end"></div>

<div class="exercise-end"></div>

Now the app should be loading launches without any issues. However not all API calls are implemented yet.
The API call for getting the details of a past launch should still be implemented.

<h4 class="exercise-start">
  <b>Exercise</b>: Implementing the http calls
</h4>

For your convenience the `http` service is already injected into `LaunchService`.

#### Step 1 - Make it work

If you open `launch.service.ts` you will notice that `getUpcomingLaunches` and `getPastLaunches` are already implemented, 
which are the API calls required to display the data in the `ListComponent`.

If you select the tab `Previous Launches` and tap a specific launch, you should see the details of that specifc launch.

#### Step 2 - Implement the missing function

Your job is to implement the missing implementation for function `getLaunchDetails`. This function should make a call to
`https://api.spacexdata.com/v3/launches/{flight_number}` with the `flight_number` param.

You will need to:

 * construct the `url` - you can use the `baseUrl` property as the basis
 * use the `http` service to call `get()`
 * return an `Observable` for type `Launch`


<div class="solution-start"></div>


``` javascript
  public getLaunchDetails(flight_number: number): Observable<Launch> {

    return this.http.get<Launch>(`${this.baseUrl}/${flight_number}`);
  }
```

<div class="solution-end"></div>


#### Step 3 - Only show past launches for this year (2018)

By adding a query parameter `launch_year` to the API call you can fetch only launches for a specific year.
To fetch only past launches for 2018 you sould make a small change to function `getPastLaunches`.

You will need to :
 
 * construct a HttpParams object that holds the parameters that you want to pass
 * add a parameter 'launch_year'
 * call http get with the url and params


<div class="solution-start"></div>

``` javascript
  public getPastLaunches(): Observable<Launch[]> {
    const params = new HttpParams().set('launch_year', '2018');
    return this.http.get<Launch[]>(`${this.baseUrl}/past`, {params: params});
  }
```

<div class="solution-end"></div>

<div class="exercise-end"></div>



> **Cross-platform Differences**
>
> In the cross-platform work, rendering native UI components (like NativeScript does) is a tough problem because of 
subtleties in the underlying mobile platforms. As a mobile developer, you'll run into these from time to time. 
NativeScript does well at abstracting these differences from you, but dealing with Angular's status bar / action bar is 
one of those times you need to do a little more legwork.

The appearance of the status bar / action bar at top makes the app less appealing. So let's remove it.

<h4 class="exercise-start">
    <b>Exercise</b>: Fixing the Home page Action Bar on Android
</h4>

Let's start by investigating the problem on Android. As you might have noticed, tho `Home view` has no Action Bar in 
it's template (see `home.component.html`). This works on iOS but Android will still display an ugly text at the top. 


#### Removing the Action Bar on Android

Start by opening the `home.component.ts` file. 

Import the `Page` class at top:

```javascript
import { Page } from "ui/page";
```

Next, update the `constructor` and  inject the page. 

```javascript
constructor(
    private routerExtensions: RouterExtensions,
    private page: Page) {
}
````

Now we have a page instance available we can change `ngOnInit()` to hide the actionbar.

```javascript
ngOnInit(): void {
    this.page.actionBarHidden = true;
}
```


