# Functional Validation Library

Functional Validation Library Version1 By TurkishCodeMan

## Install
```
 npm install validate-functional-lib
 ```

# Usings

```
import {Library Valid} from "valid-functional-lib";

Creating A Validation Object
 const { Validate, isEmail, isPresent, flatterArray,errorFinder } = LibraryValid;

  const validation = { name: isPresent, email: isEmail };

  const res =
    Validate(validation, { name: 'aaa', email: 'asdsd' }, flatterArray);

  console.log(res)

Finished ! Easy Cool Using.
```