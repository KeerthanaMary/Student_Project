export interface IBase<T>
{
     create(data:T):Promise<T>;
     getAll():Promise<T[]>;
     update(id:any,data:T);
     delete(data:T);
}
