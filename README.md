# Origin Mobile Take Home Assignment

## **Introduction**

This assignment assesses your skills and approach to building a mobile application using React Native. The focus is on creating an application that includes user authentication, transaction management, and integration of specific mobile features. It's important to consider that there will also be a React web desktop version of the same application. While you are not required to write the desktop version, your design should be scalable and maintainable, keeping in mind the existence of the web version.

## **Assignment Overview**

Your task is to create a simple mobile application with the following features:

### **1. Sign-In and Sign-Up Page**

- [x] **Sign-In Page**: Allow users to sign in to their account.
- [x] **Sign-Up Page**: Allow new users to create an account. During the sign-up process, users must enter basic information (like name, email, password, etc.) and upload a selfie.

### **2. Transactions Listing Page**

- [x] Display a list of transactions associated with the logged-in user. Each list item should have a summary of the transaction (e.g., date, amount, type).
  - [x] Required: pull to refresh
  - [ ] Optional: sorting, filtering (client side)

### **3. Transaction Details Page**

- [x] When a user selects a transaction from the list, they should be navigated to a detailed view of the transaction.
  - [x] **Required**: Allow users to attach the current GPS latitude and longitude coordinates to the transaction.
  - [x] **Optional**: Provide an option to attach a receipt to the transaction.
  - [x] **Optional**: Display location on the map

### **4. App State Management Considerations**

- [x] Ensure that the application handles the app state effectively, especially during typical mobile interactions such as using the power button or home button. The app should maintain a consistent state and user experience.
- [x] Handle offline mode

## **Technical Requirements**

- [x] The application should be developed using React Native.
- [x] Ensure the app is compatible with both iOS and Android.
- [x] Implement proper error handling and validation, especially for the sign-in and sign-up processes.
- [x] Write clean, modular, and reusable code. Consider component reusability for the React web desktop version.
- [ ] Include a README file with clear instructions on how to set up and run your application.

## ** Other Technical Requirements**

- [ ] On image picker, dismiss modal after upload is succesfull
- [x] Validates Firebase auth errors and display a message on screen (SignIn and SignUp)
- [ ] Complete Profile screen
- [ ] Apply translations
- [ ] Validate all strings are translated

## Available Resources

You have access to the following API’s:

**Transactions - Listing**

**Query parameters**

page: required

pageSize: required

```markdown
GET https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions?page=?&pageSize=?
```

**Transactions - Details**

```markdown
GET https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions/{id}
```

**Transactions - Update coordinates**

```markdown
POST https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions/{id}/coordinates
```

Body

```
{
    "Lat": 1, --double,required, case sensitive
    "Lon":1 --double, required, case sensitive
}
```

**Transactions - Upload receipt**

```markdown
POST https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions/{id}/receipt
```

Body

```markdown
{
"ReceiptImageUrl": "foo" --string,required, case sensitive
}
```

We don't have APIs for sign-in/sign-up, it is up to you to decide the best way to handle it.

Note: both POST APIs do not update internal resources as it would affect other candidates, thus such APIs are for demonstration only.

## **Submission Guidelines**

- [ ] Provide the source code via a GitHub repository.
- [ ] Include a video demonstration of the app covering all the functionalities.
- [ ] Document any assumptions made and your thought process in the README file.
