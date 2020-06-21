import { Note } from "../../../config/db/mongo/index.ts";

const createNoteRepository = async (data: any) => {
  return Note!.insertOne(data);
};

const updateNoteRepository = async (filter: any, data: any) => {
  return Note!.updateOne(filter, { $set: data });
};

const getNoteRepository = async (filter: any) => {
  return Note!.find(filter);
};

const deleteNoteRepository = async (filter: any) => {
  return Note!.deleteOne(filter);
};


export {
  createNoteRepository,
  updateNoteRepository,
  getNoteRepository,
  deleteNoteRepository,
};