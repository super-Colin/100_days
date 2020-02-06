const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('no errors?!!');
    // We should be connected now

    // Create a db
    const db = client.db('kennel');
    // Create a collection in that db
    const collection = db.collection('dogs')

    // insert an item into that collection
    collection.insertOne({
        name: 'Chewy'
    }, (err, result) => {
        if(err){
            console.log('err is : --------');
            console.log(err);
        }
        if(result){
            console.log('result is : --------');
            // console.log(result);
            console.log('Added successfully');
            console.log('--------- - --------');
        }
        
    });
    const test = collection.find({}).toArray((err, result) => {
        if (err) throw err;
                    console.log('result is : --------');

        console.log(result);
    });
    console.log('test log is : ');
    console.log(test);
    console.log(result)

    // client.close();

    setTimeout( () =>{
        client.close();
    }, 4000);

});