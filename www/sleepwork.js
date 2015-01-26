/*
 * Copyright Wolfgang Koller (original work: https://github.com/Viras-/cordova-plugin-powermanagement) & Moin Uddin
 * 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sleepWork = function() {};

/**
 * 
 * @param successCallback function to be called when sleepWord was enabled successfully
 * @param errorCallback function to be called when there was a problem with enabling
 */

sleepWork.prototype.enable = function(successCallback, failureCallback) {
    cordova.exec(successCallback, failureCallback, 'SleepWorker', 'acquire');
}

/**
 *
 * @param successCallback function to be called when work in sleep mode was disabled successfully
 * @param errorCallback function to be called when there was a problem with disabling it
 */

sleepWork.prototype.disable = function(successCallback, failureCallback) {
    cordova.exec(successCallback, failureCallback, 'SleepWorker', 'release');
}

module.exports = new sleepWork();