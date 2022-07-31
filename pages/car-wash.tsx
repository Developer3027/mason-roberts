import { ReactElement } from "react";
import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout.component";

import styles from "../styles/carWash.module.css";


export default function CarWash() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.carwash__wrapper}>
            <div className="flex justify-start items-center mb-2 w-full">
              <Image
                src="/images/carwash.png"
                alt="car wash"
                width={100}
                height={80}
              />
              <h1 className="text-2xl underline pl-4">
                <a href="https://carwash-black.vercel.app" rel="noopener" target="__blank">
                  visit site
                </a>
              </h1>
            </div>
            <p className="py-2">
              In May 2022, I started a contract position for Autobell here in
              Charlotte, NC. The pay was little but I took the position to gain
              some experience. I let them know up front that I thought of my
              self as junior but I knew Javascript, MongoDB and some Typescript,
              SQL.
            </p>
            <p className="py-2">
              The first thing my boss wanted me to do was write a NodeJS script
              in Typescript to reach out to an list of endpoints to retrieve
              data and dump that data into an on premises MongoDB database. The
              data retrieved from the api calls was an array of objects coming
              from a Postgres database. I will refer to those objects as
              records. The api would allow for 1000 records at a time and the
              ability to pass conditions to get the data you wanted back. I
              could pass &ldquo;createdDate GT today&ldquo; to get records back
              greater than todays date.
            </p>
            <p className="py-2">
              There was a long list of endpoints to hit and my boss needed it
              set up to run automatically from a power shell command. Another
              thing to consider was that the condition fields were not always
              the same. Endpoints were sorted by different named id&apos;s and
              then passed the condition, but that was also varied depending on
              the endpoint.
            </p>
            <p className="py-2">
              So the script needed to search for a current Mongo collection. If
              there was one, it needed to grab the last record inserted and
              retrieve that createDate, or equivalent. Then needed to make the
              api call, passing the required conditions, and dumping the return
              into the Mongo collection if there is one. If not it would create
              one. If there were more than 1000 records then it needed to do it
              again until it had all the records. Once that call was done, it
              needed to move to the next endpoint and repeat the process.
              Sometimes there may be a need to truncate the data in a
              collection. The script needed to be aware of this and complete
              that task as well.
            </p>
            <p className="py-2">
              A for loop and a do while loop later with much head scratching and
              testing, I had a working script and several tools for dev that
              worked better than I had expected. It was really nice that I did
              not have to start from scratch. He had code that assembled the api
              uri and returned records when I started. The main script had two
              modular parts. One created the uri for the api and the other took
              it, made the call, and wrote to Mongo. The truncate function was
              modular and set up with a flag to either look for an incoming
              request or not so I could use it in a dev environment. Another
              tool made an api call for a specified number of records to a
              specific endpoint.
            </p>
            <p className="py-2">
              The second half of this tour was to begin putting together a web
              app for internal reporting. There had been discussion on this but
              nothing was ever nailed down. There was no design work done. It
              was suggested that I model after the{" "}
              <a href="https://www.statwatch.com" target="__blank">
                Stat Watch
              </a>{" "}
              app and they have a website. Data was in process. They knew for
              sure that they wanted to use a version of the MERN stack and that
              it had to be secured through the Microsoft Identity Platform. This
              meant Azure and MSAL.
            </p>
            <p className="py-2">
              I used NextJS to build with as it offered the most options and
              still be within the MERN stack family. The app features store
              cards that display general data and the current weather. Weather
              is pulled from open weather map api. The weather forecast for the
              day is also present. There are several graphs that display cars
              washed, the best hour, products or services, the top wash services
              per hour and labor. A drop down at the top allows to currently
              select between two stores. Page loads data for Auto. Select A29 to
              see data for that store.
            </p>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/images/carwash/Screenshot-2022-07-28-102645.png"
                alt="car wash home"
                width={450}
                height={400}
              />
            </div>
            <p className="py-2">
              Authentication is handled through Microsoft. I set up an Azure
              account and using the default tenant, registered an application. I
              then created several users. In the app registration for the
              registered app I created several app roles and then assigned those
              users to roles in the enterprise app section. This allowed a role
              to be passed in the token when auth was made. I then wrote code
              for next routing to use that role when routing to various parts. A
              store manager can access and see the daily reports for their store
              only. They can then print the report of save as a pdf.
            </p>
            <div className="flex justify-center items-center mb-12 w-full">
              <Image
                src="/images/carwash/Screenshot-2022-07-28-111407.png"
                alt="car wash home"
                width={450}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

CarWash.getLayout = function getLayout(CarWash: ReactElement) {
  return <MainLayout>{CarWash}</MainLayout>;
};