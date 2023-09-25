

################## TUTORIAL Tailwind CSS + TypeScript + Flowbite and WebPack ########################

I got inspired from this tutorial : https://flowbite.com/docs/getting-started/typescript/
			
> Setup TypeScript

Create a new project 

	First install/update or upgrade NodeJS.
	RECOMMENDED : Delete old version and download last version on windows 10 https://nodejs.org/it, 
	Its not neccesary update NPM in this case.		
	
	Update NPM https://docs.npmjs.com/try-the-latest-stable-version-of-npm
	
					[ npm install -g npm@latest ]
	
1. Create a new project and run the following command to create a package.json file in the root folder:	
			
						[ npm init ]
					 
	 Here we will add the project dependencies and the script commands.				 
					 
2. 	First consult the official page https://www.typescriptlang.org/download.
	Install TypeScript under project folder	
				
		
					[ npm install typescript --save-dev ] locally 
					
					[ npm install -g typescript ] globally


3. Verify if is installed corrently	

						[tsc --v] 
					
4. If it does not work with message : "tsc is not recognized as an internal or external command"
Set Environmnet variable on windows [ https://www.typescripttutorial.net/typescript-tutorial/setup-typescript/ ] . 
In my case take my full path of npm : "C:\Users\marcc\AppData\Roaming\npm" and put it on PATH Environmnet variable.


Under folder project execute this command to create a new 'tsconfig.json' file by running the following command:
 
					[ npx tsc --init ]
					[ C:\wrspace\frontend\tailwind\example>npx tsc --init ]

output: 

		{
			"compilerOptions": {
				/* Visit https://aka.ms/tsconfig to read more about this file */

				/* Projects */
				// "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
				// "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
				// "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
				// "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
				// "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
				// "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

				/* Language and Environment */
				"target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
				// "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
				// "jsx": "preserve",                                /* Specify what JSX code is generated. */
				// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
				// "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
				// "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
				// "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
				// "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
				// "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
				// "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
				// "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
				// "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

				/* Modules */
				"module": "commonjs",                                /* Specify what module code is generated. */
				// "rootDir": "./",                                  /* Specify the root folder within your source files. */
				// "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
				// "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
				// "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
				// "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
				// "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
				// "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
				// "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
				// "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
				// "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
				// "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
				// "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
				// "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
				// "resolveJsonModule": true,                        /* Enable importing .json files. */
				// "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
				// "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

				/* JavaScript Support */
				// "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
				// "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
				// "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

				/* Emit */
				// "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
				// "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
				// "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
				// "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
				// "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
				// "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
				"outDir": "./",                                   /* Specify an output folder for all emitted files. */
				// "removeComments": true,                           /* Disable emitting comments. */
				// "noEmit": true,                                   /* Disable emitting files from a compilation. */
				// "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
				// "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
				// "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
				// "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
				// "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
				// "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
				// "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
				// "newLine": "crlf",                                /* Set the newline character for emitting files. */
				// "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
				// "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
				// "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
				// "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
				// "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
				// "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

				/* Interop Constraints */
				// "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
				// "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
				// "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
				"esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
				// "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
				"forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

				/* Type Checking */
				"strict": true,                                      /* Enable all strict type-checking options. */
				// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
				// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
				// "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
				// "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
				// "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
				// "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
				// "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
				// "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
				// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
				// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
				// "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
				// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
				// "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
				// "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
				// "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
				// "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
				// "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
				// "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

				/* Completeness */
				// "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
				"skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
			}
		}



- COMMONJS (Node old version) VS ESM Module (Node new version >= V14 or higher version).	
  - [My Current Node Version at the moment is : v20.7.0 ]
  - [My Current Npm Version  at the moment is : 10.1.0  ]



Replace with this tsconfig.json

* WITH COMMONJS MODULE
				
					{
					    "compilerOptions": 
						{
					    	"lib": ["dom", "es2015"],
					    	"outDir": "./lib/cjs/",
					    	"sourceMap": true,
					    	"declaration": true,
					    	"noImplicitAny": true,
					    	"module": "commonjs",
					    	"target": "es5",
					    	"allowJs": true,
					    	"moduleResolution": "node"
						},
						"include": ["src/**/*.ts*"],
						"exclude": ["node_modules", "dist", "lib"]
					}

> TSConfig Bases https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#tsconfig-bases >
>
> Source tsconfig.json example https://www.npmjs.com/package/@tsconfig/node20
>
>Install and extend inside your tsconfig.json : 

					[ npm install --save-dev @tsconfig/node20 ]

* ESM MODULE inspired to this version node20 "@tsconfig/node20/tsconfig.json"
			     
					{
						// "extends": "@tsconfig/node20/tsconfig.json",
						
						"compilerOptions": {

						// "preserveConstEnums": true,

						"lib": ["DOM",  "ES2023"],
					
						"module": "node16",
						"target": "es2022", 
					
						"outDir": "./lib/cjs/",
						"removeComments": true,
						"allowJs": true,
						"sourceMap": true,                                  /* Create source map files for emitted JavaScript files. */
						"rootDir": "./",                                    /* Specify the root folder within your source files. */
						"declaration": true,
						"noImplicitAny": true,
						"allowSyntheticDefaultImports": true,
					
						"strict": true,
						"esModuleInterop": true,
						"skipLibCheck": true,
						"forceConsistentCasingInFileNames": true,
						"moduleResolution": "node16"
					},
					"include": ["src/**/*.ts*", "src/modules/scripts/Utils.mjs"],           /* Include all folder or files to compile */
					"exclude": ["node_modules", "dist", "lib"]             					/* Exclude all folder or files to compile */
				}

* 4 Now create a folder with name "src" and under this folder create a new file .ts for example
Example : 
File name :  example.ts
Content   : 
   const text: string = 'Hello TypeScript'; 
   console.log(text);


* 5 Compile with  [ 'tsc' ] or ['tsc -w' ] compile and listen, that command listens to the changes in the project


* 6 Webpack bundler (Unique package files )
  -	What is Webpack ? is a client-side form builder and form loader.
  - Per compilare il codice TypeScript in JavaScript supportato dai browser moderni dovremo installare Webpack e raggruppare il codice sorgente in un file JavaScript finale che includeremo successivamente nei nostri modelli HTML.
  - Under folder project execute this command
  - Man https://webpack.js.org/guides/typescript/


         		[ npm i -D webpack webpack-cli typescript ts-loader ]

* Create a new webpack.config.js file and add the following content:

                      //webpack.config.js
                      const path = require('path');

                      module.exports = {
                        mode: "development",
                        devtool: "inline-source-map",
                        entry: {
                          main: "./src/index.ts",
                        },
                        output: {
                          path: path.resolve(__dirname, './dist'),
                          filename: "app-bundle.js" // <--- Will be compiled to this single file
                        },
                        resolve: {
                          extensions: [".ts", ".tsx", ".js"],
                        },
                        module: {
                          rules: [
                            { 
                              test: /\.tsx?$/,
                              loader: "ts-loader"
                            }
                          ]
                        }
                      };

* Since our entire setup is seen as a module ESM ("type": "module" on package.json) the webpack.config.js script 
must be converted to a .cjs module.
        	
      * Conversion to webpack.config.cjs Module by "type": "module" on package.json
			
  * Run the following command to watch for changes and compile the TypeScript source code into browser-compatible JavaScript code:

                      [ npx webpack --watch ]

  * output

                      /******/ (() => { // webpackBootstrap
                      var __webpack_exports__ = {};
                      /*!************************!*\
                        !*** ./src/example.ts ***!
                        \************************/
                      var text = 'Hello TypeScript';
                      console.log(text);

                      /******/ })()
                      ;
                      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU0sSUFBSSxHQUFXLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vc3JjL2V4YW1wbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB0ZXh0OiBzdHJpbmcgPSAnSGVsbG8gVHlwZVNjcmlwdCc7XHJcbmNvbnNvbGUubG9nKHRleHQpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ== 

      > This will generate an app-bundle.js named JavaScript file that you can now include inside your HTML templates. 
      To check out if it works you can create a new 'index.html' file and open it inside your browser.

  * Example HTML with .css and .js resulting  
  
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                  <link rel="stylesheet" href="./dist/output.css">
              </head>
              <body>
                  <h1 class="text-4xl">Hello Tailwind CSS!</h1>
                  <script src="./dist/app-bundle.js"></script>
              </body>
              </html>


* 7 ESM Instead of CommonJS
  * By default the compiled code will be ESM instead of CJS as specified in the tsconfig.json file. 
  * Compile the code by running the following command in your terminal:

					[ npx tsc ] or [ tsc ]

	> This will generate a new lib/ folder with CJS (CommonJS) compiled JavaScript code that we will later include in our templates.
	
	
* 8 ECMAScript modules 

	If you want to compile for ESM instead of CJS you can use the following command instead:

					[ npx tsc -m es6 --outDir lib/esm ]
					
	* CommonJS Modules (CJS) VS EcmaScript Modules (ESM) 
	 > The main difference between CJS and ESM is that CJS loads each module synchronously and ESM instead loads each module
	  asynchronously .
	
	> Source https://medium.com/@mariokandut/how-to-convert-a-cjs-module-to-an-esm-784112d009fd#:~:text=Modules%20(ESM)%20.-,The%20main%20difference%20between%20CJS%20and%20ESM%20is%20that%20CJS,exports%20. 
     
	> Read too CommonJS vs. ES modules in Node.js
          -	https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

    * Another way to enable ES forms in your project can be done by adding a field
	 "type: module" internally on  package.json file.
	* Se impostato su "modulo", il campo type consente a un pacchetto di specificare che tutti i file .js al suo interno sono moduli ES. 
	* Se il campo "type" viene omesso o impostato su "commonjs", tutti i file .js vengono trattati come CommonJS.
      
      * Example :   "type": "module"  or  "type": "commonjs"

                  {
                      "name": "my-library",
                      "version": "1.0.0",
                      "type": "module",
                      // ...
                  }

          * NOTA : With this setting, Node.js treats all files within that package as ES modules. 
            You will not need to set the file with the ".mjs" extension".
        
          * ATTENTION!!
           By that settings the "webpack.config.js" file should be changed the extention to "webpack.config.cjs" because in this case all modules are treated as module ES  => "type": "module".
        
          * Internally it has javascript code which is not allowed in ESM syntax, we change the extension to .cjs which is a permitted module.
        
          * Otherwise the ".js" extension is left but must be set as CommonJS "type": "commonjs"
        
          * Un modulo ".cjs" puo' internamente utilizzare codice javascript senza dover convertirlo in typescript!!.

**************************************************************************************************************************************
** Now that we have successfully configured TypeScript and also compiled the source code we have to install and configure Tailwind CSS.
**************************************************************************************************************************************

> Tailwind CSS

* 1 Run the following command to install and require Tailwind CSS in your package.json file:

					[ npm install -D tailwindcss ]
	
* 2 Install Tailwind CSS - 
	Create a new tailwind.config.js file by running the following command: 
	
					[ npx tailwindcss init ]


Based on your source template files make sure you include all of the relevant paths in the content area of your Tailwind CSS 
configuration file .

- OUTPUT :
  Put it on manually all paths folders src, .ts and .html :

					/** @type {import('tailwindcss').Config} */
						module.exports = {
  						  //prefix: 'tw-',     // Prefix of your choice between tw- or tailwind- etc, etc... it doesn't matter
  						  //darkMode: 'class', // of your choice
						  content: [
							"./src/**/*.ts",
							"./**/*.html"
						  ],
						  theme: {
							extend: {},
						  },
						  plugins: [],
						}
						


						
						
* 3 Create a new input.css file inside the src/ folder and import all of the basic Tailwind CSS directives:


				@tailwind base;
				@tailwind components;
				@tailwind utilities;

* 4 Compile the code when changes are made by using the following command:

				  [ npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch ]
					
	> Now open file index.html on your browser and you should see the larger text due to the utility class "text-4xl"
	and also see a "Hello TypeScript" message within your development console.					
						

* 5 Install Live Server globally https://www.npmjs.com/package/live-server ...

  		[ npm install -g live-server ]

  * And insert this command on package.json file:

		"scripts": {       
		"start": "live-server"     
		},

  * Run Live Server 		

              [npm start ] 

  > ATTENTION! 
      However before running LIVE SERVER, you should run previous commands :

    * Compile TypeScript and transpiled in JavaScript supported by modern browsers.

                  [ npm i -D webpack webpack-cli typescript ts-loader ] 

    * Create bundle.js file and see the changes live

                  [ npx webpack --watch ]

    * Compile TailwindCSS file and see the changes live

              [ npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch ]		

    * Compile/traspiled typescript files in javascript
	
                [ tsc ] 

		> NODE JS usually runs simple .ts files but when they become complex it is necessary to translate Typescript files to Javascript.
        Because of this is important execute the compilation of .ts files.

    * Or that command compile and listens to the changes in the project

                 [ tsc -w ] 


*********************************************************************************************
> FLOWBITE

* 1 Install Flowbite as a dependency using NPM by running the following command:

                    [ npm install flowbite ]


* 2 Require Flowbite as a plugin inside the tailwind.config.js file: 

                      module.exports = {
                           plugins: [
                              require('flowbite/plugin')
                           ]
                      }


* 3 Additionally to your own content data you should add flowbite to apply the classes from the interactive elements in the tailwind.config.js file:

                    module.exports = {
                          content: [
                            "./node_modules/flowbite/**/*.js"
                          ]
                    }


* 4 Require the JavaScript code that powers the interactive elements before the end of your <body> tag:
    
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>


> * 5 FLOWBITE Include via CDN 
> 
* Require the following minified stylesheet inside the head tag:

        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />

 - And include the following JavaScript file before the end of the body element:

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script> 


> ATTENTION !
> 
> Please remember that the best way to work with Tailwind CSS and Flowbite is by purging the CSS classes.

* You can directly import the main JavaScript file inside your bundled app-bundle.js file like this:

        import 'flowbite'; 
        
Put this [ import 'flowbite' ] on index.ts file because will be compiled with webpack.. 

