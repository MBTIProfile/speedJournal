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


async function insertUser(text) {
    const database = client.db('speedJournal');
    const usersCol = database.collection('users');

    await usersCol.insertOne(text)

}
async function getUser(uid) {
    const database = client.db('speedJournal');
    const newsCn = database.collection('users');

    const result = await newsCn.findOne({uid:uid})
    return result
}

async function getUserInfo(userInfo) {
    let user = await getUser(userInfo.uid)
    if(!user){
        await insertUser(userInfo)
        user = await getUser(userInfo.uid)
    }

    // console.log("complete")

    return user
}

async function run (){
    // console.log(json)
    // await insertCategories(json)

}
// run()
exports.getUserInfo = getUserInfo