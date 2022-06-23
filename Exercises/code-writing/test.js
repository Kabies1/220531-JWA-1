function message(S) {
    //this is default OUTPUT. You can change it.
    var result = -404;
    var temp = 0;
    // ad7A7a9
    for (var i = 0; i < S.length; i++) {
        if (!isNaN(parseInt(S[i]))) {
            temp = 0;
            console.log('here...', S[i]);
        } else {
            console.log('hahaha', S[i])
            if (S[i].toUpperCase() === S[i]) {
                console.log('Upper', S[i])
                temp = temp + 2;
            } else if (S[i].toLowerCase() === S[i]) {
                console.log('lower', S[i])
                temp = temp + 1;
            } else {
                temp = 0;
            }
        }
        console.log({temp})

    }

    //write your Logic here:
    result = temp;
    return result;
}


// INPUT [uncomment & modify if required]
// var temp = gets().trim('\n').split('\n');

var S = "ad7A7a9";


// OUTPUT [uncomment & modify if required]
console.log(message(S));