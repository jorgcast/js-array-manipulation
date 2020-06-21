# JS Katas - Manipulación de Array

Read this in [English](README.md)

Estas katas implican manipulación de arrays. Es la manera perfecta de conocer algunos métodos que tal no conozca.

Resuelva cada Kata en su fichero correspondiente `/src/kata-X.js`, siguiendo su descripción situada más adelante.

Lance los test unitarios para comprobar la correcta resolución de las Katas.

## Cómo probar tu código

Este proyecto utiliza `mocha` para los test y `babel` para poder utilizar Módulos ES en los ficheros spec.

Ejecute `npm install` para instalar las dependencias del proyecto.\
Ejecute `npm test` para lanzar todos los test.\
Ejecute `npm run test1` para lanzar solo los test de #kata-1, el nombre en su sección `describe`, i.e. el fichero kata-1.spec.js.\
Ejecute `npm run test2` para lanzar solo los test de #kata-2, el nombre en su sección `describe`, i.e. el fichero kata-2.spec.js.\

Ejecute `npm run testX` para lanzar solo los test de #kata-X, el nombre en su sección `describe`, i.e. el fichero kata-X.spec.js.

### Kata 1

**Objectivos:** Eliminar duplicados: new Set().

Dado un array ordenado de números enteros, escriba una función que devuelva `true` cuando el array tenga valores duplicados.

Ejemplo 1:

    Input: [1, 1, 2, 2, 3, 5, 9, 9]
    Output: true
    Explicación: El array sin duplicados es [1, 2, 3, 5, 9].

Ejemplo 2:

    Input: [7, 7, 19]
    Output: true
    Explicación: El array sin duplicados es [7, 19].

Ejemplo 3:

    Input: [95, 114]
    Output: false
    Explicación: El array sin duplicados es [95, 114].

### Kata 2

**Objectivos:** Agregar y eliminar elementos de un array: push, pop, shift, unshif.

Escriba una función que agregue o elimine un elemento en la primera o última posición de un array.

Ejemplo 1:

    Input: ([1, 6, 9], 'add_first', 5)
    Output: [5, 1, 6, 9]

Ejemplo 1:

    Input: ([1, 6, 9], 'remove_first')
    Output: [6, 9]

Ejemplo 1:

    Input: ([1, 6, 9], 'add_last', 7)
    Output: [1, 6, 9, 7]

Ejemplo 1:

    Input: ([1, 6, 9], 'remove_last')
    Output: [1, 6]

**Superpoder:** Ejecute las funciones como propiedades de un objeto.

### Kata 3

**Objectivos:** Modificar cada elemento de un array: forEach.

Agregue un nuevo campo llamado `year` a todos los clientes y devuelva el nuevo array.

    const clients = [
        { id: '1', name: 'Solid Snake' },
        { id: '2', name: 'Liquid Snake' },
        { id: '3', name: 'Solidus Snake' },
    ];

Ejemplo:

    Input: (clients, 2020)
    Output: [
        { id: '1', name: 'Solid Snake', year: 2020 },
        { id: '2', name: 'Liquid Snake', year: 2020 },
        { id: '3', name: 'Solidus Snake', year: 2020 },
    ]

### Kata 4

**Objectivos:** Crear un nuevo array a partir de un array original: map.

Dado un array de personajes, escriba una función que devuelva un nuevo array que contenga solo los nombres. Suponga que los objetos siempre tienen la propiedad `name`.

    const characters = [
        { id: '1', name: 'Simba' },
        { id: '2', name: 'Timon' },
        { id: '3', name: 'Pumbaa' },
    ];

Ejemplo:

    Input: (characters)
    Output: ['Simba', 'Timon', 'Pumbaa']

### Kata 5

**Objectivos:** Crear un array modificado, pero sin cambiar los datos originales: filter vs find, inmutabilidad y clonación de objetos, pasar argumentos por referencia o valor.

Dado un array de usuarios, escriba una función para actualizar el nombre de un usuario pasando su id.\
Esta función debería devolver la nueva matriz modificada y la matriz original.

**Nota:** Suponga que cada objeto de usuario siempre tiene los atributos `id` (que es único), `firstname` y `lastname`, y ningún otro atributo.

    const users = [
        { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ];

Ejemplo 1:

    Input: (users, '1', 'Tiny Rick')
    Output: [[
        { id: '1', firstname: 'Tiny Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ],[
        { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ]]

Ejemplo 2:

    Input: (users, '2', 'Evil Morty')
    Output: [[
        { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Evil Morty', lastname: 'Smith' },
    ],[
        { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ]]

### Kata 6

**Objectivos:** Saber si una propiedad de los elementos de un array tiene el mismo valor: every, some.

Escriba una función para saber si todos los productos de nuestra cesta o al menos uno tiene gastos de envío superiores a 0.

    const basket = [
        { id: '1', name: 'PokeBall', shippingCost: 0 },
        { id: '2', name: 'SuperBall', shippingCost: 3 },
        { id: '3', name: 'UltraBall', shippingCost: 5 },
    ];

Ejemplo 1:

    Input: (basket, 'all')
    Output: false
    Explicación: Enviando la etiqueta `all` comprobamos si todos tienen gastos superiores a 0.

Ejemplo 2:

    Input: (basket)
    Output: true
    Explicación: Sin enviar etiqueta comprobamos si alguno tiene gastos superiores a 0.

### Kata 7

**Objectivos:** Convertir un array en string y viceversa: toString, join, split.

Dado un array de humanos, escriba una función que devuelva un ciempiés humano (como string) y que puede elegir el símbolo del conector.
Si no se envía ningún símbolo, la función devuelve los un cienpiés humano sin conector.

Ejemplo 1:

    Input: (['mother', 'son', 'father'], '-')
    Output: 'mother-son-father'

Ejemplo 2:

    Input: (['aunt', 'grandma', 'uncle'], '**')
    Output: 'aunt**grandma**uncle'

Ejemplo 3:

    Input: (['man', 'woman'])
    Output: 'manwoman'

**Superpoder:** Los strings se pueden dividir y convertir en array con el método `String.split`. Del mismo modo, podemos pasar un símbolo para que actúe como separador.

### Kata 8

**Objectivos:** Crear un array nuevo a partir de otros: concat, operador de propagación (spread operator), parámetros rest (rest params), sort simple y flat.

Dadas varias matrices, cree una nueva y ordénela.

Ejemplo 1:

    Input: (
        ['Hulk', 'Thor'],
        ['Captain (North) America', 'IronMan'],
        ['Black Widow', 'Hawkeye'],
    )
    Output: [
        'Black Widow',
        'Captain (North) America',
        'Hawkeye',
        'Hulk',
        'IronMan',
        'Thor',
    ]

### Kata 9

**Objectivos:** Ordenar un array por una propiedad: sort.

Dado un array de productos, escriba una función para ordenarla por una propiedad variable. Suponga que cada producto tendrá las propiedades `name` y `category`.

**Nota:** Tenga en cuenta que `sort` modifica el array original.

    const products = [
        { name: 'roomba', category: 'home' },
        { name: 'iPad', category: 'electronics' },
        { name: 'lego Star Wars', category: 'toys' },
    ];

Ejemplo 1:

    Input: (products, 'name')
    Output: [
        { name: 'iPad', category: 'electronics' },
        { name: 'lego Star Wars', category: 'toys' },
        { name: 'roomba', category: 'home' },
    ]

Ejemplo 2:

    Input: (products, 'category')
    Output: [
        { name: 'iPad', category: 'electronics' },
        { name: 'roomba', category: 'home' },
        { name: 'lego Star Wars', category: 'toys' },
    ]

**Superpoder:** El orden de los arrays también se pueden invertir con `reverse`, pero este método no admite un callback o función para invertir igual que se puede hacer con `sort`. Tenga cuidado: `reverse` invierte la matriz original. Úsalo con sabiduría.

### Kata 10

**Objectivos:** Crear subarray de un array: slice.

Dado un array de números, escriba una función que devuelva un subarray dependiendo de la posición inicial y final que queramos. La posición final es un parámetro opcional.

Ejemplo 1:

    Input: ([1, 2, 3], 0, 1)
    Output: [1]
    Explicación: La posición inicial es 0 y la posición final es 1.

Ejemplo 2:

    Input: ([1, 2, 3], 1, 2)
    Output: [2]
    Explicación: La posición inicial es 1 y la posición final es 2.

Ejemplo 3:

    Input: ([1, 2, 3], 1)
    Output: [2, 3]
    Explicación: La posición inicial es 1 y no hay posición final.

### Kata 11

**Objectivos:** Eliminar y añadir elementos de un array en función de la posición: `splice`, parámetros rest (rest params), operador de propagación (spread operator).

Dado un array de números, escriba una función que devuelva un array modificado en el que se hayan eliminado elementos ​​en la posición seleccionada. También puede insertar nuevos valores en la posición de eliminación.

**Nota:** Tenga en cuenta que `splice` modifica el array original.

Ejemplo 1:

    Input: ([1, 2, 3], 0, 1, 8)
    Output: [8, 2, 3]
    Explicación: elimina 1 elemento y añade un 8 en la posición 0

Ejemplo 2:

    Input: ([1, 2, 3], 7, 1)
    Output: [1, 2, 3]
    Explicación: elimina 1 elemento en la posición 7

Ejemplo 3:

    Input: ([1, 2, 3], 0, 3, 5)
    Output: [5]
    Explicación: elimina 3 elementos y añade un 5 en la posición 0

Ejemplo 4:

    Input: ([1, 2, 3], 1, 0, 6, 4)
    Output: [1, 6, 4, 2, 3]
    Explicación: elimina 0 elementos y añade un 6 y un 4 en la posición 1

### Kata 12

**Objectivos:** Usar un array para crear otro tipo de datos: `reduce`.

Dado un array de números, escriba una función que devuelva la suma total.

**Nota:** También existe un método `reduceRight` para aplicar una función `reduce` a cada elemento de un array comenzando desde el último, en vez de desde el primero.

Ejemplo 1:

    Input: [5, 11, 4, 18]
    Output: 38

**Superpoder:** Usar la función `reduce` con un array de objetos.

Dado un ticket de supermercado, como un array de productos y precios, escriba una función que devuelva la cantidad total de dinero gastado.

Ejemplo 2:

    Input: [
        { product: 'cheese steak jimmys', price: 7 },
        { product: 'natural wonders', price: 5 },
        { product: 'aegis', price: 14 },
        { product: 'rock on', price: 9 },
    ]
    Output: 35
