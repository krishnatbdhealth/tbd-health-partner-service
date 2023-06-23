import { getAllFilesKit,  getFileById } from "../dao/documentFileDao";

export function getFilesbyIdService(fileId: string) {
  
    return getFileById(fileId);
  }

  export function getFileskitService(kitId : string) {
  
    return getAllFilesKit(kitId);
  }