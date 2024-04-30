const { COLLECTION, MAIN_DATABASE, MongoDatabaseClient } = require("../../client/mongodb_db_client");

const fetchOrders = (
    onSuccess,
    onFailure
) => {
    MongoDatabaseClient
        .fromDatabase(MAIN_DATABASE)
        .collection(COLLECTION.USERS)
        .achieve(async (collection) => {
            return await collection.find().toArray();

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

module.exports = fetchOrders;
