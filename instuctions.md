# Objectives
1. Create a responsive web application using Preact
2. Create content dynamically based on user interaction
3. Implement data storage and fetching using the Web Storage API
4. Maintain a web application state based on user interaction and stored data
# Overview
The final product of this Assignment will be based on your form from Assignment 1. You will implement that form using Preact components (the Form View), and then add a second view (the Admin View) that shows all the collected data from all the form submissions so far. 
# Required Web Page Elements
By the end of the this assignment (not today), your website will have all of these features implemented (well, maybe not the optional ones)
## 0. General Requirements:
- [x] All the pages must be responsive
- [x] All components must be in their own files (as modules) **except**:
	- your App component (the one you render)
	- If you have a very simply component that is only used by one other component, it can be declared **within** that component
## Part 1. Web Form
The initial view will look as close to your Assignment 1 form as possible, but re-written to use Preact Components. This page should only have 1 form element. If you had multiple in your Assignment 1, this is a good chance to take those out (it will work better later if you take care of this now)

There are 2 features from Assignment one that you **do not** have to implement for Assignment 3:
- Custom JS Validation
- Deleting an individual card
### Steps to Complete:
- [x] Start with the HTML of your page and move each part of it into components
	- Work one piece at a time, checking that it renders correctly as you go
	- To get the HTML of a single card that you created dynamically, you can use the Inspect tool of the browser and copy the rendered HTML of one card
- [x] Get all form elements and a single card appearing statically **before** you start working on dynamic changes (including adding/removing cards)
- [x] Add a state variable for the number of cards to show and add the needed event to modify that value
	- How this works will depend on how you added/removed cards for Assignment 1
- [x] Add handling for dynamic CSS/JS
	- This will probably use additional state variables and some one-line if/elses
	- HINT: it's usually easier to add (or not add) a class than assigning (or not) in-line CSS rules
### Requirements:
**In addition to the steps to complete above:**
- [x] The card element of the page must be a component
- [x] That card component must contain at least 2 other components
- [x] All the dynamic CSS and JS must be handled using state variables and/or one-line loops or ifs.
	- Meaning: You can't use if/else blocks or loops before your return line to figure out, for example, which class to assign
- [x] At least one component on the form must use { children }
	- The container for all cards, the radio button container, etc
- [x] HTML validation should work as it did on Assignment 1
	- custom JS validation is **not** required
## Part 2. Admin View
In Assignment 1, clicking the submit button did nothing (unless there were errors). In Assignment 3, if the form is successfully submitted, the user is taken to an admin view where they can see all the form submissions that have been made so far. This will all be handled in one index.html file, with different components being rendered (or not) as needed.

For the pets example, imagine a veterinarian looking at the pet records of every pet owner. Each form submission is a pet owner and that submission can be displayed to show the saved info for each of that owner's pets.
### Steps to Complete:
- [x] Make a component that will hold the whole Form View (from part 1)
- [x] Make a component that will hold the whole Admin View
- [x] For now, have your App component render the Admin View, but **not** the Form View
	- In Part 4 you'll add navigation between the two, once you have the Admin View working
- [x] Since we are skipping the form for now, make a static object in your main script file that represents all the data from one form submission, and pass that as the Prop to your Admin View component
	- You have a draft of this from the Assignment 3 worksheet
	- HINT: see the example data structure from the pet website
- [x] On the Admin View, display the data that has just been submitted to the form, but statically (you designed this for the Assignment 3 worksheet)
	- [x] There will be a section for all the general info,
	- [x] and a static card for each card from the form, but no form elements (no inputs, etc)
- [x] Somewhere on the Admin View, add a way to select which saved form submission to look at
	- (for the pet example, this is switching between different owners)
	- (for now, there will just be one submission - the dummy data you passed in from App)
	- This could be like a menu bar with buttons or styled sections, a carousel, a select menu, etc.
### Requirements:
**In addition to the steps to complete above:**
- [x] A component for the Form View
- [x] A component for the Admin View that takes an object for the incoming data
- [x] The Admin View component must contain at least 2 other components
- [x] Some visual aspect of the cards must change based on the data being displayed
	- In my example, this is the emoji in the top left corner that matches the species of pet
## Part 3. Saving Data
Each time the Admin View loads, it shows the data it receives from the App Component (like you worked on it step 2). It should **also** save this incoming form submission to an array of the data from every form submission. To do this, you'll use the Web Storage API.
### Steps to Complete:
- [x] At the start of the function for the Admin View component:
	- [x] get the saved data object from the browser (you can choose its name)
	- [x] check that it exists, and handle what to do if it doesn't
	- [x] Add the new data (from the Admin View prop) **if** it isn't already in the saved data
- [x] Update your form submission selection area so it shows some element for each saved submission
	- (for the pets example, I make a section showing the owner name)
- [ ] Add an event and a state variable so that clicking on one of those elements changes which saved form submission is displayed
- [ ] However you are displaying each clickable form submission, the element matching the currently displayed data should be visually highlighted in some way
- [ ] **TEST**: Load the page, check that the data from your static object are saved in localStorage. Then, change that static object in your main script file and reload the page. There should be two objects in localStorage now and 2 submissions to switch between
- NOTE: You might not add any new components for this part
### ### Requirements :
**In addition to the steps to complete above:**
- [ ] The data save in localStorage shouldn't save any duplicate records or any empty records
## Part 4. Navigating Between Form and Admin Views
Now we can connect the two views! 
### Steps to Complete:
- [x] In your App component, add a state variable to keep track of whether you're showing the Form or Admin Views
- [x] Use this state variable in your App component to decide whether to render **either** the Form or the Admin View (default to the Form View)
- When the form is (successfully) submitted, you need to get what the user typed into the form into the data object your Admin View expects
- [x] Make a named method in the main script file that takes the form elements and returns the object structure you expect
	- (Assuming you just have 1 form element, you can use `new FormData(document.forms[0])` to get a special form object with **all** the form element data. To get a value out of that, use `.get("{id or name}")`. This even works on groups of radio buttons to get you just the selected one!
	- [x] Start by getting the first input of the general info part of the form into the right format in the return object 
	- [x] Then add each other part of the general info part of the form, testing with console statements as you go
	- [x] Once those are working, get the data for the first card into the object format
	- [x] Then update that so it works for all cards
	- [x] **TEST**: Fill out the form and console this object. Make sure the object matches what Admin View expects before moving on
- [x] Use this function to pass the form data in the right format as the prop to the Admin View
- [x] **TEST**: Try filling our your form and submitting it. It should take you to the Admin View showing you the data you just submitted
- [x] **TEST**: Refresh the page to go back to the form, fill it out again and submit it again. Now you should see both what you just submitted **and** what you submitted the first time 
- [x] Finally, the Form View and the Admin View should each have a button (or something equivalent) to move back to the other view **without** filling out the form
	- [x] For going from the Form View to the Admin View, you can pass some empty value (like {} or []) to the data prop in the Admin View component, but make sure it **doesn't** save that empty data to localStorage or show the empty data 
	- [ ] When the Admin View loads, if there is nothing saved in localStorage AND no data was passed in from the Form View, the page should show a message saying no records have been showed and the button to go back to the Form View
### ### Requirements:
**In addition to the steps to complete above:**
- [ ] The Admin View should show the most recently submitted data by default

## Optional Features:
If you have extra time and feel like a challenge:
- [ ] Add your custom JavaScript validation rule from Assignment 1 back in
- [ ] Add a feature so an admin can remove form submissions and/or edit saved data through the Admin View
# Suggested Day-By-Day Work Plan

## Day 1 - Part 1:
- In lecture:
	- Design wireframe for the Admin View
	- Design the structure of the object for the submitted form data 
- In lab: 
	- Re-implement your Assignment 1 form as Preact Components
	- Including hooks for the dynamic CSS and JS features
- **Optionally** between labs:
	- (from Part 2) Start on the Admin View, focusing on the CSS styling
## Day 2 - Part 2:
- In lab (full 3 hours):
	- Implement the basic Admin View (with dummy data to display)
- **Optionally** between labs: 
	- CSS styling of the Admin View
	- (from Part 4) Start working on the function to format the form data as the object expected by Admin View 
## Day 3 - Part 3:
- In lab (full 3 hours):
	- Save and fetch submissions to/from localStorage
	- Display the saved submissions on the Admin View and navigate between saved submissions
- **Optionally** between labs: 
	- (from Part 4) Start linking the Admin and Form views with simple buttons to navigate between them without submitting the form
	- (from Part 4) Start working on the function to format the form data as the object expected by Admin View
## Day 4 - Part 4:
- In lab (full 3 hours):
	- Getting what the user inputted into the form into the object structure you expect in Admin View
	- Add navigation between the Form and Admin Views 
- **ASSIGNMENT DUE BY END OF LAB!**
## Submission
The assignment will be created, managed, and submitted through gitlab. You will create a project at the start of the first lab and will document your progress through frequent commits.

You **must** commit all changes at the end of each lab. If you choose to work on the assignment between the labs, you **must** have at least 2 commits with detailed messages explaining your progress. **MISSING COMMITS OR INCOMPLETE COMMIT MESSAGES WILL RESULT IN A DEDUCTION FOR THE ASSIGNMENT.** Additionally, your teacher may ask you to explain particular parts of your code to demonstrate your understanding of the code.

At the end of the 4th lab, you will submit the **complete** project by creating a new commit and pushing to the main branch.