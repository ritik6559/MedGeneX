import { createContext, useCallback, useState, useContext } from "react";
import { db } from "@/utils/dbConfig";
import { Users, Records } from "@/utils/schema";
import { eq } from "drizzle-orm";

const StateContext = createContext({});

export const StateContextProvider = ({ children }) => {
  const [ users, setUsers ] = useState([]);
  const [ records, setRecords ] = useState([]);
  const [ currentUser, setCurrentUser ]= useState(null);

  const fetchUsers = useCallback( async () => {
    try{
      const results = await db.select().from(Users).execute();
      setUsers(results);
    } catch (e) {
     console.log("Error fetching all ths users: ", e);
    }
  }, [])

  const fetchUserByEmail = useCallback( async ( email ) => {
    try {
      const result = await db.select().from(Users).where(eq(Users.createBy, email));

      console.log("hello: ",result.length);
      if (result.length > 0) {
        setCurrentUser(result[0]);
      }
    } catch (e) {
      console.log("Error fetching user by email: ", e);
    }
  }, [])

  const createUser = useCallback( async (user) => {
    try{
      const newUser = await db.insert(Users).values(user).returning().execute();
      setUsers((prev) => [...prev, newUser[0]]);
      setCurrentUser(newUser[0]);
      return newUser[0];
    } catch (e) {
     console.log("Error creating user: ", e);
     return null;
    }
  }, [])

  const fetchUserRecords = useCallback( async (email) => {
    try{
      const records = await db.select().from(Records).where(eq(Records.createdBy, email)).execute();
      setRecords(records);
    } catch (e){
      console.log("Error fetching records: ", e);
    }
  }, [])

  const createRecord = useCallback( async (record) => {
    try{
      const result = await db.insert(Records).values(record).returning({ id: Records.id }).execute();
      setRecords((prev) => [...prev, result[0]]);
      return result[0];
    } catch (e) {
     console.log("Error creating record: ", e);
      return null;
    }
  }, []);

  const updateRecord = useCallback(async (recordData) => {
    try {
      const { documentID, ...dataToUpdate } = recordData;
      console.log(documentID, dataToUpdate);
      const updatedRecords = await db
        .update(Records)
        .set(recordData)
        .where(eq(Records.id, documentID))
        .returning();
    } catch (error) {
      console.error("Error updating record:", error);
      return null;
    }
  }, []);

  return (
    <StateContext.Provider
      value={{
        users,
        records,
        fetchUsers,
        fetchUserByEmail,
        createUser,
        fetchUserRecords,
        createRecord,
        currentUser,
        updateRecord,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
