function submitForm() {
    var database = firebase.database();
    var ref = database.ref('storage');
    var input = $("#input-field").val();
    randKey = Math.floor((Math.random() * 99) + 1);


    console.log(input);

    ref.on('value', function(snap){
        dict = snap.val();
    })

    // Search for an available key from the pool
    do {
        randKey = Math.floor((Math.random() * 999) + 1);
    } while (randKey in dict);

    // assign the input to the key value
    dict[randKey] = input;
    // present key to user in HTML
    document.getElementById("keyDisplay").innerHTML = "Your retrieval key: " + randKey;

    ref.set(dict);
    //var ref = database.ref('test');
    //ref.set(dict);
    //ref.on('value', function(snap){
    //    alert(snap.val());
    //})
   // ref.on('value', function(snap){
 //      alert(snap.val());
   // })
}

function submitKey() {
    // get key from user
    var key = $("#retrieve-field").val();

    // present corresponding text to user
    if (key in dict) {
        document.getElementById("output").innerHTML = "Your text: " + dict[key];
        delete dict[key];
    } else {
        document.getElementById("output").innerHTML = "This key does not contain any text!";
    }

}
