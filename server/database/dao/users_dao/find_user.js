const {COLLECTION, MAIN_DATABASE, MongoDatabaseClient} = require("../../client/mongodb_db_client");

const findUser = (
    email,
    onSuccess,
    onFailure
) => {
    MongoDatabaseClient
        .fromDatabase(MAIN_DATABASE)
        .collection(COLLECTION.USERS)
        .achieve(async collection => {
            return await collection.findOne({ email: email });
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

module.exports = findUser;
