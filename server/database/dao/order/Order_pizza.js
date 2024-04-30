const { COLLECTION, MAIN_DATABASE, MongoDatabaseClient } = require("../../client/mongodb_db_client");

const insertOrder = (
    userId,
    pizzaType,
    price,
    size,
    onSuccess,
    onFailure
) => {
    MongoDatabaseClient
        .fromDatabase(MAIN_DATABASE)
        .collection(COLLECTION.ORDERS)
        .achieve(async (collection) => {
           const result = await collection.insertOne({
                userId: userId,
                pizzaType: pizzaType,
                size: size,
                price: price,
                placed: false
            });

           return await collection.findOne({ _id: result.insertedId });
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

module.exports = insertOrder;
