# Redux alternatives 

This is the demo repo for a presentation at our community-of-practice web-engineering.
The presentation was without slides. Here is the rough contents.

Everything is about React here.

## Why Redux?

What do we need redux for? Mostly for storing state that is used by many
components of the application. (i.e. authentication state, feature toggles, 
etc.)

Local state is usually used with "useState" within single components.

## Why not Redux?

Redux is complicated. Some would say: Overly complicated. The state is immutable,
in order to update it, you need to dispatch an "action" that creates a new state from the old 
one, without using external data (see https://redux.js.org/introduction/getting-started#basic-example)

I personally don't want to do all this setup, but right now, there are lightweight alternatives.


## recoil.js

Example: [src/recoil](/src/recoil)

Website: https://recoiljs.org/

* Uses React.Context to transfer data between components
* Must wrap application with `<RecoilRoot>`
* Create state with `atom()` function
* Access to state via `useRecoilState` (similar to `useState`) or `useRecoilValue`
* Cannot be used outside of React

## zustand 

Example: [src/zustand](/src/zustand)

Website: https://github.com/pmndrs/zustand#readme

* Create state outside of application
* possible to use outside application (subscribe etc)
* does not need react at all.
* Con: Rather complicated definition of accessor functions

## valtio

Example: [src/valtio](src/valtio) 

Website: https://github.com/pmndrs/valtio#readme

* Uses [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to create reactive state
  (not supported by IE)
* State can just be used like a plain object (`state.value = 3`) and subscribers are called
* Appearently supports Redux dev-tools (I don't know if zustand does this as well. Recoil has it's own dev-tools)
* Easy to use
* My favorite


