# MongoDB $inc operator error with string value
This repository demonstrates an error that can occur when using the MongoDB `$inc` operator to increment a field's value. The error occurs when attempting to increment a field with a string value instead of a numeric value.

## Bug Description
The bug involves an incorrect use of the `$inc` operator, resulting in unexpected behavior. When attempting to increment a field with a string value using the `$inc` operator, MongoDB throws an error and fails to update the document. This is because `$inc` expects a numeric value to perform the increment operation.

## Bug Solution
To fix the bug, ensure that the field value you are trying to increment is a number. If the field value is a string, convert it to a number before using the `$inc` operator.