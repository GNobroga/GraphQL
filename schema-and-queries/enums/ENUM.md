# Enum

```graphql

enum Status {
    ACTIVE,
    UNACTIVE,
    BLOCKED
}

```

Utilizando

```graphql

    type User {
        name: String
        status: Status
    }

```

O valores do Enum serão convertidos em String.