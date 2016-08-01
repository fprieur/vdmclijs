[![Dependency Status](https://gemnasium.com/badges/github.com/fprieur/vdmcli.svg)](https://gemnasium.com/github.com/fprieur/vdmcli)

### Installation
<pre>npm install -g</pre>

Si l'installation s'est bien déroulé vous devriez être en mesure la commande suivante:
<pre>cd vdmcli</pre>
<pre>vdmcli -h</pre>

### Configuration
* Pour utiliser le cli avec github, vous devez obtenir un token personnel de votre compte github
  Renseignez le par la suite dans le fichier config/default.json du projet
  * vous pouvez en obtenir un via l'url: https://github.com/settings/tokens
    * Generate new token
    * Donnez un nom dans le champ Token description
    * Donnez les droits repo seulement
    * Cliquez Generate token
* Il faut également inscrire le repertoire de travail du cli pour la génération de fichier dans le même fichier
