sleepWork
===============
Plugin for Cordova (3.0+)

It'll keep the app working even if user puts the device to sleep with sleep button.
It should be used for applications which keep running for a long time without any user interaction.

It simply implements (PARTIAL_WAKE_LOCK) of [PowerManager](http://developer.android.com/reference/android/os/PowerManager.html)


Availability (currently):
-------------------
* Android


Installation
------------
Install the plugin using the cordova command line utility:

`$ cordova plugin add https://github.com/moinism/cordova-plugin-sleepwork.git`

Usage
-----
- Enable it:

```javascript
cordova.plugins.sleepWork.enable(successCallback, failureCallback);
```
- Disable it:
````javascript
cordova.plugins.sleepWork.disable(successCallback, failureCallback);
```

Example
--------
```javascript
cordova.plugins.sleepWork.enable(function(){
	inSleep = true;
}, function(){
	console.log('Error in enabling sleepWork.');
});
```

```javascript
cordova.plugins.sleepWork.disable(function(){
	inSleep = false;
}, function(){
	console.log('Error in disabling sleepWork.');
});
```


Contributors
------------
* Original Work: [Wolfgang Koller](https://github.com/Viras-/cordova-plugin-powermanagement)
* Simpler (current) version: [Moin Uddin](http://moin.im)


Support
-------
[@moinism](https://twitter.com/moinism)


License
-------

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
