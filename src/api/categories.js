/*
    사용자명과, url주소를 주면 해당 이미지를 특정 사이트에서 캡쳐한다.
*/
'use strict';

// 몽고디비 세팅
const { MongoClient } = require("mongodb");
const json = require('./new.json');
// const { fetch } = require("cross-fetch")
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
    "mongodb://192.168.0.2:27017";
const client = new MongoClient(uri);

async function insertCategories(list) {
    const database = client.db('speedJournal');
    const usersCol = database.collection('categories');

    await usersCol.insertMany(list)
    console.log("inserted")

    client.close();
}

async function findCategories( category) {
    const database = client.db('speedJournal');
    const usersCol = database.collection('categories');

    const query = { category: category };
    const options = {
        // sort returned documents in ascending order by title (A->Z)
        sort: { category: 1 },
        // Include only the `title` and `imdb` fields in each returned document
    };
    const cursor = usersCol.find(query, options);
    const result = await cursor.toArray();
    // console.log(result)

    return result
}

async function run (){
    // console.log(json)
    await insertCategories(json)

}
exports.findCategories = findCategories
// run()
