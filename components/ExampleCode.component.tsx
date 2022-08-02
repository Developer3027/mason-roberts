import styles from "../styles/carWash.module.css";

export default function ExampleCode() {
  return (
    <>
      <h6 className={styles.carwash__code}>
        {` import { fnCreateApi } from "./fnCreateApi"; `}
      </h6>
      <h6 className={styles.carwash__code}>
        {` import { MongoClient, MongoInvalidArgumentError } from "mongodb"; `}
      </h6>
      <h6 className={styles.carwash__code}>
        {` import { ampDomain, ampTenant, ampKey, mongoTestUri } from "../utils/config"; `}
      </h6>
      <h6 className={styles.carwash__code}>{`*`}</h6>
      <h6 className={styles.carwash__code}>{` const dataEndpoints = { `}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`endpoint: "balance-transactions", `}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`dbTable: "balanceTransactions", `}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`dynamicOrder: "transactionId", `}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`dateField: "createdDate", `}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`retrievedDate: "1900-01-01T00:00:00.000Z", `}</h6>
      <h6 className={styles.carwash__code__tab}>{`recordsWanted: 2000, `}</h6>
      <h6 className={styles.carwash__code}>{`}; `}</h6>
      <h6 className={styles.carwash__code}>{`*`}</h6>

      <h6 className={styles.carwash__code}>{`(async function () {`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const client = new MongoClient(mongoTestUri);`}</h6>
      <h6 className={styles.carwash__code__tab}>
        {`const database = client.db\(Amp\)`};
      </h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const variableDateField: string = dataEndpoints.dateField;`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const dynamicEndpoint: string = dataEndpoints.endpoint;`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const dynamicOrder: string = dataEndpoints.dynamicOrder;`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const retrievedDate: string = dataEndpoints.retrievedDate;`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const recordsWanted: number = dataEndpoints.recordsWanted;`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const db = database.collection\(dataEndpoints.dbTable\);`}</h6>
      <h6
        className={styles.carwash__code__tab}>{`let recordsBatch: number;`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`let recordsTotal: number = 0;`}</h6>
      <h6 className={styles.carwash__code__tab}>{`let j: number = 0;`}</h6>
      <h6 className={styles.carwash__code}>{`*`}</h6>
      <h6 className={styles.carwash__code__tab}>{`do {`}</h6>
      <h6
        className={
          styles.carwash__code__tab2
        }>{`const api = fnCreateApi({`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`domain: ampDomain,`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`tenant: ampTenant,`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`key: ampKey,`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`});`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const apiData = await api(dynamicEndpoint, {`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`condition: {`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`left: {`}</h6>
      <h6
        className={
          styles.carwash__code__tab3
        }>{`column: variableDateField,`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`},`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`operator: "GT",`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`right: retrievedDate,`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`},`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`orderBys: [`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`{`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`column: dynamicOrder,`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`direction: "ASC",`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`nulls: "NULLS FIRST",`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`},`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`{`}</h6>
      <h6
        className={
          styles.carwash__code__tab3
        }>{`column: variableDateField,`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`direction: "ASC",`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`nulls: "NULLS FIRST",`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`},`}</h6>
      <h6 className={styles.carwash__code__tab}>{`],`}</h6>
      <h6 className={styles.carwash__code__tab}>{`offset: j,`}</h6>
      <h6 className={styles.carwash__code__tab}>{`limit: 1000,`}</h6>
      <h6 className={styles.carwash__code__tab}>{`});`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const apiValue = apiData.value;`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`recordsBatch = apiValue.length;`}</h6>
      <h6 className={styles.carwash__code__tab}>{`if (apiValue) {`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`async function run() {`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`try {`}</h6>
      <h6
        className={styles.carwash__code__tab4}>{`await client.connect();`}</h6>
      <h6
        className={
          styles.carwash__code__tab4
        }>{`await db.insertMany(apiValue);`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`} catch (error) {`}</h6>
      <h6
        className={
          styles.carwash__code__tab4
        }>{`console.log("write err: ", error);`}</h6>
      <h6
        className={
          styles.carwash__code__tab4
        }>{`if (MongoInvalidArgumentError) {`}</h6>
      <h6
        className={
          styles.carwash__code__tab4
        }>{`console.log("records wanted are more than available");`}</h6>
      <h6 className={styles.carwash__code__tab4}>{`await client.close();`}</h6>
      <h6 className={styles.carwash__code__tab4}>{`process.exit(0);`}</h6>
      <h6 className={styles.carwash__code__tab3}>{`}`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`}`}</h6>
      <h6 className={styles.carwash__code__tab}>{`}`}</h6>
      <h6 className={styles.carwash__code__tab}>{`run();`}</h6>
      <h6 className={styles.carwash__code__tab}>{`j = j + 1000;`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`recordsTotal = recordsTotal + recordsBatch;`}</h6>
      <h6 className={styles.carwash__code__tab2}>{`}`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`} while (recordsTotal <= recordsWanted);`}</h6>
      <h6 className={styles.carwash__code}>{`*`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`const num = await db.estimatedDocumentCount();`}</h6>
      <h6
        className={
          styles.carwash__code__tab
        }>{`console.log("got \${recordsTotal\} records");`}</h6>
      <h6 className={styles.carwash__code__tab}>{`})(); `}</h6>
    </>
  );
}
