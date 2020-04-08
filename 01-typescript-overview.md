# Intro

## TypeScript Overview
We are just wriitng javascript at the end of the day.

typescript = javascript + type system

only thing we are adding is the type system

The type system:
- helps us catch errors during development 
- Use 'type annotations' to analyze our code
- only active during development
- doesnt provide any perofmrnace improvements 

normally have to execute code to see error but that is not efficient

we use the type system to catch errors during development

with typescript the code editor will show the bug- to do this typescript uses type annotations to analyse the code base - we add these ourselves.

when we go to deploy our app the type system falls away. node js and the browser doesnt know what typescript is

we first compile our typescript and get js out of it- that javascript is what we execute

- in our app we add typescript code (javascript + annotations)
- feed code into typescript compiler, checks for errors
- convert into plain old javascript

```
typescriptlang.org/play
```

