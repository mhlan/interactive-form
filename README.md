# interactive-form

## Table of Contents

1.  Form Functionality
    a. Name Focus
    b. Job Role
    c. Design Selection
    d. Activity Time Slots
    e. Total Cost
    f. Payment
2.  Form Validation
    a. Name
    b. Email
    c. Activites
    d. Credit Card
    e. Submit

---

1.  Form Functionality

a. Name Focus:
On page load or page refresh, the cursor automatically focuses the "Name" field of the form.

b. Job Role:
Upon selecting other, a new text input field appears to enter a custom job role. Field can be left blank.

c. Design Selection:
Upon selecting a design theme, an additional drop down selection field, "Color" appears, containing the relevant options.

d. Activity Time Slots:
There are four activities with conflicting time slots. If one such activity is selected, the user is unable to select the activity whose time slot it conflicts with, and the text is greyed out and italicized.

e. Total Cost:
Upon selecting activites, a "Total Due" text element is updated beneath all activity options. Upon deselecting a previously selected activity, the price adjusts appropriately.

f. Payment:
There are three payment options that are available, and the relevant content for each is hidden upon page load. Upon selecting each option, the relevant input fields or text information is displayed.

---

2.  Form Validation

a. Name:
The name field must be at least one character, not contain numbers, and not only contain empty space.

b. Email:
The email field must be of a valid format (eg: email@website.com) and an error message is provided in real time until a validly formatted address is entered.

c. Activites:
Form cannot be submitted unless one or more activites are selected.

d. Credit Card:
If the "Credit Card" payment option is selected, a valid credit card number (13-16 digits), ZIP code (5 digits), and CVV number (3 digits) must be entered.

e. Submit:
Upon clicking the submit button, all fields are checked for validity. If any fields are invalid, an alert appears informing the user, and every field deemed invalid recieves red border styling and/or a red, italic error message. Once all fields are valid and submission succedes, an alert informs the user of succesful submission, and the page is refreshed.
