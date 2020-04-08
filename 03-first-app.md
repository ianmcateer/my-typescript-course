# First app

our app will make a network request to fetch some JSON and print the result

we are going to accidently introduce one or two bugs and then we will see how ts shows us bugs whle we are writing code as opposed to when we execute our code

-   take a look at the api we will use to fetch data
-   create a new directory
-   crate a pachakge.json
-   install axios
-   write code

```
jsonplaceholder.typicode.com
```

scroll down to resources. we are going to fetch /todos

chrome extension to format data

create new directory inside it run

```
npm init -y
```

generate the file
then install axios

```
npm install axios
```

## executing Typescript Code

.ts short for typescript. all typescript code are .ts files

```
import axios from 'axios';

const url = 'http://jsonplaceholder.com/todos/1';

axios.get(url).then((response) => {
	console.log(response.data);
});
```

we have to compile first.inside terminal

```
tsx index.ts
```

look at the folder and now have index.js file

-   this is the compiled version of our compiled code

```
node index.js
```

then we see our todo logged out

We installed ts-node, this combines these two commands into one- it compiles the file and executes it

```
ts-node index.ts
```

## Why TS is handy

```
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
	const todo = response.data;
	const ID = todo.ID;
	const title = todo.ID;
	const finished = todo.FINISHED;

	console.log(`${ID}: ${title}: ${finished}`);
});

```

we will get **undefined**

lets add some TS so we can catch the errors we just made

dont worry about the syntax yet

it owul dhave been great if we could know what properties response.data have 

eg
```
//todo
//title
//id
```

```
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then((response) => {
	const todo = response.data as Todo;
	const ID = todo.id;
	const title = todo.title;
	const finished = todo.FINISHED;

	console.log(`${ID}: ${title}: ${finished}`);
});

```

now we have an interface- an interface is used to define the structure of an object- we are saying it will have three properties with these data types. (we can ignore typing out other properties if any) im telling ts what type of info im expecting back

```
	const todo = response.data as Todo;
```
once i type this TS will show me the errors. it has now underlined the three properties saying we have done something wrong here. we can hover over each of the errors and says what is going wrong 

## Catching more Errors

```
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then((response) => {
	const todo = response.data as Todo;

	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logTodo(id, completed, title);
});

const logTodo = (id, title, completed) => {
	console.log(`
		The todo with ID: ${id},
		Has a title of: ${title},
		Is it finished? ${completed}
	`);
};

```

now we have another error because we mixed up the number of arguments into the function. 

If we used TS approperiated we oculd get an error before we ran our code.

```
const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
		The todo with ID: ${id},
		Has a title of: ${title},
		Is it finished? ${completed}
	`);
};
```

we are describing the type of variables of our arguments. we see a re dunlerline under completed

```
Argument of type 'boolean' is not assignable to parameter of type 'string'.
```