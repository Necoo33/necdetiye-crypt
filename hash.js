function hash30(targetOfHash){
    let spliting = targetOfHash.split("");

    spliting.splice(3, 0, "2", "3", "m", "j", "s");

    spliting.unshift("sf");

    if(targetOfHash.length < 8){
        spliting.splice(4, 0, "sd", "gf", "ljh", "pds", "las");
    } else if(targetOfHash.length < 14){
        spliting.splice(8, 0, "fgf", "zqef", "mbh", "yug", "ilh");
    } else if(targetOfHash.length > 14){
        spliting.splice(12, 0, "fgf", "zqef", "mbh", "yug", "ilh");
    }

    if(spliting.length > 30){
        spliting.splice(28, 0, "krq", "sao", "297", "32", "abc");
    } else if(spliting.length > 20){
        spliting.splice(18, 0, "921", "uys", "321", "893", "asfhdfg")
    } else{
        spliting.splice(10, 0, "739", "oql", "sds", "465", "mvka");
    }

    spliting = spliting.join("").split("").reverse();

    let hashedText = [];

    for(let i = 0; i < 30; i++){
        i % 2 === 0 && typeof spliting[i] === "string" ? hashedText.push(spliting[i].toUpperCase()) : hashedText.push(spliting[i]);
    }

    return hashedText.join("");
}

// -----------------------------------------------------------------------------------------------------------------------

function hash60(targetOfHash){
    let spliting = targetOfHash.split("");

    spliting.splice(3, 0, "2", "3", "m", "j", "s", "o", "8", "g", "3", "0");

    spliting.unshift("s9k18d3a");

    if(targetOfHash.length < 8){
        spliting.splice(9, 0, "sd", "gf", "ljh", "pds", "las");
    } else if(targetOfHash.length < 14){
        spliting.splice(16, 0, "fgf", "zqef", "mbh", "yug", "ilh");
    } else if(targetOfHash.length > 14){
        spliting.splice(22, 0, "fgf", "zqef", "mbh", "yug", "ilh");
    }

    if(spliting.length > 40){
        spliting.splice(37, 0, "krq1", "sa2o", "2k7q", "3s2h", "1ab2c");
    } else if(spliting.length > 20){
        spliting.splice(29, 0, "9b2p1", "3uy1s", "3c21a", "8t9h3", "asfhdfg")
    } else{
        spliting.splice(19, 0, "7s39", "o2ql", "sgds", "4d6a5", "m2vk3a");
    }

    spliting = spliting.join("").split("").reverse();

    let hashedText = [];

    for(let i = 0; i < 60; i++){
        i % 2 !== 0 && typeof spliting[i] === "string" ? hashedText.push(spliting[i].toUpperCase()) : hashedText.push(spliting[i]);
    }

    return hashedText.join("");
}

// --------------------------------------------------------------------------------------------------------

function hash90(targetOfHash){
    let spliting = targetOfHash.split("");

    spliting.splice(3, 0, "2", "3", "m", "j", "s", "o", "8", "g", "3", "0", "i", "r", "1", "0", "f", "a");

    spliting.unshift("s9k18d3a");

    if(targetOfHash.length < 8){
        spliting.splice(9, 0, "s3d1", "7g5f", "l5j3h", "p1d2s", "3la9s");
    } else if(targetOfHash.length < 14){
        spliting.splice(16, 0, "fg2f", "zqe5f", "2m6bh9", "yu3g", "i1l4h7");
    } else if(targetOfHash.length > 14){
        spliting.splice(22, 0, "fg4f", "z2qe3f", "7m59b4h", "4yu5g", "2i1l2h");
    }

    if(spliting.length > 40){
        spliting.splice(37, 0, "krq1", "s1a2ok", "2k7q", "32ps2h", "1ab2c");
    } else if(spliting.length > 20){
        spliting.splice(29, 0, "9b2pd1", "3u5y15s", "3c212a6", "8t98h3", "a2sf4h3df3g")
    } else{
        spliting.splice(19, 0, "7s3k9", "o2q8pl", "s9g4d1s", "4d6a5", "1m2vk3a9", "8fn3hsf");
    }

    spliting = spliting.join("").split("").reverse();

    let hashedText = [];

    for(let i = 0; i < 90; i++){
        i % 2 === 0 && typeof spliting[i] === "string" ? hashedText.push(spliting[i].toUpperCase()) : hashedText.push(spliting[i]);
    }

    return hashedText.join("");
}

module.exports = {
    hash30,
    hash60,
    hash90
}