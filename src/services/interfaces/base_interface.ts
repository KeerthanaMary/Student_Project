export interface IBase<T>
{
     createNew(data:T):Promise<T>;
     getAll():Promise<T[]>;
     updateOne(id:any,data:T);
     deleteOne(data:T);
}
