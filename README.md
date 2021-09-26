# Functional Validation Library

Functional Validation Library Version1 By TurkishCodeMan

## Install
```
 npm install valid-functional-lib
 ```

# Usings

```
import {Validate,isEmail,isPresent} from "valid-functional-lib";

Creating A Validation Object
const validation={name:isPresent,email:isEmail}

const response=Validate(validation,yourObj);

Finished ! Easy Cool Using.
```