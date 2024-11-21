abstract class Resource<T> {
    data : T[];
  constructor(data : T[]) {
    this.data = data;
  }
} 


type DataType = {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
 }

 const mockUserData : DataType[] = [
  {
  id: 1,
  name: "Lane Mcdonald",
  phone: "1-980-603-4363",
  email: "dui@aol.com",
  address: "P.O. Box 895, 4432 Placerat, Avenue",
  },
  {
  id: 2,
  name: "Emma Ford",
  phone: "(472) 855-7514",
  email: "aliquam.ornare@protonmail.net",
  address: "P.O. Box 311, 427 Egestas Av.",
  
  },
  {
  id: 3,
  name: "Louis Juarez",
  phone: "1-895-966-2657",
  email: "venenatis.lacus@outlook.net",
  address: "Ap #125-478 Sit Av.",
  },
  {
  id: 4,
  name: "Zorita Mason",
  phone: "1-262-419-4287",
  email: "arcu.vel@protonmail.net",
  address: "P.O. Box 631, 1093 Metus Street",
  },
  {
  id: 5,
  name: "Harriet Acevedo",
  phone: "1-788-618-2639",
  email: "consequat.dolor@protonmail.net",
  address: "P.O. Box 769, 5046 Pellentesque, Rd.",
  }
 ];

class UserModel extends Resource<DataType> {

  public get(): DataType[] {
    return this.data;
  }

  public add(newData:DataType) : DataType[]{
    this.data=this.data.concat(newData);
    return this.data;
  }

  public getOne(id:number) : DataType|undefined {
    return this.data.find(item=> item.id === id);
  }

  public update<K extends keyof DataType>(
    key: K,
    val: DataType[K],
    partialData: Partial<DataType>
  ): DataType | undefined {
    const target = this.data.find(item => item[key] === val);
    if (target) {
      Object.assign(target, partialData);
      return target; 
    }
    return undefined;
  }

   public delete<K extends keyof DataType>(
    key: K, 
    val: DataType[K]) 
    : DataType | undefined {
    const items = this.data.find(item => item[key] === val);
    if (items) {
      this.data.filter(item => item ! == item)
      Object.assign(this.data);
      return items; 
    }
    return undefined;
   }


      
constructor (data : DataType[]) {

  super(data);
           
  }

}

const users = new UserModel([...mockUserData]);

console.log('users.get()', users.get()); 

const newObj : DataType = {
  id: 6,
  name: "Ivan Petrov",
  phone: "1-788-618-2639",
  email: "consequat.dolor@protonmail.net",
  address: "P.O. Box 769, 5046 Pellentesque, Rd.",};

console.log('users add',users.add(newObj));

console.log('users.getOne()', users.getOne(4));

console.log('users.update()', users.update('id', 4, { name: 'Sergey' }));

console.log('users.update()', users.update('email', 'dui@aol.com', { address: 'Moscow, Russia', 
phone: '12345678910' }));

 console.log('users.update()', users.update('name', 'Leo Tolstoy', { address: 'Yasnaya polyana, Russia' }));

console.log('users.delete()', users.delete("name", "Ivan Petrov"));

console.log('users.delete()', users.delete("id", 222));


