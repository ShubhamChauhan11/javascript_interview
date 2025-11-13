1.//suppose we want to implement loading funconality in our multiple compnent such as table, cards, list
// and we have 3 components card.tsx, table.tsx, list.tsx
//we have to put some conditional rendering in all the above 3 components to conditionally show loader if data is fetching
// here is the chances of optimization we can separate out the loading logic in a higher order component 


export const loadingHoc=(component)=>{
    return function({loading, ...props}){
       if (isLoading) {
         return <p>Loading...</p>;
       }
       return <Component {...props} />;
    }
}

import Card from "card.tsx"
import List from "list.tsx"

const CardWithLoading= loadingHoc(Card)
const ListWithLoading= loadingHoc(List)

// now use CardWithLoading && ListWithLoading  if you want to show loading state else normal Card & List  will also work

<CardWithLoading loading={false} data={[]}/>
<ListWithLoading loading={true} data={[]}/>

// Real-world Use Cases for HOCs:

// Adding authentication checks (withAuth)

// Tracking analytics (withTracker)

// Error boundaries (withErrorBoundary)

// Adding theming or styles (withTheme)

// Data fetching wrappers (withData)

2. Theme example
 // suppose we have made a Button.tsx, Card.tsx components and we want to apply theme  to it
 //we can create a hoc that inject theme into the Button| Card component when we need it
 //here if we have more component where we want to inject theme we dont need to import usecontext and themecontext everywhere we will user useTheme component
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const withTheme = (WrappedComponent) => {
  return function ThemedComponent(props) {
    const theme = useContext(ThemeContext);
    return <WrappedComponent {...props} theme={theme} />;
  };
};

export default withTheme;

const ThemedButton= withTheme(Button);


//advantages
1. Code Reusability	You don’t repeat useContext(ThemeContext) in every component.
2. Separation of Concerns	Theming logic stays outside UI components — components focus only on UI.
3. Easier Maintenance	If you change how the theme works (e.g., add a colorScheme prop), you only update the HOC, not every component.
4. Consistent Theming	Every wrapped component gets theme data in the same structure.
5. Plug-and-Play	Any 3rd-party or custom component can be “made theme-aware” by wrapping it once.