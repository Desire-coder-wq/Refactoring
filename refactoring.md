 <!-- Code Smell Analysis – User Registration Function -->

Author: Rose Desire
Purpose: This document identifies and explains several code smells found in the registerUser function. These issues affect maintainability, readability, and overall code quality.

 <!-- Code Smell 1: Long Method -->

Line Numbers: 3–69
Smell Name: Long Method

<!-- Why It’s a Problem -->

The registerUser function is excessively long (67 lines) and handles multiple responsibilities, including:

Input validation

Business logic

Data storage

This violates the Single Responsibility Principle (SRP). Long methods are harder to:

Understand

Test

Debug

Maintain

Each validation rule should be extracted into smaller, focused functions to improve clarity and modularity.

 <!-- Code Smell 2: Deep Nesting -->

Line Numbers: 13–28
Smell Name: Deep Nesting

 <!-- Why It’s a Problem -->

The username validation logic contains deeply nested if-else statements (up to four levels deep), creating an “arrow-shaped” structure that is difficult to read and follow.

This increases:

Cyclomatic complexity

Cognitive load for developers

 <!-- Recommended Improvement -->

Refactor using:

Early returns (guard clauses)

Extracted validation functions

This will flatten the structure and improve readability.

 <!-- Code Smell 3: Flag Variable / Boolean Flag -->

Line Numbers: 5, 54
Smell Name: Flag Variable

 <!-- Why It’s a Problem -->

A valid boolean flag is used to track validation state, but:

Validation continues even after valid is set to false

Unnecessary checks are still performed

Only the last error message is returned, hiding other errors

This results in inefficient execution and poor user feedback.

 <!-- Recommended Improvement -->

Use early returns

Or collect all validation errors and return them together

 <!-- Code Smell 4: Duplicate Code / Repeated Null Checks -->

Line Numbers: 13, 30, 38
Smell Name: Duplicate Code

 <!-- Why It’s a Problem -->

The same validation pattern appears multiple times:

if (data.field == null || data.field == "")


This duplication occurs for:

Username

Email

Password

Issues caused:

Increased maintenance effort

Risk of inconsistent updates

Additionally, using == null instead of strict equality (=== null) can lead to unexpected behavior.

 <!-- Recommended Improvement -->

Extract a reusable helper function, e.g.:

function isEmpty(value) {
  return value === null || value === "";
}

 <!-- Code Smell 5: Magic Strings -->

Line Numbers: 4, 30, 38, 46
Smell Name: Magic Strings

 <!-- Why It’s a Problem -->

Hardcoded error messages such as:

"Username required"

"Email required"

"Password required"

"Invalid email"

"Weak password"

"User must be 18+"

"Username too short"

are scattered throughout the code.

This makes the system:

Hard to maintain

Difficult to internationalize

Prone to inconsistent messaging



 <!-- Summary -->

This code contains several code smells that negatively impact:

Maintainability

Readability

Reliability