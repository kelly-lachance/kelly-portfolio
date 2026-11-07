# Guide de modification — Portfolio Kelly Lachance (V2)

## Le principe
- `index.html` = structure et design. Évite d'y toucher pour les modifications courantes.
- `content.js` = tous les textes, projets, compétences et liens. C'est le fichier à modifier au quotidien.
- `assets/` = photos, images de projets et CV PDF.

## 1. Modifier le texte d'accueil
Dans `content.js`, section `identity` :
- `name` : prénom et nom
- `headline` : titre sous ton nom
- `about` : les deux paragraphes de présentation
- `eyebrow` : petit texte au-dessus du nom
- `photo` : chemin de la photo
- `cv` : chemin du CV PDF (ex. `assets/Kelly-Lachance-CV.pdf`)

Pour changer ta photo : remplace `assets/kelly-profile.png` par une nouvelle image portant le même nom, ou change le chemin dans `photo`.

## 2. Ajouter / modifier / supprimer un projet
Dans `content.js`, repère `projects: [ ... ]`.
Chaque projet est un objet avec :
- `title` : titre
- `description` : description courte
- `technologies` : liste de tags
- `image` : chemin image (laisser `""` si aucune)
- `github` : URL du repository (laisser `""` si aucun)
- `demo` : URL d'une démo/dashboard (laisser `""` si aucun)
- `status` : petit encart (facultatif ; mettre `""` pour le masquer)

### Exemple pour ajouter un projet
Copie ce bloc **à l'intérieur du tableau `projects`**, avant le `]` final. Ajoute une virgule après le projet précédent :
```js
{
  title: "Mon nouveau projet",
  description: "Une phrase qui explique le problème et ce que j'ai réalisé.",
  technologies: ["Python", "SQL", "Power BI"],
  image: "assets/mon-projet.png",
  github: "https://github.com/mon-compte/mon-projet",
  demo: "",
  status: ""
}
```
Pour supprimer un projet, supprime tout son bloc `{ ... }` et vérifie qu'il reste une virgule entre les projets.

## 3. Ajouter une image de projet
1. Place l'image dans le dossier `assets` (ex. `analyse-agro.png`).
2. Dans le projet correspondant, écris `image: "assets/analyse-agro.png"`.
3. Formats conseillés : PNG, JPG ou WebP ; image paysage de préférence.

## 4. Modifier les compétences
Dans `content.js`, section `skills` :
- `title` : titre de la carte
- `icon` : petit symbole décoratif
- `items` : liste des compétences
- `note` : statut ou niveau (ex. "Pratiqué en projet", "En apprentissage")

Ajoute ou supprime des éléments dans `items` en respectant les guillemets et les virgules.

## 5. Modifier les contacts
Dans `contact.links` :
- Email : `mailto:ton.adresse@email.com`
- LinkedIn : URL complète de ton profil
- GitHub : URL de ton profil
- CV : chemin vers le PDF dans `assets`

Exemple : `{ label: "✉ Email", url: "mailto:kelly@email.com" }`

## 6. Prévisualiser en local
Double-clique sur `index.html` pour l'ouvrir dans ton navigateur.
Si les changements ne s'affichent pas : recharge la page (Ctrl + F5).

## 7. Publier les modifications sur GitHub Pages
Quand le portfolio est hébergé sur GitHub Pages :
1. Modifie `content.js` ou ajoute les fichiers dans `assets/` depuis GitHub (ou en local).
2. Commit / enregistre les modifications sur la branche publiée.
3. Attends quelques instants puis recharge l'URL du portfolio.

## Petites règles pour éviter les erreurs
- Garde les guillemets autour des textes : `"Mon texte"`.
- Dans les listes, sépare les éléments par des virgules.
- Ne supprime pas les crochets `[]` des listes ni les accolades `{}` des projets.
- Les URL doivent commencer par `https://` (sauf l'email qui commence par `mailto:`).
- Pour masquer une image ou un lien, mets une chaîne vide `""`.
- Évite les guillemets doubles à l'intérieur d'un texte ; utilise plutôt des apostrophes ou `\\"`.

## À retenir
Pour 90 % des changements, tu n'auras qu'à modifier `content.js` et déposer les éventuelles images/CV dans `assets/`. Le style graphique reste intact.
