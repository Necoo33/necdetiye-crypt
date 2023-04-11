let { Buffer } = require("node:buffer");

// ------------------------------ Encryption-Decryption Way 1 -----------------------------------------------

function encrypt1(encryptTarget, key = 0) {
    let buffering = Buffer.from(encryptTarget, "utf-8");
    let base64Encoding = buffering.toString("base64");

    let defineKey;

    if(key === "true" || key === "false"){
        Boolean(key);
    }

    if(typeof key === "string"){
        if(key.length > 200){
            throw new Error("key can not be bigger than 200 characters");
        } 
    
        defineKey = Buffer.from(key).toJSON().data.reduce((a, b) => a + b);
    } else if(typeof key === "number"){
        if(key > 64000){
            throw new Error("key cannot be bigger than 64000");
        }

        defineKey = key;
    } else if(typeof key === "boolean"){
        key === true ? defineKey = 0 : defineKey = Math.trunc(Math.random()*64000) + 150000;
    }
    
    if(typeof key !== "string" && typeof key !== "number" && typeof key !== "boolean"){
        throw new Error("key should be a string or number");
    };

    let decimalValues = Buffer.from(base64Encoding, "base64")
        .toString("utf-8")
        .split("")
        .map((param) => param.charCodeAt(0));

    let manipulateDecimalValues = decimalValues.map((param) => param + defineKey);

    let encryptedText = manipulateDecimalValues
        .map((param) => String.fromCodePoint(param))
        .join("");

    return Buffer.from(encryptedText).toString("base64");
}

function decrypt1(encryptedText, key = 0) {
    let base64Decoding = Buffer.from(encryptedText, "base64").toString("utf-8");

    let defineKey;

    if(typeof key === "string"){
        defineKey = Buffer.from(key).toJSON().data.reduce((a, b) => a + b);
    } else if(typeof key === "number"){
        defineKey = key;
    } else if(typeof key === "boolean"){
        key === true ? defineKey = 0 : defineKey = Math.trunc(Math.random()*64000);
    };
  
    let spliting = base64Decoding.split("");
  
    let mapping = spliting
      .map((param) => param.charCodeAt(0))
      .map((param) => param - defineKey);
  
    let decryptedText = mapping.map(function(param){
        try{
            return param = String.fromCodePoint(param)
        } catch(error){
            return ["abcçd".split("").sort(a => Math.random() - 0.5).join("")];
        }
    }).join("");
    
    return decryptedText;
}

// ------------------------------ Encryption-Decryption Way 2 -----------------------------------------------

function encrypt2(encryptTarget, key = 0) {
    let buffering = Buffer.from(encryptTarget, "ucs2");

    let defineKey;

    if(key === "true" || key === "false"){
        Boolean(key);
    }

    if(typeof key === "string"){
        if(key.length > 200){
            throw new Error("key can not be bigger than 200 characters");
        } 
    
        defineKey = Buffer.from(key).toJSON().data.reduce((a, b) => a + b);
    } else if(typeof key === "number"){
        if(key > 64000){
            throw new Error("key cannot be bigger than 64000");
        }

        defineKey = key;
    } else if(typeof key === "boolean"){
        key === true ? defineKey = 0 : defineKey = Math.trunc(Math.random()*64000) + 150000;
    }
    
    if(typeof key !== "string" && typeof key !== "number" && typeof key !== "boolean"){
        throw new Error("key should be a string or number");
    };

    let manipulateDecimalValues = buffering.map((param) => param + defineKey);

    return Buffer.from(manipulateDecimalValues, "ucs2").toString("base64");
}

function decrypt2(decryptTarget, key = 0) {
    let buffering = Buffer.from(decryptTarget, "base64");

    let defineKey;

    if(key === "true" || key === "false"){
        Boolean(key);
    }

    if(typeof key === "string"){
        if(key.length > 200){
            throw new Error("key can not be bigger than 200 characters");
        } 
    
        defineKey = Buffer.from(key).toJSON().data.reduce((a, b) => a + b);
    } else if(typeof key === "number"){
        if(key > 64000){
            throw new Error("key cannot be bigger than 64000");
        }

        defineKey = key;
    } else if(typeof key === "boolean"){
        key === true ? defineKey = 0 : defineKey = Math.trunc(Math.random()*64000) + 150000;
    }
    
    if(typeof key !== "string" && typeof key !== "number" && typeof key !== "boolean"){
        throw new Error("key should be a string or number");
    };

    let manipulateDecimalValues = buffering.map((param) => param - defineKey);

    return Buffer.from(manipulateDecimalValues).toString("ucs2");
}

// ------------------------------ Encryption-Decryption Way 3 -----------------------------------------------

function encrypt3(encryptTarget, key = 0) {
    let buffering = Buffer.from(encryptTarget, "utf16le");

    let defineKey;

    if(key === "true" || key === "false"){
        Boolean(key);
    }

    if(typeof key === "string"){
        if(key.length > 200){
            throw new Error("key can not be bigger than 200 characters");
        } 
    
        defineKey = Buffer.from(key).toJSON().data.reduce((a, b) => a + b);
    } else if(typeof key === "number"){
        if(key > 64000){
            throw new Error("key cannot be bigger than 64000");
        }

        defineKey = key;
    } else if(typeof key === "boolean"){
        key === true ? defineKey = 0 : defineKey = Math.trunc(Math.random()*64000) + 150000;
    }
    
    if(typeof key !== "string" && typeof key !== "number" && typeof key !== "boolean"){
        throw new Error("key should be a string or number or boolean");
    };

    let manipulateDecimalValues = buffering.map((param) => param + defineKey);

    return Buffer.from(manipulateDecimalValues, "utf16le").toString("ucs2");
}

function decrypt3(decryptTarget, key = 0) {
    let buffering = Buffer.from(decryptTarget, "ucs2");

    let defineKey;

    if(key === "true" || key === "false"){
        Boolean(key);
    }

    if(typeof key === "string"){
        if(key.length > 200){
            throw new Error("key can not be bigger than 200 characters");
        } 
    
        defineKey = Buffer.from(key).toJSON().data.reduce((a, b) => a + b);
    } else if(typeof key === "number"){
        if(key > 64000){
            throw new Error("key cannot be bigger than 64000");
        }

        defineKey = key;
    } else if(typeof key === "boolean"){
        key === true ? defineKey = 0 : defineKey = Math.trunc(Math.random()*64000) + 150000;
    }
    
    if(typeof key !== "string" && typeof key !== "number" && typeof key !== "boolean"){
        throw new Error("key should be a string or number or boolean");
    };

    let manipulateDecimalValues = buffering.map((param) => param - defineKey);

    return Buffer.from(manipulateDecimalValues).toString("utf16le");
}

// ------------------------------ Encryption-Decryption Way 4 -----------------------------------------------

function encrypt4(encryptTarget, key = 0) {
    let buffering = Buffer.from(encryptTarget, "utf8");

    let defineKey;

    if(key === "true" || key === "false"){
        Boolean(key);
    }

    if(typeof key === "string"){
        if(key.length > 200){
            throw new Error("key can not be bigger than 200 characters");
        } 
    
        defineKey = Buffer.from(key).toJSON().data.reduce((a, b) => a + b);
    } else if(typeof key === "number"){
        if(key > 64000){
            throw new Error("key cannot be bigger than 64000");
        }

        defineKey = key;
    } else if(typeof key === "boolean"){
        key === true ? defineKey = 0 : defineKey = Math.trunc(Math.random()*64000) + 150000;
    }
    
    if(typeof key !== "string" && typeof key !== "number" && typeof key !== "boolean"){
        throw new Error("key should be a string or number or boolean");
    };

    let manipulateDecimalValues = buffering.map((param) => param + defineKey);

    return Buffer.from(manipulateDecimalValues, "hex").toString("base64");
}

function decrypt4(decryptTarget, key = 0) {
    let buffering = Buffer.from(decryptTarget, "base64");

    let defineKey;

    if(key === "true" || key === "false"){
        Boolean(key);
    }

    if(typeof key === "string"){
        if(key.length > 200){
            throw new Error("key can not be bigger than 200 characters");
        } 
    
        defineKey = Buffer.from(key).toJSON().data.reduce((a, b) => a + b);
    } else if(typeof key === "number"){
        if(key > 64000){
            throw new Error("key cannot be bigger than 64000");
        }

        defineKey = key;
    } else if(typeof key === "boolean"){
        key === true ? defineKey = 0 : defineKey = Math.trunc(Math.random()*64000) + 150000;
    }
    
    if(typeof key !== "string" && typeof key !== "number" && typeof key !== "boolean"){
        throw new Error("key should be a string or number or boolean");
    };

    let manipulateDecimalValues = buffering.map((param) => param - defineKey);

    return Buffer.from(manipulateDecimalValues, "base64").toString("utf8");
}

module.exports = {
    encrypt1,
    encrypt2,
    encrypt3,
    encrypt4,
    decrypt1,
    decrypt2,
    decrypt3,
    decrypt4
}