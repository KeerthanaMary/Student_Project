import { Container } from 'inversify';
import TYPES from '../types/types';
import { StudentRepository } from '../services/student_service';
import { StandardRepository } from '../services/standard_service';
import { BooksRepository } from '../services/books_service';
import { BookTakenInfoRepository } from '../services/books_taken_info_service';
import { SchoolRepository } from '../services/schools_service';
import { Repository, getRepository } from 'typeorm';
import { BookModel } from '../models/books_entity';
import { BooksInfoModel } from '../models/books_taken_info';
import { StudentModel } from '../models/student_entity';
import { StandardModel } from '../models/standard_entity';
import { SchoolModel } from '../models/schools_entity';


const container = new Container();

container.bind<StudentRepository>(TYPES.studentRepository).to(StudentRepository).inSingletonScope();
container.bind<StandardRepository>(TYPES.standardRepository).to(StandardRepository).inSingletonScope();
container.bind<BooksRepository>(TYPES.booksRepository).to(BooksRepository).inSingletonScope();
container.bind<BookTakenInfoRepository>(TYPES.booksInfoRepository).to(BookTakenInfoRepository).inSingletonScope();
container.bind<SchoolRepository>(TYPES.schoolsRepository).to(SchoolRepository).inSingletonScope();

container.bind<Repository<StudentModel>>(TYPES.studentORMRepository).toDynamicValue(() => {
    return getRepository(StudentModel);
}).inTransientScope();
container.bind<Repository<StandardModel>>(TYPES.standardORMRepository).toDynamicValue(() => {
    return getRepository(StandardModel);
}).inTransientScope();
container.bind<Repository<BookModel>>(TYPES.booksORMRepository).toDynamicValue(() => {
    return getRepository(BookModel);
}).inTransientScope();
container.bind<Repository<BooksInfoModel>>(TYPES.booksInfoORMRepository).toDynamicValue(() => {
    return getRepository(BooksInfoModel);
}).inTransientScope();
container.bind<Repository<SchoolModel>>(TYPES.schoolsORMRepository).toDynamicValue(() => {
    return getRepository(SchoolModel);
}).inTransientScope();

export default container;