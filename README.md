## React Redux Todo

##### Run the Project
1. Clone the project
2. Install Dependencies with ```npm install``` or ```yarn```
3. Run the project ```npm run start``` or ```yarn start```


##### Added Library
1. redux-devtools-extension


##### My Suggestions
1. We can use `Typescript` or `Flow` for properly typing our code.
2. We can use `CSS-in-JS`
3. For Development we can use `Redux Dev Tools` for testing our Redux States.
4. Bootstrap and Material-UI is really great but if not used properly it can make the Project File really large.
5. We can work on the repeating codes in our Project by creating a config object and map it base on the content:
    ```js
      <FilterLink
        filter={VisibilityFilters.SHOW_ALL}
      >
        All
      </FilterLink>
      <FilterLink
        filter={VisibilityFilters.SHOW_ACTIVE}
      >
        Active
      </FilterLink>
      <FilterLink
        filter={VisibilityFilters.SHOW_COMPLETED}
      >
        Completed
      </FilterLink>
    ```
    to
    ```js
      exampleConfig.map((item, index) => (
        <FilterLink
          filter={item['sampleKey']}
        >
          {item['sampleKey'].nameExample}
        </FilterLink>
      ))
    ```
