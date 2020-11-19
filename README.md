# Test technique pour Emmaüs
Le project s'initialise avec `yarn`
Il a été réalisé en Javascript sous le framework React.js.
L'api utilisée est [SchoolDigger](https://any-api.com/schooldigger_com/schooldigger_com/docs/_v1_schools/Schools_GetAllSchools)

## Fonctionnalités 
L'application contient les fonctionnalités suivantes :

 - Rechercher une école par État et par nom d'école. Si l'input pour rechercher l'école n'est pas rempli, toutes les écoles de l'État choisi sont recherchées.
 - Système très simple de pagination en exploitant la query `page` proposée par l'API. 
 - Possibilité de voir la position de l'école grâce à un marqueur sur une carte.
 
 

## Difficultés rencontrées
L'élément le plus difficile pour réaliser l'application fut sans conteste de gérer la limitation des requêtes vers l'API. Lorsque la limitation est atteinte, l'API renvoie un objet de données "poubelles" qui ne contiennent pas forcément toutes les infos nécessaires lorsqu'on exploite les données réelles. Afin d'éviter les erreurs, il a fallu jongler avec des conditions, limiter les appels et ainsi contourner le problème.

## Ressources 
Afin de mener à bien ce test, j'ai utilisé la magie de la recherche internet. J'ai listé ici les plus intéressantes.

 - Pour afficher une carte, j'ai utilisé [React-map-gl](https://visgl.github.io/react-map-gl/). La documentation est claire mais j'en suis venue à utiliser cet outil après être tombée sur ce [tutoriel](https://dev.to/joowoonk/how-did-i-play-with-mapbox-gl-on-react-hooks-part-1-4pkl).
 
 - Pour comprendre l'utilisation de l'API SchoolDigger et voir le fonctionnement des api-keys, je me suis tout simplement référée à la [doc](https://developer.schooldigger.com/). 
 - Étant donné que les API keys se doivent d'être secrètes, les variables d'environnement sont donc stockées dans un fichier .env. Étant donnée que c'était la première fois que j'utilisais des api keys en Front, j'ai pu apprendre ce qu'il était nécessaire de faire [ici](https://dev.to/thepuskar/how-to-hide-your-api-keys-in-react-4k55). C'est là que j'ai appris que je n'avais pas besoin de package type [Dotenv](https://www.npmjs.com/package/dotenv) (et que je ne pouvais pas utiliser de toute manière) grâce à Webpack lors de l'initialisation d'un projet React.
 
 ## Conclusion
 Je tenais à vous remercier de m'avoir laissé la chance de passer ce test technique. Tout n'était pas évident à gérer et j'ai ainsi pu encore apprendre de nombreuses choses grâce à cet exercice !
