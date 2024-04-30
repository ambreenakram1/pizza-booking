const { COLLECTION, MAIN_DATABASE, MongoDatabaseClient } = require("../../client/mongodb_db_client");

const insertUser = (
    firstName,
    lastName,
    email,
    password,
    onSuccess,
    onFailure
) => {
    MongoDatabaseClient
        .fromDatabase(MAIN_DATABASE)
        .collection(COLLECTION.USERS)
        .achieve(async (collection) => {
            const result = await collection.insertOne({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });
            const newDocument = await collection.findOne({_id:result.insertedId});
            console.log(newDocument);
            return newDocument;
        })
        .onSuccess(payload => {
            onSuccess(payload);

        })
        .onAnyException(err => {
            console.log(err);
            onFailure(err);
        })
        .accomplish();
};

module.exports = insertUser;
