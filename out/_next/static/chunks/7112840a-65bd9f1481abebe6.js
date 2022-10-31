"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,r){r.d(t,{PL:function(){return s3},ad:function(){return sK},hJ:function(){return sR}});var s,n,i=r(5816),a=r(8463),o=r(3333),l=r(4444),u=r(3510);r(3454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let d="9.13.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let r=t.map(v);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let r=t.map(v);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let r=t.map(v);f.warn(`Firestore (${d}): ${e}`,...r)}}function v(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(r){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,s=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),n=new C;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new C,e.enqueueRetryable(()=>s(this.currentUser))};let i=()=>{let t=n;e.enqueueRetryable(async()=>{await t.promise,await s(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new C)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>{var r;return this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new I(t.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class N{constructor(e,t,r,s){this.h=e,this.l=t,this.m=r,this.g=s,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){var e;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&w(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class _{constructor(e,t,r,s){this.h=e,this.l=t,this.m=r,this.g=s}getToken(){return Promise.resolve(new N(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let r=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.A;return this.A=e.token,g("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let s=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>s(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?s(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>{var t;return e?("string"==typeof e.token||w(),this.A=e.token,new D(e.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function L(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let s=0;s<e;s++)r[s]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let s=L(40);for(let n=0;n<s.length;++n)r.length<20&&s[n]<t&&(r+=e.charAt(s[n]%e.length))}return r}}function x(e,t){return e<t?-1:e>t?1:0}function V(e,t,r){return e.length===t.length&&e.every((e,s)=>r(e,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new M(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new M(0,0))}static max(){return new O(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F{constructor(e,t,r){void 0===t?t=0:t>e.length&&w(),void 0===r?r=e.length-t:r>e.length-t&&w(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let s=0;s<r;s++){let n=e.get(s),i=t.get(s);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends F{construct(e,t,r){return new U(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new U(t)}static emptyPath(){return new U([])}}let P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends F{construct(e,t,r){return new q(e,t,r)}static isValidIdentifier(e){return P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){let t=[],r="",s=0,n=()=>{if(0===r.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},i=!1;for(;s<e.length;){let a=e[s];if("\\"===a){if(s+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[s+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=o,s+=2}else"`"===a?(i=!i,s++):"."!==a||i?(r+=a,s++):(n(),s++)}if(n(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B{constructor(e){this.path=e}static fromPath(e){return new B(U.fromString(e))}static fromName(e){return new B(U.fromString(e).popFirst(5))}static empty(){return new B(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new U(e.slice()))}}function K(e){return new Q(e.readTime,e.key,-1)}class Q{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Q(O.min(),B.empty(),-1)}static max(){return new Q(O.max(),B.empty(),-1)}}function z(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=B.comparator(e.documentKey,t.documentKey))?r:x(e.largestBatchId,t.largestBatchId)}class G{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof j?t:j.resolve(t)}catch(r){return j.reject(r)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let s=0,n=0,i=!1;e.forEach(e=>{++s,e.next(()=>{++n,i&&n===s&&t()},e=>r(e))}),i=!0,n===s&&t()})}static or(e){let t=j.resolve(!1);for(let r of e)t=t.next(e=>e?j.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,s)=>{r.push(t.call(this,e,s))}),this.waitFor(r)}static mapArray(e,t){return new j((r,s)=>{let n=e.length,i=Array(n),a=0;for(let o=0;o<n;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===n&&r(i)},e=>s(e))}})}static doWhile(e,t){return new j((r,s)=>{let n=()=>{!0===e()?t().next(()=>{n()},s):r()};n()})}}function H(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function X(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ W.at=-1;class J{constructor(e,t){this.comparator=e,this.root=t||ee.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ee.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let s=this.comparator(e,r.key);if(0===s)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Z(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Z(this.root,e,this.comparator,!1)}getReverseIterator(){return new Z(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Z(this.root,e,this.comparator,!0)}}class Z{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let n=1;for(;!e.isEmpty();)if(n=t?r(e.key,t):1,t&&s&&(n*=-1),n<0)e=this.isReverse?e.left:e.right;else{if(0===n){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ee{constructor(e,t,r,s,n){this.key=e,this.value=t,this.color=null!=r?r:ee.RED,this.left=null!=s?s:ee.EMPTY,this.right=null!=n?n:ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,n){return new ee(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=s?s:this.left,null!=n?n:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this,n=r(e,s.key);return(s=n<0?s.copy(null,null,null,s.left.insert(e,t,r),null):0===n?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,s=this;if(0>t(e,s.key))s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return ee.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}ee.EMPTY=null,ee.RED=!0,ee.BLACK=!1,ee.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,r,s,n){return this}insert(e,t,r){return new ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class et{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new er(this.data.getIterator())}getIteratorFrom(e){return new er(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let s=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(s,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new et(this.comparator);return t.data=e,t}}class er{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class es{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new es([])}unionWith(e){let t=new et(q.comparator);for(let r of this.fields)t=t.add(r);for(let s of e)t=t.add(s);return new es(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return V(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class en{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new en(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new en(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");let ei=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(e){if(!e&&w(),"string"==typeof e){let t=0,r=ei.exec(e);if(!r&&w(),r[1]){let s=r[1];t=Number(s=(s+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:eo(e.seconds),nanos:eo(e.nanos)}}function eo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function el(e){return"string"==typeof e?en.fromBase64String(e):en.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eu(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function eh(e){let t=ea(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ec{constructor(e,t,r,s,n,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=n,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ed{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ed("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ed&&e.projectId===this.projectId&&e.database===this.database}}function ef(e){return null==e}function em(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eg={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ep(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eu(e)?4:e_(e)?9007199254740991:10:w()}function ey(e,t){var r,s,n,i;if(e===t)return!0;let a=ep(e);if(a!==ep(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eh(e).isEqual(eh(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=ea(e.timestampValue),s=ea(t.timestampValue);return r.seconds===s.seconds&&r.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return el(e.bytesValue).isEqual(el(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eo(e.geoPointValue.latitude)===eo(t.geoPointValue.latitude)&&eo(e.geoPointValue.longitude)===eo(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eo(e.integerValue)===eo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=eo(e.doubleValue),s=eo(t.doubleValue);return r===s?em(r)===em(s):isNaN(r)&&isNaN(s)}return!1}(e,t);case 9:return V(e.arrayValue.values||[],t.arrayValue.values||[],ey);case 10:return function(e,t){let r=e.mapValue.fields||{},s=t.mapValue.fields||{};if(Y(r)!==Y(s))return!1;for(let n in r)if(r.hasOwnProperty(n)&&(void 0===s[n]||!ey(r[n],s[n])))return!1;return!0}(e,t);default:return w()}}function ev(e,t){return void 0!==(e.values||[]).find(e=>ey(e,t))}function ew(e,t){if(e===t)return 0;let r=ep(e),s=ep(t);if(r!==s)return x(r,s);switch(r){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=eo(e.integerValue||e.doubleValue),s=eo(t.integerValue||t.doubleValue);return r<s?-1:r>s?1:r===s?0:isNaN(r)?isNaN(s)?0:-1:1}(e,t);case 3:return eE(e.timestampValue,t.timestampValue);case 4:return eE(eh(e),eh(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let r=el(e),s=el(t);return r.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),s=t.split("/");for(let n=0;n<r.length&&n<s.length;n++){let i=x(r[n],s[n]);if(0!==i)return i}return x(r.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=x(eo(e.latitude),eo(t.latitude));return 0!==r?r:x(eo(e.longitude),eo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],s=t.values||[];for(let n=0;n<r.length&&n<s.length;++n){let i=ew(r[n],s[n]);if(i)return i}return x(r.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eg.mapValue&&t===eg.mapValue)return 0;if(e===eg.mapValue)return 1;if(t===eg.mapValue)return -1;let r=e.fields||{},s=Object.keys(r),n=t.fields||{},i=Object.keys(n);s.sort(),i.sort();for(let a=0;a<s.length&&a<i.length;++a){let o=x(s[a],i[a]);if(0!==o)return o;let l=ew(r[s[a]],n[i[a]]);if(0!==l)return l}return x(s.length,i.length)}(e.mapValue,t.mapValue);default:throw w()}}function eE(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let r=ea(e),s=ea(t),n=x(r.seconds,s.seconds);return 0!==n?n:x(r.nanos,s.nanos)}function eT(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ea(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?el(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,B.fromName(r).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",r=!0;for(let s of e.values||[])r?r=!1:t+=",",t+=eT(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",s=!0;for(let n of t)s?s=!1:r+=",",r+=`${n}:${eT(e.fields[n])}`;return r+"}"}(e.mapValue):w()}function eC(e){return!!e&&"integerValue"in e}function eI(e){return!!e&&"arrayValue"in e}function eS(e){return!!e&&"nullValue"in e}function eA(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ek(e){return!!e&&"mapValue"in e}function eN(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return X(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eN(r)),t}if(e.arrayValue){let r={arrayValue:{values:[]}};for(let s=0;s<(e.arrayValue.values||[]).length;++s)r.arrayValue.values[s]=eN(e.arrayValue.values[s]);return r}return Object.assign({},e)}function e_(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eD{constructor(e){this.value=e}static empty(){return new eD({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!ek(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eN(t)}setAll(e){let t=q.emptyPath(),r={},s=[];e.forEach((e,n)=>{if(!t.isImmediateParentOf(n)){let i=this.getFieldsMap(t);this.applyChanges(i,r,s),r={},s=[],t=n.popLast()}e?r[n.lastSegment()]=eN(e):s.push(n.lastSegment())});let n=this.getFieldsMap(t);this.applyChanges(n,r,s)}delete(e){let t=this.field(e.popLast());ek(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ey(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ek(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){for(let s of(X(t,(t,r)=>e[t]=r),r))delete e[s]}clone(){return new eD(eN(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eb{constructor(e,t,r,s,n,i){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.data=n,this.documentState=i}static newInvalidDocument(e){return new eb(e,0,O.min(),O.min(),eD.empty(),0)}static newFoundDocument(e,t,r){return new eb(e,1,t,O.min(),r,0)}static newNoDocument(e,t){return new eb(e,2,t,O.min(),eD.empty(),0)}static newUnknownDocument(e,t){return new eb(e,3,t,O.min(),eD.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eD.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eD.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eb(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eL{constructor(e,t=null,r=[],s=[],n=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=n,this.startAt=i,this.endAt=a,this.ht=null}}function eR(e,t=null,r=[],s=[],n=null,i=null,a=null){return new eL(e,t,r,s,n,i,a)}function ex(e){var t;let r=e;if(null===r.ht){let s=r.path.canonicalString();null!==r.collectionGroup&&(s+="|cg:"+r.collectionGroup),s+="|f:",s+=r.filters.map(e=>{var t;return e.field.canonicalString()+e.op.toString()+eT(t=e.value)}).join(","),s+="|ob:",s+=r.orderBy.map(e=>{var t;return e.field.canonicalString()+e.dir}).join(","),ef(r.limit)||(s+="|l:",s+=r.limit),r.startAt&&(s+="|lb:",s+=r.startAt.inclusive?"b:":"a:",s+=r.startAt.position.map(e=>{var t;return eT(e)}).join(",")),r.endAt&&(s+="|ub:",s+=r.endAt.inclusive?"a:":"b:",s+=r.endAt.position.map(e=>{var t;return eT(e)}).join(",")),r.ht=s}return r.ht}function eV(e,t){var r,s;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ej(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(r=e.filters[i],s=t.filters[i],r.op!==s.op||!r.field.isEqual(s.field)||!ey(r.value,s.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eW(e.startAt,t.startAt)&&eW(e.endAt,t.endAt)}function eM(e){return B.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class eO extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,r):new eF(e,t,r):"array-contains"===t?new eB(e,r):"in"===t?new eK(e,r):"not-in"===t?new eQ(e,r):"array-contains-any"===t?new ez(e,r):new eO(e,t,r)}static lt(e,t,r){return"in"===t?new eU(e,r):new eP(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(ew(t,this.value)):null!==t&&ep(this.value)===ep(t)&&this.ft(ew(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eF extends eO{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){let t=B.comparator(e.key,this.key);return this.ft(t)}}class eU extends eO{constructor(e,t){super(e,"in",t),this.keys=eq("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eP extends eO{constructor(e,t){super(e,"not-in",t),this.keys=eq("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eq(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>B.fromName(e.referenceValue))}class eB extends eO{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eI(t)&&ev(t.arrayValue,this.value)}}class eK extends eO{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ev(this.value.arrayValue,t)}}class eQ extends eO{constructor(e,t){super(e,"not-in",t)}matches(e){if(ev(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ev(this.value.arrayValue,t)}}class ez extends eO{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eI(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ev(this.value.arrayValue,e))}}class eG{constructor(e,t){this.position=e,this.inclusive=t}}class e${constructor(e,t="asc"){this.field=e,this.dir=t}}function ej(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function eH(e,t,r){let s=0;for(let n=0;n<e.position.length;n++){let i=t[n],a=e.position[n];if(s=i.field.isKeyField()?B.comparator(B.fromName(a.referenceValue),r.key):ew(a,r.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function eW(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!ey(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eY{constructor(e,t=null,r=[],s=[],n=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=n,this.limitType=i,this.startAt=a,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function eX(e){return new eY(e)}function eJ(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function eZ(e){var t,r;let s=e;if(null===s._t){s._t=[];let n=function(e){for(let t of e.filters)if(t.dt())return t.field;return null}(s),i=(r=s).explicitOrderBy.length>0?r.explicitOrderBy[0].field:null;if(null!==n&&null===i)n.isKeyField()||s._t.push(new e$(n)),s._t.push(new e$(q.keyField(),"asc"));else{let a=!1;for(let o of s.explicitOrderBy)s._t.push(o),o.field.isKeyField()&&(a=!0);if(!a){let l=s.explicitOrderBy.length>0?s.explicitOrderBy[s.explicitOrderBy.length-1].dir:"asc";s._t.push(new e$(q.keyField(),l))}}}return s._t}function e0(e){var t;let r=e;if(!r.wt){if("F"===r.limitType)r.wt=eR(r.path,r.collectionGroup,eZ(r),r.filters,r.limit,r.startAt,r.endAt);else{let s=[];for(let n of eZ(r)){let i="desc"===n.dir?"asc":"desc";s.push(new e$(n.field,i))}let a=r.endAt?new eG(r.endAt.position,r.endAt.inclusive):null,o=r.startAt?new eG(r.startAt.position,r.startAt.inclusive):null;r.wt=eR(r.path,r.collectionGroup,s,r.filters,r.limit,a,o)}}return r.wt}function e1(e,t,r){return new eY(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function e2(e,t){return eV(e0(e),e0(t))&&e.limitType===t.limitType}function e4(e){return`${ex(e0(e))}|lt:${e.limitType}`}function e3(e){var t;let r;return`Query(target=${r=(t=e0(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>{var t;return`${e.field.canonicalString()} ${e.op} ${eT(t=e.value)}`}).join(", ")}]`),ef(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>{var t;return`${e.field.canonicalString()} (${e.dir})`}).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>{var t;return eT(e)}).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>{var t;return eT(e)}).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function e9(e,t){var r,s;return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):B.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e.explicitOrderBy)if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let s=eH(e,t,r);return e.inclusive?s<=0:s<0}(e.startAt,eZ(e),t))&&(!e.endAt||!!function(e,t,r){let s=eH(e,t,r);return e.inclusive?s>=0:s>0}(e.endAt,eZ(e),t))}function e5(e){return(t,r)=>{let s=!1;for(let n of eZ(e)){let i=e6(n,t,r);if(0!==i)return i;s=s||n.field.isKeyField()}return 0}}function e6(e,t,r){let s=e.field.isKeyField()?B.comparator(t.key,r.key):function(e,t,r){let s=t.data.field(e),n=r.data.field(e);return null!==s&&null!==n?ew(s,n):w()}(e.field,t,r);switch(e.dir){case"asc":return s;case"desc":return -1*s;default:return w()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e8{constructor(){this._=void 0}}function e7(e,t,r){return e instanceof tt?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(r,t):e instanceof tr?ts(e,t):e instanceof tn?ti(e,t):function(e,t){var r;let s=function(e,t){var r;return e instanceof ta?eC(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}(e,t),n=to(s)+to(e.yt);return eC(s)&&eC(e.yt)?{integerValue:""+n}:/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:em(t)?"-0":t}}(e.It,n)}(e,t)}function te(e,t,r){return e instanceof tr?ts(e,t):e instanceof tn?ti(e,t):r}class tt extends e8{}class tr extends e8{constructor(e){super(),this.elements=e}}function ts(e,t){let r=tl(t);for(let s of e.elements)r.some(e=>ey(e,s))||r.push(s);return{arrayValue:{values:r}}}class tn extends e8{constructor(e){super(),this.elements=e}}function ti(e,t){let r=tl(t);for(let s of e.elements)r=r.filter(e=>!ey(e,s));return{arrayValue:{values:r}}}class ta extends e8{constructor(e,t){super(),this.It=e,this.yt=t}}function to(e){return eo(e.integerValue||e.doubleValue)}function tl(e){return eI(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tu{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tu}static exists(e){return new tu(void 0,e)}static updateTime(e){return new tu(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function th(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tc{}function td(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tT(e.key,tu.none()):new tp(e.key,e.data,tu.none());{let r=e.data,s=eD.empty(),n=new et(q.comparator);for(let i of t.fields)if(!n.has(i)){let a=r.field(i);null===a&&i.length>1&&(i=i.popLast(),a=r.field(i)),null===a?s.delete(i):s.set(i,a),n=n.add(i)}return new ty(e.key,s,new es(n.toArray()),tu.none())}}function tf(e,t,r){e instanceof tp?function(e,t,r){let s=e.value.clone(),n=tw(e.fieldTransforms,t,r.transformResults);s.setAll(n),t.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(e,t,r):e instanceof ty?function(e,t,r){if(!th(e.precondition,t))return void t.convertToUnknownDocument(r.version);let s=tw(e.fieldTransforms,t,r.transformResults),n=t.data;n.setAll(tv(e)),n.setAll(s),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,t,r):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,r)}function tm(e,t,r,s){var n,i,a;return e instanceof tp?function(e,t,r,s){if(!th(e.precondition,t))return r;let n=e.value.clone(),i=tE(e.fieldTransforms,s,t);return n.setAll(i),t.convertToFoundDocument(t.version,n).setHasLocalMutations(),null}(e,t,r,s):e instanceof ty?function(e,t,r,s){if(!th(e.precondition,t))return r;let n=tE(e.fieldTransforms,s,t),i=t.data;return(i.setAll(tv(e)),i.setAll(n),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,s):th(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tg(e,t){var r,s;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,s=t.fieldTransforms,!!(void 0===r&&void 0===s||!(!r||!s)&&V(r,s,(e,t)=>{var r,s,n,i;return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof tr&&i instanceof tr||n instanceof tn&&i instanceof tn?V(n.elements,i.elements,ey):n instanceof ta&&i instanceof ta?ey(n.yt,i.yt):n instanceof tt&&i instanceof tt)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tp extends tc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ty extends tc{constructor(e,t,r,s,n=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}function tv(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let s=e.data.field(r);t.set(r,s)}}),t}function tw(e,t,r){var s;let n=new Map;(s=e.length===r.length)||w();for(let i=0;i<r.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);n.set(a.field,te(o,l,r[i]))}return n}function tE(e,t,r){let s=new Map;for(let n of e){let i=n.transform,a=r.data.field(n.field);s.set(n.field,e7(i,a,t))}return s}class tT extends tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tC{constructor(e){this.count=e}}function tI(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case s.OK:return E.OK;case s.CANCELLED:return E.CANCELLED;case s.UNKNOWN:return E.UNKNOWN;case s.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case s.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case s.INTERNAL:return E.INTERNAL;case s.UNAVAILABLE:return E.UNAVAILABLE;case s.UNAUTHENTICATED:return E.UNAUTHENTICATED;case s.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case s.NOT_FOUND:return E.NOT_FOUND;case s.ALREADY_EXISTS:return E.ALREADY_EXISTS;case s.PERMISSION_DENIED:return E.PERMISSION_DENIED;case s.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case s.ABORTED:return E.ABORTED;case s.OUT_OF_RANGE:return E.OUT_OF_RANGE;case s.UNIMPLEMENTED:return E.UNIMPLEMENTED;case s.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(n=s||(s={}))[n.OK=0]="OK",n[n.CANCELLED=1]="CANCELLED",n[n.UNKNOWN=2]="UNKNOWN",n[n.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",n[n.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",n[n.NOT_FOUND=5]="NOT_FOUND",n[n.ALREADY_EXISTS=6]="ALREADY_EXISTS",n[n.PERMISSION_DENIED=7]="PERMISSION_DENIED",n[n.UNAUTHENTICATED=16]="UNAUTHENTICATED",n[n.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",n[n.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",n[n.ABORTED=10]="ABORTED",n[n.OUT_OF_RANGE=11]="OUT_OF_RANGE",n[n.UNIMPLEMENTED=12]="UNIMPLEMENTED",n[n.INTERNAL=13]="INTERNAL",n[n.UNAVAILABLE=14]="UNAVAILABLE",n[n.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tS{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[s,n]of r)if(this.equalsFn(s,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),s=this.inner[r];if(void 0===s)return this.inner[r]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return 1===r.length?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){X(this.inner,(t,r)=>{for(let[s,n]of r)e(s,n)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tA=new J(B.comparator),tk=new J(B.comparator);function tN(...e){let t=tk;for(let r of e)t=t.insert(r.key,r);return t}function t_(){return tb()}function tD(){return tb()}function tb(){return new tS(e=>e.toString(),(e,t)=>e.isEqual(t))}new J(B.comparator);let tL=new et(B.comparator);function tR(...e){let t=tL;for(let r of e)t=t.add(r);return t}let tx=new et(x);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tV{constructor(e,t,r,s,n){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let s=new Map;return s.set(e,tM.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new tV(O.min(),s,tx,tA,tR())}}class tM{constructor(e,t,r,s,n){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tM(r,t,tR(),tR(),tR())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tO{constructor(e,t,r,s){this.Tt=e,this.removedTargetIds=t,this.key=r,this.Et=s}}class tF{constructor(e,t){this.targetId=e,this.At=t}}class tU{constructor(e,t,r=en.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class tP{constructor(){this.Rt=0,this.bt=tK(),this.Pt=en.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=tR(),t=tR(),r=tR();return this.bt.forEach((s,n)=>{switch(n){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:w()}}),new tM(this.Pt,this.vt,e,t,r)}Nt(){this.Vt=!1,this.bt=tK()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class tq{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=tA,this.qt=tB(),this.Kt=new et(x)}Gt(e){for(let t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(let r of e.removedTargetIds)this.jt(r,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{let r=this.zt(t);switch(e.state){case 0:this.Ht(t)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),r.Ct(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((e,r)=>{this.Ht(r)&&t(r)})}Yt(e){let t=e.targetId,r=e.At.count,s=this.Xt(t);if(s){let n=s.target;if(eM(n)){if(0===r){let i=new B(n.path);this.jt(t,i,eb.newNoDocument(i,O.min()))}else{var a;(a=1===r)||w()}}else this.Zt(t)!==r&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){let t=new Map;this.Lt.forEach((r,s)=>{let n=this.Xt(s);if(n){if(r.current&&eM(n.target)){let i=new B(n.target.path);null!==this.Ut.get(i)||this.ee(s,i)||this.jt(s,i,eb.newNoDocument(i,e))}r.Dt&&(t.set(s,r.xt()),r.Nt())}});let r=tR();this.qt.forEach((e,t)=>{let s=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(s=!1,!1)}),s&&(r=r.add(e))}),this.Ut.forEach((t,r)=>r.setReadTime(e));let s=new tV(e,t,this.Kt,this.Ut,r);return this.Ut=tA,this.qt=tB(),this.Kt=new et(x),s}Qt(e,t){if(!this.Ht(e))return;let r=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,r),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,r){if(!this.Ht(e))return;let s=this.zt(e);this.ee(e,t)?s.kt(t,1):s.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),r&&(this.Ut=this.Ut.insert(t,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){let t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new tP,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new et(x),this.qt=this.qt.insert(e,t)),t}Ht(e){let t=null!==this.Xt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new tP),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function tB(){return new J(B.comparator)}function tK(){return new J(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tQ={asc:"ASCENDING",desc:"DESCENDING"},tz={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class tG{constructor(e,t){this.databaseId=e,this.gt=t}}function t$(e){return!e&&w(),O.fromTimestamp(function(e){let t=ea(e);return new M(t.seconds,t.nanos)}(e))}function tj(e){var t;let r=U.fromString(e);return t0(r)||w(),r}function tH(e,t){let r=tj(t);if(r.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new B(tX(r))}function tW(e,t){var r,s,n;return r=e.databaseId,new U(["projects",r.projectId,"databases",r.database]).child("documents").child(t).canonicalString()}function tY(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tX(e){var t;return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function tJ(e){return{fieldPath:e.canonicalString()}}function tZ(e){return q.fromServerFormat(e.fieldPath)}function t0(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t1{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){let n=this.mutations[s];n.key.isEqual(e.key)&&tf(n,e,r[s])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tm(r,e,t,this.localWriteTime));for(let s of this.mutations)s.key.isEqual(e.key)&&(t=tm(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=tD();return this.mutations.forEach(s=>{let n=e.get(s.key),i=n.overlayedDocument,a=this.applyToLocalView(i,n.mutatedFields);a=t.has(s.key)?null:a;let o=td(i,a);null!==o&&r.set(s.key,o),i.isValidDocument()||i.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tR())}isEqual(e){return this.batchId===e.batchId&&V(this.mutations,e.mutations,(e,t)=>tg(e,t))&&V(this.baseMutations,e.baseMutations,(e,t)=>tg(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t4{constructor(e,t,r,s,n=O.min(),i=O.min(),a=en.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new t4(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new t4(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new t4(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t3{constructor(e){this.re=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t9{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(eo(e.integerValue));else if("doubleValue"in e){let r=eo(e.doubleValue);isNaN(r)?this.le(t,13):(this.le(t,15),em(r)?t.fe(0):t.fe(r))}else if("timestampValue"in e){let s=e.timestampValue;this.le(t,20),"string"==typeof s?t.de(s):(t.de(`${s.seconds||""}`),t.fe(s.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(el(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?e_(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):w()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){let r=e.fields||{};for(let s of(this.le(t,55),Object.keys(r)))this._e(s,t),this.ae(r[s],t)}pe(e,t){let r=e.values||[];for(let s of(this.le(t,50),r))this.ae(s,t)}ge(e,t){this.le(t,37),B.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}t9.Te=new t9;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t5{constructor(){this.Ye=new t6}addToCollectionParentIndex(e,t){return this.Ye.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(Q.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(Q.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class t6{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new et(U.comparator),n=!s.has(r);return this.index[t]=s.add(r),n}has(e){let t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(U.comparator)).toArray()}}new Uint8Array(0);class t8{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new t8(e,t8.DEFAULT_COLLECTION_PERCENTILE,t8.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ t8.DEFAULT_COLLECTION_PERCENTILE=10,t8.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,t8.DEFAULT=new t8(41943040,t8.DEFAULT_COLLECTION_PERCENTILE,t8.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),t8.DISABLED=new t8(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t7{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new t7(0)}static vn(){return new t7(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class re{constructor(){this.changes=new tS(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eb.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rt{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rr{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.getBaseDocument(e,t,r))).next(e=>(null!==r&&tm(r.mutation,e,es.empty(),M.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tR()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tR()){let s=t_();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(e=>{let t=tN();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=t_();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tR()))}populateOverlays(e,t,r){let s=[];return r.forEach(e=>{t.has(e)||s.push(e)}),this.documentOverlayCache.getOverlays(e,s).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,s){let n=tA,i=tb(),a=tb();return t.forEach((e,t)=>{let a=r.get(t.key);s.has(t.key)&&(void 0===a||a.mutation instanceof ty)?n=n.insert(t.key,t):void 0!==a&&(i.set(t.key,a.mutation.getFieldMask()),tm(a.mutation,t,a.mutation.getFieldMask(),M.now()))}),this.recalculateAndSaveOverlays(e,n).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rt(t,null!==(r=i.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=tb(),s=new J((e,t)=>e-t),n=tR();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let n of e)n.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=r.get(e)||es.empty();a=n.applyToLocalView(i,a),r.set(e,a);let o=(s.get(n.batchId)||tR()).add(e);s=s.insert(n.batchId,o)})}).next(()=>{let i=[],a=s.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,h=tD();u.forEach(e=>{if(!n.has(e)){let s=td(t.get(e),r.get(e));null!==s&&h.set(e,s),n=n.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,l,h))}return j.waitFor(i)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r){var s,n;return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(n=>{let i=s-n.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-n.size):j.resolve(t_()),a=-1,o=n;return i.next(t=>j.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),n.get(t)?j.resolve():this.getBaseDocument(e,t,r).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,n)).next(()=>this.computeViews(e,o,t,tR())).next(e=>{var t;let r;return{batchId:a,changes:(r=tk,e.forEach((e,t)=>r=r.insert(e,t.overlayedDocument)),r)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(e=>{let t=tN();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r){let s=t.collectionGroup,n=tN();return this.indexManager.getCollectionParents(e,s).next(i=>j.forEach(i,i=>{var a,o;let l=(o=i.child(s),new eY(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(e=>{e.forEach((e,t)=>{n=n.insert(e,t)})})}).next(()=>n))}getDocumentsMatchingCollectionQuery(e,t,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,t.path,r).next(n=>(s=n,this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId))).next(e=>{e.forEach((e,t)=>{let r=t.getKey();null===s.get(r)&&(s=s.insert(r,eb.newInvalidDocument(r)))});let r=tN();return s.forEach((s,n)=>{let i=e.get(s);void 0!==i&&tm(i.mutation,n,es.empty(),M.now()),e9(t,n)&&(r=r.insert(s,n))}),r})}getBaseDocument(e,t,r){return null===r||1===r.mutation.type?this.remoteDocumentCache.getEntry(e,t):j.resolve(eb.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rs{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return j.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:t$(t.createTime)}),j.resolve()}getNamedQuery(e,t){return j.resolve(this.ts.get(t))}saveNamedQuery(e,t){var r;return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,s,n,i,a,o,l,u;let h=function(e){let t=tj(e);return 4===t.length?U.emptyPath():tX(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){(t=1===d)||w();let m=c.from[0];m.allDescendants?f=m.collectionId:h=h.child(m.collectionId)}let g=[];c.where&&(g=function e(t){var r;return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tZ(e.unaryFilter.field);return eO.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=tZ(e.unaryFilter.field);return eO.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=tZ(e.unaryFilter.field);return eO.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let n=tZ(e.unaryFilter.field);return eO.create(n,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t)]:void 0!==t.fieldFilter?[(r=t,eO.create(tZ(r.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(r.fieldFilter.op),r.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):w():[]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>{var t;return new e$(tZ(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}));let y=null,v;c.limit&&(y=ef(v="object"==typeof(r=c.limit)?r.value:r)?null:v);let E=null;c.startAt&&(E=function(e){let t=!!e.before,r=e.values||[];return new eG(r,t)}(c.startAt));let T=null;return c.endAt&&(T=function(e){let t=!e.before,r=e.values||[];return new eG(r,t)}(c.endAt)),s=h,n=f,i=p,a=g,o=y,l=E,u=T,new eY(s,n,i,a,o,"F",l,u)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e1(t,t.limit,"L"):t}(t.bundledQuery),readTime:t$(t.readTime)}),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rn{constructor(){this.overlays=new J(B.comparator),this.es=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){let r=t_();return j.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,s)=>{this.ue(e,t,s)}),j.resolve()}removeOverlaysForBatchId(e,t,r){let s=this.es.get(r);return void 0!==s&&(s.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){let s=t_(),n=t.length+1,i=new B(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===n&&o.largestBatchId>r&&s.set(o.getKey(),o)}return j.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let n=new J((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let a=i.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>r){let o=n.get(a.largestBatchId);null===o&&(o=t_(),n=n.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=t_(),u=n.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=s)););return j.resolve(l)}ue(e,t,r){let s=this.overlays.get(r.key);if(null!==s){let n=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,n)}this.overlays=this.overlays.insert(r.key,new t2(t,r));let i=this.es.get(t);void 0===i&&(i=tR(),this.es.set(t,i)),this.es.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ri{constructor(){this.ns=new et(ra.ss),this.rs=new et(ra.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let r=new ra(e,t);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new ra(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new B(new U([])),r=new ra(t,e),s=new ra(t,e+1),n=[];return this.rs.forEachInRange([r,s],e=>{this.cs(e),n.push(e.key)}),n}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new B(new U([])),r=new ra(t,e),s=new ra(t,e+1),n=tR();return this.rs.forEachInRange([r,s],e=>{n=n.add(e.key)}),n}containsKey(e){let t=new ra(e,0),r=this.ns.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class ra{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return B.comparator(e.key,t.key)||x(e._s,t._s)}static os(e,t){return x(e._s,t._s)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new et(ra.ss)}checkEmpty(e){return j.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,s){let n=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new t1(n,t,r,s);for(let a of(this.mutationQueue.push(i),s))this.gs=this.gs.add(new ra(a.key,n)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(i)}lookupMutationBatch(e,t){return j.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.ps(t+1),s=r<0?0:r;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ra(t,0),s=new ra(t,Number.POSITIVE_INFINITY),n=[];return this.gs.forEachInRange([r,s],e=>{let t=this.ys(e._s);n.push(t)}),j.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new et(x);return t.forEach(e=>{let t=new ra(e,0),s=new ra(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,s],e=>{r=r.add(e._s)})}),j.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,s=r.length+1,n=r;B.isDocumentKey(n)||(n=n.child(""));let i=new ra(new B(n),0),a=new et(x);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===s&&(a=a.add(e._s)),!0)},i),j.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let r=this.ys(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){var r;0===this.Ts(t.batchId,"removed")||w(),this.mutationQueue.shift();let s=this.gs;return j.forEach(t.mutations,r=>{let n=new ra(r.key,t.batchId);return s=s.delete(n),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){let r=new ra(t,0),s=this.gs.firstAfterOrEqual(r);return j.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rl{constructor(e){this.Es=e,this.docs=new J(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,s=this.docs.get(r),n=s?s.size:0,i=this.Es(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-n,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():eb.newInvalidDocument(t))}getEntries(e,t){let r=tA;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eb.newInvalidDocument(e))}),j.resolve(r)}getAllFromCollection(e,t,r){let s=tA,n=new B(t.child("")),i=this.docs.getIteratorFrom(n);for(;i.hasNext();){let{key:a,value:{document:o}}=i.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=z(K(o),r)||(s=s.insert(o.key,o.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,t,r,s){w()}As(e,t){return j.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ru(this)}getSize(e){return j.resolve(this.size)}}class ru extends re{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rh{constructor(e){this.persistence=e,this.Rs=new tS(e=>ex(e),eV),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ri,this.targetCount=0,this.vs=t7.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,r)=>t(r)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.bs&&(this.bs=t),j.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new t7(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Dn(t),j.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let s=0,n=[];return this.Rs.forEach((i,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Rs.delete(i),n.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(n).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){let r=this.Rs.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Ps.us(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Ps.hs(t,r);let s=this.persistence.referenceDelegate,n=[];return s&&t.forEach(t=>{n.push(s.markPotentiallyOrphaned(e,t))}),j.waitFor(n)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),j.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Ps.ds(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rc{constructor(e,t){var r;this.Vs={},this.overlays={},this.Ss=new W(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new rh(this),this.indexManager=new t5,this.remoteDocumentCache=(r=e=>this.referenceDelegate.xs(e),new rl(r)),this.It=new t3(t),this.Ns=new rs(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rn,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Vs[e.toKey()];return r||(r=new ro(t,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let s=new rd(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(e=>this.referenceDelegate.Os(s).next(()=>e)).toPromise().then(e=>(s.raiseOnCommittedEvent(),e))}Ms(e,t){return j.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,t)))}}class rd extends G{constructor(e){super(),this.currentSequenceNumber=e}}class rf{constructor(e){this.persistence=e,this.Fs=new ri,this.$s=null}static Bs(e){return new rf(e)}get Ls(){if(this.$s)return this.$s;throw w()}addReference(e,t,r){return this.Fs.addReference(r,t),this.Ls.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.Fs.removeReference(r,t),this.Ls.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),j.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Ls,r=>{let s=B.fromPath(r);return this.Us(e,s).next(e=>{e||t.removeEntry(s,O.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return j.or([()=>j.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rm{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Si=r,this.Di=s}static Ci(e,t){let r=tR(),s=tR();for(let n of t.docChanges)switch(n.type){case 0:r=r.add(n.doc.key);break;case 1:s=s.add(n.doc.key)}return new rm(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rg{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,r,s){return this.ki(e,t).next(n=>n||this.Oi(e,t,s,r)).next(r=>r||this.Mi(e,t))}ki(e,t){if(eJ(t))return j.resolve(null);let r=e0(t);return this.indexManager.getIndexType(e,r).next(s=>0===s?null:(null!==t.limit&&1===s&&(t=e1(t,null,"F"),r=e0(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let n=tR(...s);return this.Ni.getDocuments(e,n).next(s=>this.indexManager.getMinOffset(e,r).next(r=>{let i=this.Fi(t,s);return this.$i(t,i,n,r.readTime)?this.ki(e,e1(t,null,"F")):this.Bi(e,i,t,r)}))})))}Oi(e,t,r,s){return eJ(t)||s.isEqual(O.min())?this.Mi(e,t):this.Ni.getDocuments(e,r).next(n=>{let i=this.Fi(t,n);return this.$i(t,i,r,s)?this.Mi(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),e3(t)),this.Bi(e,i,t,function(e,t){let r=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,n=O.fromTimestamp(1e9===s?new M(r+1,0):new M(r,s));return new Q(n,B.empty(),-1)}(s,-1)))})}Fi(e,t){let r=new et(e5(e));return t.forEach((t,s)=>{e9(e,s)&&(r=r.add(s))}),r}$i(e,t,r,s){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let n="F"===e.limitType?t.last():t.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(s)>0)}Mi(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e3(t)),this.Ni.getDocumentsMatchingQuery(e,t,Q.min())}Bi(e,t,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rp{constructor(e,t,r,s){this.persistence=e,this.Li=t,this.It=s,this.Ui=new J(x),this.qi=new tS(e=>ex(e),eV),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}async function ry(e,t){var r;return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(n=>(s=n,e.Qi(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let n=[],i=[],a=tR();for(let o of s)for(let l of(n.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(i.push(u.batchId),u.mutations))a=a.add(h.key);return e.localDocuments.getDocuments(r,a).next(e=>({ji:e,removedBatchIds:n,addedBatchIds:i}))})})}function rv(e){var t;return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}async function rw(e,t,r){var s;let n=e,i=n.Ui.get(t);try{r||await n.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",e=>n.persistence.referenceDelegate.removeTarget(e,i))}catch(a){if(!H(a))throw a;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ui=n.Ui.remove(t),n.qi.delete(i.target)}function rE(e,t,r){var s;let n=O.min(),i=tR();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,r){var s;let n=e.qi.get(r);return void 0!==n?j.resolve(e.Ui.get(n)):e.Cs.getTargetData(t,r)})(e,s,e0(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Li.getDocumentsMatchingQuery(s,t,r?n:O.min(),r?i:tR())).next(r=>{var s,n,a,o;let l;return n=e,a=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),o=r,l=n.Ki.get(a)||O.min(),o.forEach((e,t)=>{t.readTime.compareTo(l)>0&&(l=t.readTime)}),n.Ki.set(a,l),{documents:r,Hi:i}}))}class rT{constructor(){this.activeTargetIds=tx}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rC{constructor(){this.Lr=new rT,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,r){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new rT,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rI{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rS{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rk{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,r,s,n){let i=this.ho(e,t);g("RestConnection","Sending: ",i,r);let a={};return this.lo(a,s,n),this.fo(e,i,a,r).then(e=>(g("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",r),t})}_o(e,t,r,s,n,i){return this.ao(e,t,r,s,n)}lo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}ho(e,t){let r=rA[e];return`${this.oo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,r,s){return new Promise((n,i)=>{let a=new u.JJ;a.setWithCredentials(!0),a.listenOnce(u.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case u.jK.NO_ERROR:let t=a.getResponseJson();g("Connection","XHR received:",JSON.stringify(t)),n(t);break;case u.jK.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),i(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=a.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',r,"response text:",a.getResponseText()),r>0){let s=a.getResponseJson().error;if(s&&s.status&&s.message){let o=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(s.status);i(new T(o,s.message))}else i(new T(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(s);a.send(t,"POST",o,r,15)})}wo(e,t,r){let n=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=(0,u.UE)(),a=(0,u.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u.zI({})),this.lo(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;let l=n.join("");g("Connection","Creating WebChannel: "+l,o);let h=i.createWebChannel(l,o),c=!1,d=!1,f=new rk({Hr(e){d?g("Connection","Not sending because WebChannel is closed:",e):(c||(g("Connection","Opening WebChannel transport."),h.open(),c=!0),g("Connection","WebChannel sending:",e),h.send(e))},Jr:()=>h.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,u.ii.EventType.OPEN,()=>{d||g("Connection","WebChannel transport opened.")}),m(h,u.ii.EventType.CLOSE,()=>{d||(d=!0,g("Connection","WebChannel transport closed"),f.io())}),m(h,u.ii.EventType.ERROR,e=>{d||(d=!0,y("Connection","WebChannel transport errored:",e),f.io(new T(E.UNAVAILABLE,"The operation could not be completed")))}),m(h,u.ii.EventType.MESSAGE,e=>{var t,r;if(!d){let n=e.data[0];(r=!!n)||w();let i=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(i){g("Connection","WebChannel received error:",i);let a=i.status,o=function(e){let t=s[e];if(void 0!==t)return tI(t)}(a),l=i.message;void 0===o&&(o=E.INTERNAL,l="Unknown error status: "+a+" with message "+i.message),d=!0,f.io(new T(o,l)),h.close()}else g("Connection","WebChannel received:",n),f.ro(n)}}),m(a,u.ju.STAT_EVENT,e=>{e.stat===u.kN.PROXY?g("Connection","Detected buffering proxy"):e.stat===u.kN.NOPROXY&&g("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function r_(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rD(e){return new tG(e,!0)}class rb{constructor(e,t,r=1e3,s=1.5,n=6e4){this.Hs=e,this.timerId=t,this.mo=r,this.yo=s,this.po=n,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,t-r);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rL{constructor(e,t,r,s,n,i,a,o){this.Hs=e,this.vo=r,this.Vo=s,this.connection=n,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new rb(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.So===t&&this.Go(e,r)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{r(()=>this.Qo(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rR extends rL{constructor(e,t,r,s,n,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,i),this.It=n}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let r;if("targetChange"in t){var s,n,i,a;t.targetChange;let o="NO_CHANGE"===(s=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:w(),l=t.targetChange.targetIds||[],u=(i=t.targetChange.resumeToken,e.gt?(void 0===i||"string"==typeof i||w(),en.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||w(),en.fromUint8Array(i||new Uint8Array))),h=t.targetChange.cause,c=h&&function(e){let t=void 0===e.code?E.UNKNOWN:tI(e.code);return new T(t,e.message||"")}(h);r=new tU(o,l,u,c||null)}else if("documentChange"in t){t.documentChange;let d=t.documentChange;d.document,d.document.name,d.document.updateTime;let f=tH(e,d.document.name),m=t$(d.document.updateTime),g=new eD({mapValue:{fields:d.document.fields}}),p=eb.newFoundDocument(f,m,g),y=d.targetIds||[],v=d.removedTargetIds||[];r=new tO(y,v,p.key,p)}else if("documentDelete"in t){t.documentDelete;let C=t.documentDelete;C.document;let I=tH(e,C.document),S=C.readTime?t$(C.readTime):O.min(),A=eb.newNoDocument(I,S),k=C.removedTargetIds||[];r=new tO([],k,A.key,A)}else if("documentRemove"in t){t.documentRemove;let N=t.documentRemove;N.document;let _=tH(e,N.document),D=N.removedTargetIds||[];r=new tO([],D,_,null)}else{if(!("filter"in t))return w();{t.filter;let b=t.filter;b.targetId;let L=b.count||0,R=new tC(L),x=b.targetId;r=new tF(x,R)}}return r}(this.It,e),r=function(e){if(!("targetChange"in e))return O.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?O.min():t.readTime?t$(t.readTime):O.min()}(e);return this.listener.Wo(t,r)}zo(e){let t={};t.database=tY(this.It),t.addTarget=function(e,t){var r,s,n,i,a,o;let l,u=t.target;return(l=eM(u)?{documents:{documents:[tW(e,u.path)]}}:{query:function(e,t){var r,s,n,i;let a={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(a.parent=tW(e,o),a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a.parent=tW(e,o.popLast()),a.structuredQuery.from=[{collectionId:o.lastSegment()}]);let l=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){var t;if("=="===e.op){if(eA(e.value))return{unaryFilter:{field:tJ(e.field),op:"IS_NAN"}};if(eS(e.value))return{unaryFilter:{field:tJ(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eA(e.value))return{unaryFilter:{field:tJ(e.field),op:"IS_NOT_NAN"}};if(eS(e.value))return{unaryFilter:{field:tJ(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tJ(e.field),op:(t=e.op,tz[t]),value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);l&&(a.structuredQuery.where=l);let u=function(e){if(0!==e.length)return e.map(e=>{var t,r;return{field:tJ(e.field),direction:(r=e.dir,tQ[r])}})}(t.orderBy);u&&(a.structuredQuery.orderBy=u);let h=(n=t.limit,e.gt||ef(n)?n:{value:n});return null!==h&&(a.structuredQuery.limit=h),t.startAt&&(a.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(a.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),a}(e,u)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?l.resumeToken=(i=t.resumeToken,e.gt?i.toBase64():i.toUint8Array()):t.snapshotVersion.compareTo(O.min())>0&&(l.readTime=(o=t.snapshotVersion.toTimestamp(),e.gt?`${new Date(1e3*o.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+o.nanoseconds).slice(-9)}Z`:{seconds:""+o.seconds,nanos:o.nanoseconds})),l}(this.It,e);let r=function(e,t){let r=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return w()}}(0,t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.It,e);r&&(t.labels=r),this.Bo(t)}Ho(e){let t={};t.database=tY(this.It),t.removeTarget=e,this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rx extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,n])=>this.connection.ao(e,t,r,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}_o(e,t,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection._o(e,t,r,n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class rV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p(t),this.ou=!1):g("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rM{constructor(e,t,r,s,n){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=n,this.mu.qr(e=>{r.enqueueAndForget(async()=>{rz(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){var t;e._u.add(4),await rF(e),e.gu.set("Unknown"),e._u.delete(4),await rO(e)}(this))})}),this.gu=new rV(r,s)}}async function rO(e){if(rz(e))for(let t of e.wu)await t(!0)}async function rF(e){for(let t of e.wu)await t(!1)}function rU(e,t){var r;e.du.has(t.targetId)||(e.du.set(t.targetId,t),rQ(e)?rK(e):rJ(e).ko()&&rq(e,t))}function rP(e,t){var r;let s=rJ(e);e.du.delete(t),s.ko()&&rB(e,t),0===e.du.size&&(s.ko()?s.Fo():rz(e)&&e.gu.set("Unknown"))}function rq(e,t){e.yu.Mt(t.targetId),rJ(e).zo(t)}function rB(e,t){e.yu.Mt(t),rJ(e).Ho(t)}function rK(e){e.yu=new tq({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),rJ(e).start(),e.gu.uu()}function rQ(e){return rz(e)&&!rJ(e).No()&&e.du.size>0}function rz(e){var t;return 0===e._u.size}function rG(e){e.yu=void 0}async function r$(e){e.du.forEach((t,r)=>{rq(e,t)})}async function rj(e,t){rG(e),rQ(e)?(e.gu.hu(t),rK(e)):e.gu.set("Unknown")}async function rH(e,t,r){if(e.gu.set("Online"),t instanceof tU&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let s of t.targetIds)e.du.has(s)&&(await e.remoteSyncer.rejectListen(s,r),e.du.delete(s),e.yu.removeTarget(s))}(e,t)}catch(s){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await rW(e,s)}else if(t instanceof tO?e.yu.Gt(t):t instanceof tF?e.yu.Yt(t):e.yu.Wt(t),!r.isEqual(O.min()))try{let n=await rv(e.localStore);r.compareTo(n)>=0&&await function(e,t){let r=e.yu.te(t);return r.targetChanges.forEach((r,s)=>{if(r.resumeToken.approximateByteSize()>0){let n=e.du.get(s);n&&e.du.set(s,n.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach(t=>{let r=e.du.get(t);if(!r)return;e.du.set(t,r.withResumeToken(en.EMPTY_BYTE_STRING,r.snapshotVersion)),rB(e,t);let s=new t4(r.target,t,1,r.sequenceNumber);rq(e,s)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(i){g("RemoteStore","Failed to raise snapshot:",i),await rW(e,i)}}async function rW(e,t,r){if(!H(t))throw t;e._u.add(1),await rF(e),e.gu.set("Offline"),r||(r=()=>rv(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e._u.delete(1),await rO(e)})}async function rY(e,t){var r;e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let s=rz(e);e._u.add(3),await rF(e),s&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await rO(e)}async function rX(e,t){var r;t?(e._u.delete(2),await rO(e)):t||(e._u.add(2),await rF(e),e.gu.set("Unknown"))}function rJ(e){return e.pu||(e.pu=function(e,t,r){var s;return e.su(),new rR(t,e.connection,e.authCredentials,e.appCheckCredentials,e.It,r)}(e.datastore,e.asyncQueue,{Yr:r$.bind(null,e),Zr:rj.bind(null,e),Wo:rH.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),rQ(e)?rK(e):e.gu.set("Unknown")):(await e.pu.stop(),rG(e))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rZ{constructor(e,t,r,s,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=n,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,s,n){let i=Date.now()+r,a=new rZ(e,t,i,s,n);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function r0(e,t){if(p("AsyncQueue",`${t}: ${e}`),H(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r1{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(e,t)=>B.comparator(e.key,t.key),this.keyedMap=tN(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new r1(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r1)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let s=t.getNext().key,n=r.getNext().key;if(!s.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new r1;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r2{constructor(){this.Tu=new J(B.comparator)}track(e){let t=e.doc.key,r=this.Tu.get(t);r?0!==e.type&&3===r.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==r.type?this.Tu=this.Tu.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Tu=this.Tu.remove(t):1===e.type&&2===r.type?this.Tu=this.Tu.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):w():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,r)=>{e.push(r)}),e}}class r4{constructor(e,t,r,s,n,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=n,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,n){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new r4(e,t,r1.emptySet(t),i,r,s,!0,!1,n)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e2(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r3{constructor(){this.Au=void 0,this.listeners=[]}}class r9{constructor(){this.queries=new tS(e=>e4(e),e2),this.onlineState="Unknown",this.Ru=new Set}}async function r5(e,t){var r;let s=t.query,n=!1,i=e.queries.get(s);if(i||(n=!0,i=new r3),n)try{i.Au=await e.onListen(s)}catch(o){let a=r0(o,`Initialization of query '${e3(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,i),i.listeners.push(t),t.bu(e.onlineState),i.Au&&t.Pu(i.Au)&&se(e)}async function r6(e,t){var r;let s=t.query,n=!1,i=e.queries.get(s);if(i){let a=i.listeners.indexOf(t);a>=0&&(i.listeners.splice(a,1),n=0===i.listeners.length)}if(n)return e.queries.delete(s),e.onUnlisten(s)}function r8(e,t){var r;let s=!1;for(let n of t){let i=n.query,a=e.queries.get(i);if(a){for(let o of a.listeners)o.Pu(n)&&(s=!0);a.Au=n}}s&&se(e)}function r7(e,t,r){var s;let n=e.queries.get(t);if(n)for(let i of n.listeners)i.onError(r);e.queries.delete(t)}function se(e){e.Ru.forEach(e=>{e.next()})}class st{constructor(e,t,r){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new r4(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let s=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),s=!0):this.Cu(e,this.onlineState)&&(this.xu(e),s=!0),this.Su=e,s}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=r4.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sr{constructor(e){this.key=e}}class ss{constructor(e){this.key=e}}class sn{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=tR(),this.mutatedKeys=tR(),this.Gu=e5(e),this.Qu=new r1(this.Gu)}get ju(){return this.Uu}Wu(e,t){let r=t?t.zu:new r2,s=t?t.Qu:this.Qu,n=t?t.mutatedKeys:this.mutatedKeys,i=s,a=!1,o="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,l="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((e,t)=>{let u=s.get(e),h=e9(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.Gu(h,o)>0||l&&0>this.Gu(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),n=d?n.add(e):n.delete(e)):(i=i.delete(e),n=n.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let u="F"===this.query.limitType?i.last():i.first();i=i.delete(u.key),n=n.delete(u.key),r.track({type:1,doc:u})}return{Qu:i,zu:r,$i:a,mutatedKeys:n}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let n=e.zu.Eu();n.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return r(e)-r(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(r);let i=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.qu;return(this.qu=a,0!==n.length||o)?{snapshot:new r4(this.query,e.Qu,s,n,e.mutatedKeys,0===a,o,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new r2,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.Uu=this.Uu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Uu=this.Uu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=tR(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new ss(e))}),this.Ku.forEach(r=>{e.has(r)||t.push(new sr(r))}),t}tc(e){this.Uu=e.Hi,this.Ku=tR();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return r4.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class si{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sa{constructor(e){this.key=e,this.nc=!1}}class so{constructor(e,t,r,s,n,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=n,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new tS(e=>e4(e),e2),this.rc=new Map,this.oc=new Set,this.uc=new J(B.comparator),this.cc=new Map,this.ac=new ri,this.hc={},this.lc=new Map,this.fc=t7.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function sl(e,t){let r=function(e){var t;let r=e;return r.remoteStore.remoteSyncer.applyRemoteEvent=sc.bind(null,r),r.remoteStore.remoteSyncer.getRemoteKeysForTarget=sT.bind(null,r),r.remoteStore.remoteSyncer.rejectListen=sf.bind(null,r),r.sc.Wo=r8.bind(null,r.eventManager),r.sc.wc=r7.bind(null,r.eventManager),r}(e),s,n,i=r.ic.get(t);if(i)s=i.targetId,r.sharedClientState.addLocalQueryTarget(s),n=i.view.ec();else{let a=await function(e,t){var r;let s=e;return s.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return s.Cs.getTargetData(e,t).next(n=>n?(r=n,j.resolve(r)):s.Cs.allocateTargetId(e).next(n=>(r=new t4(t,n,0,e.currentSequenceNumber),s.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=s.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(s.Ui=s.Ui.insert(e.targetId,e),s.qi.set(t,e.targetId)),e})}(r.localStore,e0(t));r.isPrimaryClient&&rU(r.remoteStore,a);let o=r.sharedClientState.addLocalQueryTarget(a.targetId);n=await su(r,t,s=a.targetId,"current"===o,a.resumeToken)}return n}async function su(e,t,r,s,n){e._c=(t,r,s)=>(async function(e,t,r,s){let n=t.view.Wu(r);n.$i&&(n=await rE(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,n)));let i=s&&s.targetChanges.get(t.targetId),a=t.view.applyChanges(n,e.isPrimaryClient,i);return sp(e,t.targetId,a.Xu),a.snapshot})(e,t,r,s);let i=await rE(e.localStore,t,!0),a=new sn(t,i.Hi),o=a.Wu(i.documents),l=tM.createSynthesizedTargetChangeForCurrentChange(r,s&&"Offline"!==e.onlineState,n),u=a.applyChanges(o,e.isPrimaryClient,l);sp(e,r,u.Xu);let h=new si(t,r,a);return e.ic.set(t,h),e.rc.has(r)?e.rc.get(r).push(t):e.rc.set(r,[t]),u.snapshot}async function sh(e,t){var r;let s=e.ic.get(t),n=e.rc.get(s.targetId);if(n.length>1)return e.rc.set(s.targetId,n.filter(e=>!e2(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(s.targetId),e.sharedClientState.isActiveQueryTarget(s.targetId)||await rw(e.localStore,s.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(s.targetId),rP(e.remoteStore,s.targetId),sm(e,s.targetId)}).catch($)):(sm(e,s.targetId),await rw(e.localStore,s.targetId,!0))}async function sc(e,t){var r;try{let s=await function(e,t){var r;let s=e,n=t.snapshotVersion,i=s.Ui;return s.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var r,a,o;let l=s.Gi.newChangeBuffer({trackRemovals:!0});i=s.Ui;let u=[];t.targetChanges.forEach((r,a)=>{var o,l,h;let c=i.get(a);if(!c)return;u.push(s.Cs.removeMatchingKeys(e,r.removedDocuments,a).next(()=>s.Cs.addMatchingKeys(e,r.addedDocuments,a)));let d=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?d=d.withResumeToken(en.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):r.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(r.resumeToken,n)),i=i.insert(a,d),l=d,(0===c.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size>0)&&u.push(s.Cs.updateTargetData(e,d))});let h=tA,c=tR(),d,f;if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(s.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((r=e,a=l,o=t.documentUpdates,d=tR(),f=tR(),o.forEach(e=>d=d.add(e)),a.getEntries(r,d).next(e=>{let t=tA;return o.forEach((r,s)=>{let n=e.get(r);s.isFoundDocument()!==n.isFoundDocument()&&(f=f.add(r)),s.isNoDocument()&&s.version.isEqual(O.min())?(a.removeEntry(r,s.readTime),t=t.insert(r,s)):!n.isValidDocument()||s.version.compareTo(n.version)>0||0===s.version.compareTo(n.version)&&n.hasPendingWrites?(a.addEntry(s),t=t.insert(r,s)):g("LocalStore","Ignoring outdated watch update for ",r,". Current version:",n.version," Watch version:",s.version)}),{Wi:t,zi:f}})).next(e=>{h=e.Wi,c=e.zi})),!n.isEqual(O.min())){let m=s.Cs.getLastRemoteSnapshotVersion(e).next(t=>s.Cs.setTargetsMetadata(e,e.currentSequenceNumber,n));u.push(m)}return j.waitFor(u).next(()=>l.apply(e)).next(()=>s.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(s.Ui=i,e))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{var s,n,i;let a=e.cc.get(r);a&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?a.nc=!0:t.modifiedDocuments.size>0?(n=a.nc)||w():t.removedDocuments.size>0&&(a.nc||w(),a.nc=!1))}),await sw(e,s,t)}catch(n){await $(n)}}function sd(e,t,r){var s;let n=e;if(n.isPrimaryClient&&0===r||!n.isPrimaryClient&&1===r){let i=[];n.ic.forEach((e,r)=>{let s=r.view.bu(t);s.snapshot&&i.push(s.snapshot)}),function(e,t){var r;let s=e;s.onlineState=t;let n=!1;s.queries.forEach((e,r)=>{for(let s of r.listeners)s.bu(t)&&(n=!0)}),n&&se(s)}(n.eventManager,t),i.length&&n.sc.Wo(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function sf(e,t,r){var s;let n=e;n.sharedClientState.updateQueryState(t,"rejected",r);let i=n.cc.get(t),a=i&&i.key;if(a){let o=new J(B.comparator);o=o.insert(a,eb.newNoDocument(a,O.min()));let l=tR().add(a),u=new tV(O.min(),new Map,new et(x),o,l);await sc(n,u),n.uc=n.uc.remove(a),n.cc.delete(t),sv(n)}else await rw(n.localStore,t,!1).then(()=>sm(n,t,r)).catch($)}function sm(e,t,r=null){for(let s of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(s),r&&e.sc.wc(s,r);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||sg(e,t)})}function sg(e,t){e.oc.delete(t.path.canonicalString());let r=e.uc.get(t);null!==r&&(rP(e.remoteStore,r),e.uc=e.uc.remove(t),e.cc.delete(r),sv(e))}function sp(e,t,r){for(let s of r)s instanceof sr?(e.ac.addReference(s.key,t),sy(e,s)):s instanceof ss?(g("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||sg(e,s.key)):w()}function sy(e,t){let r=t.key,s=r.path.canonicalString();e.uc.get(r)||e.oc.has(s)||(g("SyncEngine","New document in limbo: "+r),e.oc.add(s),sv(e))}function sv(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){let t=e.oc.values().next().value;e.oc.delete(t);let r=new B(U.fromString(t)),s=e.fc.next();e.cc.set(s,new sa(r)),e.uc=e.uc.insert(r,s),rU(e.remoteStore,new t4(e0(eX(r.path)),s,2,W.at))}}async function sw(e,t,r){var s;let n=[],i=[],a=[];e.ic.isEmpty()||(e.ic.forEach((s,o)=>{a.push(e._c(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let s=rm.Ci(o.targetId,t);i.push(s)}}))}),await Promise.all(a),e.sc.Wo(n),await async function(e,t){var r;let s=e;try{await s.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>j.forEach(t,t=>j.forEach(t.Si,r=>s.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>j.forEach(t.Di,r=>s.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(n){if(!H(n))throw n;g("LocalStore","Failed to update sequence numbers: "+n)}for(let i of t){let a=i.targetId;if(!i.fromCache){let o=s.Ui.get(a),l=o.snapshotVersion,u=o.withLastLimboFreeSnapshotVersion(l);s.Ui=s.Ui.insert(a,u)}}}(e.localStore,i))}async function sE(e,t){var r,s,n;let i=e;if(!i.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let a=await ry(i.localStore,t);i.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",(s=i).lc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,n))})}),s.lc.clear(),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await sw(i,a.ji)}}function sT(e,t){var r;let s=e.cc.get(t);if(s&&s.nc)return tR().add(s.key);{let n=tR(),i=e.rc.get(t);if(!i)return n;for(let a of i){let o=e.ic.get(a);n=n.unionWith(o.view.ju)}return n}}class sC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=rD(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,r,s,n;return t=this.persistence,r=new rg,s=e.initialUser,n=this.It,new rp(t,r,s,n)}yc(e){return new rc(rf.Bs,this.It)}gc(e){return new rC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sI{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>sd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=sE.bind(null,this.syncEngine),await rX(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new r9}createDatastore(e){var t,r,s,n,i;let a=rD(e.databaseInfo.databaseId),o=(t=e.databaseInfo,new rN(t));return r=e.authCredentials,s=e.appCheckCredentials,new rx(r,s,o,a)}createRemoteStore(e){var t,r,s,n,i;return t=this.localStore,r=this.datastore,s=e.asyncQueue,n=e=>sd(this.syncEngine,e,0),i=rS.C()?new rS:new rI,new rM(t,r,s,n,i)}createSyncEngine(e,t){return function(e,t,r,s,n,i,a){let o=new so(e,t,r,s,n,i);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){var t;g("RemoteStore","RemoteStore shutting down."),e._u.add(5),await rF(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}function sS(e){if(B.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sA(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":w()}(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sk=new Map;class sN{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,r,s){if(!0===t&&!0===s)throw new T(E.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s_{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sN({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sN(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":let t=e.client;return new _(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=sk.get(e);t&&(g("ComponentProvider","Removing Datastore"),sk.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sD{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sL(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sD(this.firestore,e,this._key)}}class sb{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sb(this.firestore,e,this._query)}}class sL extends sb{constructor(e,t,r){super(e,t,eX(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sD(this.firestore,null,new B(e))}withConverter(e){return new sL(this.firestore,e,this._path)}}function sR(e,t,...r){if(e=(0,l.m9)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,r){if(!r)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof s_){let s=U.fromString(t,...r);return sS(s),new sL(e,null,s)}{if(!(e instanceof sD||e instanceof sL))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(U.fromString(t,...r));return sS(n),new sL(e.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):p("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sV{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=c.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=r0(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function sM(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let s=r.initialUser;e.setCredentialChangeListener(async e=>{s.isEqual(e)||(await ry(t.localStore,e),s=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function sO(e,t){e.asyncQueue.verifyOperationInProgress();let r=await sF(e);g("FirestoreClient","Initializing OnlineComponentProvider");let s=await e.getConfiguration();await t.initialize(r,s),e.setCredentialChangeListener(e=>rY(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>rY(t.remoteStore,r)),e.onlineComponents=t}async function sF(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await sM(e,new sC)),e.offlineComponents}async function sU(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await sO(e,new sI)),e.onlineComponents}async function sP(e){let t=await sU(e),r=t.eventManager;return r.onListen=sl.bind(null,t.syncEngine),r.onUnlisten=sh.bind(null,t.syncEngine),r}class sq{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new rb(this,"async_queue_retry"),this.Wc=()=>{let e=r_();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=r_();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;let t=r_();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});let t=new C;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!H(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{var t;this.Kc=e,this.Gc=!1;let r,s=(r=e.message||"",e.stack&&(r=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),r);throw p("INTERNAL UNHANDLED ERROR: ",s),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,r){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let s=rZ.createAndSchedule(this,e,t,r,e=>this.Yc(e));return this.qc.push(s),s}zc(){this.Kc&&w()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.qc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.qc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.qc.indexOf(e);this.qc.splice(t,1)}}class sB extends s_{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new sq,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sQ(this),this._firestoreClient.terminate()}}function sK(e,t){let r="object"==typeof e?e:(0,i.Mq)(),s=(0,i.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!s._initialized){let n=(0,l.P0)("firestore");n&&function(e,t,r,s={}){var n;let i=(e=sA(e,s_))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${r}`,ssl:!1})),s.mockUserToken){let a,o;if("string"==typeof s.mockUserToken)a=s.mockUserToken,o=c.MOCK_USER;else{a=(0,l.Sg)(s.mockUserToken,null===(n=e._app)||void 0===n?void 0:n.options.projectId);let u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new c(u)}e._authCredentials=new A(new I(a,o))}}(s,...n)}return s}function sQ(e){var t,r,s,n,i;let a=e._freezeSettings(),o=(r=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",n=e._persistenceKey,new ec(r,s,n,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new sV(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sz{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sz(en.fromBase64String(e))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sz(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sG{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s${constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}let sj=RegExp("[~\\*/\\[\\]]");function sH(e,t,r,s,n){let i=s&&!s.isEmpty(),a=void 0!==n,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${s}`),a&&(l+=` in document ${n}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sW{constructor(e,t,r,s,n){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new sD(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sY(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sX("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sY extends sW{data(){return super.data()}}function sX(e,t){return"string"==typeof t?function(e,t,r){if(t.search(sj)>=0)throw sH(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new sG(...t.split("."))._internalPath}catch(s){throw sH(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}(e,t):t instanceof sG?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sJ{convertValue(e,t="none"){switch(ep(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(el(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){let r={};return X(e.fields,(e,s)=>{r[e]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new s$(eo(e.latitude),eo(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=function e(t){let r=t.mapValue.fields.__previous_value__;return eu(r)?e(r):r}(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eh(e));default:return null}}convertTimestamp(e){let t=ea(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){var r;let s=U.fromString(e);(r=t0(s))||w();let n=new ed(s.get(1),s.get(3)),i=new B(s.popFirst(5));return n.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sZ{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class s0 extends sW{constructor(e,t,r,s,n,i){super(e,t,r,s,i),this._firestore=e,this._firestoreImpl=e,this.metadata=n}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new s1(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(sX("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class s1 extends s0{data(e={}){return super.data(e)}}class s2{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new sZ(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new s1(this._firestore,this._userDataWriter,r.key,r,new sZ(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let r=0;return e._snapshot.docChanges.map(t=>{let s=new s1(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sZ(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:s,oldIndex:-1,newIndex:r++}})}{let s=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new s1(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sZ(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),n=-1,i=-1;return 0!==t.type&&(n=s.indexOf(t.doc.key),s=s.delete(t.doc.key)),1!==t.type&&(i=(s=s.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}(t.type),doc:r,oldIndex:n,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class s4 extends sJ{constructor(e){super(),this.firestore=e}convertBytes(e){return new sz(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sD(this.firestore,null,t)}}function s3(e){var t;e=sA(e,sb);let r=sA(e.firestore,sB),s=(r._firestoreClient||sQ(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient),n=new s4(r);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let s=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,s,n){let i=new sx({next(r){t.enqueueAndForget(()=>r6(e,a)),r.fromCache&&"server"===s.source?n.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):n.resolve(r)},error:e=>n.reject(e)}),a=new st(r,i,{includeMetadataChanges:!0,Nu:!0});return r5(e,a)})(await sP(e),e.asyncQueue,t,r,s)),s.promise})(s,e._query).then(t=>new s2(r,n,e,t)))}!function(e,t=!0){var r;d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:r,options:s})=>{let n=e.getProvider("app").getImmediate(),i=new sB(new k(e.getProvider("auth-internal")),new b(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ed(e.options.projectId,t)}(n,r),n);return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.7.2",void 0),(0,i.KN)(h,"3.7.2","esm2017")}()}}]);