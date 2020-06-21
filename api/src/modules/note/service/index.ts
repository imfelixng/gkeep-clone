import {
  createNoteRepository,
  updateNoteRepository,
  getNoteRepository,
  deleteNoteRepository,
} from "../repository/index.ts";

const createNoteSerivce = async (creator: any, data: any) => {
    const noteCreated = await createNoteRepository({
      ...data,
      status: "ACTIVE",
      status_time: new Date().toISOString(),
      _creator: creator._id,
      _createdAt: new Date().toISOString(),
    });
    return {
      _id: noteCreated['$oid'],
    };
};

const updateNoteService = (filter: any, data: any) => {
  return updateNoteRepository(filter, data);
};

const getNoteService = (filter: any) => {
  return getNoteRepository(filter);
};

const deleteNoteService = (filter: any) => {
  return deleteNoteRepository(filter);
};

export {
  createNoteSerivce,
  updateNoteService,
  getNoteService,
  deleteNoteService,
};