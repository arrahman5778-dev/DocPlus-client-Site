import React from "react";

const Blog = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" border-4 rounded m-2 text-left  w-1/2 mx-auto p-5 my-5">
        <h3 className="text-xl  ">
          1. Difference between authorization and authentication?
        </h3>
        <p>
          <span className="	font-medium	">Authentication :</span> Authentication
          is the process of verifying who someone is, whereas authorization is
          the process of verifying what specific applications, files, and data a
          user has access to.Authentication is used to verify that users really
          are who they represent themselves to be
        </p>

        <p>
          <span className="	font-medium	">Authorization :</span> Once this has
          been confirmed, authorization is then used to grant the user
          permission to access different levels of information and perform
          specific functions, depending on the rules established for different
          types of users.
        </p>
      </div>
      <div className=" border-4 rounded m-2 text-left  w-1/2 mx-auto p-5 my-5">
        <h3 className="text-xl">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Firebase can be used for the following benefits: Firebase manages all
          the data in the database real-time. Thus, exchanging data from
          database is easy and fast. So, if you want to develop mobile apps like
          live streaming, chat messaging, etc., you can use Firebase.
        </p>
      </div>
      <div className=" border-4 rounded m-2 text-left  w-1/2 mx-auto p-5 my-5">
        <h3 className="text-xl">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Firebase can be used for the following benefits: Firebase manages all
          the data in the database real-time. Thus, exchanging data from
          database is easy and fast. So, if you want to develop mobile apps like
          live streaming, chat messaging, etc., you can use Firebase.
        </p>
      </div>
    </div>
  );
};

export default Blog;
