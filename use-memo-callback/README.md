# Getting Started useMemo, useCallback

## useMemo

The fundamental idea with useMemo is that it allows us to “remember” a computed value between renders.

React is heavily optimized out of the box, and so in general, re-renders aren't a big deal. But, in certain situations, these snapshots do take a while to create. This can lead to performance problems, like the UI not updating quickly enough after the user performs an action.

Fundamentally, useMemo and useCallback are tools built to help us optimize re-renders. They do this in two ways:
  1. Reducing the amount of work that needs to be done in a given render.
  2. Reducing the number of times that a component needs to re-render.

This is commonly known as memoization, and it's why this hook is called “useMemo”.

## useCallback

https://semaphoreci.com/blog/react-usecallback-hook

The useCallback hook is a built-in hook in React that lets you memoize a callback function by preventing it from being recreated on every render. In simple terms, it means that the callback function is cached and does not get redefined on every render. This will optimize and improve the overall performance of your application.

### When to use the useCallback hook
Now you understand how the useCallback hook can optimize your app, let’s see some use cases:
  - When you need to pass a function as props to a child component.
  - If you have a function that is expensive to compute and you need to call it in multiple places.
  - When dealing with functional components.
  - When you are working with a function that relies on external data or state.

### Benefits of using the useCallback hook
There are several advantages attached to using the useCallback hook. Here are a few:
  - Performance optimization
  - Restricting rendering of child components
  - Preventing memory leaks

Here are some key takeaways from this article:
  - useCallback is a hook that can be used to memoize callback functions.
  - Memoization is a technique that can be used to cache the results of a function call so that it does not need to be re-evaluated on every render.
  - Memoization can be used to improve the performance of React components by preventing unnecessary re-renders.
  - useCallback is most commonly used to memoize callback functions that are passed to child components.
  - useCallback can also be used to memoize callback functions that are used in other contexts, such as event handlers and timers.

When using useCallback, it is important to be aware of the following best practices:
  - Only use useCallback on callback functions that are truly performance-critical.
  - Specify the dependencies of useCallback carefully to ensure that the function is only memoized when necessary.

```bash
npm run start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)