const {MongoClient, ServerApiVersion} = require("mongodb");

const MONGO_URI = "mongodb://127.0.0.1:27017";

const MAIN_DATABASE = "pizza-booking";

const COLLECTION = {
    USERS: 'USERS',
    ORDERS: 'ORDERS'
}

class MongoDatabaseClient {

    constructor(databaseName) {
        this.actions = [
            [{ type: 'DATABASE', payload: databaseName }]
        ];
        this.onSuccessCallback = null;
        this.onConnectionFailureCallback = null;
        this.onAnyExceptionCallback = null;
    }

    collection = (collectionName) => {
        this.actions[this.actions.length - 1].push({ type: 'COLLECTION', payload: collectionName });
        return this;
    }

    achieve = (collectionResultCallback) => {
        this.actions[this.actions.length - 1].push({ type: 'ACHIEVE', payload: collectionResultCallback });
        return this;
    }

    setDatabase = (databaseName) => {
        this.actions.push(
            [{ type: 'DATABASE', payload: databaseName }]
        )
        return this;
    }

    onSuccess = fn => {
        this.onSuccessCallback = fn;
        return this;
    }

    onConnectionFailure = fn => {
        this.onConnectionFailureCallback = fn;
        return this;
    }

    onAnyException = fn => {
        this.onAnyExceptionCallback = fn;
        return this;
    }

    accomplish = () => {
        (async () => {
            const client = new MongoClient(MONGO_URI);

            try {
                await client.connect();
            } catch (err) {
                if (this.onConnectionFailureCallback !== null) {
                    this.onConnectionFailureCallback(err);
                } else if (this.onAnyExceptionCallback !== null) {
                    this.onAnyExceptionCallback(err);
                }
            }

            try {
                let database = null;
                let collection = null;
                let output = null;

                for (let i = 0; i < this.actions.length; i++) {
                    for (let j = 0; j < this.actions[i].length; j++) {
                        const { type, payload } = this.actions[i][j];

                        switch (type) {
                            case 'DATABASE':
                                database = await client.db(payload);
                                break;
                            case 'COLLECTION':
                                collection = await database.collection(payload);
                                break;
                            case 'ACHIEVE':
                                output = await payload(collection, output);
                                break;
                        }
                    }
                }

                if (this.onSuccessCallback !== null) {
                    this.onSuccessCallback(output);
                }
            } catch (err) {
                if (this.onAnyExceptionCallback !== null) {
                    this.onAnyExceptionCallback(err);
                }
            }

            try {
                await client.close();
            } catch (err) {
                if (this.onAnyExceptionCallback !== null) {
                    this.onAnyExceptionCallback(err);
                }
            }
        })();
    }

    static fromDatabase = databaseName => {
        return new MongoDatabaseClient(databaseName);
    }
}

module.exports = {
    MongoDatabaseClient,
    COLLECTION,
    MAIN_DATABASE
}

