# TODO List persisted via Local Storage
[![Open in Coder](https://ixdcoder.com/open-in-coder.svg)](https://ixdcoder.com/templates/Static/workspace?name=TODO-Local&mode=auto&param.git_repo=https://bender.sheridanc.on.ca/system-design/todo-local&param.code_template=custom)

## About
This app demonstrates the use of [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to persist a collection of TODO items in the browser. Data storage is handled via a set of functions: `createData`, `readData`, `updateData`, `deleteData`, as per the the acronym [CRUD](https://developer.mozilla.org/en-US/docs/Glossary/CRUD). To keep things modular, functions are imported from a separate [module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), `crud.js`