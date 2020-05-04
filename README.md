# apple-vue-note

l'application ne foncitonne que partiellement, à cause de l'hosting de la bdd on peut attendre jusqu'à 30sec pour recuperer ses notes


Route GET https://laravel-notes-api-at.herokuapp.com/api/notes

Cette route permet de lister ses notes, dans l’ordre anti-chronologique de création.



Route GET https://laravel-notes-api-at.herokuapp.com/api/notes/{id}

Cette route permet de récupérer une note existante à partir de son id.



Route POST https://laravel-notes-api-at.herokuapp.com/api/notes

Cette route permet d’ajouter une note.
(ne fonctionne pas pour le moment)



Route UPDATE https://laravel-notes-api-at.herokuapp.com/api/notes/{id}

Cette route permet de modifier une note existante à partir de son id.
(ne fonctionne pas pour le moment)




Route DELETE https://laravel-notes-api-at.herokuapp.com/api/notes/{id}

Cette route permet de supprimer une de ses notes à partir de son id.