import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="border-b-[1px] border-[#EEEEEE]">
      <div className="p-[10px]">
        <input
          type="text"
          className="bg-transparent outline-none text-white placeholder:text-[lightgrey]"
          placeholder="find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span className="text-[red]">user not found</span>}
      {user && (
        <div className="p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#041C32]">
          <img
            src={user.photoURL}
            alt=""
            className="w-[50px] h-[50px] rounded-[50%] object-cover"
          />
          <div className="">
            <span className="font-[500] text-[18px]">{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
