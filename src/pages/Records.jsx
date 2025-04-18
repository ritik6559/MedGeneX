import React, { useEffect, useState } from "react";
import { IconCirclePlus } from "@tabler/icons-react";
import RecordCard from "@/components/RecordCard";
import CreateRecordModal from "@/components/CreateRecordModal";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "@/context";
import { usePrivy } from "@privy-io/react-auth";


const Records = () => {

  const navigate = useNavigate();
  const { user } = usePrivy();
  const [userRecords, setUserRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    records,
    fetchUserRecords,
    createRecord,
    fetchUserByEmail,
    currentUser,
  } = useStateContext();

  useEffect(() => {
    if (user) {
      fetchUserByEmail(user.email.address);
      fetchUserRecords(user.email.address);
    }
  }, [user, fetchUserByEmail, fetchUserRecords]);

  useEffect(() => {
    setUserRecords(records);
    localStorage.setItem("userRecords", JSON.stringify(records));
  }, [records]);

  const handleOpenModel = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const createFolder = async (folderName) => {
    try {
      if (currentUser) {
        const newRecord = await createRecord({
          userId: currentUser.id,
          recordName: folderName,
          analysisResult: "",
          kanbanRecords: "",
          createdBy: user.email.address,
        });

        if (newRecord) {
          fetchUserRecords(user.email.address);
          handleCloseModal();
        }
      }
    } catch (e) {
      console.log(e);
      handleCloseModal();
    }
  };

  const handleNavigate = (name) => {
    const filteredRecords = userRecords.filter(
      (record) => record.recordName === name,
    );
    navigate(`/medical-records/${name}`, {
      state: filteredRecords[0],
    });
  };

  return (
    <div className={"flex flex-wrap gap-[26px]"} >
      <button
        type="button"
        className={"mt-6 inline-flex items-center gap-x-2 rounded-full border-neutral-700 border-2 bg-[#13131a] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"}
        onClick={handleOpenModel}
      >
        <IconCirclePlus />
        Create Record
      </button>

      <CreateRecordModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreate={createFolder}
      />

      <div
        className={"grid w-full sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"}
      >
        {userRecords?.map((record) => (
          <RecordCard
            key={record.recordName}
            record={record}
            onNavigate={handleNavigate}
          />
        ))}
      </div>

    </div>
  );
};

export default Records;
