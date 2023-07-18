import React, { useState } from "react";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import add from "../Assets/addAvatar.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection } from "firebase/firestore";
import axios from "axios";

const Register = () => {
  const [err, setErr] = useState(false);
  const UserCollection=collection (db,"users")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });    
            //create user on firestore
           // change firestore rules to  'set allow: read, write: if request.auth != null' in firestore rules

          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });




            //create empty user chats on firestore
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="bg-[#A0C49D] h-[100vh] flex items-center justify-center">
      <div className="bg-white py-[20px] px-[60px] rounded-lg flex flex-col gap-[10px] items-center">
        <span className="text-[#A0C49D] font-bold text-2xl">
          Chat Made Easy
        </span>
        <span className="text-[#A0C49D]">Register</span>
        <form
          action=""
          className="flex flex-col gap-[15px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            className="p-[15px]  border-b-[#A0C49D] border-b-[1px]"
          />
          <input
            type="email"
            placeholder="mail"
            className="p-[15px]  border-b-[#A0C49D] border-b-[1px]"
          />
          <input
            type="password"
            placeholder="password"
            className="p-[15px]  border-b-[#A0C49D] border-b-[1px]"
          />
          <input
            type="file"
            id="file"
            className="p-[15px]  border-b-[#A0C49D] border-b-[1px] hidden"
          />
          <label
            htmlFor="file"
            className="flex text-[#A0C49D] text-sm gap-[10px] items-center cursor-pointer"
          >
            <img src={add} alt="" width={32} />
            <span>Add an Avavtar</span>
          </label>
          <button className="bg-[#A0C49D] border-none cursor-pointer font-bold text-white p-2">
            Sign Up
          </button>
        </form>
        <p className="text-[#A0C49D] mt-1 text-sm">
          You have an account? Login
        </p>
        {err && <span className="text-red-700">Something went wrong</span>}
      </div>
    </div>
  );
};

export default Register;



