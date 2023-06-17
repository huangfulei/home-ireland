"use client";

import React, { useCallback } from "react";
import { type User as FirebaseUser } from "firebase/auth";
import { FirebaseCMSApp, type Authenticator } from "firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

import { categoryCollection } from "@/app/admin/collections/category";
import { itemCollection } from "@/app/admin/collections/item";
import { firebaseConfig } from "@/firebase";

export default function CMS() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("flanders")) {
        throw Error("Stupid Flanders!");
      }

      console.log("Allowing access to", user?.email);
      // This is an example of retrieving async data related to the user
      // and storing it in the controller's extra field.
      const sampleUserRoles = await Promise.resolve(["admin"]);
      authController.setExtra(sampleUserRoles);

      return true;
    },
    [],
  );

  return (
    <FirebaseCMSApp
      name={"Admin Page"}
      basePath={"/admin"}
      authentication={myAuthenticator}
      collections={[itemCollection, categoryCollection]}
      firebaseConfig={firebaseConfig}
    />
  );
}
