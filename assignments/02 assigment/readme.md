# 📘 **Assignment 02**

## 🎯 **Objective:**

Apply your understanding of **classes**, **object types**, **optional properties**, and **union types** to build small but meaningful code examples.

---

## ✅ **Instructions:**

* Create a file named `day02-assignment.ts`
* Use `tsc` to compile and test your code
* Write clean, well-commented code
* Add `console.log()` wherever needed to show output

---

## 📝 **Tasks:**

---

### 🔹 Q1: Define an object type for `Book`

Create a `type` alias called `Book` with the following fields:

* `title: string`
* `author: string`
* `publishedYear: number`
* `summary?: string` (optional)

Then, create **two book objects**:

* One with summary
* One without summary

---

### 🔹 Q2: Create a function `printBookDetails(book: Book)`

It should:

* Print all book details
* Print the summary only if it's provided

---

### 🔹 Q3: Use Union Types for `userId`

Declare a variable `userId` that can accept a `string` or a `number`.
Assign both values and print them using a function `displayUserId(id: number | string)`.

---

### 🔹 Q4: Create a class `Car`

Define a class `Car` with:

* Properties: `brand` (string), `model` (string), `year` (number)
* A constructor to initialize the object
* A method `getInfo()` that returns: `"Car: brand model (year)"`

Create an object of class `Car` and print its info.

---

### 🔹 Q5 (Bonus): Create a class `Employee`

* Properties:

  * `name: string`
  * `role: string`
  * `phone?: string` (optional)
* Constructor to initialize all properties
* A method `contactInfo()` that prints the name and phone (if available)

---

## ✨ Example Output

```ts
displayUserId(101);         // Numeric ID: 101
displayUserId("EMP102");    // String ID: EMP102

Car: Toyota Camry (2020)

Book: The Alchemist by Paulo Coelho
Summary: A spiritual journey...
```

---

## 📚 What You'll Practice

* Object shape definitions with `type`
* Optional properties using `?`
* Class declaration and object creation
* Using union types to allow multiple inputs