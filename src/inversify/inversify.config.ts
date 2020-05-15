import {Container} from 'inversify';
import TYPES from '../types/types';
import { StudentService } from '../services/student_service';
import { StandardService } from '../services/standard_service';
import { BooksService } from '../services/books_service';
import { BookTakenInfoService } from '../services/books_taken_info_service';
import { SchoolService } from '../services/schools_service';


const container = new Container();

container.bind<StudentService>(TYPES.studentRepository ).to(StudentService).inSingletonScope();
container.bind<StandardService>(TYPES.classRepository).to(StandardService).inSingletonScope();
container.bind<BooksService>(TYPES.booksRepository ).to(BooksService).inSingletonScope();
container.bind<BookTakenInfoService>(TYPES.booksInfoRepository).to(BookTakenInfoService).inSingletonScope();
container.bind<SchoolService>(TYPES.schoolsRepository ).to(SchoolService).inSingletonScope();

export default container;