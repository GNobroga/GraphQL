# Fragment

Permite agrupar fields para puxar na consulta 


```graphql

    user {
        ...userFull # Usando o fragmento
    }

    fragment userFull on User {
        id
        name
        email
    }


```