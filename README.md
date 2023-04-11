This is a small library for encrypting or hashing texts without any dependency.

## Encryption Module

It has 2 modules, and the first and main one is `encryption.js`. This module includes 8 functions named as: `encrypt1`, `decrypt1`, `encrypt2`, `decrypt2`, etc. All of them use different character encodings to encrypt texts but work the same way.

They have a simple and similar syntax:

```javascript
let encrypted1 = encrypt1("this is a sample text", "this is a sample key");
let encrypted2 = encrypt2("this is a sample text", "this is a sample key");
let encrypted3 = encrypt3("this is a sample text", "this is a sample key");
let encrypted4 = encrypt4("this is a sample text", "this is a sample key");
```

this variables returns the crypted gibberish string.

The decryption functions also have same synthax:

```javascript
let decrypted1 = decrypt1(encrypt1, "this is a sample key");
let decrypted2 = decrypt2(encrypt2, "this is a sample key");
let decrypted3 = decrypt3(encrypt3, "this is a sample key");
let decrypted4 = decrypt4(encrypt4, "this is a sample key");
```

The first parameter is have to be text. It can have unlimited range of characters.

The second parameter could be an string, number or boolean.

Here is the limitations and points you should be aware of:

If the Second Parameter, which is key;

if it's a string, it can have only 200 characters inside. Also if you were type "true" or "false" as a string, they'll be converted to boolean, which means your second argument will take "true" or "false" value as a boolean.

if it's a number, it can't be bigger than 64.000.

if it's a boolean and it's true, that means there is no encryption occur when you invoke encrypt functions, only thing that happen is you change the encodings of the character, which far more easier to configure out to find your key. Also be aware of, if you invoke "encrypt3()" function and passing no argument or "0" as number or "true" as string or boolean the encoding change neither happen.

if it's a boolean and it's false, that means the key will take random value. That basically means it's can not be decrypted easily. You have try 64.000 times to decrypt it, which stands all numeric values you can pass as second argument.

## Hash Module:

The second module is "hash.js" module and it has 3 functions, which is "hash30(), hash60(), hash90()". They generate new hashed string which has 30, 60 or 90 characters and lost it's original value.

Warning!

Because of that, you should be aware of. If security is not your main goal, if you have to convert to older value of a text in some situations, then you shouldn't use it! If your client want to secure their password by the way that even you wouldn't figure out it's real value, then use it. 

They also have same synthax:

```javascript
let hashedText1 = hash30("this is a sample text");
let hashedText2 = hash60("this is a sample text");
let hashedText3 = hash90("this is a sample text");
```

This returns same text for same input and lose it's original value.