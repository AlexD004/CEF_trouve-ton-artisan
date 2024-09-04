# Trouve ton artisan

There is a project, designed and developped for my formation to become a fullstack developper.
It use React.JS to structure and edit the content.
It permit to display and filter workers, based on a json file.

## :magic_wand: Features

- ✨ CSS with Bootstrap
- ✨ Icons with FontAwesome
- ✨ Responsive
- ✨ Valid HTML5 & CSS3
- ✨ Contact form with required fields control
- ✨ A component to display simple cards
- ✨ A component to display workers cards (avatar / name / job / rate with star / top3)

## 🏗️ Getting Started

### 📄 Prerequisites

You'll need [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en) (which comes with NPM) installed on your computer.

```
node@v16.4.2 or higher
npm@7.18.1 or higher
git@2.30.1 or higher
```

### 🔨 Installation

From your command line, first clone CV-React :

```sh
# Clone repository
$ git clone https://github.com/AlexD004/CEF_trouve-ton-artisan

# Move into repository
$ git cd CEF_trouve-ton-artisan
```

After that, you can install the dependencies either using NPM.

```
# Install dependencies
$ npm install

# Run the project to see the result
$ npm start
```

## 🎚️ Custom set-up

### 📋 How to use CardsList Component

You can edit the CardsList component if you want. You can find it here :

📂 CEF_trouve-ton-artisan
--> 📂src
--> 📂components
--> 📄CardsList.jsx
        
1. In the main folder 'CEF_trouve-ton-artisan', search the folder 'src'
2. In the folder 'src', search the folder 'components'
3. In the folder 'components', search the file 'CardsList.jsx'
4. Open it !
5. Adjust like you need
   
You can call this components in all pages you want :

```

# On top of your page, adjust the path if necessary !
import CardsList from '../components/CardsList'

# In the render (JSX)
<CardsList 
  dataCards={ [stateWithDatas] } 
  textAlign= "[string : Bootstrap className]" 
  gutterBetweenCards= "[string : Bootstrap className]" 
  col= "[string : Bootstrap className]" 
  cardStyle= "[string : Bootstrap className]"
  displayID= [boolean]
/>

# Example :
<CardsList 
  dataCards={ sataSteps } // Required : get steps infos
  textAlign= "text-center" 
  gutterBetweenCards= "g-2" 
  col= "col-sm-12 col-md-4" 
  cardStyle= "cardShadow"
  displayID={true}
/>

```

You can change all informations.
Props in CardsList are injected in elements className to change styles.
CardsList use Bootstrap, so use it you too !

```
# Example of datas, you can rename it, just adjust the prop "dataCards" when you call the component
const stateWithDatas = [
  { 
    id: 1,
    title: "String",
    content: "string",
    imageURL: "path/to/image.jpg",
    "alt": "string"
  }
];
```

You can add any objects needed.
Each objet will be displayed as a card.

### 📋 How to use CardsWorker Component

You can edit the CardsList component if you want. You can find it here :

📂 CEF_trouve-ton-artisan
--> 📂src
--> 📂components
--> 📄CardsWorker.jsx
        
1. In the main folder 'CEF_trouve-ton-artisan', search the folder 'src'
2. In the folder 'src', search the folder 'components'
3. In the folder 'components', search the file 'CardsWorker.jsx'
4. Open it !
5. Adjust like you need
   
You can call this components in all pages you want :

```

# On top of your page, adjust the path if necessary !
import CardsWorker from '../components/CardsWorker'

# In the render (JSX)
<CardsWorker
  dataCards={ [stateWithDatas] } // Required : get workers infos
  topWorkers={ [stateWithTop3Datas]} // Required : get top workers to display medals
  top=[boolean] // Required : display all workers or only top3
  dataFiltered='[string : Bootstrap className]'// Option : filtered list of workers
  textAlign= [string : Bootstrap className]" 
  gutterBetweenCards= "[string : Bootstrap className]" 
  col= "[string : Bootstrap className]" 
  cardStyle= "[string : Bootstrap className]"
  buttonStyle= "[string : Bootstrap className]"
/>

# Example / Display Top3 :

# With a function to filter and sort "Top3 Workers" form dataWorkers
# Filter TOP Workers
# And sort by note

let topWorkers = [];
for (let i=0; i < datasWorkers.length; i++) {
  if (datasWorkers[i].top === true){
    topWorkers = [...topWorkers, datasWorkers[i]];
    topWorkers.sort((a,b) => (a.note > b.note ) ? -1 : 1 );
  }
}

<CardsWorker
  dataCards={ datasWorkers }
  topWorkers={ topWorkers }
  top={true}
  dataFiltered='' 
  textAlign= "text-left" 
  gutterBetweenCards= "g-2" 
  col= "col-sm-12 col-md-6 col-lg-4" 
  cardStyle= "bg-light rounded-4 py-4 px-2"
  buttonStyle= "rounded-5 w-100 fw-bold"
/>

# Example / Display all workers but filtered with a 'result' (set by category clicked or searchbar input) :

<CardsWorker
  dataCards={ datasWorkers }
  topWorkers={ topWorkers } // Required : get top workers to display medals
  top={false}
  dataFiltered={ result }
  textAlign= "text-left" 
  gutterBetweenCards= "g-2" 
  col= "col-sm-12 col-md-6 col-lg-4" 
  cardStyle= "bg-light rounded-4 py-4 px-2"
  buttonStyle= "rounded-5 w-100 fw-bold"
/>

```

You can change all informations.
Props in CardsWorker are injected in elements className to change styles.
CardsWorker use Bootstrap, so use it you too !

```
# Example of datas, you can rename it, just adjust the prop "dataCards" when you call the component

const stateWithDatas = [
  { 
    id: 1,
    name: "String",
    imageURL: "path/to/image.jpg", // For avatar
    "alt": "string", // Alternative text for avatar
    "specialty": "string",
    "note": "string", // From 0 to 5, with "." as separator : example "4.3"
    "location": "string",
    "about": "string",
    "email":"string", // example : "name@domain.com"
    "website":"string", // example : "https://www.domain.com"
    "category":"string", // In this repo : "Bâtiment", "Services", "Fabrication" ou "Alimentation"
    "top": boolean // Be sure that there are only 3 "top":true
  }
];
```

You can add any objects needed.
Each objet will be displayed as a card.

### 📋 How to use TitleH2 Component

You can edit the CardsList component if you want. You can find it here :

📂 CEF_trouve-ton-artisan
--> 📂src
--> 📂components
--> 📄TitleH2.jsx
        
1. In the main folder 'CEF_trouve-ton-artisan', search the folder 'src'
2. In the folder 'src', search the folder 'components'
3. In the folder 'components', search the file 'TitleH2.jsx'
4. Open it !
5. Adjust like you need
   
You can call this components in all pages you want :

```

# On top of your page, adjust the path if necessary !
import TitleH2 from '../components/TitleH2'

# In the render (JSX)
<TitleH2
  colorDivider="[string : bootstrap colors]"
  content="[string]"
/>

# Example :
<TitleH2
  colorDivider="primary"
  content="4 étapes pour contacter un professionnel"
/>

```

You can add any objects needed.
Each objet will be displayed as a card.

### 📋 How to use maildev to check email before production

All modules are already in the project.

1. If you haven't did it : run the app
You can see the app on your browser : localhost:3000
```
# Move into repository
$ git cd CEF_trouve-ton-artisan

# Install dependencies
$ npm install

# Run the project to see the result
$ npm start
```

2. Run mailDev on a new terminal
You can see the mail box on your browser : localhost:1080
```
$ maildev
```

3. Run the server on a new terminal
The server run on port 8000 and send mail on port 1025
```
# Install dependencies
$ npm install

# Run the project on dev mode to send mails to maildev
$ npm run dev
```
